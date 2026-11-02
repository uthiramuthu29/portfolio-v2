import { cacheLife } from "next/cache";
import { sanityClient } from "./client";
import { INTRO_QUERY } from "./queries";

export type IntroButton = {
    _key: string;
    label: string;
    linkType: "internal" | "external" | "resume";
    url?: string;
    openInNewTab?: boolean;
}

export type IntroData = {
    _id: string;
    greeting: string;
    greetingImage?: string;
    namePrefix: string;
    name: string;
    description: string;
    image?: string;
    buttons: IntroButton[]
}

export async function getIntro(){
    "use cache";
    cacheLife("hours");
    return sanityClient.fetch<IntroData | null>(INTRO_QUERY);
}