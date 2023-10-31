import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Auth/Authprovider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })



        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remainig = bookings.filter(booking => booking._id !== id)
                        setBookings(remainig)
                        console.log(remainig)
                    }

                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.matchedCount > 0) {
                    const remainig = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id == id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remainig]
                    setBookings(newBooking)

                }

            })
    }





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
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                ></BookingRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Booking;