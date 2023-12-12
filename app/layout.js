import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(components)/theme-provider";
import { Nav } from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Nav/>
          {children}
          <script
            type="text/javascript"
            src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
          ></script>
        </ThemeProvider>
      </body>
    </html>
  );
}
