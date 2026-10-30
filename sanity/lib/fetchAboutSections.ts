import { cacheLife } from "next/cache";

import { sanityClient } from "./client";
import { ABOUT_QUERY } from "./queries";


type AboutSection = {
    _key: string;
    subHeading: string;
    content: string;
  };

export type AboutSectionsData = {
    _id: string;
    sections: AboutSection[];
    signatureDark?: string;
    signatureLight?: string;
    photo: string
}

export async function getAboutSections() {
    "use cache";

  cacheLife("hours");
    return sanityClient.fetch<AboutSectionsData | null>(ABOUT_QUERY);
}