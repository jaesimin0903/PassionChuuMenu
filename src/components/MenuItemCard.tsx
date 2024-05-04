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
        <div className="rounded-lg shadow-md bg-white overflow-hidden w-60">
            <Image
                src={imageUrl}
                alt={name}
                className="object-cover"
                width={240}
                height={150}
            />
            <div className="p-4">
            {
                (name_arr.length >= 2) ? (
                    <>
                    <h3 className="text-xl font-extrabold mb-2">{name_arr[0]}</h3>
                    <h3 className=" mb-2">{name_arr[1]}</h3>
                    </>
                ) : (
                    <h3 className="text-xl font-extrabold mb-2">{name_arr[0]}</h3>
                )
                }

                <h3 className="text-md font-normal mb-2">{discription}</h3>
                <p className="text-gray-700">{price}</p>
            </div>
        </div>
    );
};

export default MenuItemCard;
