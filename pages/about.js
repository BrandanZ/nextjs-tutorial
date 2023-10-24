import Head from "next/head";
import styles from "@/styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          earum, ullam veniam deleniti illum facere minima adipisci et eveniet
          saepe aut fugiat vitae enim illo, debitis quidem facilis repudiandae
          quam!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          earum, ullam veniam deleniti illum facere minima adipisci et eveniet
          saepe aut fugiat vitae enim illo, debitis quidem facilis repudiandae
          quam!
        </p>
      </div>
    </>
  );
};

export default About;
