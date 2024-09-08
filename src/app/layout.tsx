import { Mada } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import '../../styles/main.scss';
import { ThirdwebProvider } from 'thirdweb/react';

const mada = Mada({
  subsets: ['latin'],
  variable: '--font-mada',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Synexplorer',
  description:
    'Customisable data dashboard for discovering gems and finding direction in the perpetual futures protocol on base.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${mada.variable} `}>
      <body>
        <ThirdwebProvider>
        {children}
        </ThirdwebProvider>
        </body>
    </html>
  );
}
