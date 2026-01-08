import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[url('/img/hero.webp')] bg-cover bg-center relative">
      <div className="absolut inset-0 bg-(--color-bg-hero)/60 w-full min-h-160">
        <div className="container">
          <div className="md:w-[50%] py-24 lg:py-32">
            <h1 className="text-[42px] font-medium text-(--color-text-hero) mb-8 leading-[150%]">
              Gentle care <br /> in a calm atmosphere
            </h1>
            <hr className="mb-8 text-(--color-border)" />
            <ul className="flex flex-wrap gap-x-20 gap-y-6 pl-6 mb-12">
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Manicure
              </li>
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Pedicure
              </li>
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Waxing
              </li>
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Massage
              </li>
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Brows
              </li>
              <li className="text-2xl list-disc text-(--color-text-hero)">
                Lashes
              </li>
            </ul>
            <Link
              href="#price"
              className="flex justify-center items-center rounded-3xl h-13 w-45 border border-(--color-accent-dark) bg-(--color-accent-dark) text-white text-xl hover:text-(--color-accent-dark) hover:bg-white transition-all duration-250"
            >
              View Prices
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
