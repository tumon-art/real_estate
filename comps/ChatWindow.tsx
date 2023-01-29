import AskEmail from "./AskEmail";

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
