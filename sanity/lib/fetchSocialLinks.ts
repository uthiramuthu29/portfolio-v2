import { cacheLife } from "next/cache";
import { sanityClient } from "./client";
import { SOCIAL_LINKS_QUERY } from "./queries";

export type SocialLink = {
  _key: string;
  platform: "linkedin" | "instagram" | "github" | "email" | "whatsapp" | "resume";
  url: string;
  fileUrl?: string;
};

export type SocialLinksData = {
  _id: string;
  links: SocialLink[];
};

export async function getSocialLinks() {
  "use cache";
  cacheLife("hours");
  return sanityClient.fetch<SocialLinksData | null>(SOCIAL_LINKS_QUERY);
}
