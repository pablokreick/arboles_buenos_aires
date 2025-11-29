import { AlertTriangle, Flower, Info, MapPin, Ruler, X } from "lucide-react";
import { createPortal } from "react-dom";
const ItemDetail = ({ name, description }) => {
	return (
		<div className="flex justify-between">
			<span className="text-gray-600">{name}:</span>
			<span className="font-semibold text-gray-800">{description}</span>
		</div>
	);
};

const GroupItemDetail = ({ children, color = "transparent" }) => {
	return <div className={`mb-4 rounded-xl p-4 space-y-2 ${color}`}>{children}</div>;
};

const ItemDetailTitle = ({ text, icon }) => {
	return (
		<h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase mb-2">
			{icon} {text}
		</h3>
	);
};

const PillItemDetail = ({ text, color, bg = "transparent" }) => {
	return <span className={`px-3 py-1  ${bg} ${color} rounded-full text-sm font-medium`}>{text}</span>;
};

const TreeDetail = ({ tree, onClose }) => {
	if (!tree) return null;

	return createPortal(
		<div className="fixed inset-0 z-[1000] flex justify-center items-center">
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
			<div className="max-w-3xl w-3xl transition-all p-4 rounded-xl shadow-lg bg-white relative">
				{/* Header */}
				<div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
					<div>
						<h2 className="text-3xl font-bold text-gray-800">{tree.especie.nombre_comun}</h2>
						<p className="text-green-600 italic font-medium">{tree.especie.nombre_cientifico}</p>
					</div>
					<button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
						<X className="h-5 w-5 text-gray-500" />
					</button>
				</div>
				{/* Content */}
				<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<ItemDetailTitle text="Taxonomía" icon={<Info className="h-4 w-4" />} />
						<GroupItemDetail color="bg-green-50">
							<ItemDetail name="Familia" description={tree.especie.familia} />
							<ItemDetail name="Origen" description={tree.especie.origen} />
						</GroupItemDetail>
						<div>
							<ItemDetailTitle text="Floración" icon={<Flower className="h-4 w-4" />} />
							<GroupItemDetail>
								<ItemDetail name="Color" description={<PillItemDetail color="text-purple-700" bg="bg-purple-100" text="violeta" />} />
								<ItemDetail
									name="Estaciones"
									description={
										<div className="inline-flex gap-2 flex-wrap">
											{tree.floracion.temporada.map((temp) => (
												<span key={temp} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
													{temp}
												</span>
											))}
										</div>
									}
								/>
								<ItemDetail
									name="Alergeno"
									description={
										<PillItemDetail
											color={tree.floracion.alergeno_nivel === "Alto" ? "text-red-700" : "text-green-700"}
											bg={tree.floracion.alergeno_nivel === "Alto" ? "bg-red-100" : "bg-green-100"}
											text={tree.floracion.alergeno_nivel}
										/>
									}
								/>
							</GroupItemDetail>
						</div>
					</div>
					<div>
						<ItemDetailTitle text="Morfología" icon={<Ruler className="h-4 w-4" />} />
						<GroupItemDetail>
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-gray-50 p-3 rounded-lg text-center">
									<div className="text-2xl font-bold text-gray-800">{tree.morfologia.altura_estimada_m}m</div>
									<div className="text-xs text-gray-500">Altura Máx</div>
								</div>
								<div className="bg-gray-50 p-3 rounded-lg text-center">
									<div className="text-2xl font-bold text-gray-800">{tree.morfologia.diametro_tronco_cm}cm</div>
									<div className="text-xs text-gray-500">Diámetro</div>
								</div>
							</div>
						</GroupItemDetail>
						<ItemDetailTitle text="Urbanismo" icon={<MapPin className="h-4 w-4" />} />
						<GroupItemDetail color="bg-amber-50">
							<ItemDetail name="Vereda" description={`${tree.urbanismo.ancho_vereda_recomendado.min}m - ${tree.urbanismo.ancho_vereda_recomendado.max}m`} />
							<ItemDetail name="Sistema radicular" description={tree.urbanismo.sistema_radicular} />
						</GroupItemDetail>
						<div
							className={`flex items-center gap-2 p-2 rounded-lg text-sm font-medium ${
								tree.urbanismo.apto_bajo_cables ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"
							}`}
						>
							<AlertTriangle className="h-4 w-4" />
							{tree.urbanismo.apto_bajo_cables ? "Apto bajo cables" : "No apto bajo cables"}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById("modal"),
	);
};
export default TreeDetail;
