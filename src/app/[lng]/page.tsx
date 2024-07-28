

"use client";

import { useState,useEffect } from "react";
import MenuDropdown from "../../components/MenuDropdown";
import MenuList from "../../components/MenuList";
import ScrollButtons from "@/components/ScrollButtons";
import HowtoeatButton from "@/components/HowtoeatButton";
import StickyButton from "@/components/StickyButton";
import { useLanguage } from "../context/LanguageCotext";

import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";
import { usePathname, useRouter } from "next/navigation";

interface PageProps {
  params: {
    locale: string;
  };
}

type Language = "ko" | "en" | "ja" | "th" | "ch";

const Index= ({params}: { params: { locale:Language } }) => {
  const {selectedLanguage, setSelectedLanguage} = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Ensure the pathname is valid and extract the locale from it
    const currentLocale = pathname.split('/')[1] as Language;
    if (currentLocale && ["ko", "en", "ja", "th", "ch"].includes(currentLocale)) {
      setSelectedLanguage(currentLocale);
    } else {
      console.error(`Invalid language in path: ${currentLocale}`);
    }
  }, [pathname, setSelectedLanguage]);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-content">
        열정도 쭈꾸미 메뉴판
      </h1>
      <center>
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpassion-chuu-menu.vercel.app&count_bg=%23E3A034&title_bg=%23555555&icon=devrant.svg&icon_color=%23E7E7E7&title=hits&edge_flat=true" alt="hits"/>
        </a>
      </center>
      <div className="text-normal text-center text-content">SELECT LANGUAGE</div>
      <div className="flex justify-center">
        <MenuDropdown
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      <StickyButton />
      <MenuList selectedLanguage={selectedLanguage} />
      <ScrollButtons />
      <HowtoeatButton selectedLanguage={selectedLanguage}/>
    </div>
  );
}

export default Index;
