import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import test from 'node:test';

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function printResume(extraPrintCss = '') {
    const workDir = mkdtempSync(join(tmpdir(), 'resume-print-test-'));
    const outputPdf = join(workDir, 'resume.pdf');

    try {
        let resumePath = resolve('resume.html');
        if (extraPrintCss) {
            resumePath = join(workDir, 'resume.html');
            const html = readFileSync(resolve('resume.html'), 'utf8')
                .replace('</head>', `<style>@media print { ${extraPrintCss} }</style></head>`);
            writeFileSync(resumePath, html);
            copyFileSync(resolve('config.js'), join(workDir, 'config.js'));
        }

        execFileSync(chrome, [
            '--headless=new',
            '--disable-gpu',
            '--no-pdf-header-footer',
            `--user-data-dir=${join(workDir, 'chrome-profile')}`,
            `--print-to-pdf=${outputPdf}`,
            pathToFileURL(resumePath).href,
        ]);

        const pdf = readFileSync(outputPdf, 'latin1');
        return {
            pages: (pdf.match(/\/Type\s*\/Page\b/g) ?? []).length,
            mediaBoxes: [...pdf.matchAll(/\/MediaBox\s*\[0 0 ([\d.]+) ([\d.]+)\]/g)],
        };
    } finally {
        rmSync(workDir, { recursive: true, force: true });
    }
}

test('resume prints as two A4 pages', () => {
    const result = printResume();

    assert.equal(result.pages, 2);
    assert.equal(result.mediaBoxes.length, 2);
    for (const [, width, height] of result.mediaBoxes) {
        assert.ok(Math.abs(Number(width) - 594.96) < 0.1);
        assert.ok(Math.abs(Number(height) - 841.92) < 0.1);
    }
});

test('resume remains two pages with mobile font metrics', () => {
    const result = printResume(`
        body {
            font-family: Arial, sans-serif;
            font-size: 10.5pt;
            line-height: 1.4;
        }
    `);

    assert.equal(result.pages, 2);
});
