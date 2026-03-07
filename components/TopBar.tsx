import React from 'react';

interface TopBarProps {
  onExport: () => void;
  isExporting: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onExport, isExporting }) => {
  return (
    <header className="top-bar">
      <div className="top-bar-brand">
        <div className="top-bar-logo">
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z" />
          </svg>
        </div>
        <h1 className="top-bar-title">رادار المستثمر</h1>
        <span className="top-bar-badge">رؤية 2030</span>
      </div>

      <div className="top-bar-actions">
        <button
          onClick={onExport}
          disabled={isExporting}
          className="export-btn"
        >
          {isExporting ? (
            <div className="spinner spinner-small" />
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          )}
          تصدير الصورة (PNG)
        </button>
      </div>
    </header>
  );
};

export default TopBar;
