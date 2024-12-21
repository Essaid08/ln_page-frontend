
// pass data as props for the components to make reuseble and use facts for each algorithme

const Facts = ({header1 , firstPara , header2 , secondePara}) => {
	return (
		<article className='w-full flex flex-col gap-2 text-[#151811]   dark:text-[#f7fef9] pb-12  justify-between items-center max-w-[1580px] px-7 md:px-16 lg:px-20 xl:px-32  md:items-start '>
			<h1 className='text-center font-extrabold text-[20px] md:text-[22px] lg:text-[26px] scroll_animation'>
				{header1}
			</h1>
			<p className='text-center text-[15px] lg:text-[18px] opacity-75 ml-3 mb-10 scroll_animation'>
				{firstPara}
			</p>
			<h3 className='text-[17px] text-center lg:text-[20px] font-bold scroll_animation'>
                {header2}
            </h3>
			<p className='text-center text-[15px] lg:text-[18px] opacity-75 ml-3 scroll_animation'>
				{secondePara}
			</p>
		</article>
	);
};

export default Facts;
