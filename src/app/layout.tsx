import { Inter, Mada } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import "../../styles/main.scss";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";

const mada = Mada({
  subsets: ["latin"],
  variable: "--font-mada",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  style: ["normal"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Synexplorer",
  description:
    "Customisable data dashboard for discovering gems and finding direction in the perpetual futures protocol on base.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${mada.variable} ${inter.variable}`}>
      <body>
        <ThirdwebProvider>
          <Theme>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "0.5rem" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 3000,
                },
                style: {
                  fontSize: "1rem",
                  maxWidth: "31.25rem",
                  padding: "1rem 1.5rem",
                  backgroundColor: "#172826",
                  color: "#0effdf",
                  animation: "fade-in 0.5s",
                  borderRadius: "0.4rem",
                },
              }}
            />

            {children}
          </Theme>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
