import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Outfit } from 'next/font/google';

export const metadata: Metadata = {
  title: "Carrocerías David",
  description: "Servicios, venta y mantenimiento de todo tipo de carrocerías y remolques.",
};

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--text-font',
  display: 'swap',
  weight: ['400', '500', '600']
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--title-font',
  display: 'swap',
  weight: ['600', '700', '800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
