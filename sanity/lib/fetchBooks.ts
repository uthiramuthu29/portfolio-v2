import { cacheLife } from "next/cache";
import { sanityClient } from "./client";
import { BOOKS_QUERY } from "./queries";

export type Book = {
    _key: string;
    bookImage?: string;
    bookName: string;
}

export type BookSection = {
    _id: string;
    title: string;
    books: Book[] | null;
}

export async function getBooks(){
    "use cache";
      cacheLife("hours");
    return sanityClient.fetch<BookSection[]>(BOOKS_QUERY);
}