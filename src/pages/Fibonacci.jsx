import PagesCarts from "../components/carts/PagesCarts"
import Facts from "../components/Facts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FibonacciPoster from "../components/posters/FibonacciPoster"
import PerfectNumberSvg from "../assets/svgs/PalindromSvg"
import PalandromSvg from "../assets/svgs/PalindromSvg"
import {fibonacciFacts} from "../factsData"
import FibonacciForm from "../components/forms/FibonacciForm"




const cartsProps = {
	svgIcon1 : PalandromSvg,
	header1 :'Palindrom Algorithme for strings.' ,
	linkto1 : '/palindrom',
	svgIcon2 :PerfectNumberSvg ,
	header2 : 'Test perfect number now  effectivelly.',
	linkto2 : '/perfect_number',

}

const Fibonacci = () => {
  return (
    <div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
    <header className='w-full flex items-center justify-center '>
        <Header />
    </header>
    <main className='w-full flex flex-col items-center justify-center '>
        <FibonacciPoster />
        <Facts {...fibonacciFacts}/>
        <FibonacciForm/>
        <PagesCarts {...cartsProps} />
    </main>
    <div className='w-full flex flex-col items-center justify-center '>
        <Footer />
    </div>
</div>
  )
}

export default Fibonacci