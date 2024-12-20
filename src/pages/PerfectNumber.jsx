import PalandromSvg from "../assets/svgs/PalindromSvg";
import FibonacciSvg from "../assets/svgs/FibonnciiSvg";
import PagesCarts from "../components/carts/PagesCarts";
import Facts from "../components/Facts";
import Footer from "../components/Footer";
import PerfectNumberForm from "../components/forms/PerfectNumberForm";
import Header from "../components/Header";
import PerfectNumberPoster from "../components/posters/PerfectNumberPoster";
import { perfectNumberFacts } from "../factsData";


const cartsProps = {
	svgIcon1 : PalandromSvg,
	header1 :'Palindrom Algorithme for strings.' ,
	linkto1 : '/palindrom',
	svgIcon2 :FibonacciSvg ,
	header2 : 'Fibonacci finder (just for developers).',
	linkto2 : '/fibonacci',

}

const PerfectNumber = () => {
	return (
		<div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
			<header className='w-full flex items-center justify-center '>
				<Header />
			</header>
			<main className='w-full flex flex-col items-center justify-center '>
				<PerfectNumberPoster />
				<Facts {...perfectNumberFacts} />
				<PerfectNumberForm />
				<PagesCarts {...cartsProps}/>
			</main>
			<div className='w-full flex flex-col items-center justify-center '>
				<Footer />
			</div>
		</div>
	);
};

export default PerfectNumber;
