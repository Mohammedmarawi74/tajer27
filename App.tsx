import React, { useState, useRef, useCallback } from 'react';
import { Slide, DesignConfig, ActiveTab } from './types';
import { INITIAL_SLIDES, INITIAL_DESIGN } from './constants';
import TopBar from './components/TopBar';
import EditorSidebar from './components/EditorSidebar';
import Canvas from './components/Canvas';
import './styles.css';

// We assume html-to-image is loaded in index.html
declare const htmlToImage: any;

const App: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>(INITIAL_SLIDES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [design, setDesign] = useState<DesignConfig>(INITIAL_DESIGN);
  const [activeTab, setActiveTab] = useState<ActiveTab>('content');
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const currentSlide = slides[currentIndex];

  const updateSlide = useCallback((updates: Partial<Slide>) => {
    setSlides(prev => {
      const newSlides = [...prev];
      newSlides[currentIndex] = { ...newSlides[currentIndex], ...updates };
      return newSlides;
    });
  }, [currentIndex]);

  const updateDesign = useCallback((updates: Partial<DesignConfig>) => {
    setDesign(prev => ({ ...prev, ...updates }));
  }, []);

  const addNewSlide = () => {
    const newSlide: Slide = {
      id: Math.random().toString(36).substr(2, 9),
      question: 'أضف سؤالك هنا...',
      recommendation: 'توصية جديدة',
      bgGradient: currentSlide.bgGradient
    };
    setSlides([...slides, newSlide]);
    setCurrentIndex(slides.length);
  };

  const deleteSlide = (idx: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== idx);
    setSlides(newSlides);
    setCurrentIndex(Math.max(0, idx - 1));
  };

  const handleExport = async () => {
    if (!canvasRef.current || isExporting) return;
    setIsExporting(true);
    try {
      const dataUrl = await htmlToImage.toPng(canvasRef.current, {
        pixelRatio: 2,
        quality: 1,
      });
      const link = document.createElement('a');
      link.download = `radar-investor-slide-${currentIndex + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="app-container">
      <TopBar onExport={handleExport} isExporting={isExporting} />

      <div className="app-body">
        {/* Editor Sidebar */}
        <EditorSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          slide={currentSlide}
          updateSlide={updateSlide}
          design={design}
          updateDesign={updateDesign}
        />

        {/* Main Canvas Area */}
        <main className="canvas-area">
          <div className="canvas-shortcut">
             <kbd>Tab</kbd>
             <span>للتنقل بين الأوضاع</span>
          </div>

          <Canvas
            slide={currentSlide}
            design={design}
            canvasRef={canvasRef}
          />

          {/* Bottom Thumbnails */}
          <div className="thumbnails-container">
            {slides.map((s, idx) => (
              <div key={s.id} className="thumbnail-wrapper">
                <button
                  onClick={() => setCurrentIndex(idx)}
                  className={`thumbnail ${idx === currentIndex ? 'active' : ''}`}
                  style={{ background: s.bgGradient }}
                >
                   <div className="thumbnail-number">{idx + 1}</div>
                </button>
                {slides.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteSlide(idx); }}
                    className="thumbnail-delete"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addNewSlide}
              className="thumbnail-add"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
