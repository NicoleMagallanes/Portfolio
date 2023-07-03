import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "/profile" },
    { name: "Education", href: "/edu" },
    { name: "Experience", href: "/exp" },
    { name: "Skills", href: "/skills" },
    { name: "Contacts", href: "/contact" },
  ];

  return (
    <>
      <section id="home">
        <div className="bg-stone-100 dark:bg-background">
          <header className="container flex items-center gap-6 px-5 pt-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 md:hidden">
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen bg-stone-100 dark:bg-gray-900 md:hidden">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navLinks.map(({ name, href }) => (
                  <Link key={name} href={href}>
                    <DropdownMenuItem>{name}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <img
              src="/images/LogoBanner.png"
              className="hidden w-28 md:inline"
              alt="Portfolio logo"
            />
            <nav className="hidden space-x-5 font-medium md:flex">
              {navLinks.map(({ name, href }) => (
                <Link className="text-muted-foreground" key={name} href={href}>
                  {name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-1 justify-end gap-1">
              <ThemeToggle />
            </div>
          </header>
          <section className="container flex flex-col items-center gap-12 px-14 pb-14 pt-8 text-center md:flex-row md:text-left">
            <div className="my-8 flex-1">
              <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Nicole Magallanes <br />
                <span className="text-amber-500">Portfolio</span>
              </h1>
              <Button className="px-5 py-6 text-lg text-white">
                Get started
              </Button>
              <Button className="ml-1 px-5 py-6 text-lg" variant="ghost">
                Learn more
              </Button>
            </div>
            <div className="flex-1">
              <div className="m-auto max-w-sm">
                <img src="/images/PortfolioheroRight.png" />
              </div>
            </div>
          </section>
          <img
            src="/images/Portfolio (1).png"
            alt="separator"
            className="relative mb-10 h-60 w-full"
          />
        </div>
      </section>
      <section id="profile">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Listen Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {listenNowAlbums.map((album) => (
                <AlbumArtwork
                  key={album.name}
                  album={album}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
