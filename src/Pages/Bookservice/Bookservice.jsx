import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/Auth/Authprovider";


const Bookservice = () => {
    const services = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(services)
    const { title, _id, price, img } = services;

    const handleClickBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const order = {
            customer: name,
            date,
            email,
            img,
            price: price,
            service: title,
            service_id: _id,

        }
        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Bookingssent successfully')
            })

    }

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-5 text-[#FF3811]">Book Service</h1>
            <form
                onSubmit={handleClickBook}
                className=" mx-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            defaultValue={user?.displayName}
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered"
                            required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="Email"
                            name="email"
                            placeholder="Email"
                            defaultValue={user?.email}
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Duo Amount</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            defaultValue={'$' + price}
                            className="input input-bordered"
                            required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input
                        className="btn bg-[#FF3811] font-semibold text-white hover:bg-orange-500 btn-block"
                        type="submit"
                        value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Bookservice;