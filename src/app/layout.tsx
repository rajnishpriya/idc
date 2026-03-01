import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indudentalclinic.com"),
  title: "Indu Dental Clinic | Best Dentist in Siwan Bihar | Dental Care Near Naya Bazar",
  description:
    "Indu Dental Clinic in Siwan, Bihar offers root canal, teeth cleaning, tooth extraction and complete dental care. Book appointment via WhatsApp today.",
  keywords:
    "dentist in Siwan, dental clinic Siwan Bihar, best dentist Siwan, teeth whitening Siwan, dental implants Siwan, braces Siwan, root canal Siwan, orthodontist Siwan, smile makeover Siwan, Indu Dental Clinic, dental treatment Siwan, tooth extraction Siwan, cosmetic dentistry Siwan, dental clinic near me Siwan",
  authors: [{ name: "Indu Dental Clinic" }],
  creator: "Indu Dental Clinic",
  publisher: "Indu Dental Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.indudentalclinic.com/",
    siteName: "Indu Dental Clinic Siwan",
    title: "Indu Dental Clinic Siwan | Best Dentist in Siwan Bihar",
    description:
      "Indu Dental Clinic in Siwan, Bihar – Your trusted dentist for teeth whitening, dental implants, braces, root canal, smile makeover & all dental treatments. Near Sadar Hospital, Naya Bazar, Siwan.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Indu Dental Clinic Siwan Bihar - Best Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indu Dental Clinic Siwan | Best Dentist in Siwan Bihar",
    description:
      "Your trusted dental clinic in Siwan, Bihar. Expert dentists for all dental treatments – implants, braces, whitening, root canal & more.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://www.indudentalclinic.com/",
  },
  // TODO: Paste your Google Search Console verification code below. It will inject a <meta name="google-site-verification" content="..." /> tag into your head.
  // Example: google: "aBcD_eFgHiJkLmnOpQr-123456",
  verification: {
    google: "gSMDaVDeypKTd5KAYtKwhATg45sSfZVqTzxNaziHStI",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0056B3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Indu Dental Clinic",
              image: "https://www.indudentalclinic.com/images/hero.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Naya Bazar, Babhnauli",
                addressLocality: "Siwan",
                addressRegion: "Bihar",
                postalCode: "841226",
                addressCountry: "IN",
              },
              telephone: "+919931862472",
              priceRange: "₹₹",
              url: "https://www.indudentalclinic.com",
              sameAs: [
                "https://www.facebook.com/indudental",
                "https://www.instagram.com/indudental",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased text-[#333333] bg-[#f8f9fa] flex flex-col min-h-screen selection:bg-[#0056B3]/20 selection:text-[#0056B3]`}
      >
        <Navigation />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
