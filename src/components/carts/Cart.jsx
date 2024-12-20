import { Link } from "react-router-dom";

// pass the svg and the header and the link to the card component to make it reuseble across our Carts 

const Cart = ({ SvgIcon, header  , linkTo}) => {
	return (
		<>
			<Link to={linkTo}>
				<div
					className='group relative cursor-pointer overflow-hidden    px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all
               duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-[#151811] dark:border-[#e3f5ea]
                sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 scroll_animation'>
					<span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-[#85A98F] transition-all duration-300 group-hover:scale-[10]'></span>
					<div className='relative z-10 mx-auto max-w-md'>
						<span className='grid h-20 w-20 place-items-center rounded-full bg-[#85A98F] transition-all duration-300 group-hover:bg-[#b9ecc7]'>
                            {SvgIcon && <SvgIcon className=""/>}
						</span>
						<div className='space-y-6 pt-5 text-base leading-7 text-[#151811] transition-all duration-300 group-hover:text-[#eef8f2] dark:text-[#f7fef9]'>
							<h3 className='font-bold'>{header}</h3>
						</div>
						<div className='pt-5 text-base font-semibold leading-7'>
							<div>
								<div className='text-[#151811] text-xl transition-all duration-300 group-hover:text-white dark:text-[#f7fef9] hover:scale-105'>
									Demo &rarr;
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Cart;
