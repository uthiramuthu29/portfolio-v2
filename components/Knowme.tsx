import Link from "next/link";
import Image from "next/image";

type KnowCardsProps = {
  title: string;
  description: string;
  src: string;
  imgClass: string;
  toPath: string;
};

const knowCardsData = [
  {
    id: 1,
    title: "About me",
    description: "Who I am and what I do",
    src: "/AboutMemoji.png",
    imgClass: "mx-auto mb-[40px]",
    toPath: "/about",
  },
  {
    id: 2,
    title: "Get in touch",
    description: "Let’s build something awesome.",
    src: "/Contact.png",
    imgClass: "mx-auto max-w-[350px] mb-[40px]",
    toPath: "/contact",
  },
  {
    id: 3,
    title: "Bookshelf",
    description: "Books and pieces of wisdom I’ve enjoyed reading",
    src: "/Bookshelf.png",
    imgClass: "rounded-b-[32px]",
    toPath: "/books",
  },
  {
    id: 4,
    title: "Tech Stack",
    description: "The dev tools, apps, devices, and games I use and play.",
    src: "/TechStack.png",
    imgClass: "rounded-b-[32px]",
    toPath: "/stack",
  },
];

function KnowCards({
  title,
  description,
  src,
  imgClass,
  toPath,
}: KnowCardsProps) {
  return (
    <div className="each-card bg-[#F6F6F6] dark:bg-[#151515] border border-[#EBEBEB] dark:border-none rounded-4xl text-center">
      <Link href={toPath}>
        <h3 className="text-[24px] lg:text-[32px] text-[#181818] dark:text-white font-extrabold mb-2 lg:mb-4 pt-8 lg:pt-15 ">
          {title}
        </h3>
        <p className="text-[15px] lg:text-[16px] text-[#808080] font-normal mb-17 ">
          {description}
        </p>
        <Image
          className={`${imgClass}`}
          src={src}
          width={350}
          height={350}
          alt={title}
        />
      </Link>
    </div>
  );
}

export default function Knowme() {
  return (
    <div className="know-me mb-28.5">
      <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-8 ">
        Get to know me
      </h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {knowCardsData.map((knowCard) => (
          <KnowCards
            key={knowCard.id}
            toPath={knowCard.toPath}
            src={knowCard.src}
            imgClass={knowCard.imgClass}
            title={knowCard.title}
            description={knowCard.description}
          />
        ))}
      </div>
    </div>
  );
}
