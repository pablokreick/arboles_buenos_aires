import Navbar from "./Navbar";

const Header = ({ children }) => {
	return (
		<header>
			<Navbar />
			<div className="text-center pt-40 pb-40 bg-green-200">{children}</div>
		</header>
	);
};
export default Header;
