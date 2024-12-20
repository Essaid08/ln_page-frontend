import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const examples = [
	28,
	6,
];

const instructions = [
	"Please enter a valid integer to check if it is a perfect number.",
	"The number must be between 1 and 9007199254740991 .",
	"Input should not be empty.",
	"Decimal numbers and negative values are not allowed."
];

const PerfectNumberForm = () => {
	// Track controller input
	const [inputValue, setInputValue] = useState(0);

    const [err , setErr] = useState({})

	// Disable buttons dynamically
	const [btnDisabled, setBtnDisabled] = useState(true);

	// Trigger the API call
	const [finalInput, setFinalInput] = useState(null);

	// Returning needed data from custom hook
	const { data, error, loading, history, resultMessage } = useFetchData(
		"api/perfect_number",
		finalInput,
        "perfectNumber"
	);

	// Sync error states with server errors
	useEffect(() => {
		if (error.errStaus) {
			setErr(error);
		}
	}, [error]);

    // define a function that ckeck our input if a valid number in our case
    const isValidNumber = (value) =>
        Number.isInteger(value) && value > 0 && value <= Number.MAX_SAFE_INTEGER;

	// Update button disabled state dynamically based on input
	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

        // convert to number to esure that the isValidNumber fct return the proper value
        if(!isValidNumber(Number(value))) {
            setErr ({errStaus  : true , errMessage : "Invalid input. Please enter a valid number."})
            setBtnDisabled(true)
        }else{
                setErr({ errStatus: false, errMessage: "" });
                setBtnDisabled(false);
           
        }
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        const numericValue = Number(inputValue);
    
        if (!isValidNumber(numericValue)) {
            setErr({ errStatus: true, errMessage: "Please enter a valid number before submitting." });
            return;
        }
    
        // Trigger useFetchData with the target value
        setFinalInput(numericValue);
    };

	const clearInputValue = () => {
		setInputValue(0);
		setBtnDisabled(true); // Disable submit button after clearing input
        setFinalInput(null)
	};

	return (
		<section
			id="perfect_numbers_form"
			className="form-section"
		>
			{/* Instructions Section */}
			<div className="w-full">
				<h3 className="text-[17px] lg:text-[20px] font-bold scroll_animation">
					Instructions:
				</h3>
				<div className="flex flex-col scroll_animation">
					{
						instructions.map(item  => (
							<p className="instruction-p " key={item}>▶ {item}</p>
						))
					}
				</div>

				<h3 className="text-[17px] lg:text-[20px] font-bold my-5 scroll_animation">
					Examples you could try:
				</h3>

				{/* Example Words */}
				<div className="flex gap-3 flex-wrap scroll_animation">
					{examples.map((exmp) => (
						<span
							onClick={() => {
								setInputValue(exmp);
								setBtnDisabled(false); // Enable buttons for example inputs
							}}
							key={exmp}
							className="exmp-btn"
						>
							{exmp}
						</span>
					))}
				</div>

				{/* Form Section */}
                <h3 className="text-[17px] lg:text-[20px] font-bold mt-16">
						Perfect Number Checker 👌
				</h3>

                <form
					className="mt-6 scroll_animation w-full "
					action="/api/perfect_number"
					method="post"
					onSubmit={handleSubmit}
				>
					
					<div className="flex flex-col md:flex-row gap-7 md:gap-10 w-full justify-start items-center md:items-start">
						<div className="w-full md:w-[70%]">
							<input
								type="number"
								value={inputValue}
								onChange={handleInputChange}
								name="palindromInput"
                                min="1"
                                step="1"
								placeholder="Enter a perfect number."
								className="w-full placeholder:text-black p-[15px] placeholder:opacity-60 border-2 text-[#000000] font-bold border-gray-300 rounded-md focus:outline-none bg-[#e8ebe7] dark:bg-[#e3f5ea] focus:ring-2 focus:[#85A98F]"
							/>
							{err.errStaus && (
								<span className="mt-16 text-red-600 text-xs lg:text-lg opacity-85 font-semibold">
									{err.errMessage}
								</span>
							)}
						</div>
						<div className="">
						<button
								disabled={btnDisabled || loading}
								type='submit'
								className={`main-btn ${
									btnDisabled || loading ? "opacity-50 cursor-not-allowed" : ""
								}`}>
								{loading ? "Processing..." : "Submit"}
							</button>
						</div>
					</div>
				</form>
				<div className=" flex md:items-start md:justify-start scroll_animation">
					<button
						disabled={inputValue <= 0 || inputValue >= Number.MAX_SAFE_INTEGER}
						onClick={clearInputValue}
						className={`main-btn mt-5 mx-auto ${
							inputValue <= 0 || inputValue >= Number.MAX_SAFE_INTEGER ? "opacity-50 cursor-not-allowed" : ""
						}`}
					>
						Clear
					</button>
				</div>
              
	
				{resultMessage && (
					<div className="result scroll_animation">{resultMessage}</div>
				)}

				{/* History Section */}
				<h3 className="text-[17px] lg:text-[20px] font-bold mt-20 mb-3 scroll_animation">
					Historiques:
				</h3>
				<div className="scroll_animation">
					{history.length > 0 ? (
						<ul>
							{history.map((elem, index) => (
								<li
									key={index}
									className='history-p pb-6'
								>
									{"⏺️  "}
									{elem.item}
									{" 👉  "}
									{elem.result}
								</li>
							))}
						</ul>
					) : (
						<p className="history-p ">The history is empty...</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default PerfectNumberForm;

