import Image from "next/image";

import { Winky_Sans } from "next/font/google";

const winky = Winky_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`space-y-16 my-10 ${winky.className}`}>
      <div className="flex items-center space-x-6">
        <div className="rounded-full border-3 border-white  overflow-hidden">
          <Image
            src="https://i.pravatar.cc/1024?img=37"
            alt="Logo"
            width={96}
            height={96}
            className="cursor-pointer"
          />
        </div>
        <div className="space-y-2">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-semibold leading-none">
                Hey, i&apos;m Tom
              </h1>
              <Image
                src="/1f44b.svg"
                alt="Logo"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-xl font-medium opacity-80 leading-none">
              A Fullstack Developer from France
            </h2>
          </div>

          <ul className="flex space-x-2">
            <li>
              <div className="flex space-x-1 items-center bg-white  px-2 py-1 rounded-full">
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={16}
                  height={24}
                />
                <span className="leading-none text-sm font-semibold">
                  Discord
                </span>
              </div>
            </li>
            <li>
              <div className="flex space-x-1 items-center bg-white px-2 py-1 rounded-full">
                <Image
                  src="/logo-tiktok.svg"
                  alt="Discord"
                  width={16}
                  height={24}
                />
                <span className="leading-none text-sm font-semibold">
                  Tiktok
                </span>
              </div>
            </li>
            <li>
              <div className="flex space-x-1 items-center bg-white  px-2 py-1 rounded-full">
                <Image
                  src="/github-alt.svg"
                  alt="Discord"
                  width={16}
                  height={24}
                />
                <span className="leading-none text-sm font-semibold">
                  Github
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>Latest projects</div>
      <div>Latest blog posts</div>
      <div>Client testimonials</div>
      <div>Contact</div>
    </div>
  );
}
