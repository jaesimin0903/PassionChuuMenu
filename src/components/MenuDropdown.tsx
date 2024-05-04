// components/MenuDropdown.tsx

"use client";

import { useRouter, usePathname } from "next/navigation";
type Language = 'ko' | 'en' | 'ja' | 'th' | 'ch';
type Props = {
    selectedLanguage: Language;
    setSelectedLanguage: (language: Language) => void;
};

const MenuDropdown = ({ selectedLanguage, setSelectedLanguage }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (lng: Language) => {
        setSelectedLanguage(lng);
        //router.push(`/${lng}${pathname}`);
    };

    return (
        <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value as Language)}
            className="block  px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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
