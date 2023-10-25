
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Components/Auth/Authprovider';
const Login = () => {
    const { signIn } = useContext(AuthContext)



    const handleClickSign = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                alert('Login success')
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12 ">
                    <img className='' src={img} alt="" />
                </div>
                <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form
                        onSubmit={handleClickSign}
                        className="card-body">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text"
                                >
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text"
                                >
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                name=""
                                value="Login" />
                        </div>
                        <p className='text-center mb-3 font-medium'>New to Car Doctor
                            <Link
                                to="/singup"
                                className='text-orange-600 ml-2 font-bold hover:underline'
                            >
                                Sing up
                            </Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;