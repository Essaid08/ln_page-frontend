import { SiReactos } from "react-icons/si";

const Footer = () => {
	return (
		<footer className='w-full flex flex-col bg-[#9dcaaa]  dark:bg-[#141413] gap-1 pt-16 pb-36 scroll_animation justify-center items-center px-12 md:px-16 lg:px-20 xl:px-32  text-[#020201]  dark:text-[#f7fef9]'>
			<div className='flex flex-col justify-center items-center gap-2 mb-1'>
				<SiReactos size={40} />
				<div className='font-black text-xl md:text-2xl'>LNPAGE</div>
			</div>
			<p className='text-center text-[12px] font-[550] md:text-[14x] lg:text-[16px] mb-6'>
				Redifine your algorithmes innovayion with LNPAGE
			</p>
			<h3 className='font-extrabold text-center text-[18px]  md:text-[20px] lg:text-[22px]'>
				Contact Us
			</h3>
			<p className=' font-medium text-center text-[14px]  md:text-[16px] lg:text-[18px] mb-2'>
				Email : assaidbouhenni3@gmail.com
			</p>
			<p className=' font-medium text-center text-[12px]  md:text-[14px] lg:text-[16px] mb-14'>
				About | policy
			</p>
			<p className=' font-medium text-center text-[12px]  md:text-[14px] lg:text-[16px] mb-2'>
				© 2024 LNPAGE. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
