import { useSession, signIn, signOut } from "next-auth/react"

export const IsLoggedIn = () => {
    const { data: session } = useSession()



    if(session) {
      return <div>
        {/* Signed in as {session.user.email} <br/> */}
        <button className=" bg-zinc-400
        hover:bg-sky-500 transition duration-400 
        border-gray-600 text-white px-2 font-Yellowtail"
        onClick={() => signOut()}>Sign out</button>
      </div>
    }
    return <div>
      <button className=" bg-zinc-400
      hover:bg-sky-500 transition duration-400 
      border-gray-600 text-white px-2 font-Yellowtail"
      onClick={() => signIn()}>Sign in</button>
    </div>
  }