import Navbar from "../components/layout/Navbar";

const Documentation = () => {
	return (
		<div className="min-h-screen bg-green-50 text-slate-800 font-text selection:bg-green-200">
			<header>
				<Navbar />
			</header>
			<div id="trees" className="max-w-7xl px-4 lg:px-40 mx-auto">
				<main className="py-16">
					<h1 className="text-2xl md:text-4xl text-slate-800 text-center py-16">Estamos trabajando en esta página...</h1>
				</main>
			</div>
		</div>
	);
};
export default Documentation;
