import React, { createContext, useContext, useState } from 'react';
import { Language } from '@/types/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Landing Page
    'hero.title': 'Smart Farm Management Portal',
    'hero.subtitle': 'Empowering Farmers with Technology, AI & Language Support',
    'button.login': 'Login',
    'button.register': 'Register',
    'nav.selectLanguage': 'Select Language',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.cropManagement': 'Crop Management',
    'dashboard.cropManagement.desc': 'Track crops, sowing, and yield predictions',
    'dashboard.livestock': 'Livestock & Poultry',
    'dashboard.livestock.desc': 'Health monitoring, feed reminders, disease alerts',
    'dashboard.irrigation': 'Irrigation & Resources',
    'dashboard.irrigation.desc': 'Water schedules, fertilizer recommendations',
    'dashboard.market': 'Market Updates',
    'dashboard.market.desc': 'Current mandi prices, demand forecasts',
    'dashboard.training': 'Training & Education',
    'dashboard.training.desc': 'Biosecurity, farming videos, guides with voice',
    'dashboard.community': 'Community Forum',
    'dashboard.community.desc': 'Connect with nearby farmers',
  },
  hi: {
    // Landing Page
    'hero.title': 'स्मार्ट कृषि प्रबंधन पोर्टल',
    'hero.subtitle': 'तकनीक, AI और भाषा समर्थन के साथ किसानों को सशक्त बनाना',
    'button.login': 'लॉगिन',
    'button.register': 'पंजीकरण',
    'nav.selectLanguage': 'भाषा चुनें',
    
    // Dashboard
    'dashboard.welcome': 'वापसी पर स्वागत है',
    'dashboard.cropManagement': 'फसल प्रबंधन',
    'dashboard.cropManagement.desc': 'फसलों को ट्रैक करें, बुआई और उपज की भविष्यवाणी',
    'dashboard.livestock': 'पशुधन और मुर्गी पालन',
    'dashboard.livestock.desc': 'स्वास्थ्य निगरानी, फ़ीड रिमाइंडर, बीमारी चेतावनी',
    'dashboard.irrigation': 'सिंचाई और संसाधन',
    'dashboard.irrigation.desc': 'पानी का कार्यक्रम, उर्वरक सिफारिशें',
    'dashboard.market': 'बाजार अपडेट',
    'dashboard.market.desc': 'वर्तमान मंडी की कीमतें, मांग पूर्वानुमान',
    'dashboard.training': 'प्रशिक्षण और शिक्षा',
    'dashboard.training.desc': 'जैव सुरक्षा, कृषि वीडियो, आवाज के साथ गाइड',
    'dashboard.community': 'सामुदायिक मंच',
    'dashboard.community.desc': 'आस-पास के किसानों से जुड़ें',
  },
  te: {
    // Landing Page
    'hero.title': 'స్మార్ట్ వ్యవసాయ నిర్వహణ పోర్టల్',
    'hero.subtitle': 'సాంకేతికత, AI మరియు భాషా మద్దతుతో రైతులను బలపరుస్తుంది',
    'button.login': 'లాగిన్',
    'button.register': 'నమోదు',
    'nav.selectLanguage': 'భాష ఎంచుకోండి',
    
    // Dashboard
    'dashboard.welcome': 'తిరిగి స్వాగతం',
    'dashboard.cropManagement': 'పంట నిర్వహణ',
    'dashboard.cropManagement.desc': 'పంటలను ట్రాక్ చేయండి, విత్తనాలు మరియు దిగుబడి అంచనాలు',
    'dashboard.livestock': 'పశువులు మరియు పౌల్ట్రీ',
    'dashboard.livestock.desc': 'ఆరోగ్య పర్యవేక్షణ, ఆహార రిమైండర్లు, వ్యాధి హెచ్చరికలు',
    'dashboard.irrigation': 'నీటిపారుదల మరియు వనరులు',
    'dashboard.irrigation.desc': 'నీటి షెడ్యూల్స్, ఎరువుల సిఫార్సులు',
    'dashboard.market': 'మార్కెట్ అప్‌డేట్‌లు',
    'dashboard.market.desc': 'ప్రస్తుత మండి ధరలు, డిమాండ్ అంచనాలు',
    'dashboard.training': 'శిక్షణ మరియు విద్య',
    'dashboard.training.desc': 'బయోసెక్యూరిటీ, వ్యవసాయ వీడియోలు, వాయిస్‌తో గైడ్‌లు',
    'dashboard.community': 'కమ్యూనిటీ ఫోరమ్',
    'dashboard.community.desc': 'సమీపంలోని రైతులతో కనెక్ట్ అవ్వండి',
  },
  kn: {
    // Landing Page
    'hero.title': 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ನಿರ್ವಹಣಾ ಪೋರ್ಟಲ್',
    'hero.subtitle': 'ತಂತ್ರಜ್ಞಾನ, AI ಮತ್ತು ಭಾಷಾ ಬೆಂಬಲದೊಂದಿಗೆ ರೈತರನ್ನು ಶಕ್ತಿಗೊಳಿಸುವುದು',
    'button.login': 'ಲಾಗಿನ್',
    'button.register': 'ನೋಂದಣಿ',
    'nav.selectLanguage': 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
    
    // Dashboard
    'dashboard.welcome': 'ಮತ್ತೆ ಸ್ವಾಗತ',
    'dashboard.cropManagement': 'ಬೆಳೆ ನಿರ್ವಹಣೆ',
    'dashboard.cropManagement.desc': 'ಬೆಳೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ, ಬಿತ್ತನೆ ಮತ್ತು ಇಳುವರಿ ಮುನ್ಸೂಚನೆಗಳು',
    'dashboard.livestock': 'ಜಾನುವಾರು ಮತ್ತು ಪೌಲ್ಟ್ರಿ',
    'dashboard.livestock.desc': 'ಆರೋಗ್ಯ ಮಾನಿಟರಿಂಗ್, ಆಹಾರ ಜ್ಞಾಪನೆಗಳು, ರೋಗ ಎಚ್ಚರಿಕೆಗಳು',
    'dashboard.irrigation': 'ನೀರಾವರಿ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',
    'dashboard.irrigation.desc': 'ನೀರಿನ ವೇಳಾಪಟ್ಟಿಗಳು, ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು',
    'dashboard.market': 'ಮಾರುಕಟ್ಟೆ ಅಪ್‌ಡೇಟ್‌ಗಳು',
    'dashboard.market.desc': 'ಪ್ರಸ್ತುತ ಮಂಡಿ ಬೆಲೆಗಳು, ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆಗಳು',
    'dashboard.training': 'ತರಬೇತಿ ಮತ್ತು ಶಿಕ್ಷಣ',
    'dashboard.training.desc': 'ಬಯೋಸೆಕ್ಯೂರಿಟಿ, ಕೃಷಿ ವೀಡಿಯೋಗಳು, ಧ್ವನಿಯೊಂದಿಗೆ ಮಾರ್ಗದರ್ಶಿಗಳು',
    'dashboard.community': 'ಸಮುದಾಯ ವೇದಿಕೆ',
    'dashboard.community.desc': 'ಹತ್ತಿರದ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};