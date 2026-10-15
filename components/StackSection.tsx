import Image from "next/image";

type StackItem = {
  stackLogo: string;
  stackName: string;
  stackType: string;
};

type StackCardsProps = StackItem;

type StackSectionProps = {
  title: string;
  stacks: StackItem[];
}

function StackCards({ stackLogo, stackName, stackType }: StackCardsProps) {
  return (
    <>
      <div className="stack-cards flex gap-4 lg:block p-6 bg-[#F3F3F3] dark:bg-[#181818] border border-[#EBEBEB] dark:border-[#383737] rounded-[22px] ">
        <Image
          className="max-w-15 lg:max-w-28 lg:pt-17 lg:pb-10 lg:mx-auto"
          src={stackLogo}
          alt={stackName}
        />
        <p className="text-[#181818] dark:text-white text-[16px] lg:text-[20px] font-semibold flex justify-between items-center w-full">
          {stackName}
          <span className="text-[#808080] bg-[rgba(255,255,255,0.7)] dark:bg-transparent text-[11px] lg:text-[14px] font-normal py-1.5 px-3 border border-[rgba(255,255,255,0.7)] dark:border-[#272525] rounded-[26px]  ">
            {stackType}
          </span>
        </p>
      </div>
    </>
  );
}

export default function StackSection({ title, stacks }: StackSectionProps) {
  return (
    <section className="stack-section mb-20">
      <h2 className="text-[32px] lg:text-[48px] text-[#C5C5C5] dark:text-[#808080] font-bold mb-8 ">
        {title}
      </h2>
      <div className="cards-cont grid grid-cols-1 lg:grid-cols-3 gap-4  ">
        {stacks.map((stack, index) => {
          return (
            <StackCards
              key={index}
              stackLogo={stack.stackLogo}
              stackName={stack.stackName}
              stackType={stack.stackType}
            />
          );
        })}
      </div>
    </section>
  );
}
