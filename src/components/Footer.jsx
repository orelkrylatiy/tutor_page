export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-about">
          <div className="footer-label">Обо мне</div>
          <h2 className="footer-title">Максим Сергеевич</h2>
          <p className="footer-text">
            Репетитор по информатике и математике, фронтенд-разработчик в Т-Банке. Помогаю выстроить понятный план и довести до результата.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <div className="footer-label">Направления</div>
            <ul className="footer-list">
              <li>ЕГЭ по информатике</li>
              <li>Профильная математика</li>
              <li>Веб-разработка</li>
            </ul>
          </div>
          <div>
            <div className="footer-label">Контакт</div>
            <a className="footer-contact" href="https://t.me/agafonwave" target="_blank" rel="noreferrer">
              Telegram →
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a className="footer-logo" href="#top">
          <span className="footer-logo-mark" aria-hidden="true">
            <img src="/images/brainwave-mark.svg" alt="" />
          </span>
          <span className="footer-logo-text">BrainWave</span>
        </a>
        <span className="footer-note">Информатика · Математика · Веб-разработка</span>
      </div>
    </footer>
  );
}
