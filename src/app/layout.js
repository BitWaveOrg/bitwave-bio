import Head from 'next/head';
import "@/app/globals.css";

export const metadata = {
  title: "BitWave Bio Landing",
  description: "This is BitWave Bio's landing page.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Добавьте сюда другие метатеги */}
      </Head>
      <body>{children}</body>
      </html>
  );
}
