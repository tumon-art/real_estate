import { useSession, signIn, signOut } from "next-auth/react"

export const IsLoggedIn = () => {
    const { data: session } = useSession()


    if(session) {
      return <div>
        {/* Signed in as {session.user.email} <br/> */}
        <button className=" font-FiraMono
        hover:bg-sky-700 transition duration-400 
         text-white sm:text-black px-2 "
        onClick={() => signOut()}>Sign out</button>
      </div>
    }
    return <div>
      <button className=" font-FiraMono 

     hover:underline transition duration-400
      text-white sm:text-sky-800 px-2"
      onClick={() => signIn()}>Sign in</button>
    </div>
  }