const SectionTitle = ({ text, icon, color = "text-gray-400", uppercase = true }) => (
	<h3 className={`flex items-center gap-2 text-sm font-bold ${color} ${uppercase ? "uppercase" : ""} mb-3 mt-6 first:mt-0`}>
		{icon} {text}
	</h3>
);

export default SectionTitle;
