// components/MenuItemCard.tsx
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import DetailModal from "./DetailModal";

// import Swiper JS

// import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination} from 'swiper/modules';
type MenuItemProps = {
    name: string;
    price: string;
    imageUrl: StaticImageData;
    discription: string;
};

const MenuItemCard = ({ name, price, imageUrl, discription }: MenuItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    var name_arr = name.split(',');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="rounded-lg shadow-md bg-white overflow-hidden w-44 h-80 card">
            <div onClick={handleModalOpen}>
                <div className="w-full h-1/2 image-box relative">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                    />
                </div>
                
                <div className="p-4 h-1/2"  >
                {
                (name_arr.length >= 2) ? (
                    <>
                    <h3 className="text-md font-extrabold mb-2 1/4">{name_arr[0]}</h3>
                    <h3 className=" mb-2 1/4">{name_arr[1]}</h3>
                    </>
                ) : (
                    <div className="text-xl font-extrabold mb-2 h-1/2">{name_arr[0]}</div>
                )
                }<div className="text-gray-700 card-price">{price}</div>
                </div>
            </div>
            {isModalOpen && (
                <DetailModal open={isModalOpen} onClose={()=>handleModalClose()}>
                    {/* <Image
                    src={imageUrl}
                    alt={name}
                    className="object-cover w-full h-1/2"
                    width={240}
                    height={100}
                /> */}
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full object-cover h-1/2">
                    <SwiperSlide><Image src={imageUrl} alt={name} width={240} height={100}/></SwiperSlide>
                    <SwiperSlide>이미지 준비 중 입니다.</SwiperSlide>
                    <SwiperSlide>이미지 준비 중 입니다.</SwiperSlide>
                </Swiper>
                    <div className="p-4 h-1/2 text-center"  >
                    {
                (name_arr.length >= 2) ? (
                    <>
                    <h3 className="text-xl font-extrabold mb-2 1/4">{name_arr[0]}</h3>
                    <h3 className=" mb-2 1/4">{name_arr[1]}</h3>
                    </>
                ) : (
                    <div className="text-xl font-extrabold mb-2 h-1/2">{name_arr[0]}</div>
                )
                }
  
                        <div className="text-md font-normal">{discription}</div>
                        <div className="text-gray-700 card-price">{price}</div>
                    </div>
                </DetailModal>
            )}
        </div>
    );
};

export default MenuItemCard;