import React, { useState } from 'react';
import { ChevronRight, Send, HelpCircle } from 'lucide-react';

interface ProcessTimelineProps {
  onStartConsult: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartConsult }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Tiếp nhận nhu cầu',
      short: 'Tiếp nhận',
      desc: 'Khách hàng liên hệ và cung cấp thông tin về kế hoạch, mục đích chuyến đi và thời gian dự kiến.',
      details: 'Nhân viên Visa5S tiếp nhận thông tin từ bạn: kế hoạch đi lại, thời gian dự kiến, mục đích chuyến đi (du lịch, khảo sát thị trường hay thăm thân) để phân tích nhu cầu ban đầu.',
      tip: 'Bạn có thể chuẩn bị trước dự kiến thời gian đi để nhân viên tư vấn khung thời gian chuẩn bị hợp lý.'
    },
    {
      num: 2,
      title: 'Trao đổi và tư vấn',
      short: 'Tư vấn thông tin',
      desc: 'Trao đổi chi tiết, phân tích mục đích chuyến đi và cung cấp thông tin về loại visa phù hợp.',
      details: 'Nhân viên tư vấn sẽ làm rõ các diện visa Trung Quốc hiện hành (L, M, Q, X), phân tích trường hợp cụ thể và giải thích các quy định liên quan để khách hàng tham khảo.',
      tip: 'Mỗi diện visa có những yêu cầu đặc thù về giấy tờ chứng minh mục đích chuyến đi.'
    },
    {
      num: 3,
      title: 'Hướng dẫn chuẩn bị giấy tờ',
      short: 'Chuẩn bị giấy tờ',
      desc: 'Cung cấp danh mục giấy tờ tham khảo thường được cơ quan có thẩm quyền yêu cầu.',
      details: 'Visa5S hướng dẫn khách hàng cách thức chuẩn bị, sắp xếp các giấy tờ cá nhân, công việc, kế hoạch chuyến đi sao cho rõ ràng, logic và dễ tra cứu theo đúng quy chuẩn.',
      tip: 'Khách hàng tự quyết định việc sử dụng thông tin tư vấn và chủ động kiểm tra tính xác thực của các giấy tờ.'
    },
    {
      num: 4,
      title: 'Giải đáp thắc mắc',
      short: 'Giải đáp thắc mắc',
      desc: 'Đồng hành giải đáp mọi câu hỏi trong quá trình tìm hiểu và hỗ trợ rà soát thông tin.',
      details: 'Trong suốt quá trình chuẩn bị trước khi nộp hồ sơ, nhân viên Visa5S luôn sẵn sàng giải đáp các vướng mắc, hướng dẫn cách điền biểu mẫu trực tuyến và chia sẻ kinh nghiệm thực tế.',
      tip: 'Visa5S không can thiệp, không đại diện và không có quyền quyết định kết quả của cơ quan xét duyệt.'
    }
  ];

  return (
    <section id="quy-trinh" className="w-full bg-[#eaedff]/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-[#eaedff]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
            Quy Trình Làm Việc
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
            QUY TRÌNH TƯ VẤN VÀ HỖ TRỢ THÔNG TIN
          </h2>
          <p className="text-sm sm:text-base text-[#43474f]">
            4 bước hỗ trợ rõ ràng, minh bạch giúp khách hàng dễ dàng theo dõi và chủ động trong mọi khâu chuẩn bị.
          </p>
        </div>

        {/* Desktop Pipeline Navigator (4 steps) */}
        <div className="hidden lg:grid grid-cols-4 gap-3">
          {steps.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all relative ${
                selectedStep === idx
                  ? 'bg-white border-[#0051d5] shadow-md ring-2 ring-[#0051d5]/20'
                  : 'bg-white/80 border-slate-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedStep === idx ? 'bg-[#0051d5] text-white' : 'bg-[#eaedff] text-[#001f41]'
                  }`}
                >
                  {st.num}
                </span>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                )}
              </div>
              <h3 className="font-bold text-xs text-[#001f41] leading-tight mb-1">{st.title}</h3>
              <p className="text-[11px] text-[#747780] line-clamp-2">{st.desc}</p>
            </button>
          ))}
        </div>

        {/* Mobile & Tablet Stepper List */}
        <div className="lg:hidden flex flex-col gap-3">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedStep === idx
                  ? 'bg-white border-[#0051d5] shadow-md'
                  : 'bg-white border-[#eaedff]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    selectedStep === idx ? 'bg-[#0051d5] text-white' : 'bg-[#001f41] text-white'
                  }`}
                >
                  {st.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#001f41]">{st.title}</h3>
                  <p className="text-xs text-[#43474f] mt-0.5 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Step Detailed Inspection Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#0051d5] text-xs font-bold uppercase tracking-wider">
                Bước {steps[selectedStep].num}
              </span>
              <h3 className="text-base font-bold text-[#001f41]">{steps[selectedStep].title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
              {steps[selectedStep].details}
            </p>
            <div className="p-2.5 rounded-lg bg-[#f2f3ff] text-xs text-[#0051d5] font-medium flex items-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Lưu ý: {steps[selectedStep].tip}</span>
            </div>
          </div>

          <button
            onClick={onStartConsult}
            className="w-full md:w-auto h-12 px-6 rounded-xl bg-[#0051d5] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#003ea8] transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Liên Hệ Nhận Tư Vấn</span>
          </button>
        </div>
      </div>
    </section>
  );
};
