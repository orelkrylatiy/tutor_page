import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Максим Сергеевич — репетитор по информатике и математике',
  description: 'Системная подготовка к ЕГЭ и обучение веб-разработке с нуля.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var stored = localStorage.getItem('theme');
              var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
              document.documentElement.dataset.theme = theme;
            } catch (e) {
              document.documentElement.dataset.theme = 'dark';
            }
          })();
        `}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/brainwave-mark.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
