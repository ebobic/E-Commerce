import Image from "next/image";

export default function BenefitsBanner() {
    return (
        <section className="grid grid-cols-3 py-6 bg-slate-100 items-center">

            {/* Delivery */}
            <div className="m-auto">
                <div className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                        src="/Delivery.svg" 
                        alt="" 
                        width={40} 
                        height={40} 
                    />
                </div>
                <div className="flex flex-col items-center text-center md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">Free Delivery</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
            </div>

            {/* Support */}
            <div className="m-auto">
                <div className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                        src="/Support.svg" 
                        alt="" 
                        width={40} 
                        height={40} 
                    />
                </div>
                <div className="flex flex-col items-center text-center  md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">Support 24/7</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
            </div>

            {/* Authentic */}
            <div className="m-auto">
                <div className="grid grid-rows-2 grid-cols-1 md:flex md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                        src="/Shield.svg" 
                        alt="" 
                        width={40} 
                        height={40} 
                    />
                </div>
                <div className="flex flex-col items-center text-center md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">100% Authentic</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
            </div>
        </section>
    )
}