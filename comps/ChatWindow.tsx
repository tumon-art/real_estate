export default function ChatWindow({ setShowWindow }: { setShowWindow: any }) {

  return (
    <nav className=" fixed h-[100vh] w-[100vw] z-50">
      <div className="fixed h-[100vh] w-[100vw]"
        onClick={() => setShowWindow(false)}
      > </div>
      <nav className="right-1 sm:right-5 bottom-20 fixed
    shadow-2xl ring-4 ring-sky-200
    h-96 w-80 z-20 rounded-xl backdrop-blur-md"> </nav>

    </nav>
  )
}
