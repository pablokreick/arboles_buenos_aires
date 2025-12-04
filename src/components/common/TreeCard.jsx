import { Droplets, Leaf, Sprout, Sun } from "lucide-react";

const TreeCard = ({ tree, handleClick }) => {
	return (
		<div
			onClick={() => handleClick(tree)}
			className="group 
            cursor-pointer bg-white p-4 rounded-lg shadow-md border border-green-100 hover:shadow-xl 
        hover:shadow-green-900/15
        hover:-translate-y-1  transition-all duration-300"
		>
			<div className="flex justify-between items-center text-sm font-bold text-gray-400">
				<div className="w-12 h-12 flex items-center justify-center  mb-4 rounded-full bg-green-100 group-hover:bg-green-400 duration-300 transition-colors">
					<Leaf className="h-6 w-6 text-green-800 group-hover:text-green-950 duration-300 transition-colors" />
				</div>
				<span className="text-center text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
					APTO VEREDA
					<br />
					{tree.urban_constraints.recommended_sidewalk_width[0]}m - {tree.urban_constraints.recommended_sidewalk_width[1]}m
				</span>
			</div>
			<h3 className="text-xl md:text-2xl text-gray-800 group-hover:text-green-800 duration-300 transition-colors">{tree.common_name}</h3>
			<p className="italic text-gray-400 mb-4">{tree.scientific_name}</p>
			<ul>
				<li className="my-3 flex gap-2 items-center justify-start text-sm text-gray-600">
					<Sun className="h-4 w-4 text-yellow-500" />
					<span>Exposición: {tree.requirements.sun_exposure}</span>
				</li>
				<li className="my-3 flex gap-2 items-center justify-start text-sm text-gray-600">
					<Droplets className="h-4 w-4 text-blue-500" />
					<span>Riego: {tree.requirements.watering}</span>
				</li>
				<li className="my-3 flex gap-2 items-center justify-start text-sm text-gray-600">
					<Sprout className="h-4 w-4 text-green-500" />
					<span>Crecimiento: {tree.morphology.growth_speed}</span>
				</li>
			</ul>
			<div className="flex justify-between items-center mt-6">
				<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{tree.taxonomy.origin}</span>
				<span className="text-xs font-medium text-gray-400 uppercase tracking-wider opacity-0 group-hover:text-green-400 group-hover:opacity-100 transition-all">
					+ info
				</span>
			</div>
		</div>
	);
};
export default TreeCard;
