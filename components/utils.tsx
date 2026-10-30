import type { SocialLinksData } from "@/sanity/lib/fetchSocialLinks";

export function getSocialUrls(socialData: SocialLinksData | null){
    return Object.fromEntries(
        (socialData?.links ?? []).map((link)=>[
            link.platform,
            link.platform === "resume" ? link.fileUrl : link.url,
        ])
    )
}