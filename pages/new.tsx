import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const NewTodo: NextPage = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleClick = async () => {
    setIsSaving(true);
    await fetch("/api/generate-todo", {
      method: "POST",
    });

    setIsSaving(false);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>New ToDo</h1>

        <p>Click the button to automatically generate a ToDo</p>

        <button onClick={handleClick}>Generate ToDo</button>
        {isSaving && "Generating ToDo..."}
      </main>
    </div>
  );
};

export default NewTodo;