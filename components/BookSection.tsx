import Image from "next/image";
import type { Book } from "@/sanity/lib/fetchBooks";

type BookSectionProps = {
  title: string;
  books: Book[];
};

function BookCards({ book }: { book: Book }) {
  return (
    <div className="bookcards">
      {book.bookImage && (
        <Image
          className="w-full h-full"
          width={260}
          height={200}
          src={book.bookImage}
          alt={book.bookName}
        />
      )}
    </div>
  );
}

export default function BookSection({ title, books }: BookSectionProps) {
  return (
    <section className="book-section mb-20 last-of-type:mb-13 ">
      <h2 className="text-[32px] lg:text-[48px] text-[#C5C5C5] dark:text-[#808080] font-bold mb-8 ">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4.5 lg:grid-cols-4 lg:gap-6 ">
        {books.map((book) => {
          return <BookCards key={book._key} book={book} />;
        })}
      </div>
    </section>
  );
}
