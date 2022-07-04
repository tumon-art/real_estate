import Image from "next/image"
import styles from "./Banner.module.scss"


import houseImg from '../../../assets/images/real3.webp'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName }) => (
    <div className=" w-full relative"> 
        
    <div className="block w-full h-[300px] sm:h-[400px] relative items-center justify-center gap-5">
        <Image src={houseImg} alt='img' 
        layout='fill'
        className={styles.BannerImg} />
    </div>

    </div>

)


export default Banner