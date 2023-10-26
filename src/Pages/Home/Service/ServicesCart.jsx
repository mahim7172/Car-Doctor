import { FcNext } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const ServicesCart = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
            <figure><img className='h-full' src={img} alt="Shoes" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/bookservice/${_id}`}><button className="btn btn-circle"><FcNext></FcNext></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;