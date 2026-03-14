import React from 'react';
import { Slide, DesignConfig, ActiveTab } from '../types';
import { suggestSimilarQuestion } from '../services/geminiService';
import { GRADIENTS, AVAILABLE_LOGOS, TAG_COLORS } from '../constants';

interface EditorSidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  slide: Slide;
  updateSlide: (updates: Partial<Slide>) => void;
  design: DesignConfig;
  updateDesign: (updates: Partial<DesignConfig>) => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({
  activeTab,
  setActiveTab,
  slide,
  updateSlide,
  design,
  updateDesign
}) => {
  const [isSuggesting, setIsSuggesting] = React.useState(false);

  const handleAiSuggest = async () => {
    setIsSuggesting(true);
    const suggestion = await suggestSimilarQuestion(slide.question);
    updateSlide(suggestion);
    setIsSuggesting(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'slide') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'logo') updateDesign({ logoUrl: reader.result as string });
        else updateSlide({ image: reader.result as string });
      };
      reader.readAsDataURL(file);
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    }
  };

  const handleLogoSelect = (logoPath: string) => {
    updateDesign({ logoUrl: logoPath });
  };

  const handleRemoveLogo = () => {
    updateDesign({ logoUrl: undefined });
  };

  return (
    <aside className="editor-sidebar">
      {/* Tabs */}
      <div className="editor-tabs">
        <button
          onClick={() => setActiveTab('content')}
          className={`editor-tab ${activeTab === 'content' ? 'active' : ''}`}
        >
          المحتوى
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`editor-tab ${activeTab === 'design' ? 'active' : ''}`}
        >
          التصميم
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`editor-tab ${activeTab === 'css' ? 'active' : ''}`}
        >
          CSS
        </button>
      </div>

      <div className="editor-content">
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">السؤال الرئيسي</label>
              <textarea
                value={slide.question}
                onChange={(e) => updateSlide({ question: e.target.value })}
                className="form-textarea medium"
                placeholder="اكتب سؤالك هنا..."
              />
              <button
                onClick={handleAiSuggest}
                disabled={isSuggesting}
                className="ai-suggest-btn"
              >
                {isSuggesting ? (
                  <div className="spinner spinner-small" />
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                اسأل الذكاء الاصطناعي (اقتراح سؤال)
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">التوصية الذكية</label>
              <textarea
                value={slide.recommendation}
                onChange={(e) => updateSlide({ recommendation: e.target.value })}
                className="form-textarea small"
                placeholder="اكتب التوصية هنا..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">لون التمييز</label>
              <div className="tag-color-picker">
                {TAG_COLORS.map((tagColor) => (
                  <button
                    key={tagColor.value}
                    onClick={() => updateSlide({ accentColor: tagColor.value })}
                    className={`tag-color-option ${slide.accentColor === tagColor.value ? 'active' : ''}`}
                    style={{ 
                      backgroundColor: `${tagColor.value}15`,
                      borderColor: `${tagColor.value}40`,
                      color: tagColor.value
                    }}
                  >
                    <span 
                      className="tag-color-dot"
                      style={{ backgroundColor: tagColor.value }}
                    />
                    {tagColor.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">صورة الشريحة (اختياري)</label>
              <input
                type="file"
                accept="image/*"
                id="slide-img"
                className="hidden"
                key={slide.image ? 'with-image' : 'no-image'}
                onChange={(e) => handleFileUpload(e, 'slide')}
              />
              <label htmlFor="slide-img" className="file-upload-wrapper">
                {slide.image ? (
                  <div className="file-upload-preview">
                    <img src={slide.image} className="h-20 mx-auto object-cover" style={{ borderRadius: '0 !important' }} />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        updateSlide({image: undefined});
                      }}
                      className="file-upload-remove"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="file-upload-placeholder">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">اضغط لرفع صورة</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">الخلفية (قوالب جاهزة)</label>
              <div className="gradient-picker">
                {GRADIENTS.map((grad, i) => (
                  <button
                    key={i}
                    onClick={() => updateSlide({ bgGradient: grad })}
                    className={`gradient-option ${slide.bgGradient === grad ? 'active' : ''}`}
                    style={{ background: grad }}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">لون السمة الرئيسي</label>
              <div className="color-picker-wrapper">
                <input
                  type="color"
                  value={design.primaryColor}
                  onChange={(e) => updateDesign({ primaryColor: e.target.value })}
                  className="color-picker-input"
                />
                <input
                  type="text"
                  value={design.primaryColor}
                  onChange={(e) => updateDesign({ primaryColor: e.target.value })}
                  className="color-picker-text"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">حجم الخط</label>
              <input
                type="range"
                min="24"
                max="80"
                value={design.fontSize}
                onChange={(e) => updateDesign({ fontSize: Number(e.target.value) })}
                className="range-slider"
              />
              <div className="range-value">{design.fontSize}px</div>
            </div>

            <div className="form-group">
              <label className="form-label">شعار المنصة (Logo)</label>

              {/* Logo Selection Grid */}
              <div className="logo-grid">
                {AVAILABLE_LOGOS.map((logo) => (
                  <button
                    key={logo.id}
                    onClick={() => handleLogoSelect(logo.path)}
                    className={`logo-option ${
                      design.logoUrl === logo.path ? 'active' : ''
                    }`}
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="w-12 h-12 mx-auto object-contain"
                    />
                    <p className="logo-option-name">{logo.name}</p>
                    {design.logoUrl === logo.path && (
                      <div className="logo-checkmark">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="divider-text">أو رفع شعار مخصص</div>

              {/* Custom Logo Upload */}
              <input
                type="file"
                accept="image/*"
                id="logo-img"
                className="hidden"
                key={design.logoUrl && !AVAILABLE_LOGOS.find(l => l.path === design.logoUrl) ? 'custom-logo' : 'no-logo'}
                onChange={(e) => handleFileUpload(e, 'logo')}
              />
              <label htmlFor="logo-img" className="logo-uploader">
                <div className="logo-uploader-content">
                  {design.logoUrl && !AVAILABLE_LOGOS.find(l => l.path === design.logoUrl) ? (
                    <img src={design.logoUrl} className="w-8 h-8 object-cover" style={{ borderRadius: '0 !important' }} />
                  ) : (
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  <span className="text-xs text-gray-400">
                    {design.logoUrl && !AVAILABLE_LOGOS.find(l => l.path === design.logoUrl)
                      ? 'تغيير الشعار المخصص'
                      : 'رفع شعار خاص'}
                  </span>
                </div>
              </label>

              {/* Remove Logo Button */}
              {design.logoUrl && (
                <button
                  onClick={handleRemoveLogo}
                  className="remove-logo-btn"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  إزالة الشعار تماماً
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'css' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="form-label mb-0">محرر CSS المخصص</label>
              <span className="css-badge">احترافي</span>
            </div>
            <textarea
              value={design.customCss}
              onChange={(e) => updateDesign({ customCss: e.target.value })}
              className="css-editor"
              placeholder={`/* مثال */\n.slide-container {\n  transform: rotate(-1deg);\n  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));\n}\n.question-text-modern {\n  text-decoration: underline;\n}`}
            />
            <p className="css-hint">
              استخدم الكلاسات:{' '}
              <code>.slide-container</code>,{' '}
              <code>.question-text-modern</code>,{' '}
              <code>.recommendation-tag-modern</code>
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default EditorSidebar;
