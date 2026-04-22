'use client';

import { LaptopMinimal, CalendarDays, Clock3, BarChart3 } from 'lucide-react';
import { tracks, steps, devCases } from '../data/benefits';
import ResultCard from './benefits/ResultCard';
import AboutSection from './benefits/AboutSection';
import TrackTabs from './benefits/TrackTabs';
import StepsSection from './benefits/StepsSection';
import DevCases from './benefits/DevCases';
import GiftSection from './benefits/GiftSection';

const pills = ['ЕГЭ по информатике — 95', 'ITMO Computer Science', 'Т-Банк · 3 года', '30+ учеников'];
const formats = [
  [LaptopMinimal, 'Онлайн', 'Zoom или Телемост + интерактивная доска'],
  [CalendarDays, 'Расписание', '1–2 раза в неделю, подстраиваемся под ученика'],
  [Clock3, 'Длительность', '60 или 90 минут на занятие'],
  [BarChart3, 'Статистика и материалы', 'Прогресс, обратная связь, база заданий и видеоразборы'],
];

export default function Benefits() {
  return (
    <>
      <ResultCard />
      <AboutSection pills={pills} />
      <TrackTabs tracks={tracks} />
      <StepsSection steps={steps} />
      <DevCases devCases={devCases} />

      <section>
        <h2 className="section-label">Формат</h2>
        <div className="format-grid fade-up">
          {formats.map(([Icon, label, value]) => (
            <div className="format-item" key={label}>
              <div className="ficon"><Icon size={18} strokeWidth={2} /></div>
              <div>
                <div className="flabel">{label}</div>
                <div className="fval">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GiftSection />
    </>
  );
}
