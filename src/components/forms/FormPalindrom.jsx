import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const examples = [
	"Borrow or rob?",
	"madam",
	"kayak",
	"Red roses run no risk, sir, on Nurse’s order.",
	"çmà)çàço==m",
];

const instructions = [
	"Please enter a valid word or sentence. Any non-alphabetic and numeric characters will be excluded.",
	"Word length must be between 1 and 100 characters.",
	"Input should not be empty.",
	"All uppercase letters will be converted to lowercase."
]

const FormPalindrom = () => {
	// Track controller input
	const [inputValue, setInputValue] = useState("");

	// Disable buttons dynamically
	const [btnDisabled, setBtnDisabled] = useState(true);

	// Trigger the API call
	const [finalInput, setFinalInput] = useState(null);

	// Returning needed data from custom hook
	const { data, error, loading, history, resultMessage } = useFetchData(
		"api/palindrom",
		finalInput ,
		"palindromInput"
	);
	// Update button disabled state dynamically based on input
	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		// Validate input: disable button if invalid
		if (value.trim().length > 0 && value.trim().length <= 100) {
			setBtnDisabled(false); // Valid input
		} else {
			setBtnDisabled(true); // Invalid input
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Trigger useFetchData with the target value for palindrome check
		setFinalInput(inputValue);
	};

	const clearInputValue = () => {
		setInputValue("");
		setBtnDisabled(true); // Disable submit button after clearing input
	};

	return (
		<section
			id="palindrom-form"
			className="form-section"
		>
			{/* Instructions Section */}
			<div className="">
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
				<form
					className="mt-10 scroll_animation "
					action="/api/palindrom"
					method="post"
					onSubmit={handleSubmit}
				>
					<h3 className="text-[17px] lg:text-[20px] font-bold mb-3">
						Palindrome Checker ⚔️
					</h3>
					<div className="flex flex-col md:flex-row gap-7 md:gap-10 w-full justify-center items-center md:items-start">
						<div className="w-full">
							<input
								type="text"
								value={inputValue}
								onChange={handleInputChange}
								name="palindromInput"
								placeholder="Enter a palindrome"
								className="w-full placeholder:text-black p-[15px] placeholder:opacity-60 border-2 text-[#000000] font-bold border-gray-300 rounded-md focus:outline-none bg-[#f4f8f2] dark:bg-[#eff4f1] focus:ring-2 focus:[#85A98F]"
							/>
							{error.errStaus && (
								<span className="mt-16 text-red-600 text-lg opacity-85 font-semibold">
									{error.errMessage}
								</span>
							)}
						</div>
						<div className="flex gap-5 items-center justify-center">
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
						disabled={inputValue.trim().length === 0}
						onClick={clearInputValue}
						className={`main-btn mt-5 mx-auto ${
							inputValue.trim().length === 0 ? "opacity-50 cursor-not-allowed" : ""
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
									{"⏺️ "}
									{elem.item}
									{" 👉 "}
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

export default FormPalindrom;

