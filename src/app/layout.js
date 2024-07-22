import "./globals.css";

export const metadata = {
  title: "BitWave Bio Landing",
  description: "This is BitWave Bio's landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
