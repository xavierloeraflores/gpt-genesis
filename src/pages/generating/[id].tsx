import { type NextPage } from "next";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import Header from "npm/components/header/header";
import Footer from "npm/components/Footer/footer";

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
    if (progress < 93) {
      const timer = setTimeout(() => setProgress(progress + 7), 900);
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
      <Header />
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
      <Footer />
    </>
  );
};

export default Generating;
