import parson from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row px-10">
                <div className='lg:w-1/2 relative'>
                    <img src={parson} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-1/2 border-white border-4 p-1 bg-white  w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className='text-3xl font-semibold pb-2 text-orange-500'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don not look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form,
                        by injected humour,
                        or randomised words which don nt look even slightly believable.  </p>
                    <button className='btn bg-orange-500 py-2 px-3 text-white border-0 hover:bg-orange-600 mt-3'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;