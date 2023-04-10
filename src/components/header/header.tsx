import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-gray-100">
      <Link href="/">
        <h1 className="text-6xl font-bold">GPT Genesis</h1>
      </Link>
      <h2 className="text-center text-2xl font-bold">Wikis by ChatGPT</h2>
      <h3 className="text-center">Created by Xavier Loera Flores</h3>
    </header>
  );
};

export default Header;
