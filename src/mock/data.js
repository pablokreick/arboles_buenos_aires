export const arboles = [
	{
		id: 1,
		especie: {
			nombre_comun: "Jacarandá",
			nombre_cientifico: "Jacaranda mimosifolia",
			familia: "Bignoniaceae",
			origen: "Nativo (NOA)",
		},
		morfologia: {
			follaje: "Caduco tardío",
			altura_estimada_m: 15,
			diametro_tronco_cm: 70,
			velocidad_crecimiento: "Medio",
		},
		requerimientos: {
			luz_solar: "Pleno sol",
			riego: "Moderado",
			resistencia_sequia: "Media",
		},
		floracion: {
			color: "Violeta",
			temporada: ["Primavera", "Verano"],
			alergeno_nivel: "Bajo",
		},
		urbanismo: {
			ancho_vereda_recomendado: { min: 3.0, max: 4.6 },
			sistema_radicular: "Extendido",
			apto_bajo_cables: false,
		},
	},
	{
		id: 2,
		especie: {
			nombre_comun: "Tilo",
			nombre_cientifico: "Tilia moltkei",
			familia: "Malvaceae",
			origen: "Híbrido",
		},
		morfologia: {
			follaje: "Caduco",
			altura_estimada_m: 18,
			diametro_tronco_cm: 80,
			velocidad_crecimiento: "Lento",
		},
		requerimientos: {
			luz_solar: "Sombra parcial",
			riego: "Alto",
			resistencia_sequia: "Baja",
		},
		floracion: {
			color: "Amarillo pálido",
			temporada: ["Verano"],
			alergeno_nivel: "Alto",
		},
		urbanismo: {
			ancho_vereda_recomendado: { min: 3.5, max: 5.0 },
			sistema_radicular: "Profundo",
			apto_bajo_cables: true,
		},
	},
	{
		id: 3,
		especie: {
			nombre_comun: "Lapacho Rosado",
			nombre_cientifico: "Handroanthus impetiginosus",
			familia: "Bignoniaceae",
			origen: "Nativo (NEA)",
		},
		morfologia: {
			follaje: "Caduco",
			altura_estimada_m: 20,
			diametro_tronco_cm: 90,
			velocidad_crecimiento: "Lento",
		},
		requerimientos: {
			luz_solar: "Pleno sol",
			riego: "Bajo",
			resistencia_sequia: "Alta",
		},
		floracion: {
			color: "Rosa intenso",
			temporada: ["Invierno", "Primavera"],
			alergeno_nivel: "Bajo",
		},
		urbanismo: {
			ancho_vereda_recomendado: { min: 3.2, max: 4.8 },
			sistema_radicular: "Agresivo",
			apto_bajo_cables: false,
		},
	},
];
