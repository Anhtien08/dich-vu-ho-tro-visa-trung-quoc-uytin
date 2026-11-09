import React from 'react';
import { MapPin, Building, Phone, Mail, ShieldAlert } from 'lucide-react';
import { trackPhoneCall } from '../utils/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001f41] text-white border-t border-[#0f3460] mt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        {/* Top Brand & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_42e64312.png"
                alt="Visa5S Logo"
                className="h-10 w-auto object-contain bg-white px-2 py-1 rounded-xl shadow-xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/aida/AEtjO1XOSs7t5SHl8Nu6XxcuZL5YmZeZFtHUzWo4uqonYqcY9Ex7D5DlRr-fZlUh-r35Qe8p4SDL4_izzCqqyUC_dAg5CZb5530KGnhlPilViIE__HVoyaIJLkplUqbrTmeUa_M_kvMMjArWSeZsIpee1mH9LEKqsR_vlKZNw250ku-wqty5srsqHqZZYEpgJlo77Id8CdQN9NbPFOVLFwHu5u-Dj2AEW2cJsCCqXaZ0Nbzs3IndnROeO88Zsw';
                }}
              />
              <span className="text-xl font-extrabold text-white">Visa5S</span>
            </div>
            <p className="text-xs sm:text-sm text-[#d5e3ff]/80 leading-relaxed max-w-md">
              Doanh nghiệp tư nhân hoạt động độc lập, cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ theo nhu cầu của khách hàng cho các chuyến đi du lịch, công tác, thăm thân và học tập.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs text-[#d5e3ff]/90">
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              Hệ thống văn phòng tư vấn
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Trụ sở chính:</strong> 370 Đường 3/2, Phường Hòa Hưng, Quận 10, TP.HCM</span>
            </div>
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Chi nhánh Dĩ An / Thủ Đức:</strong> 16 Trần Đại Nghĩa, Đông Hòa, Bình Dương</span>
            </div>
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Chi nhánh Hà Nội:</strong> 59 Vương Thừa Vũ, Q. Thanh Xuân, Hà Nội</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-2.5 text-xs text-[#d5e3ff]/90">
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              Liên hệ tư vấn
            </span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#a9c8fc] shrink-0" />
              <a
                href="tel:0911909686"
                onClick={() => trackPhoneCall('0911909686')}
                className="text-white font-bold hover:text-[#a9c8fc] transition-colors"
              >
                0911.909.686
              </a>
              <span>-</span>
              <a
                href="tel:0967686101"
                onClick={() => trackPhoneCall('0967686101')}
                className="text-white font-bold hover:text-[#a9c8fc] transition-colors"
              >
                0967.686.101
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#a9c8fc] shrink-0" />
              <span>info@visa5s.com.vn</span>
            </div>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#d5e3ff]/70">
              <span>Hỗ trợ tư vấn thông tin: Thứ 2 - Thứ 7</span>
            </div>
          </div>
        </div>

        {/* Khối tuyên bố pháp lý bắt buộc: THÔNG TIN VỀ ĐƠN VỊ CUNG CẤP DỊCH VỤ */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f3460] border border-white/15 text-xs text-[#d5e3ff] leading-relaxed space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide uppercase">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <span>THÔNG TIN VỀ ĐƠN VỊ CUNG CẤP DỊCH VỤ</span>
          </div>
          <p>
            Visa5S là doanh nghiệp tư nhân hoạt động độc lập, cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ theo nhu cầu của khách hàng.
          </p>
          <p>
            Visa5S không phải cơ quan nhà nước, không phải Đại sứ quán hoặc Tổng Lãnh sự quán Trung Quốc, không phải Trung tâm tiếp nhận hồ sơ thị thực và không đại diện hoặc trực thuộc các cơ quan này.
          </p>
          <p>
            Visa5S không có thẩm quyền cấp, xét duyệt hoặc quyết định kết quả thị thực. Việc xét duyệt và cấp thị thực thuộc thẩm quyền của cơ quan có thẩm quyền.
          </p>
          <p className="text-[#a9c8fc] font-medium pt-0.5">
            Khách hàng có thể tham khảo hướng dẫn từ các kênh chính thức trước khi quyết định sử dụng dịch vụ tư vấn.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7f9dd0]">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#quy-trinh" className="hover:text-white transition-colors">Quy trình tư vấn</a>
            <span>&bull;</span>
            <a href="#ho-so" className="hover:text-white transition-colors">Giấy tờ tham khảo</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a>
          </div>
          <span>&copy; 2026 Visa5S Vietnam. Toàn bộ bản quyền được bảo lưu.</span>
        </div>
      </div>
    </footer>
  );
};
