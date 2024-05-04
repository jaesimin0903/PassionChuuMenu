// components/MenuDropdown.tsx

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
};

const MenuDropdown = ({ selectedLanguage, setSelectedLanguage }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const changeLanguage = (lng: string) => {
        setSelectedLanguage(lng);
        //router.push(`/${lng}${pathname}`);
    };

    return (
        <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
        >
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="ch">中國語</option>
            <option value="th">ภาษาไทย</option>
        </select>
    );
};

export default MenuDropdown;
