// Dados dos perfumes
const perfumesData = [
    // Femininos
    { categoria: "Feminino", nome: "212 NYC", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "212 SEXY", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "212 VIP", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "212 VIP BLACK ELIXIR", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "212 VIP ROSE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "212 VIP ROSE LOVE NY", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ACQUA DI GIOIA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "ACQUAMARINE N POWDER EBK", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "AFTERNOON SWIM - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ALEXANDRIA II - XERJOF", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ALIEN", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ANGE OU DEMON-EDP 2006", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ANGEL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ANGEL ELIXIR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ANGELS' SHARE BY KILIAN", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "ANGELS' SHARE PARADIS", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ANI NISHANE", preco100ml: 210, preco30ml: 260 },
    { categoria: "Feminino", nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ASAD LATTAFA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "BABYCAT - YSL", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "BACCARAT ROUGE 540", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "BAL D'AFRIQUE BYREDO", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "BIZANCE ROCHAS DE PARIS", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "BONBON", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "BOND Nº 9", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "BY THE FIREPLACE REPLICA", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "CACTUS GARDEN - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "CARMINA CREED", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "CARNAL FLOWER", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "CH - CAROLINA HERRERA", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CHANCE EAU TENDRE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CHANEL 5", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CHLOE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CHOCOLATE GREEDY", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "CK BE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CK ONE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "CLASSIQUE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "COCO MADEMOISELLE", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "COROMANDEL EDP - CHANEL", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "DELINA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "DELINA EXCLUSIVE", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "DEVOTION D&G", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "DKNY BY DELICIOUS", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "DOLCE GABBANA RED", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "EDEN - CACHAREL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ERBA PURA XERJOFF", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ETERNITY - CK", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "EUPHORIA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "FAME - PACO RAB", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "FANTASY - B. SPEARS", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "FLORA GORGEOUS GARDENIA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "FLORA GORGEOUS MAGNOLIA", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "GABRIELA SABATINI", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "GOD OF FIRE", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "GODDESS BUR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "GOOD GIRL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "GOOD GIRL BLUSH", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "GOOD GIRL BLUSH ELIXIR", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "HACIVAT NISHANE", preco100ml: 240, preco30ml: 290 },
    { categoria: "Feminino", nome: "HER CODE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "HUNDRED SILENT WAYS - NISHANE", preco100ml: 210, preco30ml: 260 },
    { categoria: "Feminino", nome: "HYPNOSE - LANCOME", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "HYPNOTIC POISON - DIOR", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "IDOLE", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "INITIO OUD F GREATNESS", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "ISSEY MIYAKE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "J MALONE ENG PEAR E FRESIA", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "JADORE - DIOR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "JAZZ CLUB - REPLICA", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "KENZO AMOUR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "KENZO FLOWER", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "L'INTERDIT - GIVENCHY", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "L'INTERDIT EDP ROUGE", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "LA BELLE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LA BELLE LE PARFUM", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "LA BOMBA CH", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "LA NUIT TRESOR", preco100ml: 150, preco30ml: 200 },
    { categoria: "Feminino", nome: "LA VIE EST BELLE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LA VIE EST BELLE ELIXIR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LA VIE EST BELLE L'EXTRAIT", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LA VIE SOLEIL CRISTAL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LADY MILLION", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LAMAR KAJAL", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "LAYTON .PARFUMS", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "LIBRE - YSL", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "LIGHT BLUE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LILI", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LOULOU - CACHAREL", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "LOVE IN WHITE 2005 - CREED", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "LUCKY CHARM CH", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "LV LOVERS - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "MEGAMARE - O.PARISI", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "MILLESIME IMPERIAL CREED", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "MISS DIOR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "MONCLER POUR FEMME", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "MONOI VAGUES D'ETE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "MONTBLANC SIGNATURE PREMIUM", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "MY WAY", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "NARCISO FOR HER", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "NAXOS XJ1861 - XERJOFF", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "NEW LOOK - DIOR 2024", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "NOUVEAU MONDE - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "OLYMPEA", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "OMBRE LEATHER", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "OMBRE NOMADE - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "OMNIA AMETHYSTE BULGARI", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "OUD MARACUJA", preco100ml: 210, preco30ml: 260 },
    { categoria: "Feminino", nome: "PACIFIC CHILL - LV", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "PRADA PARADOXE INTENSE", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "PRADA PARADOXE MILANO", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "PURE MUSC FOR HER - NARCISO", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "PURE XS FOR HER", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "QUEEN OF SILK CREED", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "RENAISSANCE XJ1861 XERJOF", preco100ml: 190, preco30ml: 240 },
    { categoria: "Feminino", nome: "ROLLING IN LOVE", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ROUGE ROYAL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "ROYAL AMBER ORIENT", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "ROYAL OUD CREED", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "SABAH AL WARD LATTAFA", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SCANDAL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SCANDAL LE PARFUM", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "SI - ARMANI", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO BEIJOS DE SOL", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO CARIOCA CRUSH", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO CHEIROSA 59", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO CHEIROSA 62", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO CHEIROSA 68", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO RIO RADIANCE", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "SOL DE JANEIRO SUMMER E AMOR", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "STRONGER WITH YOU AMBER", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "THE ONE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "TOBACCO VANILLE", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "VALAYA PARFUMS", preco100ml: 210, preco30ml: 260 },
    { categoria: "Feminino", nome: "VANILLE FATALE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "VERSACE DYLAN TURQUOISE", preco100ml: 180, preco30ml: 230 },
    { categoria: "Feminino", nome: "VIBRATO SOSPIRO", preco100ml: 200, preco30ml: 250 },
    { categoria: "Feminino", nome: "WHITE TEA ELIZABET ARD EDT", preco100ml: 180, preco30ml: 190 },
    { categoria: "Feminino", nome: "YARA ELIXIR LATTAFA", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "YARA LATTAFA", preco100ml: 180, preco30ml: 220 },
    { categoria: "Feminino", nome: "YES I AM", preco100ml: 180, preco30ml: 220 },
    
    // Body Splash
    { categoria: "Body Splash", nome: "BARE VANILLA", preco200ml: 100 },
    { categoria: "Body Splash", nome: "COCONUT", preco200ml: 100 },
    { categoria: "Body Splash", nome: "LOVE SPELL", preco200ml: 100 },
    { categoria: "Body Splash", nome: "MANGO TEMPTATION", preco200ml: 100 },
    { categoria: "Body Splash", nome: "VANILLA LACE", preco200ml: 100 },
    { categoria: "Body Splash", nome: "WHITE CITRUS B B WORKS", preco200ml: 100 },
    
    // Masculinos
    { categoria: "Masculino", nome: "212 HEROES", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "212 MEN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "212 SEXY MEN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "212 VIP BLACK", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "212 VIP BLACK ELIXIR", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "212 VIP MEN PREMIUM", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "A* MEN (ANGEL MEN)", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "ACQUA DI GIO ABSOLU", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ACQUA DI GIO ELIXIR", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ACQUA DI GIO PARFUMS", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ACQUA DI GIO PREMIUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ACQUA DI GIO PROFONDO", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "ACQUAMARINE N POWDER EBK", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "AFRICAN LEATHER", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "AFTERNOON SWIM - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ALEXANDRIA II - XERJOF", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ALLURE EDITION BLANCHE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ALLURE H SPORT EXTREME", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ALLURE HOMME SPORT", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ALTHAIR PARFUMS", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "AMBASSADOR MEN", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ANGELS' SHARE BY KILIAN", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ANGELS' SHARE PARADIS", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ANI NISHANE", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "ANIMALE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "APEX ROJA PARFUMS", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ARABIANS TONKA MONTALE", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "ARMANI CODE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "ARMANI CODE ABSOLU GOLD", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ARMANI CODE PARFUM", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ARMANI CODE PROFUMO", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ARTISAN J. VARVATOS", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ASAD ELIXIR LATTAFA", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ASAD LATTAFA", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "AZZARO POUR HOMME", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "AZZARO THE MOST WANTED", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "AZZARO WANTED PREMIUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BABYCAT - YSL", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "BACCARAT ROUGE 540", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "BAD BOY EXTREME CH", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BAD BOY PREMIUM", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BAL D'AFRIQUE BYREDO", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BAROLO", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BLACK XS", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "BLEU CHANEL", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BOND Nº 9", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BOSS BOTTLED", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BOSS BOTTLED PARFUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BOSS IN MOTION", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI AQUA P. HOMME", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI BLACK", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI GARANAT", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI MAN IN BLACK", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI MAN W. ESSENCE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "BULGARI POUR HOMME", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "BY THE FIREPLACE REPLICA", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "CACTUS GARDEN - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "CARNAL FLOWER", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "CH MEN PRIVE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "CHOCOLATE GREEDY", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "CK BE", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "CK ONE", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "COOL ELIXIR", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "COOL WATER", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "COROMANDEL EDP - CHANEL", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "CREED AVENTUS", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "CREED IRISH", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "DIOR HOMME INTENSE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "DIOR HOMME PARFUM 2014", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "EGOIST PLATINUM", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ERBA PURA XERJOFF", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "EROS VERSACE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ETERNITY CK", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "FAHRENHEIT", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "FERRARI BLACK", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "FIERCE ABERCROMBIE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "FLEUR DU MALE", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "FOREVER WANTED ELIXIR AZZARO", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "GENTLEMAN", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "GENTLEMAN PARFUM RES PRIVE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "GENTLEMAN SOCIETY", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "GOD OF FIRE", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "HACIVAT NISHANE", preco100ml: 260, preco30ml: 290 },
    { categoria: "Masculino", nome: "HALTANE PARFUMS", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "HEROD", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "HUNDRED SILENT WAYS - NISHANE", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "IMAGINATION LV", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "INITIO OUD F GREATNESS", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "INVICTUS", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "INVICTUS PARFUM", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "INVICTUS VICTORY ELIXIR", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ISSEY MIYAKE POUR HOMME", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "J MALONE VETIVER E VAN", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "JAZZ - YSL", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "JAZZ CLUB - REPLICA", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "JOOP HOMME", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "JOOP NIGHTFLIGHT", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "JUBILATION", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "KENZO H. MARINE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "KENZO P. HOMME", preco100ml: 160, preco30ml: 190 },
    { categoria: "Masculino", nome: "L'IMMENSITE - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "LA NUIT DE L'HOMME", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "LAMAR KAJAL", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "LAYTON .PARFUMS", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "LAYTON EXCLUSIF", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "LE BEAU", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "LE BEAU LE PARFUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "LE BEAU PARADISE GARDEN", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "LE MALE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "LE MALE ELIXIR", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "LE MALE LE PARFUM", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "LIGHT BLUE POUR HOMME", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "LV LOVERS - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "MALBEC", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "MEGAMARE - O.PARISI", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "MERCEDES BENZ CLUB BLACK", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "MILLESIME IMPERIAL CREED", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "MONCLER POUR HOMME", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "MONOI VAGUES D'ETE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "MONTBLANC EMBLEM", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "MONTBLANC EXPLORER", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "MONTBLANC INDIVIDUEL", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "MONTBLANC LEGEND", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "MYSLF - YSL", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "MYSLF LE PARFUM", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "N1 CLIVE CHRISTIAN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "NARCISO FOR HIM BLEU NOIR", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "NARCISO ROD FOR HIM", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "NAXOS XJ1861 - XERJOFF", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "NEW LOOK - DIOR 2024", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "NIO XERJOF", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "NOUVEAU MONDE - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "OMBRE LEATHER", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "OMBRE NOMADE - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ONE MILLION", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ONE MILLION ELIXIR", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ONE MILLION GOLDEN OUD", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ONE MILLION PARFUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "ONE MILLION PRIVE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "ONE MILLION ROYAL", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "OUD MARACUJA", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "PACIFIC CHILL - LV", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "PEGASUS EXCLUSIF", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "PEGASUS PARFUMS", preco100ml: 180, preco30ml: 220 },
    { categoria: "Masculino", nome: "PHANTOM", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "PHANTOM PARFUM", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "PI GIVENCHY", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "POLO BLACK", preco100ml: 170, preco30ml: 200 },
    { categoria: "Masculino", nome: "POLO BLUE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "POLO BLUE GOLD BLEND", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "POLO VERDE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "PRADA AMBER P.HOMME INTENSE", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "PRADA L'HOMME", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "PRADA L'HOMME INTENSE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "PURE HAVANE A*MEN", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "PURE MALT A*MEN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "PURE XS", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "REFLECTION MAN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "RENAISSANCE XJ1861 XERJOF", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "ROYAL OUD CREED", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "SAUVAGE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "SAUVAGE ELIXIR", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "SCANDAL P HOMME", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "SCANDAL P. HOMME LE PARFUM", preco100ml: 210, preco30ml: 240 },
    { categoria: "Masculino", nome: "SILVER SCENT", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "SILVER SCENT INTENSE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "SPICEBOMB", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "SPICEBOMB EXTREME", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "STALLION LEATHER CH", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "STRONGER W YOU ABSOL", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "STRONGER WITH YOU AMBER", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "TERRE D'HERMES", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "TERRE D'HERMES EAU GIVRE", preco100ml: 230, preco30ml: 260 },
    { categoria: "Masculino", nome: "THE ONE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "TOBACCO VANILLE", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "TOY BOY MOSCHINO", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "TYGAR BVLGARI", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "ULTRAMALLE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "VALENTINO UOMO BORN IN ROMA", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "VALENTINO UOMO INTENSE", preco100ml: 180, preco30ml: 210 },
    { categoria: "Masculino", nome: "VERSACE MAN EAU FRAICHE", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "VERSACE POUR HOMME PREMIUM", preco100ml: 200, preco30ml: 230 },
    { categoria: "Masculino", nome: "VIBRATO SOSPIRO", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "X FOR MEN CLIVE CHRISTIAN", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "XERYUS ROUGE", preco100ml: 220, preco30ml: 250 },
    { categoria: "Masculino", nome: "Y - YSL", preco100ml: 190, preco30ml: 220 },
    { categoria: "Masculino", nome: "Y LE PARFUM", preco100ml: 180, preco30ml: 210 }
];

// Estado do carrinho
let cart = [];
let selectedDeliveryOption = 'pickup';

// Elementos DOM
let perfumesList;
let cartCount;
let cartItems;
let cartSidebar;
let checkoutModal;
let overlay;
let mainSearch;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos
    perfumesList = document.getElementById('perfumes-list');
    cartCount = document.getElementById('cart-count');
    cartItems = document.getElementById('cart-items');
    cartSidebar = document.getElementById('cart-sidebar');
    checkoutModal = document.getElementById('checkout-modal');
    overlay = document.getElementById('overlay');
    mainSearch = document.getElementById('main-search');
    
    // Carregar perfumes
    renderPerfumes(perfumesData);
    
    // Atualizar carrinho
    updateCart();
    
    // Configurar eventos
    setupEventListeners();
});

// Renderizar lista de perfumes
function renderPerfumes(perfumes) {
    perfumesList.innerHTML = '';
    
    if (perfumes.length === 0) {
        perfumesList.innerHTML = '<p class="no-results">Nenhum perfume encontrado com os filtros aplicados.</p>';
        return;
    }
    
    perfumes.forEach(perfume => {
        const perfumeCard = document.createElement('div');
        perfumeCard.className = 'perfume-card';
        
        // Determinar cor da categoria
        let categoryColor = '';
        if (perfume.categoria === 'Feminino') categoryColor = '#ff6b8b';
        else if (perfume.categoria === 'Masculino') categoryColor = '#4fc3f7';
        else categoryColor = '#28a745';
        
        // Construir conteúdo do card
        let concentrationsHTML = '';
        
        if (perfume.categoria === 'Body Splash') {
            concentrationsHTML = `
                <div class="concentration selected" data-size="200ml" data-price="${perfume.preco200ml}">
                    <div class="concentration-info">
                        <h4>200ml</h4>
                        <p>Body Splash</p>
                    </div>
                    <div class="concentration-price">R$ ${perfume.preco200ml.toFixed(2)}</div>
                </div>
            `;
        } else {
            concentrationsHTML = `
                <div class="concentration selected" data-size="100ml" data-price="${perfume.preco100ml}">
                    <div class="concentration-info">
                        <h4>100ml (2 unidades)</h4>
                        <p>25% Parfum</p>
                    </div>
                    <div class="concentration-price">R$ ${perfume.preco100ml.toFixed(2)}</div>
                </div>
                <div class="concentration" data-size="30ml" data-price="${perfume.preco30ml}">
                    <div class="concentration-info">
                        <h4>30ml (5 unidades)</h4>
                        <p>33% Extract Parfum/Elixir</p>
                    </div>
                    <div class="concentration-price">R$ ${perfume.preco30ml.toFixed(2)}</div>
                </div>
            `;
        }
        
        perfumeCard.innerHTML = `
            <div class="perfume-category" style="background-color: ${categoryColor}">${perfume.categoria}</div>
            <div class="perfume-info">
                <h3 class="perfume-name">${perfume.nome}</h3>
                <div class="perfume-concentrations">
                    ${concentrationsHTML}
                </div>
                <div class="perfume-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn decrease" data-perfume="${perfume.nome}">-</button>
                        <span class="quantity-value" id="qty-${perfume.nome.replace(/\s+/g, '-')}">1</span>
                        <button class="quantity-btn increase" data-perfume="${perfume.nome}">+</button>
                    </div>
                    <button class="btn-primary add-to-cart" data-perfume="${perfume.nome}" data-category="${perfume.categoria}">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
        
        perfumesList.appendChild(perfumeCard);
    });
    
    // Adicionar eventos aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    // Adicionar eventos de seleção de concentração
    document.querySelectorAll('.concentration').forEach(concentration => {
        concentration.addEventListener('click', selectConcentration);
    });
}

// Configurar eventos
function setupEventListeners() {
    // Botões do header
    document.getElementById('home-btn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('address-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Adicione itens ao carrinho antes de configurar o endereço.');
            return;
        }
        openCheckoutModal();
    });
    
    // Barra de pesquisa principal
    mainSearch.addEventListener('input', filterPerfumes);
    
    // Filtros
    document.getElementById('category-filter').addEventListener('change', filterPerfumes);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    // Carrinho
    document.getElementById('cart-icon-btn').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('checkout-btn').addEventListener('click', openCheckoutModal);
    
    // Modal de finalização
    document.getElementById('close-modal').addEventListener('click', closeCheckoutModal);
    document.getElementById('cancel-order').addEventListener('click', closeCheckoutModal);
    document.getElementById('send-whatsapp').addEventListener('click', sendWhatsAppOrder);
    
    // Botão principal do WhatsApp
    const sendWhatsAppMainBtn = document.getElementById('send-whatsapp-main');
    if (sendWhatsAppMainBtn) {
        sendWhatsAppMainBtn.addEventListener('click', sendWhatsAppOrder);
    }
    
    // Opções de entrega
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', selectDeliveryOption);
    });
    
    // Overlay
    overlay.addEventListener('click', () => {
        closeCart();
        closeCheckoutModal();
    });
}

// Selecionar concentração
function selectConcentration(e) {
    const concentrationElement = e.currentTarget;
    const perfumeCard = concentrationElement.closest('.perfume-card');
    
    // Remover seleção de todas as concentrações deste card
    perfumeCard.querySelectorAll('.concentration').forEach(conc => {
        conc.classList.remove('selected');
    });
    
    // Adicionar seleção à concentração clicada
    concentrationElement.classList.add('selected');
}

// Filtrar perfumes
function filterPerfumes() {
    const category = document.getElementById('category-filter').value;
    const searchTerm = mainSearch.value.toLowerCase();
    
    let filteredPerfumes = perfumesData;
    
    // Filtrar por categoria
    if (category !== 'todos') {
        filteredPerfumes = filteredPerfumes.filter(perfume => perfume.categoria === category);
    }
    
    // Filtrar por termo de busca
    if (searchTerm) {
        filteredPerfumes = filteredPerfumes.filter(perfume => 
            perfume.nome.toLowerCase().includes(searchTerm)
        );
    }
    
    renderPerfumes(filteredPerfumes);
}

// Resetar filtros
function resetFilters() {
    document.getElementById('category-filter').value = 'todos';
    mainSearch.value = '';
    renderPerfumes(perfumesData);
}

// Gerenciamento de quantidade
function decreaseQuantity(e) {
    const perfumeName = e.target.getAttribute('data-perfume');
    const quantityElement = document.getElementById(`qty-${perfumeName.replace(/\s+/g, '-')}`);
    let quantity = parseInt(quantityElement.textContent);
    
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
}

function increaseQuantity(e) {
    const perfumeName = e.target.getAttribute('data-perfume');
    const quantityElement = document.getElementById(`qty-${perfumeName.replace(/\s+/g, '-')}`);
    let quantity = parseInt(quantityElement.textContent);
    
    if (quantity < 10) {
        quantity++;
        quantityElement.textContent = quantity;
    }
}

// Adicionar ao carrinho
function addToCart(e) {
    const perfumeName = e.target.getAttribute('data-perfume');
    const perfumeCategory = e.target.getAttribute('data-category');
    const quantityElement = document.getElementById(`qty-${perfumeName.replace(/\s+/g, '-')}`);
    const quantity = parseInt(quantityElement.textContent);
    
    // Encontrar o perfume nos dados
    const perfume = perfumesData.find(p => p.nome === perfumeName);
    
    // Encontrar concentração selecionada
    const perfumeCard = e.target.closest('.perfume-card');
    const selectedConcentration = perfumeCard.querySelector('.concentration.selected');
    const size = selectedConcentration.getAttribute('data-size');
    const price = parseFloat(selectedConcentration.getAttribute('data-price'));
    
    // Verificar se já está no carrinho
    const existingIndex = cart.findIndex(item => item.nome === perfumeName && item.size === size);
    
    if (existingIndex >= 0) {
        // Atualizar quantidade
        cart[existingIndex].quantidade += quantity;
    } else {
        // Adicionar novo item
        const newItem = {
            nome: perfume.nome,
            categoria: perfume.categoria,
            size: size,
            preco: price,
            quantidade: quantity
        };
        
        cart.push(newItem);
    }
    
    // Resetar quantidade
    quantityElement.textContent = '1';
    
    // Atualizar carrinho
    updateCart();
    
    // Abrir carrinho automaticamente
    openCart();
    
    // Feedback visual
    e.target.innerHTML = '<i class="fas fa-check"></i> Adicionado';
    e.target.disabled = true;
    
    setTimeout(() => {
        e.target.innerHTML = '<i class="fas fa-cart-plus"></i> Adicionar';
        e.target.disabled = false;
    }, 1500);
}

// Atualizar carrinho
function updateCart() {
    // Calcular total de itens
    const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);
    
    // Atualizar contador
    cartCount.textContent = totalItems;
    
    // Atualizar itens do carrinho
    renderCartItems();
    
    // Salvar no localStorage
    localStorage.setItem('craftcarestore_cart', JSON.stringify(cart));
}

// Renderizar itens do carrinho
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio</p>';
        document.getElementById('summary-total').textContent = 'R$ 0,00';
        return;
    }
    
    cartItems.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        let sizeText = item.size;
        if (item.size === '100ml') {
            sizeText = '100ml (2 unidades) - 25% Parfum';
        } else if (item.size === '30ml') {
            sizeText = '30ml (5 unidades) - 33% Extract Parfum/Elixir';
        } else {
            sizeText = '200ml - Body Splash';
        }
        
        const itemTotal = item.preco * item.quantidade;
        totalPrice += itemTotal;
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.nome}</h4>
                <p>${sizeText}</p>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="decrease-item" data-index="${index}">-</button>
                        <span>${item.quantidade}</span>
                        <button class="increase-item" data-index="${index}">+</button>
                    </div>
                    <button class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-price">R$ ${itemTotal.toFixed(2)}</div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Atualizar total
    document.getElementById('summary-total').textContent = `R$ ${totalPrice.toFixed(2)}`;
    
    // Adicionar eventos aos botões do carrinho
    document.querySelectorAll('.decrease-item').forEach(button => {
        button.addEventListener('click', decreaseCartItem);
    });
    
    document.querySelectorAll('.increase-item').forEach(button => {
        button.addEventListener('click', increaseCartItem);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
}

// Manipular itens do carrinho
function decreaseCartItem(e) {
    const index = parseInt(e.target.getAttribute('data-index'));
    
    if (cart[index].quantidade > 1) {
        cart[index].quantidade--;
        updateCart();
    }
}

function increaseCartItem(e) {
    const index = parseInt(e.target.getAttribute('data-index'));
    
    if (cart[index].quantidade < 10) {
        cart[index].quantidade++;
        updateCart();
    }
}

function removeCartItem(e) {
    const index = parseInt(e.target.getAttribute('data-index'));
    cart.splice(index, 1);
    updateCart();
}

// Abrir/fechar carrinho
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}

// Abrir/fechar modal de finalização
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Adicione itens ao carrinho antes de finalizar o pedido.');
        return;
    }
    
    // Atualizar resumo do pedido no modal
    updateOrderSummary();
    
    checkoutModal.classList.add('open');
    overlay.classList.add('active');
    closeCart();
    
    // Scroll para o topo do modal
    setTimeout(() => {
        checkoutModal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('open');
    overlay.classList.remove('active');
}

// Atualizar resumo do pedido no modal
function updateOrderSummary() {
    const modalOrderItems = document.getElementById('modal-order-items');
    let total = 0;
    
    modalOrderItems.innerHTML = '';
    
    cart.forEach(item => {
        let sizeText = item.size;
        if (item.size === '100ml') {
            sizeText = '100ml (2 unidades) - 25% Parfum';
        } else if (item.size === '30ml') {
            sizeText = '30ml (5 unidades) - 33% Extract Parfum/Elixir';
        } else {
            sizeText = '200ml - Body Splash';
        }
        
        let itemTotal = item.preco * item.quantidade;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'modal-order-item';
        itemElement.innerHTML = `
            <div>
                <strong>${item.quantidade}x</strong> ${item.nome}
                <div style="font-size: 0.9rem; color: var(--primary-dark);">${sizeText}</div>
            </div>
            <div style="font-weight: 600; color: var(--primary);">R$ ${itemTotal.toFixed(2)}</div>
        `;
        
        modalOrderItems.appendChild(itemElement);
    });
    
    document.getElementById('modal-total').textContent = `R$ ${total.toFixed(2)}`;
}

// Selecionar opção de entrega
function selectDeliveryOption(e) {
    const option = e.target.getAttribute('data-option');
    selectedDeliveryOption = option;
    
    // Atualizar botões ativos
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Mostrar/ocultar formulário de entrega
    const deliveryForm = document.getElementById('delivery-form');
    if (option === 'delivery') {
        deliveryForm.style.display = 'block';
    } else {
        deliveryForm.style.display = 'none';
    }
}

// Enviar pedido via WhatsApp
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Verificar informações de entrega se necessário
    if (selectedDeliveryOption === 'delivery') {
        const name = document.getElementById('client-name').value;
        const phone = document.getElementById('client-phone').value;
        const address = document.getElementById('client-address').value;
        const neighborhood = document.getElementById('client-neighborhood').value;
        const city = document.getElementById('client-city').value;
        const state = document.getElementById('client-state').value;
        
        if (!name || !phone || !address || !neighborhood || !city || !state) {
            alert('Por favor, preencha todos os campos obrigatórios para entrega.');
            return;
        }
    }
    
    // Construir mensagem
    let message = `*NOVO PEDIDO - CRAFTCARESTORE*\n\n`;
    message += `*Itens do Pedido:*\n`;
    
    let total = 0;
    cart.forEach(item => {
        let sizeText = item.size;
        if (item.size === '100ml') {
            sizeText = '100ml (2 unidades) - 25% Parfum';
        } else if (item.size === '30ml') {
            sizeText = '30ml (5 unidades) - 33% Extract Parfum/Elixir';
        } else {
            sizeText = '200ml - Body Splash';
        }
        
        let itemTotal = item.preco * item.quantidade;
        total += itemTotal;
        
        message += `• ${item.quantidade}x ${item.nome} (${sizeText}) - R$ ${itemTotal.toFixed(2)}\n`;
    });
    
    message += `\n*Total: R$ ${total.toFixed(2)}*\n\n`;
    
    message += `*Forma de Recebimento:* ${selectedDeliveryOption === 'pickup' ? 'Retirar na Loja' : 'Entrega'}\n\n`;
    
    if (selectedDeliveryOption === 'delivery') {
        const name = document.getElementById('client-name').value;
        const phone = document.getElementById('client-phone').value;
        const address = document.getElementById('client-address').value;
        const neighborhood = document.getElementById('client-neighborhood').value;
        const city = document.getElementById('client-city').value;
        const state = document.getElementById('client-state').value;
        const notes = document.getElementById('client-notes').value;
        
        message += `*Dados para Entrega:*\n`;
        message += `Nome: ${name}\n`;
        message += `Telefone: ${phone}\n`;
        message += `Endereço: ${address}\n`;
        message += `Bairro: ${neighborhood}\n`;
        message += `Cidade: ${city}\n`;
        message += `Estado: ${state}\n`;
        
        if (notes) {
            message += `Observações: ${notes}\n`;
        }
    } else {
        message += `O cliente irá retirar na loja. Endereço será enviado após confirmação.\n`;
    }
    
    message += `\n*Loja:* Craftcarestore`;
    message += `\n*Data:* ${new Date().toLocaleDateString('pt-BR')}`;
    
    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5519998978060';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappURL, '_blank');
    
    // Fechar modal
    closeCheckoutModal();
    
    // Limpar carrinho (opcional)
    cart = [];
    updateCart();
    
    // Feedback
    alert('Pedido enviado com sucesso! Aguarde a confirmação via WhatsApp.');
}

// Carregar carrinho do localStorage ao iniciar
window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('craftcarestore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
});