import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SiReactos } from "react-icons/si";
import { TiThMenuOutline } from "react-icons/ti";
import { BsFillMenuAppFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// Load the initial theme state from local storage
		const savedTheme = localStorage.getItem("darkmode");
		if (savedTheme === "true") {
			setDarkMode(true);
			document.body.classList.add("dark");
		} else {
			// remove darkMode if the last user state is false
			setDarkMode(false);
			document.body.classList.remove("dark");
		}
	}, []);

	// Handle the dark mode toggle
	const darkmodeHandler = () => {
		setDarkMode((prev) => !prev);
		if (!darkMode) {
			// add the user state preference
			document.body.classList.add("dark");
			localStorage.setItem("darkmode", "true");
		} else {
			document.body.classList.remove("dark");
			localStorage.setItem("darkmode", "false");
		}
	};

	// Handle mobile menu toggle
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<nav className='relative w-full max-w-[1580px] text-[#151811] dark:text-[#f7fef9] flex items-center justify-between py-5  px-12 md:px-16 lg:px-20 xl:px-32'>
			<Link to='/'>
				<div className='flex justify- items-center gap-2 head_animation'>
					<SiReactos size={35} />
					<div className='font-black text-xl hidden md:block md:text-2xl'>LNPAGE</div>
				</div>
			</Link>

			<ul className='hidden justify-center items-center gap-8 head_animation ml-auto mr-14 lg:flex'>
				<Link
					className='mt-2 group relative w-max'
					to='/palindrom'>
					<li className='nav_li'>Palindrom</li>
					<span className='nav_span'></span>
				</Link>
				<Link
					className='mt-2 group relative w-max'
					to='/perfect_number'>
					<li className='nav_li'>Perfect</li>
					<span className='nav_span'></span>
				</Link>
				<Link
					className='mt-2 group relative w-max'
					to='/fibonacci'>
					<li className='nav_li'>Fibonacci</li>
					<span className='nav_span'></span>
				</Link>
			</ul>

			<button
				onClick={darkmodeHandler}
				className='head_animation flex justify-center items-center gap-2 head_animation lg:border-l-2 pl-5 border-l-[#151811] dark:border-l-[#f7fef9] ml-auto lg:ml-0'>
				{darkMode ? <MdDarkMode size={22} /> : <MdLightMode size={22} />}
				<span className='font-bold text-lg md:text-xl lg:text-2xl'>
					{darkMode ? "Dark" : "Light"}
				</span>
			</button>

			{/* Mobile menu button */}
			<button
				onClick={toggleMenu}
				className='ml-6 lg:hidden head_animation'>
				{!isMenuOpen ? (
					<TiThMenuOutline size={32} />
				) : (
					<BsFillMenuAppFill size={32} />
				)}
			</button>

			{/* Mobile nav bar */}
			{isMenuOpen && (
				<div className='absolute rounded-2xl py-10 z-10 top-20 right-12 w-[78%] md:w-[50%] bg-[#addfba] dark:bg-[#cefedb] text-[#000000]
				   flex flex-col items-center gap-8 p-4 lg:hidden'>
					<Link
						className='group relative w-max'
						to='/'
						onClick={() => setIsMenuOpen(false)}>
						<li className='nav_li_mobile'>Home Page 🏠</li>
						<span className='nav_span_mobile'></span>
					</Link>
					<Link
						className='group relative w-max'
						to='/palindrom'
						onClick={() => setIsMenuOpen(false)}>
						<li className='nav_li_mobile'>Palindrom Word ⚔️</li>
						<span className='nav_span_mobile'></span>
					</Link>
					<Link
						className='group relative w-max'
						to='/perfect_number'
						onClick={() => setIsMenuOpen(false)}>
						<li className='nav_li_mobile'>Perfect Number 👌</li>
						<span className='nav_span_mobile'></span>
					</Link>
					<Link
						className='group relative w-max'
						to='/fibonacci'
						onClick={() => setIsMenuOpen(false)}>
						<li className='nav_li_mobile'>Fibonacci Detective 🕵️</li>
						<span className='nav_span_mobile'></span>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Header;
