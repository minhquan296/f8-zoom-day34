function Comment() {
	const [city, setCity] = React.useState("Hà Nội");
	const [weatherData, setWeatherData] = React.useState([
		{ city: "Hà Nội", temp: 28, status: "Nắng", humidity: 65, icon: "☀️" },
		{ city: "TP.HCM", temp: 32, status: "Có mây", humidity: 78, icon: "☁️" },
		{ city: "Đà Nẵng", temp: 30, status: "Mưa nhẹ", humidity: 82, icon: "🌦️" },
	]);

	const handleResetTemp = () => {
		setWeatherData((prevData) => {
			return prevData.map((preWeather) => {
				if (preWeather.city === city) {
					const randomValue = Math.floor(Math.random() * 11) - 5;
					return {
						...preWeather,
						humidity: preWeather.humidity + randomValue,
						temp: preWeather.temp + randomValue,
					};
				}
				return preWeather;
			});
		});
	};

	return (
		<div className="flex justify-center bg-green-200 h-[100vh] items-center">
			<div className="bg-white shadow-md rounded-md border-[2px] border-gray-300 w-[400px] p-4 ">
				<p className="text-4xl font-bold text-center">Thời tiết</p>
				<select className="w-full border p-2 rounded mt-5" onChange={(e) => setCity(e.target.value)}>
					{weatherData.map((weather) => {
						return (
							<option key={weather.city} value={weather.city}>
								{weather.city}
							</option>
						);
					})}
				</select>
				{weatherData
					.filter((weather) => city === weather.city)
					.map((weather) => {
						return (
							<div
								key={weather.city}
								className="mt-6 flex flex-col items-center bg-gray-200 px-5 py-2 rounded"
							>
								<p className="text-6xl">{weather.icon}</p>
								<div className="mt-7 flex flex-col gap-3 text-center ">
									<p className="text-3xl font-bold">{weather.city}</p>
									<p>
										<span className="font-bold text-md text-gray-600">Nhiệt độ:</span>{" "}
										{weather.temp}°C
									</p>
									<p>
										<span className="font-bold text-md text-gray-600">Tình Trạng:</span>{" "}
										{weather.status}
									</p>
									<p>
										<span className="font-bold text-md text-gray-600">Độ ẩm:</span>{" "}
										{weather.humidity}%
									</p>
								</div>
								<button
									className="bg-green-300 py-1 w-full rounded font-bold mt-3"
									onClick={() => handleResetTemp(weather)}
								>
									Reset
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comment />);
