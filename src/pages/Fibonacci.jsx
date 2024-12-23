import Facts from "../components/Facts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {fibonacciFacts} from "../factsData"
import FibonacciForm from "../components/forms/FibonacciForm"
import HomeCarts from "../components/carts/HomeCarts"
import PagesPoster from "../components/posters/PagesPoster"
import poster from "../assets/nums.png"


const Fibonacci = () => {
  return (
    <div className='bg-[#D3F1DF] min-h-screen  w-screen dark:bg-[#242421] '>
    <header className='w-full flex items-center justify-center '>
        <Header />
    </header>
    <main className='w-full flex flex-col items-center justify-center '>

        <PagesPoster
          fromLink="#fibonacci_form"
          header="Enjoy searching for your fibonacci heros."
          paragraph="Feel free to scroll down to the form and give it a try "
          image={poster}
          imageName="fibonacci_poster"
        />
        
        <Facts {...fibonacciFacts}/>
        <FibonacciForm/>
        <HomeCarts/>
    </main>
    <div className='w-full flex flex-col items-center justify-center '>
        <Footer />
    </div>
</div>
  )
}

export default Fibonacci