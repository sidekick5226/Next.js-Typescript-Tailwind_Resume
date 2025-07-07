import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connor Bailey - Computer Engineering Student",
  description: "Senior Computer Engineering student at Mississippi State University with expertise in C++, Python, JavaScript, and modern web technologies. Experienced in electrical systems, PowerBI analytics, and full-stack development.",
  keywords: ["Connor Bailey", "Computer Engineering", "Mississippi State University", "Software Developer", "C++", "Python", "JavaScript", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Connor Bailey" }],
  creator: "Connor Bailey",
  openGraph: {
    title: "Connor Bailey - Computer Engineering Student",
    description: "Senior Computer Engineering student at Mississippi State University with expertise in C++, Python, JavaScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
