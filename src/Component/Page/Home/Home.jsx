import { Link } from "react-router-dom";
// import { FaFacebookF } from "@react-icons/all-files/fa/FaBeer";
import { FaFacebookF, FaSkype, FaTwitter } from "react-icons/fa";



const Home = () => {
    const Navber =
        <>
            <li> <Link to="/">HOme</Link> </li>
            <li> <Link to="/Contact">Contact Us</Link> </li>
            <li> <Link to="/ Dashboard">Dashboard</Link> </li>
            <li> <Link to="/Ourmenu">Our Menu</Link> </li>
            <li> <Link to="/Ourshop">Our Shop</Link> </li>
            <li> <Link to="/Signout">Sign out</Link> </li>
        </>





    return (
        <>
            {/* Navber part stard */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navber}
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navber}
                    </ul>
                </div>
            </div>
            {/* Navber part end */}
            {/* Add banner CArusall part stard */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* Add banner CArusall part End */}
            {/* Add Menu of Week part Stard */}
            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10">Menu of Week</div>
                <div className="flex gap-8">
                    <div className="card card-side bg-slate-200 p-4 shadow-xl ">
                        <figure><img className="w-fit rounded-lg" src="https://i.ibb.co/2gXxGYW/menu-01.jpg " alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-3xl" >Rome Pizza</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis harum dolores dolore quo eaque sunt ea ipsum veniam repudiandae sequi.</p>
                            <div className="card-actions justify-end">
                                <div className="text-black font-bold  ">Price: <span className="text-black font-bold text-3xl">$145</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-slate-200 p-4 shadow-xl">
                        <figure><img className="w-fit rounded-lg" src="https://i.ibb.co/6Hyp3Bp/menu-02.jpg  " alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-3xl" >Summer salad</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis harum dolores dolore quo eaque sunt ea ipsum veniam repudiandae sequi.</p>
                            <div className="card-actions justify-end">
                                <div className="text-black font-bold  ">Price: <span className="text-black font-bold text-3xl">$25.99</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 pt-10">
                    <div className="card card-side bg-slate-200 p-4 shadow-xl">
                        <figure><img className="w-fit rounded-lg" src="https://i.ibb.co/xg0ffPF/menu-03.jpg" alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-3xl" >Fruit salad</h2>
                            <p>Lorem ipsum, dolor lorem50 sit amet consectetur adipisicing elit. Quis harum dolores dolore quo eaque sunt ea ipsum veniam repudiandae sequi.</p>
                            <div className="card-actions justify-end">
                                <div className="text-black font-bold  ">Price:<span className="text-black font-bold text-3xl">$200</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-slate-200 p-4 shadow-xl">
                        <figure><img className="w-fit rounded-lg" src="https://i.ibb.co/7tK52Rt/menu-04.jpg" alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-3xl" >Espresso</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis harum dolores dolore quo eaque sunt ea ipsum veniam repudiandae sequi.</p>
                            <div className="card-actions justify-end">
                                <div className="text-black font-bold  ">Price: <span className="text-black font-bold text-3xl">$3.99</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Menu of Week part End */}
            {/* Add Our Personal part Stard */}

            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10">Menu of Week</div>
                <div className="flex gap-8">
                    <div className="card card-side bg-slate-200 p-4 shadow-xl ">
                        <figure><img className=" rounded-full" src="https://i.ibb.co/8P7B9kc/personal-01.jpg " alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-4xl" >Jamas Ford</h2>
                            <h1 className="text-orange-600 text-3xl font-bold">Waiter</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, esse.</p>
                            <div className="card-actions text-3xl text-blue-500 py-5">
                                <div><FaFacebookF /></div>
                                <div><FaSkype /></div>
                                <div><FaTwitter /></div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-slate-200 p-4 shadow-xl">
                        <figure><img className=" rounded-full" src="https://i.ibb.co/vvJvXJr/personal-02.jpg " alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-4xl" >Matthow Fox</h2>
                            <h1 className="text-orange-600 text-3xl font-bold">Waiter</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, veritatis.</p>
                            <div className="card-actions text-3xl text-blue-500 py-5">
                                <div><FaFacebookF /></div>
                                <div><FaSkype /></div>
                                <div><FaTwitter /></div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-slate-200 p-4 shadow-xl">
                        <figure><img className=" rounded-full" src="https://i.ibb.co/18x4Zjy/r.jpg " alt="Movie" /></figure>
                        <div className="pl-4 w-3/5">
                            <h2 className="card-title text-black font-bold text-4xl" >Tayfur</h2>
                            <h1 className="text-orange-600 text-3xl font-bold">Joker</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eaque.</p>
                            <div className="card-actions text-3xl text-blue-500 py-5">
                                <div><FaFacebookF /></div>
                                <div><FaSkype /></div>
                                <div><FaTwitter /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Add Our Personal part End */}













































        </>
    );
};

export default Home;