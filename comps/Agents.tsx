import Image from "next/image";
import {
  MdStarBorder,
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdHomeRepairService,
} from "react-icons/md";

const Agents = () => {
  const agentsData = [
    {
      id: 1,
      img: "/courtney.jpeg",
      name: `Courtney 
      Geissinger`,
      rating: 4.8,
    },
    {
      id: 2,
      img: "/michael.jpeg",
      name: `Micheal 
      Fadeeff`,
      rating: 4.3,
    },
    {
      id: 3,
      img: "/raul.jpeg",
      name: `Roul 
      Alcaraz`,
      rating: 3.3,
    },
    {
      id: 4,
      img: "/francisco.jpeg",
      name: `Francisco 
      Gonzalez`,
      rating: 3.8,
    },
  ];

  const getStar = (e: any): any => {
    if (e.rating > 4.4) {
      return (
        <div className=" flex text-sky-600">
          <MdStar className="" />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
      );
    }

    if (e.rating > 4) {
      if (e.rating < 4.4) {
        return (
          <div className=" flex  text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </div>
        );
      }
    }

    if (e.rating > 3.5) {
      if (e.rating < 3.9) {
        return (
          <div className=" flex text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarOutline />
          </div>
        );
      }
    }

    if (e.rating > 3.1) {
      if (e.rating < 3.5) {
        return (
          <div className=" flex text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </div>
        );
      }
    }
  };

  return (
    <section className=" flex flex-col min-w-full items-center">
      <h3 className=" text-center text-md font-OpenSans">OJO NETWORK AGENTS</h3>
      <h2 className=" text-center text-2xl font-semibold">
        Agents in {` `}
        <span className=" text-sky-600">San Francisco</span>
      </h2>

      <div className=" md:flex overflow-auto py-4 px-4 w-full gap-5">
        {agentsData.map((e: any, i) => {
          return (
            <div
              className=" ring-1 flex justify-around items-center
               bg-zinc-100 min-w-[250px] h-44 rounded-xl"
              key={e.id}
            >
              <div>
                <Image
                  src={e.img}
                  height="100"
                  width="100"
                  alt="img"
                  className=" rounded-full"
                />
              </div>

              <div className="">
                <div className=" text-sky-600 flex items-center gap-2">
                  <MdHomeRepairService />
                  <p className=" text-[0.6rem] text-zinc-600">Pro. Broker</p>
                </div>
                <h3
                  className=" leading-5 font-OpenSans text-md
                 font-semibold break-words whitespace-pre-line"
                >
                  {" "}
                  {e.name}{" "}
                </h3>
                <div>{getStar(e)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Agents;
