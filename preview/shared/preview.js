// Shared helpers for the design previews under /preview/.
// Preview-only: once a direction is approved, the pieces it needs move into the main site.
(function () {
    const PREVIEWS = [
        { id: 'a', name: 'Slate Minimal' },
        { id: 'b', name: 'Graphite' },
        { id: 'c', name: 'Bento Dark' },
        { id: 'd', name: 'Notebook' },
        { id: 'e', name: 'Editorial' },
        { id: 'f', name: 'Split Sticky' },
        { id: 'g', name: 'Slate Mix' },
        { id: 'h', name: 'Notebook Clean' },
        { id: 'i', name: 'Classic Slate' }
    ];

    const ICONS = {
        mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
        pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
        file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/>',
        copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
        check: '<path d="M20 6 9 17l-5-5"/>'
    };

    const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

    // Case studies drawn from config.js and earlier versions of the Blueinfo entry in git history.
    const CASE_STUDIES = [
        {
            id: 'c360',
            org: 'Vinsmart Future',
            period: '2026',
            en: {
                title: 'C360 Feature Store',
                context: 'Customer data from 8+ Vingroup P&Ls, to be served as one feature layer for modelling.',
                approach: 'Launched v1 with an initial team of 3, growing to a team of 7 that also delivered AI signals (age and gender prediction, household profiling, engagement and affluence scoring) and Vinhomes lead scoring.',
                result: 'v1 live in 2.5 months with 2,000+ features.'
            },
            vi: {
                title: 'C360 Feature Store',
                context: 'Dữ liệu khách hàng từ hơn 8 đơn vị (P&L) của Vingroup, cần được gom thành một lớp feature chung cho việc xây dựng mô hình.',
                approach: 'Ra mắt v1 với đội ban đầu 3 người, sau mở rộng thành đội 7 người và triển khai thêm AI signals (dự đoán tuổi và giới tính, phân tích hộ gia đình, chấm điểm tương tác và mức độ khá giả) cùng Vinhomes lead scoring.',
                result: 'v1 vận hành sau 2,5 tháng với hơn 2.000 feature.'
            },
            metrics: ['2.5 months to v1', '2,000+ features', 'AUC > 0.85 lead scoring'],
            metricsVi: ['2,5 tháng ra v1', 'Hơn 2.000 feature', 'Lead scoring AUC > 0,85']
        },
        {
            id: 'telco',
            org: 'Blueinfo JSC',
            period: '2024 – 2026',
            en: {
                title: 'Telco credit & propensity scoring',
                context: 'Thin-file customers in Vietnam and unbanked segments in Laos have little or no credit history.',
                approach: 'Built credit and propensity scores from telco data. In Laos, combined e-wallet and telco data using proxy labelling and transfer-learning-inspired techniques, with an A/B testing roadmap.',
                result: 'Over 70% uplift when the credit score was combined with the partner’s model.'
            },
            vi: {
                title: 'Chấm điểm tín dụng & propensity từ dữ liệu viễn thông',
                context: 'Khách hàng thin-file ở Việt Nam và nhóm chưa có tài khoản ngân hàng ở Lào gần như không có lịch sử tín dụng.',
                approach: 'Xây dựng điểm tín dụng và propensity từ dữ liệu viễn thông. Ở Lào, kết hợp dữ liệu ví điện tử và viễn thông bằng proxy labelling và kỹ thuật lấy cảm hứng từ transfer learning, kèm lộ trình A/B testing.',
                result: 'Hiệu quả tăng hơn 70% khi kết hợp điểm tín dụng với mô hình của đối tác.'
            },
            metrics: ['Credit Gini 55% VN · 52% Laos', 'Propensity Gini 70% VN · 65% Laos', '>70% uplift'],
            metricsVi: ['Gini tín dụng 55% VN · 52% Lào', 'Gini propensity 70% VN · 65% Lào', 'Tăng >70%']
        },
        {
            id: 'platform',
            org: 'Blueinfo JSC',
            period: '2024 – 2026',
            en: {
                title: 'ML platform',
                context: 'Each partner project needed data pipelines, model training, deployment, and monitoring.',
                approach: 'Data stack with pipelines, a feature store, and data quality checks; a reproducible training pipeline; scheduling, monitoring, and alerts; Git-based CI/CD.',
                result: 'One platform from feature pipelines to monitoring, with automated deployment.'
            },
            vi: {
                title: 'Nền tảng ML',
                context: 'Mỗi dự án với đối tác đều cần pipeline dữ liệu, huấn luyện, triển khai và giám sát mô hình.',
                approach: 'Data stack gồm pipeline, feature store và kiểm soát chất lượng dữ liệu; pipeline huấn luyện có thể tái lập; lập lịch, giám sát và cảnh báo; CI/CD dựa trên Git.',
                result: 'Một nền tảng chung từ feature pipeline đến giám sát, triển khai tự động.'
            },
            metrics: ['Spark', 'Airflow', 'MLflow', 'Great Expectations', 'DataHub', 'FastAPI', 'Grafana'],
            metricsVi: ['Spark', 'Airflow', 'MLflow', 'Great Expectations', 'DataHub', 'FastAPI', 'Grafana']
        },
        {
            id: 'nutri',
            org: 'Blueinfo JSC',
            period: 'Prototype',
            en: {
                title: 'Nutri, a multi-agent AI assistant',
                context: 'A prototype exploring agentic AI for personalised nutrition.',
                approach: 'Multiple agents with tool orchestration for profile management, calorie-needs estimation, meal-plan generation, and grocery/inventory workflows.',
                result: 'A working prototype for personalised meal planning.'
            },
            vi: {
                title: 'Nutri, trợ lý AI multi-agent',
                context: 'Prototype thử nghiệm agentic AI cho dinh dưỡng cá nhân hóa.',
                approach: 'Nhiều agent phối hợp qua tool orchestration để quản lý hồ sơ, ước tính nhu cầu calo, lên thực đơn và xử lý danh sách mua sắm/tồn kho.',
                result: 'Prototype chạy được cho việc lên thực đơn cá nhân hóa.'
            },
            metrics: ['Multi-agent', 'Tool orchestration'],
            metricsVi: ['Multi-agent', 'Tool orchestration']
        }
    ];

    const esc = (s) => String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const icon = (name, cls = 'i') =>
        `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

    const phoneHref = (phone) => 'tel:' + String(phone).replace(/\s+/g, '');

    function renderBullets(items, cls = 'bullets') {
        return `<ul class="${cls}">${items.map((item) => {
            if (typeof item === 'object' && item.main) {
                return `<li>${esc(item.main)}${renderBullets(item.sub, cls)}</li>`;
            }
            return `<li>${esc(item)}</li>`;
        }).join('')}</ul>`;
    }

    // "Aug 2024 – Apr 2026" / "May 2026 – Present" -> { start, end } in fractional years
    function parseRange(duration) {
        const [from, to] = String(duration).split(/\s*[–-]\s*/);
        const toYear = (part) => {
            if (!part || /present/i.test(part)) {
                const now = new Date();
                return now.getFullYear() + now.getMonth() / 12;
            }
            const [mon, year] = part.trim().split(/\s+/);
            return Number(year) + (MONTHS[mon] || 0) / 12;
        };
        return { start: toYear(from), end: toYear(to), current: /present/i.test(to || '') };
    }

    // Horizontal timeline of roles. Colors come from the page's CSS variables.
    // Pass the container's pixel width so text stays at its real size instead of scaling with the viewBox.
    function careerChart(experience, opts = {}) {
        const rows = experience.map((job) => ({ job, ...parseRange(job.duration) }))
            .sort((a, b) => a.start - b.start);
        const minYear = Math.floor(Math.min(...rows.map((r) => r.start)));
        const maxYear = Math.ceil(Math.max(...rows.map((r) => r.end)));
        const W = Math.max(Math.round(opts.width || 640), 280);
        const left = 14, right = 16, rowH = 40, top = 8, axisH = 28;
        const narrow = W < 480;
        const H = top + rows.length * rowH + axisH;
        const x = (year) => left + ((year - minYear) / (maxYear - minYear)) * (W - left - right);

        const grid = [];
        for (let y = minYear; y <= maxYear; y++) {
            grid.push(`<line class="cc-grid" x1="${x(y)}" x2="${x(y)}" y1="${top}" y2="${H - axisH + 4}"/>`);
            // On narrow screens label every other year ('19, '21, ...) to avoid collisions
            if (narrow && (y - minYear) % 2 === 1) continue;
            const label = narrow ? `'${String(y).slice(2)}` : y;
            grid.push(`<text class="cc-axis" x="${x(y)}" y="${H - 8}" text-anchor="middle">${label}</text>`);
        }

        const bars = rows.map((r, i) => {
            const y = top + i * rowH;
            const x1 = x(r.start), x2 = x(r.end);
            // Keep the label inside the chart: start-align at the bar, else end-align at the bar end, else clamp.
            const est = r.job.company.length * 6.8;
            let labelX = x1, anchor = 'start';
            if (x1 + est > W - right) {
                if (x2 - est >= left) { labelX = x2; anchor = 'end'; }
                else { labelX = Math.max(left, W - right - est); }
            }
            return `
                <text class="cc-label" x="${labelX}" y="${y + 13}" text-anchor="${anchor}">${esc(r.job.company)}</text>
                <rect class="cc-bar${r.current ? ' now' : ''}" x="${x1}" y="${y + 20}" width="${Math.max(x2 - x1, 4)}" height="10" rx="5"/>
            `;
        }).join('');

        const summary = rows.map((r) => `${r.job.company}, ${r.job.duration}`).join('; ');
        return `<svg class="career-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Career timeline: ${esc(summary)}">
            ${grid.join('')}${bars}
        </svg>`;
    }

    async function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
    }

    // Wires a button to copy the email and confirm with a short label swap + live region.
    function bindCopyEmail(button, email, labels = { idle: 'Copy email', done: 'Copied' }) {
        if (!button) return;
        let live = document.getElementById('preview-live');
        if (!live) {
            live = document.createElement('div');
            live.id = 'preview-live';
            live.setAttribute('aria-live', 'polite');
            live.className = 'sr-only';
            document.body.appendChild(live);
        }
        const render = (done) => {
            button.innerHTML = `${icon(done ? 'check' : 'copy')}<span>${esc(done ? labels.done : labels.idle)}</span>`;
            button.classList.toggle('is-done', done);
        };
        render(false);
        let timer;
        button.addEventListener('click', async () => {
            try {
                await copyText(email);
                render(true);
                live.textContent = `${labels.done}: ${email}`;
                clearTimeout(timer);
                timer = setTimeout(() => render(false), 1800);
            } catch (err) {
                window.location.href = 'mailto:' + email;
            }
        });
    }

    function mountSwitcher(currentId) {
        const nav = document.createElement('nav');
        nav.className = 'preview-switch';
        nav.setAttribute('aria-label', 'Design previews');
        nav.innerHTML = `<a href="../" class="ps-all" title="All previews">All</a>` + PREVIEWS.map((p) => `
            <a href="../${p.id}/" title="${esc(p.name)}" aria-label="Preview ${p.id.toUpperCase()}: ${esc(p.name)}"
               ${p.id === currentId ? 'aria-current="page"' : ''}>${p.id.toUpperCase()}</a>
        `).join('');
        document.body.appendChild(nav);
    }

    // Base styles shared by every preview: switcher, chart, copy button, sr-only.
    const style = document.createElement('style');
    style.textContent = `
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
        .preview-switch {
            position: fixed; right: 16px; bottom: 16px; z-index: 50;
            display: flex; gap: 2px; padding: 4px;
            background: var(--surface, #161A1F); border: 1px solid var(--border, #2A3038);
            border-radius: 999px; font: 500 0.8rem/1 'Inter', system-ui, sans-serif;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
        }
        .preview-switch a {
            display: inline-flex; align-items: center; justify-content: center;
            min-width: 34px; min-height: 34px; padding: 0 8px; border-radius: 999px;
            color: var(--text-muted, #8A94A0); text-decoration: none;
            transition: background-color 200ms ease, color 200ms ease;
        }
        .preview-switch a:hover { color: var(--text, #D6DBE1); }
        .preview-switch a[aria-current="page"] { background: var(--accent-soft, rgba(255,255,255,0.08)); color: var(--text, #D6DBE1); }
        .preview-switch .ps-all { padding: 0 12px; border-right: 1px solid var(--border, #2A3038); border-radius: 999px 0 0 999px; margin-right: 2px; }
        @media (max-width: 440px) {
            .preview-switch { left: 8px; right: 8px; bottom: 8px; gap: 0; justify-content: space-between; }
            .preview-switch a { min-width: 0; flex: 1 1 0; padding: 0; }
            .preview-switch .ps-all { flex: 1.4 1 0; padding: 0 6px; }
        }
        .career-chart { width: 100%; height: auto; display: block; overflow: visible; }
        .career-chart .cc-grid { stroke: var(--border, #2A3038); stroke-width: 1; }
        .career-chart .cc-axis { fill: var(--text-muted, #8A94A0); font-size: 11px; font-variant-numeric: tabular-nums; }
        .career-chart .cc-label { fill: var(--text, #D6DBE1); font-size: 12px; font-weight: 500; }
        .career-chart .cc-bar { fill: var(--accent, #7DB5B8); opacity: 0.4; }
        .career-chart .cc-bar.now { opacity: 1; }
        @media (prefers-reduced-motion: reduce) { .preview-switch a { transition: none; } }
    `;
    document.head.appendChild(style);

    window.Preview = {
        PREVIEWS, CASE_STUDIES, ICONS,
        esc, icon, phoneHref, renderBullets, parseRange, careerChart, bindCopyEmail, mountSwitcher
    };
})();
