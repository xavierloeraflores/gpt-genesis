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
  const [imageComplete, setImageComplete] = useState(false);
  const [textComplete, setTextComplete] = useState(false);
  const router = useRouter();
  const id: string = router.query.id as string;
  const { data } = api.articles.getArticleTitleById.useQuery({ id: id });

  const { mutate: mutateText } = api.articles.generateArticleText.useMutation({
    onSuccess: (data) => {
      console.log("Successful Text Generation!");
      setProgress(progress + 30);
      setTextComplete(true);
    },
    onError: (error) => {
      console.log("Error!");
      console.log({ error });
    },
  });

  const { mutate: mutateImage } = api.articles.generateArticleImage.useMutation(
    {
      onSuccess: (data) => {
        console.log("Successful Image Generation!");
        setProgress(progress + 30);
        setImageComplete(true);
      },
      onError: (error) => {
        console.log("Error!");
        console.log({ error });
      },
    }
  );

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
    if (progress < 60) {
      const timer = setTimeout(() => setProgress(progress + 7), 900);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (imageComplete && textComplete) {
      setProgress(100);
    }
  }, [imageComplete, textComplete]);

  // useEffect(() => {
  //   console.log("Generating page useEffect");
  //   mutate({ id: id });
  // }, []);

  useEffect(() => {
    const generate = async (_id: string, _title: string) => {
      await Promise.resolve(data);

      console.log("Promise resolved");
      if (data) {
        mutateImage({ id: _id, title: _title });
        mutateText({ id: _id, title: _title });
      }
      console.log("Generating page useEffect");
    };

    if (data && id) {
      const title = data?.title || "Error";
      void generate(id, title);
    }
  }, [data, id, mutateImage, mutateText]);

  useEffect(() => {
    if (progress >= 100) {
      void router.push(`/wiki/${id}`);
    }
  }, [progress, id, router]);

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
