import { FaArrowRight } from "react-icons/fa";
import poster from "../../assets/numbers.png";

const PerfectNumberPoster = () => {
	return (
		<section className='w-full flex flex-col gap-10 pt-12 pb-24 md:flex-row justify-between items-center max-w-[1580px] px-5 md:px-16 lg:px-20 xl:px-32  md:items-start '>
			<div className='flex flex-col gap-7 justify-center items-center md:items-start md:max-w-[45%] lg:gap-10 poster_animation'>
				<h1 className='text-[#151811]  max-w-[620px] text-[27px] dark:text-[#f7fef9] font-black text-center md:text-start md:text-[31px] lg:text-[35px]'>
                    Enjoy using our free perfect number  checker.
				</h1>
				<p className='text-center text-[#151811]  max-w-[450px]  dark:text-[#f7fef9] text-[13px] md:text-[15px] lg:text-[17px] opacity-75'>
					Feel free to scroll down to the form and give it a try 
				</p>
				{/* redirect to carts section for faster navigation */}
				<a href='#perfect_numbers_form'>
					<button className='flex items-center justify-center gap-5 main-btn'>
						Try now
						<span>
							<FaArrowRight />
						</span>
					</button>
				</a>
			</div>
			<div className=' poster_animation_left w-full'>
				<img
					className=' bg-transparent w-full  lg:h-96 '
					src={poster}
					alt='poster'
				/>
			</div>
		</section>
	);
};

export default PerfectNumberPoster;
