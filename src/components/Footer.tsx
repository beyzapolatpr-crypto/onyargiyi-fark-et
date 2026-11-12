import { useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import { SectionId } from '../types';
import { NAV_ITEMS } from './Header';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onResetProgress: () => void;
}

export function Footer({ onNavigate, onResetProgress }: FooterProps) {
  const [justReset, setJustReset] = useState(false);

  const handleReset = () => {
    onResetProgress();
    setJustReset(true);
    window.setTimeout(() => setJustReset(false), 2500);
  };

  return (
    <footer className="bg-[#121110] text-[#F8F5F0] border-t border-[#121110]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#F8F5F0]/15">
          <div className="md:col-span-5">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#F8F5F0]">
              ÖNYARGIYI FARK ET
            </h2>
            <p className="mt-2 text-sm text-[#ECE5D8]/80 max-w-md leading-relaxed">
              Görünmeyen Ayrımcılığı Keşfet. Gençler ve üniversite öğrencileri için
              hazırlanmış; ırkçılık, etnik ayrımcılık, kalıp yargılar ve örtük önyargılar
              üzerine etkileşimli sosyal farkındalık platformu.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#ECE5D8]/60 mb-4">
              Bölümler
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="text-[#ECE5D8]/85 hover:text-[#F8F5F0] transition-colors text-left cursor-pointer"
                  >
                    <span className="font-mono text-xs opacity-60 mr-2 tabular-nums">
                      {item.index}
                    </span>
                    {item.shortLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#ECE5D8]/60 mb-3">
                Öğrenme Verisi
              </p>
              <p className="text-xs text-[#ECE5D8]/75 leading-relaxed mb-4">
                İlerlemeniz yalnızca kendi tarayıcınızda saklanır; hiçbir kişisel veri
                toplanmaz veya paylaşılmaz.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium border border-[#F8F5F0]/25 text-[#F8F5F0] hover:bg-[#F8F5F0]/10 transition-colors cursor-pointer"
            >
              {justReset ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  İlerleme Sıfırlandı
                </>
              ) : (
                <>
                  <RotateCcw className="w-3.5 h-3.5" />
                  İlerlemeyi Sıfırla
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#ECE5D8]/65">
          <p>
            Sosyal Farkındalık ve Eşitlik Projesi · Eğitim ve Empati Amaçlı İçerik
          </p>
          <p>
            Önyargıları sorgulamak öğrenmeyle başlar.
          </p>
        </div>
      </div>
    </footer>
  );
}
