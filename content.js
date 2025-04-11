// Content script loaded message
console.log("3RVision content script loaded");

// Eco-friendly search terms to append
const ecoSearchTerms = [
  "eco-friendly",
  "sustainable",
  "biodegradable",
  "recyclable",
  "compostable",
  "organic",
  "natural",
  "renewable",
  "plastic-free",
  "zero waste",
  "recycled",
  "bio-based",
  "eco-conscious",
  "environmentally friendly",
  "green",
  "carbon neutral",
  "eco-certified",
  "low impact",
  "energy efficient",
  "ethically sourced",
];

// Material analysis configuration
const materialConfig = {
  ecoFriendlyMaterials: {
    // Natural Fibers (Clothing)
    "organic cotton": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    bamboo: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    hemp: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    linen: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    jute: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    ramie: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    sisal: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "coconut fiber": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "pineapple leather": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "mushroom leather": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "apple leather": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "cork fabric": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "seaweed fiber": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "banana fiber": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "soy fiber": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "milk fiber": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },

    // Recycled Materials
    "recycled polyester": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled cotton": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },
    "recycled nylon": {
      score: 0.8,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled wool": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },
    "recycled paper": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },
    "recycled glass": {
      score: 1.0,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled metal": {
      score: 1.0,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled plastic": {
      score: 0.8,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled rubber": {
      score: 0.8,
      category: "recycled",
      recyclable: true,
      biodegradable: false,
    },
    "recycled fabric": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },
    "recycled denim": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },
    "recycled leather": {
      score: 0.9,
      category: "recycled",
      recyclable: true,
      biodegradable: true,
    },

    // Sustainable Alternatives
    tencel: {
      score: 1.0,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    modal: {
      score: 0.9,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    lyocell: {
      score: 1.0,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    cupro: {
      score: 0.9,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    seacell: {
      score: 1.0,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    qmonos: {
      score: 1.0,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    "bio-based plastic": {
      score: 0.8,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },
    "plant-based plastic": {
      score: 0.8,
      category: "sustainable",
      recyclable: true,
      biodegradable: true,
    },

    // Natural Materials
    wool: {
      score: 0.8,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    silk: {
      score: 0.7,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    cork: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    wood: {
      score: 0.8,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    rattan: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    seagrass: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "bamboo wood": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "coconut shell": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "palm leaf": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "corn husk": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "rice husk": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    "wheat straw": {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },
    bagasse: {
      score: 1.0,
      category: "natural",
      recyclable: true,
      biodegradable: true,
    },

    // Metals and Minerals
    "stainless steel": {
      score: 0.9,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    aluminum: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    copper: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    brass: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    stone: {
      score: 0.9,
      category: "mineral",
      recyclable: true,
      biodegradable: false,
    },
    ceramic: {
      score: 0.8,
      category: "mineral",
      recyclable: true,
      biodegradable: false,
    },
    "cast iron": {
      score: 0.9,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    titanium: {
      score: 0.9,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    bronze: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    silver: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },
    gold: {
      score: 0.8,
      category: "metal",
      recyclable: true,
      biodegradable: false,
    },

    // Paper and Book Materials
    "fsc certified paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "recycled paperboard": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "tree-free paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "stone paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "bamboo paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "sugarcane paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },
    "hemp paper": {
      score: 1.0,
      category: "paper",
      recyclable: true,
      biodegradable: true,
    },

    // Kitchen and Household Utensils
    "bamboo utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },
    "wooden utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },
    "stainless steel utensils": {
      score: 0.9,
      category: "utensils",
      recyclable: true,
      biodegradable: false,
    },
    "glass utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: false,
    },
    "ceramic utensils": {
      score: 0.8,
      category: "utensils",
      recyclable: true,
      biodegradable: false,
    },
    "silicone utensils": {
      score: 0.7,
      category: "utensils",
      recyclable: true,
      biodegradable: false,
    },
    "coconut shell utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },
    "cornstarch utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },
    "wheat straw utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },
    "bagasse utensils": {
      score: 1.0,
      category: "utensils",
      recyclable: true,
      biodegradable: true,
    },

    // Household Items
    "natural rubber": {
      score: 0.9,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "organic latex": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "coconut coir": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    loofah: {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "natural sponge": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    beeswax: {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "soy wax": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "coconut wax": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "natural clay": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    terracotta: {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
    "natural stone": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: false,
    },
    "bamboo charcoal": {
      score: 1.0,
      category: "household",
      recyclable: true,
      biodegradable: true,
    },
  },

  nonEcoFriendlyMaterials: {
    // Plastics and Synthetics
    polyester: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    nylon: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    acrylic: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polyurethane: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    pvc: {
      score: -1.0,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    plastic: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    synthetic: {
      score: -0.7,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polypropylene: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polyethylene: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    pet: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    vinyl: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    spandex: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    elastane: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polyamide: {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    acrylonitrile: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polycarbonate: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    polystyrene: {
      score: -0.9,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    "polyvinyl chloride": {
      score: -1.0,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },
    "polyethylene terephthalate": {
      score: -0.8,
      category: "synthetic",
      recyclable: false,
      biodegradable: false,
    },

    // Harmful Chemicals
    formaldehyde: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    phthalates: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    bpa: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    pfas: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    pfoa: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    parabens: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    sulfates: {
      score: -0.8,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    triclosan: {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    "synthetic fragrances": {
      score: -0.8,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    "artificial dyes": {
      score: -0.8,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    "heavy metals": {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    chlorine: {
      score: -0.9,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    bleach: {
      score: -0.9,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    ammonia: {
      score: -0.9,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
    "synthetic pesticides": {
      score: -1.0,
      category: "chemical",
      recyclable: false,
      biodegradable: false,
    },
  },

  // Scoring weights
  scoringWeights: {
    materialScore: 0.6,
    recyclability: 0.2,
    biodegradability: 0.2,
  },

  // Minimum eco-friendliness score to consider a product eco-friendly
  minEcoScore: 0.5,
};

// Function to extract material information from product text
function extractMaterialInfo(text) {
  console.log("Extracting materials from text:", text.substring(0, 200)); // Log first 200 chars
  const materialInfo = {
    materials: [],
    percentages: [],
  };

  // Normalize text: lowercase, remove extra spaces
  const normalizedText = text.toLowerCase().replace(/\s+/g, " ");

  // Common patterns for material information
  const patterns = [
    // Pattern for "100% cotton", "80% recycled polyester"
    /(\d{1,3})\s*%\s*([a-zA-Z][a-zA-Z\s-]*[a-zA-Z])/g,
    // Pattern for "material: stainless steel", "made of bamboo"
    /(?:material|made of|contains|composed of|constructed from|fabric):\s*([a-zA-Z][a-zA-Z\s-]*[a-zA-Z])/gi,
    // Pattern for "cotton blend", "polyester blend"
    /([a-zA-Z][a-zA-Z\s-]*[a-zA-Z])\s*blend/gi,
    // Pattern for "organic cotton", "recycled polyester"
    /(organic|recycled|stainless|food-grade|grade)\s+([a-zA-Z][a-zA-Z\s-]*[a-zA-Z])/gi,
    // Pattern to find standalone materials mentioned (like "steel", "wood")
    /(?:\b)(stainless steel|steel|aluminum|copper|brass|wood|bamboo|ceramic|glass|silicone|plastic|cotton|polyester|nylon|wool|silk)(?:\b)/gi,
  ];

  // Keep track of found materials to avoid duplicates
  const foundMaterials = new Set();

  patterns.forEach((pattern, patternIndex) => {
    let match;
    while ((match = pattern.exec(normalizedText)) !== null) {
      let material = "";
      let percentage = 100; // Default percentage

      if (patternIndex === 0) {
        // Percentage pattern
        percentage = parseInt(match[1]);
        material = match[2].trim();
      } else if (patternIndex === 1 || patternIndex === 2) {
        // Material keyword patterns
        material = match[1].trim();
      } else if (patternIndex === 3) {
        // Modifier + material pattern
        material = (match[1] + " " + match[2]).trim(); // e.g., "organic cotton", "stainless steel"
      } else if (patternIndex === 4) {
        // Standalone material pattern
        material = match[1].trim();
      }

      // Standardize common variations (e.g., steel -> stainless steel if context available)
      if (material === "steel" && normalizedText.includes("stainless")) {
        material = "stainless steel";
      }

      if (material && !foundMaterials.has(material)) {
        // Check if this material is known
        const isKnownMaterial =
          Object.keys(materialConfig.ecoFriendlyMaterials).some((m) =>
            material.includes(m)
          ) ||
          Object.keys(materialConfig.nonEcoFriendlyMaterials).some((m) =>
            material.includes(m)
          );

        if (isKnownMaterial) {
          console.log(`Found material: ${material}, Percentage: ${percentage}`);
          materialInfo.materials.push(material);
          materialInfo.percentages.push(percentage);
          foundMaterials.add(material);
        }
      }
    }
  });

  // If no materials found via patterns, check common single words from config
  if (materialInfo.materials.length === 0) {
    const allKnownMaterials = [
      ...Object.keys(materialConfig.ecoFriendlyMaterials),
      ...Object.keys(materialConfig.nonEcoFriendlyMaterials),
    ];
    allKnownMaterials.forEach((knownMaterial) => {
      if (
        normalizedText.includes(knownMaterial) &&
        !foundMaterials.has(knownMaterial)
      ) {
        console.log(`Found fallback material: ${knownMaterial}`);
        materialInfo.materials.push(knownMaterial);
        materialInfo.percentages.push(100); // Default percentage
        foundMaterials.add(knownMaterial);
      }
    });
  }

  console.log("Extracted Material Info:", materialInfo);
  return materialInfo;
}

// Function to calculate eco-friendliness score with enhanced metrics
function calculateEcoScore(materialInfo) {
  let totalScore = 0;
  let totalWeight = 0;
  let recyclableCount = 0;
  let biodegradableCount = 0;
  let totalMaterials = 0;

  materialInfo.materials.forEach((material, index) => {
    const percentage = materialInfo.percentages[index] || 100;
    let materialData = null;
    let materialScore = 0;
    let isRecyclable = false;
    let isBiodegradable = false;
    const lowerMaterial = material.toLowerCase();

    // Check eco-friendly materials
    for (const [ecoMaterial, data] of Object.entries(
      materialConfig.ecoFriendlyMaterials
    )) {
      if (lowerMaterial.includes(ecoMaterial.toLowerCase())) {
        materialData = data;
        materialScore = data.score;
        isRecyclable = data.recyclable;
        isBiodegradable = data.biodegradable;
        break;
      }
    }

    // Check non-eco-friendly materials
    if (!materialData) {
      for (const [nonEcoMaterial, data] of Object.entries(
        materialConfig.nonEcoFriendlyMaterials
      )) {
        if (lowerMaterial.includes(nonEcoMaterial.toLowerCase())) {
          materialData = data;
          materialScore = data.score;
          isRecyclable = data.recyclable;
          isBiodegradable = data.biodegradable;
          break;
        }
      }
    }

    // Special handling for wood products if not found in our config
    if (
      !materialData &&
      (lowerMaterial.includes("wood") ||
        lowerMaterial.includes("wooden") ||
        lowerMaterial.includes("bamboo") ||
        lowerMaterial.includes("natural"))
    ) {
      materialScore = 0.9; // High eco score for wood
      isRecyclable = true;
      isBiodegradable = true;
    }

    // Update counts
    if (isRecyclable) recyclableCount++;
    if (isBiodegradable) biodegradableCount++;
    totalMaterials++;

    // Calculate weighted score
    const weight = percentage / 100;
    totalScore +=
      materialScore * weight * materialConfig.scoringWeights.materialScore;
    totalWeight += weight;
  });

  // Handle edge case where no materials were found
  if (totalMaterials === 0) {
    return 0.5; // Neutral score
  }

  // Calculate additional scores
  const recyclabilityScore =
    (recyclableCount / totalMaterials) *
    materialConfig.scoringWeights.recyclability;
  const biodegradabilityScore =
    (biodegradableCount / totalMaterials) *
    materialConfig.scoringWeights.biodegradability;

  // Combine all scores
  const finalScore =
    totalScore / totalWeight + recyclabilityScore + biodegradabilityScore;
  return Math.max(0, Math.min(1, finalScore)); // Ensure score is between 0 and 1
}

// Function to create a button to show material info
function createShowButton(product) {
  const button = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("icons/logo.png");
  icon.alt = "Show Details";
  icon.style.cssText = `
    width: 32px;
    height: 32px;
    object-fit: contain;
  `;

  button.appendChild(icon);
  button.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: background-color 0.2s;
  `;

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "rgba(46, 125, 50, 0.1)";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "transparent";
  });

  button.addEventListener("click", () => {
    const display = product.querySelector(".r3vision-material-display");
    if (display) {
      display.style.display = "block";
    }
  });
  return button;
}

// Modify createMaterialInfoDisplay to include a close button
function createMaterialInfoDisplay(materialInfo, ecoScore) {
  const isEcoFriendly = ecoScore >= materialConfig.minEcoScore;
  const bgColor = isEcoFriendly
    ? "rgba(46, 125, 50, 0.1)"
    : "rgba(198, 40, 40, 0.1)";
  const borderColor = isEcoFriendly
    ? "rgba(46, 125, 50, 0.3)"
    : "rgba(198, 40, 40, 0.3)";

  const display = document.createElement("div");
  display.style.cssText = `
    position: absolute;
    top: 0;
    right: 0;
    background: ${bgColor};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #333;
    padding: 16px;
    border-radius: 12px;
    font-size: 13px;
    z-index: 1000;
    width: 300px;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid ${borderColor};
    display: none;
    line-height: 1.4;
    transition: all 0.3s ease;
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  `;

  // Add custom scrollbar styling
  display.innerHTML = `
    <style>
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    </style>
  `;

  // Create a container for the content
  const contentContainer = document.createElement("div");
  contentContainer.style.paddingRight = "20px";

  // Add close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    padding: 0;
    line-height: 1;
  `;

  closeButton.addEventListener("mouseover", () => {
    closeButton.style.background = "rgba(255, 255, 255, 0.9)";
  });

  closeButton.addEventListener("mouseout", () => {
    closeButton.style.background = "rgba(255, 255, 255, 0.8)";
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    display.style.display = "none";
  });

  display.appendChild(closeButton);
  display.appendChild(contentContainer);

  // Calculate total percentage
  const totalPercentage = materialInfo.percentages.reduce(
    (sum, percent) => sum + percent,
    0
  );

  let content = "";

  // Add eco-friendliness indicator
  const ecoIcon = isEcoFriendly ? "✓" : "✗";
  const ecoStatus = isEcoFriendly ? "Eco-Friendly" : "Non-Eco-Friendly";
  const ecoColor = isEcoFriendly ? "#2e7d32" : "#c62828";

  content += `
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 32px; height: 32px; background: ${ecoColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; color: white;">
          ${ecoIcon}
        </div>
        <div>
          <div style="font-weight: 600; font-size: 16px; color: ${ecoColor};">${ecoStatus}</div>
          <div style="font-size: 14px; color: #666;">Eco Score: ${(
            ecoScore * 100
          ).toFixed(0)}%</div>
        </div>
      </div>
    </div>
  `;

  // Add material badges
  const hasPlastics = materialInfo.materials.some(
    (m) =>
      m.includes("plastic") ||
      m.includes("polyester") ||
      m.includes("nylon") ||
      m.includes("pvc") ||
      m.includes("synthetic") ||
      m.includes("polymer")
  );

  const hasBiodegradable = materialInfo.materials.some(
    (m) =>
      m.includes("biodegradable") ||
      m.includes("compostable") ||
      m.includes("cotton") ||
      m.includes("bamboo") ||
      m.includes("natural")
  );

  const hasRecyclable = materialInfo.materials.some(
    (m) =>
      m.includes("recyclable") ||
      m.includes("recycled") ||
      m.includes("glass") ||
      m.includes("metal") ||
      m.includes("aluminum") ||
      m.includes("steel")
  );

  if (hasPlastics || hasBiodegradable || hasRecyclable) {
    content += `<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">`;

    if (hasPlastics) {
      content += `<span style="background: rgba(198, 40, 40, 0.1); color: #c62828; padding: 6px 12px; border-radius: 16px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
        <span style="font-size: 14px;">⚠️</span> Contains Plastic
      </span>`;
    }
    if (hasBiodegradable) {
      content += `<span style="background: rgba(46, 125, 50, 0.1); color: #2e7d32; padding: 6px 12px; border-radius: 16px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
        <span style="font-size: 14px;">🌱</span> Biodegradable
      </span>`;
    }
    if (hasRecyclable) {
      content += `<span style="background: rgba(33, 150, 243, 0.1); color: #1565c0; padding: 6px 12px; border-radius: 16px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
        <span style="font-size: 14px;">♻️</span> Recyclable
      </span>`;
    }
    content += `</div>`;
  }

  // Add material composition
  if (materialInfo.materials.length > 0) {
    content +=
      '<div style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #333;">Material Composition:</div>';

    const sortedMaterials = materialInfo.materials
      .map((material, index) => ({
        material,
        percentage: materialInfo.percentages[index],
      }))
      .sort((a, b) => b.percentage - a.percentage);

    content += '<div style="display: flex; flex-direction: column; gap: 8px;">';
    sortedMaterials.forEach(({ material, percentage }) => {
      const barColor = material.includes("plastic")
        ? "rgba(198, 40, 40, 0.3)"
        : material.includes("biodegradable") || material.includes("natural")
        ? "rgba(46, 125, 50, 0.3)"
        : material.includes("recyclable") || material.includes("recycled")
        ? "rgba(33, 150, 243, 0.3)"
        : "rgba(0, 0, 0, 0.1)";

      content += `
        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
            <span style="color: #333;">${material}</span>
            <span style="color: #666;">${percentage.toFixed(0)}%</span>
          </div>
          <div style="width: 100%; height: 6px; background: rgba(0, 0, 0, 0.1); border-radius: 3px; overflow: hidden;">
            <div style="width: ${percentage}%; height: 100%; background: ${barColor}; border-radius: 3px; transition: width 0.3s ease;"></div>
          </div>
        </div>
      `;
    });
    content += "</div>";
  }

  // Add review summary
  let reviewSummary = "";
  if (ecoScore >= 0.8) {
    reviewSummary = "Excellent eco-friendly choice! 🌟";
  } else if (ecoScore >= 0.6) {
    reviewSummary = "Good sustainable option! 👍";
  } else if (ecoScore >= 0.4) {
    reviewSummary = "Moderate eco-friendliness ⚖️";
  } else if (ecoScore >= 0.2) {
    reviewSummary = "Limited eco-friendliness 🔄";
  } else {
    reviewSummary = "High environmental impact. Consider eco alternatives ❗";
  }

  content += `
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.1);">
      <div style="font-weight: 600; font-size: 14px; margin-bottom: 8px; color: #333;">Review:</div>
      <div style="font-size: 13px; line-height: 1.5; color: #666;">${reviewSummary}</div>
    </div>
  `;

  contentContainer.innerHTML = content;
  return display;
}

// Function to check if a product is recyclable or biodegradable
function isRecyclableOrBiodegradable(materialInfo) {
  const ecoScore = calculateEcoScore(materialInfo);
  return ecoScore >= materialConfig.minEcoScore;
}

// Function to show all products (ensure displays are removed)
function showAllProducts() {
  console.log("--- Running showAllProducts --- ");

  // Use the dynamic scraper to get products
  if (typeof window.eco3RScraper === "undefined") {
    console.error("Scraper module not loaded yet");
    return;
  }

  const products = window.eco3RScraper.getProductElements();
  console.log(`Showing all ${products.length} potential products`);

  products.forEach((product) => {
    product.style.display = "";
    product.style.opacity = "1";
    // Remove our display element if it exists
    const existingDisplay = product.querySelector(".r3vision-material-display");
    if (existingDisplay) existingDisplay.remove();
  });

  // Remove the "no products found" message if it exists
  const existingMessage = document.getElementById(
    "r3vision-no-products-message"
  );
  if (existingMessage) existingMessage.remove();
  console.log("--- showAllProducts Finished --- ");
}

// Function to filter products
function filterProducts() {
  console.log("--- Running filterProducts --- ");

  // Use the dynamic scraper to get products
  if (typeof window.eco3RScraper === "undefined") {
    console.error("Scraper module not loaded yet");
    return;
  }

  // Get scraped product data
  const scraperResults = window.eco3RScraper.scrapeProducts();
  console.log(`Found ${scraperResults.length} potential product nodes.`);

  let foundProductsToAnalyze = false;
  let productsProcessed = 0;

  scraperResults.forEach((result, index) => {
    const product = result.element;
    const productInfo = result.info;

    productsProcessed++;
    console.log(`Processing product ${index + 1}...`);

    // Extract material information using the combined text from the scraper
    const materialInfo = extractMaterialInfo(productInfo.text);

    // Add detected plastics to the material info if available
    if (
      productInfo.plasticsDetected &&
      productInfo.plasticsDetected.length > 0
    ) {
      console.log(
        `Product ${
          index + 1
        } has detected plastics: ${productInfo.plasticsDetected.join(", ")}`
      );

      // Add any plastics that weren't already found
      productInfo.plasticsDetected.forEach((plastic) => {
        if (!materialInfo.materials.includes(plastic)) {
          materialInfo.materials.push(plastic);
          materialInfo.percentages.push(50); // Default percentage when unknown
        }
      });
    }

    // Add detected biodegradable materials if available
    if (
      productInfo.biodegradableDetected &&
      productInfo.biodegradableDetected.length > 0
    ) {
      console.log(
        `Product ${
          index + 1
        } has biodegradable materials: ${productInfo.biodegradableDetected.join(
          ", "
        )}`
      );

      // Add any biodegradable materials that weren't already found
      productInfo.biodegradableDetected.forEach((material) => {
        if (!materialInfo.materials.includes(material)) {
          materialInfo.materials.push(material);
          materialInfo.percentages.push(50); // Default percentage when unknown
        }
      });
    }

    // Add detected recyclable materials if available
    if (
      productInfo.recyclableDetected &&
      productInfo.recyclableDetected.length > 0
    ) {
      console.log(
        `Product ${
          index + 1
        } has recyclable materials: ${productInfo.recyclableDetected.join(
          ", "
        )}`
      );

      // Add any recyclable materials that weren't already found
      productInfo.recyclableDetected.forEach((material) => {
        if (!materialInfo.materials.includes(material)) {
          materialInfo.materials.push(material);
          materialInfo.percentages.push(50); // Default percentage when unknown
        }
      });
    }

    // Add eco-friendly claims if available (as a special "eco-claim" material type)
    if (
      productInfo.ecoFriendlyClaims &&
      productInfo.ecoFriendlyClaims.length > 0
    ) {
      console.log(
        `Product ${
          index + 1
        } has eco-friendly claims: ${productInfo.ecoFriendlyClaims.join(", ")}`
      );

      materialInfo.materials.push(
        "eco-claim: " + productInfo.ecoFriendlyClaims.join(", ")
      );
      materialInfo.percentages.push(100);
    }

    // Special case for plastic product searches:
    // If this is likely a plastic product but no materials were detected,
    // add a default "plastic" material
    if (
      productInfo.isProbablyPlasticProduct &&
      materialInfo.materials.length === 0
    ) {
      console.log(
        `Product ${
          index + 1
        } is likely plastic but no materials detected. Adding default.`
      );
      materialInfo.materials.push("plastic");
      materialInfo.percentages.push(100);
    }

    // Special case for biodegradable product searches:
    // If this is likely a biodegradable product but no materials were detected
    if (
      productInfo.isProbablyBiodegradableProduct &&
      materialInfo.materials.length === 0
    ) {
      console.log(
        `Product ${
          index + 1
        } is likely biodegradable but no materials detected. Adding default.`
      );
      materialInfo.materials.push("biodegradable");
      materialInfo.percentages.push(100);
    }

    // Special case for recyclable product searches:
    // If this is likely a recyclable product but no materials were detected
    if (
      productInfo.isProbablyRecyclableProduct &&
      materialInfo.materials.length === 0
    ) {
      console.log(
        `Product ${
          index + 1
        } is likely recyclable but no materials detected. Adding default.`
      );
      materialInfo.materials.push("recyclable");
      materialInfo.percentages.push(100);
    }

    // For searches specifically about plastic bags, ensure plastic is detected
    const urlLower = window.location.href.toLowerCase();
    const searchTerms = {
      plastic:
        urlLower.includes("plastic") ||
        urlLower.includes("polythene") ||
        urlLower.includes("nylon"),
      biodegradable:
        urlLower.includes("biodegradable") ||
        urlLower.includes("compostable") ||
        urlLower.includes("eco"),
      recyclable:
        urlLower.includes("recycl") ||
        urlLower.includes("sustain") ||
        urlLower.includes("reusable"),
    };

    if (searchTerms.plastic && materialInfo.materials.length === 0) {
      console.log(
        `Plastic-related search detected. Adding default plastic material for product ${
          index + 1
        }`
      );
      materialInfo.materials.push("plastic");
      materialInfo.percentages.push(100);
    }

    if (searchTerms.biodegradable && materialInfo.materials.length === 0) {
      console.log(
        `Biodegradable-related search detected. Adding default biodegradable material for product ${
          index + 1
        }`
      );
      materialInfo.materials.push("biodegradable");
      materialInfo.percentages.push(100);
    }

    if (searchTerms.recyclable && materialInfo.materials.length === 0) {
      console.log(
        `Recyclable-related search detected. Adding default recyclable material for product ${
          index + 1
        }`
      );
      materialInfo.materials.push("recyclable");
      materialInfo.percentages.push(100);
    }

    // Calculate eco-score regardless of recyclability
    const ecoScore = calculateEcoScore(materialInfo);

    // Check if product is recyclable or biodegradable
    const isEcoFriendly = isRecyclableOrBiodegradable(materialInfo);
    console.log(
      `Product ${
        index + 1
      } isEcoFriendly: ${isEcoFriendly}, ecoScore: ${ecoScore}`
    );

    // Only hide products if we have no material information at all
    const hasNoMaterialInfo = materialInfo.materials.length === 0;

    // --- Apply Filter ---
    // First, remove any existing display from previous runs
    const existingDisplay = product.querySelector(".r3vision-material-display");
    if (existingDisplay) existingDisplay.remove();

    if (!hasNoMaterialInfo) {
      // Always show products with material info (both eco-friendly and non-eco-friendly)
      product.style.display = "";
      product.style.opacity = "1";
      foundProductsToAnalyze = true;

      // Add visual indicator based on eco-friendliness
      if (!isEcoFriendly) {
        // Add a "non-eco-friendly" visual indicator
        product.style.border = "2px solid #c62828";
        product.style.boxShadow = "0 0 8px rgba(198, 40, 40, 0.5)";
      } else {
        // Add an "eco-friendly" visual indicator
        product.style.border = "2px solid #2e7d32";
        product.style.boxShadow = "0 0 8px rgba(46, 125, 50, 0.5)";
      }

      // Create and display the info card
      const display = createMaterialInfoDisplay(materialInfo, ecoScore);
      display.classList.add("r3vision-material-display"); // Add class for easy removal
      product.style.position = "relative"; // Ensure positioning context
      product.appendChild(display);

      const showButton = createShowButton(product);
      product.appendChild(showButton);
    } else {
      // Hide products with no material info
      product.style.display = "none";
      product.style.opacity = "0";
    }
  });
  console.log(`Processed ${productsProcessed} products.`);

  // --- Update Message ---
  // Remove previous message first
  const existingMessage = document.getElementById(
    "r3vision-no-products-message"
  );
  if (existingMessage) existingMessage.remove();

  // Show message only if no products were found with material information
  if (productsProcessed > 0 && !foundProductsToAnalyze) {
    console.log("No products with material information found in this search.");
    const message = document.createElement("div");
    message.id = "r3vision-no-products-message"; // Add ID for easy removal
    message.style.cssText = `
      text-align: center;
      padding: 20px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      margin: 20px auto; /* Center the message */
      color: #6c757d;
      max-width: 80%;
    `;
    message.textContent =
      "3RVision: No product material information found in this search. Try different search terms or check back later.";

    // Try to insert before the main results container
    const resultsContainer =
      document.querySelector(
        '#search, [data-component-type="s-search-results"], .s-main-slot'
      ) || document.body;
    resultsContainer.insertBefore(message, resultsContainer.firstChild);
  } else if (productsProcessed === 0) {
    console.log("No product elements found to process.");
  }
  console.log("--- filterProducts Finished --- ");
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleFilter") {
    if (request.enabled) {
      filterProducts();
    } else {
      showAllProducts();
    }
  }
});

// Initial check when page loads
if (document.readyState === "complete") {
  chrome.storage.local.get(["enabled"], function (result) {
    if (chrome.runtime.lastError) {
      console.error("Error accessing storage:", chrome.runtime.lastError);
      return;
    }
    if (result.enabled) {
      filterProducts();
    }
  });
} else {
  window.addEventListener("load", () => {
    chrome.storage.local.get(["enabled"], function (result) {
      if (chrome.runtime.lastError) {
        console.error("Error accessing storage:", chrome.runtime.lastError);
        return;
      }
      if (result.enabled) {
        filterProducts();
      }
    });
  });
}

// Monitor for dynamic content changes
if (document.readyState === "complete") {
  const observer = new MutationObserver((mutations) => {
    chrome.storage.local.get(["enabled"], function (result) {
      if (result.enabled) {
        // Check if new products were added
        const hasNewProducts = mutations.some((mutation) =>
          Array.from(mutation.addedNodes).some(
            (node) =>
              node.nodeType === 1 &&
              node.tagName === "DIV" &&
              (node.classList.contains("s-result-item") ||
                node.getAttribute("data-component-type") ===
                  "s-search-result" ||
                node.classList.contains("_1AtVbE") || // Flipkart
                node.classList.contains("product-base")) // Myntra
          )
        );

        if (hasNewProducts) {
          console.log("Detected new products added to the page");
          try {
            // Add a small delay to ensure DOM is fully updated
            setTimeout(() => {
              filterProducts();
            }, 500);
          } catch (error) {
            console.error("Error during filtering:", error);
          }
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
} else {
  window.addEventListener("load", () => {
    // Signal that the content script is ready
    console.log("Content script fully loaded, sending ready message");
    try {
      chrome.runtime.sendMessage({ action: "contentScriptReady" });
    } catch (error) {
      console.error("Error sending ready message:", error);
    }

    // Set up the mutation observer
    const observer = new MutationObserver((mutations) => {
      chrome.storage.local.get(["enabled"], function (result) {
        if (result.enabled) {
          // Check if new products were added
          const hasNewProducts = mutations.some((mutation) =>
            Array.from(mutation.addedNodes).some(
              (node) =>
                node.nodeType === 1 &&
                node.tagName === "DIV" &&
                (node.classList.contains("s-result-item") ||
                  node.getAttribute("data-component-type") ===
                    "s-search-result" ||
                  node.classList.contains("_1AtVbE") || // Flipkart
                  node.classList.contains("product-base")) // Myntra
            )
          );

          if (hasNewProducts) {
            console.log("Detected new products added to the page");
            try {
              // Add a small delay to ensure DOM is fully updated
              setTimeout(() => {
                filterProducts();
              }, 500);
            } catch (error) {
              console.error("Error during filtering:", error);
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
