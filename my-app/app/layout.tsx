import type { Metadata, Viewport } from "next";
import "./globals.css"; // Asegúrate que el archivo esté en /app/globals.css
export const metadata: Metadata = {
  title: "Taiwan Barber | Minimalist Grooming",
  description: "Reserva tu turno en la barbería más exclusiva de estética oriental.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Taiwan Barber",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white antialiased text-black">
        {children}
      </body>
    </html>
  );
}