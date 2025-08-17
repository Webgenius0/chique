
import { pantData } from "@/data/db"
import ItemCard from "./ItemCard";

const CategoryItems = ({ category_slug }) => {
    // main render
    return (
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-5 gap-3">
            {pantData.map((item) => (
                <ItemCard key={item.id} item={item} category_slug={category_slug} />
            ))}
        </div>
    )
}

export default CategoryItems