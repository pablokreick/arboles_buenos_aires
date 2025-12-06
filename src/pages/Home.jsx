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
						<p className="text-gray-500 mt-4">Para elegir un árbol para colocar en las veredas, hay que tener en cuenta varios factores.</p>
						<p className="text-gray-500 mt-4">
							El <span className="text-slate-600 font-black">sistema radicular</span> indicado (Profundo, Extendido o Superficial) describe una posible
							adaptación del árbol al suelo que encuentra en el entorno urbano. En este entorno, factores como la compactación excesiva, la falta de oxígeno o
							la mala calidad del sustrato pueden forzar a una raíz, que biológicamente buscaría profundidad, a desarrollarse superficialmente para sobrevivir y
							buscar agua.
						</p>
						<p className="text-gray-500 mt-4">
							La <span className="text-slate-600 font-black">invasión</span> sobre la vereda es una medida de la{" "}
							<span className="text-slate-600 font-black"></span>fuerza hidráulica que puede ejercer el árbol sobre las estructuras que lo rodean (por ejemplo,
							las veredas o cordones).
						</p>
						<p className="text-gray-500 mt-4">
							El <span className="text-slate-600 font-black">diámetro del tronco</span> también es un factor importante a considerar, ya que árboles con troncos
							muy gruesos o un volumen de la base muy grande se pueden levantar veredas aunque las raíces no sean invasivas.
						</p>
						<p className="text-gray-500 mt-4">
							La <span className="text-slate-600 font-black">velocidad de crecimiento</span> puede indicarnos cuándo vamos a tener un conflicto con las veredas
							ya que si es altamente invasiva, coloniza el espacio agresivamente.
						</p>
						<p className="text-gray-500 mt-4">
							<span className="font-bold">Hay que tener en cuenta las recomendaciones del </span>{" "}
							<span className="text-slate-600 font-black">ancho de las veredas</span> para evitar conflictos posteriormente ya que con esto, se busca mitigar el
							riesgo.
						</p>
						<h3 className="text-xl md:text-2xl text-slate-800 mt-8">A tener en cuenta...</h3>
						<ul className="list-disc px-4">
							<li className="text-gray-500 mt-4">
								Se recuerda que sólo el Gobierno de la Ciudad, a través de las Comunas puede realizar plantaciones, podas, o evaluar roturas en las aceras .
							</li>
							<li className="text-gray-500 mt-4">
								A medida que haya que remover los árboles que estén en las veredas y no se encuentren en estos listados, serán reemplazados por alguna especie
								que sí esté en el listado y se adapte al lugar.
							</li>
							<li className="text-gray-500 mt-4">
								La información presentada es de carácter orientativo y se basa en observaciones generales de cultivo urbano. No constituye asesoramiento
								profesional ni garantiza resultados en todos los casos. Las condiciones del suelo, el clima y el manejo pueden modificar el comportamiento de
								cada especie. Se recomienda consultar con un ingeniero agrónomo, paisajista o autoridad competente antes de realizar cualquier elección.
							</li>
						</ul>
					</div>
					<div className="py-10">
						<h2 className="text-2xl md:text-4xl text-slate-800 mb-10">Listado de árboles</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{data?.map((tree) => (
								<TreeCard tree={tree} key={tree.id} handleClick={handleClick} />
							))}
						</div>
					</div>
				</main>
			</div>
			{selectedTree && <TreeDetail tree={selectedTree} onClose={() => setSelectedTree(null)} />}
			<Footer />
		</div>
	);
};
export default Home;
