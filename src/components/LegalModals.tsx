import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, Mail } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | 'contact' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#17212b] border border-[#243447] w-full max-w-lg rounded-2xl shadow-2xl p-5 relative max-h-[85vh] flex flex-col text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1e2c3a] border border-[#2e4256] text-[#7d97ab] hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content switch */}
        {activeModal === 'privacy' && (
          <>
            <div className="flex items-center gap-2 pb-3 border-b border-[#242f3d] mb-3">
              <ShieldCheck className="w-5 h-5 text-[#2AABEE]" />
              <h3 className="text-base font-bold text-white">Privacy Policy (गोपनीयता नीति)</h3>
            </div>
            <div className="overflow-y-auto pr-2 space-y-3 text-xs text-[#9eb6c9] leading-relaxed">
              <p>
                <strong>अंतिम अद्यतन (Last Updated):</strong> 2026. हम आपकी गोपनीयता का पूर्ण सम्मान करते हैं।
              </p>
              <h4 className="font-bold text-white text-sm">1. सूचना संग्रह (Information Collection)</h4>
              <p>
                यह लैंडिंग पेज आपसे कोई व्यक्तिगत वित्तीय विवरण, पासवर्ड या संवेदनशील डेटा एकत्र नहीं करता है। साइट का उपयोग करते समय सामान्य एनालिटिक्स (जैसे पृष्ठ दृश्य और क्लिक दर) केवल तकनीकी प्रदर्शन और विज्ञापन अनुकूलन (Meta Pixel) के लिए उपयोग किए जा सकते हैं।
              </p>
              <h4 className="font-bold text-white text-sm">2. थर्ड-पार्टी सेवाएं (Third-Party Services)</h4>
              <p>
                हम विज्ञापन विश्लेषण के लिए Meta Pixel का उपयोग करते हैं ताकि वास्तविक उपयोगकर्ताओं तक पहुंच बनाई जा सके। टेलीग्राम लिंक पर क्लिक करने के बाद आप सीधे टेलीग्राम प्लेटफॉर्म की गोपनीयता नीतियों द्वारा शासित होते हैं।
              </p>
              <h4 className="font-bold text-white text-sm">3. डेटा सुरक्षा (Data Security)</h4>
              <p>
                हम किसी भी उपयोगकर्ता की व्यक्तिगत जानकारी न तो बेचते हैं और न ही किसी तीसरे पक्ष के साथ अनैतिक रूप से साझा करते हैं। टेलीग्राम में आपकी प्रोफ़ाइल गोपनीयता सेटिंग्स आपको पूर्ण नियंत्रण प्रदान करती हैं।
              </p>
              <h4 className="font-bold text-white text-sm">4. संपर्क (Contact)</h4>
              <p>
                गोपनीयता संबंधी किसी भी प्रश्न के लिए आप हमसे कम्युनिटी सपोर्ट ईमेल <a href="mailto:dhirajkumar8765zx@gmail.com" className="text-[#2AABEE] underline">dhirajkumar8765zx@gmail.com</a> पर संपर्क कर सकते हैं।
              </p>
            </div>
          </>
        )}

        {activeModal === 'terms' && (
          <>
            <div className="flex items-center gap-2 pb-3 border-b border-[#242f3d] mb-3">
              <FileText className="w-5 h-5 text-[#2AABEE]" />
              <h3 className="text-base font-bold text-white">Terms of Service (नियम और शर्तें)</h3>
            </div>
            <div className="overflow-y-auto pr-2 space-y-3 text-xs text-[#9eb6c9] leading-relaxed">
              <h4 className="font-bold text-white text-sm">1. सेवा की स्वीकृति (Acceptance of Terms)</h4>
              <p>
                इस वेबसाइट और संबंधित टेलीग्राम कम्युनिटी का उपयोग करके, आप इन नियमों और शर्तों का पालन करने के लिए सहमत होते हैं। इस समूह में शामिल होना पूरी तरह से आपकी अपनी इच्छा और विवेक पर निर्भर करता है।
              </p>
              <h4 className="font-bold text-white text-sm">2. शैक्षिक एवं सूचनात्मक उद्देश्य (Educational Purpose Only)</h4>
              <p>
                कम्युनिटी में साझा की गई कोई भी जानकारी केवल सामान्य ज्ञान और शैक्षिक चर्चा के लिए है। यह किसी भी प्रकार की वित्तीय, निवेश, कानूनी या पेशेवर सलाह का गठन नहीं करती है।
              </p>
              <h4 className="font-bold text-white text-sm">3. उपयोगकर्ता आचरण (Code of Conduct)</h4>
              <p>
                सभी सदस्यों से अपेक्षा की जाती है कि वे शालीनता बनाए रखें। किसी भी प्रकार का स्पैम, अश्लीलता, नफरत भरा भाषण, अनचाहा प्रचार या धोखाधड़ी बर्दाश्त नहीं की जाएगी और तत्काल निष्कासन का कारण बनेगी।
              </p>
              <h4 className="font-bold text-white text-sm">4. गैर-संबद्धता (Non-Affiliation)</h4>
              <p>
                यह कम्युनिटी एक स्वतंत्र मंच है और इसका टेलीग्राम (Telegram FZ-LLC) या मेटा/फेसबुक (Meta Platforms, Inc.) से कोई आधिकारिक अनुबंध या स्वामित्व नहीं है।
              </p>
            </div>
          </>
        )}

        {activeModal === 'disclaimer' && (
          <>
            <div className="flex items-center gap-2 pb-3 border-b border-[#242f3d] mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Full Legal Disclaimer (कानूनी अस्वीकरण)</h3>
            </div>
            <div className="overflow-y-auto pr-2 space-y-3 text-xs text-[#9eb6c9] leading-relaxed">
              <div className="p-3 bg-[#241c14] border border-amber-900/50 rounded-xl text-amber-200 text-[11px] leading-relaxed">
                <strong>महत्वपूर्ण सूचना:</strong> इस कम्युनिटी में प्रस्तुत जानकारी किसी भी प्रकार के वित्तीय लाभ या निश्चित परिणामों की गारंटी नहीं देती है।
              </div>
              <p>
                <strong>1. कोई निवेश सलाह नहीं (No Investment Advice):</strong> इस चैनल/ग्रुप में दी गई सामग्री केवल चर्चा और अध्ययन के उद्देश्य से है। हम SEBI-पंजीकृत सलाहकार नहीं हैं। किसी भी वित्तीय या व्यापारिक निर्णय लेने से पहले अपने प्रमाणित वित्तीय सलाहकार से परामर्श अवश्य लें।
              </p>
              <p>
                <strong>2. जोखिम की स्वीकृति (Assumption of Risk):</strong> वित्तीय बाजारों या किसी भी गतिविधि में जोखिम शामिल हो सकता है। किसी भी निर्णय और उसके परिणाम की संपूर्ण जिम्मेदारी उपयोगकर्ता की स्वयं की होगी।
              </p>
              <p>
                <strong>3. कोई शुल्क नहीं (Zero Charges):</strong> हमारा ग्रुप पूरी तरह से निशुल्क है। यदि कोई व्यक्ति हमारे नाम पर आपसे पैसे मांगता है, तो तुरंत एडमिन्स को रिपोर्ट करें।
              </p>
            </div>
          </>
        )}

        {activeModal === 'contact' && (
          <>
            <div className="flex items-center gap-2 pb-3 border-b border-[#242f3d] mb-3">
              <Mail className="w-5 h-5 text-[#2AABEE]" />
              <h3 className="text-base font-bold text-white">Contact & Support (संपर्क व सहायता)</h3>
            </div>
            <div className="space-y-3 text-xs text-[#9eb6c9] leading-relaxed">
              <p className="text-white font-medium">
                Please contact us at <a href="mailto:dhirajkumar8765zx@gmail.com" className="text-[#2AABEE] underline font-bold">dhirajkumar8765zx@gmail.com</a> for any questions or support. We also respect your privacy and follow fair Terms of Service.
              </p>
              <div className="bg-[#111c27] border border-[#203040] rounded-xl p-3.5 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-[#1d2d3e]">
                  <span className="text-white font-bold">Official Support Email:</span>
                  <a href="mailto:dhirajkumar8765zx@gmail.com" className="text-[#2AABEE] font-mono text-[12px] hover:underline">dhirajkumar8765zx@gmail.com</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-[#1d2d3e]">
                  <span className="text-[#7d97ab] font-medium">Business / Operations:</span>
                  <span className="text-white text-[11px]">Digital Community Operations, India</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#7d97ab]">Response Time:</span>
                  <span className="text-emerald-400 font-semibold">Within 24–48 Hours</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#7d97ab]">Report Abuse/Spam:</span>
                  <span className="text-amber-400 font-semibold">Directly in Telegram via Admin DM</span>
                </div>
              </div>
              <p className="text-[11px] text-[#7d97ab]">
                हम आपकी गोपनीयता का पूर्ण सम्मान करते हैं और सभी सदस्यों के लिए निष्पक्ष नियम व शर्तों (Fair Terms of Service) का पालन करते हैं।
              </p>
            </div>
          </>
        )}

        {/* Footer close button */}
        <div className="pt-3 border-t border-[#242f3d] mt-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#2AABEE] text-white text-xs font-bold hover:bg-[#24A1DE] transition cursor-pointer"
          >
            समझ गए (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
