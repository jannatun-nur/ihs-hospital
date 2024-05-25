
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlClock } from "react-icons/sl";
const Card = ( { doctors }) => {

    const {image , name, title, location , time} = doctors;
    return (
        <div>
            <div className="bg-white border border-green-600 rounded-lg shadow-2xl lg:w-9/12 lg:p-4 ">
            <img className="rounded-full lg:ml-16 lg:w-5/12" src={image} alt="" />
            <p className="text-green-700 lg:text-2xl font-bold">{name}</p>
            <p className="text-green-700 lg:text-xl font-semibold py-2"> {title} </p>
            <p className="flex gap-3 lg:text-xl text-green-700"><span className="lg:mt-1"><FaRegCalendarAlt /> </span>{ location}</p>
            <p className="flex gap-3 lg:text-xl text-green-700 py-2"><span className="lg:mt-1"><SlClock /> </span>{time}</p>
            </div>
        </div>
    );
};

export default Card;