// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Components/Auth/Authprovider";


const Checkout = () => {
    const services = useLoaderData()
    console.log(services)
    // const { title, _id, price } = services;
    // const { user } = useContext(AuthContext)


    return (
        <div>


            <form className=" mx-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered"
                            required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Emai</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Emai"
                            className="input input-bordered"
                            required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input
                        className="btn btn-primary btn-block"
                        type="submit"
                        value="Submit" />
                </div>
            </form>



        </div>
    );
};

export default Checkout;