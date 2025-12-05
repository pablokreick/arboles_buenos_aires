const DetailRow = ({ label, value, color = "text-gray-800" }) => (
	<div className="flex justify-between items-start py-1 border-b border-gray-100 last:border-0">
		<span className="text-gray-500 text-sm">{label}:</span>
		<span className={`font-medium ${color} text-sm text-right ml-4`}>{value}</span>
	</div>
);

export default DetailRow;
