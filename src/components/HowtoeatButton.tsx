import React, { useState } from "react";
import HowtoeatModal from "./HowtoeatModal";
import img from "../images/1.jpg";
import Image from "next/image";
import {StaticImageData} from "next/image"

const titles = ["0", "1", "2", "3", "4", "5"];
const images = Array(5).fill(img); // 배열 생성 방식 간소화
const desc = ["1.hello", "2.hi", "3.gg", "4.123", "5.1414"];
const MAX_PAGE = desc.length - 1; // 마지막 페이지 번호를 상수로 관리

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

const HowtoeatButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curPage, setCurPage] = useState(0);

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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>How To Eat</button>
            {isModalOpen && (
                <HowtoeatModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="flex h-11/12 bg-blue-700">
                        <NavigationButton direction="prev" onClick={() => navigatePage('prev')} />
                        <ContentDisplay img={img} description={desc[curPage]} pageNumber={curPage} />
                        <NavigationButton direction="next" onClick={() => navigatePage('next')} />
                    </div>
                </HowtoeatModal>
            )}
        </div>
    );
};

const NavigationButton = ({ direction, onClick }:NavigationButtonProps) => (
    <div className="w-1/6 bg-green-50 flex items-center justify-center">
        <button className={`flex h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl`} onClick={onClick}>
            {direction === 'prev' ? '◀' : '▶'}
        </button>
    </div>
);

const ContentDisplay = ({ img , description, pageNumber }:ContentDisplayProps) => (
    <div className="w-4/6 bg-red-500 flex-col">
        <div className="bg-green-500 h-1/2 flex items-center justify-center">
            <Image src={img} alt={`Page ${pageNumber}`} />
        </div>
        <div className="bg-green-200 h-1/3">
            {description}
        </div>
        {pageNumber}
    </div>
);

export default HowtoeatButton;
