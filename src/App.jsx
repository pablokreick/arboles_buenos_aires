import "./App.css";

function App() {
	return (
		<div className="min-h-screen bg-green-50 text-slate-800 font-text selection:bg-green-200">
			<header>
				<div className="text-center py-10">
					<h1 className="text-4xl md:text-7xl text-gray-900 font-black">
						Especies permitidas en <br />
						<span className="text-transparent bg-linear-to-r from-green-400 to-green-800 bg-clip-text">CABA</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-500 mt-10">
						Api pública y guía de referencia para el arbolado en las veredas de la ciudad de Buenos Aires.
					</p>
				</div>
			</header>
			<main></main>
			<footer className="border-t border-gray-200 bg-white pt-16 pb-4 text-gray-400">
				<div className="flex justify-center items-center flex-col gap-4 text-center">
					<a href="#">GitHub</a>
					<p className="text-base">&copy; 2025 Arbolado Buenos Aires API. Proyecto Open Source.</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
