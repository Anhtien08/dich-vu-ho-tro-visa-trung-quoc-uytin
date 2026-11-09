/**
 * Google Ads & Analytics tracking utility for Visa5S
 * Preserves Google Ads Conversion ID: AW-16749372104
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GOOGLE_ADS_ID = 'AW-16749372104';

/**
 * Track phone call click
 */
export const trackPhoneCall = (phoneNumber: string = '0911909686') => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_call', {
      event_category: 'contact',
      event_label: phoneNumber,
      send_to: GOOGLE_ADS_ID,
    });
  }
};

/**
 * Track Zalo chat click
 */
export const trackZaloClick = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_zalo', {
      event_category: 'contact',
      event_label: 'Zalo Chat',
      send_to: GOOGLE_ADS_ID,
    });
  }
};

/**
 * Track successful form submission ONLY (never fires just on button click)
 */
export const trackFormSuccess = (formData: {
  fullName?: string;
  phone?: string;
  visaType?: string;
}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Conversion event specifically for Google Ads
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
      event_category: 'lead',
      event_label: formData.visaType || 'Tư vấn visa Trung Quốc',
    });

    // Standard Lead event
    window.gtag('event', 'generate_lead', {
      currency: 'VND',
      value: 1,
    });
  }
};
