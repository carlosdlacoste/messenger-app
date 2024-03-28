import arrow from "../assets/arrow.svg";
import Proptypes from 'prop-types';

export const MessageCard = (props) => {
    return(
        <>
            <div className="bg-slate-800 grid gap-y-4">
                <div className="flex flex-row gap-x-5 justify-center items-center bg-slate-500 border-solid border-4 border-green-300 p-1">
                    <h3 className="text-2xl text-white break-all">{props.senderNumber}</h3>
                    <img className="w-7 h-6" src={arrow} alt="" />
                    <h3 className="text-2xl text-white break-all">{props.receivedNumber}</h3>
                </div>
                <p className="text-xl text-white p-3">Sender: {props.senderName}</p>
                <p className="text-xl text-white p-3">Platform: {props.platform}</p>
                <p className="text-xl text-white p-3">Date: {props.date}</p>
                <p className="text-xl text-white p-3">Description: {props.description}</p>
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