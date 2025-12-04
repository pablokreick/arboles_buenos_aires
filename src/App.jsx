import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TreeCard from "./components/common/TreeCard";
import { trees } from "./mock/trees";
import { useEffect, useState } from "react";
import TreeDetail from "./components/common/TreeDetail";

function App() {
	const [data, setData] = useState([]);
	const [selectedTree, setSelectedTree] = useState(null);

	useEffect(() => {
		const dataPromise = new Promise((res) => {
			setTimeout(() => {
				res(trees);
			}, 500);
		});
		dataPromise.then(setData);
	}, []);

	const handleClick = (tree) => {
		setSelectedTree(tree);
	};

	return (
		<div className="min-h-screen bg-green-50 text-slate-800 font-text selection:bg-green-200">
			<Header />
			<div className="max-w-7xl px-4 lg:px-40 mx-auto">
				<main className="py-16">
					<div className="py-10">
						<h2 className="text-2xl md:text-4xl text-slate-800">Árboles aptos para las veredas de CABA</h2>
						<p className="text-gray-500 mt-4">Sólo el Gobierno de la Ciudad, a través de las Comunas puede realizar plantaciones</p>
						<p className="text-gray-500 mt-4">
							A medida que haya que remover los árboles que estén en las veredas y no se encuentren en estos listados, serán reemplazados por alguna especie que
							sí esté en el listado y se adapte al lugar.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data?.map((tree) => (
							<TreeCard tree={tree} key={tree.id} handleClick={handleClick} />
						))}
					</div>
				</main>
			</div>
			{selectedTree && <TreeDetail tree={selectedTree} onClose={() => setSelectedTree(null)} />}
			<Footer />
		</div>
	);
}

export default App;
