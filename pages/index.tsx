import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="my-16 text-center text-7xl text-blue-600/75">
          Welcome to Wizard App
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-xl">
          <Link href="/model-1" className={styles.card}>
            <h2>Model 01</h2>
            <p>Here is with 2 steps</p>
          </Link>

          <Link href="/model-2" className={styles.card}>
            <h2>Model 02</h2>
            <p>Here is with 3 steps</p>
          </Link>

          <Link href="/model-3" className={styles.card}>
            <h2>Model 03</h2>
            <p>Here is with 4 steps</p>
          </Link>

          <Link href="/model-4" className={styles.card}>
            <h2>Model 04</h2>
            <p>Here is with 5 steps</p>
          </Link>
        </div>
      </div>
    </>
  );
}
