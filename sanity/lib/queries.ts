import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(_createdAt asc) {
    _id,
    title,
    description,
    "darkLogo": darkLogo.asset->url,
    "lightLogo": lightLogo.asset->url,
    "image": image.asset->url,
    projectUrl,
    featured
    }`);

export const ABOUT_QUERY = defineQuery(`
    *[_type == "aboutSections"][0] {
    _id,
    sections[]{
        _key,
        subHeading,
        content,
    },
    "signatureDark": signatureDark.asset->url,
    "signatureLight": signatureLight.asset->url,
    "photo": photo.asset->url
    }`);

export const SOCIAL_LINKS_QUERY = defineQuery(`
    *[_type == "socialLinks"][0] {
    _id,
    links[]{
        _key,
        platform,
        url,
        "fileUrl": file.asset->url
    }
    }`);


export const TECH_STACK_QUERY = defineQuery(`
    *[_type == "techStack"] | order(_createdAt asc) {
    _id,
    title,
    stacks[]{
        _key,
        stackName,
        stackType,
        "stackLogo": stackLogo.asset->url
    }
    }`);
