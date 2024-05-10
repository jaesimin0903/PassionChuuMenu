// components/MenuItemCard.tsx
import Image, { StaticImageData } from "next/image";

type MenuItemProps = {
    name: string;
    price: string;
    imageUrl: StaticImageData;
    discription:string;
};

const MenuItemCard = ({ name, price, imageUrl,discription }: MenuItemProps) => {
    var name_arr = name.split(',');
    return (
        <div className="rounded-lg shadow-md bg-white overflow-hidden w-72 h-150 card">
            <Image
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-1/2"
                width={240}
                height={100}
            />
            <div className="p-4 h-1/2">
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

                <div className="text-md font-normal  ">{discription}</div>
                <div className="text-gray-700 card-price">{price}</div>
            </div>
        </div>
    );
};

export default MenuItemCard;
