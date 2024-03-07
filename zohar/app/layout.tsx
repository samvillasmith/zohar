import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from "@/components/modal-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zohar",
  description: "Zohar is an AI platform for conversational chatbots as well as music, video, and code generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
