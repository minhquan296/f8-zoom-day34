function Counter() {
	const [counter, setCounter] = React.useState(0);

	const upCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const downCounter = () => {
		setCounter((prevCounter) => prevCounter - 1);
	};

	const ResetCounter = () => {
		setCounter(0);
	};

	return (
		<div class="flex justify-center items-center h-[100vh]">
			<div class="bg-white shadow-2xl p-10 border-[2px] rounded border-gray-300">
				<div class="flex flex-col items-center ">
					<p
						class={`${
							counter > 0 ? "bg-green-400" : counter < 0 ? "bg-red-300" : "bg-gray-400"
						} w-[150px] h-[150px] flex items-center justify-center rounded text-6xl`}
					>
						{counter}
					</p>
					<div class="mt-5 flex gap-3 mb-4">
						<button class="bg-gray-300 px-4 py-1 rounded" onClick={upCounter}>
							+
						</button>
						<button class="bg-gray-300 px-4 py-1 rounded" onClick={downCounter}>
							-
						</button>
						<button class="bg-gray-300 px-4 py-1 rounded" onClick={ResetCounter}>
							Reset
						</button>
					</div>

					<div class="text-sm font-bold">
						{counter > 0 ? <p>Số Dương</p> : counter < 0 ? <p>Âm</p> : <p>Bằng 0</p>}
					</div>
				</div>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
