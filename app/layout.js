import "@/assets/css/uikit.min.css";
import "@/assets/css/custom.min.css";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "MB Web Design",
  description: "Portfolio di Michelangelo Bencivenga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
