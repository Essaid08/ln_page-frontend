import Facts from "../components/Facts";
import Footer from "../components/Footer";
import PerfectNumberForm from "../components/forms/PerfectNumberForm";
import Header from "../components/Header";
import PagesPoster from "../components/posters/PagesPoster";
import { perfectNumberFacts } from "../factsData";
import HomeCarts from "../components/carts/HomeCarts";
import poster from "../assets/numbers.png"


const PerfectNumber = () => {
	return (
		<div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
			<header className='w-full flex items-center justify-center '>
				<Header />
			</header>
			<main className='w-full flex flex-col items-center justify-center '>

				<PagesPoster
				  header="Enjoy using our free perfect number  checker."
				  fromLink="#perfect_numbers_form"
				  paragraph="Feel free to scroll down to the form and give it a try. "
				  image={poster}
				  imageName="perfect_numbers_form"
				/>

				<Facts {...perfectNumberFacts} />
				<PerfectNumberForm />
				<HomeCarts/>
			</main>
			<div className='w-full flex flex-col items-center justify-center '>
				<Footer />
			</div>
		</div>
	);
};

export default PerfectNumber;
