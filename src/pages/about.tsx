import { type NextPage } from "next";
import Head from "next/head";
import Hero from "npm/components/hero/hero";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>GPT Genesis</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center bg-gray-100">
        <Hero />
        <h1>About GPT Genesis</h1>
        <p>
          Welcome to GPT Genesis, your ultimate destination for generating
          Wikipedia-like articles on any topic of your choice!
        </p>
        <p>
          Our web application utilizes cutting-edge technologies such as
          Next.js, TRPC, Prisma, Planet Scale, Vercel, and Tailwind CSS to
          provide you with a seamless user experience. With just a few clicks,
          you can create high-quality, comprehensive articles that are tailored
          to your specifications.
        </p>

        <p>
          At the heart of our application is OpenAI&apos;s powerful GPT-3
          language model, which generates text that is virtually
          indistinguishable from human writing. We leverage this technology to
          create articles that are informative, engaging, and easy to read.
        </p>

        <p>
          But we don&apos;t stop there! In addition to generating text, our
          application can also produce relevant images to accompany your
          articles. With access to a vast database of images, we can ensure that
          your articles are not only informative but visually appealing as well.
        </p>
        <p>
          At GPT Genesis, we are committed to providing our users with the
          highest level of service and quality. Whether you&apos;re a student,
          researcher, or just someone who wants to learn more about a particular
          topic, our application is the perfect tool for you. So why wait? Start
          exploring and generating articles today!
        </p>
      </main>
    </>
  );
};

export default About;
