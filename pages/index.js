import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum,
        ullam veniam deleniti illum facere minima adipisci et eveniet saepe aut
        fugiat vitae enim illo, debitis quidem facilis repudiandae quam!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum,
        ullam veniam deleniti illum facere minima adipisci et eveniet saepe aut
        fugiat vitae enim illo, debitis quidem facilis repudiandae quam!
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
      <Footer />
    </div>
  );
}
