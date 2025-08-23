import Link from 'next/link'

const ItemCard = ({ item = {}, category_slug }) => {
    const {
        id,
        slug,
        item_name,
        image,
    } = item || {}
    // main render card
    return (
        <div className="w-full flex flex-col  gap-3">
            <div className="w-full h-[300px] overflow-hidden border bg-gray-100 rounded-md p-2">
                <img
                    src={image}
                    alt={item_name || "N/A"}
                    className="w-full h-full object-cover"
                />
            </div>
            <Link href={`/dashboard/my-clothes/${category_slug}/${slug}`} className="2xs:text-base text-sm text-primary-dark font-primary font-medium bg-[#F8F8F8] p-3 rounded-lg cursor-pointer">
                {item_name || "N/A"}
            </Link>
        </div>
    )
}

export default ItemCard