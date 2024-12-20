import { FaArrowRight } from "react-icons/fa";
import poster from "../../assets/posterPali.png";

const Palindromposter = () => {
	return (
		<section className='w-full flex flex-col gap-10 md:pt-7  pb-12 md:flex-row justify-between items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  md:items-start poster'>
			<div className='relative  text-[#151811]  dark:text-[#f7fef9] poster_animation '>
				<img
					className='w-screen h-[400px] bg-transparent '
					src={poster}
					alt='palindrom-poster'
					srcSet=''
					loading='lazy'
				/>
				<h1
					className=' max-w-64  md:max-w-[450px] text-[25px]  font-black text-center 
            md:text-start md:text-[35px] absolute top-5'>
					Enjoy using our free palindrom checker.
				</h1>
				<a href='#palindrom-form'>
					<button className='flex items-center justify-center gap-5 main-btn absolute bottom-9'>
						Try now
						<span>
							<FaArrowRight />
						</span>
					</button>
				</a>
			</div>
		</section>
	);
};

export default Palindromposter;
