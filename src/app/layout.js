import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/component/landingPage/Navigation";
import Footer from "@/component/landingPage/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/component/Contextlogin/AuthContext";
import RequestCallback from "@/component/landingPage/RequestCallback";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LMS",
  describtion: "LMS - Learning Management System",
  icons: {
    icon: "/webseederlogo.jpg",
    shortcut: "/webseederlogo.jpg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <AuthProvider>
        <Navigation />

        {/* Dynamic Content Section */}
        <main className="flex-grow ">{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* Fixed Footer */}
        <RequestCallback />
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
