import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شناژ - پلتفرم خرید و فروش صنعت ساختمان",
  description: "شناژ - پلتفرم خرید و فروش صنعت ساختمان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className="bg-primary ">{children}</body>
    </html>
  );
}
