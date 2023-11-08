export default function Footer () {
    return (
        <footer className="w-full relative bg-[#171717] h-fit">
            <div className="absolute top-0 bottom-[92px] left-8 md:left-14 bg-red-custom w-1px"></div>
            <p className="w-screen border-b-[1px]  border-b-red-custom pt-8 pr-3 pb-4 bg-dark-custom text-gray-custom font-workSans text-center">contact@mugencode.com</p>
            
            <div className=" ml-[6px] flex pt-4 pb-2 pr-[21px] justify-end">
                <p className="text-center font-sourceCodePro text-gray-custom">&lt;nazitaOg&gt;</p>
                <p className=" text-center ml-1 text-gray-custom font-sourceCodePro">&lt;/OriginalKazdov&gt;</p>
            </div>
            <p className="w-screen pb-4 text-gray-custom text-lg font-bolder text-end pr-10 font-workSans">2023 Mugencode ™</p>
        </footer>
    );
}