import React, { useState, useEffect } from "react";

const titles = ["0", "1", "2", "3", "4", "5"];

const ScrollButtons = () => {
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

    const scrollToNextTitle = () => {
        if (currentIndex + 1 < titles.length) {
            const nextTitleElement = document.getElementById(titles[currentIndex + 1]);
            if (nextTitleElement) {
                nextTitleElement.scrollIntoView({ behavior: "smooth" });
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    return (
        <div style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column"  // 이 부분을 추가하여 버튼을 수직으로 정렬
        }}>
            <button style={{
                background: "white",
                color: "white",
                margin: "5px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 5px 5px rgba(0,0,0,0.3)"
            }} onClick={scrollToTop}>🔺</button>
            <button style={{
                background: "white",
                color: "white",
                margin: "5px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 5px 5px rgba(0,0,0,0.3)"
            }} onClick={scrollToNextTitle}>🔻</button>
        </div>
        
    );
};

export default ScrollButtons;
