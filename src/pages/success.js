import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter} from "next/router";

function success() {
    const router = useRouter();


    return (
        <div className="bg-gray-100 h-screen">

            <Header />

            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex item-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-3xl">Thank You, your order has been confirmed!</h1>
                    </div>
                    <p>
                        Thank you for shipping with us. We'll send a confirmation once your items has shipped . If you would like to check the status of your order(s) please press the link below.  
                    </p>
                    <button 
                        onClick={() => router.push("./orders")}
                        className=" mt-8 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400"
                    >
                         Go to my Order
                    
                    </button>
                </div>
            </main>
            
        </div>
    )
}

export default success
