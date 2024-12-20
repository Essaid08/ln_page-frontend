import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

// the regular expression that will handle the array syntax validation
const regex = /^\s*\[\s*(?:0|[1-9]\d*)(?:\s*,\s*(?:0|[1-9]\d*))*\s*\]\s*$/;

const syntaxHelpers = ["[", ",", "]"];

const examples = [
	"[1 , 2 , 3 , 4 , 5 , 6]",
	"[1 , 5 , 8 , 90 , 145 , 25545 ]",
	"[8]",
	"[100 , 145 , 4654 , 0 , 454 , 98]",
];

const instructions = [
	"Please begin your Array with '[' and end it with ']' .",
	"Do not start numbers with 0 for example 01 or 02 will rejected ",
	`The numbers must be between 0 and ${Number.MAX_SAFE_INTEGER}`,
	"Decimal numbers and negative values are not allowed.",
	"Your Array must always satisfy the array syntax validation .",
	"Values must separated by commas ',' .",
];

const FibonacciForm = () => {
	// Track controller input
	const [inputValue, setInputValue] = useState("");

	const [err, setErr] = useState({});

	// track the last input that trigger the api call
	const [prevInput, setPrevInput] = useState(null);

	// Disable buttons dynamically
	const [btnDisabled, setBtnDisabled] = useState(true);

	// Trigger the API call
	const [finalInput, setFinalInput] = useState(null);

	// Returning needed data from custom hook
	const { data, error, loading, history, resultMessage } = useFetchData(
		"api/fibonacci",
		finalInput,
		"fibonacciInput"
	);

	// Sync error state with server errors
	useEffect(() => {
		if (error.errStaus) {
			setErr(error);
		}
	}, [error]);

	// Update button disabled state dynamically based on input
	const handleInputChange = (e) => {
		setInputValue(e.target.value);

		if (!e.target.value) {
			setBtnDisabled(true);
			setErr({});
			return;
		}

		if (regex.test(e.target.value)) {
			setBtnDisabled(false);
			setErr({});
		} else {
			setBtnDisabled(true);
			setErr({
				errStaus: true,
				errMessage: "Please enter a valid array syntax.",
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Clean the input by removing extra spaces and normalizing format
		const cleanedInput = inputValue
			.trim()
			.replace(/\s+/g, " ")
			.replace(/\s*,\s*/g, ",");

		if (!regex.test(cleanedInput)) {
			setErr({
				errStaus: true,
				errMessage:
					"Invalid input. Please use format like [1,2,3] or [1, 2, 3]",
			});
			return;
		}

		if (JSON.stringify(cleanedInput) === JSON.stringify(prevInput)) {
			setErr({
				errStaus: true,
				errMessage:
					"Please chose an array that is different from the previous one.",
			})
			return; // Don't make the API call if input hasnt changed
		}

		// If validation passes, send the cleaned  parsed input and trigger the api call
		setFinalInput(JSON.parse(cleanedInput));
		setPrevInput(cleanedInput);
	};


	const clearInputValue = () => {
		setInputValue("");
		setBtnDisabled(true);
		setFinalInput(null);
		setPrevInput(null);
		setErr({});
	};


	const helperHandler = (helper) => {
        // Add the helpers to the current input value 
		const newValue = inputValue + helper;

		// check if the new value is a valid syntax
		setInputValue(newValue);
		if (regex.test(newValue)) {
			setBtnDisabled(false);
			setErr({});
		} else {
			setBtnDisabled(true);
			setErr({
				errStaus: true,
				errMessage: "Please enter a valid array syntax.",
			});
		}
	};

	return (
		<section
			id='fibonacci_form'
			className='form-section'>
			{/* Instructions Section */}
			<div className='w-full'>
				<h3 className='text-[17px] lg:text-[20px] font-bold scroll_animation'>
					Instructions:
				</h3>
				<div className='flex flex-col scroll_animation'>
					{instructions.map((item) => (
						<p
							className='instruction-p '
							key={item}>
							▶ {item}
						</p>
					))}
				</div>

				<h3 className='text-[17px] lg:text-[20px] font-bold my-5 scroll_animation'>
					Examples you could try:
				</h3>

				{/* Example Words */}
				<div className='flex gap-3 flex-wrap scroll_animation'>
					{examples.map((exmp) => (
						<span
							onClick={() => {
								setInputValue(exmp);
								setErr({}); // Clear any previous errors
								setBtnDisabled(false); // Enable submit button
							}}
							key={exmp}
							className='exmp-btn'>
							{exmp}
						</span>
					))}
				</div>

				{/*Syntax helpers */}
				<h3 className='text-[17px] lg:text-[20px] font-bold mb-5 mt-16 scroll_animation'>
					Insert directly by clicking :
				</h3>
				<div className='flex gap-3 flex-wrap scroll_animation'>
					{syntaxHelpers.map((exmp) => (
						<span
							className='exmp-btn'
							key={exmp}
							onClick={() => helperHandler(exmp)}>
							{exmp}
						</span>
					))}
				</div>

				{/* Form Section */}
				<h3 className='text-[17px] lg:text-[20px] font-bold mt-16'>
					Fibonacci Detective 🕵️
				</h3>

				<form
					className='mt-6 scroll_animation w-full '
					action='/api/fibonacci'
					method='post'
					onSubmit={handleSubmit}>
					<div className='flex flex-col md:flex-row gap-7 md:gap-10 w-full justify-start items-center md:items-start'>
						<div className='w-full md:w-[70%]'>
							<input
								type='text'
								value={inputValue}
								onChange={handleInputChange}
								name='fibonacciInput'
								placeholder='Enter Your Array...'
								className='w-full mb-4 placeholder:text-black p-[15px] placeholder:opacity-60 border-2 text-[#000000] font-bold border-gray-300 rounded-md focus:outline-none bg-[#e8ebe7] dark:bg-[#e3f5ea] focus:ring-2 focus:[#85A98F]'
							/>
							{err.errStaus && (
								<span className=' text-red-700 dark:text-red-400 text-[15px] lg:text-lg  font-semibold'>
									{err.errMessage}
								</span>
							)}
						</div>
						<div className=''>
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
				<div className=' flex md:items-start md:justify-start scroll_animation'>
					<button
						disabled={btnDisabled}
						onClick={clearInputValue}
						className={`main-btn mt-5 mx-auto ${
							!inputValue ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						Clear
					</button>
				</div>

				{resultMessage && (
					<div className='result scroll_animation'>{resultMessage}</div>
				)}

				{/* History Section */}
				<h3 className='text-[17px] lg:text-[20px] font-bold mt-20 mb-3 scroll_animation'>
					Historiques:
				</h3>
				<div className='scroll_animation'>
					{history.length > 0 ? (
						<ul>
							{history.map((elem, index) => (
								<li
									key={index}
									className='history-p pb-6'>
									{elem.result}
								</li>
							))}
						</ul>
					) : (
						<p className='history-p '>The history is empty...</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default FibonacciForm;
