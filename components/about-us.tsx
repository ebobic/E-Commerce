import Link from "next/link"

interface AboutProps {
    showLink: boolean;
}

export default function AboutUs({ showLink }: AboutProps) {
    return(
        <section id="about" className="bg-slate-100 py-12">
            <div className="flex flex-col m-auto text-center w-9/10 md:w-7/10 lg:w-6/10 xl:w-5/10">
                <h2 className="font-bold text-2xl text-neutral-800 ">Get To Know Who We Are And What We Do - About Us</h2>
                <p className="text-sm text-neutral-800 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {showLink && (
                <div className="flex justify-center ">
                    <Link href="" className="bg-blue-900 rounded-full text-white px-4 py-0.5 hover:bg-blue-800">Learn More</Link>  
                </div>
            )}
        </section>
    )
}