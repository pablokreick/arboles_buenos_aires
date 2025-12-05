const Badge = ({ text, color = "bg-gray-100 text-gray-700" }) => (
	<span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${color} border border-black/5`}>{text}</span>
);

export default Badge;
