import Image from "next/image"
import Link from "next/link"

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (

    <div className=" block sm:flex items-center gap-5">

        <Image src={imageUrl} width={500} height={300} alt='img' />

        <section className=" ml-2 sm:ml-0">
            <h4 className=" text-zinc-600">
                {purpose}
            </h4>

            <h1 className=" text-xl sm:text-2xl font-bold">
                {title1} <br /> {title2}
            </h1>

            <p className=" text-zinc-800 my-3 sm:text-lg text-md md:w-2/3 ">
                {desc1} {desc2}
            </p>

            <button className=" text-md sm:text-xl font-bold bg-zinc-300 cursor-pointer
            hover:bg-cyan-500 hover:text-white transition-colors py-1 px-2 rounded-md">
                <Link href={linkName} >
                    <a>
                        {buttonText}
                    </a>
                </Link>
            </button>
        </section>

    </div>

)


export default Banner