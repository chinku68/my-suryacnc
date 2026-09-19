import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya CNC Crafts | Custom CNC Design in Hyderabad",
  description:
    "Custom CNC doors, panels, murals and architectural details, designed and finished in Hyderabad.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
