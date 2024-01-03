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
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Menu of Week</div>
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
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Menu of Week</div>
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
            {/* Add Our Why we ? part Stard */}
            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Why We?</div>
                <div>
                    <ul className="steps steps-vertical lg:steps-horizontal">
                        <li className="step step-primary">
                            <h1 className="text-3xl font-bold">Best Coffee </h1>
                            <p className="w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, laudantium.</p>
                        </li>
                        <li className="step step-warning">
                            <h1 className="text-3xl font-bold">Fast service </h1>
                            <p className="w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, laudantium.</p>
                        </li>
                        <li className="step step-warning">
                            <h1 className="text-3xl font-bold">Good Menu </h1>
                            <p className="w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, laudantium.</p>
                        </li>
                        <li className="step">
                            <h1 className="text-3xl font-bold"> Just good </h1>
                            <p className="w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, laudantium.</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Add Our Why we ? part End */}
            {/* Add Our Next Event part Stard */}
            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Why We?</div>
                <div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="" src="https://i.ibb.co/3mjCwQf/book.png" alt="Movie" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title text-4xl font-bold">Marry Christmas</h2>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt omnis enim possimus quae odit suscipit tempore qui voluptatum, animi sequi debitis necessitatibus sint eos error amet maxime modi molestias!</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline">GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Our Next Event part End */}
            {/* Add Our Last From Blog part Stard */}
            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Last from blog</div>
                <div className="flex flex-col gap-8">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-96" src="https://i.ibb.co/jZyNwGF/blog-01.png" alt="Movie" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title text-4xl font-bold">Cookies</h2>
                            <div>
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 30 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt omnis enim possimus quae odit suscipit tempore qui voluptatum, animi sequi debitis necessitatibus sint eos error amet maxime modi molestias!</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline">GO</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-96 " src="https://i.ibb.co/cws7gQz/blog-02.jpg" alt="Movie" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title text-4xl font-bold">Broccoli alad</h2>
                            <div>
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 30 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt omnis enim possimus quae odit suscipit tempore qui voluptatum, animi sequi debitis necessitatibus sint eos error amet maxime modi molestias!</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline">GO</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-96" src="https://i.ibb.co/PZjKf7r/blog-03.jpg" alt="Movie" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title text-4xl font-bold">Cookies</h2>
                            <div>
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                        <span className="countdown font-mono text-5xl">
                                            <span style={{ "--value": 30 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt omnis enim possimus quae odit suscipit tempore qui voluptatum, animi sequi debitis necessitatibus sint eos error amet maxime modi molestias!</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline">GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Our Last From Blog part End */}
            {/* Add Our Gallery part stard */}
            <div className="py-10">
                <div className="text-center text-3xl text-neutral-300 font-bold py-10 bg-[url(https://i.ibb.co/Bc6HCMH/section-bg.jpg)]">Gallery</div>
                <div>
                    <div className="carousel rounded-box">
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Our Gallery part End */}
            {/* Add Our Footer part Stard */}
            <div className="py-10">
                <footer className="footer p-10 bg-base-200 text-base-content">
                    <aside>
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>

            </div>
            {/* Add Our Footer part End */}















































        </>
    );
};

export default Home;