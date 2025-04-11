// Dynamic scraping module for e-commerce sites
console.log("3RVision scraping module loaded");

// Site configuration with CSS selectors and extraction methods
const siteConfig = {
  // Amazon configuration
  amazon: {
    productContainers: [
      '[data-component-type="s-search-result"]', 
      '.s-result-item', 
      'div[data-asin]:not([data-asin=""])'
    ],
    productTitle: [
      'h2 a span',
      '.a-text-normal',
      '.a-size-base-plus'
    ],
    productDescription: [
      '.a-section .a-size-base', 
      '.a-size-base .a-color-secondary',
      '.a-text-normal'
    ],
    productFeatures: '.a-list-item',
    productMaterials: {
      containers: ['.a-row', 'span', 'td', 'tr', 'li', 'div', 'p', 'h3', 'h4', 'ul', '.a-unordered-list'],
      textMatch: [
        // Material identifiers
        'material', 'composition', 'made of', 'made from', 'constructed from',
        'built with', 'fabricated from', 'components', 'ingredient', 'content',
        'fabric', 'construction', 'shell', 'outer', 'inner', 'lining', 'filling',
        'made with', 'manufactured from', 'structure', 'frame', 'housing',
        
        // Plastic materials
        'plastic', 'polyester', 'nylon', 'pvc', 'polyethylene', 'polypropylene',
        'polyurethane', 'vinyl', 'acrylic', 'synthetic', 'polymer', 'hdpe', 'ldpe',
        'pet', 'neoprene', 'polycarbonate', 'synthetic fabric', 'artificial',
        'polyvinyl', 'thermoplastic', 'polystyrene', 'abs', 'polyamide',
        'spandex', 'elastane', 'lycra', 'rayon', 'viscose', 'polyvinyl chloride',
        'pleather', 'faux leather', 'synthetic leather', 'microfiber', 'microfibre',
        
        // Natural and biodegradable materials
        'cotton', 'wool', 'linen', 'hemp', 'jute', 'sisal', 'bamboo', 'cork',
        'wood', 'paper', 'cardboard', 'biodegradable', 'compostable', 'natural',
        'organic', 'plant-based', 'cellulose', 'straw', 'bagasse', 'wheat',
        'mushroom leather', 'mycelium', 'cork fabric', 'tencel', 'lyocell',
        'modal', 'kapok', 'ramie', 'flax', 'abaca', 'pina', 'soy fabric',
        'silk', 'cashmere', 'merino', 'alpaca', 'mohair', 'angora', 'down',
        'feather', 'leather', 'suede', 'cotton canvas', 'denim', 'chambray',
        'muslin', 'twill', 'flannel', 'velvet', 'corduroy',
        
        // Recyclable materials
        'recyclable', 'recycled', 'upcycled', 'repurposed', 'reclaimed',
        'post-consumer', 'pre-consumer', 'recycled content', 'glass', 'metal',
        'aluminum', 'steel', 'tin', 'copper', 'brass', 'iron', 'ceramic',
        'terracotta', 'porcelain', 'stone', 'marble', 'granite', 'silicone',
        'recycled plastic', 'recycled polyester', 'recycled nylon', 'recycled paper',
        'recycled metal', 'recycled glass', 'reclaimed wood',
        
        // Eco-friendly identifiers
        'eco-friendly', 'environmentally friendly', 'sustainable', 'renewable',
        'green', 'zero waste', 'plastic-free', 'eco-conscious', 'earth-friendly',
        'carbon neutral', 'low impact', 'non-toxic', 'chemical-free',
        'non-plastic', 'biodegradable packaging', 'eco packaging',
        'fair trade', 'ethical', 'vegan', 'cruelty-free', 'organic certified',
        'gots certified', 'oeko-tex', 'bluesign', 'cradle to cradle',
        
        // Kitchen products
        'cookware', 'kitchenware', 'utensil', 'cutlery', 'flatware', 'dinnerware',
        'silverware', 'knife', 'fork', 'spoon', 'cutting board', 'chopping board',
        'pan', 'pot', 'skillet', 'dutch oven', 'bakeware', 'mixing bowl',
        'food storage', 'kitchen tool', 'cooking utensil', 'spatula', 'whisk',
        'ladle', 'tong', 'colander', 'strainer', 'baking sheet', 'roasting pan',
        'pressure cooker', 'slow cooker', 'coffee maker', 'kettle', 'teapot',
        'food processor', 'blender', 'mixer', 'juicer', 'cutting mat', 'grill pan',
        
        // Electronics
        'electronic', 'device', 'gadget', 'appliance', 'charger', 'cable',
        'adapter', 'computer', 'laptop', 'tablet', 'phone', 'smartphone',
        'headphone', 'earbud', 'speaker', 'television', 'tv', 'monitor',
        'camera', 'printer', 'scanner', 'router', 'modem', 'gaming',
        'console', 'controller', 'keyboard', 'mouse', 'power bank', 'usb',
        'hdmi', 'motherboard', 'processor', 'memory', 'storage', 'hard drive',
        'ssd', 'refrigerator', 'freezer', 'dishwasher', 'washing machine',
        'dryer', 'vacuum', 'microwave', 'oven', 'toaster', 'air conditioner',
        'fan', 'heater', 'purifier', 'humidifier', 'dehumidifier',
        
        // Clothing and apparel
        'clothing', 'apparel', 'garment', 'shirt', 't-shirt', 'tee', 'blouse',
        'sweater', 'hoodie', 'sweatshirt', 'jacket', 'coat', 'blazer', 'vest',
        'pants', 'jeans', 'trousers', 'shorts', 'skirt', 'dress', 'suit',
        'pajama', 'sleepwear', 'underwear', 'socks', 'hat', 'cap', 'beanie',
        'scarf', 'glove', 'mitten', 'shoe', 'sneaker', 'boot', 'sandal', 'slipper',
        'belt', 'tie', 'bowtie', 'purse', 'handbag', 'backpack', 'tote',
        'wallet', 'wristband', 'headband', 'activewear', 'sportswear', 'swimwear',
        'outerwear', 'loungewear', 'workwear', 'uniform', 'costume',
        
        // Bathroom products
        'bathroom', 'toiletry', 'toothbrush', 'toothpaste', 'floss', 'mouthwash',
        'shower', 'bath', 'soap', 'body wash', 'shampoo', 'conditioner',
        'razor', 'shaving', 'lotion', 'moisturizer', 'deodorant', 'towel',
        'washcloth', 'bath mat', 'shower curtain', 'toilet paper', 'tissue',
        'cotton swab', 'cotton ball', 'makeup', 'skincare', 'haircare',
        'toilet brush', 'plunger', 'bath caddy', 'soap dish', 'toothbrush holder',
        'toilet seat', 'shower head', 'faucet', 'sink', 'bathtub', 'vanity',
        'mirror', 'cabinet', 'scale', 'hair dryer', 'straightener', 'curler',
        
        // Home furniture and decor
        'furniture', 'decor', 'decoration', 'sofa', 'couch', 'loveseat', 'chair',
        'table', 'desk', 'coffee table', 'end table', 'nightstand', 'dresser',
        'chest', 'bookshelf', 'bookcase', 'cabinet', 'entertainment center',
        'tv stand', 'bed', 'mattress', 'box spring', 'bed frame', 'headboard',
        'footboard', 'ottoman', 'bench', 'stool', 'barstool', 'dining set',
        'sectional', 'recliner', 'futon', 'daybed', 'trundle', 'lamp', 'lighting',
        'chandelier', 'pendant', 'sconce', 'floor lamp', 'table lamp', 'ceiling fan',
        'rug', 'carpet', 'mat', 'runner', 'curtain', 'drape', 'blind', 'shade',
        'pillow', 'cushion', 'throw', 'blanket', 'comforter', 'duvet', 'quilt',
        
        // Baby and kids products
        'baby', 'infant', 'toddler', 'kid', 'child', 'children', 'diaper',
        'wipe', 'bottle', 'pacifier', 'teether', 'bib', 'onesie', 'sleeper',
        'stroller', 'car seat', 'high chair', 'booster', 'crib', 'bassinet',
        'playpen', 'baby monitor', 'changing table', 'baby carrier', 'baby wrap',
        'nursing', 'breast pump', 'formula', 'baby food', 'toy', 'game', 'puzzle',
        'doll', 'action figure', 'building block', 'educational toy', 'stuffed animal',
        'plush', 'ride-on', 'tricycle', 'bicycle', 'art supply', 'craft',
        'school supply', 'backpack', 'lunch box', 'sippy cup',
        
        // Office and school supplies
        'office', 'school', 'stationery', 'paper', 'notebook', 'journal',
        'binder', 'folder', 'file', 'organizer', 'pen', 'pencil', 'marker',
        'highlighter', 'eraser', 'sharpener', 'stapler', 'staple', 'paper clip',
        'binder clip', 'tape', 'adhesive', 'glue', 'scissors', 'ruler',
        'calculator', 'calendar', 'planner', 'desk pad', 'desk organizer',
        'whiteboard', 'bulletin board', 'thumbtack', 'pushpin', 'bookend',
        'label', 'stamp', 'ink', 'toner', 'cartridge', 'printer paper',
        
        // Sports and outdoor
        'sport', 'outdoor', 'fitness', 'exercise', 'workout', 'gym', 'athletic',
        'camping', 'hiking', 'backpacking', 'fishing', 'hunting', 'biking',
        'cycling', 'swimming', 'surfing', 'skiing', 'snowboarding', 'skateboarding',
        'tennis', 'golf', 'basketball', 'football', 'soccer', 'baseball',
        'volleyball', 'yoga', 'pilates', 'weight', 'dumbbell', 'kettlebell',
        'resistance band', 'treadmill', 'elliptical', 'bike', 'tent', 'sleeping bag',
        'backpack', 'cooler', 'canteen', 'water bottle', 'hydration',
        
        // Garden and outdoor home
        'garden', 'gardening', 'plant', 'flower', 'seed', 'soil', 'mulch',
        'fertilizer', 'pot', 'planter', 'hose', 'sprinkler', 'watering can',
        'shovel', 'spade', 'rake', 'trowel', 'pruner', 'shear', 'lawn mower',
        'trimmer', 'edger', 'blower', 'patio', 'deck', 'grill', 'barbecue',
        'outdoor furniture', 'umbrella', 'gazebo', 'pergola', 'trellis',
        'bird feeder', 'bird bath', 'composter', 'rain barrel',
        
        // Pet products
        'pet', 'dog', 'cat', 'bird', 'fish', 'reptile', 'small animal',
        'pet food', 'pet treat', 'pet toy', 'pet bed', 'pet house', 'cage',
        'aquarium', 'terrarium', 'leash', 'collar', 'harness', 'crate',
        'litter', 'litter box', 'pet carrier', 'pet bowl', 'pet feeder',
        'pet waterer', 'scratching post', 'pet furniture', 'pet clothing',
        
        // Additional product types
        'bag', 'container', 'packaging', 'bottle', 'pouch', 'wrapper',
        'box', 'case', 'utensil', 'cutlery', 'straw', 'plate', 'cup',
        'cloth', 'fabric', 'textile', 'furniture', 'toy', 'brush',
        'sponge', 'cleaner', 'detergent', 'soap', 'dish', 'bowl', 'mug',
        'glass', 'can', 'jar', 'canister', 'bin', 'basket', 'hamper',
        'hanger', 'rack', 'hook', 'shelf', 'storage', 'organizer',
        'container', 'tub', 'bucket', 'tank', 'dispenser', 'pump',
        
        // Shoes and footwear
        'shoe', 'footwear', 'sneaker', 'boot', 'sandal', 'slipper', 'flip flop', 'loafer',
        'oxford', 'pump', 'heel', 'wedge', 'mule', 'clog', 'espadrille', 'platform',
        'athletic shoe', 'running shoe', 'walking shoe', 'hiking boot', 'dress shoe',
        'casual shoe', 'formal shoe', 'work boot', 'rain boot', 'winter boot',
        'shoe material', 'sole', 'insole', 'outsole', 'midsole', 'upper', 'lining',
        'toe box', 'heel counter', 'shank', 'welt', 'last', 'shoe construction',
        
        // Cotton products
        'cotton', 'cotton blend', '100% cotton', 'organic cotton', 'pima cotton',
        'egyptian cotton', 'supima cotton', 'cotton fabric', 'cotton yarn',
        'cotton thread', 'cotton fiber', 'cotton material', 'cotton clothing',
        'cotton apparel', 'cotton garment', 'cotton textile', 'cotton weave',
        'cotton knit', 'cotton jersey', 'cotton twill', 'cotton canvas',
        'cotton poplin', 'cotton voile', 'cotton muslin', 'cotton sateen',
        'cotton percale', 'cotton flannel', 'cotton terry', 'cotton velour',
        'cotton corduroy', 'cotton denim', 'cotton chambray', 'cotton gauze',
        'cotton batiste', 'cotton broadcloth', 'cotton cambric', 'cotton chintz',
        'cotton crepe', 'cotton damask', 'cotton drill', 'cotton duck',
        'cotton eyelet', 'cotton gingham', 'cotton lawn', 'cotton organdy',
        'cotton oxford', 'cotton pique', 'cotton plisse', 'cotton seersucker',
        'cotton shirting', 'cotton taffeta', 'cotton toile', 'cotton velveteen',
        
        // Bags and accessories
        'bag', 'handbag', 'purse', 'tote', 'backpack', 'messenger bag', 'duffel',
        'satchel', 'clutch', 'shoulder bag', 'crossbody', 'waist bag', 'fanny pack',
        'laptop bag', 'briefcase', 'suitcase', 'travel bag', 'gym bag', 'beach bag',
        'shopping bag', 'grocery bag', 'reusable bag', 'tote bag', 'drawstring bag',
        'backpack', 'rucksack', 'knapsack', 'sling bag', 'belt bag', 'pouch',
        'cosmetic bag', 'makeup bag', 'toiletry bag', 'travel organizer',
        'bag material', 'bag construction', 'bag lining', 'bag hardware',
        'bag strap', 'bag handle', 'bag zipper', 'bag pocket', 'bag compartment',
        
        // Lipstick and cosmetics
        'lipstick', 'lip color', 'lip product', 'lip balm', 'lip gloss', 'lip stain',
        'lip liner', 'lip crayon', 'lip pencil', 'lip tint', 'lip treatment',
        'cosmetic', 'makeup', 'beauty product', 'beauty item', 'cosmetic product',
        'makeup product', 'beauty care', 'personal care', 'skincare', 'face care',
        'body care', 'hair care', 'nail care', 'cosmetic ingredient', 'makeup ingredient',
        'beauty ingredient', 'cosmetic formula', 'makeup formula', 'beauty formula',
        'cosmetic packaging', 'makeup packaging', 'beauty packaging', 'cosmetic container',
        'makeup container', 'beauty container', 'cosmetic applicator', 'makeup applicator',
        'beauty applicator', 'cosmetic brush', 'makeup brush', 'beauty brush',
        'cosmetic sponge', 'makeup sponge', 'beauty sponge', 'cosmetic tool',
        'makeup tool', 'beauty tool', 'cosmetic set', 'makeup set', 'beauty set',
        'cosmetic kit', 'makeup kit', 'beauty kit', 'cosmetic palette', 'makeup palette',
        'beauty palette', 'cosmetic compact', 'makeup compact', 'beauty compact',
        'cosmetic powder', 'makeup powder', 'beauty powder', 'cosmetic cream',
        'makeup cream', 'beauty cream', 'cosmetic lotion', 'makeup lotion',
        'beauty lotion', 'cosmetic serum', 'makeup serum', 'beauty serum',
        'cosmetic oil', 'makeup oil', 'beauty oil', 'cosmetic mask', 'makeup mask',
        'beauty mask', 'cosmetic scrub', 'makeup scrub', 'beauty scrub',
        'cosmetic cleanser', 'makeup cleanser', 'beauty cleanser', 'cosmetic toner',
        'makeup toner', 'beauty toner', 'cosmetic moisturizer', 'makeup moisturizer',
        'beauty moisturizer', 'cosmetic foundation', 'makeup foundation',
        'beauty foundation', 'cosmetic concealer', 'makeup concealer',
        'beauty concealer', 'cosmetic powder', 'makeup powder', 'beauty powder',
        'cosmetic blush', 'makeup blush', 'beauty blush', 'cosmetic bronzer',
        'makeup bronzer', 'beauty bronzer', 'cosmetic highlighter',
        'makeup highlighter', 'beauty highlighter', 'cosmetic eyeshadow',
        'makeup eyeshadow', 'beauty eyeshadow', 'cosmetic eyeliner',
        'makeup eyeliner', 'beauty eyeliner', 'cosmetic mascara',
        'makeup mascara', 'beauty mascara', 'cosmetic brow product',
        'makeup brow product', 'beauty brow product', 'cosmetic setting spray',
        'makeup setting spray', 'beauty setting spray', 'cosmetic primer',
        'makeup primer', 'beauty primer', 'cosmetic remover', 'makeup remover',
        'beauty remover',
        
        // Table cloths and linens
        'table cloth', 'tablecloth', 'table linen', 'table runner', 'placemat',
        'table cover', 'table protector', 'table pad', 'table topper',
        'table setting', 'table decor', 'table accessory', 'tableware',
        'dining cloth', 'dining linen', 'dining cover', 'dining protector',
        'table fabric', 'table material', 'linen cloth', 'linen fabric',
        'cotton table cloth', 'polyester table cloth', 'vinyl table cloth',
        'plastic table cloth', 'waterproof table cloth', 'stain resistant table cloth',
        'washable table cloth', 'reusable table cloth', 'disposable table cloth',
        'table cloth size', 'table cloth dimensions', 'table cloth shape',
        'table cloth pattern', 'table cloth design', 'table cloth color',
        'table cloth style', 'table cloth finish', 'table cloth texture',
        
        // Soaps and cleansers
        'soap', 'bar soap', 'liquid soap', 'hand soap', 'body soap', 'face soap',
        'bath soap', 'shower soap', 'cleansing bar', 'cleansing soap',
        'antibacterial soap', 'antimicrobial soap', 'germicidal soap',
        'medicated soap', 'therapeutic soap', 'moisturizing soap',
        'hydrating soap', 'nourishing soap', 'gentle soap', 'mild soap',
        'sensitive skin soap', 'fragrance free soap', 'unscented soap',
        'natural soap', 'organic soap', 'vegan soap', 'cruelty free soap',
        'handmade soap', 'artisan soap', 'castile soap', 'glycerin soap',
        'shea butter soap', 'coconut oil soap', 'olive oil soap',
        'essential oil soap', 'herbal soap', 'botanical soap',
        'exfoliating soap', 'scrub soap', 'cleansing soap',
        'soap ingredients', 'soap formula', 'soap composition',
        'soap base', 'soap material', 'soap packaging',
        
        // Shampoos and hair care
        'shampoo', 'hair shampoo', 'hair wash', 'hair cleanser',
        'clarifying shampoo', 'moisturizing shampoo', 'hydrating shampoo',
        'volumizing shampoo', 'thickening shampoo', 'strengthening shampoo',
        'repairing shampoo', 'damage repair shampoo', 'color safe shampoo',
        'color protection shampoo', 'sulfate free shampoo',
        'paraben free shampoo', 'silicone free shampoo',
        'natural shampoo', 'organic shampoo', 'vegan shampoo',
        'cruelty free shampoo', 'herbal shampoo', 'botanical shampoo',
        'medicated shampoo', 'dandruff shampoo', 'anti dandruff shampoo',
        'scalp care shampoo', 'scalp treatment shampoo',
        'dry shampoo', 'waterless shampoo', 'shampoo bar',
        'solid shampoo', 'shampoo ingredients', 'shampoo formula',
        'shampoo composition', 'shampoo base', 'shampoo material',
        'shampoo packaging',
        
        // Face washes and cleansers
        'face wash', 'facial cleanser', 'face cleanser', 'facial wash',
        'cleansing gel', 'cleansing foam', 'cleansing cream',
        'cleansing lotion', 'cleansing oil', 'cleansing balm',
        'cleansing water', 'micellar water', 'cleansing milk',
        'gentle cleanser', 'mild cleanser', 'sensitive skin cleanser',
        'hydrating cleanser', 'moisturizing cleanser', 'nourishing cleanser',
        'exfoliating cleanser', 'scrub cleanser', 'deep cleansing',
        'pore cleansing', 'oil control cleanser', 'acne cleanser',
        'blemish cleanser', 'medicated cleanser', 'therapeutic cleanser',
        'natural cleanser', 'organic cleanser', 'vegan cleanser',
        'cruelty free cleanser', 'herbal cleanser', 'botanical cleanser',
        'fragrance free cleanser', 'unscented cleanser',
        'cleanser ingredients', 'cleanser formula', 'cleanser composition',
        'cleanser base', 'cleanser material', 'cleanser packaging'
      ]
    },
    price: '.a-price .a-offscreen',
    rating: '.a-icon-star-small .a-icon-alt',
    isProductValid: (node) => {
      return node.querySelector('h2 a span') || node.querySelector('.a-price');
    },
    domainMatches: ['amazon.com', 'amazon.in', 'amazon.co.uk', 'amazon.de', 'amazon.ca']
  },
  
  // Flipkart configuration
  flipkart: {
    productContainers: ['._1AtVbE', '._4ddWXP', '._1xHGtK'],
    productTitle: ['._4rR01T', '.s1Q9rs', '.IRpwTa'],
    productDescription: [
      '._1xgFaf', 
      '.fMghEO', 
      '._3Djpdu'
    ],
    productFeatures: ['._1mXcCf', '._3ExdjG', 'li._21lJbe'],
    productMaterials: {
      containers: ['li', 'td', 'tr', '.crafting', 'div', 'p', 'span', 'ul', '.LGMpV', '._1AtVbE', '._16PBlm'],
      textMatch: [
        // Material identifiers
        'material', 'composition', 'made of', 'made from', 'constructed from',
        'built with', 'fabricated from', 'components', 'ingredient', 'content',
        'fabric', 'construction', 'shell', 'outer', 'inner', 'lining', 'filling',
        'made with', 'manufactured from', 'structure', 'frame', 'housing',
        
        // Plastic materials
        'plastic', 'polyester', 'nylon', 'pvc', 'polyethylene', 'polypropylene',
        'polyurethane', 'vinyl', 'acrylic', 'synthetic', 'polymer', 'hdpe', 'ldpe',
        'pet', 'neoprene', 'polycarbonate', 'synthetic fabric', 'artificial',
        'polyvinyl', 'thermoplastic', 'polystyrene', 'abs', 'polyamide',
        'spandex', 'elastane', 'lycra', 'rayon', 'viscose', 'polyvinyl chloride',
        'pleather', 'faux leather', 'synthetic leather', 'microfiber', 'microfibre',
        
        // Natural and biodegradable materials
        'cotton', 'wool', 'linen', 'hemp', 'jute', 'sisal', 'bamboo', 'cork',
        'wood', 'paper', 'cardboard', 'biodegradable', 'compostable', 'natural',
        'organic', 'plant-based', 'cellulose', 'straw', 'bagasse', 'wheat',
        'mushroom leather', 'mycelium', 'cork fabric', 'tencel', 'lyocell',
        'modal', 'kapok', 'ramie', 'flax', 'abaca', 'pina', 'soy fabric',
        'silk', 'cashmere', 'merino', 'alpaca', 'mohair', 'angora', 'down',
        'feather', 'leather', 'suede', 'cotton canvas', 'denim', 'chambray',
        'muslin', 'twill', 'flannel', 'velvet', 'corduroy',
        
        // Recyclable materials
        'recyclable', 'recycled', 'upcycled', 'repurposed', 'reclaimed',
        'post-consumer', 'pre-consumer', 'recycled content', 'glass', 'metal',
        'aluminum', 'steel', 'tin', 'copper', 'brass', 'iron', 'ceramic',
        'terracotta', 'porcelain', 'stone', 'marble', 'granite', 'silicone',
        'recycled plastic', 'recycled polyester', 'recycled nylon', 'recycled paper',
        'recycled metal', 'recycled glass', 'reclaimed wood',
        
        // Eco-friendly identifiers
        'eco-friendly', 'environmentally friendly', 'sustainable', 'renewable',
        'green', 'zero waste', 'plastic-free', 'eco-conscious', 'earth-friendly',
        'carbon neutral', 'low impact', 'non-toxic', 'chemical-free',
        'non-plastic', 'biodegradable packaging', 'eco packaging',
        'fair trade', 'ethical', 'vegan', 'cruelty-free', 'organic certified',
        'gots certified', 'oeko-tex', 'bluesign', 'cradle to cradle',
        
        // Kitchen products
        'cookware', 'kitchenware', 'utensil', 'cutlery', 'flatware', 'dinnerware',
        'silverware', 'knife', 'fork', 'spoon', 'cutting board', 'chopping board',
        'pan', 'pot', 'skillet', 'dutch oven', 'bakeware', 'mixing bowl',
        'food storage', 'kitchen tool', 'cooking utensil', 'spatula', 'whisk',
        'ladle', 'tong', 'colander', 'strainer', 'baking sheet', 'roasting pan',
        'pressure cooker', 'slow cooker', 'coffee maker', 'kettle', 'teapot',
        'food processor', 'blender', 'mixer', 'juicer', 'cutting mat', 'grill pan',
        
        // Electronics
        'electronic', 'device', 'gadget', 'appliance', 'charger', 'cable',
        'adapter', 'computer', 'laptop', 'tablet', 'phone', 'smartphone',
        'headphone', 'earbud', 'speaker', 'television', 'tv', 'monitor',
        'camera', 'printer', 'scanner', 'router', 'modem', 'gaming',
        'console', 'controller', 'keyboard', 'mouse', 'power bank', 'usb',
        'hdmi', 'motherboard', 'processor', 'memory', 'storage', 'hard drive',
        'ssd', 'refrigerator', 'freezer', 'dishwasher', 'washing machine',
        'dryer', 'vacuum', 'microwave', 'oven', 'toaster', 'air conditioner',
        'fan', 'heater', 'purifier', 'humidifier', 'dehumidifier',
        
        // Clothing and apparel
        'clothing', 'apparel', 'garment', 'shirt', 't-shirt', 'tee', 'blouse',
        'sweater', 'hoodie', 'sweatshirt', 'jacket', 'coat', 'blazer', 'vest',
        'pants', 'jeans', 'trousers', 'shorts', 'skirt', 'dress', 'suit',
        'pajama', 'sleepwear', 'underwear', 'socks', 'hat', 'cap', 'beanie',
        'scarf', 'glove', 'mitten', 'shoe', 'sneaker', 'boot', 'sandal', 'slipper',
        'belt', 'tie', 'bowtie', 'purse', 'handbag', 'backpack', 'tote',
        'wallet', 'wristband', 'headband', 'activewear', 'sportswear', 'swimwear',
        'outerwear', 'loungewear', 'workwear', 'uniform', 'costume',
        
        // Bathroom products
        'bathroom', 'toiletry', 'toothbrush', 'toothpaste', 'floss', 'mouthwash',
        'shower', 'bath', 'soap', 'body wash', 'shampoo', 'conditioner',
        'razor', 'shaving', 'lotion', 'moisturizer', 'deodorant', 'towel',
        'washcloth', 'bath mat', 'shower curtain', 'toilet paper', 'tissue',
        'cotton swab', 'cotton ball', 'makeup', 'skincare', 'haircare',
        'toilet brush', 'plunger', 'bath caddy', 'soap dish', 'toothbrush holder',
        'toilet seat', 'shower head', 'faucet', 'sink', 'bathtub', 'vanity',
        'mirror', 'cabinet', 'scale', 'hair dryer', 'straightener', 'curler',
        
        // Home furniture and decor
        'furniture', 'decor', 'decoration', 'sofa', 'couch', 'loveseat', 'chair',
        'table', 'desk', 'coffee table', 'end table', 'nightstand', 'dresser',
        'chest', 'bookshelf', 'bookcase', 'cabinet', 'entertainment center',
        'tv stand', 'bed', 'mattress', 'box spring', 'bed frame', 'headboard',
        'footboard', 'ottoman', 'bench', 'stool', 'barstool', 'dining set',
        'sectional', 'recliner', 'futon', 'daybed', 'trundle', 'lamp', 'lighting',
        'chandelier', 'pendant', 'sconce', 'floor lamp', 'table lamp', 'ceiling fan',
        'rug', 'carpet', 'mat', 'runner', 'curtain', 'drape', 'blind', 'shade',
        'pillow', 'cushion', 'throw', 'blanket', 'comforter', 'duvet', 'quilt',
        
        // Baby and kids products
        'baby', 'infant', 'toddler', 'kid', 'child', 'children', 'diaper',
        'wipe', 'bottle', 'pacifier', 'teether', 'bib', 'onesie', 'sleeper',
        'stroller', 'car seat', 'high chair', 'booster', 'crib', 'bassinet',
        'playpen', 'baby monitor', 'changing table', 'baby carrier', 'baby wrap',
        'nursing', 'breast pump', 'formula', 'baby food', 'toy', 'game', 'puzzle',
        'doll', 'action figure', 'building block', 'educational toy', 'stuffed animal',
        'plush', 'ride-on', 'tricycle', 'bicycle', 'art supply', 'craft',
        'school supply', 'backpack', 'lunch box', 'sippy cup',
        
        // Office and school supplies
        'office', 'school', 'stationery', 'paper', 'notebook', 'journal',
        'binder', 'folder', 'file', 'organizer', 'pen', 'pencil', 'marker',
        'highlighter', 'eraser', 'sharpener', 'stapler', 'staple', 'paper clip',
        'binder clip', 'tape', 'adhesive', 'glue', 'scissors', 'ruler',
        'calculator', 'calendar', 'planner', 'desk pad', 'desk organizer',
        'whiteboard', 'bulletin board', 'thumbtack', 'pushpin', 'bookend',
        'label', 'stamp', 'ink', 'toner', 'cartridge', 'printer paper',
        
        // Sports and outdoor
        'sport', 'outdoor', 'fitness', 'exercise', 'workout', 'gym', 'athletic',
        'camping', 'hiking', 'backpacking', 'fishing', 'hunting', 'biking',
        'cycling', 'swimming', 'surfing', 'skiing', 'snowboarding', 'skateboarding',
        'tennis', 'golf', 'basketball', 'football', 'soccer', 'baseball',
        'volleyball', 'yoga', 'pilates', 'weight', 'dumbbell', 'kettlebell',
        'resistance band', 'treadmill', 'elliptical', 'bike', 'tent', 'sleeping bag',
        'backpack', 'cooler', 'canteen', 'water bottle', 'hydration',
        
        // Garden and outdoor home
        'garden', 'gardening', 'plant', 'flower', 'seed', 'soil', 'mulch',
        'fertilizer', 'pot', 'planter', 'hose', 'sprinkler', 'watering can',
        'shovel', 'spade', 'rake', 'trowel', 'pruner', 'shear', 'lawn mower',
        'trimmer', 'edger', 'blower', 'patio', 'deck', 'grill', 'barbecue',
        'outdoor furniture', 'umbrella', 'gazebo', 'pergola', 'trellis',
        'bird feeder', 'bird bath', 'composter', 'rain barrel',
        
        // Pet products
        'pet', 'dog', 'cat', 'bird', 'fish', 'reptile', 'small animal',
        'pet food', 'pet treat', 'pet toy', 'pet bed', 'pet house', 'cage',
        'aquarium', 'terrarium', 'leash', 'collar', 'harness', 'crate',
        'litter', 'litter box', 'pet carrier', 'pet bowl', 'pet feeder',
        'pet waterer', 'scratching post', 'pet furniture', 'pet clothing',
        
        // Additional product types
        'bag', 'container', 'packaging', 'bottle', 'pouch', 'wrapper',
        'box', 'case', 'utensil', 'cutlery', 'straw', 'plate', 'cup',
        'cloth', 'fabric', 'textile', 'furniture', 'toy', 'brush',
        'sponge', 'cleaner', 'detergent', 'soap', 'dish', 'bowl', 'mug',
        'glass', 'can', 'jar', 'canister', 'bin', 'basket', 'hamper',
        'hanger', 'rack', 'hook', 'shelf', 'storage', 'organizer',
        'container', 'tub', 'bucket', 'tank', 'dispenser', 'pump'
      ]
    },
    price: ['._30jeq3', '._1_WHN1'],
    rating: ['._3LWZlK', '._2d4LTz'],
    isProductValid: (node) => {
      return node.querySelector('._4rR01T') || node.querySelector('._30jeq3');
    },
    domainMatches: ['flipkart.com']
  },
  
  // Myntra configuration
  myntra: {
    productContainers: ['.product-base', '.product-sliderContainer', '.product-productMetaInfo'],
    productTitle: ['.product-product', '.product-brand', '.pdp-title'],
    productDescription: [
      '.product-product',
      '.pdp-product-description-content', 
      '.index-rowValue'
    ],
    productFeatures: ['.size-buttons-size-button', '.pdp-sizeFitDesc'],
    productMaterials: {
      containers: ['.pdp-productDescriptorsContainer', 'p', '.index-row', 'div', 'li', 'span', 'ul', '.pdp-product-description-content'],
      textMatch: [
        // Material identifiers
        'material', 'composition', 'made of', 'made from', 'constructed from',
        'built with', 'fabricated from', 'components', 'ingredient', 'content',
        'fabric', 'construction', 'shell', 'outer', 'inner', 'lining', 'filling',
        'made with', 'manufactured from', 'structure', 'frame', 'housing',
        
        // Plastic materials
        'plastic', 'polyester', 'nylon', 'pvc', 'polyethylene', 'polypropylene',
        'polyurethane', 'vinyl', 'acrylic', 'synthetic', 'polymer', 'hdpe', 'ldpe',
        'pet', 'neoprene', 'polycarbonate', 'synthetic fabric', 'artificial',
        'polyvinyl', 'thermoplastic', 'polystyrene', 'abs', 'polyamide',
        'spandex', 'elastane', 'lycra', 'rayon', 'viscose', 'polyvinyl chloride',
        'pleather', 'faux leather', 'synthetic leather', 'microfiber', 'microfibre',
        
        // Natural and biodegradable materials
        'cotton', 'wool', 'linen', 'hemp', 'jute', 'sisal', 'bamboo', 'cork',
        'wood', 'paper', 'cardboard', 'biodegradable', 'compostable', 'natural',
        'organic', 'plant-based', 'cellulose', 'straw', 'bagasse', 'wheat',
        'mushroom leather', 'mycelium', 'cork fabric', 'tencel', 'lyocell',
        'modal', 'kapok', 'ramie', 'flax', 'abaca', 'pina', 'soy fabric',
        'silk', 'cashmere', 'merino', 'alpaca', 'mohair', 'angora', 'down',
        'feather', 'leather', 'suede', 'cotton canvas', 'denim', 'chambray',
        'muslin', 'twill', 'flannel', 'velvet', 'corduroy',
        
        // Recyclable materials
        'recyclable', 'recycled', 'upcycled', 'repurposed', 'reclaimed',
        'post-consumer', 'pre-consumer', 'recycled content', 'glass', 'metal',
        'aluminum', 'steel', 'tin', 'copper', 'brass', 'iron', 'ceramic',
        'terracotta', 'porcelain', 'stone', 'marble', 'granite', 'silicone',
        'recycled plastic', 'recycled polyester', 'recycled nylon', 'recycled paper',
        'recycled metal', 'recycled glass', 'reclaimed wood',
        
        // Eco-friendly identifiers
        'eco-friendly', 'environmentally friendly', 'sustainable', 'renewable',
        'green', 'zero waste', 'plastic-free', 'eco-conscious', 'earth-friendly',
        'carbon neutral', 'low impact', 'non-toxic', 'chemical-free',
        'non-plastic', 'biodegradable packaging', 'eco packaging',
        'fair trade', 'ethical', 'vegan', 'cruelty-free', 'organic certified',
        'gots certified', 'oeko-tex', 'bluesign', 'cradle to cradle',
        
        // Kitchen products
        'cookware', 'kitchenware', 'utensil', 'cutlery', 'flatware', 'dinnerware',
        'silverware', 'knife', 'fork', 'spoon', 'cutting board', 'chopping board',
        'pan', 'pot', 'skillet', 'dutch oven', 'bakeware', 'mixing bowl',
        'food storage', 'kitchen tool', 'cooking utensil', 'spatula', 'whisk',
        'ladle', 'tong', 'colander', 'strainer', 'baking sheet', 'roasting pan',
        'pressure cooker', 'slow cooker', 'coffee maker', 'kettle', 'teapot',
        'food processor', 'blender', 'mixer', 'juicer', 'cutting mat', 'grill pan',
        
        // Electronics
        'electronic', 'device', 'gadget', 'appliance', 'charger', 'cable',
        'adapter', 'computer', 'laptop', 'tablet', 'phone', 'smartphone',
        'headphone', 'earbud', 'speaker', 'television', 'tv', 'monitor',
        'camera', 'printer', 'scanner', 'router', 'modem', 'gaming',
        'console', 'controller', 'keyboard', 'mouse', 'power bank', 'usb',
        'hdmi', 'motherboard', 'processor', 'memory', 'storage', 'hard drive',
        'ssd', 'refrigerator', 'freezer', 'dishwasher', 'washing machine',
        'dryer', 'vacuum', 'microwave', 'oven', 'toaster', 'air conditioner',
        'fan', 'heater', 'purifier', 'humidifier', 'dehumidifier',
        
        // Clothing and apparel
        'clothing', 'apparel', 'garment', 'shirt', 't-shirt', 'tee', 'blouse',
        'sweater', 'hoodie', 'sweatshirt', 'jacket', 'coat', 'blazer', 'vest',
        'pants', 'jeans', 'trousers', 'shorts', 'skirt', 'dress', 'suit',
        'pajama', 'sleepwear', 'underwear', 'socks', 'hat', 'cap', 'beanie',
        'scarf', 'glove', 'mitten', 'shoe', 'sneaker', 'boot', 'sandal', 'slipper',
        'belt', 'tie', 'bowtie', 'purse', 'handbag', 'backpack', 'tote',
        'wallet', 'wristband', 'headband', 'activewear', 'sportswear', 'swimwear',
        'outerwear', 'loungewear', 'workwear', 'uniform', 'costume',
        
        // Bathroom products
        'bathroom', 'toiletry', 'toothbrush', 'toothpaste', 'floss', 'mouthwash',
        'shower', 'bath', 'soap', 'body wash', 'shampoo', 'conditioner',
        'razor', 'shaving', 'lotion', 'moisturizer', 'deodorant', 'towel',
        'washcloth', 'bath mat', 'shower curtain', 'toilet paper', 'tissue',
        'cotton swab', 'cotton ball', 'makeup', 'skincare', 'haircare',
        'toilet brush', 'plunger', 'bath caddy', 'soap dish', 'toothbrush holder',
        'toilet seat', 'shower head', 'faucet', 'sink', 'bathtub', 'vanity',
        'mirror', 'cabinet', 'scale', 'hair dryer', 'straightener', 'curler',
        
        // Home furniture and decor
        'furniture', 'decor', 'decoration', 'sofa', 'couch', 'loveseat', 'chair',
        'table', 'desk', 'coffee table', 'end table', 'nightstand', 'dresser',
        'chest', 'bookshelf', 'bookcase', 'cabinet', 'entertainment center',
        'tv stand', 'bed', 'mattress', 'box spring', 'bed frame', 'headboard',
        'footboard', 'ottoman', 'bench', 'stool', 'barstool', 'dining set',
        'sectional', 'recliner', 'futon', 'daybed', 'trundle', 'lamp', 'lighting',
        'chandelier', 'pendant', 'sconce', 'floor lamp', 'table lamp', 'ceiling fan',
        'rug', 'carpet', 'mat', 'runner', 'curtain', 'drape', 'blind', 'shade',
        'pillow', 'cushion', 'throw', 'blanket', 'comforter', 'duvet', 'quilt',
        
        // Baby and kids products
        'baby', 'infant', 'toddler', 'kid', 'child', 'children', 'diaper',
        'wipe', 'bottle', 'pacifier', 'teether', 'bib', 'onesie', 'sleeper',
        'stroller', 'car seat', 'high chair', 'booster', 'crib', 'bassinet',
        'playpen', 'baby monitor', 'changing table', 'baby carrier', 'baby wrap',
        'nursing', 'breast pump', 'formula', 'baby food', 'toy', 'game', 'puzzle',
        'doll', 'action figure', 'building block', 'educational toy', 'stuffed animal',
        'plush', 'ride-on', 'tricycle', 'bicycle', 'art supply', 'craft',
        'school supply', 'backpack', 'lunch box', 'sippy cup',
        
        // Office and school supplies
        'office', 'school', 'stationery', 'paper', 'notebook', 'journal',
        'binder', 'folder', 'file', 'organizer', 'pen', 'pencil', 'marker',
        'highlighter', 'eraser', 'sharpener', 'stapler', 'staple', 'paper clip',
        'binder clip', 'tape', 'adhesive', 'glue', 'scissors', 'ruler',
        'calculator', 'calendar', 'planner', 'desk pad', 'desk organizer',
        'whiteboard', 'bulletin board', 'thumbtack', 'pushpin', 'bookend',
        'label', 'stamp', 'ink', 'toner', 'cartridge', 'printer paper',
        
        // Sports and outdoor
        'sport', 'outdoor', 'fitness', 'exercise', 'workout', 'gym', 'athletic',
        'camping', 'hiking', 'backpacking', 'fishing', 'hunting', 'biking',
        'cycling', 'swimming', 'surfing', 'skiing', 'snowboarding', 'skateboarding',
        'tennis', 'golf', 'basketball', 'football', 'soccer', 'baseball',
        'volleyball', 'yoga', 'pilates', 'weight', 'dumbbell', 'kettlebell',
        'resistance band', 'treadmill', 'elliptical', 'bike', 'tent', 'sleeping bag',
        'backpack', 'cooler', 'canteen', 'water bottle', 'hydration',
        
        // Garden and outdoor home
        'garden', 'gardening', 'plant', 'flower', 'seed', 'soil', 'mulch',
        'fertilizer', 'pot', 'planter', 'hose', 'sprinkler', 'watering can',
        'shovel', 'spade', 'rake', 'trowel', 'pruner', 'shear', 'lawn mower',
        'trimmer', 'edger', 'blower', 'patio', 'deck', 'grill', 'barbecue',
        'outdoor furniture', 'umbrella', 'gazebo', 'pergola', 'trellis',
        'bird feeder', 'bird bath', 'composter', 'rain barrel',
        
        // Pet products
        'pet', 'dog', 'cat', 'bird', 'fish', 'reptile', 'small animal',
        'pet food', 'pet treat', 'pet toy', 'pet bed', 'pet house', 'cage',
        'aquarium', 'terrarium', 'leash', 'collar', 'harness', 'crate',
        'litter', 'litter box', 'pet carrier', 'pet bowl', 'pet feeder',
        'pet waterer', 'scratching post', 'pet furniture', 'pet clothing',
        
        // Additional product types
        'bag', 'container', 'packaging', 'bottle', 'pouch', 'wrapper',
        'box', 'case', 'utensil', 'cutlery', 'straw', 'plate', 'cup',
        'cloth', 'fabric', 'textile', 'furniture', 'toy', 'brush',
        'sponge', 'cleaner', 'detergent', 'soap', 'dish', 'bowl', 'mug',
        'glass', 'can', 'jar', 'canister', 'bin', 'basket', 'hamper',
        'hanger', 'rack', 'hook', 'shelf', 'storage', 'organizer',
        'container', 'tub', 'bucket', 'tank', 'dispenser', 'pump',
        
        // Shoes and footwear
        'shoe', 'footwear', 'sneaker', 'boot', 'sandal', 'slipper', 'flip flop', 'loafer',
        'oxford', 'pump', 'heel', 'wedge', 'mule', 'clog', 'espadrille', 'platform',
        'athletic shoe', 'running shoe', 'walking shoe', 'hiking boot', 'dress shoe',
        'casual shoe', 'formal shoe', 'work boot', 'rain boot', 'winter boot',
        'shoe material', 'sole', 'insole', 'outsole', 'midsole', 'upper', 'lining',
        'toe box', 'heel counter', 'shank', 'welt', 'last', 'shoe construction',
        
        // Cotton products
        'cotton', 'cotton blend', '100% cotton', 'organic cotton', 'pima cotton',
        'egyptian cotton', 'supima cotton', 'cotton fabric', 'cotton yarn',
        'cotton thread', 'cotton fiber', 'cotton material', 'cotton clothing',
        'cotton apparel', 'cotton garment', 'cotton textile', 'cotton weave',
        'cotton knit', 'cotton jersey', 'cotton twill', 'cotton canvas',
        'cotton poplin', 'cotton voile', 'cotton muslin', 'cotton sateen',
        'cotton percale', 'cotton flannel', 'cotton terry', 'cotton velour',
        'cotton corduroy', 'cotton denim', 'cotton chambray', 'cotton gauze',
        'cotton batiste', 'cotton broadcloth', 'cotton cambric', 'cotton chintz',
        'cotton crepe', 'cotton damask', 'cotton drill', 'cotton duck',
        'cotton eyelet', 'cotton gingham', 'cotton lawn', 'cotton organdy',
        'cotton oxford', 'cotton pique', 'cotton plisse', 'cotton seersucker',
        'cotton shirting', 'cotton taffeta', 'cotton toile', 'cotton velveteen',
        
        // Bags and accessories
        'bag', 'handbag', 'purse', 'tote', 'backpack', 'messenger bag', 'duffel',
        'satchel', 'clutch', 'shoulder bag', 'crossbody', 'waist bag', 'fanny pack',
        'laptop bag', 'briefcase', 'suitcase', 'travel bag', 'gym bag', 'beach bag',
        'shopping bag', 'grocery bag', 'reusable bag', 'tote bag', 'drawstring bag',
        'backpack', 'rucksack', 'knapsack', 'sling bag', 'belt bag', 'pouch',
        'cosmetic bag', 'makeup bag', 'toiletry bag', 'travel organizer',
        'bag material', 'bag construction', 'bag lining', 'bag hardware',
        'bag strap', 'bag handle', 'bag zipper', 'bag pocket', 'bag compartment',
        
        // Lipstick and cosmetics
        'lipstick', 'lip color', 'lip product', 'lip balm', 'lip gloss', 'lip stain',
        'lip liner', 'lip crayon', 'lip pencil', 'lip tint', 'lip treatment',
        'cosmetic', 'makeup', 'beauty product', 'beauty item', 'cosmetic product',
        'makeup product', 'beauty care', 'personal care', 'skincare', 'face care',
        'body care', 'hair care', 'nail care', 'cosmetic ingredient', 'makeup ingredient',
        'beauty ingredient', 'cosmetic formula', 'makeup formula', 'beauty formula',
        'cosmetic packaging', 'makeup packaging', 'beauty packaging', 'cosmetic container',
        'makeup container', 'beauty container', 'cosmetic applicator', 'makeup applicator',
        'beauty applicator', 'cosmetic brush', 'makeup brush', 'beauty brush',
        'cosmetic sponge', 'makeup sponge', 'beauty sponge', 'cosmetic tool',
        'makeup tool', 'beauty tool', 'cosmetic set', 'makeup set', 'beauty set',
        'cosmetic kit', 'makeup kit', 'beauty kit', 'cosmetic palette', 'makeup palette',
        'beauty palette', 'cosmetic compact', 'makeup compact', 'beauty compact',
        'cosmetic powder', 'makeup powder', 'beauty powder', 'cosmetic cream',
        'makeup cream', 'beauty cream', 'cosmetic lotion', 'makeup lotion',
        'beauty lotion', 'cosmetic serum', 'makeup serum', 'beauty serum',
        'cosmetic oil', 'makeup oil', 'beauty oil', 'cosmetic mask', 'makeup mask',
        'beauty mask', 'cosmetic scrub', 'makeup scrub', 'beauty scrub',
        'cosmetic cleanser', 'makeup cleanser', 'beauty cleanser', 'cosmetic toner',
        'makeup toner', 'beauty toner', 'cosmetic moisturizer', 'makeup moisturizer',
        'beauty moisturizer', 'cosmetic foundation', 'makeup foundation',
        'beauty foundation', 'cosmetic concealer', 'makeup concealer',
        'beauty concealer', 'cosmetic powder', 'makeup powder', 'beauty powder',
        'cosmetic blush', 'makeup blush', 'beauty blush', 'cosmetic bronzer',
        'makeup bronzer', 'beauty bronzer', 'cosmetic highlighter',
        'makeup highlighter', 'beauty highlighter', 'cosmetic eyeshadow',
        'makeup eyeshadow', 'beauty eyeshadow', 'cosmetic eyeliner',
        'makeup eyeliner', 'beauty eyeliner', 'cosmetic mascara',
        'makeup mascara', 'beauty mascara', 'cosmetic brow product',
        'makeup brow product', 'beauty brow product', 'cosmetic setting spray',
        'makeup setting spray', 'beauty setting spray', 'cosmetic primer',
        'makeup primer', 'beauty primer', 'cosmetic remover', 'makeup remover',
        'beauty remover',
        
        // Table cloths and linens
        'table cloth', 'tablecloth', 'table linen', 'table runner', 'placemat',
        'table cover', 'table protector', 'table pad', 'table topper',
        'table setting', 'table decor', 'table accessory', 'tableware',
        'dining cloth', 'dining linen', 'dining cover', 'dining protector',
        'table fabric', 'table material', 'linen cloth', 'linen fabric',
        'cotton table cloth', 'polyester table cloth', 'vinyl table cloth',
        'plastic table cloth', 'waterproof table cloth', 'stain resistant table cloth',
        'washable table cloth', 'reusable table cloth', 'disposable table cloth',
        'table cloth size', 'table cloth dimensions', 'table cloth shape',
        'table cloth pattern', 'table cloth design', 'table cloth color',
        'table cloth style', 'table cloth finish', 'table cloth texture',
        
        // Soaps and cleansers
        'soap', 'bar soap', 'liquid soap', 'hand soap', 'body soap', 'face soap',
        'bath soap', 'shower soap', 'cleansing bar', 'cleansing soap',
        'antibacterial soap', 'antimicrobial soap', 'germicidal soap',
        'medicated soap', 'therapeutic soap', 'moisturizing soap',
        'hydrating soap', 'nourishing soap', 'gentle soap', 'mild soap',
        'sensitive skin soap', 'fragrance free soap', 'unscented soap',
        'natural soap', 'organic soap', 'vegan soap', 'cruelty free soap',
        'handmade soap', 'artisan soap', 'castile soap', 'glycerin soap',
        'shea butter soap', 'coconut oil soap', 'olive oil soap',
        'essential oil soap', 'herbal soap', 'botanical soap',
        'exfoliating soap', 'scrub soap', 'cleansing soap',
        'soap ingredients', 'soap formula', 'soap composition',
        'soap base', 'soap material', 'soap packaging',
        
        // Shampoos and hair care
        'shampoo', 'hair shampoo', 'hair wash', 'hair cleanser',
        'clarifying shampoo', 'moisturizing shampoo', 'hydrating shampoo',
        'volumizing shampoo', 'thickening shampoo', 'strengthening shampoo',
        'repairing shampoo', 'damage repair shampoo', 'color safe shampoo',
        'color protection shampoo', 'sulfate free shampoo',
        'paraben free shampoo', 'silicone free shampoo',
        'natural shampoo', 'organic shampoo', 'vegan shampoo',
        'cruelty free shampoo', 'herbal shampoo', 'botanical shampoo',
        'medicated shampoo', 'dandruff shampoo', 'anti dandruff shampoo',
        'scalp care shampoo', 'scalp treatment shampoo',
        'dry shampoo', 'waterless shampoo', 'shampoo bar',
        'solid shampoo', 'shampoo ingredients', 'shampoo formula',
        'shampoo composition', 'shampoo base', 'shampoo material',
        'shampoo packaging',
        
        // Face washes and cleansers
        'face wash', 'facial cleanser', 'face cleanser', 'facial wash',
        'cleansing gel', 'cleansing foam', 'cleansing cream',
        'cleansing lotion', 'cleansing oil', 'cleansing balm',
        'cleansing water', 'micellar water', 'cleansing milk',
        'gentle cleanser', 'mild cleanser', 'sensitive skin cleanser',
        'hydrating cleanser', 'moisturizing cleanser', 'nourishing cleanser',
        'exfoliating cleanser', 'scrub cleanser', 'deep cleansing',
        'pore cleansing', 'oil control cleanser', 'acne cleanser',
        'blemish cleanser', 'medicated cleanser', 'therapeutic cleanser',
        'natural cleanser', 'organic cleanser', 'vegan cleanser',
        'cruelty free cleanser', 'herbal cleanser', 'botanical cleanser',
        'fragrance free cleanser', 'unscented cleanser',
        'cleanser ingredients', 'cleanser formula', 'cleanser composition',
        'cleanser base', 'cleanser material', 'cleanser packaging'
      ]
    },
    price: ['.product-discountedPrice', '.pdp-price'],
    rating: ['.product-ratingsContainer', '.index-overallRating'],
    isProductValid: (node) => {
      return node.querySelector('.product-brand') || node.querySelector('.product-product');
    },
    domainMatches: ['myntra.com']
  }
};

// Identify the current e-commerce site
function identifySite() {
  const hostname = window.location.hostname.toLowerCase();
  
  for (const [site, config] of Object.entries(siteConfig)) {
    if (config.domainMatches.some(domain => hostname.includes(domain))) {
      console.log(`Identified site as: ${site}`);
      return site;
    }
  }
  
  // Generic fallback for unknown sites
  if (hostname.includes('shop') || hostname.includes('store') || 
      hostname.includes('product') || hostname.includes('buy')) {
    console.log("Identified as a generic e-commerce site");
    return 'generic';
  }
  
  console.log("Not recognized as an e-commerce site");
  return null;
}

// Get product elements based on the current site
function getProductElements() {
  const site = identifySite();
  if (!site || !siteConfig[site]) return [];
  
  let productElements = [];
  const config = siteConfig[site];
  
  // Try each selector until we find results
  for (const selector of config.productContainers) {
    try {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        console.log(`Found ${elements.length} products using selector: ${selector}`);
        productElements = Array.from(elements);
        break;
      }
    } catch (error) {
      console.error(`Error with selector "${selector}":`, error);
    }
  }
  
  // Filter out invalid product elements
  if (config.isProductValid && productElements.length > 0) {
    productElements = productElements.filter(config.isProductValid);
    console.log(`After validation: ${productElements.length} valid products`);
  }
  
  return productElements;
}

// Extract the specified information from an element using selectors
function extractFromSelectors(element, selectors) {
  if (!selectors) return '';
  
  // Handle array of selectors
  if (Array.isArray(selectors)) {
    for (const selector of selectors) {
      try {
        const result = extractFromSelectors(element, selector);
        if (result) return result;
      } catch (error) {
        console.error(`Error with selector "${selector}":`, error);
      }
    }
    return '';
  }
  
  // Handle string selector
  try {
    const elementFound = element.querySelector(selectors);
    if (elementFound) return elementFound.textContent.trim();
  } catch (error) {
    console.error(`Error with selector "${selectors}":`, error);
  }
  
  return '';
}

// Find elements containing specific text
function findElementsWithText(rootElement, selectors, textToMatch) {
  let results = [];
  
  // Convert single string to array for uniform processing
  const textPatterns = Array.isArray(textToMatch) ? textToMatch : [textToMatch];
  
  // For each potential container selector
  for (const selector of selectors) {
    try {
      // Find all elements of this type
      const elements = rootElement.querySelectorAll(selector);
      
      // Check each element for the text patterns
      for (const element of elements) {
        const elementText = element.textContent.toLowerCase();
        
        // Check if any of the text patterns match
        for (const pattern of textPatterns) {
          if (elementText.includes(pattern.toLowerCase())) {
            results.push(element);
            break; // Only add the element once if it matches multiple patterns
          }
        }
      }
    } catch (error) {
      console.error(`Error with selector "${selector}" in findElementsWithText:`, error);
    }
  }
  
  return results;
}

// Extract material information using the textMatch approach
function extractMaterialTextInfo(element, materialConfig) {
  if (!materialConfig || !materialConfig.containers || !materialConfig.textMatch) {
    return '';
  }
  
  let materialText = '';
  
  // Find elements containing the material text
  const materialElements = findElementsWithText(
    element, 
    materialConfig.containers, 
    materialConfig.textMatch
  );
  
  // Get text from these elements and their siblings/children
  materialElements.forEach(materialElement => {
    // Include the element's own text
    materialText += materialElement.textContent.trim() + ' ';
    
    // Try to get sibling text (often materials are in key-value pairs)
    if (materialElement.nextElementSibling) {
      materialText += materialElement.nextElementSibling.textContent.trim() + ' ';
    }
    
    // Check children for material details
    const children = materialElement.children;
    for (let i = 0; i < children.length; i++) {
      materialText += children[i].textContent.trim() + ' ';
    }
  });
  
  return materialText.trim();
}

// Extract all product information
function extractProductInfo(productElement) {
  const site = identifySite();
  if (!site || !siteConfig[site]) return { text: productElement.textContent || '' };
  
  const config = siteConfig[site];
  
  // Extract primary information
  const title = extractFromSelectors(productElement, config.productTitle);
  const description = extractFromSelectors(productElement, config.productDescription);
  
  // Extract material-related information using our custom approach
  let materialInfo = extractMaterialTextInfo(productElement, config.productMaterials);
  
  // Extract product features (potentially containing material info)
  let featuresText = '';
  try {
    const featureElements = productElement.querySelectorAll(config.productFeatures);
    featureElements.forEach(el => featuresText += el.textContent.trim() + ' ');
  } catch (error) {
    console.error("Error extracting features:", error);
  }
  
  // Extract additional info from nested elements for thorough search
  let additionalText = '';
  try {
    const allTextElements = productElement.querySelectorAll('p, span, div, li, td, tr, th, h3, h4, h5, a');
    
    // Define all material and plastic-related terms to look for
    const materialTerms = [
      'material', 'composition', 'made of', 'made from', 'constructed from',
      'built with', 'fabricated from', 'components', 'ingredient', 'content',
      'plastic', 'polyester', 'nylon', 'acrylic', 'polyurethane',
      'pvc', 'polypropylene', 'polyethylene', 'pet', 'vinyl',
      'synthetic', 'polymer', 'polycarbonate', 'polystyrene',
      'abs', 'polyamide', 'acrylonitrile', 'hdpe', 'ldpe',
      'recycled', 'biodegradable', 'compostable', 'bamboo', 'cotton',
      'wood', 'glass', 'metal', 'steel', 'aluminum', 'silicon',
      'bag', 'container', 'packaging', 'eco', 'sustainable', 'green'
    ];
    
    allTextElements.forEach(el => {
      const text = el.textContent.trim().toLowerCase();
      
      // Check if any material term exists in the text
      if (materialTerms.some(term => text.includes(term))) {
        additionalText += el.textContent.trim() + ' ';
      }
    });
  } catch (error) {
    console.error("Error extracting additional text:", error);
  }
  
  // Perform specific material detection
  let plasticsDetected = [];
  let biodegradableDetected = [];
  let recyclableDetected = [];
  
  const plasticTerms = [
    'plastic', 'polyester', 'nylon', 'acrylic', 'polyurethane',
    'pvc', 'polypropylene', 'polyethylene', 'pet', 'vinyl',
    'synthetic', 'polymer', 'polycarbonate', 'polystyrene',
    'hdpe', 'ldpe', 'abs', 'polyamide', 'acrylonitrile'
  ];
  
  const biodegradableTerms = [
    'biodegradable', 'compostable', 'decomposable', 'eco-friendly', 
    'organic', 'natural', 'plant-based', 'cotton', 'wool', 'linen', 
    'hemp', 'jute', 'sisal', 'bamboo', 'cork', 'wood', 'paper', 
    'cardboard', 'bagasse', 'wheat straw', 'mushroom', 'mycelium', 
    'tencel', 'lyocell', 'modal', 'kapok', 'ramie', 'flax'
  ];
  
  const recyclableTerms = [
    'recyclable', 'recycled', 'upcycled', 'repurposed', 'reclaimed',
    'post-consumer', 'pre-consumer', 'recycled content', 'glass', 
    'metal', 'aluminum', 'steel', 'tin', 'copper', 'brass', 'iron'
  ];
  
  // Special case for common plastic product searches
  const plasticProducts = [
    'plastic bag', 'plastic bags', 'ziplock', 'zipbag', 'sandwich bag',
    'freezer bag', 'plastic container', 'plastic bottle', 'storage bag',
    'garbage bag', 'trash bag', 'plastic wrap', 'packaging', 'plastic packaging'
  ];
  
  // Special case for biodegradable products
  const biodegradableProducts = [
    'biodegradable bag', 'compostable bag', 'eco-friendly bag', 
    'paper bag', 'cloth bag', 'canvas bag', 'jute bag', 'cotton bag',
    'reusable bag', 'bamboo products', 'wooden utensils', 'bamboo utensils',
    'natural cleaning products', 'sustainable packaging', 'plant-based packaging'
  ];
  
  // Special case for recyclable products
  const recyclableProducts = [
    'recycled paper', 'recycled packaging', 'recycled plastic', 'recycled materials',
    'recycled glass', 'recycled metal', 'recycled fabric', 'recycled content', 
    'glass container', 'metal container', 'recycled products', 'recyclable packaging',
    'refillable container', 'reusable packaging', 'zero waste packaging'
  ];
  
  const fullText = (productElement.textContent || '').toLowerCase();
  const productTitle = (title || '').toLowerCase();
  
  // Check if this is explicitly a plastic product
  const isProbablyPlasticProduct = plasticProducts.some(term => 
    fullText.includes(term) || productTitle.includes(term)
  );
  
  // Check if this is explicitly a biodegradable product
  const isProbablyBiodegradableProduct = biodegradableProducts.some(term => 
    fullText.includes(term) || productTitle.includes(term)
  );
  
  // Check if this is explicitly a recyclable product
  const isProbablyRecyclableProduct = recyclableProducts.some(term => 
    fullText.includes(term) || productTitle.includes(term)
  );
  
  if (isProbablyPlasticProduct) {
    console.log("Product identified as likely plastic product based on keywords");
    
    // If it's likely a plastic product but we haven't detected specific plastics,
    // add generic "plastic" to the detected list
    if (!plasticTerms.some(term => fullText.includes(term))) {
      plasticsDetected.push('plastic');
    }
  }
  
  if (isProbablyBiodegradableProduct) {
    console.log("Product identified as likely biodegradable product based on keywords");
    
    // If it's likely a biodegradable product but we haven't detected specific materials,
    // add generic "biodegradable" to the detected list
    if (!biodegradableTerms.some(term => fullText.includes(term))) {
      biodegradableDetected.push('biodegradable');
    }
  }
  
  if (isProbablyRecyclableProduct) {
    console.log("Product identified as likely recyclable product based on keywords");
    
    // If it's likely a recyclable product but we haven't detected specific materials,
    // add generic "recyclable" to the detected list
    if (!recyclableTerms.some(term => fullText.includes(term))) {
      recyclableDetected.push('recyclable');
    }
  }
  
  // Check for specific plastic terms
  plasticTerms.forEach(term => {
    if (fullText.includes(term) && !plasticsDetected.includes(term)) {
      plasticsDetected.push(term);
    }
  });
  
  // Check for specific biodegradable terms
  biodegradableTerms.forEach(term => {
    if (fullText.includes(term) && !biodegradableDetected.includes(term)) {
      biodegradableDetected.push(term);
    }
  });
  
  // Check for specific recyclable terms
  recyclableTerms.forEach(term => {
    if (fullText.includes(term) && !recyclableDetected.includes(term)) {
      recyclableDetected.push(term);
    }
  });
  
  // Default for typical plastic products by type
  if (
    (productTitle.includes('bag') && !fullText.includes('paper') && !fullText.includes('fabric') && !fullText.includes('cotton')) ||
    (productTitle.includes('storage') && fullText.includes('zipper'))
  ) {
    if (!plasticsDetected.includes('plastic')) {
      plasticsDetected.push('plastic');
      console.log("Added default 'plastic' material for bag product");
    }
  }
  
  // Extract eco-friendly claims
  const ecoFriendlyClaims = [];
  const ecoFriendlyTerms = [
    'eco-friendly', 'environmentally friendly', 'sustainable', 'renewable',
    'green', 'zero waste', 'plastic-free', 'eco-conscious', 'earth-friendly',
    'carbon neutral', 'low impact', 'non-toxic', 'chemical-free', 'natural'
  ];
  
  ecoFriendlyTerms.forEach(term => {
    if (fullText.includes(term) && !ecoFriendlyClaims.includes(term)) {
      ecoFriendlyClaims.push(term);
    }
  });
  
  // Combine all text for material detection
  const combinedText = [title, description, materialInfo, featuresText, additionalText]
    .filter(text => text.trim().length > 0)
    .join(' ');
  
  // Fallback to full text if we didn't get enough info
  if (combinedText.trim().length < 50) {
    console.log("Using fallback text extraction");
    return { 
      text: productElement.textContent || '',
      plasticsDetected: plasticsDetected,
      biodegradableDetected: biodegradableDetected,
      recyclableDetected: recyclableDetected,
      ecoFriendlyClaims: ecoFriendlyClaims,
      title: title || '',
      isProbablyPlasticProduct,
      isProbablyBiodegradableProduct,
      isProbablyRecyclableProduct
    };
  }
  
  return { 
    title,
    description,
    materialInfo,
    featuresText,
    additionalText,
    plasticsDetected,
    biodegradableDetected,
    recyclableDetected,
    ecoFriendlyClaims,
    isProbablyPlasticProduct,
    isProbablyBiodegradableProduct,
    isProbablyRecyclableProduct,
    text: combinedText
  };
}

// Main scraping function
function scrapeProducts() {
  const productElements = getProductElements();
  console.log(`Scraping ${productElements.length} products`);
  
  return productElements.map(element => {
    try {
      return {
        element,
        info: extractProductInfo(element)
      };
    } catch (error) {
      console.error("Error scraping product:", error);
      return {
        element,
        info: { text: element.textContent || '' }
      };
    }
  });
}

// Export the API
window.eco3RScraper = {
  identifySite,
  getProductElements,
  extractProductInfo,
  scrapeProducts
};

// Export for ES modules if supported
if (typeof exports !== 'undefined') {
  exports.identifySite = identifySite;
  exports.getProductElements = getProductElements;
  exports.extractProductInfo = extractProductInfo;
  exports.scrapeProducts = scrapeProducts;
} 