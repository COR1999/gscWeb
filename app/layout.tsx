import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Greystones Sailing Club",
  description: "Official website for Greystones Sailing Club - Ireland's premier sailing club on the beautiful east coast",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/gsc-logo.png", sizes: "any", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
