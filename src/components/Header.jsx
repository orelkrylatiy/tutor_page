'use client';

import { Moon, Sun, ChevronRight } from 'lucide-react';
import Button from '../UI/Button';
import useTheme from '../hooks/useTheme';

export default function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <nav>
      <a className="nav-logo" href="#top">
        <span className="nav-logo-mark" aria-hidden="true">
          <img src="/images/brainwave-mark.svg" alt="" />
        </span>
        <span className="nav-logo-text">BrainWave</span>
      </a>
      <div className="nav-links" aria-label="Секции">
        <a href="#about">Обо мне</a>
        <a href="#tutor-track">Репетиторство</a>
        <a href="#mentor-track">Менторство</a>
        <a href="#trial">Пробное занятие</a>
        <a href="#gift">Подарок</a>
      </div>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
        >
          <span className="theme-toggle-icon">{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</span>
        </button>
        <Button href="#trial" className="nav-cta">
          Первое занятие бесплатно <ChevronRight size={16} />
        </Button>
      </div>
    </nav>
  );
}
