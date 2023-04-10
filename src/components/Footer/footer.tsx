import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-100">
      <Link href="/">
        <span className="font-bold">GPT Genesis</span>
      </Link>
      <span className="text-center">Wikis by ChatGPT</span>
      <span className="text-center">Created by Xavier Loera Flores</span>
      <span className="text-center">
        Made with Next.js, TRPC, Prisma, and Tailwind{" "}
      </span>
    </footer>
  );
};

export default Footer;
