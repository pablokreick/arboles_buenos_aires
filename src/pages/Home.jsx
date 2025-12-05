import { useEffect, useState } from "react";
import { trees } from "../mock/trees";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TreeCard from "../components/common/TreeCard";
import TreeDetail from "../components/common/TreeDetail";

const Home = () => {
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
		<div className="min-h-screen bg-green-50 text-slate-800 font-text selection:bg-green-300">
			<Header>
				<h1 className="text-4xl md:text-7xl text-gray-900 font-black">
					Especies de árboles permitidas en <br />
					<span className="text-transparent bg-linear-to-r from-green-400 to-green-800 bg-clip-text">CABA</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-900 mt-10">Conocé los árboles de las veredas porteñas: API abierta y guía completa.</p>
			</Header>
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
};
export default Home;
