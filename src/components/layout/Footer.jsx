const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white pt-16 pb-4 text-gray-400">
			<div className="flex justify-center items-center flex-col gap-4 text-center">
				<p>
					Código fuente del proyecto en{" "}
					<a href="https://github.com/pablokreick/arboles_buenos_aires.git" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					.
				</p>
				<p className="text-base">&copy; 2025 Arbolado Buenos Aires API. Proyecto Open Source.</p>
			</div>
		</footer>
	);
};
export default Footer;
