import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";




const Doctors = () => {

    const [ doctor , setDoctor] = useState([])

    useEffect( ()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data =>setDoctor(data))
    },[])
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    doctor.map(doctors=> <Card key={doctors} doctors={doctors}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Doctors;