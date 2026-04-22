import { ChevronRight } from 'lucide-react';
import Button from '../UI/Button';

export default function CtaSection() {
  return (
    <div className="cta-section" id="trial">
      <div className="cta-inner fade-up">
        <h2 className="cta-title">Первое занятие бесплатно.</h2>
        <div className="cta-right">
          <p className="cta-sub">Определим уровень, найдём проблемные темы, разберём реальное задание и выстроим стратегию.</p>
          <Button href="https://t.me/agafonwave" className="cta-btn" target="_blank" rel="noreferrer">
            Написать в Telegram <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
