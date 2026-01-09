import Image from "next/image";

export default function About() {
  return (
    <section
      className="pb-12 bg-linear-to-b from-(--color-bg-card) to-(--color-bg-soft)"
      id="about"
    >
      <div className="w-full h-1 mb-20 bg-linear-to-r from-(--color-accent-soft) via-[var(--color-accent)/40] to-(--color-accent-soft) rounded-full"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="border border-[#E3E0DB] rounded-2xl">
            <Image
              src="/img/about.png"
              alt="My photo"
              width={300}
              height={525}
              className="m-4 flex 
    rounded-2xl 
    shadow-[0_0_10px_rgba(143,175,155,0.25)] 
    transition "
            />
          </div>

          <div className="w-full md:w-[50%]">
            <h2 className="text-4xl mb-6 font-heading">About me</h2>
            <div className="mb-6 h-0.5 w-full bg-linear-to-l from-transparent to-(--color-accent) opacity-60"></div>

            <p className="text-lg mb-4 text-(--color-text-main)">
              I’m a beauty specialist with over{" "}
              <strong>5 years of experience</strong> in personal care.
            </p>

            <p className="text-lg mb-4 text-(--color-text-main)">
              For me, it’s important that every procedure is not only effective,
              but also safe and comfortable. I pay special attention to
              cleanliness, proper tool sterilization, and gentle techniques.
            </p>

            <p className="text-lg mb-4 text-(--color-text-main)">
              I regularly improve my skills, follow modern methods, and use
              up-to-date products and technologies — so you can feel confident
              and relaxed during every visit.
            </p>

            <p className="text-lg text-(--color-text-main)">
              My goal is to create a calm, caring space where you can truly take
              time for yourself.
            </p>
            <p className="mt-8 italic text-base text-(--color-text-muted) text-right">
              — Nora Stewart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
