import Image from "next/image";
import Link from "next/link";

import { getIntro } from "@/sanity/lib/fetchIntro";
import { getSocialLinks } from "@/sanity/lib/fetchSocialLinks";

export default async function Intro() {
  const intro = await getIntro();
  const socialData = await getSocialLinks();

  const resumeUrl = socialData?.links.find(
    (link) => link.platform === "resume",
  )?.fileUrl;

  const buttons = intro?.buttons ?? [];

  return (
    <>
      <div className="intro mb-34 lg:mb-55">
        <div className="grid lg:grid-flow-col">
          <div className="left order-2 lg:order-0">
            <h1 className="text-[48px] lg:text-[80px] text-[#181818] dark:text-white font-extrabold  ">
              <span className="text-[#808080] lg:hidden block">
                {intro?.greeting}
                {intro?.greetingImage && (
                  <Image
                    className="mb-4 inline"
                    src={intro.greetingImage}
                    alt="Hand Wave"
                    width={48}
                    height={48}
                  />
                )}
              </span>
              <span className="text-[#808080]">{intro?.namePrefix}</span>{" "}
              {intro?.name}
            </h1>
            <p className="text-[15px] leading-5 lg:text-[24px] lg:leading-9 font-medium text-[#808080] mb-10">
              {intro?.description}
            </p>
            <div className="flex flex-col lg:flex-row gap-4 ">
              {buttons.map((button) => {
                const href =
                  button.linkType === "resume" ? resumeUrl : button.url;

                if (!href) return null;

                const className =
                  "text-[#181818] dark:text-[#808080] text-[18px] text-center font-medium bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white py-5 px-8 rounded-lg";

                return button.linkType === "internal" ? (
                  <Link
                    key={button._key}
                    href={href}
                    className={className}
                    target={button.openInNewTab ? "_blank" : undefined}
                    rel={
                      button.openInNewTab ? "noopener noreferrer" : undefined
                    }
                  >
                    {button.label}
                  </Link>
                ) : (
                  <a
                    key={button._key}
                    href={href}
                    className={className}
                    target={button.openInNewTab ? "_blank" : undefined}
                    rel={
                      button.openInNewTab ? "noopener noreferrer" : undefined
                    }
                  >
                    {button.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="right mb-12.5 lg:mb-0">
            {intro?.image && (
              <Image
                className="circle-img max-w-full mx-auto"
                width={250}
                height={250}
                src={intro.image}
                alt="Memoji"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
