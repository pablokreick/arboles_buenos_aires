import { AlertTriangle, CloudSun, Flower, Info, Leaf, MapPin, Nut, Palette, Ruler, X } from "lucide-react";
import { createPortal } from "react-dom";
import Badge from "./Badge";
import SectionTitle from "./SectionTitle";
import DetailRow from "./DetailRow";
import StatBox from "./StatBox";

const TreeDetail = ({ tree, onClose }) => {
	if (!tree) return null;

	const formatList = (list) => (list && list.length > 0 ? list.join(", ") : "N/A");

	const getSidewalkRange = (range) => (Array.isArray(range) ? `${range[0]}m - ${range[1]}m` : `${range}m`);

	return createPortal(
		<div className="fixed inset-0 z-[1000] flex justify-center items-center selection:bg-green-100">
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
			<div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
				{/* HEADER */}
				<div className="flex items-start justify-between border-b border-gray-100 bg-white shrink-0 p-6">
					<div>
						<div className="flex items-center gap-3 mb-1">
							<h2 className="text-3xl">{tree.common_name}</h2>
							<Badge text={`ID: ${tree.id}`} />
						</div>
						<p className="italic text-emerald-600 font-serif">{tree.scientific_name}</p>
						<div className="flex items-center text-sm gap-2 mt-2 text-gray-500">
							<span>{tree.taxonomy.family}</span> • <span>{tree.taxonomy.origin}</span>
						</div>
					</div>
					<button onClick={onClose} className="p-2 bg-gray-50 rounded-full hover:bg-gray-200 transition-colors text-gray-400 hover:text-gray-700">
						<X className="h-6 w-6" />
					</button>
				</div>

				{/* CONTENT */}
				<div className="overflow-y-auto p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* LEFT COLUMN */}
						<div className="space-y-6">
							{/* ORNAMENTAL VALUE */}
							<div className="bg-purple-50 p-6 rounded-xl border border-purple-100 selection:bg-purple-300">
								<SectionTitle text="Valor Ornamental" icon={<Palette className="w-4 h-4" />} color="text-purple-800" uppercase={false} />
								<p className="text-purple-900/80 text-sm mb-3 leading-relaxed">{tree.ornamental_value.description}</p>
								<div className="flex flex-wrap gap-2">
									{tree.ornamental_value.highlights.map((highlight) => (
										<Badge key={highlight} text={highlight} color="bg-white text-purple-700 shadow-sm" />
									))}
									<Badge text={`Pico: ${tree.ornamental_value.peak_season}`} color="bg-purple-200 text-purple-900" />
								</div>
							</div>

							{/* FOLIAGE */}
							<div>
								<SectionTitle text="Follaje" icon={<Leaf className="h-4 w-4" />} color="text-green-600" />
								<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
									<DetailRow label="Persistencia" value={tree.foliage.persistence} />
									{tree.foliage.fall_season && tree.foliage.fall_season.length > 0 && <DetailRow label="Caída" value={formatList(tree.foliage.fall_season)} />}
									<p className="text-gray-600 text-sm italic mt-4 pt-4">{tree.foliage.description}</p>
								</div>
							</div>

							{/* FLOWERING */}
							{tree.flowering && (
								<div>
									<SectionTitle text="Floración" icon={<Flower className="h-4 w-4" />} color="text-rose-600" />
									<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
										<DetailRow label="Color" value={tree.flowering.color} />
										<DetailRow label="Estación" value={formatList(tree.flowering.season)} />
										<DetailRow
											label="Alergeno"
											value={tree.flowering.allergen_level}
											color={tree.flowering.allergen_level === "Alto" ? "text-red-500" : "text-gray-800"}
										/>
										<p className="text-gray-600 text-sm italic mt-4 pt-4">{tree.flowering.description}</p>
									</div>
								</div>
							)}

							{/* FRUITING */}
							{tree.fruiting && (
								<div>
									<SectionTitle text="Fruto" icon={<Nut className="h-4 w-4" />} color="text-orange-700" />
									<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
										<DetailRow label="Color" value={tree.fruiting.color} />
										<DetailRow label="Estación" value={formatList(tree.fruiting.season)} />
										<DetailRow
											label="Suciedad"
											value={tree.fruiting.nuisance_level}
											color={tree.fruiting.nuisance_level === "Alta" ? "text-red-500" : "text-gray-800"}
										/>
										<p className="text-gray-600 text-sm italic mt-4 pt-4">{tree.fruiting.description}</p>
									</div>
								</div>
							)}
						</div>
						{/* RIGHT COLUMN */}
						<div className="space-y-6">
							{/* MORPHOLOGY */}
							<div>
								<SectionTitle text="Biometría" icon={<Ruler className="h-4 w-4" />} />
								<div className="grid grid-cols-2 gap-3 mb-4">
									<StatBox label="Altura" value={`${tree.morphology.max_height}m`} sub="Máxima" />
									<StatBox label="Tronco" value={`${tree.morphology.trunk_diameter}cm`} sub="Diámetro" />
									<StatBox label="Crecimiento" value={tree.morphology.growth_speed} sub="Velocidad" />
									<StatBox label="Copa" value={tree.morphology.canopy_density} sub="Densidad" />
									<StatBox label="Raíz" value={tree.morphology.root_system} sub="Sistema Radicular" />
									<StatBox label="Invasión" value={tree.morphology.invasiveness_level} sub="Sobre vereda" />
								</div>
							</div>

							{/* URBAN CONSTRAINTS */}
							<div>
								<SectionTitle text="Urbanismo" icon={<MapPin className="h-4 w-4" />} color="text-yellow-600" />
								<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
									<DetailRow
										label="Ancho vereda"
										value={<Badge text={getSidewalkRange(tree.urban_constraints.recommended_sidewalk_width)} color="bg-blue-50 text-blue-500 font-bold" />}
									/>
									<DetailRow label="Sombra" value={tree.urban_constraints.shade_quality} />
									<div
										className={`flex items-center gap-2 p-2 my-2 rounded-lg text-sm font-medium border ${
											tree.urban_constraints.under_power_lines_suitable
												? "bg-green-50 border-green-200 text-green-700"
												: "bg-red-50 border-red-200 text-red-700"
										}`}
									>
										{tree.urban_constraints.under_power_lines_suitable ? <Info className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
										{tree.urban_constraints.under_power_lines_suitable ? "Apto bajo cables" : "Puede necesitar poda bajo cables"}
									</div>
								</div>
							</div>

							{/* REQUIREMENTS */}
							<div>
								<SectionTitle text="Requerimientos" icon={<CloudSun className="h-4 w-4" />} color="text-cyan-600" />
								<div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 shadow-sm">
									<DetailRow label="Exposición" value={tree.requirements.sun_exposure} />
									<DetailRow label="Riego" value={tree.requirements.watering} />
									<DetailRow label="Resistencia a sequías" value={tree.requirements.drought_tolerance} />
									<DetailRow label="Resistencia a heladas" value={tree.requirements.frost_resistance} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("modal"),
	);
};
export default TreeDetail;
