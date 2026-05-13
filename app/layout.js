import "./globals.css";

export const metadata = {
  title: "Dildo's Detailing",
  description: "Premium auto detailing services"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
