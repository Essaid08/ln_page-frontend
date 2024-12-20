import Facts from "../components/Facts";
import Footer from "../components/Footer";
import FormPalindrom from "../components/forms/FormPalindrom";
import Header from "../components/Header";
import Palindromposter from "../components/posters/Palindromposter";
import { palindromeFacts } from "../factsData"; 
import PagesCarts from "../components/carts/PagesCarts"
import PerfectNumberSvg from "../assets/svgs/PalindromSvg"
import FibonacciSvg from "../assets/svgs/FibonnciiSvg";

// pass the data needed four our Facts to keep this component  reuseble

const cartsProps = {
	svgIcon1 : PerfectNumberSvg,
	header1 :'Test perfect number now  effectivelly.' ,
	linkto1 : '/perfect_number',
	svgIcon2 :FibonacciSvg ,
	header2 : 'Fibonacci finder (just for developers).',
	linkto2 : '/fibonacci',

}


const Palindrom = () => {
	return (
		<div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
			<header className='w-full flex items-center justify-center '>
				<Header />
			</header>
			<main className='w-full flex flex-col items-center justify-center '>
				<Palindromposter />
				<Facts {...palindromeFacts}/>
				<FormPalindrom/>
				<PagesCarts {...cartsProps} />
			</main>
			<div className='w-full flex flex-col items-center justify-center '>
				<Footer />
			</div>
		</div>
	);
};

export default Palindrom;
