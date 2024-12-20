import { useEffect, useState } from "react";
import phone from "../../assets/phone.avif";
import poster from "../../assets/home.png";

import { FaArrowRight } from "react-icons/fa";

const Poster = () => {
	// : Track window width
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Update window width on resize
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Conditionally render the image based on screen width
	const imageToShow = windowWidth >= 768 ? poster : phone;
	return (
		<section className='w-full flex flex-col gap-10 pt-20 pb-24 md:flex-row justify-between items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  md:items-start '>
			<div className='flex flex-col gap-7 justify-center items-center md:items-start md:max-w-[50%] lg:gap-10 poster_animation'>
				<h1 className='text-[#151811]  max-w-[550px] text-[27px] dark:text-[#f7fef9] font-black text-center md:text-start md:text-[30px] lg:text-[35px]'>
					Discover some of the most exciting coding features and Algorithmes
				</h1>
				<p className='text-center text-[#151811]  max-w-[550px]  dark:text-[#f7fef9] text-[13px] md:text-[15px] lg:text-[19px] opacity-75'>
					Try algorithmes directly using our free demos
				</p>
				{/* redirect to carts section for faster navigation */}
				<a href='#carts'>
					<button className='flex items-center justify-center gap-5 main-btn'>
						Get stared
						<span>
							<FaArrowRight />
						</span>
					</button>
				</a>
			</div>
			<div className=' poster_animation_left'>
				<img
					className=' h-70 w-80 md:h-80 md:w-96 lg:h-[380px] lg:w-[500px] '
					src={imageToShow}
					alt='poster'
				/>
			</div>
		</section>
	);
};

export default Poster;
