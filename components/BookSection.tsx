import Image from "next/image";

type BookCardsProp = {
  bookimg: string
}

type BookSectionProps = {
  title: string,
  books: string[]
}

function BookCards({ bookimg }: BookCardsProp) {
  return (
    <div className="bookcards">
      <Image className="w-full h-full" width={260} height={200} src={bookimg} alt="Books" />
    </div>
  );
}

export default function BookSection({ title, books }: BookSectionProps) {
  return (
    <section className="book-section mb-20 last-of-type:mb-13 ">
      <h2 className="text-[32px] lg:text-[48px] text-[#C5C5C5] dark:text-[#808080] font-bold mb-8 ">{title}</h2>
      <div className="grid grid-cols-2 gap-4.5 lg:grid-cols-4 lg:gap-6 ">
        {books.map((book, index) => {
          return <BookCards key={index} bookimg={book} />
        })}
      </div>
    </section>
  );
}
