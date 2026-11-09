import React from 'react';
import { Headphones, ClipboardCheck, CreditCard, MessageSquareQuote } from 'lucide-react';

export const CoreBenefits: React.FC = () => {
  return (
    <section className="w-full bg-[#001f41] text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-[#0f3460]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-[#d5e3ff] uppercase tracking-wider">
              Lợi Thế Tại Visa5S
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              TƯ VẤN TẬN TÂM – THÔNG TIN RÕ RÀNG
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7f9dd0] max-w-md">
            Doanh nghiệp tư nhân cung cấp dịch vụ tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ theo nhu cầu cụ thể của từng khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Tư vấn theo nhu cầu</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Trao đổi và phân tích nhu cầu của khách hàng để đưa ra định hướng phù hợp nhất với mục đích chuyến đi.
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <ClipboardCheck className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Hướng dẫn chuẩn bị</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Cung cấp thông tin về giấy tờ thường được yêu cầu theo hướng dẫn của cơ quan có thẩm quyền.
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Chi phí minh bạch</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Thông báo rõ phí dịch vụ và các khoản liên quan ngay từ đầu, tuyệt đối không có chi phí ẩn.
            </span>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Đồng hành thông tin</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Giải đáp thắc mắc trong quá trình tìm hiểu và chuẩn bị giấy tờ một cách nhanh chóng, chu đáo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
