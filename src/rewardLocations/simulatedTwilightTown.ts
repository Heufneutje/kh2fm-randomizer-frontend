import { Rewards } from "../rewards";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const simulatedTwilightTownRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Station of Serenity)",
		value: "11CE016E",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Station of Calling)",
		value: "11CE017A",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Central Station)",
		value: "11CE0186",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Central Station)",
		value: "11CE0192",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Central Station)",
		value: "11CE019E",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Sunset Terrace)",
		value: "11CE01AA",
		reward: Rewards.ABILITY_RING,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Sunset Terrace)",
		value: "11CE01B6",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Sunset Terrace)",
		value: "11CE01C2",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Sunset Terrace)",
		value: "11CE01CE",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Foyer)",
		value: "11CE01DA",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Foyer)",
		value: "11CE01E6",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Foyer)",
		value: "11CE01F2",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Dining Room)",
		value: "11CE01FE",
		reward: Rewards.ELVEN_BANDANA,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Dining Room",
		value: "11CE020A",
		reward: Rewards.POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Library)",
		value: "11CE0216",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Simulated Twilight Town (Mansion Basement Corridor)",
		value: "11CE0222",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Station of Serenity Dusks",
		value: "21D10FA8",
		reward: Rewards.AERIAL_RECOVERY,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Twilight Thorn",
		value: "21D10CB8",
		reward: Rewards.GUARD,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Axel 1",
		value: "21D11278",
		reward: Rewards.SCAN,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Twilight Town Map",
		value: "11CE0636",
		reward: Rewards.TWILIGHT_TOWN_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Munny Pouch (Olette)",
		value: "11CE0606",
		reward: Rewards.MUNNY_POUCH_OLETTE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Champion Belt",
		value: "11CE0612",
		reward: Rewards.CHAMPION_BELT,
		gameMode: {
			[GameMode.GOA_MOD]: {
				forceJunk: true,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Medal",
		value: "11CE061E",
		reward: Rewards.MEDAL,
		gameMode: {
			[GameMode.GOA_MOD]: {
				forceJunk: true,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: '"The Struggle" Trophy',
		value: "11CE062A",
		reward: Rewards.STRUGGLE_TROPHY,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Namine's Sketches",
		value: "11CE0642",
		reward: Rewards.NAMINE_SKETCHES,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Mansion Map",
		value: "11CE064E",
		reward: Rewards.MANSION_MAP,
	},
];
