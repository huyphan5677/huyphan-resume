// Vietnamese content for preview F. Mirrors the structure of config.js (experience/education by index).
window.portfolioVi = {
    labels: {
        about: 'Giới thiệu',
        cases: 'Dự án tiêu biểu',
        experience: 'Kinh nghiệm',
        education: 'Học vấn',
        skills: 'Kỹ năng',
        resume: 'Xem CV',
        copyEmail: 'Sao chép email',
        copied: 'Đã chép',
        context: 'Bối cảnh',
        approach: 'Cách làm',
        result: 'Kết quả',
        technical: 'Chuyên môn',
        soft: 'Kỹ năng mềm',
        languages: 'Ngoại ngữ',
        present: 'nay'
    },
    personal: {
        title: 'Data Science Lead',
        bio: 'Data Science Lead với 8 năm kinh nghiệm trong Bán lẻ, Viễn thông, Tài chính và Bảo hiểm, làm cầu nối giữa đội ngũ kinh doanh và kỹ thuật. Đưa nền tảng dữ liệu và sản phẩm ML từ lúc khởi động đến khi vận hành thực tế, chịu trách nhiệm lộ trình để sản phẩm được sử dụng rộng rãi, và xây dựng các ứng dụng AI thực tiễn như trợ lý agentic và quy trình phát triển có AI hỗ trợ.'
    },
    locations: {
        'Ha Noi, Vietnam': 'Hà Nội',
        'Ho Chi Minh City, Vietnam': 'TP. Hồ Chí Minh'
    },
    experience: [
        [
            {
                main: 'Dẫn dắt đội 7 người triển khai:',
                sub: [
                    'C360 Feature Store: ra mắt v1 sau 2,5 tháng với đội ban đầu 3 người, cung cấp hơn 2.000 feature từ dữ liệu của hơn 8 đơn vị (P&L) trong Vingroup.',
                    'AI signals: dự đoán tuổi và giới tính, phân tích hộ gia đình, chấm điểm mức độ tương tác, xếp hạng mức độ khá giả/thu nhập.',
                    'Vinhomes lead scoring: xếp hạng khách hàng theo khả năng mua nhà (AUC > 0,85).'
                ]
            },
            'Chuẩn hóa quy trình phát triển bằng AI agent skill cho việc dựng khung dự án, review code và viết tài liệu.'
        ],
        [
            'Dẫn dắt đội 3 người (Analyst, Engineer, Scientist) theo mô hình Agile.',
            'Xác định phạm vi dự án cùng đối tác và thiết kế giải pháp kỹ thuật.',
            {
                main: 'Các dự án đã triển khai:',
                sub: [
                    'Xây dựng mô hình chấm điểm tín dụng và propensity từ dữ liệu viễn thông cho Việt Nam và Lào (Gini tín dụng 52–55%, Gini propensity 65–70%), hiệu quả tăng hơn 70% khi kết hợp với mô hình của đối tác.',
                    'Cải thiện Gini mô hình của một tổ chức tài chính thêm 30–40%.',
                    'Dẫn dắt dự án tìm khách hàng vay cho merchant của một đối tác logistics, từ xác định điều kiện, chọn mục tiêu đến phân tích hiệu quả khoản vay.',
                    'Làm prototype Nutri, trợ lý AI multi-agent lên thực đơn cá nhân hóa.'
                ]
            },
            'Xây dựng nền tảng ML cho feature pipeline, huấn luyện, triển khai và giám sát mô hình, kèm CI/CD tự động.'
        ],
        [
            {
                main: 'Triển khai nhiều mô hình dự báo phục vụ mục tiêu kinh doanh chiến lược:',
                sub: [
                    'Mô hình propensity cho chiến dịch bán chéo',
                    'Dự đoán rời bỏ sớm để giảm tỷ lệ mất hiệu lực hợp đồng',
                    'Tự động hóa xử lý bồi thường để tăng hiệu quả vận hành',
                    'Phân cụm đại lý và dự đoán tiềm năng lãnh đạo'
                ]
            },
            'Thúc đẩy ứng dụng AI/ML giữa các phòng ban qua workshop và chương trình đào tạo nội bộ',
            'Sử dụng SHAP, conformal prediction và phân tích đồ thị để giải thích mô hình và phân tích nâng cao',
            'Phối hợp với đội Data Engineering xây dựng data warehouse có khả năng mở rộng, đảm bảo pipeline dữ liệu ổn định cho phân tích và machine learning'
        ],
        [
            'Thiết kế và triển khai mô hình lead scoring đạt Gini 64–70%, nâng hiệu quả nhắm mục tiêu chiến dịch',
            'Trích xuất đặc trưng cộng đồng từ dữ liệu viễn thông bằng GraphFrames, DBScan và KMeans',
            'Triển khai thuật toán tối ưu (Ortools) để tối đa ROI LeadGen và giảm chi phí vận hành',
            'Chuẩn hóa vận hành và giám sát hiệu quả dịch vụ LeadGen vay mua nhà với các đối tác viễn thông',
            'Thực hiện phân tích ad-hoc và xây dựng khung A/B testing hỗ trợ ra quyết định dựa trên dữ liệu'
        ],
        [
            'Xây dựng mô hình dự báo nhu cầu và giá phân bón cho thị trường quốc tế và trong nước, đạt MAPE < 1%',
            'Xây dựng pipeline ML end-to-end trên Alteryx, từ xử lý dữ liệu đến AutoML với cơ chế chọn mô hình Champion-Challenger, cho bài toán dự báo doanh số (DFS Group)',
            'Giải quyết bài toán Market Basket Analysis và phân cụm cửa hàng cho khách hàng bán lẻ',
            'Phối hợp với BI Developer xây dựng dashboard và kể chuyện bằng dữ liệu từ kết quả ML',
            'Trợ giảng và thiết kế nội dung cho các khóa đào tạo chuyên sâu dành cho consultant'
        ]
    ],
    education: [
        { degree: 'Chương trình Kỹ sư AI tạo sinh (Generative AI Engineer)', institution: 'Đại học Bách khoa Hà Nội' },
        { degree: 'Thạc sĩ Khoa học Dữ liệu', institution: 'Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM' },
        { degree: 'Cử nhân Kỹ thuật Hệ thống Công nghiệp', institution: 'Trường Đại học Bách khoa, ĐHQG-HCM' }
    ]
};
