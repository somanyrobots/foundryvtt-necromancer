Hooks.once('init', async function() {
  const label = "3/4 Caster";
  CONFIG.DND5E.spellcastingTypes.leveled.progression.threeQuarters = {label: label, divisor: 1.33, roundUp: true};
  CONFIG.DND5E.spellProgression.threeQuarters = label;
  CONFIG.DND5E.featureTypes.class.subtypes.necromanticRite = "Necromantic Rite";
});

Hooks.once('ready', async function() {

});
