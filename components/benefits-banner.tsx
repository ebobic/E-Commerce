import Image from "next/image";

export default function BenefitsBanner() {
    return (
        <section className="flex justify-around py-2 md:py-6 bg-slate-100">

            {/* Delivery */}
            <div className="flex flex-col items-center text-center gap-1 md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                    src="/Delivery.svg" 
                    alt="" 
                    width={40} 
                    height={40} 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                </div>
                <div className="flex flex-col items-center text-center md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">Free Delivery</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center text-center gap-1 md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                    src="/Support.svg" 
                    alt="" 
                    width={40} 
                    height={40} 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                </div>
                <div className="flex flex-col items-center text-center md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">Support 24/7</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            {/* Authentic */}
            <div className="flex flex-col items-center text-center gap-1 md:flex-row md:items-center md:space-x-4">
                <div className="flex justify-center md:justify-start">
                    <Image 
                    src="/Shield.svg" 
                    alt="" 
                    width={40} 
                    height={40} 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                </div>
                <div className="flex flex-col items-center text-center md:items-start">
                    <h3 className="text-xs md:text-base font-semibold">100% Authentic</h3>
                    <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </section>
    )
}