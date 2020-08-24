import { EnemyType } from "./Enemy";

export const bosses = {
	SHAN_YU: {
		type: EnemyType.BOSS,
		name: "Shan-Yu",
		value: "0015",
	},
	AXEL_II: {
		type: EnemyType.BOSS,
		name: "Axel II",
		value: "0051",
	},
	LOCK: {
		type: EnemyType.BOSS,
		name: "Lock",
		value: "007F",
	},
	SHOCK: {
		type: EnemyType.BOSS,
		name: "Shock",
		value: "0080",
	},
	BARREL: {
		type: EnemyType.BOSS,
		name: "Barrel",
		value: "0081",
	},
	TWILIGHT_THORN: {
		type: EnemyType.BOSS,
		name: "Twilight Thorn",
		value: "0133",
	},
	HADES_I: {
		type: EnemyType.BOSS,
		name: "Hades (1st Visit - Hades' Chamber)",
		value: "015D",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	HADES_ESCAPE: {
		type: EnemyType.BOSS,
		name: "Hades (Escape)",
		value: "0812",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	HADES_II: {
		type: EnemyType.BOSS,
		name: "Hades (2nd Visit & Hades Paradox Cup Battle)",
		value: "015E",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	CERBERUS: {
		type: EnemyType.BOSS,
		name: "Cerberus",
		value: "015F",
	},
	HYDRA: {
		type: EnemyType.BOSS,
		name: "Hydra",
		value: "0160",
	},
	THRESHOLDER: {
		type: EnemyType.BOSS,
		name: "Thresholder",
		value: "0161",
	},
	DARK_THORN: {
		type: EnemyType.BOSS,
		name: "Dark Thorn",
		value: "0162",
	},
	SHADOW_STALKER: {
		type: EnemyType.BOSS,
		name: "Shadow Stalker",
		value: "0163",
	},
	POSSESSOR: {
		type: EnemyType.BOSS,
		name: "Possessor",
		value: "0164",
	},
	STORM_RIDER: {
		type: EnemyType.BOSS,
		name: "Storm Rider",
		value: "0165",
	},
	PETE_TR: {
		type: EnemyType.BOSS,
		name: "Pete (Timeless River)",
		value: "0167",
	},
	SHENZI: {
		type: EnemyType.BOSS,
		name: "Shenzi",
		value: "0299",
	},
	BANZAI: {
		type: EnemyType.BOSS,
		name: "Banzai",
		value: "029A",
	},
	ED: {
		type: EnemyType.BOSS,
		name: "Ed",
		value: "029B",
	},
	SCAR: {
		type: EnemyType.BOSS,
		name: "Scar",
		value: "029C",
	},
	THE_BEAST: {
		type: EnemyType.BOSS,
		name: "The Beast",
		value: "02CE",
	},
	SARK: {
		type: EnemyType.BOSS,
		name: "Sark",
		value: "035E",
	},
	SARK_LARGE: {
		type: EnemyType.BOSS,
		name: "Sark (Large)",
		value: "03C4",
	},
	XALDIN: {
		type: EnemyType.BOSS,
		name: "Xaldin",
		value: "03E5",
	},
	VOLCANIC_LORD: {
		type: EnemyType.BOSS,
		name: "Volcanic Lord",
		value: "040B",
	},
	BLIZZARD_LORD: {
		type: EnemyType.BOSS,
		name: "Blizzard Lord",
		value: "040C",
	},
	// VOLCANIC_LORD: {
	// 	type: EnemyType.BOSS,
	// 	name: "Volcanic Lord",
	// 	value: "062A",
	// },
	// BLIZZARD_LORD: {
	// 	type: EnemyType.BOSS,
	// 	name: "Blizzard Lord",
	// 	value: "062B",
	// },
	HOSTILE_PROGRAM: {
		type: EnemyType.BOSS,
		name: "Hostile Program",
		value: "04B8",
		rules: {
			bannedFrom: [
				"Shan-Yu"
			]
		}
	},
	HAYNER: {
		type: EnemyType.BOSS,
		name: "Hayner",
		value: "04D7",
	},
	PRISON_KEEPER: {
		type: EnemyType.BOSS,
		name: "Prison Keeper",
		value: "05CE",
		rules: {
			bannedFrom: [
				"Vexen (Absent Silhouette)",
				"Vexen (Data)"
			]
		}
	},
	THE_EXPERIMENT: {
		type: EnemyType.BOSS,
		name: "The Experiment",
		value: "05D0",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)"
			]
		}
	},
	GRIM_REAPER: {
		type: EnemyType.BOSS,
		name: "Grim Reaper",
		value: "010607",
	},
	RIKU: {
		type: EnemyType.BOSS,
		name: "Riku",
		value: "063C",
	},
	XEMNAS: {
		type: EnemyType.BOSS,
		name: "Xemnas",
		value: "0646",
	},
	PETE_PAST: {
		type: EnemyType.BOSS,
		name: "Pete (Past)",
		value: "0647",
	},
	SEIFER: {
		type: EnemyType.BOSS,
		name: "Seifer",
		value: "0678",
	},
	PETE_OC_I: {
		type: EnemyType.BOSS,
		name: "Pete (Olympus Coliseum; Part I)",
		value: "06BB",
	},
	PETE_OC_II: {
		type: EnemyType.BOSS,
		name: "Pete (Olympus Coliseum; Part II)",
		value: "06BC",
	},
	SAIX: {
		type: EnemyType.BOSS,
		name: "Saix",
		value: "06C9",
		rules: {
			bannedFrom: [
				"Shan-Yu"
			]
		}
	},
	THE_EXPERIMENT_HEAD: {
		type: EnemyType.BOSS,
		name: "The Experiment (Head)",
		value: "0710",
	},
	THE_EXPERIMENT_LEFT_HAND: {
		type: EnemyType.BOSS,
		name: "The Experiment (Left Hand)",
		value: "0711",
	},
	THE_EXPERIMENT_RIGHT_HAND: {
		type: EnemyType.BOSS,
		name: "The Experiment (Right Hand)",
		value: "0712",
	},
	SHADOW_ROXAS: {
		type: EnemyType.BOSS,
		name: "Shadow Roxas",
		value: "0754",
	},
	FINAL_XEMNAS: {
		type: EnemyType.BOSS,
		name: "Final Xemnas",
		value: "01081F",
	},
	SETZER: {
		type: EnemyType.BOSS,
		name: "Setzer",
		value: "082F",
	},
	ARMOR_XEMNAS: {
		type: EnemyType.BOSS,
		name: "Armor Xemnas",
		value: "085C",
	},
	VIVI_STRUGGLE: {
		type: EnemyType.BOSS,
		name: "Vivi (Struggle Tournament)",
		value: "086C",
	},
	AXEL_I: {
		type: EnemyType.BOSS,
		name: "Axel I",
		value: "08B5",
	},
	SEPHIROTH: {
		type: EnemyType.BOSS,
		name: "Sephiroth",
		value: "08B6",
	},
	VIVI: {
		type: EnemyType.BOSS,
		name: "Vivi",
		value: "0108D0",
	},
	DEMYX_HB: {
		type: EnemyType.BOSS,
		name: "Demyx (Hollow Bastion)",
		value: "08F7",
		// patches: {
		// 	all: [
		// 		{
		// 			name: "No Water Clones Minigame",
		// 			codes: ["20C60358 00000074",
		// 					"20C6035C 00000000",
		// 					"20C60360 00000000",
		// 					"20C60374 00000000",
		// 					"20C60378 00000000"]
		// 		}
		// 	] 
		// }
	},
	LEON: {
		type: EnemyType.BOSS,
		name: "Leon",
		value: "08F8",
	},
	CLOUD: {
		type: EnemyType.BOSS,
		name: "Cloud",
		value: "08F9",
	},
	TIFA: {
		type: EnemyType.BOSS,
		name: "Tifa",
		value: "08FA",
	},
	YUFFIE: {
		type: EnemyType.BOSS,
		name: "Yuffie",
		value: "08FB",
	},
	HADES_CUPS: {
		type: EnemyType.BOSS,
		name: "Hades (Goddess of Fate Cup/Hades Paradox Cup)",
		value: "090E",
	},
	PETE_HPC: {
		type: EnemyType.BOSS,
		name: "Pete (Hades Paradox Cup)",
		value: "090F",
	},
	HERCULES_CUPS: {
		type: EnemyType.BOSS,
		name: "Hercules (Titan Cup/Titan Paradox Cup)",
		value: "0910",
	},
	MARLUXIA_AS: {
		type: EnemyType.BOSS,
		name: "Marluxia (Absent Silhouette)",
		value: "000923",
	},
	MARLUXIA_DATA: {
		type: EnemyType.BOSS,
		name: "Marluxia (Data)",
		value: "010923",
	},
	VEXEN_AS: {
		type: EnemyType.BOSS,
		name: "Vexen (Absent Silhouette)",
		value: "000933",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)",
				"Shan-Yu",
				"Dark Thorn",
				"Armor Xemnas",
				"Grim Reaper"
			]
		}
	},
	VEXEN_DATA: {
		type: EnemyType.BOSS,
		name: "Vexen (Data)",
		value: "010933",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)",
				"Shan-Yu",
				"Dark Thorn",
				"Armor Xemnas",
				"Grim Reaper"
			]
		}
	},
	LEXAEUS_AS: {
		type: EnemyType.BOSS,
		name: "Lexaeus (Absent Silhouette)",
		value: "000935",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)"
			]
		}
	},
	LEXAUS_DATA: {
		type: EnemyType.BOSS,
		name: "Lexaus (Data)",
		value: "010935",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)"
			]
		}
	},
	ROXAS: {
		type: EnemyType.BOSS,
		name: "Roxas",
		value: "000951",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)",
				"Grim Reaper"

			]
		}
	},
	ROXAS_DATA: {
		type: EnemyType.BOSS,
		name: "Roxas (Data)",
		value: "010951",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)",
				"Grim Reaper"
			]
		}
	},
	LARXENE_AS: {
		type: EnemyType.BOSS,
		name: "Larxene (Absent Silhouette)",
		value: "000962",
	},
	LARXENE_DATA: {
		type: EnemyType.BOSS,
		name: "Larxene (Data)",
		value: "010962",
	},
	LINGERING_WILL: {
		type: EnemyType.BOSS,
		name: "Lingering Will (Terra)",
		value: "096F",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)",
				"Volcanic Lord",
				"Blizzard Lord",
				"Armor Xemnas"
			]
		}
	},
	ZEXION_AS: {
		type: EnemyType.BOSS,
		name: "Zexion (Absent Silhouette)",
		value: "097B",
	},
	AXEL_DATA: {
		type: EnemyType.BOSS,
		name: "Axel (Data)",
		value: "09C4",
	},
	XIGBAR: {
		type: EnemyType.BOSS,
		name: "Xigbar",
		value: "0622",
		rules: {
			bannedFrom: [
				"Roxas",
				"Scar",
				"Hades (Escape)"
			]
		}
	},
	XIGBAR_DATA: {
		type: EnemyType.BOSS,
		name: "Xigbar (Data)",
		value: "09C5",
		rules: {
			bannedFrom: [
				"Roxas",
				"Scar",
				"Hades (Escape)"
			]
		}
	},
	SAIX_DATA: {
		type: EnemyType.BOSS,
		name: "Saïx (Data)",
		value: "09C6",
		rules: {
			bannedFrom: [
				"Shan-Yu"
			]
		}
	},
	LUXORD_DATA: {
		type: EnemyType.BOSS,
		name: "Luxord (Data)",
		value: "09C8",
	},
	XEMNAS_DATA: {
		type: EnemyType.BOSS,
		name: "Xemnas (Data)",
		value: "09C9",
	},
	FINAL_XEMNAS_DATA: {
		type: EnemyType.BOSS,
		name: "Final Xemnas (Data)",
		value: "09CA",
	},
	XALDIN_DATA: {
		type: EnemyType.BOSS,
		name: "Xaldin (Data)",
		value: "09CB",
	},
	DEMYX_DATA: {
		type: EnemyType.BOSS,
		name: "Demyx (Data) ",
		value: "09CC",
	},
};
