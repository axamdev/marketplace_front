import axios from "axios";
import Dress from "components/icons/Dress";
import { categoriesUrl, TOKEN } from "utils/constants";

const params = { 

  }
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'   ,
        'Authorization': TOKEN
      },
  };
const getAllCategories = async () => {
   const response = await axios.post(categoriesUrl,params,config);
   console.log(response.data);
  const data = {
    "message": "Category retrieved successfully",
    "error": false,
    "total": 99,
    "data": [
        {
            "id": "11",
            "name": "maison & bureau",
            "parent_id": "0",
            "slug": "maison-bureau-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/bureau.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "row_order": "0",
            "status": "1",
            "clicks": "3",
            "children": [
                {
                    "id": "23",
                    "name": "maison",
                    "parent_id": "11",
                    "slug": "maison",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_19.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_19.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [
                        {
                            "id": "15",
                            "name": "canapé et fauteil",
                            "parent_id": "23",
                            "slug": "canapé-et-fauteil-1",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "13",
                            "children": [],
                            "text": "canapé et fauteil",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        },
                        {
                            "id": "18",
                            "name": "Art de la table scandinave",
                            "parent_id": "23",
                            "slug": "art-de-la-table-scandinave-1",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_24.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_24.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [],
                            "text": "Art de la table scandinave",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        },
                        {
                            "id": "24",
                            "name": "Déco maison",
                            "parent_id": "23",
                            "slug": "déco-maison",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_141.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_141.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [
                                {
                                    "id": "25",
                                    "name": "Moquette et tapis",
                                    "parent_id": "24",
                                    "slug": "moquette-et-tapis",
                                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                    "row_order": "0",
                                    "status": "1",
                                    "clicks": "0",
                                    "children": [
                                        {
                                            "id": "27",
                                            "name": "couverture de secteur",
                                            "parent_id": "25",
                                            "slug": "couverture-de-secteur-1",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/la-fenetre.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_441.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "0",
                                            "children": [],
                                            "text": "couverture de secteur",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        },
                                        {
                                            "id": "28",
                                            "name": "sous tapis",
                                            "parent_id": "25",
                                            "slug": "sous-tapis",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "5",
                                            "children": [],
                                            "text": "sous tapis",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        }
                                    ],
                                    "text": "Moquette et tapis",
                                    "state": {
                                        "opened": true
                                    },
                                    "level": 3
                                },
                                {
                                    "id": "26",
                                    "name": "Parfum",
                                    "parent_id": "24",
                                    "slug": "parfum-1",
                                    "image": "http://5.135.194.236:8181/uploads/media/2022/AA-FORTE_HEADER-BANNER_PLP_MOBILE_4-JUICE.jpg",
                                    "banner": "http://5.135.194.236:8181/uploads/media/2022/AA-FORTE_HEADER-BANNER_PLP_MOBILE_4-JUICE.jpg",
                                    "row_order": "0",
                                    "status": "1",
                                    "clicks": "182",
                                    "children": [
                                        {
                                            "id": "30",
                                            "name": "Réveils",
                                            "parent_id": "26",
                                            "slug": "réveils",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_401.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_401.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "1",
                                            "children": [],
                                            "text": "Réveils",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        },
                                        {
                                            "id": "31",
                                            "name": "Horloge murales",
                                            "parent_id": "26",
                                            "slug": "horloge-murales",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_44.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_44.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "0",
                                            "children": [],
                                            "text": "Horloge murales",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        }
                                    ],
                                    "text": "Parfum",
                                    "state": {
                                        "opened": true
                                    },
                                    "level": 3
                                }
                            ],
                            "text": "Déco maison",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        }
                    ],
                    "text": "maison",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "maison & bureau",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0,
            "total": 99
        },
        {
            "id": "63",
            "name": "Chambre & Salon",
            "parent_id": "0",
            "slug": "chambre-salon",
            "image": "http://5.135.194.236:8181/uploads/media/2022/chambre.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre.png",
            "row_order": "1",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "65",
                    "name": "Accessoires & Décoration chambre adulte",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-adulte",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre adulte",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "66",
                    "name": "Accessoires & Décoration chambre enfant",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-enfant",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre_(2).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre_(2).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre enfant",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "67",
                    "name": "Accessoires & Décoration chambre bébé",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-bébé",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre-de-bebe.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre-de-bebe.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre bébé",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "68",
                    "name": "Décoration salon & Salle à manger",
                    "parent_id": "63",
                    "slug": "décoration-salon-salle-à-manger",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/le-salon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/le-salon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration salon & Salle à manger",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "70",
                    "name": "Décoration terrasse & Balcon",
                    "parent_id": "63",
                    "slug": "décoration-terrasse-balcon",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/balcon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/balcon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration terrasse & Balcon",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Chambre & Salon",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "58",
            "name": "Cuisine",
            "parent_id": "0",
            "slug": "cuisine-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/table-de-cuisine.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/table-de-cuisine.png",
            "row_order": "2",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "59",
                    "name": "Ustensiles de cuisine",
                    "parent_id": "58",
                    "slug": "ustensiles-de-cuisine-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Ustensiles de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "60",
                    "name": "Articles en verre",
                    "parent_id": "58",
                    "slug": "articles-en-verre",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/bouteilles-de-vin.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/bouteilles-de-vin.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles en verre",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "61",
                    "name": "Articles en céramique",
                    "parent_id": "58",
                    "slug": "articles-en-céramique",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/assiette.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/assiette.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles en céramique",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "64",
                    "name": "Articles de rangement",
                    "parent_id": "58",
                    "slug": "articles-de-rangement",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ustensiles-de-cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ustensiles-de-cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles de rangement",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "69",
                    "name": "Linges de cuisine",
                    "parent_id": "58",
                    "slug": "linges-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/corde-a-linge.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/corde-a-linge.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Linges de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "75",
                    "name": "Rangement à la cuisine",
                    "parent_id": "58",
                    "slug": "rangement-à-la-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisine_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisine_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement à la cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "77",
                    "name": "Arts culinaires & de table",
                    "parent_id": "58",
                    "slug": "arts-culinaires-de-table",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/table1.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/table1.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Arts culinaires & de table",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "78",
                    "name": "Meubles de cuisine",
                    "parent_id": "58",
                    "slug": "meubles-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/comptoir.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/comptoir.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Meubles de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "80",
                    "name": "Accessoires de cuisine",
                    "parent_id": "58",
                    "slug": "accessoires-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/gant-de-cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/gant-de-cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Cuisine",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "71",
            "name": "Chauffage & Climatisation",
            "parent_id": "0",
            "slug": "chauffage-climatisation",
            "image": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
            "row_order": "3",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "72",
                    "name": "Chauffage",
                    "parent_id": "71",
                    "slug": "chauffage",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chauffage.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chauffage.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Chauffage",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "73",
                    "name": "Climatisation",
                    "parent_id": "71",
                    "slug": "climatisation",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Climatisation",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "74",
                    "name": "Qualité & Traitement d\\'air",
                    "parent_id": "71",
                    "slug": "qualité-traitement-dair",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ventilateur.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ventilateur.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Qualité & Traitement d'air",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Chauffage & Climatisation",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "76",
            "name": "Luminaires & Eclairage",
            "parent_id": "0",
            "slug": "luminaires-eclairage",
            "image": "http://5.135.194.236:8181/uploads/media/2022/projecteurs.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/projecteurs.png",
            "row_order": "4",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "79",
                    "name": "Luminaire d\\'intérieur",
                    "parent_id": "76",
                    "slug": "luminaire-dintérieur",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/plafonnier.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/plafonnier.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire d'intérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "81",
                    "name": "Luminaire d\\'extérieur",
                    "parent_id": "76",
                    "slug": "luminaire-dextérieur",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/eclairage-public.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/eclairage-public.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "82",
                    "name": "Luminaire de cuisine & Salle de bain",
                    "parent_id": "76",
                    "slug": "luminaire-de-cuisine-salle-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lampe-suspendue.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lampe-suspendue.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire de cuisine & Salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "84",
                    "name": "Luminaire de terrasse & Balcon",
                    "parent_id": "76",
                    "slug": "luminaire-de-terrasse-balcon",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lampe.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lampe.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire de terrasse & Balcon",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "85",
                    "name": "Lumières d\\'ambiance",
                    "parent_id": "76",
                    "slug": "lumières-dambiance",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lumieres-de-noel.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lumieres-de-noel.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Lumières d'ambiance",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Luminaires & Eclairage",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "83",
            "name": "Décoration",
            "parent_id": "0",
            "slug": "décoration-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/etageres-murales.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/etageres-murales.png",
            "row_order": "5",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "86",
                    "name": "Décoration murale",
                    "parent_id": "83",
                    "slug": "décoration-murale",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/horloge-murale.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/horloge-murale.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration murale",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "90",
                    "name": "Décoration des fêtes",
                    "parent_id": "83",
                    "slug": "décoration-des-fêtes",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ballon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ballon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration des fêtes",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "92",
                    "name": "papiers peints & stickers",
                    "parent_id": "83",
                    "slug": "papiers-peints-stickers",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/fond-decran.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/fond-decran.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "papiers peints & stickers",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "93",
                    "name": "Objets de décoration",
                    "parent_id": "83",
                    "slug": "objets-de-décoration",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/couronne.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/couronne.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Objets de décoration",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "94",
                    "name": "Vases",
                    "parent_id": "83",
                    "slug": "vases",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/des-vases.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/des-vases.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Vases",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "95",
                    "name": "statuettes & figurines",
                    "parent_id": "83",
                    "slug": "statuettes-figurines",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/trophee.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/trophee.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "statuettes & figurines",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "97",
                    "name": "Rangement décoratifs",
                    "parent_id": "83",
                    "slug": "rangement-décoratifs",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/espace-de-rangement.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/espace-de-rangement.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement décoratifs",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "99",
                    "name": "Plantes artificielles",
                    "parent_id": "83",
                    "slug": "plantes-artificielles",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/plante.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/plante.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Plantes artificielles",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Décoration",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "87",
            "name": "Bricolage",
            "parent_id": "0",
            "slug": "bricolage",
            "image": "http://5.135.194.236:8181/uploads/media/2022/renovation.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/renovation.png",
            "row_order": "6",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "88",
                    "name": "Outillage à main",
                    "parent_id": "87",
                    "slug": "outillage-à-main",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/tool.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/tool.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Outillage à main",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "89",
                    "name": "Outillage électroportatif",
                    "parent_id": "87",
                    "slug": "outillage-électroportatif",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/drill.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/drill.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Outillage électroportatif",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "91",
                    "name": "Matériel & Rangement de garage",
                    "parent_id": "87",
                    "slug": "matériel-rangement-de-garage-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/wholesale.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/wholesale.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Matériel & Rangement de garage",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "96",
                    "name": "Accessoires, Consommables & Protection",
                    "parent_id": "87",
                    "slug": "accessoires-consommables-protection",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/home-repair.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/home-repair.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires, Consommables & Protection",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "98",
                    "name": "Fournitures",
                    "parent_id": "87",
                    "slug": "fournitures",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/paper-crafts.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/paper-crafts.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Fournitures",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Bricolage",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "37",
            "name": "Jardin & Extérieur",
            "parent_id": "0",
            "slug": "jardin-extérieur",
            "image": "http://5.135.194.236:8181/uploads/media/2022/jardin.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/jardin.png",
            "row_order": "7",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "38",
                    "name": "Décoration de jardin",
                    "parent_id": "37",
                    "slug": "décoration-de-jardin-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/jardin_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/jardin_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "39",
                    "name": "Mobilier de jardin",
                    "parent_id": "37",
                    "slug": "mobilier-de-jardin-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/table.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/table.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "40",
                    "name": "Barbecues & Chauffage d\\'extérieur",
                    "parent_id": "37",
                    "slug": "barbecues-chauffage-dextérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/barbecue.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/barbecue.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Barbecues & Chauffage d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "41",
                    "name": "Amenagement de jardin",
                    "parent_id": "37",
                    "slug": "amenagement-de-jardin-2",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chariot.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chariot.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Amenagement de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "43",
                    "name": "Jouets & Jeux d\\'extérieur",
                    "parent_id": "37",
                    "slug": "jouets-jeux-dextérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/glissiere.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/glissiere.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Jouets & Jeux d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "44",
                    "name": "Rangement en extérieur",
                    "parent_id": "37",
                    "slug": "rangement-en-extérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cabane-en-bois.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cabane-en-bois.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement en extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "48",
                    "name": "Animalerie",
                    "parent_id": "37",
                    "slug": "animalerie",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/animalerie.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/animalerie.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Animalerie",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Jardin & Extérieur",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "45",
            "name": "Electroménager",
            "parent_id": "0",
            "slug": "electroménager-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/electronique.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/electronique.png",
            "row_order": "8",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "47",
                    "name": "Petit électroménager",
                    "parent_id": "45",
                    "slug": "petit-électroménager-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/grille-pain.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/grille-pain.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Petit électroménager",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "49",
                    "name": "Gros électroménager",
                    "parent_id": "45",
                    "slug": "gros-électroménager-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/appareils-electromenagers.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/appareils-electromenagers.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Gros électroménager",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "51",
                    "name": "Matériel de cuisson",
                    "parent_id": "45",
                    "slug": "matériel-de-cuisson-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisson.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisson.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Matériel de cuisson",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "53",
                    "name": "Entretien de la maison",
                    "parent_id": "45",
                    "slug": "entretien-de-la-maison-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/nettoyage-de-la-maison.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/nettoyage-de-la-maison.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Entretien de la maison",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "54",
                    "name": "Appareil de coiffure & Beauté",
                    "parent_id": "45",
                    "slug": "appareil-de-coiffure-beauté-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/seche-cheveux.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/seche-cheveux.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Appareil de coiffure & Beauté",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "56",
                    "name": "Cafetières & machines à Café",
                    "parent_id": "45",
                    "slug": "cafetières-machines-à-café",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cafetiere.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cafetiere.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Cafetières & machines à Café",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "57",
                    "name": "Divers matériels",
                    "parent_id": "45",
                    "slug": "divers-matériels-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/electromenager.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/electromenager.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Divers matériels",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Electroménager",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "50",
            "name": "Salle de bain",
            "parent_id": "0",
            "slug": "salle-de-bain-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/salle-de-bains.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/salle-de-bains.png",
            "row_order": "9",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "52",
                    "name": "Accessoires salle de bain",
                    "parent_id": "50",
                    "slug": "accessoires-salle-de-bain-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/materiel-de-nettoyage.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/materiel-de-nettoyage.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "55",
                    "name": "Decors salle de bain",
                    "parent_id": "50",
                    "slug": "decors-salle-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/etageres.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/etageres.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Decors salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "62",
                    "name": "Linge de bain",
                    "parent_id": "50",
                    "slug": "linge-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/serviette-de-bain.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/serviette-de-bain.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Linge de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Salle de bain",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "10",
            "name": "Nature & green",
            "parent_id": "0",
            "slug": "nature-green-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/cactus.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_16.png",
            "row_order": "10",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "21",
                    "name": "Mobilier",
                    "parent_id": "10",
                    "slug": "mobilier",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_29.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_29.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "22",
                    "name": "Décoration",
                    "parent_id": "10",
                    "slug": "décoration",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Nature & green",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "32",
            "name": "Tableau",
            "parent_id": "0",
            "slug": "tableau-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/image.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/png-transparent-home-decoration-branches-flowers-vase-thumbnail1.png",
            "row_order": "11",
            "status": "1",
            "clicks": "4",
            "children": [
                {
                    "id": "33",
                    "name": "Tableau moderne",
                    "parent_id": "32",
                    "slug": "tableau-moderne",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Tableau moderne",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Tableau",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "8",
            "name": "Miroir",
            "parent_id": "0",
            "slug": "miroir-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/lavabo.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_31.png",
            "row_order": "12",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "Miroir",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "34",
            "name": "Phone",
            "parent_id": "0",
            "slug": "phone-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/iphone.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Mobile.png",
            "row_order": "13",
            "status": "1",
            "clicks": "3",
            "children": [],
            "text": "Phone",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "9",
            "name": "Tapis",
            "parent_id": "0",
            "slug": "tapis-2",
            "image": "http://5.135.194.236:8181/uploads/media/2022/tapis-de-yoga.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_59.png",
            "row_order": "14",
            "status": "1",
            "clicks": "3",
            "children": [],
            "text": "Tapis",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "13",
            "name": "Tout la déco intérieur",
            "parent_id": "0",
            "slug": "tout-la-déco-intérieur",
            "image": "http://5.135.194.236:8181/uploads/media/2022/etagere-a-livres.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_26.png",
            "row_order": "15",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "Tout la déco intérieur",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "12",
            "name": "Industielle",
            "parent_id": "0",
            "slug": "industielle-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/matieres-premieres.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_11.png",
            "row_order": "16",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "19",
                    "name": "Mobilier brut",
                    "parent_id": "12",
                    "slug": "mobilier-brut",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_34.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_34.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier brut",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "20",
                    "name": "Luminaire indistruelle",
                    "parent_id": "12",
                    "slug": "luminaire-indistruelle",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_481.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_481.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire indistruelle",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Industielle",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "2",
            "name": "decor",
            "parent_id": "0",
            "slug": "decor",
            "image": "http://5.135.194.236:8181/uploads/media/2022/thumb-sm/png-transparent-home-decoration-branches-flowers-vase-thumbnail.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/png-transparent-home-decoration-branches-flowers-vase-thumbnail.png",
            "row_order": "17",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "decor",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "3",
            "name": "luminère",
            "parent_id": "0",
            "slug": "luminère",
            "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
            "row_order": "18",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "4",
                    "name": "abatjour",
                    "parent_id": "3",
                    "slug": "abatjour",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [
                        {
                            "id": "5",
                            "name": "tissu",
                            "parent_id": "4",
                            "slug": "tissu",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [],
                            "text": "tissu",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        }
                    ],
                    "text": "abatjour",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "luminère",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "6",
            "name": "Contemporaine",
            "parent_id": "0",
            "slug": "contemporaine",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_55.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_55.png",
            "row_order": "19",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "14",
                    "name": "Mobilier moderne",
                    "parent_id": "6",
                    "slug": "mobilier-moderne-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_551.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_551.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "101",
                    "children": [],
                    "text": "Mobilier moderne",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "16",
                    "name": "Déco et luminaire contemporain",
                    "parent_id": "6",
                    "slug": "déco-et-luminaire-contemporain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_54.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_54.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Déco et luminaire contemporain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Contemporaine",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "36",
            "name": "Chaise",
            "parent_id": "0",
            "slug": "chaise",
            "image": "http://5.135.194.236:8181/uploads/media/2022/chaise-capitonnee-atylia.jpg",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/chaise-capitonnee-atylia.jpg",
            "row_order": "20",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "Chaise",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "35",
            "name": "Decor",
            "parent_id": "0",
            "slug": "decor-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Mocka_Ella_Decor_Stand_2__78303.jpg",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Mocka_Ella_Decor_Stand_2__78303.jpg",
            "row_order": "21",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "Decor",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "7",
            "name": "Scandinave",
            "parent_id": "0",
            "slug": "scandinave",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "row_order": "22",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "17",
                    "name": "mobilier nordique",
                    "parent_id": "7",
                    "slug": "mobilier-nordique",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_39.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_39.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "mobilier nordique",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Scandinave",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "29",
            "name": "tapis",
            "parent_id": "0",
            "slug": "tapis-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
            "row_order": "23",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "tapis",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        }
    ],
    "popular_categories": [
        {
            "id": "32",
            "name": "Tableau",
            "parent_id": "0",
            "slug": "tableau-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/image.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/png-transparent-home-decoration-branches-flowers-vase-thumbnail1.png",
            "row_order": "11",
            "status": "1",
            "clicks": "4",
            "children": [
                {
                    "id": "33",
                    "name": "Tableau moderne",
                    "parent_id": "32",
                    "slug": "tableau-moderne",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Tableau moderne",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Tableau",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0,
            "total": 99
        },
        {
            "id": "9",
            "name": "Tapis",
            "parent_id": "0",
            "slug": "tapis-2",
            "image": "http://5.135.194.236:8181/uploads/media/2022/tapis-de-yoga.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_59.png",
            "row_order": "14",
            "status": "1",
            "clicks": "3",
            "children": [],
            "text": "Tapis",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "11",
            "name": "maison & bureau",
            "parent_id": "0",
            "slug": "maison-bureau-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/bureau.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "row_order": "0",
            "status": "1",
            "clicks": "3",
            "children": [
                {
                    "id": "23",
                    "name": "maison",
                    "parent_id": "11",
                    "slug": "maison",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_19.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_19.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [
                        {
                            "id": "15",
                            "name": "canapé et fauteil",
                            "parent_id": "23",
                            "slug": "canapé-et-fauteil-1",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "13",
                            "children": [],
                            "text": "canapé et fauteil",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        },
                        {
                            "id": "18",
                            "name": "Art de la table scandinave",
                            "parent_id": "23",
                            "slug": "art-de-la-table-scandinave-1",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_24.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_24.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [],
                            "text": "Art de la table scandinave",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        },
                        {
                            "id": "24",
                            "name": "Déco maison",
                            "parent_id": "23",
                            "slug": "déco-maison",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_141.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_141.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [
                                {
                                    "id": "25",
                                    "name": "Moquette et tapis",
                                    "parent_id": "24",
                                    "slug": "moquette-et-tapis",
                                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                    "row_order": "0",
                                    "status": "1",
                                    "clicks": "0",
                                    "children": [
                                        {
                                            "id": "27",
                                            "name": "couverture de secteur",
                                            "parent_id": "25",
                                            "slug": "couverture-de-secteur-1",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/la-fenetre.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_441.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "0",
                                            "children": [],
                                            "text": "couverture de secteur",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        },
                                        {
                                            "id": "28",
                                            "name": "sous tapis",
                                            "parent_id": "25",
                                            "slug": "sous-tapis",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_00.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "5",
                                            "children": [],
                                            "text": "sous tapis",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        }
                                    ],
                                    "text": "Moquette et tapis",
                                    "state": {
                                        "opened": true
                                    },
                                    "level": 3
                                },
                                {
                                    "id": "26",
                                    "name": "Parfum",
                                    "parent_id": "24",
                                    "slug": "parfum-1",
                                    "image": "http://5.135.194.236:8181/uploads/media/2022/AA-FORTE_HEADER-BANNER_PLP_MOBILE_4-JUICE.jpg",
                                    "banner": "http://5.135.194.236:8181/uploads/media/2022/AA-FORTE_HEADER-BANNER_PLP_MOBILE_4-JUICE.jpg",
                                    "row_order": "0",
                                    "status": "1",
                                    "clicks": "182",
                                    "children": [
                                        {
                                            "id": "30",
                                            "name": "Réveils",
                                            "parent_id": "26",
                                            "slug": "réveils",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_401.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_401.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "1",
                                            "children": [],
                                            "text": "Réveils",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        },
                                        {
                                            "id": "31",
                                            "name": "Horloge murales",
                                            "parent_id": "26",
                                            "slug": "horloge-murales",
                                            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_44.png",
                                            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_44.png",
                                            "row_order": "0",
                                            "status": "1",
                                            "clicks": "0",
                                            "children": [],
                                            "text": "Horloge murales",
                                            "state": {
                                                "opened": true
                                            },
                                            "level": 4
                                        }
                                    ],
                                    "text": "Parfum",
                                    "state": {
                                        "opened": true
                                    },
                                    "level": 3
                                }
                            ],
                            "text": "Déco maison",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        }
                    ],
                    "text": "maison",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "maison & bureau",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "34",
            "name": "Phone",
            "parent_id": "0",
            "slug": "phone-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/iphone.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Mobile.png",
            "row_order": "13",
            "status": "1",
            "clicks": "3",
            "children": [],
            "text": "Phone",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "3",
            "name": "luminère",
            "parent_id": "0",
            "slug": "luminère",
            "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
            "row_order": "18",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "4",
                    "name": "abatjour",
                    "parent_id": "3",
                    "slug": "abatjour",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [
                        {
                            "id": "5",
                            "name": "tissu",
                            "parent_id": "4",
                            "slug": "tissu",
                            "image": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                            "banner": "http://5.135.194.236:8181/uploads/media/2022/image_7.png",
                            "row_order": "0",
                            "status": "1",
                            "clicks": "0",
                            "children": [],
                            "text": "tissu",
                            "state": {
                                "opened": true
                            },
                            "level": 2
                        }
                    ],
                    "text": "abatjour",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "luminère",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "6",
            "name": "Contemporaine",
            "parent_id": "0",
            "slug": "contemporaine",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_55.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_55.png",
            "row_order": "19",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "14",
                    "name": "Mobilier moderne",
                    "parent_id": "6",
                    "slug": "mobilier-moderne-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_551.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_551.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "101",
                    "children": [],
                    "text": "Mobilier moderne",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "16",
                    "name": "Déco et luminaire contemporain",
                    "parent_id": "6",
                    "slug": "déco-et-luminaire-contemporain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_54.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_54.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Déco et luminaire contemporain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Contemporaine",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "7",
            "name": "Scandinave",
            "parent_id": "0",
            "slug": "scandinave",
            "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_05_39.png",
            "row_order": "22",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "17",
                    "name": "mobilier nordique",
                    "parent_id": "7",
                    "slug": "mobilier-nordique",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_39.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_22_39.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "mobilier nordique",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Scandinave",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "10",
            "name": "Nature & green",
            "parent_id": "0",
            "slug": "nature-green-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/cactus.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_16.png",
            "row_order": "10",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "21",
                    "name": "Mobilier",
                    "parent_id": "10",
                    "slug": "mobilier",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_29.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_29.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "22",
                    "name": "Décoration",
                    "parent_id": "10",
                    "slug": "décoration",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_12.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Nature & green",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "12",
            "name": "Industielle",
            "parent_id": "0",
            "slug": "industielle-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/matieres-premieres.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_06_11.png",
            "row_order": "16",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "19",
                    "name": "Mobilier brut",
                    "parent_id": "12",
                    "slug": "mobilier-brut",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_34.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_23_34.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier brut",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "20",
                    "name": "Luminaire indistruelle",
                    "parent_id": "12",
                    "slug": "luminaire-indistruelle",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_481.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/Screen_Shot_2022-09-15_at_04_21_481.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire indistruelle",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Industielle",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "36",
            "name": "Chaise",
            "parent_id": "0",
            "slug": "chaise",
            "image": "http://5.135.194.236:8181/uploads/media/2022/chaise-capitonnee-atylia.jpg",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/chaise-capitonnee-atylia.jpg",
            "row_order": "20",
            "status": "1",
            "clicks": "0",
            "children": [],
            "text": "Chaise",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "37",
            "name": "Jardin & Extérieur",
            "parent_id": "0",
            "slug": "jardin-extérieur",
            "image": "http://5.135.194.236:8181/uploads/media/2022/jardin.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/jardin.png",
            "row_order": "7",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "38",
                    "name": "Décoration de jardin",
                    "parent_id": "37",
                    "slug": "décoration-de-jardin-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/jardin_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/jardin_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "39",
                    "name": "Mobilier de jardin",
                    "parent_id": "37",
                    "slug": "mobilier-de-jardin-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/table.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/table.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Mobilier de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "40",
                    "name": "Barbecues & Chauffage d\\'extérieur",
                    "parent_id": "37",
                    "slug": "barbecues-chauffage-dextérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/barbecue.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/barbecue.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Barbecues & Chauffage d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "41",
                    "name": "Amenagement de jardin",
                    "parent_id": "37",
                    "slug": "amenagement-de-jardin-2",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chariot.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chariot.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Amenagement de jardin",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "43",
                    "name": "Jouets & Jeux d\\'extérieur",
                    "parent_id": "37",
                    "slug": "jouets-jeux-dextérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/glissiere.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/glissiere.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Jouets & Jeux d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "44",
                    "name": "Rangement en extérieur",
                    "parent_id": "37",
                    "slug": "rangement-en-extérieur-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cabane-en-bois.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cabane-en-bois.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement en extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "48",
                    "name": "Animalerie",
                    "parent_id": "37",
                    "slug": "animalerie",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/animalerie.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/animalerie.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Animalerie",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Jardin & Extérieur",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "45",
            "name": "Electroménager",
            "parent_id": "0",
            "slug": "electroménager-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/electronique.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/electronique.png",
            "row_order": "8",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "47",
                    "name": "Petit électroménager",
                    "parent_id": "45",
                    "slug": "petit-électroménager-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/grille-pain.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/grille-pain.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Petit électroménager",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "49",
                    "name": "Gros électroménager",
                    "parent_id": "45",
                    "slug": "gros-électroménager-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/appareils-electromenagers.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/appareils-electromenagers.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Gros électroménager",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "51",
                    "name": "Matériel de cuisson",
                    "parent_id": "45",
                    "slug": "matériel-de-cuisson-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisson.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisson.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Matériel de cuisson",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "53",
                    "name": "Entretien de la maison",
                    "parent_id": "45",
                    "slug": "entretien-de-la-maison-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/nettoyage-de-la-maison.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/nettoyage-de-la-maison.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Entretien de la maison",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "54",
                    "name": "Appareil de coiffure & Beauté",
                    "parent_id": "45",
                    "slug": "appareil-de-coiffure-beauté-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/seche-cheveux.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/seche-cheveux.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Appareil de coiffure & Beauté",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "56",
                    "name": "Cafetières & machines à Café",
                    "parent_id": "45",
                    "slug": "cafetières-machines-à-café",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cafetiere.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cafetiere.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Cafetières & machines à Café",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "57",
                    "name": "Divers matériels",
                    "parent_id": "45",
                    "slug": "divers-matériels-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/electromenager.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/electromenager.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Divers matériels",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Electroménager",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "50",
            "name": "Salle de bain",
            "parent_id": "0",
            "slug": "salle-de-bain-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/salle-de-bains.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/salle-de-bains.png",
            "row_order": "9",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "52",
                    "name": "Accessoires salle de bain",
                    "parent_id": "50",
                    "slug": "accessoires-salle-de-bain-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/materiel-de-nettoyage.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/materiel-de-nettoyage.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "55",
                    "name": "Decors salle de bain",
                    "parent_id": "50",
                    "slug": "decors-salle-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/etageres.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/etageres.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Decors salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "62",
                    "name": "Linge de bain",
                    "parent_id": "50",
                    "slug": "linge-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/serviette-de-bain.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/serviette-de-bain.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Linge de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Salle de bain",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "58",
            "name": "Cuisine",
            "parent_id": "0",
            "slug": "cuisine-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/table-de-cuisine.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/table-de-cuisine.png",
            "row_order": "2",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "59",
                    "name": "Ustensiles de cuisine",
                    "parent_id": "58",
                    "slug": "ustensiles-de-cuisine-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Ustensiles de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "60",
                    "name": "Articles en verre",
                    "parent_id": "58",
                    "slug": "articles-en-verre",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/bouteilles-de-vin.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/bouteilles-de-vin.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles en verre",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "61",
                    "name": "Articles en céramique",
                    "parent_id": "58",
                    "slug": "articles-en-céramique",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/assiette.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/assiette.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles en céramique",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "64",
                    "name": "Articles de rangement",
                    "parent_id": "58",
                    "slug": "articles-de-rangement",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ustensiles-de-cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ustensiles-de-cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Articles de rangement",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "69",
                    "name": "Linges de cuisine",
                    "parent_id": "58",
                    "slug": "linges-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/corde-a-linge.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/corde-a-linge.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Linges de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "75",
                    "name": "Rangement à la cuisine",
                    "parent_id": "58",
                    "slug": "rangement-à-la-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/cuisine_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/cuisine_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement à la cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "77",
                    "name": "Arts culinaires & de table",
                    "parent_id": "58",
                    "slug": "arts-culinaires-de-table",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/table1.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/table1.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Arts culinaires & de table",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "78",
                    "name": "Meubles de cuisine",
                    "parent_id": "58",
                    "slug": "meubles-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/comptoir.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/comptoir.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Meubles de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "80",
                    "name": "Accessoires de cuisine",
                    "parent_id": "58",
                    "slug": "accessoires-de-cuisine",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/gant-de-cuisine.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/gant-de-cuisine.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires de cuisine",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Cuisine",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "63",
            "name": "Chambre & Salon",
            "parent_id": "0",
            "slug": "chambre-salon",
            "image": "http://5.135.194.236:8181/uploads/media/2022/chambre.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre.png",
            "row_order": "1",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "65",
                    "name": "Accessoires & Décoration chambre adulte",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-adulte",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre_(1).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre_(1).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre adulte",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "66",
                    "name": "Accessoires & Décoration chambre enfant",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-enfant",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre_(2).png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre_(2).png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre enfant",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "67",
                    "name": "Accessoires & Décoration chambre bébé",
                    "parent_id": "63",
                    "slug": "accessoires-décoration-chambre-bébé",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chambre-de-bebe.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chambre-de-bebe.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires & Décoration chambre bébé",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "68",
                    "name": "Décoration salon & Salle à manger",
                    "parent_id": "63",
                    "slug": "décoration-salon-salle-à-manger",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/le-salon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/le-salon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration salon & Salle à manger",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "70",
                    "name": "Décoration terrasse & Balcon",
                    "parent_id": "63",
                    "slug": "décoration-terrasse-balcon",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/balcon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/balcon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration terrasse & Balcon",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Chambre & Salon",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "71",
            "name": "Chauffage & Climatisation",
            "parent_id": "0",
            "slug": "chauffage-climatisation",
            "image": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
            "row_order": "3",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "72",
                    "name": "Chauffage",
                    "parent_id": "71",
                    "slug": "chauffage",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/chauffage.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/chauffage.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Chauffage",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "73",
                    "name": "Climatisation",
                    "parent_id": "71",
                    "slug": "climatisation",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/climatisation.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Climatisation",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "74",
                    "name": "Qualité & Traitement d\\'air",
                    "parent_id": "71",
                    "slug": "qualité-traitement-dair",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ventilateur.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ventilateur.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Qualité & Traitement d'air",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Chauffage & Climatisation",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "76",
            "name": "Luminaires & Eclairage",
            "parent_id": "0",
            "slug": "luminaires-eclairage",
            "image": "http://5.135.194.236:8181/uploads/media/2022/projecteurs.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/projecteurs.png",
            "row_order": "4",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "79",
                    "name": "Luminaire d\\'intérieur",
                    "parent_id": "76",
                    "slug": "luminaire-dintérieur",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/plafonnier.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/plafonnier.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire d'intérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "81",
                    "name": "Luminaire d\\'extérieur",
                    "parent_id": "76",
                    "slug": "luminaire-dextérieur",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/eclairage-public.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/eclairage-public.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire d'extérieur",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "82",
                    "name": "Luminaire de cuisine & Salle de bain",
                    "parent_id": "76",
                    "slug": "luminaire-de-cuisine-salle-de-bain",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lampe-suspendue.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lampe-suspendue.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire de cuisine & Salle de bain",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "84",
                    "name": "Luminaire de terrasse & Balcon",
                    "parent_id": "76",
                    "slug": "luminaire-de-terrasse-balcon",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lampe.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lampe.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Luminaire de terrasse & Balcon",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "85",
                    "name": "Lumières d\\'ambiance",
                    "parent_id": "76",
                    "slug": "lumières-dambiance",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/lumieres-de-noel.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/lumieres-de-noel.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Lumières d'ambiance",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Luminaires & Eclairage",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "83",
            "name": "Décoration",
            "parent_id": "0",
            "slug": "décoration-1",
            "image": "http://5.135.194.236:8181/uploads/media/2022/etageres-murales.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/etageres-murales.png",
            "row_order": "5",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "86",
                    "name": "Décoration murale",
                    "parent_id": "83",
                    "slug": "décoration-murale",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/horloge-murale.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/horloge-murale.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration murale",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "90",
                    "name": "Décoration des fêtes",
                    "parent_id": "83",
                    "slug": "décoration-des-fêtes",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/ballon.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/ballon.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Décoration des fêtes",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "92",
                    "name": "papiers peints & stickers",
                    "parent_id": "83",
                    "slug": "papiers-peints-stickers",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/fond-decran.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/fond-decran.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "papiers peints & stickers",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "93",
                    "name": "Objets de décoration",
                    "parent_id": "83",
                    "slug": "objets-de-décoration",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/couronne.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/couronne.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Objets de décoration",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "94",
                    "name": "Vases",
                    "parent_id": "83",
                    "slug": "vases",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/des-vases.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/des-vases.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Vases",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "95",
                    "name": "statuettes & figurines",
                    "parent_id": "83",
                    "slug": "statuettes-figurines",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/trophee.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/trophee.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "statuettes & figurines",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "97",
                    "name": "Rangement décoratifs",
                    "parent_id": "83",
                    "slug": "rangement-décoratifs",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/espace-de-rangement.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/espace-de-rangement.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Rangement décoratifs",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "99",
                    "name": "Plantes artificielles",
                    "parent_id": "83",
                    "slug": "plantes-artificielles",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/plante.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/plante.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Plantes artificielles",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Décoration",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        },
        {
            "id": "87",
            "name": "Bricolage",
            "parent_id": "0",
            "slug": "bricolage",
            "image": "http://5.135.194.236:8181/uploads/media/2022/renovation.png",
            "banner": "http://5.135.194.236:8181/uploads/media/2022/renovation.png",
            "row_order": "6",
            "status": "1",
            "clicks": "0",
            "children": [
                {
                    "id": "88",
                    "name": "Outillage à main",
                    "parent_id": "87",
                    "slug": "outillage-à-main",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/tool.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/tool.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Outillage à main",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "89",
                    "name": "Outillage électroportatif",
                    "parent_id": "87",
                    "slug": "outillage-électroportatif",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/drill.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/drill.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Outillage électroportatif",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "91",
                    "name": "Matériel & Rangement de garage",
                    "parent_id": "87",
                    "slug": "matériel-rangement-de-garage-1",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/wholesale.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/wholesale.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Matériel & Rangement de garage",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "96",
                    "name": "Accessoires, Consommables & Protection",
                    "parent_id": "87",
                    "slug": "accessoires-consommables-protection",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/home-repair.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/home-repair.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Accessoires, Consommables & Protection",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                },
                {
                    "id": "98",
                    "name": "Fournitures",
                    "parent_id": "87",
                    "slug": "fournitures",
                    "image": "http://5.135.194.236:8181/uploads/media/2022/paper-crafts.png",
                    "banner": "http://5.135.194.236:8181/uploads/media/2022/paper-crafts.png",
                    "row_order": "0",
                    "status": "1",
                    "clicks": "0",
                    "children": [],
                    "text": "Fournitures",
                    "state": {
                        "opened": true
                    },
                    "level": 1
                }
            ],
            "text": "Bricolage",
            "state": {
                "opened": true
            },
            "icon": "jstree-folder",
            "level": 0
        }
    ]
};
   return response.data["data"];
  //return data["data"] ;
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getAllCategories,

};
