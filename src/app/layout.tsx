import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
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
  title: "Nhà hàng Thu 2 - Đệ nhất Lẩu cua đồng | Đặc sản miền Bắc",
  description: "Nhà hàng Thu 2 chuyên phục vụ lẩu cua đồng tươi ngon, đặc sản miền Bắc. Không gian ấm cúng, phục vụ tận tình. Đặt bàn trực tuyến, giá cả hợp lý.",
  keywords: "nhà hàng, lẩu cua đồng, đặc sản miền bắc, bún riêu cua, đặt bàn trực tuyến, nhà hàng hà nội",
  authors: [{ name: "Nhà hàng Thu 2" }],
  creator: "Nhà hàng Thu 2",
  publisher: "Nhà hàng Thu 2",
  openGraph: {
    title: "Nhà hàng Thu 2 - Đệ nhất Lẩu cua đồng",
    description: "Trải nghiệm hương vị đặc biệt của lẩu cua đồng tươi ngon, được chế biến theo công thức truyền thống của miền Bắc",
    url: "https://nha-hang-thu2.vercel.app",
    siteName: "Nhà hàng Thu 2",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lẩu cua đồng tại Nhà hàng Thu 2",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhà hàng Thu 2 - Đệ nhất Lẩu cua đồng",
    description: "Trải nghiệm hương vị đặc biệt của lẩu cua đồng tươi ngon",
    images: ["/hero-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
