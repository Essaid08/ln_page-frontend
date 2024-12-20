import HomeCarts from "../components/carts/HomeCarts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Poster from "../components/posters/Poster";

const Home = () => {
	return (
		<div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421]  '>
			<header className='w-full flex items-center justify-center '>
				<Header />
			</header>
			<main className='w-full flex flex-col items-center justify-center '>
				<Poster />
				<Features/>
				<HomeCarts/>
			</main>
			<div className='w-full h  flex flex-col items-center justify-center '>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
