import Image from "next/image";
import Link from "next/link";
import { Pattaya, Winky_Sans } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["latin"] });
const winkySans = Winky_Sans({ weight: "500", subsets: ["latin"] });

export default function NavBar() {
  return (
    <nav className="flex justify-between h-16 items-center">
      <div className={pattaya.className}>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="cursor-pointer"
          />
          <div className="text-xl leading-none">Code With Tom</div>
        </Link>
      </div>
      <div className="flex space-x-16 items-center">
        <ul className={`flex space-x-4 text-md  ${winkySans.className}`}>
          <li>
            <Link href="/projects" className="leading-none">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="leading-none">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="leading-none">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="leading-none">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <Link href="https://buymeacoffee.com/codewithtom">
            <Image
              src="/bmc.svg"
              alt="Buy Me a Coffee"
              width={128}
              height={48}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
