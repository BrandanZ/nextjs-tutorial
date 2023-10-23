import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum,
        ullam veniam deleniti illum facere minima adipisci et eveniet saepe aut
        fugiat vitae enim illo, debitis quidem facilis repudiandae quam!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore earum,
        ullam veniam deleniti illum facere minima adipisci et eveniet saepe aut
        fugiat vitae enim illo, debitis quidem facilis repudiandae quam!
      </p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
  );
}
