import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@app/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABA ПЛАНЕТА, ABA-терапия ош, Логопед ош, ЛФК-массаж ош",
  description: "Коррекционный центр развития особенных детей города Ош ABA планета предоставляет информацию о своих услугах и ценах на них, рассказывает о своих основных направлениях: ABA-терапия, Психология, Мелкая моторика, Дефектология, Раннее развитие, Логомассаж , ЛФК, Логоритмика, Логопелия, Педиатрия, Сенсорная интеграция, Индивидуально-комплексный подход, Групповые занятия",
  keywords: "Коррекционный центр развития особенных детей города Ош, Логопед ош, Логопедический центр ош, Лого массаж ош, Логопедический массаж ош, речевое развитие ош, ABA-терапия, ABA-терапия ош, ABA терапия ош, АБА-терапия ош, АБА терапия ош, ABA-специалист ош, АБА специалист ош, Прикладной анализ поведения детей ош, ЛФК ош, ЛФК массаж ош, ЛФК-массаж ош, Детский массаж ош, Лечебная физкультура ош, Сенсорная интеграция ош, СИ детей ош, нарушениями восприятия детей ош, Групповые занятия для детей ош, в городе Ош",
  robots: "",
  openGraph: {
    type: "website",
    countryName: "Кыргызстан, Ош",
    siteName: "",
    url: "",
    title: "Коррекционный центр развития особенных детей города Ош ABA: планета",
    images: "/main_ent.webp"
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: "/logo-aba.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
