// code.ts — runs in Figma sandbox

// Typography tokens (base = 14px, Tailwind-style naming)
const FONT_SIZE = {
  base:    { size: 14, leading: 20 },
  lg:      { size: 16, leading: 22 },
  xl:      { size: 20, leading: 24 },
  heading: { size: 48, leading: 58 },
};
const FONT_WEIGHT = {
  regular: "Regular",
  medium:  "Medium",
  bold:    "Bold",
};

// Bundled logo — embedded as base64 PNG so the plugin works in any file
const _LOGO_B64 = "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";

figma.showUI(__html__, { width: 380, height: 620, title: "Readydoc", themeColors: true });

let _lastComponentSetId = null;

function handleSelectionChange() {
  const cs = getComponentSet();
  if (!cs) {
    figma.ui.postMessage({ type: "SELECTION_CLEARED" });
    return;
  }
  _lastComponentSetId = cs.id;
  const { variants, booleans } = extractProperties(cs);
  const nested = collectNestedComponents(cs);
  figma.ui.postMessage({
    type: "COMPONENT_DATA",
    name: cs.name,
    variants,
    booleans: Object.keys(booleans),
    nested,
  });
}

figma.on("selectionchange", handleSelectionChange);

// ─── helpers ────────────────────────────────────────────────────────────────

function getComponentSet() {
  const sel = figma.currentPage.selection;
  if (!sel.length) return null;
  const node = sel[0];
  if (node.type === "COMPONENT_SET") return node;
  if (node.type === "COMPONENT" && node.parent && node.parent.type === "COMPONENT_SET") return node.parent;
  return null;
}

function cleanKey(key) {
  return key.replace(/#[^#]+$/, "").trim();
}

function extractProperties(cs) {
  const variants = {};
  const booleans = {};
  const booleanKeyMap = {};

  for (const [key, def] of Object.entries(cs.componentPropertyDefinitions)) {
    var clean = cleanKey(key);
    if (def.type === "VARIANT") {
      variants[clean] = def.variantOptions || [];
    } else if (def.type === "BOOLEAN") {
      booleans[clean] = (def.defaultValue !== undefined && def.defaultValue !== null) ? def.defaultValue : true;
      booleanKeyMap[clean] = key;
    }
  }
  return { variants, booleans, booleanKeyMap };
}

// Find a component inside the set that matches a property map
function findVariant(cs, propMap) {
  for (const child of cs.children) {
    if (child.type !== "COMPONENT") continue;
    const props = child.variantProperties;
    if (!props) continue;
    let match = true;
    for (const [k, v] of Object.entries(propMap)) {
      if (props[k] !== v) { match = false; break; }
    }
    if (match) return child;
  }
  return cs.defaultVariant ? cs.defaultVariant : cs.children.find(function(c) { return c.type === "COMPONENT"; });
}

// Walk the default variant and return info about exposed nested components
function collectNestedComponents(cs) {
  var result = [];
  var seen = {};
  function walk(node) {
    if (node.type === "INSTANCE" && node.isExposedInstance) {
      var mc = node.mainComponent;
      if (mc) {
        var source = (mc.parent && mc.parent.type === "COMPONENT_SET") ? mc.parent : mc;
        if (!seen[source.id]) {
          seen[source.id] = true;
          var defs = source.componentPropertyDefinitions || {};
          var props = [];
          for (var k in defs) {
            if (!defs.hasOwnProperty(k)) continue;
            var d = defs[k];
            var label = k.replace(/#[^#]+$/, "").trim();
            if (d.type === "VARIANT" && d.variantOptions && d.variantOptions.length) {
              props.push(label + ": " + d.variantOptions.join(", "));
            } else if (d.type === "BOOLEAN") {
              props.push(label + " (on/off)");
            } else if (d.type === "TEXT") {
              props.push(label + " (text)");
            } else if (d.type === "INSTANCE_SWAP") {
              props.push(label + " (swap)");
            }
          }
          result.push({ name: source.name, props: props });
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) walk(node.children[i]);
    }
  }
  var base = cs.defaultVariant || cs.children.find(function(c) { return c.type === "COMPONENT"; });
  if (base) walk(base);
  return result;
}

// ─── readme builder ─────────────────────────────────────────────────────────

async function loadFonts() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
}

// Deferred boolean overrides — applied after readme is in the document
let _deferredOverrides = [];

// Theme node registry — reset before each build in buildReadme()
let _themed = {
  textPrimary: [],
  textSecondary: [],
  divider: [],
  titleStyle: [],
  headingStyle: [],
  bodyStyle: [],
  labelStyle: []
};

function makeText(chars, fontToken, weight, color) {
  const t = figma.createText();
  t.fontName = { family: "Inter", style: weight };
  t.fontSize = fontToken.size;
  t.lineHeight = { value: fontToken.leading, unit: "PIXELS" };
  t.characters = chars;
  t.fills = [{ type: "SOLID", color: color ? color : { r: 0.067, g: 0.067, b: 0.067 } }];
  t.textAutoResize = "HEIGHT";
  t.layoutAlign = "STRETCH";

  if (fontToken === FONT_SIZE.heading && weight === FONT_WEIGHT.bold) {
    _themed.textPrimary.push(t);
    _themed.titleStyle.push(t);
  } else if (fontToken === FONT_SIZE.xl && weight === FONT_WEIGHT.bold) {
    _themed.textPrimary.push(t);
    _themed.headingStyle.push(t);
  } else if (fontToken === FONT_SIZE.lg && weight === FONT_WEIGHT.medium) {
    _themed.textPrimary.push(t);
    _themed.labelStyle.push(t);
  } else if (fontToken === FONT_SIZE.base && weight === FONT_WEIGHT.regular) {
    _themed.textSecondary.push(t);
    _themed.bodyStyle.push(t);
  }

  return t;
}

function makeDivider() {
  const r = figma.createLine();
  r.resize(100, 0);
  r.strokeWeight = 1;
  r.strokes = [{ type: "SOLID", color: { r: 0.878, g: 0.878, b: 0.878 } }];
  r.fills = [];
  r.layoutAlign = "STRETCH";
  _themed.divider.push(r);
  return r;
}

// One "card" = variant label + description text + component instance
// targetBoolKey: raw property key (with #suffix) of the ONE boolean to show, or null
function makeCard(cs, label, description, propMap, targetBoolKey) {
  const frame = figma.createFrame();
  frame.name = label;
  frame.layoutMode = "VERTICAL";
  frame.itemSpacing = 20;
  frame.paddingLeft = frame.paddingRight = 0;
  frame.paddingTop = frame.paddingBottom = 0;
  frame.fills = [];
  frame.clipsContent = false;

  // Text group (label + description, tight spacing)
  const textGroup = figma.createFrame();
  textGroup.name = "text";
  textGroup.layoutMode = "VERTICAL";
  textGroup.itemSpacing = 4;
  textGroup.fills = [];
  textGroup.clipsContent = false;
  textGroup.layoutAlign = "STRETCH";
  textGroup.counterAxisSizingMode = "FIXED";
  textGroup.primaryAxisSizingMode = "AUTO";
  textGroup.appendChild(makeText(label, FONT_SIZE.base, FONT_WEIGHT.medium, { r: 0.067, g: 0.067, b: 0.067 }));
  textGroup.appendChild(makeText(description, FONT_SIZE.base, FONT_WEIGHT.regular, { r: 0.4, g: 0.4, b: 0.4 }));
  frame.appendChild(textGroup);

  // Component instance
  const variant = findVariant(cs, propMap);
  const inst = variant.createInstance();
  inst.layoutAlign = "INHERIT";
  frame.appendChild(inst);

  // Defer boolean visibility fix — applied after readme is in the document
  if (targetBoolKey) {
    _deferredOverrides.push({ inst: inst, targetKey: targetBoolKey });
  }
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";

  return frame;
}

// Build two-column row frame from two cards
function makeRow(cardA, cardB) {
  const row = figma.createFrame();
  row.name = "row";
  row.layoutMode = "HORIZONTAL";
  row.itemSpacing = 40;
  row.fills = [];
  row.clipsContent = false;
  row.counterAxisSizingMode = "AUTO";
  row.primaryAxisSizingMode = "FIXED";
  row.appendChild(cardA);
  if (cardB) row.appendChild(cardB);
  return row;
}

function makeSection(title, cards) {
  const section = figma.createFrame();
  section.name = title;
  section.layoutMode = "VERTICAL";
  section.itemSpacing = 40;
  section.paddingLeft = section.paddingRight = 0;
  section.paddingTop = section.paddingBottom = 0;
  section.fills = [];
  section.clipsContent = false;

  // Section header: heading + divider with 20px gap
  const sectionHeader = figma.createFrame();
  sectionHeader.name = "section-header";
  sectionHeader.layoutMode = "VERTICAL";
  sectionHeader.itemSpacing = 20;
  sectionHeader.fills = [];
  sectionHeader.clipsContent = false;
  sectionHeader.layoutAlign = "STRETCH";
  sectionHeader.counterAxisSizingMode = "FIXED";
  sectionHeader.primaryAxisSizingMode = "AUTO";
  const heading = makeText(title, FONT_SIZE.xl, FONT_WEIGHT.bold);
  heading.resize(560, heading.height);
  heading.layoutAlign = "INHERIT";
  sectionHeader.appendChild(heading);
  sectionHeader.appendChild(makeDivider());
  section.appendChild(sectionHeader);

  // Determine column count based on widest card
  var maxCardWidth = 0;
  for (var ci = 0; ci < cards.length; ci++) {
    if (cards[ci].width > maxCardWidth) maxCardWidth = cards[ci].width;
  }
  var cols = maxCardWidth <= 476 ? 2 : 1;

  if (cols === 2) {
    for (var i = 0; i < cards.length; i += 2) {
      var cardA = cards[i];
      var cardB = cards[i + 1] ? cards[i + 1] : null;
      const row = makeRow(cardA, cardB);
      cardA.layoutGrow = 1;
      cardA.counterAxisSizingMode = "FIXED";
      if (cardB) { cardB.layoutGrow = 1; cardB.counterAxisSizingMode = "FIXED"; }
      row.layoutAlign = "STRETCH";
      section.appendChild(row);
    }
  } else {
    for (var i = 0; i < cards.length; i++) {
      cards[i].layoutAlign = "STRETCH";
      cards[i].counterAxisSizingMode = "FIXED";
      // Cap text group at 500px (≈11 words at 16px) — card fills full width but text stays readable
      var tg = cards[i].children[0];
      if (tg && tg.type === "FRAME") {
        tg.resize(500, tg.height);
        tg.counterAxisSizingMode = "FIXED";
        tg.layoutAlign = "INHERIT";
      }
      section.appendChild(cards[i]);
    }
  }

  section.primaryAxisSizingMode = "AUTO";
  section.counterAxisSizingMode = "FIXED";
  section.layoutAlign = "STRETCH";
  return section;
}

function makeNotesField() {
  const t = figma.createText();
  t.fontName = { family: "Inter", style: FONT_WEIGHT.regular };
  t.fontSize = FONT_SIZE.base.size;
  t.lineHeight = { value: FONT_SIZE.base.leading, unit: "PIXELS" };
  t.characters = "Add notes here...";
  t.fills = [{ type: "SOLID", color: { r: 0.75, g: 0.75, b: 0.75 } }];
  t.resize(560, t.height);
  t.textAutoResize = "HEIGHT";
  t.layoutAlign = "INHERIT";
  return t;
}

function makeManualSection(title) {
  const section = makeSection(title, []);
  section.appendChild(makeNotesField());
  return section;
}

// ─── theme helpers ───────────────────────────────────────────────────────────

async function applyColorVariable(nodes, variableKey) {
  if (!variableKey || !nodes.length) return;
  try {
    const variable = await figma.variables.importVariableByKeyAsync(variableKey);
    for (const node of nodes) {
      if (!node.fills || !node.fills.length) {
        node.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
      }
      const fills = JSON.parse(JSON.stringify(node.fills));
      fills[0] = figma.variables.setBoundVariableForPaint(fills[0], "color", variable);
      node.fills = fills;
    }
  } catch (e) {
    // silently fall back to hardcoded colors
  }
}

async function applyTextStyle(nodes, styleKey) {
  if (!styleKey || !nodes.length) return;
  try {
    const style = await figma.importStyleByKeyAsync(styleKey);
    for (const node of nodes) {
      node.textStyleId = style.id;
    }
  } catch (e) {
    // silently fall back to manual font properties
  }
}

async function applyTheme(readme, themeConfig) {
  if (!themeConfig) return;
  const colors = themeConfig.colors ? themeConfig.colors : {};
  const textStyles = themeConfig.textStyles ? themeConfig.textStyles : {};

  if (colors.background)    await applyColorVariable([readme], colors.background);
  if (colors.textPrimary)   await applyColorVariable(_themed.textPrimary, colors.textPrimary);
  if (colors.textSecondary) await applyColorVariable(_themed.textSecondary, colors.textSecondary);
  if (colors.divider)       await applyColorVariable(_themed.divider, colors.divider);

  if (textStyles.title)          await applyTextStyle(_themed.titleStyle, textStyles.title);
  if (textStyles.sectionHeading) await applyTextStyle(_themed.headingStyle, textStyles.sectionHeading);
  if (textStyles.body)           await applyTextStyle(_themed.bodyStyle, textStyles.body);
  if (textStyles.label)          await applyTextStyle(_themed.labelStyle, textStyles.label);
}

// ─── boolean-like variant helpers ───────────────────────────────────────────

// All k-size subsets of arr
function getCombinations(arr, k) {
  if (k === 0) return [[]];
  if (k > arr.length) return [];
  var result = [];
  for (var i = 0; i <= arr.length - k; i++) {
    var tails = getCombinations(arr.slice(i + 1), k - 1);
    for (var j = 0; j < tails.length; j++) {
      result.push([arr[i]].concat(tails[j]));
    }
  }
  return result;
}

function getTrueVal(vals) {
  for (var i = 0; i < vals.length; i++) { if (vals[i].toLowerCase() === "true") return vals[i]; }
  return "True";
}
function getFalseVal(vals) {
  for (var i = 0; i < vals.length; i++) { if (vals[i].toLowerCase() === "false") return vals[i]; }
  return "False";
}

// ─── main build ─────────────────────────────────────────────────────────────

async function buildReadme(cs, descriptions, manualSections, themeConfig, cornerRadius) {
  await loadFonts();

  _deferredOverrides = [];

  // Reset theme node registry
  _themed = {
    textPrimary: [],
    textSecondary: [],
    divider: [],
    titleStyle: [],
    headingStyle: [],
    bodyStyle: [],
    labelStyle: []
  };

  const extracted = extractProperties(cs);
  const variants = extracted.variants;
  const booleans = extracted.booleans;
  const booleanKeyMap = extracted.booleanKeyMap;

  // ── Build all cards first to measure component widths ─────────────────
  var variantDescriptions = (descriptions && descriptions.variants) ? descriptions.variants : {};
  var allSections = [];

  // Detect "boolean-like" variant properties: exactly 2 values "True"/"False"
  var boolLikeVariants = {};
  for (var pn in variants) {
    if (!variants.hasOwnProperty(pn)) continue;
    var pVals = variants[pn];
    if (pVals.length === 2) {
      var hasT = false, hasF = false;
      for (var pvi = 0; pvi < pVals.length; pvi++) {
        if (pVals[pvi].toLowerCase() === "true") hasT = true;
        if (pVals[pvi].toLowerCase() === "false") hasF = true;
      }
      if (hasT && hasF) boolLikeVariants[pn] = true;
    }
  }
  var boolLikeKeys = Object.keys(boolLikeVariants);

  // ── Regular (non-boolean-like) variant sections ──────────────────────────
  for (var propName in variants) {
    if (!variants.hasOwnProperty(propName)) continue;
    if (boolLikeVariants[propName]) continue; // handled below
    var values = variants[propName] || [];
    if (!values.length) continue;
    var sCards = [];
    for (var vIdx = 0; vIdx < values.length; vIdx++) {
      var v = values[vIdx];
      var propBlock = variantDescriptions[propName] ? variantDescriptions[propName] : null;
      var desc = (propBlock && propBlock[v]) ? propBlock[v] : "Component description";
      var propMap = {};
      // Seed with defaultVariant values so other properties stay fixed
      if (cs.defaultVariant && cs.defaultVariant.variantProperties) {
        var dvp = cs.defaultVariant.variantProperties;
        for (var dpk in dvp) { if (dvp.hasOwnProperty(dpk)) propMap[dpk] = dvp[dpk]; }
      }
      propMap[propName] = v;
      sCards.push(makeCard(cs, v, desc, propMap, null));
    }
    if (sCards.length) allSections.push({ title: propName, cards: sCards });
  }

  // ── Boolean-like variant sections: combinatorial (1 active, 2 active, …) ─
  if (boolLikeKeys.length) {
    for (var count = 1; count <= boolLikeKeys.length; count++) {
      var combos = getCombinations(boolLikeKeys, count);
      var combCards = [];
      for (var ci = 0; ci < combos.length; ci++) {
        var combo = combos[ci];
        // propMap: all bool-like → False, then combo members → True
        var propMap = {};
        // Seed with defaultVariant values so non-boolean-like properties stay fixed
        if (cs.defaultVariant && cs.defaultVariant.variantProperties) {
          var dvp = cs.defaultVariant.variantProperties;
          for (var dpk in dvp) { if (dvp.hasOwnProperty(dpk)) propMap[dpk] = dvp[dpk]; }
        }
        for (var bk = 0; bk < boolLikeKeys.length; bk++) {
          propMap[boolLikeKeys[bk]] = getFalseVal(variants[boolLikeKeys[bk]]);
        }
        for (var tk = 0; tk < combo.length; tk++) {
          propMap[combo[tk]] = getTrueVal(variants[combo[tk]]);
        }
        // Label: active property names joined
        var label = combo.join(" + ");
        // Description: join individual True descriptions
        var descParts = [];
        for (var dk = 0; dk < combo.length; dk++) {
          var pb = variantDescriptions[combo[dk]];
          var tv = getTrueVal(variants[combo[dk]]);
          descParts.push((pb && pb[tv]) ? pb[tv] : combo[dk]);
        }
        var desc = descParts.join(" / ");
        combCards.push(makeCard(cs, label, desc, propMap, null));
      }
      var countWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
      var countWord = count <= 10 ? countWords[count] : String(count);
      var secTitle = countWord + (count === 1 ? " active state" : " active states");
      allSections.push({ title: secTitle, cards: combCards });
    }
  }

  var boolKeys = Object.keys(booleans);
  if (boolKeys.length) {
    var boolCards = [];
    for (var bi = 0; bi < boolKeys.length; bi++) {
      var bKey = boolKeys[bi];
      var boolSec = descriptions && descriptions.booleans && descriptions.booleans[bKey] ? descriptions.booleans[bKey] : null;
      var bDesc = boolSec ? (boolSec["true"] || "Component description") : "Component description";
      var targetRawKey = booleanKeyMap[bKey] || bKey;
      boolCards.push(makeCard(cs, bKey, bDesc, {}, targetRawKey));
    }
    allSections.push({ title: "Boolean options", cards: boolCards });
  }


  // ── Calculate readme width from max component width ───────────────────
  var globalMaxInstW = 0;
  for (var si = 0; si < allSections.length; si++) {
    var sc = allSections[si].cards;
    for (var ci = 0; ci < sc.length; ci++) {
      if (sc[ci].width > globalMaxInstW) globalMaxInstW = sc[ci].width;
    }
  }
  // 2-col when component ≤ 476px (half of 992px content minus 40px gap), 1-col otherwise
  var globalCols = globalMaxInstW <= 476 ? 2 : 1;
  // Content width: min 992px (= 1120px doc − 2×64px padding)
  var contentW = globalCols === 2
    ? Math.max(2 * globalMaxInstW + 40, 992)
    : Math.max(globalMaxInstW, 992);

  // Root readme frame
  const readme = figma.createFrame();
  readme.name = cs.name + " / Readme";
  readme.layoutMode = "VERTICAL";
  readme.itemSpacing = 80;
  readme.paddingLeft = readme.paddingRight = 64;
  readme.paddingTop = 56;
  readme.paddingBottom = 80;
  readme.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } }];
  readme.cornerRadius = (typeof cornerRadius === "number") ? cornerRadius : 32;
  readme.clipsContent = true;
  readme.resize(contentW + 128, 100);
  readme.counterAxisSizingMode = "FIXED";

  // ── Doc header: logo (left) + Documentation link (right) ─────────────────
  const docHeader = figma.createFrame();
  docHeader.name = "doc-header";
  docHeader.layoutMode = "HORIZONTAL";
  docHeader.primaryAxisAlignItems = "SPACE_BETWEEN";
  docHeader.counterAxisAlignItems = "CENTER";
  docHeader.primaryAxisSizingMode = "FIXED";
  docHeader.counterAxisSizingMode = "AUTO";
  docHeader.fills = [];
  docHeader.clipsContent = false;
  docHeader.layoutAlign = "STRETCH";

  // Logo — bundled PNG, works in any file
  const logoImg = figma.createImage(figma.base64Decode(_LOGO_B64));
  const logoRect = figma.createRectangle();
  logoRect.name = "ic-128-plugin-logo";
  logoRect.resize(56, 56);
  logoRect.fills = [{ type: "IMAGE", imageHash: logoImg.hash, scaleMode: "FILL" }];
  docHeader.appendChild(logoRect);

  // Right group: "Documentation" text + external link icon
  const docsRight = figma.createFrame();
  docsRight.name = "docs-link";
  docsRight.layoutMode = "HORIZONTAL";
  docsRight.itemSpacing = 2;
  docsRight.counterAxisAlignItems = "CENTER";
  docsRight.primaryAxisSizingMode = "AUTO";
  docsRight.counterAxisSizingMode = "AUTO";
  docsRight.fills = [];
  docsRight.clipsContent = false;

  const docsText = figma.createText();
  docsText.fontName = { family: "Inter", style: FONT_WEIGHT.medium };
  docsText.fontSize = FONT_SIZE.lg.size;
  docsText.lineHeight = { value: FONT_SIZE.lg.leading, unit: "PIXELS" };
  docsText.characters = "Documentation";
  docsText.fills = [{ type: "SOLID", color: { r: 0.094, g: 0.094, b: 0.106 } }];
  docsText.textDecoration = "UNDERLINE";
  docsText.textAutoResize = "WIDTH_AND_HEIGHT";
  docsRight.appendChild(docsText);

  // External link arrow — Unicode ↗ (U+2197), no image needed
  const extArrow = figma.createText();
  extArrow.fontName = { family: "Inter", style: FONT_WEIGHT.medium };
  extArrow.fontSize = FONT_SIZE.lg.size;
  extArrow.characters = "↗";
  extArrow.fills = [{ type: "SOLID", color: { r: 0.094, g: 0.094, b: 0.106 } }];
  extArrow.textAutoResize = "WIDTH_AND_HEIGHT";
  docsRight.appendChild(extArrow);

  docHeader.appendChild(docsRight);
  readme.appendChild(docHeader);

  // Title block
  const titleFrame = figma.createFrame();
  titleFrame.layoutMode = "VERTICAL";
  titleFrame.itemSpacing = 32;
  titleFrame.fills = [];
  titleFrame.clipsContent = false;
  titleFrame.layoutAlign = "STRETCH";
  titleFrame.counterAxisSizingMode = "FIXED";
  const titleNode = makeText(cs.name, FONT_SIZE.heading, FONT_WEIGHT.bold);
  titleNode.resize(720, titleNode.height);
  titleNode.layoutAlign = "INHERIT";
  titleFrame.appendChild(titleNode);
  const subtitleText = descriptions.componentDescription ? descriptions.componentDescription : (cs.name + " is a UI component.");
  const subtitle = makeText(subtitleText, FONT_SIZE.lg, FONT_WEIGHT.regular, { r: 0, g: 0, b: 0 });
  subtitle.resize(720, subtitle.height);
  subtitle.layoutAlign = "INHERIT";
  titleFrame.appendChild(subtitle);
  titleFrame.primaryAxisSizingMode = "AUTO";
  readme.appendChild(titleFrame);

  // ── Append sections ───────────────────────────────────────────────────
  for (var sj = 0; sj < allSections.length; sj++) {
    readme.appendChild(makeSection(allSections[sj].title, allSections[sj].cards));
  }

  // ── Manual sections ───────────────────────────────────────────────────
  if (manualSections && manualSections.length) {
    for (const sectionTitle of manualSections) {
      readme.appendChild(makeManualSection(sectionTitle));
    }
  }

  // ── Footer ────────────────────────────────────────────────────────────────
  const footer = figma.createFrame();
  footer.name = "_FooterDocs";
  footer.layoutMode = "VERTICAL";
  footer.itemSpacing = 40;
  footer.fills = [];
  footer.clipsContent = false;
  footer.layoutAlign = "STRETCH";
  footer.counterAxisSizingMode = "FIXED";
  footer.primaryAxisSizingMode = "AUTO";
  footer.appendChild(makeDivider());
  const footerText = figma.createText();
  footerText.fontName = { family: "Inter", style: FONT_WEIGHT.medium };
  footerText.fontSize = FONT_SIZE.lg.size;
  footerText.lineHeight = { value: FONT_SIZE.lg.leading, unit: "PIXELS" };
  footerText.characters = "Created with <3 by Readydoc";
  footerText.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
  footerText.textAutoResize = "WIDTH_AND_HEIGHT";
  footer.appendChild(footerText);
  readme.appendChild(footer);

  readme.primaryAxisSizingMode = "AUTO";

  // Position readme to the right of the component set
  var bbox = cs.absoluteBoundingBox;
  const csX = bbox ? bbox.x : cs.x;
  const csW = bbox ? bbox.width : cs.width;
  readme.x = csX + csW + 80;
  readme.y = bbox ? bbox.y : cs.y;

  figma.currentPage.appendChild(readme);

  // ── Apply deferred boolean visibility (instance must be in document) ────
  // setProperties is unreliable for boolean overrides; instead we walk the
  // instance tree and directly set node.visible based on componentPropertyReferences
  for (var di = 0; di < _deferredOverrides.length; di++) {
    var dInst = _deferredOverrides[di].inst;
    var dTarget = _deferredOverrides[di].targetKey;
    (function walkBool(node) {
      try {
        var refs = node.componentPropertyReferences;
        if (refs && refs.visible) {
          var cProps = dInst.componentProperties;
          if (cProps && cProps[refs.visible] && cProps[refs.visible].type === "BOOLEAN") {
            node.visible = (refs.visible === dTarget);
          }
        }
      } catch (_) {}
      if (node.children) {
        for (var ci = 0; ci < node.children.length; ci++) {
          walkBool(node.children[ci]);
        }
      }
    })(dInst);
  }
  _deferredOverrides = [];

  // ── Apply theme (variables + text styles) ───────────────────────────────
  await applyTheme(readme, themeConfig);

  figma.viewport.scrollAndZoomIntoView([readme]);
}

// ─── text style collector ───────────────────────────────────────────────────
// Returns local text styles + any library styles used in nodes on the current page.
// figma.getLocalTextStyles() only sees file-local styles; library styles only appear
// when we look up the textStyleId on actual text nodes.
function collectTextStyles() {
  var styleMap = {};
  var styles = [];

  var localStyles = figma.getLocalTextStyles();
  for (var i = 0; i < localStyles.length; i++) {
    var s = localStyles[i];
    if (!styleMap[s.key]) {
      styleMap[s.key] = true;
      styles.push({ key: s.key, name: s.name });
    }
  }

  function walkNode(node) {
    if (node.type === "TEXT") {
      var sid = node.textStyleId;
      if (sid && typeof sid === "string" && !styleMap[sid]) {
        var style = figma.getStyleById(sid);
        if (style && style.type === "TEXT" && style.key) {
          styleMap[sid] = true;
          styles.push({ key: style.key, name: style.name });
        }
      }
    }
    if (node.children) {
      for (var j = 0; j < node.children.length; j++) {
        walkNode(node.children[j]);
      }
    }
  }

  walkNode(figma.currentPage);
  return styles;
}

// ─── message bus ────────────────────────────────────────────────────────────

const CONFIG_KEY = "plugin_config";

// load saved key on startup — always send so UI knows loading is complete
figma.clientStorage.getAsync("claude_api_key").then(function(key) {
  figma.ui.postMessage({ type: "SAVED_KEY", key: key || '' });
});

// load saved config on startup
figma.clientStorage.getAsync(CONFIG_KEY).then(function(cfg) {
  if (cfg) figma.ui.postMessage({ type: "SAVED_CONFIG", config: cfg });
});

figma.ui.onmessage = async function(msg) {
  if (msg.type === "UI_READY") {
    handleSelectionChange();
    return;
  }

  if (msg.type === "SAVE_KEY") {
    figma.clientStorage.setAsync("claude_api_key", msg.key).then(function() {
      figma.ui.postMessage({ type: "KEY_SAVED" });
    });
    return;
  }

  if (msg.type === "SAVE_CONFIG") {
    figma.clientStorage.setAsync(CONFIG_KEY, msg.config).then(function() {
      figma.ui.postMessage({ type: "CONFIG_SAVED" });
    });
    return;
  }

  if (msg.type === "BUILD_README") {
    var cs = getComponentSet();
    if (!cs && _lastComponentSetId) {
      var node = figma.getNodeById(_lastComponentSetId);
      if (node && node.type === "COMPONENT_SET") cs = node;
    }
    if (!cs) return;
    try {
      await buildReadme(cs, msg.descriptions, msg.manualSections, msg.themeConfig, msg.cornerRadius);
      figma.ui.postMessage({ type: "DONE" });
    } catch (e) {
      figma.ui.postMessage({ type: "ERROR", message: String(e) });
    }
  }

  // Returns available variable collections (local + library) and text styles
  if (msg.type === "GET_THEME_OPTIONS") {
    try {
      figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().then(function(libCollections) {
        const localCollections = figma.variables.getLocalVariableCollections();
        figma.ui.postMessage({
          type: "THEME_OPTIONS",
          libCollections: libCollections,
          localCollections: localCollections.map(function(c) {
            return { key: c.id, name: c.name, libraryName: "Local" };
          }),
          textStyles: collectTextStyles()
        });
      }).catch(function(e) {
        // teamlibrary not available (e.g. drafts) — return local only
        const localCollections = figma.variables.getLocalVariableCollections();
        figma.ui.postMessage({
          type: "THEME_OPTIONS",
          libCollections: [],
          localCollections: localCollections.map(function(c) {
            return { key: c.id, name: c.name, libraryName: "Local" };
          }),
          textStyles: collectTextStyles()
        });
      });
    } catch (e) {
      figma.ui.postMessage({ type: "ERROR", message: String(e) });
    }
    return;
  }

  // Returns COLOR variables from a specific collection (library or local)
  if (msg.type === "GET_VARIABLES_IN_COLLECTION") {
    try {
      figma.teamLibrary.getVariablesInLibraryCollectionAsync(msg.collectionKey).then(function(vars) {
        figma.ui.postMessage({
          type: "COLLECTION_VARIABLES",
          collectionKey: msg.collectionKey,
          variables: vars.filter(function(v) {
            return v.resolvedType === "COLOR";
          }).map(function(v) {
            return { key: v.key, name: v.name };
          })
        });
      }).catch(function(e) {
        // Local collection — use getLocalVariables
        const allVars = figma.variables.getLocalVariables("COLOR");
        figma.ui.postMessage({
          type: "COLLECTION_VARIABLES",
          collectionKey: msg.collectionKey,
          variables: allVars.filter(function(v) {
            return v.variableCollectionId === msg.collectionKey;
          }).map(function(v) {
            return { key: v.key, name: v.name };
          })
        });
      });
    } catch (e) {
      figma.ui.postMessage({ type: "ERROR", message: String(e) });
    }
    return;
  }

  if (msg.type === "CLOSE") {
    figma.closePlugin();
  }
};
