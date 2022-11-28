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
      <body>
        <Navbar />
        <main className="bottom-5"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
