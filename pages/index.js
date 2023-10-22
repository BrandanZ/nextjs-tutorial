import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
