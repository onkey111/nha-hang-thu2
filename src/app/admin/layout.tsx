import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - Nhà hàng Thu 2",
  description: "Hệ thống quản trị Nhà hàng Thu 2",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
