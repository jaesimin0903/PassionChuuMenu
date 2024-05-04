// components/MenuItemCard.tsx
import Image from "next/image";

type MenuItemProps = {
    name: string;
    price: string;
    imageUrl : string;
};

const MenuItemCard = ({ name, price,imageUrl }: MenuItemProps) => {
    return (
        <div className="menu-item-card">
            <Image
                src={imageUrl}
                alt={name}
                className="menu-item-image"
                width={200}
                height={150}
                objectFit="cover"
            />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default MenuItemCard;
