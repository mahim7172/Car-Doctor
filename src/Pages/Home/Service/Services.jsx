import { useEffect } from "react";
import { useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="text-center">
            <h1 className="text-lg text-orange-500 font-bold">Service</h1>
            <h1 className="text-2xl my-1 font-bold">Our Services</h1>
            <p className="text-base">the majority have suffered alteration in some form, by injected humour,
                or randomise <br /> words which don not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
                {
                    service.map(service => <ServicesCart key={service._id} service={service}></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Services;