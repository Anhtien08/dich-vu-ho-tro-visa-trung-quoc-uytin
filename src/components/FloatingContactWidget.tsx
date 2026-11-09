import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackPhoneCall, trackZaloClick, trackFormSuccess } from '../utils/analytics';

interface FloatingContactWidgetProps {
  onOpenConsultationForm: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenConsultationForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickPhone, setQuickPhone] = useState('');
  const [quickName, setQuickName] = useState('');
  const [quickVisa, setQuickVisa] = useState('Du lịch');
  const [isSent, setIsSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;

    // Trigger Google Ads conversion ONLY upon successful submission
    trackFormSuccess({
      fullName: quickName,
      phone: quickPhone,
      visaType: quickVisa,
    });

    setIsSent(true);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Contact Popup Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-[#eaedff] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#001f41] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Tư Vấn Thông Tin Visa5S</h4>
                <span className="text-[11px] text-[#a9c8fc]">Hỗ trợ thông tin theo nhu cầu</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSent(false);
              }}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            {/* Direct Contact Channels */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:0911909686"
                onClick={() => trackPhoneCall('0911909686')}
                className="p-2.5 rounded-xl bg-[#eaedff] hover:bg-[#d5e3ff] flex items-center gap-2 text-[#001f41] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0051d5] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="truncate text-left">
                  <span className="text-[10px] text-slate-500 block leading-tight">Gọi hotline</span>
                  <span className="text-xs font-bold leading-tight truncate">0911.909.686</span>
                </div>
              </a>

              <a
                href="https://zalo.me/0911909686"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackZaloClick}
                className="p-2.5 rounded-xl bg-[#eaedff] hover:bg-[#d5e3ff] flex items-center gap-2 text-[#001f41] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0051d5] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div className="truncate text-left">
                  <span className="text-[10px] text-slate-500 block leading-tight">Zalo tư vấn</span>
                  <span className="text-xs font-bold leading-tight">Chat ngay</span>
                </div>
              </a>
            </div>

            {/* Direct Email link to Visa5giay@gmail.com */}
            <a
              href="mailto:Visa5giay@gmail.com?subject=Tư vấn thông tin Visa Trung Quốc&body=Kính gửi nhân viên tư vấn Visa5S, tôi muốn được giải đáp thắc mắc về hồ sơ visa Trung Quốc:"
              className="p-2.5 rounded-xl bg-[#f2f3ff] hover:bg-[#eaedff] flex items-center justify-between text-xs font-semibold text-[#001f41] transition-colors border border-[#eaedff]"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0051d5]" />
                <span>Gửi mail: Visa5giay@gmail.com</span>
              </div>
              <span className="text-[10px] text-[#0051d5] font-bold">Gửi</span>
            </a>

            {/* Quick Consultation Mini Form */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-[#001f41] block mb-2">
                Để lại số điện thoại nhận trao đổi thông tin:
              </span>

              {isSent ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-800">Đã gửi yêu cầu thành công!</p>
                  <p className="text-[11px] text-emerald-700 leading-snug">
                    Nhân viên Visa5S sẽ liên hệ trao đổi nhu cầu qua <strong>Visa5giay@gmail.com</strong> và số điện thoại của bạn.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setQuickPhone('');
                      setQuickName('');
                    }}
                    className="text-[10px] text-[#0051d5] font-semibold underline mt-1"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-2">
                  <input
                    type="text"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="Họ và tên của bạn"
                    className="w-full h-9 px-3 text-xs rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0051d5] focus:bg-white"
                  />
                  <input
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="Số điện thoại / Zalo *"
                    className="w-full h-9 px-3 text-xs rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0051d5] focus:bg-white"
                  />
                  <select
                    value={quickVisa}
                    onChange={(e) => setQuickVisa(e.target.value)}
                    className="w-full h-9 px-2.5 text-xs rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0051d5] focus:bg-white text-slate-700"
                  >
                    <option value="Du lịch">Visa du lịch (L)</option>
                    <option value="Công tác">Visa thương mại (M)</option>
                    <option value="Thăm thân">Visa thăm thân (Q1/Q2)</option>
                    <option value="Du học">Visa học tập (X1/X2)</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full h-9 rounded-lg bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi yêu cầu trao đổi thông tin</span>
                  </button>
                </form>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenConsultationForm();
              }}
              className="w-full text-center text-[11px] text-[#0051d5] font-semibold hover:underline pt-1 block"
            >
              Mở biểu mẫu tư vấn đầy đủ &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 h-12 sm:h-14 px-4 sm:px-5 rounded-full bg-[#0051d5] hover:bg-[#003ea8] text-white shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
        aria-label="Liên hệ tư vấn"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
        </span>

        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-bold">Đóng</span>
          </>
        ) : (
          <>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-4 h-4 animate-bounce" />
            </div>
            <span className="text-xs sm:text-sm font-bold">Liên hệ Visa5S</span>
          </>
        )}
      </button>
    </div>
  );
};
