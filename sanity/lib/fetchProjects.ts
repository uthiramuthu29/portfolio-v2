import { sanityClient } from "./client";
import { PROJECTS_QUERY } from "./queries";
import type { Project } from "./types";
import { cacheLife } from "next/cache";

export async function getProjects():Promise<Project[]> {
    "use cache"

    cacheLife("hours")
    return sanityClient.fetch<Project[]>(PROJECTS_QUERY);
}