import { Inter } from "next/font/google";
import "./globals.css";

import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import Image from 'next/image'

const name = 'Rex Shi'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rex Shi",
  description: "Exploring Ideas and Innovations with me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
