function Comment() {
	const [comments, setComments] = React.useState([]);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [body, setBody] = React.useState("");
	const [isDisableButton, setIsDisableButton] = React.useState(true);

	React.useEffect(async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
		const data = await res.json();
		setComments(data);
	}, []);

	React.useEffect(() => {
		if (email && name && body) {
			setIsDisableButton(false);
		} else {
			setIsDisableButton(true);
		}
	}, [email, name, body]);

	if (!comments.length) {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<div className="w-11 h-11 rounded-full border-[2px] border-t-transparent animate-spin"></div>
			</div>
		);
	}

	const submitComment = (e) => {
		e.preventDefault();
		setComments((prevComments) => [{ id: Math.random(), name, body, email }, ...prevComments]);
		setName("");
		setEmail("");
		setBody("");
		setIsDisableButton(true);
	};

	return (
		<div>
			<div className="bg-green-300 flex justify-center p-5">
				<form className="bg-white rounded-md shadow-2xl w-[360px] p-5 flex flex-col gap-3">
					<h1 className="font-bold text-3xl text-center mb-4"> Comment System</h1>
					<div>
						<input
							className="border w-full p-3 rounded"
							placeholder="Nhập tên của bạn"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<input
							type="email"
							className="border w-full p-3 rounded"
							placeholder="Nhập email của bạn"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<textarea
							rows={3}
							className="border w-full p-3 rounded"
							placeholder="Nhập bình luận của bạn"
							value={body}
							onChange={(e) => setBody(e.target.value)}
						/>
					</div>

					<button
						className={`${
							isDisableButton ? "opacity-25" : "hover:bg-blue-200 cursor-pointer"
						} bg-blue-300 font-bold p-3 text-md  rounded-lg `}
						onClick={submitComment}
						disabled={isDisableButton}
					>
						ĐĂNG
					</button>
				</form>
			</div>
			<div className="flex flex-col gap-3 p-4 items-center">
				{comments.map((comment) => {
					return (
						<div key={comment.id} className="bg-white shadow-xl rounded-md p-4 flex gap-3 w-[850px]">
							<img
								className="flex items-center justify-center shrink-0 font-bold w-11 h-11 rounded-full"
								src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
								alt="avatar"
							/>

							<div>
								<p className="font-bold">{comment.name}</p>
								<div className="flex gap-2 text-sm text-gray-500 mb-2">
									<p className="">{comment.email}</p>
									<p>1 giờ trước</p>
								</div>
								<p>{comment.body}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comment />);
