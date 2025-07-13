import LoaderV2 from "./LoaderV2"
const ScreenLoading = () => {
    return (
        <div className="w-full h-screen fixed inset-0 z-[1100000] bg-black/50 backdrop-blur-sm  flex justify-center items-center">
            <LoaderV2 />
        </div>
    );
};
export default ScreenLoading;