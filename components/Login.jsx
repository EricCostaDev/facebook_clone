import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className = "grid place-items-center mt-5">
            <Image         src="https://links.papareact.com/5me"
                           height={400} 
                           width={400}
                           ObjectFit="contain"/>
                           <h1 
                            onClick={signIn}
                            className="p-5 bg-blue-500 mt-5 rounded-full text-white text-center cursor-pointer">
                            Login with Facebook
                           </h1>
            
        </div>
    )
}

export default Login
