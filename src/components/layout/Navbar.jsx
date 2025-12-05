import { Terminal, TreeDeciduous } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<nav className="w-full">
					<ul className="flex justify-center items-center">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									`text-lg font-semibold p-3 duration-300 transition-all flex items-center gap-2 hover:text-green-400 ${
										isActive ? "text-green-600  bg-green-100 rounded-xl" : "text-green-800"
									}`
								}
							>
								<TreeDeciduous size={18} /> Árboles
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/documentation"
								className={({ isActive }) =>
									`text-lg font-semibold p-3 duration-300 transition-all flex items-center gap-2 hover:text-green-400 ${
										isActive ? "text-green-600  bg-green-100 rounded-xl" : "text-green-800"
									}`
								}
							>
								<Terminal size={18} /> Documentación
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Navbar;
