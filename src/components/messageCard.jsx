import arrow from "../assets/arrow.svg";
import Proptypes from 'prop-types';

export const MessageCard = (props) => {
    return(
        <>
            <div className="bg-slate-800 grid gap-y-4 shadow-xl shadow-black hover:bg-slate-600 hover:cursor-pointer">
                <div className="flex flex-col justify-center items-center bg-slate-500 border-solid border-2 border-red-300 p-1 h-max">
                    <h3 className="text-2xl text-white break-all">{props.senderNumber}</h3>
                    <img className="w-7 h-6" src={arrow} alt="" />
                    <h3 className="text-2xl text-white break-all">{props.receivedNumber}</h3>
                </div>
                <div className="text-xl space-y-4 p-3">
                    <p className="text-green-300">Sender: <span className="text-white font-extrabold uppercase">{props.senderName}</span></p>
                    <p className="text-green-300">Platform: <span className="text-white font-extrabold uppercase">{props.platform}</span></p>
                    <p className="text-green-300">Date: <span className="text-white font-extrabold">{props.date.slice(0, -10)}</span></p>
                    <p className="text-green-300">Description: <span className=" text-white font-extrabold">{props.description}</span></p>
                </div>
            </div>
        </>
    )
}

MessageCard.proptypes = {
    senderNumber: Proptypes.number,
    senderName: Proptypes.string,
    receivedNumber: Proptypes.number,
    platform: Proptypes.string,
    description: Proptypes.string,
    date: Proptypes.string
}