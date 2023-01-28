export default function ChatWindow({ setShowWindow }: { setShowWindow: any }) {

  return (
    <nav className=" fixed h-[100vh] w-[100vw] z-50">

      <div className="fixed h-[100vh] w-[100vw]"
        onClick={() => setShowWindow(false)}
      > </div>

      <nav className="right-1 flex justify-center sm:right-5 bottom-20 fixed
    shadow-2xl ring-4 items-center ring-sky-200 overflow-hidden
    h-96 w-60 sm:w-80 z-20 rounded-xl backdrop-blur-md">
    <div className="absolute clipP w-full  h-full bg-sky-400  opacity-60"> </div>
    hello
    </nav>

    </nav>
  )
}
