import Cart from "./Cart";
import HomeSvg from "../../assets/svgs/HomeSvg";



const PagesCarts = ({svgIcon1 , header1 , linkto1 , svgIcon2 , header2 , linkto2}) => {
	return (
		<section id="carts" className='w-full flex flex-col gap-10 pt-20 pb-24  justify-center items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  text-[#151811]  dark:text-[#f7fef9]'>
			<h1 className='text-center font-extrabold text-[26px] md:text-[30px] lg:text-[34px] mb-8 scroll_animation'>
				Want try others algorithmes ✨
			</h1>

			<div className=' grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 '>
				<Cart
					SvgIcon={svgIcon1}
					header={header1}
					linkTo={linkto1}
				/>
				<Cart
					SvgIcon={svgIcon2}
					header={header2}
					linkTo={linkto2}
				/>
				<Cart
					SvgIcon={HomeSvg}
					header=' Dp you want go back to home main page.'
					linkTo='/'
				/>
			</div>
		</section>
	);
};

export default PagesCarts;
