import Cart from "./Cart";
import PalandromSvg from "../../assets/svgs/PalindromSvg";
import PerfectNumberSvg from "../../assets/svgs/PerfectNumberSvg";
import FibonacciSvg from "../../assets/svgs/FibonnciiSvg";



const HomeCarts = () => {
	return (
		<section id="carts" className='w-full flex flex-col gap-10  pb-24  justify-center items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  text-[#151811]  dark:text-[#f7fef9]'>
			<h1 className='text-center font-extrabold text-[26px] md:text-[30px] lg:text-[34px] mb-8 scroll_animation'>
				Want try some 🤷‍♂️
			</h1>

			<div className=' grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 '>
				<Cart
					SvgIcon={PalandromSvg}
					header='Palindrom Algorithme for strings.'
					linkTo='/palindrom'
				/>
				<Cart
					SvgIcon={PerfectNumberSvg}
					header='Test perfect number now  effectivelly.'
					linkTo='/perfect_number'
				/>
				<Cart
					SvgIcon={FibonacciSvg}
					header='Fibonacci finder (just for developers).'
					linkTo='/fibonacci'
				/>
			</div>
		</section>
	);
};

export default HomeCarts;
