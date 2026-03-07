
export interface Slide {
  id: string;
  question: string;
  recommendation: string;
  image?: string;
  bgGradient?: string;
}

export interface DesignConfig {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  accentColor: string;
  logoUrl?: string;
  customCss: string;
  fontSize: number;
}

export type ActiveTab = 'content' | 'design' | 'css';
