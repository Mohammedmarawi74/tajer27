import { Slide, DesignConfig } from './types';

export const INITIAL_SLIDES: Slide[] = [
  {
    id: '1',
    question: 'الركائز الاستراتيجية للتحول الرقمي؟',
    recommendation: 'تحليل البيانات والنمو الاقتصادي المستدام',
    bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
    accentColor: '#2563EB'
  },
  {
    id: '2',
    question: 'كيف يمكن تقليل المخاطر الاستثمارية؟',
    recommendation: 'تنويع المحفظة الاستثمارية واستخدام أدوات التحليل الذكية',
    bgGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
    accentColor: '#10B981'
  }
];

export const INITIAL_DESIGN: DesignConfig = {
  primaryColor: '#2563EB',
  secondaryColor: '#1E40AF',
  textColor: '#0F172A',
  accentColor: '#2563EB',
  customCss: '',
  fontSize: 44,
  logoUrl: '/logooo/logo-1.png'
};

export const GRADIENTS = [
  'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
  'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
  'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
  'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)',
  'linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%)',
  'linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)',
];

export const TAG_COLORS = [
  { name: 'Mint Green', value: '#10B981' },
  { name: 'Soft Purple', value: '#A855F7' },
  { name: 'Electric Blue', value: '#2563EB' },
  { name: 'Orange Alert', value: '#F97316' },
];

export const AVAILABLE_LOGOS = [
  { id: 'logo-1', name: 'الشعار الأول', path: '/logooo/logo-1.png' },
  { id: 'logo-2', name: 'الشعار الثاني', path: '/logooo/logo-2.png' },
  { id: 'logo-3', name: 'الشعار الثالث', path: '/logooo/logo-3.png' },
  { id: 'logo-4', name: 'الشعار الرابع', path: '/logooo/logo-4.png' },
];
