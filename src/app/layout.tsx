import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Facturely - Suivi de factures et relances clients par IA",
    template: "%s | Facturely",
  },
  description:
    "Facturely aide les freelances, agences et petites entreprises à suivre leurs factures, détecter les retards et générer des relances clients professionnelles.",
  applicationName: "Facturely",
  keywords: [
    "Facturely",
    "suivi de factures",
    "relance client",
    "factures impayees",
    "freelance",
    "agence",
    "beta",
  ],
  authors: [{ name: "Facturely" }],
  creator: "Facturely",
  publisher: "Facturely",
  icons: {
    icon: "/facturelynewlogo.png",
    apple: "/facturelynewlogo.png",
  },
  openGraph: {
    title: "Facturely - Suivi de factures et relances clients par IA",
    description:
      "Suivez vos factures, detectez les retards et preparez des relances clients professionnelles avec l'IA.",
    url: "/",
    siteName: "Facturely",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/facturely-dashboard-wide.png",
        width: 1672,
        height: 941,
        alt: "Apercu du tableau de suivi des factures Facturely",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facturely - Suivi de factures et relances clients par IA",
    description:
      "Suivez vos factures, detectez les retards et preparez des relances clients professionnelles avec l'IA.",
    images: ["/facturely-dashboard-wide.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
