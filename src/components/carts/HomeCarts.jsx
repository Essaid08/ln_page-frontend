import Cart from "./Cart";
import { useLocation } from "react-router-dom";
import { cartsIfos } from "../../factsData";


const HomeCarts = () => {

	// filter carts based on the cuurent route we currently in 
	// thats to eliminate the current page cart

    const currentRoute = useLocation() // get current route from react-router

	const currentPageCarts = cartsIfos.filter(route => route.linkto !== currentRoute.pathname)

	return (
		<section id="carts" className='w-full flex flex-col gap-10  pb-24  justify-center items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  text-[#151811]  dark:text-[#f7fef9]'>
			<h1 className='text-center font-extrabold text-[26px] md:text-[30px] lg:text-[34px] mb-8 scroll_animation'>
				Want try some 🤷‍♂️
			</h1>

			<div className=' grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 '>
				{
					currentPageCarts.map((route) => (
						<Cart
						key={route.linkto}
						SvgIcon={route.svgIcon}
						header={route.header}
						linkTo={route.linkto}
						/>
					))
				}

			</div>
		</section>
	);
};

export default HomeCarts;
