import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Auth/Authprovider";
import BookingRow from "./BookingRow";

const Booking = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <h1>booking {bookings?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Booking;