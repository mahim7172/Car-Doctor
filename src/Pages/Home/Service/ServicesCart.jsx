import { FcNext } from 'react-icons/fc';
const ServicesCart = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-circle"><FcNext></FcNext></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;