"use client";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import UserProvider from "../context/UserContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-red-600">
        <UserProvider>
          <Navbar />
          <main className="flex flex-col justify-center p-3"> {children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
