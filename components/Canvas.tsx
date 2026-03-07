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
          background: slide.bgGradient || 'black',
        }}
      >
        {/* Decorative Overlay */}
        <div className="slide-decorative-overlay" />

        {/* Logo Section */}
        {design.logoUrl && (
          <div className="slide-logo-section">
            <span className="slide-logo-text">Radar Al-Mustathmir</span>
            <div className="slide-logo-image">
              <img src={design.logoUrl} alt="Logo" />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="slide-content">
          {slide.image && (
            <div className="slide-image-container">
              <img src={slide.image} className="w-full h-full object-cover" />
            </div>
          )}

          <h2
            className="question-text"
            style={{
              fontSize: `${design.fontSize}px`,
              color: design.textColor,
              textShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            {slide.question}
          </h2>

          <div
            className="recommendation-text"
            style={{ color: design.primaryColor }}
          >
            {slide.recommendation}
          </div>
        </div>

        {/* Footer */}
        <div 
          className="slide-footer"
          style={{
            background: `linear-gradient(90deg, 
              ${design.primaryColor}33 0%, 
              ${design.primaryColor}99 50%, 
              ${design.primaryColor}33 100%)`,
            borderTop: `1px solid ${design.primaryColor}66`,
            boxShadow: `0 -2px 15px ${design.primaryColor}33, 0 0 20px ${design.primaryColor}1a`
          }}
        >
          <span className="slide-footer-right">منصة المستثمر</span>
          <span className="slide-footer-left">al_investor.com</span>
        </div>

        {/* Dynamic Accents */}
        <div
          className="slide-accent-top"
          style={{ backgroundColor: design.primaryColor }}
        />
        <div
          className="slide-accent-bottom"
          style={{ backgroundColor: design.primaryColor }}
        />
      </div>

      {/* Decorative Glow behind the card */}
      <div className="slide-glow" />
    </div>
  );
};

export default Canvas;
