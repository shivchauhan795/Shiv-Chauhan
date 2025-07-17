
const BottomBanner = () => {
    return (
        <div className="mx-20 max-lg:mx-10 mt-24 bg-gradient-to-r from-[#DA4453] to-[#89216B] rounded-3xl py-20 myfont flex flex-col justify-center items-center">
            <div className="font-bold text-5xl max-lg:text-xl text-center text-[#ffffff]">
                Let’s Build Something amazing!
            </div>
            <div className="mt-6 font-normal text-2xl max-lg:text-xs text-[#ffffff] text-center px-72 max-xl:px-10">
                Change someone’s life by creating a useful product and adding value so that no one have to sleep unsatisfied.
            </div>
            <div onClick={() => {window.open('https://emerald-dryosaurus-c61.notion.site/23032a79d2cc80f0a975edac1a57db42?pvs=105', '_blank')}} className="mt-24 max-lg:mt-12 rounded-full font-bold text-sm max-lg:text-[10px] bg-[#ffffff] text-[#000000] py-4 px-12 max-lg:py-2 max-lg:px-8 w-fit cursor-pointer">
                GET IN TOUCH
            </div>
        </div>
    )
}

export default BottomBanner
