import React from 'react';
import { Compass, CheckCircle2, Receipt, Star, ArrowDown, FileText } from 'lucide-react';

interface HeroSectionProps {
  onQuickConsult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuickConsult }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-10 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Headings, USPs and CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#eaedff] text-[#0051d5]">
            <CheckCircle2 className="w-4 h-4 fill-[#0051d5] text-white" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Tư Vấn Thông Tin &amp; Hỗ Trợ Hồ Sơ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001f41] tracking-tight leading-tight">
            TƯ VẤN THÔNG TIN &amp; HỖ TRỢ HỒ SƠ VISA TRUNG QUỐC
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#0051d5] leading-snug">
            Dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ theo nhu cầu du lịch, công tác, thăm thân và học tập.
          </p>

          <p className="text-sm sm:text-base text-[#43474f] leading-relaxed">
            Visa5S là doanh nghiệp tư nhân hoạt động độc lập, đồng hành trao đổi và phân tích nhu cầu của khách hàng, cung cấp danh mục giấy tờ thường được yêu cầu và giải đáp các thắc mắc trong quá trình tìm hiểu.
          </p>

          {/* 3 Key USPs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-3 rounded-xl bg-white border border-[#eaedff] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0051d5]/10 flex items-center justify-center text-[#0051d5] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#131b2e]">Theo nhu cầu</span>
                <span className="text-[11px] text-[#43474f]">Du lịch, công tác, thăm thân, học tập</span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-3 rounded-xl bg-white border border-[#eaedff] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0051d5]/10 flex items-center justify-center text-[#0051d5] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#131b2e]">Thông tin rõ ràng</span>
                <span className="text-[11px] text-[#43474f]">Cung cấp giấy tờ thường được yêu cầu</span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-3 rounded-xl bg-white border border-[#eaedff] shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#0051d5]/10 flex items-center justify-center text-[#0051d5] shrink-0">
                <Receipt className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#131b2e]">Chi phí minh bạch</span>
                <span className="text-[11px] text-[#43474f]">Thông báo rõ phí dịch vụ và các khoản liên quan</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#tu-van"
              onClick={onQuickConsult}
              className="h-12 px-6 rounded-xl bg-[#0051d5] text-white flex items-center justify-center gap-2 text-sm font-bold shadow-md hover:bg-[#003ea8] active:scale-[0.99] transition-all"
            >
              <span>NHẬN TƯ VẤN THÔNG TIN</span>
            </a>

            <a
              href="#quy-trinh"
              className="h-12 px-5 rounded-xl bg-[#eaedff] text-[#001f41] hover:bg-[#d5e3ff] flex items-center justify-center gap-2 text-sm font-bold shadow-sm transition-all"
            >
              <ArrowDown className="w-4 h-4 text-[#0051d5]" />
              <span>XEM QUY TRÌNH HỖ TRỢ</span>
            </a>
          </div>

          {/* Legal disclaimer note */}
          <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#eaedff] flex items-start gap-2.5 text-[#43474f] mt-1">
            <span className="text-xs font-bold text-[#6f0006] uppercase tracking-wider shrink-0 mt-0.5">
              Lưu ý minh bạch:
            </span>
            <p className="text-xs leading-normal">
              Visa5S là doanh nghiệp tư nhân hoạt động độc lập, không phải cơ quan nhà nước, không có quyền xét duyệt hoặc cấp thị thực. Việc xét duyệt và cấp thị thực thuộc thẩm quyền của cơ quan có thẩm quyền.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#eaedff] aspect-[16/11] sm:aspect-[16/10] bg-[#e2e7ff] group">
            <img
              src="/assets/aistudio/image_d9c4ecea.png"
              alt="Đội ngũ nhân viên tư vấn Visa5S"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f41]/90 via-[#001f41]/20 to-transparent"></div>

            {/* Bottom floating badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[#001f41] font-semibold text-xs shadow-md">
                <Star className="w-4 h-4 text-[#ff6e62] fill-[#ff6e62]" />
                Nhân Viên Tư Vấn Visa5S
              </span>
              <span className="text-[11px] font-semibold text-white/90 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                Trụ sở 370 Ba Tháng Hai, TP.HCM
              </span>
            </div>
          </div>

          {/* Quick trust metrics row underneath image */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <div className="p-2.5 bg-white rounded-xl border border-[#eaedff]">
              <span className="block text-base font-bold text-[#001f41]">Tận Tâm</span>
              <span className="text-[10px] text-[#43474f]">Theo nhu cầu khách hàng</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-[#eaedff]">
              <span className="block text-base font-bold text-[#0051d5]">Rõ Ràng</span>
              <span className="text-[10px] text-[#43474f]">Giấy tờ tham khảo chuẩn</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-[#eaedff]">
              <span className="block text-base font-bold text-[#001f41]">Minh Bạch</span>
              <span className="text-[10px] text-[#43474f]">Thông báo rõ chi phí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
