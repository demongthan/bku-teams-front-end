import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LightDarkProvider } from "@/theme/LightDarkProvider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BKU Teams",
  description: "",
};

function getTheme() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie ? themeCookie.value : "dark";
  return theme;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getTheme();
  
  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }}>
      <body className={inter.className}>
        <LightDarkProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </LightDarkProvider>
      </body>
    </html>
  );
}
