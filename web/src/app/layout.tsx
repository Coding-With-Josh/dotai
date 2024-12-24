import type { Metadata } from "next";
import { Inter, Jost, Lato, Poppins, Roboto, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";

const font = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  // weight: ["100", "300", "400", "700", "900"],
  // weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dot",
  description: "Where AI meets decentralizex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className ={font.className}
      >
        <Providers>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        {children}
        </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
