import { cacheLife } from "next/cache";
import { sanityClient } from "./client";
import { TECH_STACK_QUERY } from "./queries";

export type StackItem = {
    _key: string;
    stackLogo?: string;
    stackName: string;
    stackType: string;
}

export type TechStackSection = {
    _id: string;
    title: string;
    stacks: StackItem[] | null;
}

export async function getTechStacks(){
    "use cache";
      cacheLife("hours");
    return sanityClient.fetch<TechStackSection[]>(TECH_STACK_QUERY);
}