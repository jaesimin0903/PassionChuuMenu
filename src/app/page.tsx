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
            <h1 className="text-2xl font-bold text-center">열정도 쭈꾸미 메뉴판</h1>
            <div className="text-normal text-center">SELECT LANGUAGE</div>
            <div className="flex justify-center">
                <MenuDropdown
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                />
            </div>
            <StickyButton />
            <MenuList selectedLanguage={selectedLanguage} />
            <ScrollButtons />
            <HowtoeatButton/>
        </div>
    );
};

export default Menu;
