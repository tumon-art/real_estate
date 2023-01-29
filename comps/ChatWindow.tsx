import { FormEvent, useState } from "react";
import { MdSupportAgent } from "react-icons/md";

function AskEmail() {
  const [email, setEmail] = useState<string>("");


  const getOrCreateChat = () => {
    const url = "https://api.chatengine.io/chats/";
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Project-ID": String(process.env.NEXT_PUBLIC_PROJECT_ID),
      },
      body: JSON.stringify({
        usernames: ["adam_la_morre", "bob_baker", "wendy_walker"],
        title: "Another Surprise Party!",
        is_direct_chat: false
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getOrCreateUser = () => {
    const url = "https://api.chatengine.io/users/";
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-KEY": String(process.env.NEXT_PUBLIC_PRIVET_KEY),
      },
      body: JSON.stringify({
        username: email,
        secret: email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    // RESET STATE
    setEmail("");
  };
  return (
    <>
      <div
        className="absolute z-[-1] clipP w-full h-full
        bg-sky-400"
      ></div>

      <MdSupportAgent className="h-12 w-12 text-white" />
      <p className=" font-bold px-5 text-center text-white text-xl">
        Welcome to our support chat
      </p>

      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          className="ring-2 outline-none rounded-md py-2 w-48 pl-2
             ring-sky-400 placeholder:text-xs text-xs"
          placeholder="enter you email"
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="font-bold px-6 text-center text-md">
          Enter your email address to get started
        </p>

        <button
          type="submit"
          className=" shadow-xl px-4 py-1 font-semibold text-white bg-sky-400
            rounded-xl cursor-pointer hover:bg-sky-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default function ChatWindow({ setShowWindow }: { setShowWindow: any }) {
  return (
    <nav className=" fixed h-[100vh] w-[100vw] z-50">
      <div
        className="fixed h-[100vh] w-[100vw]"
        onClick={() => setShowWindow(false)}
      ></div>

      <nav
        className="right-0 flex flex-col gap-4 justify-center
      sm:right-5 bottom-20 fixed
      shadow-2xl items-center overflow-hidden
      h-80 sm:h-96 w-60 sm:w-80 z-20 rounded-l-lg sm:rounded-lg  bg-zinc-50"
      >
        <AskEmail />
      </nav>
    </nav>
  );
}
