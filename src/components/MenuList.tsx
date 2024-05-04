// components/MenuList.tsx

"use client";

import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import img from "../images/1.jpg"
import { StaticImageData } from "next/image";
type Language = 'ko' | 'en' | 'ja' | 'th' | 'ch';


type Props = {
    selectedLanguage: Language;
};

type MenuTranslations = {
    ko: MenuTranslation;
    en: MenuTranslation;
    ja: MenuTranslation;
    th: MenuTranslation;
    ch: MenuTranslation;
};

type MenuTranslation = {
    title: string;
    dishes: string[];
    prices: string[];
    imageUrl: StaticImageData; // 이미지 URL에 대한 타입 (실제로는 이 부분을 다른 타입으로 수정해야 할 수 있음)
    title2: string;
    dishes2: string[];
    prices2: string[];
    imageUrl2: StaticImageData;
    title3: string;
    dishes3: string[];
    prices3: string[];
    imageUrl3: StaticImageData;
    title4: string;
    dishes4: string[];
    prices4: string[];
    imageUrl4: StaticImageData;
    title5: string;
    dishes5: string[];
    prices5: string[];
    imageUrl5: StaticImageData;
};

const translations :MenuTranslations = {
    ko: {
        title: "3인 세트 메뉴",
        dishes: ["쭈꾸미 시그니처 세트", "쭈꾸미삼겹 시그니처 세트"],
        prices:["13,000원","15,000원"],
        imageUrl :img,
        title2:"2인 세트 메뉴",
        dishes2: ["쭈꾸미 세트", "쭈꾸미삼겹 세트", "구이 세트"],
        prices2:["13,000원","15,000원","10,000원"],
        imageUrl2 :img,
        title3:"사이드 메뉴",
        dishes3: ["화산폭발계란찜", "화산폭발치즈계란찜", "깨불고기 주먹밥", "철판볶음밥", "볶음밥 치즈추가","바지락 백탕"],
        prices3:["5,000원","6,500원","5,000원","4,000원", "1,500원","8,000원"],
        imageUrl3 :img,
        title4:"사리 메뉴",
        dishes4: ["우동 사리", "떡 사리", "치즈 사리", "삽겹 사리(200g)", "미나리 사리", "날치알"],
        prices4:["3,000원","3,000원","3,000원","6,000원","4,000원","3,000원"],
        imageUrl4 :img,
        title5:"주류 / 음료",
        dishes5: ["소주(참이슬, 처음처럼, 진로, 새로)", "청하", "한라산","맥주(카스, 테라, 켈리, 크러시)","논알콜 맥주(칭따오, 하이네켄)","음료(콜라, 사이다, 제로콜라, 제로사이다)","하이볼","열정 하이볼"],
        prices5:["5,000원","6,000원","6,000원","5,000원","6,000원/8,000원","2,000원","8,000원","8,000원"],
        imageUrl5 :img,
    },
    en: {
        title: "3-Person Set Menu",
        dishes: ["Jjukumi Signature Set", "Jjukumi-Samgyeop Signature Set"],
        prices: ["13,000원", "15,000원"],
        imageUrl: img,
        title2: "2-Person Set Menu",
        dishes2: ["Jjukumi Set", "Jjukumi-Samgyeop Set", "Grilled Set"],
        prices2: ["13,000원", "15,000원", "10,000원"],
        imageUrl2: img,
        title3: "Side Menu",
        dishes3: ["Volcano Steamed Egg", "Volcano Cheese Steamed Egg", "Sesame Bulgogi Rice Ball", "Hot Plate Fried Rice", "Fried Rice Cheese Add-on", "Clam Soup"],
        prices3: ["5,000원", "6,500원", "5,000원", "4,000원", "1,500원", "8,000원"],
        imageUrl3: img,
        title4: "Extra Menu",
        dishes4: ["Udon", "Rice Cake", "Cheese", "Samgyeop (200g)", "Minari", "Flying Fish Roe"],
        prices4: ["3,000원", "3,000원", "3,000원", "6,000원", "4,000원", "3,000원"],
        imageUrl4: img,
        title5: "Drinks & Beverages",
        dishes5: ["Soju (Chamisul, Chum-Churum, Jinro, Saero)", "Chung Ha", "Hallasan", "Beer (Cass, Terra, Kelly, Crush)", "Non-alcohol Beer (Tsingtao, Heineken)", "Soft Drinks (Coke, Sprite, Zero Coke, Zero Sprite)", "Highball", "Passion Highball"],
        prices5: ["5,000원", "6,000원", "6,000원", "5,000원", "6,000원/8,000원", "2,000원", "8,000원", "8,000원"],
        imageUrl5: img
    },
    
    ja: {
        title: "3人のセットメニュー",
        dishes: ["ジュックミシグネチャーセット", "ジュックミサムギョプシグネチャーセット"],
        prices: ["₩13,000", "₩15,000"],
        imageUrl: img,
        title2: "2人のセットメニュー",
        dishes2: ["ジュックミセット", "ジュックミサムギョプセット", "焼き物セット"],
        prices2: ["₩13,000", "₩15,000", "₩10,000"],
        imageUrl2: img,
        title3: "サイドメニュー",
        dishes3: ["火山爆発蒸し卵", "火山爆発チーズ蒸し卵", "ごま油ブルゴギおにぎり", "鉄板炒めご飯", "炒めご飯にチーズ追加", "アサリ白湯"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        imageUrl3: img,
        title4: "具材メニュー",
        dishes4: ["うどん", "トック", "チーズ", "サムギョプ（200g）", "セリ", "とびこ"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        imageUrl4: img,
        title5: "酒類 / ソフトドリンク",
        dishes5: ["焼酎（チャミスル、初めてのように、ジンロ、セロ）", "清酒", "ハルラサン", "ビール（カス、テラ、ケリー、クラッシュ）", "ノンアルコールビール（青島、ハイネケン）", "ソフトドリンク（コーラ、サイダー、ゼロコーラ、ゼロサイダー）", "ハイボール", "情熱ハイボール"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        imageUrl5: img
    }
    ,
    th: {
        title: "เมนูเซตสำหรับ 3 คน",
        dishes: ["เซ็ตลายเซ็นเจอร์ จุกุมิ", "เซ็ตสามย่านกุมิ-ซัมเกียบ"],
        prices: ["₩13,000", "₩15,000"],
        imageUrl: img,
        title2: "เมนูเซตสำหรับ 2 คน",
        dishes2: ["เซ็ตจุกุมิ", "เซ็ตสามย่านกุมิ-ซัมเกียบ", "เซ็ตย่าง"],
        prices2: ["₩13,000", "₩15,000", "₩10,000"],
        imageUrl2: img,
        title3: "เมนูอาหารข้าง",
        dishes3: ["ไข่ตุ๋นภูเขาไฟ", "ไข่ตุ๋นชีสภูเขาไฟ", "ข้าวอบบึ้งโบกิโบกิ", "ข้าวผัดจานเกล็ด", "ข้าวผัดเพิ่มชีส", "ซุปหอยนางรม"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        imageUrl3: img,
        title4: "เมนูส่วนเสริม",
        dishes4: ["อุด้ง", "เบ็กฮัน", "ชีส", "สามย่านซัมเกียบ (200 กรัม)", "มินาริ", "ไข่ปลากะทะ"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        imageUrl4: img,
        title5: "เครื่องดื่มและเครื่องดื่ม",
        dishes5: ["โซจู (ชามิซูล, ชัม-ชูรุม, จินโร, เซโร่)", "ชูงฮา", "ฮัลลาซาน", "เบียร์ (แคส, เทอร์ร่า, เคลลี่, ครัช)", "เบียร์โฮลด์ (สิงเถา, ไฮเนเกน)", "เครื่องดื่มซอฟต์ (โค้ก, สไปร์ท, โค้กซีโร, สไปร์ทซีโร)", "ไฮบอล", "ไฮบอลแฟชั่น"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        imageUrl5: img
    }
    ,ch:{
        title: "3人套餐菜单",
        dishes: ["章鱼小酱套餐", "章鱼三层肉小酱套餐"],
        prices: ["₩13,000", "₩15,000"],
        imageUrl: img,
        title2: "2人套餐菜单",
        dishes2: ["章鱼套餐", "章鱼三层肉套餐", "烤套餐"],
        prices2: ["₩13,000", "₩15,000", "₩10,000"],
        imageUrl2: img,
        title3: "小菜菜单",
        dishes3: ["火山爆发蒸蛋", "火山爆发芝士蒸蛋", "芝麻牛肉饭团", "铁板炒饭", "炒饭加芝士", "蛤蜊汤"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        imageUrl3: img,
        title4: "配菜菜单",
        dishes4: ["乌冬面", "年糕", "芝士", "三层肉(200g)", "香菜", "鱼子"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        imageUrl4: img,
        title5: "饮料 / 饮料",
        dishes5: ["烧酒(池南, 一如初, 金罗, 塞罗)", "清酒", "哈拉山", "啤酒(卡斯, 特拉, 凯利, 克鲁什)", "无酒精啤酒(青岛, 喜力)", "软饮料(可口可乐, 雪碧, 零可乐, 零雪碧)", "高球", "激情高球"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        imageUrl5: img
    }
    
    
};

const defaultMenu = translations.ko;

const MenuList = ({ selectedLanguage }: Props) => {
    const [menu, setMenu] = useState(translations[selectedLanguage] || defaultMenu);

    useEffect(() => {
        setMenu(translations[selectedLanguage] || defaultMenu);
    }, [selectedLanguage]);

    return (
        <div>
            <h1>{menu.title}</h1>
            <div className="menu-list">
                {menu.dishes.map((dish, index) => (
                    <MenuItemCard key={index} name={dish} price ={menu.prices[index]} imageUrl ={menu.imageUrl}></MenuItemCard>
                ))}
            </div>
            <h1>{menu.title2}</h1>
            <div className="menu-list">
                {menu.dishes2.map((dish2, index) => (
                    <MenuItemCard key={index} name={dish2} price ={menu.prices2[index]} imageUrl ={menu.imageUrl2}></MenuItemCard>
                ))}
            </div>
            <h1>{menu.title3}</h1>
            <div className="menu-list">
                {menu.dishes3.map((dish3, index) => (
                    <MenuItemCard key={index} name={dish3} price ={menu.prices3[index]} imageUrl ={menu.imageUrl3}></MenuItemCard>
                ))}
            </div>
            <h1>{menu.title4}</h1>
            <div className="menu-list">
                {menu.dishes4.map((dish4, index) => (
                    <MenuItemCard key={index} name={dish4} price ={menu.prices4[index]} imageUrl ={menu.imageUrl4}></MenuItemCard>
                ))}
            </div>
            <h1>{menu.title5}</h1>
            <div className="menu-list">
                {menu.dishes5.map((dish5, index) => (
                    <MenuItemCard key={index} name={dish5} price ={menu.prices5[index]} imageUrl ={menu.imageUrl5}></MenuItemCard>
                ))}
            </div>
        </div>
    );
};

export default MenuList;
