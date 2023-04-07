import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";

export interface images {
  image: string;
}

export interface SearchResultProps {
  title: string;
  id: string;
  generated: number;
  images: images[];
}

const SearchResult: React.FC<SearchResultProps> = ({
  title,
  id,
  generated,
  images,
}) => {
  console.log("hello", id, title);
  let link = `/wiki/${id}`;
  if (!generated || generated == 0) {
    link = `/generating/${id}`;
  }
  console.log("imagesxxxx", images);
  return (
    <Link
      href={link}
      className="my-1 flex w-full w-full rounded-sm border bg-white p-1"
    >
      <Avatar.Root className="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA3 align-middle">
        {images && images[0] ? (
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={images[0]?.image}
            alt={`AI Generated image of ${title}`}
          />
        ) : null}

        <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium text-slate11">
          {title[0]}
        </Avatar.Fallback>
      </Avatar.Root>
      <span className="">{title}</span>
    </Link>
  );
};

export default SearchResult;
