import Link from "next/link"

export default function AboutUs() {
    return(
        <section className="bg-slate-100 p-6">
            <div className="flex flex-col m-auto text-center w-full">
                <h2 className="font-bold text-2xl text-neutral-800 p-2">Get To Know Who We Are And What We Do - About Us</h2>
                <p className="text-xs text-neutral-800 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="flex justify-center p-2">
                <Link href="" className="bg-blue-900 rounded-full text-white text-xs px-4 py-1">Learn More</Link>  
            </div>
        </section>
    )
}