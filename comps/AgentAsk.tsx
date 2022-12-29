import Image from "next/image";
import { AgenstData } from "./Agents";

export default function AgentAsk({ agent }: { agent: AgenstData }) {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Image
        src={agent.img}
        alt="img"
        height="100"
        width="100"
        className="ring-4  ring-sky-100 rounded-full"
      />

      <h2 className=" my-2 text-sky-700 text-xl font-bold"> Ask a question </h2>
      <h3 className=" text-zinc-700 text-base font-semibold"> {agent.name} </h3>

      <form className=" flex flex-col items-center">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4
        bg-zinc-100 shadow-md"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4
        bg-zinc-100 shadow-md"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4
        bg-zinc-100 shadow-md"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4
        bg-zinc-100 shadow-md"
        />
      </form>
    </div>
  );
}
