import Link from "next/link";
import React from "react";
import Particles from "@/components/Particless";

const navigation = [
  { name: "Store", href: "/store" },
  { name: "Discord", href: "/discord" },
  { name: "Whatsapp", href: "https://wa.me/6289518345201" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden  from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-bold font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        krineff
      </h1>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Premium Minecraft Store for{" "}
          <span className="text-zin-300">Plugins</span> •{" "}
          <span className="text-zin-300">Mods</span> •{" "}
          <span className="text-zin-300">Resource Packs</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-500/60">
          Join our Discord community for exclusive offers and updates
        </p>
      </div>
    </div>
  );
}
