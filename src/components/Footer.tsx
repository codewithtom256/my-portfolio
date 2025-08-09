import Link from "next/link";
import { Winky_Sans } from "next/font/google";

import Image from "next/image";

const winkySans = Winky_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="flex justify-between h-16 items-center">
      <div className="flex items-center space-x-1">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex space-x-16 items-center">
        <ul
          className={`flex space-x-4 text-md font-medium  ${winkySans.className}`}
        >
          <li>
            <Link href="/legal-notice">Legal Notice</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
