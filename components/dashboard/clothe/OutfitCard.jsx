"use client"

const OutfitCard = ({ item = {} }) => {
    // destructuring
    const {
        image_path,
        item_name,
        item_id
    } = item || {};
    // main render
    return (
        <div className="w-full  bg-[#FAFAFB] rounded-lg p-4">
            <div className="w-full h-[220px] overflow-hidden">
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image_path}`}
                    className="w-full h-full object-cover"
                    alt={item_name || "N/A"}
                />
            </div>
            <div className="w-full flex flex-col gap-1 bg-[#F5F6F7] py-3">
                <p className="xs:text-xl text-lg text-primary-dark font-primary">
                    {item_name || "N/A"}
                </p>
            </div>
        </div>
    )
}

export default OutfitCard