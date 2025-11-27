
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Khushi Stone",
  description: "Premium Grey Granite Supplier",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9S314VF0L5');
          `}
        </Script>
      </head>
      <body className="bg-gray-50 m-0 p-0">
        <Navbar /> {/* fixed navbar */}
        {children} {/* homepage or other pages */}
        <Footer />
      </body>
    </html>
  );
}
