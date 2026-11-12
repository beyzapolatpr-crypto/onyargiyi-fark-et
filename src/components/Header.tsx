import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  overallProgress: number;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', index: '01', label: 'Ana Sayfa', shortLabel: 'Ana Sayfa' },
  { id: 'concepts', index: '02', label: 'Irkçılığı Tanı', shortLabel: 'Kavramlar' },
  { id: 'scenarios', index: '03', label: 'Bu Bir Önyargı mı?', shortLabel: 'Senaryolar' },
  { id: 'empathy', index: '04', label: 'Empati Simülasyonu', shortLabel: 'Empati' },
  { id: 'quiz', index: '05', label: 'Kendini Test Et', shortLabel: 'Test' },
  { id: 'action', index: '06', label: 'Değişim Seninle Başlar', shortLabel: 'Eylem' },
  { id: 'bibliography', index: '07', label: 'Kaynakça', shortLabel: 'Kaynakça' },
];

const HEADER_LINKS: NavItem[] = NAV_ITEMS.filter((item) => item.id !== 'quiz');

export function Header({ activeSection, onNavigate, overallProgress }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id: SectionId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5F0]/95 backdrop-blur-sm border-b border-[#121110]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#121110] hover:text-[#6B1422] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B1422]"
        >
          ÖNYARGIYI FARK ET
        </button>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Ana gezinme"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4E4A45]"
        >
          {HEADER_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B1422] ${
                  isActive
                    ? 'text-[#6B1422] font-semibold'
                    : 'text-[#4E4A45] hover:text-[#121110]'
                }`}
              >
                {item.shortLabel}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#6B1422] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('quiz')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1422] ${
              activeSection === 'quiz'
                ? 'bg-[#121110] text-[#F8F5F0]'
                : 'bg-[#6B1422] text-[#F8F5F0] hover:bg-[#4F0D18]'
            }`}
          >
            Kendini Test Et
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#121110] border border-[#121110]/15 hover:bg-[#ECE5D8] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Subtle overall progress hairline */}
      <div
        className="w-full h-[2px] bg-[#ECE5D8]"
        role="progressbar"
        aria-valuenow={overallProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Genel öğrenme ilerlemesi"
      >
        <div
          className="h-full bg-[#6B1422] transition-all duration-300 ease-out"
          style={{ width: `${overallProgress}%` }}
        />
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobil gezinme"
          className="lg:hidden bg-[#F8F5F0] border-t border-[#121110]/10 px-4 py-4"
        >
          <div className="flex flex-col divide-y divide-[#121110]/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`py-3 px-2 flex items-center justify-between text-left min-h-[44px] transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#6B1422] font-semibold'
                      : 'text-[#121110] hover:text-[#6B1422]'
                  }`}
                >
                  <span className="text-sm">
                    <span className="font-mono text-xs text-[#4E4A45] mr-3 tabular-nums">
                      {item.index}
                    </span>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="text-xs font-mono text-[#6B1422]">Aktif</span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
