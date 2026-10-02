import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { AuthProvider } from "@/context/AuthContext";
import { CommandPalette } from "@/components/common/CommandPalette";

export const metadata: Metadata = {
  title: "Mailvora — Reach the right companies. Without the repetitive work.",
  description: "Mailvora turns your resume and career goals into targeted company discovery, personalized recruiter outreach and organized follow-ups.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased min-h-screen font-sans">
        <ThemeProvider>
          <ToastProvider>
            <AuthProvider>
              {children}
              <CommandPalette />
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
