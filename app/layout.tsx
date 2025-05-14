import type { Metadata } from "next";
import { Raleway, Outfit } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primeicons/primeicons.css'

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
    <PrimeReactProvider>
      <html lang="es" className={`${raleway.variable} ${outfit.variable}`}>
        <body>
          {children}
        </body>
      </html>
    </PrimeReactProvider>
  );
}
