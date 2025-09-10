import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Greystones Sailing Club",
  description: "Official website for Greystones Sailing Club",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
