import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Pizza New Haven en Querétaro`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pizza New Haven",
    "pizzería Querétaro",
    "pizza artesanal Querétaro",
    "masa fermentación lenta",
    "mejor pizza Querétaro",
    "FORNO",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Pizza New Haven en Querétaro`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Pizza New Haven en Querétaro`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#15110d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${manrope.variable}`}
    >
      <body className="grain-fixed relative min-h-dvh bg-ivory text-soft-black antialiased">
        {children}
      </body>
    </html>
  );
}
