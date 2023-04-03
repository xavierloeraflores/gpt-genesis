import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";

export interface SearchResultProps {
  title: string;
  id: string;
  generated: number;
}

const SearchResult: React.FC<SearchResultProps> = ({
  title,
  id,
  generated,
}) => {
  console.log("hello", id, title);
  let link = `/wiki/${id}`;
  if (!generated || generated == 0) {
    link = `/generating/${id}`;
  }
  return (
    <Link
      href={link}
      className="my-1 flex w-full w-full rounded-sm border bg-white p-1"
    >
      <Avatar.Root className="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA3 align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />

        <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium text-slate11">
          {title[0]}
        </Avatar.Fallback>
      </Avatar.Root>
      <span className="">{title}</span>
    </Link>
  );
};

export default SearchResult;
