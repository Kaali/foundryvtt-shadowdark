import SHADOWDARK from "./src/config.mjs";
import loadTemplates from "./src/templates.mjs";
import performDataMigration from "./src/migration.mjs";
import registerHandlebarsHelpers from "./src/handlebars.mjs";
import registerSystemSettings from "./src/settings.mjs";
import log from "./src/utils/logging.mjs";

import * as chat from "./src/chat/_module.mjs";
import * as apps from "./src/apps/_module.mjs";
import * as dice from "./src/dice/_module.mjs";
import * as documents from "./src/documents/_module.mjs";
import * as sheets from "./src/sheets/_module.mjs";

import {HooksSD, HooksInitSD} from "./src/hooks.mjs";
import {ModuleArt} from "./src/utils/module-art.mjs";
import {ToursSD} from "./src/tours.mjs";

import "./src/testing/index.mjs";

/* -------------------------------------------- */
/*  Define Module Structure                     */
/* -------------------------------------------- */

globalThis.shadowdark = {
	apps,
	config: SHADOWDARK,
	defaults: SHADOWDARK.DEFAULTS,
	dice,
	documents,
	log,
	sheets,
};

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

// A hook event that fires as Foundry is initializing, right before any
// initialization tasks have begun.
//
Hooks.once("init", () => {
	globalThis.shadowdark = game.shadowdark = Object.assign(
		game.system,
		globalThis.shadowdark
	);

	shadowdark.log("Initialising the Shadowdark RPG Game System");

	game.shadowdark = {
		config: SHADOWDARK,
		lightSourceTracker: new apps.LightSourceTrackerSD(),
	};

	CONFIG.SHADOWDARK = SHADOWDARK;
	CONFIG.Actor.documentClass = documents.ActorSD;
	CONFIG.Item.documentClass = documents.ItemSD;
	CONFIG.DiceSD = dice.DiceSD;

	registerHandlebarsHelpers();
	registerSystemSettings();
	loadTemplates();

	game.shadowdark.moduleArt = new ModuleArt();

	// Register sheet application classes
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("shadowdark", sheets.PlayerSheetSD, {
		types: ["Player"],
		makeDefault: true,
		label: "SHADOWDARK.sheet.class.player",
	});

	Actors.registerSheet("shadowdark", sheets.NpcSheetSD, {
		types: ["NPC"],
		makeDefault: true,
		label: "SHADOWDARK.sheet.class.npc",
	});

	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("shadowdark", sheets.ItemSheetSD, {
		makeDefault: true,
		label: "SHADOWDARK.sheet.class.item",
	});

	// Attack init hooks
	HooksInitSD.attach();
});

/* -------------------------------------------- */
/*  Foundry VTT Ready                           */
/* -------------------------------------------- */

// A hook event that fires when the game is fully ready.
//
Hooks.on("ready", () => {
	// Check to see if any data migrations need to be run, and then run them
	performDataMigration();

	HooksSD.attach();
	ToursSD.register();

	chat.messages.welcomeMessage();

	shadowdark.log("Game Ready");
});

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

// A hook event that fires when Foundry has finished initializing but before
// the game state has been set up. Fires before any Documents, UI applications,
// or the Canvas have been initialized.
//
Hooks.once("setup", () => {
	shadowdark.log("Setup Hook");

	game.shadowdark.moduleArt.registerModuleArt();

	// Localize all the strings in the game config in advance
	//
	for (const obj in game.shadowdark.config) {
		if ({}.hasOwnProperty.call(game.shadowdark.config, obj)) {
			for (const el in game.shadowdark.config[obj]) {
				if ({}.hasOwnProperty.call(game.shadowdark.config[obj], el)) {
					if (typeof game.shadowdark.config[obj][el] === "string") {
						game.shadowdark.config[obj][el] = game.i18n.localize(
							game.shadowdark.config[obj][el]
						);
					}
				}
			}
		}
	}
});
