import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-red-700">
        <Navbar />
        <main className="flex flex-col justify-center p-3"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
