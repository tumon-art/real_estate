import { useSession, signIn, signOut } from "next-auth/react"

export const IsLoggedIn = () => {
    const { data: session } = useSession()



    if(session) {
      return <>
        {/* Signed in as {session.user.email} <br/> */}
        <button className=" bg-zinc-400 border-b-2 
        hover:bg-sky-500 transition duration-400 
        border-gray-600 text-white px-2 pb-[3px]"
        onClick={() => signOut()}>Sign out</button>
      </>
    }
    return <>
      Not signed in <br/>
      <button className=" bg-zinc-400 border-b-2 
      hover:bg-sky-500 transition duration-400 
      border-gray-600 text-white px-2 pb-[3px]"
      onClick={() => signIn()}>Sign in</button>
    </>
  }