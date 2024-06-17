import React, { useState, useEffect } from "react";

const titles = ["0", "1", "2", "3", "4", "5"];

const StickyButton = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const offsets = titles.map(title => {
            const element = document.getElementById(title);
            // 요소가 존재하지 않는 경우, 매우 큰 값을 반환하여 화면 밖으로 간주하도록 합니다.
            return element ? window.pageYOffset + element.getBoundingClientRect().top : Number.MAX_VALUE;
        });

        const closest = offsets.reduce((prev, curr, index) => {
            if (curr !== Number.MAX_VALUE && (Math.abs(curr - window.pageYOffset) < Math.abs(offsets[prev] - window.pageYOffset))) {
                return index;
            }
            return prev;
        }, 0);
        console.log(closest);
        setCurrentIndex(closest);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToNextTitle = (idx: number) => {
        const nextTitleElement = document.getElementById(titles[idx]);
        if (nextTitleElement) {
            const elementPosition = nextTitleElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 50; // 여기서 100은 원하는 오프셋 값입니다.
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    
    

    return (
        <div className="flex flex-row justify-between pl-1 pr-1 sticky top-1 h-10 back-sub w-full z-50 items-center rounded-lg ">
            <a className="text-content"onClick={()=>scrollToNextTitle(0)}>Combo(3)</a>
            <a className="text-content"onClick={()=>scrollToNextTitle(1)}>Combo(2)</a>
            <a className="text-content"onClick={()=>scrollToNextTitle(2)}>Add</a>
            <a className="text-content"onClick={()=>scrollToNextTitle(3)}>Side</a>
            <a className="text-content"onClick={()=>scrollToNextTitle(4)}>Toping</a>
            <a className="text-content"onClick={()=>scrollToNextTitle(5)}>Bevarage</a>
        </div>
        
    );
};

export default StickyButton;
