import { VisaTypeInfo, ChecklistItem, FaqItem, OfficeLocation } from '../types/visa';

export const VISA_TYPES: VisaTypeInfo[] = [
  {
    code: 'L',
    name: 'Visa Du Lịch (L)',
    category: 'Du lịch',
    badge: 'Du lịch tự túc / Tour',
    popular: true,
    description: 'Tư vấn thông tin và hướng dẫn chuẩn bị hồ sơ cho khách hàng có nhu cầu tham quan, du lịch hoặc khám phá văn hóa tại Trung Quốc.',
    validity: 'Thời hạn theo thông báo của cơ quan thẩm quyền (thường 3 tháng)',
    durationOfStay: 'Thời gian lưu trú theo quyết định cấp của cơ quan thẩm quyền',
    entries: '1 lần hoặc 2 lần tùy kết quả xét duyệt',
    targetAudience: 'Cá nhân, gia đình, nhóm bạn có kế hoạch du lịch tại Trung Quốc.',
    keyRequirement: 'Kế hoạch chuyến đi, xác nhận đặt vé, phòng nghỉ và giấy tờ cá nhân tham khảo.'
  },
  {
    code: 'M',
    name: 'Visa Thương Mại (M)',
    category: 'Công tác',
    badge: 'Khảo sát / Đối tác',
    popular: true,
    description: 'Tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ cho mục đích khảo sát thị trường, làm việc với đối tác, ký kết hợp đồng hoặc tham dự hội chợ triển lãm.',
    validity: 'Thời hạn theo quy định của cơ quan thẩm quyền (3 tháng, 6 tháng hoặc 1 năm)',
    durationOfStay: 'Thời gian lưu trú theo quyết định xét duyệt',
    entries: '1 lần, 2 lần hoặc nhiều lần tùy hồ sơ',
    targetAudience: 'Thương nhân, đại diện doanh nghiệp, cán bộ nhân viên được cử đi công tác.',
    keyRequirement: 'Thư mời thương mại từ đối tác và giấy tờ cử công tác theo hướng dẫn tham khảo.'
  },
  {
    code: 'Q',
    name: 'Visa Thăm Thân (Q1/Q2)',
    category: 'Thăm thân',
    badge: 'Thăm gia đình',
    popular: false,
    description: 'Cung cấp thông tin và hướng dẫn giấy tờ cho đương đơn có nhu cầu thăm người thân đang cư trú hợp pháp tại Trung Quốc.',
    validity: 'Q1 (dài hạn) hoặc Q2 (ngắn hạn) theo quy định của cơ quan thẩm quyền',
    durationOfStay: 'Tùy theo diện và phê duyệt của cơ quan có thẩm quyền',
    entries: 'Theo quyết định của cơ quan lãnh sự',
    targetAudience: 'Người thân của công dân Trung Quốc hoặc người nước ngoài có thẻ thường trú tại Trung Quốc.',
    keyRequirement: 'Giấy tờ chứng minh quan hệ nhân thân và thư mời thăm thân theo quy định.'
  },
  {
    code: 'X',
    name: 'Visa Học Tập (X1/X2)',
    category: 'Du học',
    badge: 'Khóa học / Đào tạo',
    popular: false,
    description: 'Tư vấn và hướng dẫn chuẩn bị hồ sơ cho học sinh, sinh viên, nghiên cứu sinh theo học các khóa ngắn hạn (X2) hoặc dài hạn (X1) tại Trung Quốc.',
    validity: 'Theo thời gian khóa đào tạo được ghi trên giấy báo nhập học',
    durationOfStay: 'Theo quyết định của cơ quan thẩm quyền và thời lượng khóa học',
    entries: 'Theo quy định của cơ quan cấp thị thực',
    targetAudience: 'Học sinh, sinh viên, học viên tham gia các chương trình đào tạo tại Trung Quốc.',
    keyRequirement: 'Giấy báo trúng tuyển/nhập học và mẫu đơn tương ứng theo hướng dẫn của trường và cơ quan thẩm quyền.'
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // 01. Thông tin cá nhân
  {
    id: 'c1',
    category: 'personal',
    title: 'Hộ chiếu còn hạn sử dụng',
    description: 'Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày dự kiến kết thúc chuyến đi và còn trang trống theo quy định.',
    required: true,
    notes: 'Kèm theo hộ chiếu cũ nếu có lịch sử xuất nhập cảnh trước đây.'
  },
  {
    id: 'c2',
    category: 'personal',
    title: 'Ảnh chân dung theo quy chuẩn',
    description: 'Ảnh chụp chân dung gần nhất (phông trắng, rõ khuôn mặt, không đeo kính râm, kích thước theo quy chuẩn của cơ quan thẩm quyền).',
    required: true,
    notes: 'Visa5S hỗ trợ hướng dẫn thông số ảnh đạt chuẩn quy định.'
  },
  {
    id: 'c3',
    category: 'personal',
    title: 'Giấy tờ tùy thân cá nhân',
    description: 'Bản sao giấy tờ tùy thân (CCCD/thông tin cư trú) theo hướng dẫn thủ tục hiện hành.',
    required: true
  },
  // 02. Thông tin chuyến đi
  {
    id: 'c4',
    category: 'trip',
    title: 'Dự kiến kế hoạch hành trình',
    description: 'Bản thông tin dự kiến về lộ trình di chuyển, các địa điểm dự kiến ghé thăm phù hợp mục đích chuyến đi.',
    required: true,
    notes: 'Visa5S hỗ trợ khách hàng tổng hợp kế hoạch hành trình rõ ràng, logic.'
  },
  {
    id: 'c5',
    category: 'trip',
    title: 'Thông tin đặt chỗ vé máy bay (dự kiến)',
    description: 'Xác nhận mã giữ chỗ vé máy bay khứ hồi khớp với thời gian dự kiến của kế hoạch chuyến đi.',
    required: true,
    notes: 'Khuyến cáo nên giữ chỗ, chưa cần thanh toán vé chính thức trước khi có kết quả.'
  },
  {
    id: 'c6',
    category: 'trip',
    title: 'Thông tin lưu trú dự kiến (Khách sạn)',
    description: 'Xác nhận đặt phòng tại các điểm đến trong thời gian dự kiến lưu trú.',
    required: true
  },
  // 03. Thông tin công việc và tài chính
  {
    id: 'c7',
    category: 'job',
    title: 'Thông tin chứng minh công việc',
    description: 'Giấy tờ thể hiện tình trạng công việc hiện tại (HĐLĐ/đơn nghỉ phép hoặc ĐKKD/thông tin nộp thuế đối với doanh nghiệp).',
    required: true
  },
  {
    id: 'c8',
    category: 'job',
    title: 'Thông tin tài chính tham khảo',
    description: 'Giấy tờ thể hiện năng lực chi trả cho chuyến đi (sao kê tài khoản ngân hàng hoặc sổ tiết kiệm tham khảo).',
    required: false,
    notes: 'Yêu cầu cụ thể có thể khác nhau tùy thời điểm và hướng dẫn của cơ quan thẩm quyền.'
  },
  // 04. Giấy tờ liên quan đến từng mục đích chuyến đi
  {
    id: 'c9',
    category: 'specific',
    title: 'Thư mời thương mại (Mục đích thương mại / công tác)',
    description: 'Thư mời hợp lệ từ đơn vị, đối tác tại Trung Quốc nêu rõ nội dung công việc và thông tin người được mời.',
    required: false,
    visaTypes: ['Công tác']
  },
  {
    id: 'c10',
    category: 'specific',
    title: 'Giấy tờ quan hệ nhân thân (Mục đích thăm thân)',
    description: 'Giấy tờ chứng minh quan hệ gia đình (khai sinh, đăng ký kết hôn) và thông tin người mời tại Trung Quốc.',
    required: false,
    visaTypes: ['Thăm thân']
  },
  {
    id: 'c11',
    category: 'specific',
    title: 'Giấy báo nhập học & mẫu đơn (Mục đích học tập)',
    description: 'Thông báo nhập học từ cơ sở đào tạo và mẫu đơn phê duyệt theo quy định về du học.',
    required: false,
    visaTypes: ['Du học']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    category: 'Pháp lý',
    question: 'Visa5S có phải cơ quan cấp visa không?',
    answer: 'Không. Visa5S là doanh nghiệp tư nhân hoạt động độc lập, cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ theo nhu cầu của khách hàng. Visa5S không phải cơ quan nhà nước, không phải Đại sứ quán hoặc Tổng Lãnh sự quán Trung Quốc, không phải Trung tâm tiếp nhận hồ sơ thị thực (CVASC) và không đại diện hay trực thuộc các cơ quan này.'
  },
  {
    id: 2,
    category: 'Cam kết',
    question: 'Visa5S có cam kết đậu visa không?',
    answer: 'Không. Visa5S không cam kết hoặc bảo đảm kết quả cấp visa dưới bất kỳ hình thức nào. Quyền xét duyệt và quyết định cấp visa thuộc thẩm quyền độc quyền của cơ quan đại diện ngoại giao có thẩm quyền của Trung Quốc. Visa5S chỉ hỗ trợ khách hàng chuẩn bị hồ sơ rõ ràng, trung thực và đúng quy chuẩn.'
  },
  {
    id: 3,
    category: 'Chi phí',
    question: 'Chi phí dịch vụ được tính như thế nào?',
    answer: 'Phí dịch vụ tư vấn của Visa5S được thông báo minh bạch, rõ ràng bằng văn bản/báo giá trước khi khách hàng quyết định sử dụng dịch vụ. Các khoản lệ phí nộp cho cơ quan thẩm quyền hoặc trung tâm tiếp nhận (nếu có) được liệt kê tách bạch, cam kết không có chi phí ẩn hay phụ phí không báo trước.'
  },
  {
    id: 4,
    category: 'Tự nộp',
    question: 'Tôi có thể tự chuẩn bị giấy tờ không?',
    answer: 'Hoàn toàn được. Khách hàng hoàn toàn có quyền tự tìm hiểu quy định, chuẩn bị hồ sơ, điền tờ khai trực tuyến và nộp trực tiếp tại cơ quan có thẩm quyền hoặc trung tâm tiếp nhận chính thức mà không bắt buộc phải sử dụng dịch vụ tư vấn của bên thứ ba.'
  },
  {
    id: 5,
    category: 'Hồ sơ',
    question: 'Yêu cầu giấy tờ có giống nhau không?',
    answer: 'Không. Mỗi loại visa (du lịch, thương mại, thăm thân, học tập) và mỗi trường hợp cụ thể có yêu cầu giấy tờ khác nhau tùy theo quy định hiện hành của cơ quan thẩm quyền, mục đích chuyến đi cũng như hoàn cảnh công việc, nhân thân của người nộp hồ sơ.'
  },
  {
    id: 6,
    category: 'Xét duyệt',
    question: 'Ai là đơn vị quyết định kết quả xét duyệt?',
    answer: 'Cơ quan đại diện ngoại giao của Trung Quốc (Đại sứ quán / Tổng Lãnh sự quán) là đơn vị duy nhất có thẩm quyền xét duyệt, phê duyệt và quyết định cấp hoặc từ chối cấp visa. Không cá nhân, tổ chức hay doanh nghiệp tư nhân nào có quyền can thiệp vào quy trình và kết quả này.'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'hcm1',
    name: 'Trụ sở tư vấn chính TP. Hồ Chí Minh',
    address: '370 Đường 3/2, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '0911.909.686',
    workingHours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
    isHeadquarter: true
  },
  {
    id: 'hcm2',
    name: 'Văn phòng tư vấn TP.HCM (Cơ sở 2)',
    address: '16 Trần Đại Nghĩa, Phường Đông Hòa, TP. Dĩ An (Giáp Thủ Đức, TP.HCM)',
    city: 'Bình Dương / TP.HCM',
    phone: '0967.686.101',
    workingHours: 'Thứ 2 - Thứ 6: 08:30 - 17:30',
    isHeadquarter: false
  },
  {
    id: 'hn',
    name: 'Văn phòng tư vấn Chi nhánh Hà Nội',
    address: '59 Vương Thừa Vũ, Quận Thanh Xuân, Hà Nội',
    city: 'Hà Nội',
    phone: '0911.909.686',
    workingHours: 'Thứ 2 - Thứ 6: 08:30 - 17:30',
    isHeadquarter: false
  }
];
