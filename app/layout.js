import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Roubly",
  description: "Roubly is your go-to destination for cutting-edge web development solutions. We specialize in crafting bespoke websites and applications tailored to meet your unique business needs. With our team of experienced developers and designers, we turn ideas into reality, ensuring your online presence stands out in the digital landscape. Let us empower your business with creativity, innovation, and technical excellence. Get in touch with us today to elevate your online presence with Roubly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
