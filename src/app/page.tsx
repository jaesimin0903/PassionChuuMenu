// app/page.tsx

"use client";

import { useState } from "react";
import MenuDropdown from "../components/MenuDropdown";
import MenuList from "../components/MenuList";
import ScrollButtons from "@/components/ScrollButtons";
import HowtoeatButton from "@/components/HowtoeatButton";
import StickyButton from "@/components/StickyButton";

type Language = "ko" | "en" | "ja" | "th" | "ch";

const Menu = ({ params }: { params: { locale: Language } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(params.locale);

    return (
        <div className="container mx-auto px-4 py-6 space-y-6">
            <h1 className="text-2xl font-bold text-center text-content">열정도 쭈꾸미 메뉴판</h1>
            <center><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpassion-chuu-menu.vercel.app&count_bg=%23E3A034&title_bg=%23555555&icon=devrant.svg&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a></center>

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
};

export default Menu;
