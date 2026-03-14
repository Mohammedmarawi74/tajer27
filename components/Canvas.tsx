import React from 'react';
import { Slide, DesignConfig } from '../types';

interface CanvasProps {
  slide: Slide;
  design: DesignConfig;
  canvasRef: React.RefObject<HTMLDivElement>;
}

const Canvas: React.FC<CanvasProps> = ({ slide, design, canvasRef }) => {
  return (
    <div className="slide-wrapper">
      {/* CSS Injection */}
      <style>{design.customCss}</style>

      {/* Main Slide Area */}
      <div
        ref={canvasRef}
        id="main-slide"
        className="slide-container"
        style={{
          background: slide.bgGradient || 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
        }}
      >
        {/* Subtle Background Pattern */}
        <div className="slide-bg-pattern" />

     

        {/* Decorative Corner Elements */}
        <div className="slide-corner-decoration slide-corner-tl" />
        <div className="slide-corner-decoration slide-corner-br" />

        {/* Content Section */}
        <div className="slide-content-modern">
          {slide.image && (
            <div className="slide-image-container-modern">
              <img src={slide.image} className="w-full h-full object-cover" />
              {design.logoUrl && (
                <div className="slide-logo-overlay">
                  <img src={design.logoUrl} alt="Logo" className="slide-logo-overlay-img" />
                </div>
              )}
            </div>
          )}

          <h2
            className="question-text-modern"
            style={{
              fontSize: `${design.fontSize}px`,
              color: design.textColor || '#0F172A',
            }}
          >
            {slide.question}
          </h2>

          <div
            className="recommendation-tag-modern"
            style={{ 
              backgroundColor: `${slide.accentColor || design.primaryColor}15`,
              borderColor: `${slide.accentColor || design.primaryColor}40`,
              color: slide.accentColor || design.primaryColor
            }}
          >
            <span className="recommendation-icon">✦</span>
            {slide.recommendation}
          </div>
        </div>

        {/* Modern Footer */}
        <div className="slide-footer-modern">
          <div className="slide-footer-content">
            <span className="slide-footer-brand">منصة التاجر الرقمية</span>
            <div className="slide-footer-divider" />
            <span className="slide-footer-url">dtajer.com</span>
          </div>
        </div>

        {/* Gradient Accent Bar */}
        <div 
          className="slide-accent-bar"
          style={{ 
            background: `linear-gradient(90deg, ${slide.accentColor || design.primaryColor}, ${design.secondaryColor})`
          }}
        />
      </div>

      {/* Soft Glow Effect */}
      <div className="slide-glow-modern" />
    </div>
  );
};

export default Canvas;
