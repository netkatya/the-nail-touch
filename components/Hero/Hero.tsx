import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[url('/img/hero.webp')] bg-cover bg-center relative">
      <div className="absolut inset-0 bg-white/40 w-full min-h-160">
        <div className="container">
          <div className="w-[50%] py-34">
            <h1 className="text-5xl text-emerald-950 mb-8 leading-[133%]">
              Cozy care <br /> in a calm atmosphere
            </h1>
            <hr className="mb-8 text-(--color-border)" />
            <ul className="flex flex-wrap gap-x-16 gap-y-6 pl-6 mb-10">
              <li className="text-xl list-disc text-emerald-950">Manicure</li>
              <li className="text-xl list-disc text-emerald-950">Pedicure</li>
              <li className="text-xl list-disc text-emerald-950">Waxing</li>
              <li className="text-xl list-disc text-emerald-950">Massage</li>
              <li className="text-xl list-disc text-emerald-950">Brows</li>
              <li className="text-xl list-disc text-emerald-950">Lashes</li>
            </ul>
            <Link
              href="#price"
              className="flex justify-center items-center rounded-3xl h-13 w-40 border border-(--color-accent-dark) bg-(--color-accent-dark) text-white hover:text-(--color-accent-dark) hover:bg-white transition-all duration-250"
            >
              View Prices
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
