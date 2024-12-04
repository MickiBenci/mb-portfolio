import "@/assets/css/uikit.min.css";
import "@/assets/css/custom.min.css";
import { JetBrains_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/src/components/Navbar/Header";
import Footer from "@/src/components/Footer/Footer";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
export const viewport = {
  themeColor: "#ffffff",
};
export const metadata = {
  title: "MB Web Design",
  description:
    "Portfolio di Michelangelo Bencivenga. Realizzazione siti web e web app a Napoli",
  icons: {
    icon: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    manifest: "/site.webmanifest",
    maskIcon: { url: "/safari-pinned-tab.svg", color: "#5bbad5" },
  },
  other: { name: "robots", content: "index, follow" },
  openGraph: {
    title: "MB Web Design",
    siteName: "MB Web Design",
    url: "https://www.mbencivenga.it",
    description:
      "Portfolio di Michelangelo Bencivenga. Realizzazione siti web e web app a Napoli",
    type: "website",
    images: [{ url: "/foto-michelangelo-bencivenga.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" style={{ scrollBehavior: "smooth" }}>
      <GoogleTagManager gtmId="GTM-KP83QXPP" />
      <body className={jetbrains.className}>
        <Header />
        <div id="mobile-dialog"></div>
        {children}
        <Footer />
        {
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.9/js/uikit.min.js"
            integrity="sha512-OZ9Sq7ecGckkqgxa8t/415BRNoz2GIInOsu8Qjj99r9IlBCq2XJlm9T9z//D4W1lrl+xCdXzq0EYfMo8DZJ+KA=="
            crossOrigin="anonymous"
          ></script>
        }
      </body>
    </html>
  );
}
