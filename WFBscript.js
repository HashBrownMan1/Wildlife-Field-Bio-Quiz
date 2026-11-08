let quizData = [
  /*{
    commonName: '',
    similarSpecies: ['',''],
    latinName: '',
  /*Central Stoneroller*/{
    commonName: 'Central Stoneroller',
    acceptableNames: ['Stoneroller'],
    similarSpecies: ['River Chub','Bluehead Chub','White Shiner'],
    latinName: 'Leuciscidae Campostoma anomalum',
    rootWords: 'leukós-ískos kampḗ-stóma anṓmalos',
    rootTranslation: 'white-little bend-mouth uneven',
    latinNameTranslation: 'bent-mouthed irregular fish',
  },
  /*River Chub*/{
    commonName: 'River Chub',
    acceptableNames: [],
    similarSpecies: ['Bluehead Chub','Central Stoneroller','White Shiner'],
    latinName: 'Leuciscidae Nocomis micropogon',
    rootWords: 'leukós-ískos nōkomis mikrós-pṓgōn',
    rootTranslation: 'white-little grandmother small-beard',
    latinNameTranslation: 'grandmother with a tiny-beard',
  },
  /*Bluehead Chub*/{
    commonName: 'Bluehead Chub',
    acceptableNames: [],
    similarSpecies: ['River Chub','Central Stoneroller','White Shiner'],
    latinName: 'Leuciscidae Nocomis leptocephalus',
    rootWords: 'leukós-ískos nōkomis leptós-kephalḗ',
    rootTranslation: 'white-little grandmother thin-head',
    latinNameTranslation: 'grandmother with a slender-head',
  },
  /*Blacknose Dace*/{
    commonName: 'Blacknose Dace',
    acceptableNames: [],
    similarSpecies: ['Tennessee Dace','Mountain Redbelly Dace'],
    latinName: 'Leuciscidae Rhinichthys atratulus',
    rootWords: 'leukós-ískos rhís-ichthýs ātrātulus',
    rootTranslation: 'white-little nose-fish black-clad',
    latinNameTranslation: 'black-clad nose-fish',
  },
  /*Tennessee Dace*/{
    commonName: 'Tennessee Dace',
    acceptableNames: [],
    similarSpecies: ['Mountain Redbelly Dace','Blacknose Dace'],
    latinName: 'Leuciscidae Chrosomus tennesseensis',
    rootWords: 'leukós-ískos chrṓs-sō̂ma tennessee-ēnsis',
    rootTranslation: 'white-little color-body Tennessee-from',
    latinNameTranslation: 'Tennessees colored-body fish',
  },
  /*Mountain Redbelly Dace*/{
    commonName: 'Mountain Redbelly Dace',
    acceptableNames: [],
    similarSpecies: ['Tennessee Dace','Blacknose Dace'],
    latinName: 'Leuciscidae Chrosomus oreas',
    rootWords: 'leukós-ískos chrṓs-sō̂ma oreiás',
    rootTranslation: 'white-little color-body mountain-nymph',
    latinNameTranslation: 'mountain-nymph colored-body fish',
  },
  /*White Shiner*/{
    commonName: 'White Shiner',
    acceptableNames: [],
    similarSpecies: ['River Chub','Bluehead Chub','Central Stoneroller'],
    latinName: 'Leuciscidae Luxilus albeolus',
    rootWords: 'leukós-ískos lūx albus-eolus',
    rootTranslation: 'white-little light white-little',
    latinNameTranslation: 'bright whitish fish',
  },
  /*Fantail Darter*/{
    commonName: 'Fantail Darter',
    acceptableNames: [],
    similarSpecies: ['Redline Darter','Candy Darter'],
    latinName: 'Percidae Etheostoma flabellare',
    rootWords: 'pérkē ēthéō-stóma flābellum',
    rootTranslation: 'perch strain-mouth fan',
    latinNameTranslation: 'straining-mouthed fan-shaped fish',
  },
  /*Redline Darter*/{
    commonName: 'Redline Darter',
    acceptableNames: [],
    similarSpecies: ['Candy Darter','Fantail Darter','Roanoke Longperch'],
    latinName: 'Percidae Etheostoma rufilineatum',
    rootWords: 'pérkē ēthéō-stóma rūfus-līneātus',
    rootTranslation: 'perch strain-mouth red-lined',
    latinNameTranslation: 'straining-mouthed red-lined fish',
  },
  /*Candy Darter*/{
    commonName: 'Candy Darter',
    acceptableNames: [],
    similarSpecies: ['Redline Darter','Fantail Darter','Roanoke Longperch'],
    latinName: 'Percidae Etheostoma osburni',
    rootWords: 'pérkē ēthéō-stóma osburnī',
    rootTranslation: 'perch strain-mouth of-Osburn',
    latinNameTranslation: 'Osburns straining-mouthed fish',
  },
  /*Roanoke Longperch*/{
    commonName: 'Roanoke Longperch',
    acceptableNames: ['Roanoke Logperch'],
    similarSpecies: ['Redline Darter','Candy Darter','Fantail Darter'],
    latinName: 'Percidae Percina rex',
    rootWords: 'pérkē perca-īna rēx',
    rootTranslation: 'perch perch-little king',
    latinNameTranslation: 'king little-perch',
  },
  /*Walleye*/{
    commonName: 'Walleye',
    acceptableNames: [],
    similarSpecies: ['Sauger'],
    latinName: 'Percidae Stizostedion vitreum',
    rootWords: 'pérkē stízō-stédion vitreus',
    rootTranslation: 'perch prick-throat glassy',
    latinNameTranslation: 'pricking-throat glass-like fish',
  },
  /*Sauger*/{
    commonName: 'Sauger',
    acceptableNames: [],
    similarSpecies: ['Walleye'],
    latinName: 'Percidae Stizostedion canadense',
    rootWords: 'pérkē stízō-stédion canada-ēnsis',
    rootTranslation: 'perch prick-throat Canada-from',
    latinNameTranslation: 'pricking-throat Canadian fish',
  },
  /*Paddlefish*/{
    commonName: 'Paddlefish',
    acceptableNames: [],
    similarSpecies: ['Atlantic Sturgeon','Longnose Gar'],
    latinName: 'Polyodontidae Polyodon spathula',
    rootWords: 'polýs-odoús spáthē',
    rootTranslation: 'many-tooth broad-blade',
    latinNameTranslation: 'many-toothed spatula fish',
  },
  /*Atlantic Sturgeon*/{
    commonName: 'Atlantic Sturgeon',
    acceptableNames: [],
    similarSpecies: ['Paddlefish','Longnose Gar'],
    latinName: 'Acipenseridae Acipenser oxyrhyncus',
    rootWords: 'acipēnser oxýs-rhýnchos',
    rootTranslation: 'sturgeon sharp-snout',
    latinNameTranslation: 'sharp-snouted sturgeon',
  },
  /*Longnose Gar*/{
    commonName: 'Longnose Gar',
    acceptableNames: [],
    similarSpecies: ['Paddlefish','Atlantic Sturgeon'],
    latinName: 'Lepisosteidae Lepisosteus osseus',
    rootWords: 'lepís-ostéon osseus',
    rootTranslation: 'scale-bone bony',
    latinNameTranslation: 'bone-scaled bony fish',
  },
  /*Bluegill*/{
    commonName: 'Bluegill',
    acceptableNames: [],
    similarSpecies: ['Redbreast Sunfish','Rock Bass'],
    latinName: 'Centrarchidae Lepomis macrochirus',
    rootWords: 'kéntron-archós lepís-pō̂ma makrós-cheír',
    rootTranslation: 'spine-vent scale-lid long-hand',
    latinNameTranslation: 'scaled-gill-cover large-handed fish',
  },
  /*Redbreast Sunfish*/{
    commonName: 'Redbreast Sunfish',
    acceptableNames: [],
    similarSpecies: ['Bluegill','Rock Bass'],
    latinName: 'Centrarchidae Lepomis auritus',
    rootWords: 'kéntron-archós lepís-pō̂ma aurītus',
    rootTranslation: 'spine-vent scale-lid eared',
    latinNameTranslation: 'scaled-gill-cover eared fish',
  },
  /*Largemouth Bass*/{
    commonName: 'Largemouth Bass',
    acceptableNames: ['Largemouth','Bigmouth Bass'],
    similarSpecies: ['Smallmouth Bass','Rock Bass'],
    latinName: 'Centrarchidae Micropterus salmoides',
    rootWords: 'kéntron-archós mikrós-pterón salmō-oeidḗs',
    rootTranslation: 'spine-vent small-fin salmon-like',
    latinNameTranslation: 'small-finned salmon-like fish',
  },
  /*Smallmouth Bass*/{
    commonName: 'Smallmouth Bass',
    acceptableNames: ['Smallmouth'],
    similarSpecies: ['Largemouth Bass','Rock Bass'],
    latinName: 'Centrarchidae Micropterus dolomieu',
    rootWords: 'kéntron-archós mikrós-pterón dolomieu',
    rootTranslation: 'spine-vent small-fin of-Dolomieu',
    latinNameTranslation: 'Dolomieus small-finned fish',
  },
  /*Rock Bass*/{
    commonName: 'Rock Bass',
    acceptableNames: [],
    similarSpecies: ['Bluegill','Redbreast Sunfish','Largemouth Bass'],
    latinName: 'Centrarchidae Ambloplites rupestris',
    rootWords: 'kéntron-archós amblýs-hoplítēs rūpestris',
    rootTranslation: 'spine-vent blunt-armed rock-dwelling',
    latinNameTranslation: 'blunt-armed rock-dweller',
  },
  /*Rainbow Trout*/{
    commonName: 'Rainbow Trout',
    acceptableNames: [],
    similarSpecies: ['Brown Trout','Brook Trout'],
    latinName: 'Salmonidae Oncorhynchus mykiss',
    rootWords: 'salmō ónkos-rhýnchos mykiss',
    rootTranslation: 'salmon hook-snout trout',
    latinNameTranslation: 'hook-nosed \'mykiss\' (Kamchatkan name)',
  },
  /*Brown Trout*/{
    commonName: 'Brown Trout',
    acceptableNames: [],
    similarSpecies: ['Rainbow Trout','Brook Trout'],
    latinName: 'Salmonidae Salmo trutta',
    rootWords: 'salmō trutta',
    rootTranslation: 'salmon trout',
    latinNameTranslation: 'salmon trout',
  },
  /*Brook Trout*/{
    commonName: 'Brook Trout',
    acceptableNames: [],
    similarSpecies: ['Brown Trout','Rainbow Trout'],
    latinName: 'Salmonidae Salvelinus fontinalis',
    rootWords: 'salmō salvelinus fōns-ālis',
    rootTranslation: 'salmon char spring-dwelling',
    latinNameTranslation: 'char of the springs',
  },
  /*Banded Sculpin*/{
    commonName: 'Banded Sculpin',
    acceptableNames: [],
    similarSpecies: ['Brown Bullhead','Margined Madtom'],
    latinName: 'Cottidae Cottus carolinae',
    rootWords: 'kóttos carolīnae',
    rootTranslation: 'bulging-head of-Caroline',
    latinNameTranslation: 'Carolines bulging headed fish',
  },
  /*Brown Bullhead*/{
    commonName: 'Brown Bullhead',
    acceptableNames: [],
    similarSpecies: ['Margined Madtom','Channel Catfish'],
    latinName: 'Ictaluridae Ameiurus nebulosus',
    rootWords: 'ichthýs-aílouros a-meióō-ourá nebulōsus',
    rootTranslation: 'fish-cat not-shorten-tail cloudy',
    latinNameTranslation: 'uncut-tailed clouded fish',
  },
  /*Margined Madtom*/{
    commonName: 'Margined Madtom',
    acceptableNames: [],
    similarSpecies: ['Brown Bullhead','Channel Catfish'],
    latinName: 'Ictaluridae Noturus insignis',
    rootWords: 'ichthýs-aílouros nō̂tos-ourá īnsīgnis',
    rootTranslation: 'fish-cat back-tail distinguished',
    latinNameTranslation: 'distinguished back-tailed fish',
  },
  /*Channel Catfish*/{
    commonName: 'Channel Catfish',
    acceptableNames: [],
    similarSpecies: ['Brown Bullhead','Margined Madtom'],
    latinName: 'Ictaluridae Ictalurus punctatus',
    rootWords: 'ichthýs-aílouros pūnctātus',
    rootTranslation: 'fish-cat spotted',
    latinNameTranslation: 'spotted fish-cat',
  },
  /*The Suckers*/{
    commonName: 'The Suckers',
    acceptableNames: ['Suckers','Sucker'],
    similarSpecies: ['Central Stoneroller','River Chub'],
    latinName: 'Catostomidae',
    rootWords: 'katá-stóma',
    rootTranslation: 'down-mouth',
    latinNameTranslation: 'down-mouthed fishes',
  },
  /*American Toad*/{
    commonName: 'American Toad',
    acceptableNames: [],
    similarSpecies: ['Fowlers Toad','Eastern Spadefoot','Eastern Narrow-mouthed Toad'],
    latinName: 'Bufonidae Anaxyrus americanus',
    rootWords: 'būfō ánax americānus',
    rootTranslation: 'toad lord American',
    latinNameTranslation: 'lordly American toad',
  },
  /*Fowlers Toad*/{
    commonName: 'Fowlers Toad',
    acceptableNames: ['Fowlers Toad'],
    similarSpecies: ['American Toad','Eastern Spadefoot'],
    latinName: 'Bufonidae Anaxyrus fowleri',
    rootWords: 'būfō ánax fowlerī',
    rootTranslation: 'toad lord of-Fowler',
    latinNameTranslation: 'Fowlers lordly toad',
  },
  /*Northern Cricket Frog*/{
    commonName: 'Northern Cricket Frog',
    acceptableNames: ['Cricket Frog'],
    similarSpecies: ['Spring Peeper','Upland Chorus Frog'],
    latinName: 'Hylidae Acris crepitans',
    rootWords: 'hýlē ákris crepitāns',
    rootTranslation: 'forest locust crackling',
    latinNameTranslation: 'crackling grasshopper frog',
  },
  /*Cope's Gray Treefrog*/{
    commonName: 'Cope\'s Gray Treefrog',
    acceptableNames: [],
    similarSpecies: ['Gray Treefrog'],
    latinName: 'Hylidae Hyla chrysoscelis',
    rootWords: 'hýlē chrysós-skélos',
    rootTranslation: 'forest gold-leg',
    latinNameTranslation: 'woodland golden-legged frog',
  },
  /*Gray Treefrog*/{
    commonName: 'Gray Treefrog',
    acceptableNames: [],
    similarSpecies: ['Copes Gray Treefrog'],
    latinName: 'Hylidae Hyla versicolor',
    rootWords: 'hýlē versicolor',
    rootTranslation: 'forest changing-color',
    latinNameTranslation: 'woodland color-changing frog',
  },
  /*Spring Peeper*/{
    commonName: 'Spring Peeper',
    acceptableNames: ['Peeper'],
    similarSpecies: ['Upland Chorus Frog','Northern Cricket Frog'],
    latinName: 'Hylidae Pseudacris crucifer',
    rootWords: 'hýlē pseudḗs-ákris crux-fer',
    rootTranslation: 'forest false-locust cross-bearing',
    latinNameTranslation: 'cross-bearing false-grasshopper frog',
  },
  /*Upland Chorus Frog*/{
    commonName: 'Upland Chorus Frog',
    acceptableNames: ['Chorus Frog'],
    similarSpecies: ['Spring Peeper','Northern Cricket Frog'],
    latinName: 'Hylidae Pseudacris feriarum',
    rootWords: 'hýlē pseudḗs-ákris fēriārum',
    rootTranslation: 'forest false-locust of-holidays',
    latinNameTranslation: 'false-grasshopper frog of the holidays',
  },
  /*Eastern Narrow-mouthed Toad*/{
    commonName: 'Eastern Narrow-mouthed Toad',
    acceptableNames: ['Narrow-mouthed Toad'],
    similarSpecies: ['American Toad','Eastern Spadefoot'],
    latinName: 'Microhylidae Gastrophryne carolinensis',
    rootWords: 'mikrós-hýlē gastḗr-phrýnē carolīna-ēnsis',
    rootTranslation: 'small-forest belly-toad Carolina-from',
    latinNameTranslation: 'Carolina belly-toad',
  },
  /*American Bullfrog*/{
    commonName: 'American Bullfrog',
    acceptableNames: ['Bullfrog'],
    similarSpecies: ['Green Frog'],
    latinName: 'Ranidae Lithobates catesbeianus',
    rootWords: 'rāna líthos-bátēs catesbeiānus',
    rootTranslation: 'frog stone-treader of-Catesby',
    latinNameTranslation: 'Catesbys stone-climbing frog',
  },
  /*Green Frog*/{
    commonName: 'Green Frog',
    acceptableNames: [],
    similarSpecies: ['American Bullfrog','Pickerel Frog'],
    latinName: 'Ranidae Lithobates clamitans',
    rootWords: 'rāna líthos-bátēs clāmitāns',
    rootTranslation: 'frog stone-treader loudly-calling',
    latinNameTranslation: 'loudly-calling stone-climbing frog',
  },
  /*Pickerel Frog*/{
    commonName: 'Pickerel Frog',
    acceptableNames: [],
    similarSpecies: ['Southern Leopard Frog','Green Frog'],
    latinName: 'Ranidae Lithobates palustris',
    rootWords: 'rāna líthos-bátēs palūstris',
    rootTranslation: 'frog stone-treader marsh-dwelling',
    latinNameTranslation: 'marsh stone-climbing frog',
  },
  /*Southern Leopard Frog*/{
    commonName: 'Southern Leopard Frog',
    acceptableNames: ['Leopard Frog'],
    similarSpecies: ['Pickerel Frog','Wood Frog'],
    latinName: 'Ranidae Lithobates sphenocephalus',
    rootWords: 'rāna líthos-bátēs sphḗn-kephalḗ',
    rootTranslation: 'frog stone-treader wedge-head',
    latinNameTranslation: 'wedge-headed stone-climbing frog',
  },
  /*Wood Frog*/{
    commonName: 'Wood Frog',
    acceptableNames: [],
    similarSpecies: ['Green Frog','Southern Leopard Frog'],
    latinName: 'Ranidae Lithobates sylvaticus',
    rootWords: 'rāna líthos-bátēs silvāticus',
    rootTranslation: 'frog stone-treader woodland',
    latinNameTranslation: 'woodland stone-climbing frog',
  },
  /*Eastern Spadefoot*/{
    commonName: 'Eastern Spadefoot',
    acceptableNames: ['Spadefoot','Spadefoot Toad'],
    similarSpecies: ['American Toad','Fowlers Toad'],
    latinName: 'Scaphiopodidae Scaphiopus holbrookii',
    rootWords: 'skáphē-poús holbrookiī',
    rootTranslation: 'spade-foot of-Holbrook',
    latinNameTranslation: 'Holbrooks spade-foot',
  },
  /*Weller's Salamander*/{
    commonName: 'Weller\'s Salamander',
    acceptableNames: [],
    similarSpecies: ['Yonahlossee Salamander','White-Spotted Slimy Salamander','Eastern Red-backed Salamander'],
    latinName: 'Plethodontidae Plethodon welleri',
    rootWords: 'plêthos-odoús wellerī',
    rootTranslation: 'full-tooth of-Weller',
    latinNameTranslation: 'Wellers many-toothed salamander',
  },
  /*Yonahlossee Salamander*/{
    commonName: 'Yonahlossee Salamander',
    acceptableNames: [],
    similarSpecies: ['Wellers Salamander','White-Spotted Slimy Salamander','Eastern Red-backed Salamander'],
    latinName: 'Plethodontidae Plethodon yonahlossee',
    rootWords: 'plêthos-odoús yonahlossee',
    rootTranslation: 'full-tooth bear-trail',
    latinNameTranslation: 'many-toothed bear-trail salamander',
  },
  /*White-Spotted Slimy Salamander*/{
    commonName: 'White-Spotted Slimy Salamander',
    acceptableNames: ['Slimy Salamander','Northern Slimy Salamander'],
    similarSpecies: ['Wellers Salamander','Yonahlossee Salamander','Eastern Red-backed Salamander'],
    latinName: 'Plethodontidae Plethodon cylindraceus',
    rootWords: 'plêthos-odoús cylindrus-āceus',
    rootTranslation: 'full-tooth cylinder-like',
    latinNameTranslation: 'many-toothed cylindrical salamander',
  },
  /*Eastern Red-backed Salamander*/{
    commonName: 'Eastern Red-backed Salamander',
    acceptableNames: ['Red-backed Salamander','Redback Salamander'],
    similarSpecies: ['Wellers Salamander','Yonahlossee Salamander','White-Spotted Slimy Salamander'],
    latinName: 'Plethodontidae Plethodon cinereus',
    rootWords: 'plêthos-odoús cinereus',
    rootTranslation: 'full-tooth ash-colored',
    latinNameTranslation: 'many-toothed ash-gray salamander',
  },
  /*Black-bellied Salamander*/{
    commonName: 'Black-bellied Salamander',
    acceptableNames: ['Black Belly Salmander'],
    similarSpecies: ['Seal Salamander','Northern Dusky Salamander','Shovel Nosed Salamander'],
    latinName: 'Plethodontidae Desmognathus quadramaculatus',
    rootWords: 'plêthos-odoús desmós-gnáthos quadrā-maculātus',
    rootTranslation: 'full-tooth bond-jaw four-spotted',
    latinNameTranslation: 'bound-jawed four-spotted salamander',
  },
  /*Seal Salamander*/{
    commonName: 'Seal Salamander',
    acceptableNames: [],
    similarSpecies: ['Black-bellied Salamander','Northern Dusky Salamander','Allegheny Mountain Dusky Salamander'],
    latinName: 'Plethodontidae Desmognathus monticola',
    rootWords: 'plêthos-odoús desmós-gnáthos montī-cola',
    rootTranslation: 'full-tooth bond-jaw mountain-dweller',
    latinNameTranslation: 'bound-jawed mountain-dweller salamander',
  },
  /*Northern Dusky Salamander*/{
    commonName: 'Northern Dusky Salamander',
    acceptableNames: [],
    similarSpecies: ['Seal Salamander','Allegheny Mountain Dusky Salamander','Black-bellied Salamander'],
    latinName: 'Plethodontidae Desmognathus fuscus',
    rootWords: 'plêthos-odoús desmós-gnáthos fuscus',
    rootTranslation: 'full-tooth bond-jaw dusky',
    latinNameTranslation: 'bound-jawed dusky salamander',
  },
  /*Shovel Nosed Salamander*/{
    commonName: 'Shovel Nosed Salamander',
    acceptableNames: ['Shovelnose Salamander'],
    similarSpecies: ['Black-bellied Salamander','Seal Salamander','Northern Dusky Salamander'],
    latinName: 'Plethodontidae Desmognathus marmoratus',
    rootWords: 'plêthos-odoús desmós-gnáthos marmorātus',
    rootTranslation: 'full-tooth bond-jaw marbled',
    latinNameTranslation: 'bound-jawed marbled salamander',
  },
  /*Allegheny Mountain Dusky Salamander*/{
    commonName: 'Allegheny Mountain Dusky Salamander',
    acceptableNames: ['Mountain Dusky Salamander'],
    similarSpecies: ['Northern Dusky Salamander','Northern Pygmy Salamander','Seal Salamander'],
    latinName: 'Plethodontidae Desmognathus ochrophaeus',
    rootWords: 'plêthos-odoús desmós-gnáthos ōchrós-phaiós',
    rootTranslation: 'full-tooth bond-jaw ochre-dusky',
    latinNameTranslation: 'bound-jawed pale-yellow dusky salamander',
  },
  /*Northern Pygmy Salamander*/{
    commonName: 'Northern Pygmy Salamander',
    acceptableNames: ['Pygmy Salamander'],
    similarSpecies: ['Allegheny Mountain Dusky Salamander','Northern Dusky Salamander','Seal Salamander'],
    latinName: 'Plethodontidae Desmognathus organi',
    rootWords: 'plêthos-odoús desmós-gnáthos organī',
    rootTranslation: 'full-tooth bond-jaw of-Organ',
    latinNameTranslation: 'Organs bound-jawed salamander',
  },
  /*Green Salamander*/{
    commonName: 'Green Salamander',
    acceptableNames: [],
    similarSpecies: ['Cave Salamander','Four-toed Salamander'],
    latinName: 'Plethodontidae Aneides aeneus',
    rootWords: 'plêthos-odoús a-eîdos aēneus',
    rootTranslation: 'full-tooth without-form bronze',
    latinNameTranslation: 'shapeless bronze-colored salamander',
  },
  /*Four-toed Salamander*/{
    commonName: 'Four-toed Salamander',
    acceptableNames: [],
    similarSpecies: ['Cave Salamander','Long-tailed Salamander','Two-lined Salamander'],
    latinName: 'Plethodontidae Hemidactylium scutatum',
    rootWords: 'plêthos-odoús hēmi-dáktylos scūtātus',
    rootTranslation: 'full-tooth half-toe shielded',
    latinNameTranslation: 'half-toed shielded salamander',
  },
  /*Cave Salamander*/{
    commonName: 'Cave Salamander',
    acceptableNames: [],
    similarSpecies: ['Long-tailed Salamander','Four-toed Salamander','Two-lined Salamander'],
    latinName: 'Plethodontidae Eurycea lucifuga',
    rootWords: 'plêthos-odoús Eurydíkē lūci-fuga',
    rootTranslation: 'full-tooth Eurydice light-fleer',
    latinNameTranslation: 'light-fleeing Eurydice salamander',
  },
  /*Long-tailed Salamander*/{
    commonName: 'Long-tailed Salamander',
    acceptableNames: [],
    similarSpecies: ['Cave Salamander','Two-lined Salamander','Four-toed Salamander'],
    latinName: 'Plethodontidae Eurycea longicaudata',
    rootWords: 'plêthos-odoús Eurydíkē longi-caudāta',
    rootTranslation: 'full-tooth Eurydice long-tailed',
    latinNameTranslation: 'long-tailed Eurydice salamander',
  },
  /*Northern Red Salamander*/{
    commonName: 'Northern Red Salamander',
    acceptableNames: ['Red Salamander'],
    similarSpecies: ['Spring Salamander','Eastern Newt'],
    latinName: 'Plethodontidae Pseudotriton ruber',
    rootWords: 'plêthos-odoús pseudḗs-Trī́tōn ruber',
    rootTranslation: 'full-tooth false-Triton red',
    latinNameTranslation: 'red false-triton',
  },
  /*Spring Salamander*/{
    commonName: 'Spring Salamander',
    acceptableNames: [],
    similarSpecies: ['Northern Red Salamander','Cave Salamander'],
    latinName: 'Plethodontidae Gyrinophilus porphyriticus',
    rootWords: 'plêthos-odoús gŷrinos-phílos porphyrítēs',
    rootTranslation: 'full-tooth tadpole-loving purple',
    latinNameTranslation: 'tadpole-loving purple-red salamander',
  },
  /*Spotted Salamander*/{
    commonName: 'Spotted Salamander',
    acceptableNames: [],
    similarSpecies: ['Marbled Salamander','Jeffersons Salamander'],
    latinName: 'Ambystomatidae Ambystoma maculatum',
    rootWords: 'amblýs-stóma maculātum',
    rootTranslation: 'blunt-mouth spotted',
    latinNameTranslation: 'blunt-mouthed spotted salamander',
  },
  /*Marbled Salamander*/{
    commonName: 'Marbled Salamander',
    acceptableNames: [],
    similarSpecies: ['Spotted Salamander','Jeffersons Salamander'],
    latinName: 'Ambystomatidae Ambystoma opacum',
    rootWords: 'amblýs-stóma opācum',
    rootTranslation: 'blunt-mouth shaded',
    latinNameTranslation: 'blunt-mouthed shaded salamander',
  },
  /*Eastern Newt*/{
    commonName: 'Eastern Newt',
    acceptableNames: ['Newt','Red-spotted Newt','Red Eft'],
    similarSpecies: ['Northern Red Salamander','Spotted Salamander'],
    latinName: 'Salamandridae Notophthalmus viridescens',
    rootWords: 'salamándrā nō̂tos-ophthalmós viridēscēns',
    rootTranslation: 'salamander back-eye greenish',
    latinNameTranslation: 'greenish back-eyed newt',
  },
  /*Hellbender*/{
    commonName: 'Hellbender',
    acceptableNames: ['Eastern Hellbender'],
    similarSpecies: ['Common Mudpuppy','Greater Siren'],
    latinName: 'Cryptobranchidae Cryptobranchus alleganiensis',
    rootWords: 'kryptós-bránchia allegheny-ēnsis',
    rootTranslation: 'hidden-gill Allegheny-from',
    latinNameTranslation: 'hidden-gilled one of the Alleghenies',
  },
  /*Two-toed Amphiuma*/{
    commonName: 'Two-toed Amphiuma',
    acceptableNames: ['Amphiuma'],
    similarSpecies: ['Greater Siren','Common Mudpuppy'],
    latinName: 'Amphiumidae Amphiuma means',
    rootWords: 'ámphi meāns',
    rootTranslation: 'both passing',
    latinNameTranslation: 'both-ways wanderer',
  },
  /*Greater Siren*/{
    commonName: 'Greater Siren',
    acceptableNames: ['Siren'],
    similarSpecies: ['Two-toed Amphiuma','Common Mudpuppy'],
    latinName: 'Sirenidae Siren lacertina',
    rootWords: 'Seirḗn lacerta-īna',
    rootTranslation: 'Siren lizard-like',
    latinNameTranslation: 'lizard-like siren',
  },
  /*Common Mudpuppy*/{
    commonName: 'Common Mudpuppy',
    acceptableNames: ['Mudpuppy'],
    similarSpecies: ['Hellbender','Greater Siren','Two-toed Amphiuma'],
    latinName: 'Proteidae Necturus maculosus',
    rootWords: 'Prōteús nēktós-ourá maculōsus',
    rootTranslation: 'Proteus swimming-tail spotted',
    latinNameTranslation: 'swimming-tailed spotted salamander',
  },
  /*Jefferson's Salamander*/{
    commonName: 'Jefferson\'s Salamander',
    acceptableNames: ['Jeffersons Salamander'],
    similarSpecies: ['Spotted Salamander','Marbled Salamander'],
    latinName: 'Ambystomatidae Ambystoma jeffersonianum',
    rootWords: 'amblýs-stóma jeffersoniānum',
    rootTranslation: 'blunt-mouth of-Jefferson',
    latinNameTranslation: 'Jeffersons blunt-mouthed salamander',
  },
  /*Two-lined Salamander*/{
    commonName: 'Two-lined Salamander',
    acceptableNames: [],
    similarSpecies: ['Long-tailed Salamander','Cave Salamander','Four-toed Salamander'],
    latinName: 'Plethodontidae Eurycea bislineata',
    rootWords: 'plêthos-odoús Eurydíkē bis-līneāta',
    rootTranslation: 'full-tooth Eurydice two-lined',
    latinNameTranslation: 'two-lined Eurydice salamander',
  },
  /*Eastern Worm Snake*/{
    commonName: 'Eastern Worm Snake',
    acceptableNames: ['Worm Snake'],
    similarSpecies: ['Ring-Necked Snake','Eastern Mudsnake'],
    latinName: 'Colubridae Carphophis amoenus',
    rootWords: 'coluber kárphos-óphis amoenus',
    rootTranslation: 'snake twig-snake pleasant',
    latinNameTranslation: 'charming twig-snake',
  },
  /*Rough Greensnake*/{
    commonName: 'Rough Greensnake',
    acceptableNames: ['Green Snake'],
    similarSpecies: ['Ribbonsnake','Black Racer'],
    latinName: 'Colubridae Opheodrys aestivus',
    rootWords: 'coluber óphis-drŷs aestīvus',
    rootTranslation: 'snake snake-tree summery',
    latinNameTranslation: 'summer tree-snake',
  },
  /*Ring-Necked Snake*/{
    commonName: 'Ring-Necked Snake',
    acceptableNames: ['Ringneck Snake','Ringneck'],
    similarSpecies: ['Eastern Worm Snake','Black Racer'],
    latinName: 'Colubridae Diadophis punctatus',
    rootWords: 'coluber diádēma-óphis pūnctātus',
    rootTranslation: 'snake band-snake spotted',
    latinNameTranslation: 'spotted diadem-snake',
  },
  /*Eastern Kingsnake*/{
    commonName: 'Eastern Kingsnake',
    acceptableNames: ['Kingsnake','Common Kingsnake'],
    similarSpecies: ['Eastern Milk Snake','Scarlet Kingsnake','Black Racer'],
    latinName: 'Colubridae Lampropeltis getula',
    rootWords: 'coluber lamprós-péltē gaetūla',
    rootTranslation: 'snake shining-shield Getulian',
    latinNameTranslation: 'shining-shield snake of Getulia',
  },
  /*Eastern Milk Snake*/{
    commonName: 'Eastern Milk Snake',
    acceptableNames: ['Milk Snake'],
    similarSpecies: ['Scarlet Kingsnake','Red Cornsnake','Eastern Kingsnake'],
    latinName: 'Colubridae Lampropeltis triangulum',
    rootWords: 'coluber lamprós-péltē triangulum',
    rootTranslation: 'snake shining-shield triangle',
    latinNameTranslation: 'triangle-marked shining-shield snake',
  },
  /*Scarlet Kingsnake*/{
    commonName: 'Scarlet Kingsnake',
    acceptableNames: [],
    similarSpecies: ['Eastern Milk Snake','Red Cornsnake','Eastern Kingsnake'],
    latinName: 'Colubridae Lampropeltis elapsoides',
    rootWords: 'coluber lamprós-péltē élaps-oeidḗs',
    rootTranslation: 'snake shining-shield elapid-like',
    latinNameTranslation: 'shining-shield snake resembling an elapid',
  },
  /*Red Cornsnake*/{
    commonName: 'Red Cornsnake',
    acceptableNames: ['Cornsnake'],
    similarSpecies: ['Eastern Ratsnake','Eastern Milk Snake','Scarlet Kingsnake'],
    latinName: 'Colubridae Pantherophis guttata',
    rootWords: 'coluber pánthēr-óphis guttāta',
    rootTranslation: 'snake panther-snake speckled',
    latinNameTranslation: 'speckled panther-snake',
  },
  /*Eastern Ratsnake*/{
    commonName: 'Eastern Ratsnake',
    acceptableNames: ['Ratsnake','Black Ratsnake'],
    similarSpecies: ['Red Cornsnake','Black Racer','Pinesnake'],
    latinName: 'Colubridae Pantherophis alleghaniensis',
    rootWords: 'coluber pánthēr-óphis allegheny-ēnsis',
    rootTranslation: 'snake panther-snake Allegheny-from',
    latinNameTranslation: 'Allegheny panther-snake',
  },
  /*Black Racer*/{
    commonName: 'Black Racer',
    acceptableNames: ['Racer','Northern Black Racer'],
    similarSpecies: ['Eastern Ratsnake','Pinesnake','Eastern Kingsnake'],
    latinName: 'Colubridae Coluber constrictor',
    rootWords: 'coluber cōnstrictor',
    rootTranslation: 'snake squeezer',
    latinNameTranslation: 'squeezing snake',
  },
  /*Pinesnake*/{
    commonName: 'Pinesnake',
    acceptableNames: ['Northern Pinesnake'],
    similarSpecies: ['Eastern Ratsnake','Black Racer','Eastern Hog-nosed Snake'],
    latinName: 'Colubridae Pituophis melanoleucus',
    rootWords: 'coluber pítys-óphis mélas-leukós',
    rootTranslation: 'snake pine-snake black-white',
    latinNameTranslation: 'black-and-white pine-snake',
  },
  /*Eastern Hog-nosed Snake*/{
    commonName: 'Eastern Hog-nosed Snake',
    acceptableNames: ['Hog-nosed Snake','Hognose Snake','Hog-nose'],
    similarSpecies: ['Pinesnake','Eastern Copperhead','Northern Watersnake'],
    latinName: 'Colubridae Heterodon platirhinos',
    rootWords: 'coluber héteros-odoús platýs-rhís',
    rootTranslation: 'snake different-tooth flat-nose',
    latinNameTranslation: 'different-toothed flat-nosed snake',
  },
  /*Queen Snake*/{
    commonName: 'Queen Snake',
    acceptableNames: [],
    similarSpecies: ['Northern Watersnake','Garter Snake','Ribbonsnake'],
    latinName: 'Colubridae Regina septemvittata',
    rootWords: 'coluber rēgīna septem-vittāta',
    rootTranslation: 'snake queen seven-banded',
    latinNameTranslation: 'seven-striped queen',
  },
  /*Garter Snake*/{
    commonName: 'Garter Snake',
    acceptableNames: ['Eastern Garter Snake','Common Garter Snake'],
    similarSpecies: ['Ribbonsnake','Queen Snake','Northern Watersnake'],
    latinName: 'Colubridae Thamnophis sirtalis',
    rootWords: 'coluber thámnos-óphis seirá-ālis',
    rootTranslation: 'snake bush-snake cord-like',
    latinNameTranslation: 'garter-like bush-snake',
  },
  /*Ribbonsnake*/{
    commonName: 'Ribbonsnake',
    acceptableNames: ['Eastern Ribbon Snake'],
    similarSpecies: ['Garter Snake','Queen Snake','Rough Greensnake'],
    latinName: 'Colubridae Thamnophis sauritus',
    rootWords: 'coluber thámnos-óphis saûros-ourá',
    rootTranslation: 'snake bush-snake lizard-tail',
    latinNameTranslation: 'lizard-tailed bush-snake',
  },
  /*Northern Watersnake*/{
    commonName: 'Northern Watersnake',
    acceptableNames: ['Watersnake'],
    similarSpecies: ['Queen Snake','Eastern Mudsnake','Northern Cottonmouth'],
    latinName: 'Colubridae Nerodia sipedon',
    rootWords: 'coluber nērós sēpedṓn',
    rootTranslation: 'snake wet rotting',
    latinNameTranslation: 'water-dweller named for a rot-causing snake',
  },
  /*Eastern Mudsnake*/{
    commonName: 'Eastern Mudsnake',
    acceptableNames: ['Mudsnake'],
    similarSpecies: ['Rainbow Snake','Northern Watersnake'],
    latinName: 'Colubridae Farancia abacura',
    rootWords: 'coluber farancia abacura',
    rootTranslation: 'snake coined-name obscure-epithet',
    latinNameTranslation: 'coined-name snake with an obscure epithet',
  },
  /*Rainbow Snake*/{
    commonName: 'Rainbow Snake',
    acceptableNames: [],
    similarSpecies: ['Eastern Mudsnake','Northern Watersnake'],
    latinName: 'Colubridae Farancia erytrogramma',
    rootWords: 'coluber farancia erythrós-grámma',
    rootTranslation: 'snake coined-name red-line',
    latinNameTranslation: 'red-lined coined-name snake',
  },
  /*Eastern Copperhead*/{
    commonName: 'Eastern Copperhead',
    acceptableNames: ['Copperhead','Southern Copperhead'],
    similarSpecies: ['Northern Cottonmouth','Timber Rattlesnake','Eastern Hog-nosed Snake'],
    latinName: 'Viperidae Agkistrodon contortrix',
    rootWords: 'vīvus-parere ánkistron-odoús contortrix',
    rootTranslation: 'alive-bear hook-tooth twister',
    latinNameTranslation: 'hook-toothed twister',
  },
  /*Northern Cottonmouth*/{
    commonName: 'Northern Cottonmouth',
    acceptableNames: ['Cottonmouth','Water Moccasin'],
    similarSpecies: ['Eastern Copperhead','Timber Rattlesnake','Northern Watersnake'],
    latinName: 'Viperidae Agkistrodon piscivorous',
    rootWords: 'vīvus-parere ánkistron-odoús piscis-vorus',
    rootTranslation: 'alive-bear hook-tooth fish-devouring',
    latinNameTranslation: 'hook-toothed fish-devourer',
  },
  /*Timber Rattlesnake*/{
    commonName: 'Timber Rattlesnake',
    acceptableNames: ['Rattlesnake','Canebrake Rattlesnake'],
    similarSpecies: ['Eastern Copperhead','Northern Cottonmouth'],
    latinName: 'Viperidae Crotalus horridus',
    rootWords: 'vīvus-parere krótalon horridus',
    rootTranslation: 'alive-bear rattle bristling',
    latinNameTranslation: 'dreadful rattler',
  },
  /*Eastern Spiny Softshell*/{
    commonName: 'Eastern Spiny Softshell',
    acceptableNames: ['Spiny Softshell','Spiny Softshell Turtle'],
    similarSpecies: ['Leatherback','Snapping Turtle'],
    latinName: 'Trionychidae Apalone spinifera',
    rootWords: 'treîs-ónyx hapalós spīna-fera',
    rootTranslation: 'three-claw soft thorn-bearing',
    latinNameTranslation: 'soft spine-bearing turtle',
  },
  /*Snapping Turtle*/{
    commonName: 'Snapping Turtle',
    acceptableNames: ['Common Snapping Turtle','snapper'],
    similarSpecies: ['Common Musk Turtle','Eastern Spiny Softshell'],
    latinName: 'Chelydridae Chelydra serpentina',
    rootWords: 'chélys-hýdros serpentīna',
    rootTranslation: 'turtle-watersnake snake-like',
    latinNameTranslation: 'snake-like turtle',
  },
  /*Common Musk Turtle*/{
    commonName: 'Common Musk Turtle',
    acceptableNames: ['Musk Turtle','Stinkpot','Stinkpot Turtle'],
    similarSpecies: ['Snapping Turtle','Eastern Box Turtle'],
    latinName: 'Kinosternidae Sternotherus odoratus',
    rootWords: 'kīnéō-stérnon stérnon-thairós odōrātus',
    rootTranslation: 'move-chest chest-hinge scented',
    latinNameTranslation: 'smelly chest-hinged turtle',
  },
  /*Eastern Box Turtle*/{
    commonName: 'Eastern Box Turtle',
    acceptableNames: ['Box Turtle'],
    similarSpecies: ['Spotted Turtle','Eastern Painted Turtle','Pond Slider'],
    latinName: 'Emydidae Terrapene carolina',
    rootWords: 'emýs terrapene carolīna',
    rootTranslation: 'freshwater-turtle terrapin Carolina',
    latinNameTranslation: 'Carolina terrapin (Algonquian name)',
  },
  /*Pond Slider*/{
    commonName: 'Pond Slider',
    acceptableNames: ['Slider','Red-eared Slider'],
    similarSpecies: ['Eastern Painted Turtle','Eastern River Cooter','Diamond-backed Terrapin'],
    latinName: 'Emydidae Trachemys scripta',
    rootWords: 'trāchýs-emýs scrīpta',
    rootTranslation: 'rough-turtle written',
    latinNameTranslation: 'written-on rough turtle',
  },
  /*Eastern Painted Turtle*/{
    commonName: 'Eastern Painted Turtle',
    acceptableNames: ['Painted Turtle'],
    similarSpecies: ['Pond Slider','Eastern River Cooter','Spotted Turtle'],
    latinName: 'Emydidae Chrysemys picta',
    rootWords: 'chrysós-emýs pīcta',
    rootTranslation: 'gold-turtle painted',
    latinNameTranslation: 'painted golden turtle',
  },
  /*Spotted Turtle*/{
    commonName: 'Spotted Turtle',
    acceptableNames: [],
    similarSpecies: ['Diamond-backed Terrapin','Eastern Box Turtle','Eastern Painted Turtle'],
    latinName: 'Emydidae Clemmys guttata',
    rootWords: 'emýs klemmýs guttāta',
    rootTranslation: 'freshwater-turtle turtle speckled',
    latinNameTranslation: 'speckled turtle',
  },
  /*Eastern River Cooter*/{
    commonName: 'Eastern River Cooter',
    acceptableNames: ['River Cooter','Cooter'],
    similarSpecies: ['Pond Slider','Eastern Painted Turtle','Diamond-backed Terrapin'],
    latinName: 'Emydidae Pseudemys concinna',
    rootWords: 'pseudḗs-emýs concinna',
    rootTranslation: 'false-turtle elegant',
    latinNameTranslation: 'elegant false-turtle',
  },
  /*Diamond-backed Terrapin*/{
    commonName: 'Diamond-backed Terrapin',
    acceptableNames: ['Diamondback Terrapin','Terrapin'],
    similarSpecies: ['Spotted Turtle','Eastern River Cooter','Pond Slider'],
    latinName: 'Emydidae Malaclemys terrapin',
    rootWords: 'emýs malakós-klemmýs terrapin',
    rootTranslation: 'freshwater-turtle soft-turtle turtle',
    latinNameTranslation: 'soft turtle (terrapin)',
  },
  /*Leatherback*/{
    commonName: 'Leatherback',
    acceptableNames: ['Leatherback Sea Turtle','Leatherback Turtle'],
    similarSpecies: ['Kemps Ridley','Eastern Spiny Softshell'],
    latinName: 'Cheloniidae Dermochelys coriacea',
    rootWords: 'chelṓnē dérma-chélys coriācea',
    rootTranslation: 'turtle skin-turtle leathery',
    latinNameTranslation: 'leathery skin turtle',
  },
  /*Kemp's Ridley*/{
    commonName: 'Kemps Ridley',
    acceptableNames: ['Kemps Turtle','Kemps Ridley Sea Turtle'],
    similarSpecies: ['Leatherback'],
    latinName: 'Cheloniidae Lepidochelys kempii',
    rootWords: 'chelṓnē lepís-chélys kempiī',
    rootTranslation: 'turtle scale-turtle of-Kemp',
    latinNameTranslation: 'Kemps scaly turtle',
  },
  /*Slender Glass Lizard*/{
    commonName: 'Slender Glass Lizard',
    acceptableNames: ['Glass Lizard'],
    similarSpecies: ['Common Five-lined Skink','Eastern Fence Lizard'],
    latinName: 'Anguidae Ophisaurus attenuatus',
    rootWords: 'anguis óphis-saûros attenuātus',
    rootTranslation: 'snake snake-lizard thinned',
    latinNameTranslation: 'slender snake-lizard snake',
  },
  /*Eastern Fence Lizard*/{
    commonName: 'Eastern Fence Lizard',
    acceptableNames: ['Fence Lizard'],
    similarSpecies: ['Common Five-lined Skink','Eastern Six-lined Racerunner','Slender Glass Lizard'],
    latinName: 'Phrynosomatidae Sceloporus undulatus',
    rootWords: 'phrýnē-sō̂ma skélos-póros undulātus',
    rootTranslation: 'toad-body leg-pore wavy',
    latinNameTranslation: 'wavy leg-pored lizard',
  },
  /*Common Five-lined Skink*/{
    commonName: 'Common Five-lined Skink',
    acceptableNames: ['Five-lined Skink','Five-line Skink','Skink'],
    similarSpecies: ['Eastern Six-lined Racerunner','Eastern Fence Lizard','Slender Glass Lizard'],
    latinName: 'Scincidae Plestiodon fasciatus',
    rootWords: 'skínkos pleîstos-odoús fasciātus',
    rootTranslation: 'skink most-tooth banded',
    latinNameTranslation: 'many-toothed banded skink',
  },
  /*Eastern Six-lined Racerunner*/{
    commonName: 'Eastern Six-lined Racerunner',
    acceptableNames: ['Six-lined Racerunner','Six-line Racerunner','Racerunner'],
    similarSpecies: ['Common Five-lined Skink','Eastern Fence Lizard'],
    latinName: 'Teiidae Aspidoscelis sexlineata',
    rootWords: 'teyú aspís-skélos sex-līneāta',
    rootTranslation: 'lizard shield-leg six-lined',
    latinNameTranslation: 'shield-legged six-lined Lizard',
  },
];

const speciesGroups = {
  'Fish': ['Leuciscidae','Percidae','Polyodontidae','Acipenseridae','Lepisosteidae','Centrarchidae','Salmonidae','Cottidae','Ictaluridae','Catostomidae'],
  'Frogs & Toads': ['Bufonidae','Hylidae','Microhylidae','Ranidae','Scaphiopodidae'],
  'Salamanders': ['Plethodontidae','Ambystomatidae','Salamandridae','Cryptobranchidae','Amphiumidae','Sirenidae','Proteidae'],
  'Snakes': ['Colubridae','Viperidae'],
  'Turtles': ['Trionychidae','Chelydridae','Kinosternidae','Emydidae','Cheloniidae'],
  'Lizards': ['Anguidae','Phrynosomatidae','Scincidae','Teiidae'],
};

// remembers which groups are collapsed, so it survives setupQuiz() re-running
let collapsedGroups = {};

function getGroup(species) {
  const family = species.latinName.split(' ')[0];
  for (const [name, families] of Object.entries(speciesGroups)) {
    if (families.includes(family)) return name;
  }
  return 'Other';
}



const quizResetData = structuredClone(quizData);

const speciesByName = {};
quizResetData.forEach(s => {
  speciesByName[normalize(s.commonName)] = s;
});

function getCloseAnswers(species) {
  const close = [];
  species.similarSpecies.forEach(name => {
    close.push(normalize(name));                       // 'Northern Cottonmouth'
    const match = speciesByName[normalize(name)];
    if (match) {
      (match.acceptableNames ?? []).forEach(alt => {   // 'Cottonmouth', 'Water Moccasin'
        close.push(normalize(alt));
      });
    }
  });
  return close;
}


const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const secondSubmitButton = document.getElementById('secondSubmit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const correctOrNot = document.getElementById('correct');
const nextButton = document.getElementById('next');
const latinNameInput = document.getElementById('latinName');
const speciesIDInput = document.getElementById('speciesID');
const imageContainer = document.getElementById('speciesImage');
const startButton = document.getElementById('start');
const deselectButton = document.getElementById('deselectAll');
const selectButton = document.getElementById('selectAll');
const returnToHomeButton = document.getElementById('backout');

const checkboxStyleChanger = document.querySelector('.checkbox');



const checkBoxWarning = document.createElement('div');
checkBoxWarning.innerHTML = '';


let currentQuestion = 0;
let currentQuestionDisplay = 1;
let score = 0;
let isGivenAnswerCorrect = 0;
let isGivenAnswer2Correct = 0;
let incorrectAnswers = [];
let checkedSpeciess = Array(quizResetData.length).fill(true);
let skipped = '<span class="skipped">skipped</span>';
let quizSetup = [];
let wasSkipped = false;
let imageID = '';
let idName = '';
let idNum = 0;




function normalize(str) {
  return str.toLowerCase().replaceAll(/[^a-z]/g, '');   // keeps letters only
}

function compareLatin(input, correct) {
  const given = input.trim().split(/\s+/).map(normalize).filter(Boolean);
  const answer = correct.trim().split(/\s+/).map(normalize);

  let matches = 0;
  answer.forEach(word => {
    if (given.includes(word)) matches++;
  });

  return { matches, total: answer.length };
}

function setupQuiz() {
  deselectButton.style.display = 'inline-block';
  selectButton.style.display = 'inline-block';
  startButton.style.display = 'inline-block';

  quizContainer.innerHTML = '';

  quizData = structuredClone(quizResetData);
  const optionsElement = document.createElement('div');
  const title = document.createElement('div');
  title.innerHTML = 'What Species Would You Like to Study?<br><br>';
  title.className = 'question';
  quizContainer.appendChild(title);

  optionsElement.className = 'options';

  //set up one collapsible section per group
  const groups = {};
  Object.keys(speciesGroups).concat('Other').forEach(name => {
    groups[name] = createGroupSection(name, optionsElement);
  });

  //set up checkboxes
  quizData.forEach((species, i) => {
    const option = document.createElement('label');

    let similarSpeciesList = ``;

    if (species.similarSpecies.length == 0) {
      similarSpeciesList += `None`;
    } else if (species.similarSpecies.length == 1) {
      similarSpeciesList += `${species.similarSpecies[0]}`;
    } else if (species.similarSpecies.length == 2) {
      similarSpeciesList += `${species.similarSpecies[0]} and ${species.similarSpecies[1]}`;
    } else {
      for (let n = 0; n < species.similarSpecies.length - 1; n++) {
        similarSpeciesList += `${species.similarSpecies[n]}, `;
      }
      similarSpeciesList += `and ${species.similarSpecies[species.similarSpecies.length - 1]}`;
    }

    


    let acceptableNamesList = ``;

    if (species.acceptableNames.length == 0) {
      acceptableNamesList += `None`;
    } else if (species.acceptableNames.length == 1) {
      acceptableNamesList += `${species.acceptableNames[0]}`;
    } else if (species.acceptableNames.length == 2) {
      acceptableNamesList += `${species.acceptableNames[0]} and ${species.acceptableNames[1]}`;
    } else {
      for (let n = 0; n < species.acceptableNames.length - 1; n++) {
        acceptableNamesList += `${species.acceptableNames[n]}, `;
      }
      acceptableNamesList += `and ${species.acceptableNames[species.acceptableNames.length - 1]}`;
    }


    let commonName = ` ${species.commonName} <dfn data-title='Similar to: ${similarSpeciesList}'><img id='questionIcon_${species.id || '1'}' src='QuestionMarkIcon.png' alt='More information' class='smallestImage'></dfn>  <span class = 'smallText'>-</span>  `;

    option.className = 'option';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'quiz';
    checkBox.className = 'checkbox';
    checkBox.dataset.index = i;                 // remember which species this is
    checkBox.checked = checkedSpeciess[i];

    const group = groups[getGroup(species)];
    checkBox.addEventListener('change', () => {
      checkedSpeciess[i] = checkBox.checked;    // keep state when sections re-render
      group.update();
    });

    for (let n = 1; n < 3 + 1; n++) {
      setImageID(i, false, n);
      commonName += `<img id='speciesImage' src='${imageID}' alt=' ' class='smallerImage'> `;
    }

    commonName += `<span class = 'smallText'><i> - ${species.latinName} - </i>${species.latinNameTranslation}</span> <dfn data-title='${species.rootWords}\n(${species.rootTranslation})\n'><img id='?Icon' src='QuestionMarkIcon.png' alt='' class='smallestImage'></dfn>`;

    const optionText = document.createElement('span');
    optionText.innerHTML = commonName;

    option.appendChild(checkBox);
    option.appendChild(optionText);

    group.body.appendChild(option);
  });

  //set initial header checkbox/count for each group, hide empty groups
  Object.values(groups).forEach(g => g.update());

  quizContainer.appendChild(optionsElement);
  quizContainer.appendChild(checkBoxWarning);
}

function whichAreSelected() {
  const checkboxes = document.getElementsByName('quiz');
  const selectedByIndex = [];
  checkboxes.forEach(cb => {
    selectedByIndex[cb.dataset.index] = cb.checked;
  });
  checkedSpeciess = selectedByIndex;

  //filters out unchecked species
  quizData = quizData.filter((species, i) => selectedByIndex[i]);

  //hides the deselect and start buttons
  deselectButton.style.display = 'none';
  selectButton.style.display = 'none';
  startButton.style.display = 'none';

  //Shuffles questions and starts quiz
  shuffleQuestions();
  displayQuestion();
}

function createGroupSection(name, container) {

  const section = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'groupHeader';

  const arrow = document.createElement('span');
  arrow.className = 'groupArrow';

  const groupBox = document.createElement('input');
  groupBox.type = 'checkbox';
  groupBox.className = 'checkbox orange bigCheckbox';              // reuses your checkbox style
  // no name='quiz' on purpose, so it isn't counted as a species

  const label = document.createElement('span');
  label.className = 'groupLabel';

  const count = document.createElement('span');
  count.className = 'groupCount';

  const body = document.createElement('div');
  body.className = 'groupBody';

  header.appendChild(arrow);
  header.appendChild(groupBox);
  header.appendChild(label);
  header.appendChild(count);
  section.appendChild(header);
  section.appendChild(body);
  container.appendChild(section);

  function applyCollapsed() {
    const collapsed = collapsedGroups[name] ?? true;   // groups start collapsed
    body.style.display = collapsed ? 'none' : 'block';
    arrow.classList.toggle('open', !collapsed);
  }

  // click the header (anywhere except its checkbox) to collapse/expand
  header.addEventListener('click', () => {
    collapsedGroups[name] = !(collapsedGroups[name] ?? true);
    applyCollapsed();
  });

  // header checkbox toggles every species in the group
  groupBox.addEventListener('click', (e) => e.stopPropagation());
  groupBox.addEventListener('change', () => {
    body.querySelectorAll('input[name="quiz"]').forEach(cb => {
      cb.checked = groupBox.checked;
      checkedSpeciess[cb.dataset.index] = groupBox.checked;
    });
    update();
  });

  function update() {
    const boxes = body.querySelectorAll('input[name="quiz"]');
    const checked = [...boxes].filter(cb => cb.checked).length;
    label.textContent = ` ${name} `;
    count.textContent = `(${checked}/${boxes.length})`;
    groupBox.checked = boxes.length > 0 && checked === boxes.length;
    groupBox.indeterminate = checked > 0 && checked < boxes.length;
    section.style.display = boxes.length === 0 ? 'none' : 'block';
  }

  applyCollapsed();
  return { body, update };
}

function deselectAll() {
  checkedSpeciess = Array(quizResetData.length).fill(false);
  setupQuiz();
}

function selectAll() {
  checkedSpeciess = Array(quizResetData.length).fill(true);
  setupQuiz();
}

function whichAreSelected() {
  checkedSpeciess = [];
  var checkboxes = document.getElementsByName('quiz');
  const amount = quizData.length;

  //filters out unchecked speciess
  quizData = quizData.filter((species,i) => {
    checkedSpeciess.push(checkboxes[i].checked);
    return checkboxes[i].checked;
  });
  
  //hides the deselect and start buttons
  deselectButton.style.display = 'none';
  selectButton.style.display = 'none';
  startButton.style.display = 'none';

  //Shuffles questions and starts quiz
  shuffleQuestions();
  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleQuestions() {
  shuffleArray(quizData);
  quizSetup = structuredClone(quizData);
  
  quizData.forEach(({ similarSpecies }) => {
    similarSpecies.forEach((similarSpecies) => {
      similarSpecies = similarSpecies.toLowerCase();
      similarSpecies = similarSpecies.replaceAll(/[!@#.,></?'";:_=+`~1234567890$%^&*()\|-]/g, "");
      similarSpecies = similarSpecies.replaceAll(" ", "").replaceAll("-", "");
    });
  });
}

function setImageID(questionNum, rand, num) {
  idName = quizData[questionNum].commonName;
  idName = idName.replaceAll(/[^a-z]/g, '');

  if (rand == true){
    idNum = Math.floor(Math.random() * 3) + 1;
  } else {
    idNum = num;
  }

  imageID = `${idName}/${idName}${idNum}.png`;
}

function displayQuestion() {
  
  //checks if at least one checkbox is checked
  if (quizData.length > 0) {
    
    //get randomized image ID
    setImageID(currentQuestion,true);
    
    //clearing whole container and the warning for empty checkboxes
    checkBoxWarning.innerHTML = '';
    quizContainer.innerHTML = '';

    const questionData = quizData[currentQuestion];
    
    
    //setting the ID for and unhiding the image container
    document.getElementById("speciesImage").src = imageID;
    imageContainer.style.display = 'block';

    

    //displaying input box 'speciesIDInput' and submit button
    speciesIDInput.style.display = "inline-block";
    speciesIDInput.focus();
    submitButton.style.display = "block";
    returnToHomeButton.style.display = "flex";

    //prepping and displaying the question element
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = 'What species is this?';
    quizContainer.appendChild(questionElement);

  //giving warning if no checkboxes were checked
  } else {
    checkBoxWarning.innerHTML = '<i>At Least One Species is Needed to Start the Quiz!</i>';
    setupQuiz();
  }
}

function checkFirstAnswer() {

  //fetching the given answer within the textbox
  let input = speciesIDInput.value;

  //locking a separate variable of exactly the input for display
  let inputForDisplay = `${input}`;
  input = normalize(input);
  

  
  //checking to see if textbox is empty
  if (!input) {
    wasSkipped = true;

    //setting input variables to 'skipped'
    input = skipped;
    inputForDisplay = `${skipped}`;

  } else {
    wasSkipped = false;
  }
  
  //establishing variables for displaying the result of the question
  const current = quizData[currentQuestion];
  const acceptedAnswers = [current.commonName, ...(current.acceptableNames ?? [])].map(normalize);
  const closeAnswers = getCloseAnswers(current);

  const isCorrect = document.createElement('div');
  const correction = document.createElement('div');
  correction.className = 'options';

  const display = document.createElement('div');
  display.innerHTML = inputForDisplay;

  let correctionText = '';

  let correctAnswer = quizData[currentQuestion].commonName.toLowerCase().replaceAll(" ", "").replaceAll("-", "");
  
  
  //replacing the interactible text field with locked text
  quizContainer.appendChild(display);
  speciesIDInput.style.display = 'none';

  submitButton.style.display = 'none';
  

  if (acceptedAnswers.includes(input)) {
    isCorrect.className = 'rightAnswer';
    isCorrect.innerHTML = 'Correct +1';
    isGivenAnswerCorrect = 2;
    score++;

  } else if (closeAnswers.includes(input)) {
    isCorrect.className = 'closeAnswer';
    isCorrect.innerHTML = '<b>Close! +0.5</b>';
    isGivenAnswerCorrect = 1;
    score = score+ 0.5;

    correctionText += `Correct answer is <b>${quizData[currentQuestion].commonName}</b><br>`;

    incorrectAnswers.push({
      didSkip: wasSkipped,
      textSpacer: '<br>',
      isQuestionOne: true,
      questionNumber: currentQuestionDisplay +0.1,
      correctAnswer: quizData[currentQuestion].commonName,
      image:  ` Species ID -    <img id='speciesImage' src='${imageID}'' alt='Species Image' class='smallImage'>`,
      incorrectAnswer: inputForDisplay,
      isClose: 'closeAnswer',
    });


  } else {

    incorrectAnswers.push({
      didSkip: wasSkipped,
      textSpacer: '<br>',
      isQuestionOne: true,
      questionNumber: currentQuestionDisplay +0.1,
      correctAnswer: quizData[currentQuestion].commonName,
      image:  ` Species ID -    <img id='speciesImage' src='${imageID}'' alt='Species Image' class='smallImage'>`,
      incorrectAnswer: inputForDisplay,
      isClose: 'wrongAnswer',
    });
    
    

    isCorrect.className = 'wrongAnswer';
    isCorrect.innerHTML = 'Incorrect';
    isGivenAnswerCorrect = 0;

    correctionText += `Correct answer is <b>${quizData[currentQuestion].commonName}</b><br>`;


  }
  
  if (quizData[currentQuestion].similarSpecies.length > 2) {
    correctionText += '<span class="smallText"><i>Similar Species: </i> <b>';

    for (let i = 0; i < quizSetup[currentQuestion].similarSpecies.length - 1; i++) {
      correctionText += `${quizSetup[currentQuestion].similarSpecies[i]}, `;
    }

    correctionText += `and ${quizSetup[currentQuestion].similarSpecies[quizData[currentQuestion].similarSpecies.length - 1]}`;
    correctionText += '</b></span>';

  } else if (quizData[currentQuestion].similarSpecies.length == 2) {
    correctionText += `<span class="smallText"><i>Similar Species: </i> <b> ${quizSetup[currentQuestion].similarSpecies[0]} and ${quizSetup[currentQuestion].similarSpecies[1]}</b></span>`;

  } else if (quizData[currentQuestion].similarSpecies.length == 1) {
    correctionText += `<span class="smallText"><i>Similar Species: </i> <b> ${quizSetup[currentQuestion].similarSpecies[0]}</b></span>`;
  
  } else {
    correctionText +=  `Similar Species: None`;
  
  }
  
  correction.innerHTML = `${correctionText}`;

  quizContainer.appendChild(isCorrect);
  quizContainer.appendChild(correction);

  

  secondQuestion();
}

function secondQuestion() {
  if (isGivenAnswerCorrect > 0) {
    const secondQuestion = document.createElement('div');
    secondQuestion.className = 'question';
    secondQuestion.innerHTML = `<br>What is the latin name of <b>${quizData[currentQuestion].commonName}</b>`;
    quizContainer.appendChild(secondQuestion);
    
    latinNameInput.style.display = "inline-block";
    latinNameInput.focus();
    secondSubmitButton.style.display = "block";

  } else {
    nextButton.style.display = 'inline-block';
    nextButton.focus();
  }
}

function checkSecondAnswer() {
  const input = latinNameInput.value;
  const current = quizData[currentQuestion];

  const answerForDisplay = document.createElement('div');
  const isCorrect = document.createElement('div');
  const correction = document.createElement('div');
  correction.className = 'options';
  correction.innerHTML = `Correct answer is <b>${current.latinName}</b><br>Translation: <b>${quizData[currentQuestion].latinNameTranslation}</b>`;

  wasSkipped = !normalize(input);
  const inputForDisplay = wasSkipped ? skipped : input;

  // exact match ignores spaces/case, so "campostomaanomalum" still counts
  const isExact = normalize(input) === normalize(current.latinName);
  const { matches, total } = compareLatin(input, current.latinName);
  const isPartial = !isExact && matches > 0;

  answerForDisplay.innerHTML = inputForDisplay;
  quizContainer.appendChild(answerForDisplay);
  secondSubmitButton.style.display = 'none';
  latinNameInput.style.display = 'none';

  if (isExact) {
    isCorrect.className = 'rightAnswer';
    isCorrect.innerHTML = 'Correct +1';
    isGivenAnswer2Correct = 1;
    score++;

  } else {
    // pick the image/no-image label the same way your old code did
    const label = isGivenAnswerCorrect == 1
      ? ` Latin name of <b>${current.commonName}</b>`
      : ` Latin name of <b>${current.commonName}</b>    <img src='${imageID}' alt='Species Image' class='smallImage'>`;

    incorrectAnswers.push({
      didSkip: wasSkipped,
      textSpacer: isGivenAnswerCorrect == 1 ? '' : '<br>',
      isQuestionOne: false,
      incorrectAnswer: inputForDisplay,
      questionNumber: currentQuestionDisplay + 0.2,
      correctAnswer: current.latinName,
      image: label,
      isClose: isPartial ? 'closeAnswer' : 'wrongAnswer',
    });

    if (isPartial) {
      isCorrect.className = 'closeAnswer';
      isCorrect.innerHTML = `<b>Close! +0.5</b> (${matches}/${total} words correct)`;
      score += 0.5;
    } else {
      isCorrect.className = 'wrongAnswer';
      isCorrect.innerHTML = 'Incorrect';
    }
    isGivenAnswer2Correct = 0;
  }

  quizContainer.appendChild(isCorrect);
  if (!isExact) {
    quizContainer.appendChild(correction);
  }
  submitButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  nextButton.focus();
}

function nextQuestion() {
  currentQuestion++;
  currentQuestionDisplay++;

  nextButton.style.display = 'none';
  submitButton.style.display = 'inline-block';
  secondSubmitButton.style.display = 'none';

  document.getElementById('speciesID').value = '';
  document.getElementById('latinName').value = '';

  /*const selectedOption = document.querySelector('input[name="quiz"]:checked');
    selectedOption.checked = false;*/
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      imageContainer.style.display = 'none';
      displayResult();
    }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'block';
  const potentialScore = quizData.length * 2;
  const percentage = Math.round((score/potentialScore) *100);

  
  resultContainer.innerHTML = `
    <p><b>${percentage}%</b></p>
    <p>You scored ${score} out of ${potentialScore}!<p>
  `;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];

  document.getElementById('speciesID').value = '';
  document.getElementById('latinName').value = '';


  quizContainer.style.display = 'block';
  submitButton.style.display = 'none';
  secondSubmitButton.style.display = 'none';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  returnToHomeButton.style.display = 'none';
  latinNameInput.style.display = 'none';
  speciesIDInput.style.display = 'none';
  imageContainer.style.display = 'none';
  nextButton.style.display = 'none';
  resultContainer.innerHTML = '';
  startButton.style.display = 'block';
  setupQuiz();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';
  const potentialScore = quizData.length * 2;
  const percentage = Math.round((score/potentialScore) *100);

  let incorrectAnswersHtml = '';

  if (incorrectAnswers.length>0){
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          ${incorrectAnswers[i].textSpacer}
          <span class="${incorrectAnswers[i].isClose}"><strong>Question ${incorrectAnswers[i].questionNumber}:</strong></span><i>${incorrectAnswers[i].image}</i> <br>
          Your Answer: ${incorrectAnswers[i].didSkip ? `${incorrectAnswers[i].incorrectAnswer}` : `<b>${incorrectAnswers[i].incorrectAnswer}</b>`}<br>
          Correct Answer: <b>${incorrectAnswers[i].correctAnswer}</b>
        </p>
      `;
    }
  } else {
    incorrectAnswersHtml += `<span class="rightAnswer">None!</span>`;
  }

  resultContainer.innerHTML = `
    <p><b>${percentage}%</b></p>
    <p>You scored ${score} out of ${potentialScore}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkFirstAnswer);
secondSubmitButton.addEventListener('click', checkSecondAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);
nextButton.addEventListener('click',nextQuestion);
startButton.addEventListener('click',whichAreSelected);
deselectButton.addEventListener('click',deselectAll);
selectButton.addEventListener('click',selectAll);
returnToHomeButton.addEventListener('click',retryQuiz);


speciesIDInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkFirstAnswer();
  }
});

latinNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkSecondAnswer();
  }
});

setupQuiz();