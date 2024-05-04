// app/page.tsx
'use client'
import { useState } from "react";
import MenuDropdown from "../components/MenuDropdown";
import MenuList from "../components/MenuList";

const Menu = ({ params }: { params: { locale: string } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(params.locale);

    return (
        <div>
            <h1>열정도 쭈꾸미</h1>
            <MenuDropdown
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <MenuList selectedLanguage={selectedLanguage} />
        </div>
    );
};

export default Menu;
