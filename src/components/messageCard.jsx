import arrow from "../assets/arrow.svg";

export const MessageCard = () => {
    return(
        <>
            <div className="bg-slate-800 grid gap-y-4">
                <div className="flex flex-row gap-x-5 justify-center items-center bg-slate-500 border-solid border-4 border-green-300 p-1">
                    <h3 className="text-2xl text-white">1234567788</h3>
                    <img className="w-7 h-6" src={arrow} alt="" />
                    <h3 className="text-2xl text-white">1234567788</h3>
                </div>
                <p className="text-xl text-white p-3">Sender: Carlos</p>
                <p className="text-xl text-white p-3">Platform: Wa</p>
                <p className="text-xl text-white p-3">Date: 2024-11-08</p>
                <p className="text-xl text-white p-3">Description: Hola, Como Estas?</p>
            </div>
        </>
    )
}