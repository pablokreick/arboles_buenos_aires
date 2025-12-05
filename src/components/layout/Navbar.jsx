const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<nav className="w-full">
					<ul className="flex justify-center items-center">
						<li>
							<a href="/" className="text-lg font-semibold text-green-800 p-3 hover:text-green-400 duration-300 transition-all">
								Árboles
							</a>
						</li>
						<li>
							<a href="/documentation" className="text-lg font-semibold text-green-800 p-3 hover:text-green-400 duration-300 transition-all">
								Documentación
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Navbar;
