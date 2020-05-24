import seedrandom from "seedrandom";
import { Configuration, GameMode } from "../Configuration";
import { agrabahRewardLocations } from "../rewardLocations/agrabah";
import { atlanticaRewardLocations } from "../rewardLocations/atlantica";
import { beastsCastleRewardLocations } from "../rewardLocations/beastsCastle";
import { bonusRewardLocations } from "../rewardLocations/bonus";
import { cavernOfRememberanceRewardLocations } from "../rewardLocations/cavernOfRememberance";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { disneyCastleRewardLocations } from "../rewardLocations/disneyCastle";
import { formRewardLocations } from "../rewardLocations/form";
import { halloweenTownRewardLocations } from "../rewardLocations/halloweenTown";
import { hollowBastionRewardLocations } from "../rewardLocations/hollowBastion";
import { landOfDragonsRewardLocations } from "../rewardLocations/landOfDragons";
import { abilityLevels } from "../rewardLocations/levels";
import { olympusRewardLocations } from "../rewardLocations/olympus";
import { organizationXIIIRewardLocations } from "../rewardLocations/organizationXIII";
import { poohRewardLocations } from "../rewardLocations/pooh";
import { portRoyalRewardLocations } from "../rewardLocations/portRoyal";
import { prideLandsRewardLocations } from "../rewardLocations/prideLands";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { simulatedTwilightTownRewardLocations } from "../rewardLocations/simulatedTwilightTown";
import { spaceParanoidsRewardLocations } from "../rewardLocations/spaceParanoids";
import { timelessRiverRewardLocations } from "../rewardLocations/timelessRiver";
import { twilightTownRewardLocations } from "../rewardLocations/twilightTown";
import { twtnwRewardLocations } from "../rewardLocations/twtnw";
import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { shuffle } from "./shuffle";

const replaceable: Reward[] = [
	Rewards.BLAZING_SHARD,
	Rewards.FROST_SHARD,
	Rewards.LIGHTNING_SHARD,
	Rewards.DARK_SHARD,
	Rewards.LUCID_SHARD,
	Rewards.POWER_SHARD,
	Rewards.BRIGHT_SHARD,
	Rewards.ENERGY_SHARD,
	Rewards.SERENITY_SHARD,
	Rewards.MYTHRIL_SHARD,
];

const replace = (
	rewards: Reward[],
	reward: Reward,
	configuration: Configuration,
	nextIndex?: number
): void => {
	let index = nextIndex;

	if (nextIndex === undefined) {
		const seeder = seedrandom(configuration.seed + reward.value);

		index = Math.floor(seeder() * rewards.length);
	}

	if (replaceable.includes(rewards[index!])) {
		rewards[index!] = reward;

		return;
	}

	return replace(rewards, reward, configuration, (index! + 1) % rewards.length);
};

const replaceMany = (
	rewards: Reward[],
	rewardsToInclude: Reward[],
	configuration: Configuration
) => {
	rewardsToInclude.forEach(reward => {
		replace(rewards, reward, configuration);
	});
};

export const populateAndShuffle = (
	configuration: Configuration
): [Reward[], RewardLocation[]] => {
	const rewards: Reward[] = [];
	const locations: RewardLocation[] = [];

	function push(locationArray: RewardLocation[]) {
		rewards.push(
			...locationArray.map(location => {
				const gameModeReward =
					location.gameMode?.[configuration.gameMode.mode]?.[
						configuration.gameMode.version
					]?.reward;

				return gameModeReward || location.reward;
			})
		);
		locations.push(...locationArray);
	}

	if (configuration.abilities && !configuration.level1) {
		rewards.push(...abilityLevels.map(level => level.abilities.sword.reward!));
		push(bonusRewardLocations);
	} else if (configuration.abilities && configuration.level1) {
		push(
			bonusRewardLocations.map(location => {
				if ([Rewards.SCAN, Rewards.GUARD].includes(location.reward)) {
					return {
						...location,
						reward: Rewards.LUCKY_LUCKY,
					};
				} else if (location.reward === Rewards.AERIAL_RECOVERY) {
					return {
						...location,
						reward: Rewards.MP_HASTERA,
					};
				}

				return location;
			})
		);
	}

	if (configuration.formAbilities) {
		push(formRewardLocations);
	}

	if (configuration.criticalMode && !configuration.level1) {
		push(criticalRewardLocations);
	}

	if (configuration.simulatedTwilightTown) {
		push(simulatedTwilightTownRewardLocations);
	}

	if (configuration.twilightTown) {
		push(twilightTownRewardLocations);
	}

	if (configuration.hollowBastion) {
		push(hollowBastionRewardLocations);
	}

	if (configuration.cavernOfRemembrance) {
		push(cavernOfRememberanceRewardLocations);
	}

	if (configuration.organizationXIII) {
		push(organizationXIIIRewardLocations);
	}

	if (configuration.beastsCastle) {
		push(beastsCastleRewardLocations);
	}

	if (configuration.olympus) {
		push(olympusRewardLocations);
	}

	if (configuration.agrabah) {
		push(agrabahRewardLocations);
	}

	if (configuration.landOfDragons) {
		push(landOfDragonsRewardLocations);
	}

	if (configuration.pooh) {
		push(poohRewardLocations);
	}

	if (configuration.atlantica) {
		push(atlanticaRewardLocations);
	}

	if (configuration.prideLands) {
		push(prideLandsRewardLocations);
	}

	if (configuration.disneyCastle) {
		push(disneyCastleRewardLocations);
	}

	if (configuration.timelessRiver) {
		push(timelessRiverRewardLocations);
	}

	if (configuration.halloweenTown) {
		push(halloweenTownRewardLocations);
	}

	if (configuration.portRoyal) {
		push(portRoyalRewardLocations);
	}

	if (configuration.spaceParanoids) {
		push(spaceParanoidsRewardLocations);
	}

	if (configuration.twtnw) {
		push(twtnwRewardLocations);
	}

	if (configuration.donaldAbilities) {
		replaceMany(
			rewards,
			[Rewards.CENTURION, Rewards.NOBODY_LANCE, Rewards.SHAMANS_RELIC],
			configuration
		);
	}

	if (configuration.goofyAbilities) {
		replaceMany(
			rewards,
			[Rewards.FROZEN_PRIDE, Rewards.NOBODY_GUARD, Rewards.AKASHIC_RECORD],
			configuration
		);
	}

	if (configuration.ultimaWeapon) {
		replace(rewards, Rewards.ULTIMA_WEAPON, configuration);
	}

	if (configuration.finalForm) {
		replace(rewards, Rewards.FINAL_FORM, configuration);
	}

	if (configuration.synthItems) {
		replaceMany(
			rewards,
			[
				Rewards.LUCKY_RING,
				Rewards.SHADOW_ARCHIVE,
				Rewards.SHOCK_CHARM,
				Rewards.FULL_BLOOM,
			],
			configuration
		);
	}

	if (configuration.gameMode.mode === GameMode.GOA_MOD) {
		replaceMany(
			rewards,
			[Rewards.PROMISE_CHARM, Rewards.CHAMPION_BELT, Rewards.MEDAL],
			configuration
		);

		if (!configuration.cavernOfRemembrance) {
			push([
				cavernOfRememberanceRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_NONEXISTENCE
				)!,
			]);
		}

		if (!configuration.hollowBastion) {
			push([
				hollowBastionRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_PEACE
				)!,
			]);
		}

		if (!configuration.disneyCastle) {
			push([
				disneyCastleRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_CONNECTION
				)!,
			]);
		}
	}

	return [shuffle(rewards, configuration.seed), locations];
};
