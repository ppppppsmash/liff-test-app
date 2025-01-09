// app/layout.tsx

import "../styles/globals.css";
import { LiffProvider } from "./liff/LiffProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIFF App",
  description: "A sample LIFF app using Next.js App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LiffProvider>
          <header>
            <nav>
              <a href="/">Home</a>
              {/* 他のナビゲーションリンクを追加可能 */}
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2024 Your Company</p>
          </footer>
        </LiffProvider>
      </body>
    </html>
  );
}