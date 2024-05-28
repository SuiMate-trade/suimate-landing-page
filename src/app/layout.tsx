import "@/styles/global.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import ProgressBarProvider from "@/components/ProgressBarProvider";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale} className={nunito.className}>
      <body>
        <ProgressBarProvider>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full max-h-screen min-h-screen overflow-auto">
              {props.children}
            </div>
          </div>
        </ProgressBarProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
