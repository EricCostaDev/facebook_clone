import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { useSession, signIn, signOut } from "next-auth/react"
import Login from "../components/Login"
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home() {

  const { data: session } = useSession()
  if(session) {
    return (
      <div >
        <Head>
          <title>Facebook</title>
        </Head>
  
          {/* header */}
          <Header/>
  
          <main className='flex bg-gray-100'>
            <Sidebar />
            <Feed />
            {/* widgets */}
  
          </main>
  
  
      </div>
    )
  }
  return <>
   <Login/>
  </>


}
