import Header from "../components/layout/Header";

const Documentation = () => {
	return (
		<div className="min-h-screen bg-green-50 text-slate-800 font-text selection:bg-green-300">
			<Header>
				<h1 className="text-4xl md:text-7xl text-gray-900 font-black">
					Documentación de nuestra <br />
					<span className="text-transparent bg-linear-to-r from-green-400 to-green-800 bg-clip-text">API</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-900 mt-10">
					Toda la información técnica y de referencia de la documentación de la API del arbolado urbano de Buenos Aires.
				</p>
			</Header>
			<div id="trees" className="max-w-7xl px-4 lg:px-40 mx-auto">
				<main className="py-16">
					<h1 className="text-2xl md:text-4xl text-slate-800 text-center py-16">Estamos trabajando en esta página...</h1>
				</main>
			</div>
		</div>
	);
};
export default Documentation;
