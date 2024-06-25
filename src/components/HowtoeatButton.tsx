import React, { useState, useEffect } from "react";
import HowtoeatModal from "./HowtoeatModal";
import img1 from "../images/hte1.png";
import img2 from "../images/hte2.webp";
import img3 from "../images/hte3.webp";
import img4 from "../images/hte4.webp";
import img5 from "../images/hte5.webp";
import Image from "next/image";
import {StaticImageData} from "next/image"

const titles = ["0", "1", "2", "3", "4"];


type DescLanguage = {
    contents : string[];
}

type Language = 'ko' | 'en' | 'ja' | 'th' | 'ch';

type Props = {
    selectedLanguage: Language;
};

type DescLanguages = {
    [key in Language]: DescLanguage;
};

const desc : DescLanguages = {
ko:{contents :["1. 깻잎을 한 손위에 올린다.", "2. 천사채를 올린다.", "3. 마요네즈 소스와 기호에 맞게 날치알을 올린다.", "4. 쭈꾸미를 넣어 완성시킨다.", "5. 맛있게 먹기~"]},
en:{contents :["1. Place perilla leaves on one hand.", "2. Put salad on top of perilla leaves.", "3. Put the mayonnaise sauce and flying fish roe on top according to your preference.", "4. Put octopus on top of it to finish.", "5. Let's enjoy it"]},
ja:{contents :["1. 片手にエゴマの葉を載せる", "2. エゴマの葉の上にサラダを載せる", "3. お好みでマヨネーズソースと飛び子を載せる。", "4. 最後にタコを載せて仕上げる。", "5. さあ、楽しみましょう。"]},
th:{contents :["1. วางใบงาบนฝ่ามือข้างหนึ่ง", "2. วางสลัดบนใบงา", "3. ใส่น้ำสลัดมายองเนสและไข่ปลาบินตามความชอบ", "4. ใส่ปลาหมึกด้านบนเพื่อเสร็จสิ้น", "5. มาเพลิดเพลินกันเถอะ"]},
ch:{contents :["1. 在一只手掌上放紫苏叶", "2. 把沙拉放在紫苏叶上", "3. 根据你的喜好放上蛋黄酱和飞鱼卵。", "4. 最后放上章鱼完成。", "5. 让我们享受吧。"]},
}
const MAX_PAGE = 4; // 마지막 페이지 번호를 상수로 관리

const imageArr : StaticImageData[] = [
    img1,img2,img3,img4,img5
]

type Direction = 'prev' | 'next';


interface NavigationButtonProps {
    direction: Direction // 'prev' 또는 'next'만 가능
    onClick: () => void; // 클릭 이벤트에 대한 함수 타입
}

interface ContentDisplayProps {
    img: StaticImageData; // 이미지 데이터 타입
    description: string; // 설명 문자열
    pageNumber: number; // 페이지 번호
}

const defaultLang = desc.ko;

const HowtoeatButton = ({selectedLanguage}:Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curPage, setCurPage] = useState(0);
    const [language, setLanguage] = useState(desc[selectedLanguage] || defaultLang);

    useEffect(() => {
      setLanguage(desc[selectedLanguage] || defaultLang);
    }, [selectedLanguage]);
    

    const navigatePage = (direction : Direction) => {
        setCurPage((prevPage) => {
            if (direction === 'prev' && prevPage > 0) {
                return prevPage - 1;
            } else if (direction === 'next' && prevPage < MAX_PAGE) {
                return prevPage + 1;
            }
            return prevPage;
        });
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", zIndex: 1000 }} className="left-1/2 how-to-eat">
            <button className="back-sub hover:back-high text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>How To Eat</button>
            {isModalOpen && (
                <HowtoeatModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="flex flex-col h-11/12 ">
                        <ContentDisplay img={imageArr[curPage]} description={language.contents[curPage]} pageNumber={curPage} />
                        <div className="flex w-full">
                            <NavigationButton direction="prev" onClick={() => navigatePage('prev')} />
                            <NavigationButton direction="next" onClick={() => navigatePage('next')} />
                        </div>
                    </div>
                </HowtoeatModal>
            )}
        </div>
    );
};

const NavigationButton = ({ direction, onClick }:NavigationButtonProps) => (
    <div className="w-full  flex items-center justify-center p-2">
        <button className={`flex  back-sub hover-back-high text-white font-bold py-2 px-4 rounded-3xl w-full justify-center`} onClick={onClick}>
            {direction === 'prev' ? '◀' : '▶'}
        </button>
    </div>
);

const ContentDisplay = ({ img , description, pageNumber }:ContentDisplayProps) => (
    <div className="h-full flex-col">
        <div className=" flex items-center justify-center">
            <Image className="rounded-3xl" src={img} alt={`Page ${pageNumber}`} />
        </div>
        <div className=" h-1/5 font-bold text-xl pt-3">
            {description}
        </div>
        <div className="text-center text-lg font-bold">{pageNumber+1} / 5</div>
    </div>
);

export default HowtoeatButton;
