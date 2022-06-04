import Image from "next/image"
import Link from "next/link"

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (

    <div className=" flex items-center gap-5">

        <Image src={imageUrl} width={500} height={300} alt='img' />
        <section>

            <h4 className=" text-zinc-600">
                {purpose}
            </h4>

            <h1 className=" text-2xl font-bold">
                {title1} <br /> {title2}
            </h1>

            <p className=" text-zinc-800 my-3 text-lg">
                {desc1} <br /> {desc2}
            </p>

            <button className=" text-xl font-bold bg-zinc-300 cursor-pointer
            hover:bg-cyan-700 transition-colors py-1 px-2 rounded-lg">
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