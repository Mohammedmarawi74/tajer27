import { Slide, DesignConfig } from './types';

export const INITIAL_SLIDES: Slide[] = [
  {
    id: '1',
    question: 'الركائز الاستراتيجية للتحول الرقمي؟',
    recommendation: 'تحليل البيانات والنمو الاقتصادي المستدام',
    bgGradient: 'radial-gradient(circle at center, #111827, #000000)'
  },
  {
    id: '2',
    question: 'كيف يمكن تقليل المخاطر الاستثمارية؟',
    recommendation: 'تنويع المحفظة الاستثمارية واستخدام أدوات التحليل الذكية',
    bgGradient: 'radial-gradient(circle at center, #064e3b, #000000)'
  }
];

export const INITIAL_DESIGN: DesignConfig = {
  primaryColor: '#10b981',
  secondaryColor: '#064e3b',
  textColor: '#ffffff',
  accentColor: '#10b981',
  customCss: '',
  fontSize: 48,
  logoUrl: '/logooo/logo-1.png'
};

export const GRADIENTS = [
  'radial-gradient(circle at center, #111827, #000000)',
  'radial-gradient(circle at center, #064e3b, #000000)',
  'radial-gradient(circle at center, #312e81, #000000)',
  'radial-gradient(circle at center, #4c1d95, #000000)',
  'radial-gradient(circle at center, #7c2d12, #000000)',
  'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
];

export const AVAILABLE_LOGOS = [
  { id: 'logo-1', name: 'الشعار الأول', path: '/logooo/logo-1.png' },
  { id: 'logo-2', name: 'الشعار الثاني', path: '/logooo/logo-2.png' },
  { id: 'logo-3', name: 'الشعار الثالث', path: '/logooo/logo-3.png' },
  { id: 'logo-4', name: 'الشعار الرابع', path: '/logooo/logo-4.png' },
];
