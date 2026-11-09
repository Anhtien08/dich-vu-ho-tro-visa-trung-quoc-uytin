import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { ApplicationRecord } from '../types/visa';
import { trackFormSuccess } from '../utils/analytics';

interface ConsultationFormProps {
  initialVisaType?: string;
  appliedDetails?: { visaType: string; entry: string; speed: string } | null;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialVisaType,
  appliedDetails,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [visaType, setVisaType] = useState('Du lịch');
  const [city, setCity] = useState('TP. Hồ Chí Minh');
  const [departureDate, setDepartureDate] = useState('');
  const [passportStatus, setPassportStatus] = useState('da-di-cac-nuoc');
  const [notes, setNotes] = useState('');
  const [agree, setAgree] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<ApplicationRecord | null>(null);

  // Sync when initialVisaType or appliedDetails change
  useEffect(() => {
    if (initialVisaType) {
      setVisaType(initialVisaType);
    }
  }, [initialVisaType]);

  useEffect(() => {
    if (appliedDetails) {
      setVisaType(appliedDetails.visaType);
      setNotes((prev) =>
        prev
          ? `${prev}\n[Cấu hình tham khảo: ${appliedDetails.entry}, thời gian: ${appliedDetails.speed}]`
          : `[Cấu hình tham khảo: ${appliedDetails.entry}, thời gian: ${appliedDetails.speed}]`
      );
    }
  }, [appliedDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRecord: ApplicationRecord = {
        trackingCode: `V5S-CN-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName,
        phone,
        visaType,
        departureDate: departureDate || 'Dự kiến trong thời gian tới',
        submissionDate: new Date().toLocaleDateString('vi-VN'),
        status: 'Tiếp nhận yêu cầu',
        stepIndex: 1,
        notes: notes || 'Yêu cầu tư vấn thông tin và hướng dẫn hồ sơ visa Trung Quốc.',
      };

      setSubmittedRecord(newRecord);
      setIsSubmitting(false);

      // Trigger Google Ads conversion ONLY upon successful form submission
      trackFormSuccess({
        fullName,
        phone,
        visaType,
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFullName('');
    setPhone('');
    setNotes('');
    setDepartureDate('');
  };

  return (
    <section id="tu-van" className="w-full bg-[#eaedff]/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#eaedff]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#eaedff]">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#eaedff] text-[#0051d5] flex items-center justify-center mb-1 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
              NHẬN THÔNG TIN TƯ VẤN VISA TRUNG QUỐC
            </h2>
            <p className="text-xs sm:text-sm text-[#43474f] max-w-lg leading-relaxed">
              Để lại thông tin liên hệ, nhân viên Visa5S sẽ trao đổi về nhu cầu và cung cấp thông tin dịch vụ tư vấn phù hợp.
            </p>
          </div>

          {/* Success Banner */}
          {submittedRecord ? (
            <div className="p-6 rounded-2xl bg-[#f2f3ff] border border-[#d5e3ff] flex flex-col gap-4 text-center animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001f41]">Đăng Ký Tư Vấn Thành Công!</h3>
                <p className="text-xs text-[#43474f] mt-1.5 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <strong>{submittedRecord.fullName}</strong>. Thông tin của bạn đã được tiếp nhận và chuyển tiếp qua hộp thư: <span className="font-bold text-[#0051d5]">Visa5giay@gmail.com</span>. Nhân viên Visa5S sẽ liên hệ qua số <strong>{submittedRecord.phone}</strong> để trao đổi nhu cầu và tư vấn chi tiết.
                </p>
              </div>

              {/* Email dispatch action */}
              <div className="p-3.5 rounded-xl bg-white border border-[#eaedff] max-w-md mx-auto w-full text-left space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-[#001f41]">Email tiếp nhận thông tin:</span>
                  <span className="font-mono font-bold text-[#0051d5]">Visa5giay@gmail.com</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Bạn cũng có thể gửi trước các câu hỏi hoặc thông tin chuyến đi trực tiếp tới hộp thư của chúng tôi.
                </p>
                <a
                  href={`mailto:Visa5giay@gmail.com?subject=${encodeURIComponent(`[Yêu cầu tư vấn Visa Trung Quốc] ${submittedRecord.fullName} - ${submittedRecord.phone}`)}&body=${encodeURIComponent(`Kính gửi nhân viên tư vấn Visa5S,\n\nTôi vừa đăng ký nhận thông tin tư vấn hồ sơ visa Trung Quốc:\n- Họ và tên: ${submittedRecord.fullName}\n- Số điện thoại: ${submittedRecord.phone}\n- Loại visa muốn tìm hiểu: ${submittedRecord.visaType}\n- Ngày khởi hành dự kiến: ${submittedRecord.departureDate || 'Chưa xác định'}\n\nXin vui lòng liên hệ tư vấn sớm nhất.\nXin cảm ơn!`)}`}
                  className="w-full py-2 px-3 rounded-lg bg-[#eaedff] hover:bg-[#d5e3ff] text-[#001f41] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Mở Email gửi thông tin tới Visa5giay@gmail.com</span>
                </a>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 px-6 rounded-xl bg-[#0051d5] text-white text-xs font-bold hover:bg-[#003ea8] transition-colors shadow-sm"
                >
                  Gửi yêu cầu tư vấn khác
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Họ và tên */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold text-[#001f41]">
                    Họ và tên <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="h-11 px-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  />
                </div>

                {/* Số điện thoại */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-phone" className="text-xs font-bold text-[#001f41]">
                    Số điện thoại (Zalo) <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ví dụ: 0911 909 686"
                    className="h-11 px-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Loại visa muốn tìm hiểu */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-visatype" className="text-xs font-bold text-[#001f41]">
                    Loại visa muốn tìm hiểu <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <select
                    id="form-visatype"
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                    className="h-11 px-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  >
                    <option value="Du lịch">Visa du lịch (L)</option>
                    <option value="Công tác">Visa thương mại (M)</option>
                    <option value="Thăm thân">Visa thăm thân (Q1/Q2)</option>
                    <option value="Du học">Visa học tập (X1/X2)</option>
                    <option value="Chưa xác định">Chưa xác định / Cần tư vấn thêm</option>
                  </select>
                </div>

                {/* Khu vực liên hệ */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-city" className="text-xs font-bold text-[#001f41]">
                    Khu vực liên hệ thuận tiện
                  </label>
                  <select
                    id="form-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-11 px-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  >
                    <option value="TP. Hồ Chí Minh">Khu vực TP. Hồ Chí Minh (Trụ sở Q.10)</option>
                    <option value="Bình Dương">Khu vực Dĩ An / TP. Thủ Đức</option>
                    <option value="Hà Nội">Khu vực Hà Nội (Chi nhánh Thanh Xuân)</option>
                    <option value="Online">Tư vấn trực tuyến / Toàn quốc</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Thời gian dự kiến khởi hành */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-date" className="text-xs font-bold text-[#001f41]">
                    Thời gian dự kiến khởi hành
                  </label>
                  <input
                    id="form-date"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="h-11 px-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  />
                </div>

                {/* Tình trạng lịch sử xuất cảnh */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-passport" className="text-xs font-bold text-[#001f41]">
                    Tình trạng lịch sử xuất cảnh
                  </label>
                  <select
                    id="form-passport"
                    value={passportStatus}
                    onChange={(e) => setPassportStatus(e.target.value)}
                    className="h-11 px-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors"
                  >
                    <option value="da-di-cac-nuoc">Đã từng đi một số nước (Thái, Sing, Hàn, Nhật...)</option>
                    <option value="trang">Hộ chiếu trắng (chưa từng đi nước ngoài)</option>
                    <option value="da-di-trung-quoc">Đã từng có visa Trung Quốc trước đây</option>
                  </select>
                </div>
              </div>

              {/* Nội dung cần hỗ trợ */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-notes" className="text-xs font-bold text-[#001f41]">
                  Nội dung cần hỗ trợ
                </label>
                <textarea
                  id="form-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Chia sẻ thêm về mục đích chuyến đi, công việc hoặc những câu hỏi bạn muốn được giải đáp..."
                  className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0051d5] focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Checkbox đồng ý điều khoản chính sách bảo mật */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="form-agree"
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                  className="mt-0.5 w-4 h-4 rounded text-[#0051d5] accent-[#0051d5]"
                />
                <label htmlFor="form-agree" className="text-[11px] sm:text-xs text-[#43474f] leading-normal select-none">
                  Tôi đồng ý với chính sách bảo mật thông tin của Visa5S. Cam kết bảo mật thông tin cá nhân và không chia sẻ cho bên thứ ba.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-[#0051d5] text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#003ea8] active:scale-[0.99] transition-all disabled:opacity-70 mt-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang Tiếp Nhận...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi Thông Tin Tư Vấn</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
