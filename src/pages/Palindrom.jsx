import Facts from "../components/Facts";
import Footer from "../components/Footer";
import FormPalindrom from "../components/forms/FormPalindrom";
import Header from "../components/Header";
import { palindromeFacts } from "../factsData"; 
import HomeCarts from "../components/carts/HomeCarts";
import PagesPoster from "../components/posters/PagesPoster";
import poster from "../assets/posterPali.png"



const Palindrom = () => {
	return (
		<div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
			<header className='w-full flex items-center justify-center '>
				<Header />
			</header>
			<main className='w-full flex flex-col items-center justify-center '>

				<PagesPoster
				  fromLink="#palindrom-form"
				  header="Enjoy using our free palindrom checker."
				  paragraph="Feel free to scroll down to the form and give it a try "
				  image={poster}
				  imageName='palindrom_poster'
				/>
				
				<Facts {...palindromeFacts}/>
				<FormPalindrom/>
				<HomeCarts/>
			</main>
			<div className='w-full flex flex-col items-center justify-center '>
				<Footer />
			</div>
		</div>
	);
};

export default Palindrom;
