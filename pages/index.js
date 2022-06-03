import Image from "next/image"

export default function Home() {

  // TAILWIND COMP
  const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
    <div className=" flex">

      <Image src={imageUrl} width={500} height={300} alt='img' />
      <section>
        <h4> {purpose}</h4>
        <h1> {title1} <br/> {title2} </h1>
      </section>

    </div>
  )
  return (
    <>
    Hello
    </>
  )
}
