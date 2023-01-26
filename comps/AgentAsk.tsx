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

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" flex mt-4 flex-col items-center"
      >
        <input
          autoFocus
          required
          type="text"
          name="name"
          placeholder="Your Name"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4 
          focus:outline-none bg-zinc-100 shadow-md"
        />

        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4 
          focus:outline-none bg-zinc-100 shadow-md"
        />

        <input
          required
          type="number"
          name="Phone"
          placeholder="Phone"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4 
          focus:outline-none bg-zinc-100 shadow-md"
        />

        <input
          required
          type="number"
          name="Zip"
          placeholder="Zip Code"
          className=" ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4 
          focus:outline-none bg-zinc-100 shadow-md"
        />

        <button
          className=" py-2 w-2/3 mt-4 bg-sky-600
           text-white hover:bg-sky-800
         rounded-xl shadow-xl  shadow-sky-300 font-semibold
        "
        >
          Ask {agent.name.split(" ")[0]}
        </button>
      </form>
    </div>
  );
}
