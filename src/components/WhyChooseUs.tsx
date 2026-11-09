import React from 'react';
import { HelpCircle, Sliders, ShieldCheck, LifeBuoy } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col gap-2 max-w-3xl mb-8">
        <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
          Giá Trị Dịch Vụ
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
          LÝ DO KHÁCH HÀNG LỰA CHỌN VISA5S
        </h2>
        <p className="text-sm text-[#43474f]">
          Doanh nghiệp tư nhân đồng hành tư vấn thông tin và hỗ trợ chuẩn bị hồ sơ một cách rõ ràng, chu đáo theo nhu cầu của khách hàng.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Item 1 */}
        <div className="p-5 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col gap-3 hover:border-[#0051d5] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#001f41]">Tư vấn dễ hiểu, đúng trọng tâm</h3>
            <p className="text-xs text-[#43474f] mt-1 leading-relaxed">
              Giải thích cặn kẽ những vướng mắc của hồ sơ bằng ngôn ngữ đơn giản, trung thực, giúp khách hàng nắm rõ thông tin cần thiết.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-5 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col gap-3 hover:border-[#0051d5] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center shrink-0">
            <Sliders className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#001f41]">Hướng dẫn theo từng trường hợp</h3>
            <p className="text-xs text-[#43474f] mt-1 leading-relaxed">
              Không áp dụng một công thức chung dập khuôn; mỗi trường hợp đều được trao đổi chi tiết sát theo hoàn cảnh chuyến đi thực tế của bạn.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-5 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col gap-3 hover:border-[#0051d5] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#001f41]">Thông tin chi phí rõ ràng</h3>
            <p className="text-xs text-[#43474f] mt-1 leading-relaxed">
              Công khai danh mục các khoản chi trước khi thực hiện, cam kết không có chi phí ẩn hay phụ phí không báo trước.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="p-5 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col gap-3 hover:border-[#0051d5] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center shrink-0">
            <LifeBuoy className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#001f41]">Đồng hành giải đáp thắc mắc</h3>
            <p className="text-xs text-[#43474f] mt-1 leading-relaxed">
              Hỗ trợ giải đáp các câu hỏi trong suốt quá trình chuẩn bị, hướng dẫn sắp xếp giấy tờ khoa học và chu đáo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
