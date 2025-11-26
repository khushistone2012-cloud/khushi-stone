import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 m-0 p-0">
        <Navbar /> {/* fixed navbar */}
        {children} {/* homepage or other pages */}
        <Footer />
      </body>
    </html>
  );
}
