import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-(--color-accent-dark) h-25 py-2.5">
      <div className="container">
        <div>
          <Link href="/">
            <Image
              src="/img/logo-lighttheme.png"
              alt="Logo"
              width={80}
              height={80}
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
}
