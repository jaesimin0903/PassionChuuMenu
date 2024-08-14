// components/MenuList.tsx

"use client";

import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import ScrollButtons from "./ScrollButtons";

import img from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/16.jpg";
import img17 from "../images/17.jpg";
import img18 from "../images/18.jpg";
import img19 from "../images/19.jpg";
import img20 from "../images/20.jpg";
import img21 from "../images/21.jpg";
import img22 from "../images/22.jpg";
import img23 from "../images/23.jpg";
import img24 from "../images/24.jpg";
import img25 from "../images/25.jpg";
import img26 from "../images/26.jpg";
import img27 from "../images/27.jpg";
import img28 from "../images/28.jpg";
import img29 from "../images/29.jpg";
import img30 from "../images/30.jpg";
import img31 from "../images/31.jpg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

type Language = 'ko' | 'en' | 'ja' | 'th' | 'ch';

type Props = {
    selectedLanguage: Language;
};

type MenuTranslations = {
    [key in Language]: MenuTranslation;
};

type MenuTranslation = {
    title: string;
    dishes: string[];
    prices: string[];
    discriptions:string[],
    title2: string;
    dishes2: string[];
    prices2: string[];
    discriptions2:string[],
    title33: string;
    dishes33: string[];
    prices33: string[];
    discriptions33:string[],
    title3: string;
    dishes3: string[];
    prices3: string[];
    discriptions3:string[],
    title4: string;
    dishes4: string[];
    prices4: string[];
    discriptions4:string[],
    title5: string;
    dishes5: string[];
    prices5: string[];
    discriptions5:string[],
};

const images : StaticImageData[][] =[
    [img,img2],
    [img3,img4,img5],
    [img6,img7,img8,img9,img10,img11],
    [img12,img13,img14,img15,img16,img17],
    [img18,img19,img20,img21,img22,img23],
    [img24,img25,img26,img27,img28,img29,img30,img31],
];

const translations :MenuTranslations = {
    ko: {
        title: "3인 세트 메뉴",
        dishes: ["쭈꾸미 시그니처 세트", "쭈꾸미삼겹 시그니처 세트"],
        prices:["51,000원","55,000원"],
        discriptions:["철판 쭈꾸미2 + 우동사리 + 계란찜(치즈변경 +1,500) + 소금구이","철판 쭈꾸미삼겹2 + 우동사리 + 계란찜(치즈변경 +1,500) + 소금구이"],
        title2:"2인 세트 메뉴",
        dishes2: ["쭈꾸미 세트", "쭈꾸미삼겹 세트", "구이 세트"],
        prices2:["36,000원","40,000원","38,000원"],
        discriptions2:["철판 쭈꾸미2 + 우동사리 + 계란찜(치즈변경 +1,500)","철판 쭈꾸미삼겹살2 + 우동사리 + 계란찜(치즈변경 + 1,500)","택2 (소금/쭈삼(+2,000)/양념) + 떡사리 + 계란찜(치즈변경 + 1,500)"],
        title33:"단품 메뉴",
        dishes33: ["철판 쭈꾸미", "철판 쭈꾸미 삼겹살", "소금구이", "쭈삼구이", "양념구이"],
        prices33:["14,000원","16,000원","15,000원","17,000원", "15,000원"],
        discriptions33:[],
        title3:"사이드 메뉴",
        dishes3: ["화산폭발계란찜", "화산폭발치즈계란찜", "깨불고기 주먹밥", "철판볶음밥", "볶음밥 치즈추가","바지락 백탕"],
        prices3:["5,000원","6,500원","5,000원","4,000원", "3,000원","8,000원"],
        discriptions3:[],
        title4:"사리 메뉴",
        dishes4: ["우동 사리", "떡 사리", "치즈 사리", "삽겹 사리(200g)", "미나리 사리", "날치알"],
        prices4:["3,000원","3,000원","3,000원","6,000원","4,000원","3,000원"],
        discriptions4:[],
        title5:"주류 / 음료",
        dishes5: ["소주(참이슬/ 처음처럼/ 진로/ 새로)", "청하", "한라산","맥주(카스/ 테라/ 켈리/ 크러시)","논알콜 맥주(칭따오/ 하이네켄)","음료(콜라/ 사이다/ 제로콜라/ 제로사이다)","순정 하이볼","열정 하이볼"],
        prices5:["5,000원","6,000원","6,000원","5,000원","6,000원/8,000원","2,000원","8,000원","8,000원"],
        discriptions5:[],
    },
    en: 
    
    {
        title: "3-Person Combo (3인 세트 메뉴)",
        dishes: ["Webfoot Octopus Signature Combo, 쭈꾸미 시그니처 세트", "Webfoot Octopus with Porck belly Signature Combo, 쭈꾸미삼겹 시그니처 세트"],
        prices: ["₩51,000", "₩55,000"],
        discriptions: ["Webfoot Octopus (2) + Udon + Steamed Egg (Add cheese for +₩1,500) + Salted Grill Octopus", "Webfoot Octopus with Pork Belly (2) + Udon + Steamed Egg (Add cheese for +₩1,500) + Salted Grill Octopus"],
        title2: "2-Person Combo (2인 세트 메뉴)",
        dishes2: ["Webfoot Octopus Combo, 쭈꾸미 세트", "Webfoot Octopus-Samgyeop Combo, 쭈꾸미삼겹 세트", "Grilled Combo, 구이 세트"],
        prices2: ["₩36,000", "₩40,000", "₩38,000"],
        discriptions2: [
            "Webfoot Octopus (2) + Udon + Steamed Egg (Add cheese for +₩1,500)", 
            "Webfoot Octopus with Pork Belly (2) + Udon + Steamed Egg (Add cheese for +₩1,500)", 
            "Choose 2 (Salted Octopus / Octopus with Pork Belly (+₩2,000) / Spicy Octopus / ) + Rice Cake + Steamed Egg (Add cheese for +₩1,500)"
        ],
        title33: "Additional Menu (단품 메뉴)",
        dishes33: ["Webfoot Octopus, 철판 쭈꾸미", "Webfoot Octopus with Pork Belly, 철판 쭈꾸미 삼겹살", "Salted Grilled Octopus, 소금구이", "Octopus & Pork Belly Grill, 쭈삼구이", "Spicy Grilled Octopus, 양념구이"],
        prices33: ["₩14,000", "₩16,000", "₩15,000", "₩17,000", "₩15,000"],
        discriptions33: [],
        title3: "Side Menu (사이드 메뉴)",
        dishes3: ["Volcano Steamed Egg, 화산폭발계란찜", "Volcano Cheese Steamed Egg, 화산폭발치즈계란찜", "Sesame Bulgogi Rice Ball, 깨불고기 주먹밥", "Hot Plate Fried Rice, 철판볶음밥", "Fried Rice Cheese Add-on, 볶음밥 치즈추가", "Clam Soup, 바지락 백탕"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        discriptions3: [],
        title4: "Toping Menu (사리 메뉴)",
        dishes4: ["Udon, 우동 사리", "Rice Cake, 떡 사리", "Cheese, 치즈 사리", "Pork Belly (200g), 삽겹 사리(200g)", "Minari, 미나리 사리", "Flying Fish Roe, 날치알"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        discriptions4: [],
        title5: "Drinks & Beverages (주류 / 음료)",
        dishes5: ["Soju (Chamisul/ Chum-Churum/ Jinro/ Saero), 소주(참이슬/ 처음처럼/ 진로/ 새로)", "Chung Ha, 청하", "Hallasan, 한라산", "Beer (Cass/ Terra/ Kelly/ Crush), 맥주(카스/ 테라/ 켈리/ 크러시)", "Non-alcohol Beer (Tsingtao/ Heineken), 논알콜 맥주(칭따오/ 하이네켄)", "Soft Drinks (Coke/ Sprite/ Zero Coke/ Zero Sprite), 음료(콜라/ 사이다/ 제로콜라/ 제로사이다)", "Highball, 하이볼", "Passion Highball, 열정 하이볼"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        discriptions5: []
    }
    
    ,
    ja: {
        title: "3人のセットメニュー (3인 세트 메뉴)",
        dishes: ["ジュックミシグネチャーセット, 쭈꾸미 시그니처 세트", "ジュックミサムギョプシグネチャーセット, 쭈꾸미삼겹 시그니처 세트"],
        prices: ["₩51,000", "₩55,000"],
        discriptions: [
            "鉄板タコ (2) + うどん + 蒸し卵 (チーズ追加 +¥1,500) + 塩焼き",
            "鉄板タコと豚肉 (2) + うどん + 蒸し卵 (チーズ追加 +¥1,500) + 塩焼き"
        ],
        title2: "2人のセットメニュー (2인 세트 메뉴)",
        dishes2: ["ジュックミセット, 쭈꾸미 세트", "ジュックミサムギョプセット, 쭈꾸미 삼겹 세트", "焼き物セット, 구이 세트"],
        prices2: ["₩36,000", "₩40,000", "₩38,000"],
        discriptions2: [
            "鉄板タコ (2) + うどん + 蒸し卵 (チーズ追加 +¥1,500)", 
            "鉄板タコと豚肉 (2) + うどん + 蒸し卵 (チーズ追加 +¥1,500)", 
            "2つ選択 (塩 / タコと豚肉 (+¥2,000) / 味付き ) + 餅 + 蒸し卵 (チーズ追加 +¥1,500)"
        ],
        title33:"サイドメニュー (단품 메뉴)",
        dishes33: ["茶碗蒸し, 철판 쭈꾸미", "チーズ入り茶碗蒸し, 철판 쭈꾸미 삼겹살", "焼肉おにぎり, 소금 구이", "チャーハン, 양념 구이", "チャーハンチーズの追加, 쭈꾸미 삼겹 구이"],
        prices33: ["₩14,000", "₩16,000", "₩15,000", "₩17,000", "₩15,000"],
        discriptions33:[],
        title3: "サイドメニュー (사이드 메뉴)",
        dishes3: ["火山爆発蒸し卵, 화산 폭발 계란찜", "火山爆発チーズ蒸し卵, 치즈 계란찜", "ごま油ブルゴギおにぎり, 깨불고기 주먹밥", "鉄板炒めご飯, 철판 볶음밥", "炒めご飯にチーズ追加, 볶음밥 치즈 추가", "アサリ白湯, 바지락 백탕"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        discriptions3:[],
        title4: "具材メニュー (사리 메뉴)",
        dishes4: ["うどん, 우동 사리", "トック, 떡 사리", "チーズ, 치즈 사리", "サムギョプ（200g）, 삼겹 사리", "セリ, 미나리 사리", "とびこ, 날치알"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        discriptions4:[],
        title5: "酒類 / ソフトドリンク (주류 / 음료)",
        dishes5: ["焼酎, 소주(참이슬/ 처음처럼/ 진로/ 새로)", "清酒, 청하", "ハルラサン,한라산", "ビール , 맥주(카스/ 테라/ 켈리/ 크러시)", "ノンアルコールビール, 논알콜 맥주(칭따오/ 하이네켄)", "ソフトドリンク, 음료(콜라/ 사이다/ 제로콜라/ 제로사이다)", "ハイボール, 순정 하이볼", "情熱ハイボール, 열정 하이볼"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        discriptions5:[],
    }
    ,
    th: {
        title: "เมนูเซตสำหรับ 3 คน (3인 세트 메뉴)",
        dishes: ["เซ็ตลายเซ็นเจอร์ จุกุมิ, 쭈꾸미 시그니처 세트", "เซ็ตสามย่านกุมิ-ซัมเกียบ, 쭈꾸미삼겹 시그니처 세트"],
        prices: ["₩51,000", "₩55,000"],
        discriptions: [
            "ปลาหมึกผัดกระทะร้อน (2) + อุด้ง + ไข่ตุ๋น (เพิ่มชีส +฿1,500) + ย่างเกลือ",
            "ปลาหมึกและหมูสามชั้นผัดกระทะร้อน (2) + อุด้ง + ไข่ตุ๋น (เพิ่มชีส +฿1,500) + ย่างเกลือ"
        ],
        title2: "เมนูเซตสำหรับ 2 คน (2인 세트 메뉴)",
        dishes2: ["เซ็ตจุกุมิ, 쭈꾸미 세트", "เซ็ตสามย่านกุมิ-ซัมเกียบ, 쭈꾸미삼겹 세트", "เซ็ตย่าง, 구이 세트"],
        prices2: ["₩36,000", "₩40,000", "₩38,000"],
        discriptions2: [
            "ปลาหมึกผัดกระทะร้อน (2) + อุด้ง + ไข่ตุ๋น (เพิ่มชีส +฿1,500)",
            "ปลาหมึกและหมูสามชั้นผัดกระทะร้อน (2) + อุด้ง + ไข่ตุ๋น (เพิ่มชีส +฿1,500)",
            "เลือก 2 รายการ (เกลือ / ปลาหมึกและหมูสามชั้น (+฿2,000) / ปรุงรส ) + แป้งต็อกบกกี + ไข่ตุ๋น (เพิ่มชีส +฿1,500)"
        ],
        title33: "เมนูข้างเคียง (단품 메뉴)",
        dishes33: ["ไข่ตุ๋นภูเขาไฟ, 철판쭈꾸미", "ไข่ตุ๋นชีสภูเขาไฟ, 철판쭈꾸미삼겹살", "ข้าวปั้นหมูย่างงา, 소금구이", "ข้าวผัดกระทะร้อน, 쭈삼구이", "ข้าวผัดกระทะร้อนเพิ่มชีส, 양념구이"],
        prices33: ["₩14,000", "₩16,000", "₩15,000", "₩17,000", "₩15,000"],
        discriptions33: [],
        title3: "เมนูอาหารข้าง (사이드 메뉴)",
        dishes3: ["ไข่ตุ๋นภูเขาไฟ, 화산폭발계란찜", "ไข่ตุ๋นชีสภูเขาไฟ, 화산폭발치즈계란찜", "ข้าวอบบึ้งโบกิโบกิ, 깨불고기 주먹밥", "ข้าวผัดจานเกล็ด, 철판볶음밥", "ข้าวผัดเพิ่มชีส, 볶음밥 치즈추가", "ซุปหอยนางรม, 바지락 백탕"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        discriptions3: [],
        title4: "เมนูส่วนเสริม (사리 메뉴)",
        dishes4: ["อุด้ง, 우동 사리", "เบ็กฮัน, 떡 사리", "ชีส, 치즈 사리", "สามย่านซัมเกียบ (200 กรัม), 삽겹 사리(200g)", "มินาริ, 미나리 사리", "ไข่ปลากะทะ, 날치알"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        discriptions4: [],
        title5: "เครื่องดื่มและเครื่องดื่ม (주류 / 음료)",
        dishes5: ["โซจู (ชามิซูล/ ชัม-ชูรุม/ จินโร/ Saero), 소주(참이슬/ 처음처럼/ 진로/ 새로)", "ชูงฮา, 청하", "ฮัลลาซาน, 한라산", "เบียร์ (แคส/ เทอร์ร่า/ 켈ลี่/ ครัช), 맥주(카스/ 테라/ 켈리/ 크러시)", "เบียร์โฮลด์ (สิงเถา/ heineken), 논알콜 맥주(칭따오/ 하이네켄)", "เครื่องดื่มซอฟต์ (โค้ก, สไปร์ท, โค้กซีโร, สไปร์ทซีโร), 음료(콜라, 사이다, 제로콜라, 제로사이다)", "ไฮบอล, 하이볼", "ไฮบอลแฟชั่น, 열정 하이볼"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000"],
        discriptions5: [],
    }
    
    ,ch:{
        title: "3人套餐菜单 (3인 세트 메뉴)",
        dishes: ["章鱼小酱套餐, 쭈꾸미 시그니처 세트", "章鱼三层肉小酱套餐, 쭈꾸미삼겹 시그니처 세트"],
        prices: ["₩51,000", "₩55,000"],
        discriptions: [
            "铁板章鱼 (2) + 乌冬面 + 蒸蛋 (加芝士 +¥1,500) + 盐烤",
            "铁板章鱼和五花肉 (2) + 乌冬面 + 蒸蛋 (加芝士 +¥1,500) + 盐烤"
        ],
        title2: "2人套餐菜单 (2인 세트 메뉴)",
        dishes2: ["章鱼套餐, 쭈꾸미 세트", "章鱼三层肉套餐, 쭈꾸미삼겹 세트", "烤套餐, 구이 세트"],
        prices2: ["₩36,000", "₩40,000", "₩38,000"],
        discriptions2: [
            "铁板章鱼 (2) + 乌冬面 + 蒸蛋 (加芝士 +¥1,500)", 
            "铁板章鱼和五花肉 (2) + 乌冬面 + 蒸蛋 (加芝士 +¥1,500)", 
            "选择2 (盐 / 章鱼和五花肉 (+¥2,000) / 调味 ) + 年糕 + 蒸蛋 (加芝士 +¥1,500)"
        ],
        title33: "单品菜单 (단품 메뉴)",
        dishes33: ["铁板小章鱼, 철판 쭈꾸미", "铁板小章鱼五花肉, 철판 쭈꾸미 삼겹살", "盐烤, 소금구이", "小章鱼和五花肉烤, 쭈삼구이", "调味烤, 양념구이"],
        prices33: ["₩14,000", "₩16,000", "₩15,000", "₩17,000", "₩15,000"],
        discriptions33: [],
        title3: "小菜菜单 (사이드 메뉴)",
        dishes3: ["火山爆发蒸蛋, 화산폭발계란찜", "火山爆发芝士蒸蛋, 화산폭발치즈계란찜", "芝麻牛肉饭团, 깨불고기 주먹밥", "铁板炒饭, 철판볶음밥", "炒饭加芝士, 볶음밥 치즈추가", "蛤蜊汤, 바지락 백탕"],
        prices3: ["₩5,000", "₩6,500", "₩5,000", "₩4,000", "₩1,500", "₩8,000"],
        discriptions3: [],
        title4: "配菜菜单 (사리 메뉴)",
        dishes4: ["乌冬面, 우동 사리", "年糕, 떡 사리", "芝士, 치즈 사리", "三层肉(200g), 삼겹 사리(200g)", "香菜, 미나리 사리", "鱼子, 날치알"],
        prices4: ["₩3,000", "₩3,000", "₩3,000", "₩6,000", "₩4,000", "₩3,000"],
        discriptions4: [],
        title5: "饮料 / 饮料 (주류 / 음료)",
        dishes5: ["烧酒(池南/ 一如初/ 金罗/ 塞罗), 소주(참이슬/ 처음처럼/ 진로/ 새로)", "清酒, 청하", "哈拉山, 한라산", "啤酒(卡斯/ 特拉/ 凯利/ 克鲁什), 맥주(카스/ 테라/ 켈리/ 크러시)", "无酒精啤酒(青岛/ 喜力), 논알콜 맥주(칭따오/ 하이네켄)", "软饮料(可口可乐/ 雪碧/ 零可乐/ 零雪碧), 음료(콜라/ 사이다/ 제로콜라/ 제로사이다)", "高球, 하이볼", "激情高球, 열정 하이볼"],
        prices5: ["₩5,000", "₩6,000", "₩6,000", "₩5,000", "₩6,000/₩8,000", "₩2,000", "₩8,000", "₩8,000"],
        discriptions5: []
    }
    
    
    
};

const defaultMenu = translations.ko;

const MenuList = ({ selectedLanguage }: Props) => {
    const [menu, setMenu] = useState(translations[selectedLanguage] || defaultMenu);

    const t = useTranslations("Title");
    const title_arr = [t('Combo3'),t('Combo2'),t('Additional'),t('Side'),t('Toping'),t('Beverage'),]

    useEffect(() => {
        setMenu(translations[selectedLanguage] || defaultMenu);
    }, [selectedLanguage]);

    return (
        <div className="space-y-8">
            {title_arr.map((title, index) => (
                <div key={index}>
                    <h1 className="text-3xl font-bold text-center mb-4 text-content" id={index.toString()}>{title}</h1>
                    <div className="menu-list">
                        {[menu.dishes, menu.dishes2,menu.dishes33, menu.dishes3, menu.dishes4, menu.dishes5][index].map((dish, dishIndex) => (
                            <MenuItemCard
                                key={dishIndex}
                                name={dish}
                                price={[menu.prices, menu.prices2,menu.prices33, menu.prices3, menu.prices4, menu.prices5][index][dishIndex]}
                                imageUrl={images[index][dishIndex]}
                                discription={[menu.discriptions,menu.discriptions2,menu.discriptions33,menu.discriptions3,menu.discriptions4,menu.discriptions5][index][dishIndex]}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
