import Navbar from "./Navbar";

const Header = () => {
	return (
		<header>
			<Navbar />
			<div className="text-center pt-20 pb-40">
				<h1 className="text-4xl md:text-7xl text-gray-900 font-black">
					Especies permitidas en <br />
					<span className="text-transparent bg-linear-to-r from-green-400 to-green-800 bg-clip-text">CABA</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-500 mt-10">Api pública y guía de referencia para el arbolado en las veredas de la ciudad de Buenos Aires.</p>
			</div>
		</header>
	);
};
export default Header;
