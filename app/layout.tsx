import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marley Alford",
  description: "Selected data and links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          data-goatcounter="https://marleyalford.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  );
}
