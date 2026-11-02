import Banner from "@/components/Banner";
import BookSection from "@/components/BookSection";
import { getBooks } from "@/sanity/lib/fetchBooks";

export default async function BookShelf() {
  const bookSections = await getBooks();

  return (
    <div className="bookshelf">
      <main>
        <Banner title="Bookshelf" para="Books and pieces of wisdom I’ve enjoyed reading." />
        {bookSections.map((section) => (
          <BookSection key={section._id} title={section.title} books={section.books ?? []} />
        ))}
        {/* <BookSection title="Harry Potter" books={harryPotterBookData} />
        <BookSection title="Ponniyin Selvan" books={ponniyinSelvanBookData} />
        <BookSection title="Sivagamiyin Sabadham" books={sivagamiyinSabadhamBookData} />
        <BookSection title="Crime Fiction" books={crimeFictionBookData} />
        <BookSection title="Non-Fiction" books={nonFictionBookData} /> */}
      </main>
    </div>
  );
}