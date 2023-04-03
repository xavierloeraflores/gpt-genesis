import { type NextPage } from "next";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";

const Generating: NextPage = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const id: string = router.query.id as string;

  const { mutate } = api.articles.generate.useMutation({
    onSuccess: (data) => {
      console.log("Successful Page Generation!");
      setProgress(100);
      void router.push(`/wiki/${id}`);
    },
    onError: (error) => {
      console.log("Error!");
      console.log({ error });
    },
  });
  useEffect(() => {
    if (progress < 90) {
      const timer = setTimeout(() => setProgress(progress + 10), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    console.log("Generating page useEffect");
    mutate({ id: id });
  }, []);

  return (
    <>
      <Head>
        <title>GPT Genesis</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold">GPT Genesis</h1>
        <h2 className="text-center text-2xl font-bold">Wikis by ChatGPT</h2>
        <h3 className="text-center">Created by Xavier Loera Flores</h3>
      </header>
      <main>
        <h1>Generating</h1>
        <Progress.Root
          className="relative h-[25px] w-[300px] overflow-hidden rounded-full bg-blackA9"
          style={{
            // Fix overflow clipping in Safari
            // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
            transform: "translateZ(0)",
          }}
          value={progress}
        >
          <Progress.Indicator
            className="ease-[cubic-bezier(0.65, 0, 0.35, 1)]  h-full w-full bg-green-500 transition-transform duration-[660ms]"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </main>
    </>
  );
};

export default Generating;
