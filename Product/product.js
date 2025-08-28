function ProductList() {
	const [productList, setProductList] = React.useState([]);
	const [isOpenModal, setIsOpenModal] = React.useState(false);
	const [productItem, setProductItem] = React.useState({});

	React.useEffect(async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
		const data = await res.json();
		setProductList(data);
	}, []);

	if (!productList.length) {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<div className="w-11 h-11 rounded-full border-[2px] border-t-transparent animate-spin"></div>
			</div>
		);
	}

	const handleClickIsOpenModal = (prodItem) => {
		setIsOpenModal(!isOpenModal);
		setProductItem(prodItem);
	};

	const Modal = ({ productItem }) => {
		return (
			<div
				className="fixed inset-0 bg-black/25 flex items-center justify-center"
				onClick={() => handleClickIsOpenModal()}
			>
				<div
					className="bg-white w-[400px] p-3 rounded"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="flex items-center justify-between mb-5">
						<p className="font-bold text-center text-2xl">Product Item</p>
						<button
							className="w-8 h-8 rounded-full text-sm font-bold bg-green-400 cursor-pointer"
							onClick={() => handleClickIsOpenModal()}
						>
							X
						</button>
					</div>
					<div className="h-[200px]">
						<p>
							<span className="font-bold text-lg">Id</span>: {productItem.id}
						</p>
						<p>
							<span className="font-bold text-lg">Title</span>: {productItem.title}
						</p>
						<p className="line-clamp-3">
							<span className="font-bold text-lg">Content</span>: {productItem.content}
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="grid grid-cols-6 gap-2">
				{productList.map((prod) => {
					return (
						<div key={prod.id} className="bg-orange-300 p-3 rounded flex flex-col ">
							<div className="h-[200px]">
								<p>
									<span className="font-bold text-lg">Id</span>: {prod.id}
								</p>
								<p>
									<span className="font-bold text-lg">Title</span>: {prod.title}
								</p>
								<p className="line-clamp-3">
									<span className="font-bold text-lg">Content</span>: {prod.body}
								</p>
							</div>
							<button
								className="bg-green-400 p-2 mt-3 rounded font-bold cursor-pointer hover:bg-green-300"
								onClick={() =>
									handleClickIsOpenModal({
										id: prod.id,
										title: prod.title,
										content: prod.body,
									})
								}
							>
								Xem chi tiết
							</button>
						</div>
					);
				})}
			</div>
			{isOpenModal && <Modal productItem={productItem} />}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductList />);
