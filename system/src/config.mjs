// Namespace Configuration Values
const SHADOWDARK = {};

SHADOWDARK.ABILITIES_LONG = {
	str: "SHADOWDARK.ability_strength",
	int: "SHADOWDARK.ability_intelligence",
	wis: "SHADOWDARK.ability_wisdom",
	con: "SHADOWDARK.ability_constitution",
	cha: "SHADOWDARK.ability_charisma",
	dex: "SHADOWDARK.ability_dexterity",
};

SHADOWDARK.ABILITY_KEYS = [
	"str",
	"int",
	"dex",
	"wis",
	"con",
	"cha",
];

SHADOWDARK.ALIGNMENTS = {
	lawful: "SHADOWDARK.alignment.lawful",
	neutral: "SHADOWDARK.alignment.neutral",
	chaotic: "SHADOWDARK.alignment.chaotic",
};

SHADOWDARK.ALIGNMENTS_SHORT = {
	lawful: "SHADOWDARK.alignment.lawful_short",
	neutral: "SHADOWDARK.alignment.neutral_short",
	chaotic: "SHADOWDARK.alignment.chaotic_short",
};

SHADOWDARK.ARMOR_BASE_ARMOR = {
	chainmail: "SHADOWDARK.item.armor.base_armor.chainmail",
	"leather-armor": "SHADOWDARK.item.armor.base_armor.leather_armor",
	"plate-mail": "SHADOWDARK.item.armor.base_armor.plate_mail",
	shield: "SHADOWDARK.item.armor.base_armor.shield",
};

SHADOWDARK.ARMOR_BONUS_ATTRIBUTES = {
	dex: "SHADOWDARK.ability_dex",
};

SHADOWDARK.ARMOR_PROPERTIES = {
	shield: "SHADOWDARK.armor.properties.shield",
	disadvStealth: "SHADOWDARK.armor.properties.disadvantage_stealth",
	oneHanded: "SHADOWDARK.armor.properties.one_handed",
	disadvSwim: "SHADOWDARK.armor.properties.disadvantage_swimming",
	noSwim: "SHADOWDARK.armor.properties.no_swimming",
};

SHADOWDARK.BACKSTAB_CLASSES = ["thief"];

SHADOWDARK.CLASS_HD = {
	fighter: "1d8",
	priest: "1d6",
	thief: "1d4",
	wizard: "1d4",
};

SHADOWDARK.CLASSES = {
	fighter: "SHADOWDARK.class.fighter",
	priest: "SHADOWDARK.class.priest",
	thief: "SHADOWDARK.class.thief",
	wizard: "SHADOWDARK.class.wizard",
};

SHADOWDARK.DEFAULTS = {
	BASE_ARMOR_CLASS: 10,
	GEAR_SLOTS: 10,
	FREE_COIN_CARRY: 100,
	LIGHT_TRACKER_UPDATE_INTERVAL_SECS: 30,
};

SHADOWDARK.INVENTORY = {
	GEMS_PER_SLOT: 10,
};

SHADOWDARK.LANGUAGES = {
	celestial: "SHADOWDARK.language.celestial",
	common: "SHADOWDARK.language.common",
	diabolic: "SHADOWDARK.language.diabolic",
	draconic: "SHADOWDARK.language.draconic",
	dwarvish: "SHADOWDARK.language.dwarvish",
	elvish: "SHADOWDARK.language.elvish",
	giant: "SHADOWDARK.language.giant",
	goblin: "SHADOWDARK.language.goblin",
	merran: "SHADOWDARK.language.merran",
	orcish: "SHADOWDARK.language.orcish",
	primordial: "SHADOWDARK.language.primordial",
	reptilian: "SHADOWDARK.language.reptilian",
	sylvan: "SHADOWDARK.language.sylvan",
	thanian: "SHADOWDARK.language.thanian",
};

SHADOWDARK.LIGHT_SETTING_NAMES = {
	lantern: "SHADOWDARK.light_source.lantern",
	lightSpellDouble: "SHADOWDARK.light_source.light_spell.double_near",
	lightSpellNear: "SHADOWDARK.light_source.light_spell.near",
	torch: "SHADOWDARK.light_source.torch",
};

SHADOWDARK.LIGHT_SETTINGS = {
	lantern: {
		alpha: 0.2,
		angle: 360,
		animation: {
			speed: 1,
			intensity: 1,
			reverse: false,
			type: "torch",
		},
		attentuation: 0.5,
		bright: 15,
		color: "#d1c846",
		coloration: 1,
		contrast: 0,
		darkness: {
			min: 0,
			max: 1,
		},
		dim: 60,
		luminosity: 0.5,
		saturation: 0,
		shadows: 0,
	},
	lightSpellDouble: {
		alpha: 0.2,
		angle: 360,
		animation: {
			speed: 1,
			intensity: 1,
			reverse: false,
			type: null,
		},
		attentuation: 0.5,
		bright: 60,
		color: null,
		coloration: 1,
		contrast: 0,
		darkness: {
			min: 0,
			max: 1,
		},
		dim: 0,
		luminosity: 0.5,
		saturation: 0,
		shadows: 0,
	},
	lightSpellNear: {
		alpha: 0.2,
		angle: 360,
		animation: {
			speed: 1,
			intensity: 1,
			reverse: false,
			type: null,
		},
		attentuation: 0.5,
		bright: 30,
		color: null,
		coloration: 1,
		contrast: 0,
		darkness: {
			min: 0,
			max: 1,
		},
		dim: 0,
		luminosity: 0.5,
		saturation: 0,
		shadows: 0,
	},
	torch: {
		alpha: 0.2,
		angle: 360,
		animation: {
			speed: 1,
			intensity: 1,
			reverse: false,
			type: "torch",
		},
		attentuation: 0.5,
		bright: 5,
		color: "#d1c846",
		coloration: 1,
		contrast: 0,
		darkness: {
			min: 0,
			max: 1,
		},
		dim: 30,
		luminosity: 0.5,
		saturation: 0,
		shadows: 0,
	},
};

SHADOWDARK.MAGIC_ITEM_PROPERTIES = {
	"system.ac.base": "SHADOWDARK.talent.type.armor_bonus",
	"system.attackBonus": "SHADOWDARK.item.magic_item.type.attackBonus",
	"system.damage.critMultiplier": "SHADOWDARK.item.magic_item.type.critMultiplier",
	"system.damage.bonus": "SHADOWDARK.item.magic_item.type.damageBonus",
	"system.abilities.cha.value": "SHADOWDARK.ability_cha",
	"system.abilities.con.value": "SHADOWDARK.ability_con",
	"system.abilities.dex.value": "SHADOWDARK.ability_dex",
	"system.abilities.int.value": "SHADOWDARK.ability_int",
	"system.abilities.str.value": "SHADOWDARK.ability_str",
	"system.abilities.wis.value": "SHADOWDARK.ability_wis",
	"system.bonuses.critical.successThreshold": "SHADOWDARK.item.magic_item.type.criticalSuccessThreshold",
	"system.bonuses.critical.failureThreshold": "SHADOWDARK.item.magic_item.type.criticalFailureThreshold",
};

SHADOWDARK.MAGIC_ITEM_EFFECT_TYPES = {
	armorBonus: "SHADOWDARK.talent.type.armor_bonus",
	attackBonus: "SHADOWDARK.item.magic_item.type.attackBonus",
	critMultiplier: "SHADOWDARK.item.magic_item.type.critMultiplier",
	damageBonus: "SHADOWDARK.item.magic_item.type.damageBonus",
	criticalFailureThreshold: "SHADOWDARK.item.magic_item.type.criticalFailureThreshold",
	criticalSuccessThreshold: "SHADOWDARK.item.magic_item.type.criticalSuccessThreshold",
	permanentAbility: "SHADOWDARK.item.magic_item.type.permanentAbility",
	custom: "SHADOWDARK.item.magic_item.type.custom",
};

SHADOWDARK.NPC_ATTACK_TYPES = {
	physical: "SHADOWDARK.npc_attack.type.physical",
	special: "SHADOWDARK.npc_attack.type.special",
};

SHADOWDARK.NPC_MOVES = {
	near: "SHADOWDARK.npc_move.near",
	doulbeNear: "SHADOWDARK.npc_move.double_near", // @todo: Fix typo
};

SHADOWDARK.RANGES = {
	close: "SHADOWDARK.range.close",
	near: "SHADOWDARK.range.near",
	far: "SHADOWDARK.range.far",
};

SHADOWDARK.RANGES_SHORT = {
	close: "SHADOWDARK.range.close_short",
	near: "SHADOWDARK.range.near_short",
	far: "SHADOWDARK.range.far_short",
	self: "SHADOWDARK.range.self_short",
};

SHADOWDARK.SPELLCASTING_ABILITY = {
	priest: "wis",
	wizard: "int",
};

SHADOWDARK.SPELL_CASTER_CLASSES = {
	priest: "SHADOWDARK.spell_caster.priest",
	wizard: "SHADOWDARK.spell_caster.wizard",
};

SHADOWDARK.SPELL_DURATIONS = {
	focus: "SHADOWDARK.spell_duration.focus",
	instant: "SHADOWDARK.spell_duration.instant",
	rounds: "SHADOWDARK.spell_duration.rounds",
	days: "SHADOWDARK.spell_duration.days",
	realTime: "SHADOWDARK.spell_duration.real_time",
};

SHADOWDARK.VARIABLE_SPELL_DURATIONS = ["days", "rounds", "realTime"];

SHADOWDARK.SPELL_RANGES = {
	self: "SHADOWDARK.range.self",
	close: "SHADOWDARK.range.close",
	near: "SHADOWDARK.range.near",
	far: "SHADOWDARK.range.far",
};

SHADOWDARK.TALENT_CLASSES = {
	ancestry: "SHADOWDARK.talent.class.ancestry",
	class: "SHADOWDARK.talent.class.class",
	level: "SHADOWDARK.talent.class.level",
};

SHADOWDARK.TALENT_TYPES = {
	abilityImprovement: "SHADOWDARK.talent.type.ability_improvement",
	armorBonus: "SHADOWDARK.talent.type.armor_bonus",
	armorMastery: "SHADOWDARK.talent.type.armor_mastery",
	backstabDie: "SHADOWDARK.talent.type.backstab_die",
	hpAdvantage: "SHADOWDARK.talent.type.advantage.hp",
	initAdvantage: "SHADOWDARK.talent.type.advantage.initiative",
	meleeAttackBonus: "SHADOWDARK.talent.type.melee_attack_bonus",
	meleeDamageBonus: "SHADOWDARK.talent.type.melee_damage_bonus",
	rangedAttackBonus: "SHADOWDARK.talent.type.ranged_attack_bonus",
	rangedDamageBonus: "SHADOWDARK.talent.type.ranged_damage_bonus",
	spellAdvantage: "SHADOWDARK.talent.type.advantage.spell",
	spellBonus: "SHADOWDARK.talent.type.spell_bonus",
	weaponMastery: "SHADOWDARK.talent.type.weapon_mastery",
	custom: "SHADOWDARK.talent.type.custom",
};

SHADOWDARK.TALENT_PROPERTIES = {
	"system.abilities.cha.bonus": "SHADOWDARK.ability_cha",
	"system.abilities.con.bonus": "SHADOWDARK.ability_con",
	"system.abilities.dex.bonus": "SHADOWDARK.ability_dex",
	"system.abilities.int.bonus": "SHADOWDARK.ability_int",
	"system.abilities.str.bonus": "SHADOWDARK.ability_str",
	"system.abilities.wis.bonus": "SHADOWDARK.ability_wis",
	"system.bonuses.advantage": "SHADOWDARK.talent.type.advantage.title",
	"system.bonuses.meleeAttackBonus": "SHADOWDARK.talent.type.melee_attack_bonus",
	"system.bonuses.rangedAttackBonus": "SHADOWDARK.talent.type.ranged_attack_bonus",
	"system.bonuses.meleeDamageBonus": "SHADOWDARK.talent.type.melee_damage_bonus",
	"system.bonuses.rangedDamageBonus": "SHADOWDARK.talent.type.ranged_damage_bonus",
	"system.bonuses.armorBonus": "SHADOWDARK.talent.type.armor_bonus",
	"system.bonuses.spellcastingCheckBonus": "SHADOWDARK.talent.type.spell_bonus",
	"system.bonuses.weaponMastery": "SHADOWDARK.talent.type.weapon_mastery",
	"system.bonuses.backstabDie": "SHADOWDARK.talent.type.backstab_die",
};

SHADOWDARK.WEAPON_BASE_DAMAGE = {
	d4: "1d4",
	d6: "1d6",
	d8: "1d8",
	d10: "1d10",
	d12: "1d12",
};

SHADOWDARK.WEAPON_BASE_DAMAGE_DIE_ONLY = {
	d4: "d4",
	d6: "d6",
	d8: "d8",
	d10: "d10",
	d12: "d12",
};

SHADOWDARK.WEAPON_BASE_WEAPON = {
	"bastard-sword": "SHADOWDARK.item.weapon.base_weapon.bastard_sword",
	club: "SHADOWDARK.item.weapon.base_weapon.club",
	crossbow: "SHADOWDARK.item.weapon.base_weapon.crossbow",
	dagger: "SHADOWDARK.item.weapon.base_weapon.dagger",
	greataxe: "SHADOWDARK.item.weapon.base_weapon.greataxe",
	greatsword: "SHADOWDARK.item.weapon.base_weapon.greatsword",
	javelin: "SHADOWDARK.item.weapon.base_weapon.javelin",
	longbow: "SHADOWDARK.item.weapon.base_weapon.longbow",
	longsword: "SHADOWDARK.item.weapon.base_weapon.longsword",
	mace: "SHADOWDARK.item.weapon.base_weapon.mace",
	shortbow: "SHADOWDARK.item.weapon.base_weapon.shortbow",
	shortsword: "SHADOWDARK.item.weapon.base_weapon.shortsword",
	spear: "SHADOWDARK.item.weapon.base_weapon.spear",
	staff: "SHADOWDARK.item.weapon.base_weapon.staff",
	wand: "SHADOWDARK.item.weapon.base_weapon.wand",
	warhammer: "SHADOWDARK.item.weapon.base_weapon.warhammer",
};

SHADOWDARK.WEAPON_PROPERTIES = {
	finesse: "SHADOWDARK.weapon.properties.finesse",
	loading: "SHADOWDARK.weapon.properties.loading",
	thrown: "SHADOWDARK.weapon.properties.thrown",
	twoHanded: "SHADOWDARK.weapon.properties.two_handed",
	versatile: "SHADOWDARK.weapon.properties.versatile",
};

SHADOWDARK.WEAPON_TYPES = {
	melee: "SHADOWDARK.weapon.type.melee",
	ranged: "SHADOWDARK.weapon.type.ranged",
};

export default SHADOWDARK;
