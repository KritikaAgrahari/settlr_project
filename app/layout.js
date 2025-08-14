import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "SeTtLr",
  description: "The most smarted way to split expenses with peers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* in heading of brower  */}
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
            <body className={`${inter.className}`}>

              <ConvexClientProvider>
 <Header />
            <main className="min-h-screen"> {children}</main>
       </ConvexClientProvider>
      </body>
    </html>
  );
}
