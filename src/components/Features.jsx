const Features = () => {
	return (
		<section className='w-full flex flex-col gap-10 pt-10 pb-24  justify-center items-center max-w-[1580px] px-12 md:px-16 lg:px-20 xl:px-32  '>
			<div className='text-[#151811]  dark:text-[#f7fef9] scroll_animation'>
				<h1 className='text-center font-extrabold text-[26px] md:text-[30px] lg:text-[34px]'>
					What's inside 👀
				</h1>
				<p className='text-center text-[13px] md:text-[15px] lg:text-[19px] max-w-[888px] opacity-75'>
					Discover several coding algotithmes with fun testing forms like palindroms and perfect numbers , 
					fibonacci detective hit up now. More exciting challenges coming soon!
				</p>
			</div>
			<div className=' grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3  '>
				<div className='flex flex-col justify-center  items-center gap-3 text-[#151811]  dark:text-[#f7fef9] scroll_animation'>
					<div className='text-4xl md:text-5xl lg:text-6xl'>⚔️</div>
					<div className='flex flex-col justify-center items-center gap-1'>
						<h3 className='text-[18px] lg:text-[22px] font-bold'>Palindrome</h3>
						<p className='text-center text-[14px] lg:text-[16px] max-w-96 opacity-75'>
							A palindrome is a word, sentence, verse, or even number that reads
							the same backward or forward.
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center gap-3 text-[#151811]  dark:text-[#f7fef9] scroll_animation'>
					<div className='text-3xl md:text-4xl lg:text-5xl'>👌</div>
					<div className='flex flex-col justify-center items-center gap-1'>
						<h3 className='text-[18px] lg:text-[22px] font-bold'>Perfect number</h3>
						<p className='text-center text-[14px] lg:text-[16px] max-w-96 opacity-75'>
							Perfect numberis is a positive integer that is equal to the sum of
							its proper divisors.
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center gap-3 text-[#151811]  dark:text-[#f7fef9] scroll_animation'>
					<div className='text-3xl md:text-4xl lg:text-5xl'>🕵️</div>
					<div className='flex flex-col justify-center items-center gap-1'>
						<h3 className='text-[18px] lg:text-[22px] font-bold'>Fibonacci detective</h3>
						<p className='text-center text-[14px] lg:text-[16px] max-w-96 opacity-75'>
							A number belonge to the fibonacci sequence if its equale 
							the sum of the two preceding ones.
						</p>
					</div>
				</div>
				
			</div>
		</section>
	);
};

export default Features;
