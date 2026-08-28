import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import test from 'node:test';

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

test('resume prints as two A4 pages', () => {
    const workDir = mkdtempSync(join(tmpdir(), 'resume-print-test-'));
    const outputPdf = join(workDir, 'resume.pdf');

    try {
        execFileSync(chrome, [
            '--headless=new',
            '--disable-gpu',
            '--no-pdf-header-footer',
            `--user-data-dir=${join(workDir, 'chrome-profile')}`,
            `--print-to-pdf=${outputPdf}`,
            pathToFileURL(resolve('resume.html')).href,
        ]);

        const pdf = readFileSync(outputPdf, 'latin1');
        const pages = pdf.match(/\/Type\s*\/Page\b/g) ?? [];
        const mediaBoxes = [...pdf.matchAll(/\/MediaBox\s*\[0 0 ([\d.]+) ([\d.]+)\]/g)];

        assert.equal(pages.length, 2);
        assert.equal(mediaBoxes.length, 2);
        for (const [, width, height] of mediaBoxes) {
            assert.ok(Math.abs(Number(width) - 594.96) < 0.1);
            assert.ok(Math.abs(Number(height) - 841.92) < 0.1);
        }
    } finally {
        rmSync(workDir, { recursive: true, force: true });
    }
});
