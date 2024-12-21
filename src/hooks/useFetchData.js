import axios from "axios";
import { useEffect, useState } from "react";

const URL = import.meta.env.API_URL;

const useFetchData = (currentUrl, finalInput , bodyKey) => {

	const [resultMessage, setResultMessage] = useState("");

	// varible for saving data response
	const [data, setData] = useState(null);


	// tracking the loading state
	const [loading, setLoading] = useState(false);

	// object for proper error handling
	const [error, setError] = useState({
		errStaus: false,
		errMessage: "",
	});

	//array for saving checks history
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const fetchedData = async () => {
			// skip fetching if no input provided
			if (!finalInput) return;
			setLoading(true);
			// remove err from the from ui when we hit submit
			setError({ errStaus: false, errMessage: "" });

			try {
				const response = await axios.post(`${URL}/${currentUrl}`, {
					[bodyKey]: finalInput,
				});
				setData(response.data);

				// push another item to the start history array when response.ok
				setHistory((prev) => [
					{
						item: response.data.checkedValue,
						result: response.data.message,
					},
					...prev,
				]);

				// update the result message from server
				setResultMessage(response.data.message);
				// Set a timeout to clear the resultMessage 3000ms without causing rerender
				const timer = setTimeout(() => setResultMessage(""), 3000);

				// Cleanup the timer when effect is re-run or unmounted
				return () => clearTimeout(timer);
			} catch (err) {
				setError({
					errStaus: true,
					errMessage:
						err.response?.data?.message ||
						err.message ||
						"Something went wrong",
				});
			} finally {
				setLoading(false);
			}
		};
		fetchedData();
	}, [finalInput]);

	return { data, error, loading, history, resultMessage };
};

export default useFetchData;
