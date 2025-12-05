const StatBox = ({ label, value, sub }) => (
	<div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
		<div className="text-xl font-bold text-slate-800">{value}</div>
		<div className="text-xs text-slate-500 font-medium uppercase">{label}</div>
		{sub && <div className="text-[10px] text-slate-400 mt-1">{sub}</div>}
	</div>
);

export default StatBox;
