import { FormEvent, useState } from "react";
import { MdSupportAgent } from "react-icons/md";

export default function AskEmail({
  setUser,
  setChat,
}: {
  setUser: any;
  setChat: any;
}) {
  const [email, setEmail] = useState<string>("");

  const getOrCreateUser = async () => {
    const url = "https://api.chatengine.io/users/";

    const res = await fetch(url, {
      method: "PUT",
      // headers: {
      //   "Content-Type": "application/json",
      //   "PRIVATE-KEY": String(process.env.NEXT_PUBLIC_PRIVET_KEY),
      // },
      body: JSON.stringify({
        username: email,
        secret: email,
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error: any) => console.error(error));
    return res;
  };

  const getOrCreateChat = async () => {
    const url = "https://api.chatengine.io/chats/";
    const res = await fetch(url, {
      method: "PUT",
      // headers: {
      //   "Content-Type": "application/json",
      //   "PRIVATE-KEY": String(process.env.NEXT_PUBLIC_PRIVET_KEY),
      // },
      body: JSON.stringify({
        usernames: ["mail@mail.com", email],
        title: "mail@mail.com",
        is_direct_chat: false,
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error: any) => console.error(error));
    return res;
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO chat is unavailable
    // // GET OR CREATE USER
    // const user = await getOrCreateUser();

    // if (user.id) {
    //   console.log("USERS", user);
    //   // GET OR CREATE CHAT
    //   const chat = await getOrCreateChat();
    //   console.log("CHAT", chat);
    // }
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
          className=" shadow-xl py-[2px] px-3 sm:px-4 sm:py-1 
           text-base font-semibold text-white 
           bg-sky-400 rounded-xl cursor-pointer
          hover:bg-sky-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </>
  );
}
