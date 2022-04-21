import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
// import { createResponseComposition } from "msw";
// import { act } from "react-dom/test-utils";
import NewsApi from "../../api/NewsApi";


const initialState = [
    {
    "id": "1650380546538",
    "path": "/content/vrtnieuws/nl/2022/04/19/analyse-fusie-boortmeerbeek-en-mechelen",
    "title": "Waarom inwoners vaak huiveren bij een gemeentefusie en politici vooral (financiële) voordelen zien",
    "description": "Terwijl de inwoners van Boortmeerbeek vrij koel reageren op de fusieplannen met Mechelen, maken de burgemeesters zich sterk dat het een win-winsituatie is. Het traditionele \"emotie versus ratio\", analyseert politiek journalist Ivan De Vadder, die met de nieuwe fusie het Vlaams landschap steeds meer richting \"de interne staatshervorming\" van Geert Bourgeois ziet evolueren.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/19/db3a080f-bffc-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/video",
    "id": "system:vrtnieuws/labels/video",
    "title": "Video",
    "description": "Aansturen van de video overzichtspagina en de video feed in de app. Niet gebruikt om de teasers aan te passen.",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Video"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/analyse/ivan-de-vadder",
    "id": "functional:vrtnieuws/categories/analyse/ivan-de-vadder",
    "title": "Ivan De Vadder",
    "description": "Wetstraatwatcher voor VRT NWS. Maakt en presenteert ook het programma \"De afspraak op vrijdag\". | Voor meer van Ivan De Vadder, klik hier.",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Analyse",
    "Ivan De Vadder"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/stories/gemeenteraadsverkiezingen/nieuwe-fusiegemeenten",
    "id": "functional:vrtnieuws/stories/gemeenteraadsverkiezingen/nieuwe-fusiegemeenten",
    "title": "Nieuwe fusiegemeenten",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Dossiers",
    "KIES18",
    "Nieuwe fusiegemeenten"
    ]
    },
    {
    "path": "/content/cq:tags/authors/V/valerie-vanhelden",
    "id": "authors:V/valerie-vanhelden",
    "title": "Valerie Vanhelden",
    "description": "Valerie Vanhelden",
    "titlesPath": [
    "Authors",
    "V",
    "Valerie Vanhelden"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/vlaams-brabant/kanton_haacht/boortmeerbeek",
    "id": "functional:vrtnieuws/locations/vlaams-brabant/kanton_haacht/boortmeerbeek",
    "title": "Boortmeerbeek",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Vlaams-Brabant",
    "Kanton Haacht",
    "Boortmeerbeek"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "title": "Mechelen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Mechelen",
    "Mechelen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/audio",
    "id": "system:vrtnieuws/labels/audio",
    "title": "Audio",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Audio"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/19/analyse-fusie-boortmeerbeek-en-mechelen/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/19/analyse-fusie-boortmeerbeek-en-mechelen/",
    "articleDates": {
    "publicationDate": "2022-04-19T16:25:24+0000",
    "sortingDate": "2022-04-19T16:25:24+0000",
    "lastModifiedDate": "2022-04-19T17:57:58+0000"
    },
    "subtitle": "Wetsstraatjournalist Ivan De Vadder staat stil bij de gemeentefusie die Boortmeerbeek en Mechelen vandaag hebben aangekondigd.",
    "content": "\"Wij zijn er radicaal tegen, wij willen geen melkkoe worden van Mechelen\" en \"Boortmeerbeek heeft niks, maar dan ook niks met Mechelen te maken\". De eerste reacties van de inwoners van de gemeente in Vlaams-Brabant op de fusieplannen van hun gemeente met Mechelen in Antwerpen liegen er niet om. BEKIJK - De burgemeesters van Mechelen en Boortmeerbeek stellen de gemeentefusie voor, al is lang niet iedereen het ermee eens: Videospeler inladen... Een aantal inwoners verzamelt voor het gemeentehuis van Boortmeerbeek uit protest tegen de fusie. Radio 2 Nieuwe fusiegemeenten Inwoners Boortmeerbeek reageren lauwtjes op fusieplannen: \"Willen niet de melkkoe van Mechelen zijn\" 13:31 Ze staan in schril contrast tot de persconferentie van de burgemeesters van beide gemeenten, die vooral in de verf wouden zetten hoe positief een fusie voor iedereen is. \"Hierbij zijn alleen maar winnaars\", maakte de burgemeester van Mechelen, Bart Somers (Open VLD), zich sterk. Emotie versus ratio \"Dat is de emotie versus de rede of ratio\", analyseert politiek journalist Ivan De Vadder. \"Bewoners spreken hun emoties uit, ze zijn gehecht aan hun gemeente. In bepaalde gemeenten speelt zo nog altijd de fusiegolf van 1976 een rol, en toen ging het over heel kleine entiteiten die samengingen.\" Daartegenover staat het meer rationele van de politici, duidt hij in \"De wereld vandaag\" op Radio 1. \"Zij zien in de eerste plaats de financiële voordelen.\" De Vadder verwijst naar de \"lekstok\" die de Vlaamse regering voorhoudt aan gemeenten die vrijwillig fuseren. \"Zij krijgen een schuldverlichting die betaald wordt door de Vlaamse overheid. Het maximale bedrag, en in dit geval zou dat gelden voor Mechelen en Boortmeerbeek, is 50 miljoen euro\", weet hij. Je voelt dat er vanuit de ratio geprobeerd wordt om de emotie van de burger te overwinnen Politiek journalist Ivan De Vadder \"Minder schuld betekent makkelijker investeren in andere elementen. En bovendien stelt de grotere stad nu al zijn mogelijkheden ter beschikking van de kleinere gemeente. Je voelt dat er vanuit de ratio geprobeerd wordt om de emotie van de burger te overwinnen.\" Districtwerking Een ander argument dat de politiek daarbij aanhaalt, is het districtprincipe waarmee de nieuwe fusiegemeente zal werken. \"Dat de nieuwe gemeente meer dan 100.000 inwoners telt, maakt het systeem van districten mogelijk\", legt De Vadder uit. Mechelen wordt mogelijk een stuk groter binnen een paar jaar. hilde de windt Nieuwe fusiegemeenten Mechelen en Boortmeerbeek willen fuseren: \"Meer inkomsten, minder belastingen\" 11:31 De burgemeesters maakten op hun persconferentie al bekend dat het nieuwe grondgebied in drie districten zou worden opgedeeld: Mechelen Stad, landelijk Mechelen (Heffen, Leest, Hombeek, Battel en Walem) en Boortmeerbeek (dat ook Muizen zal omvatten). \"Ook dat is een soort lekstok\", zegt De Vadder. \"In plaats van de gemeente Boortmeerbeek volledig politiek op te heffen, ga je toch nog altijd een district Boortmeerbeek-Muizen hebben. Dat betekent een verkozen districtsraad met bijeenkomsten, een begroting en dus een politiek orgaan.\" \"Hier in Mechelen kiest men daarvoor omdat je dan natuurlijk tegen de mensen van Boortmeerbeek kan zeggen: \"Kijk, er blijft een lokale werking en de politici die lokaal actief zijn kunnen actief blijven\". Ook dat is natuurlijk mooi meegenomen als je emotioneel mensen moet overtuigen.\" Beluister hier het gesprek met Ivan De Vadder in \"De wereld vandaag\" op Radio 1: Ivan De Vadder over fusie Mechelen en Boortmeerbeek: \"Zowel financiële als ideologische voordelen\" Interne staatshervorming Dat de inwoners zo emotioneel reageren, kan ook te maken hebben met het feit dat de fusieplannen over de provincies heen gaan. Boortmeerbeek behoort immers tot Vlaams-Brabant, terwijl Mechelen een Antwerpse gemeente is. Het doet De Vadder denken aan \"een idee dat ooit door Geert Bourgeois, één van de vorige minister-presidenten van de Vlaamse regering, de interne staatshervorming werd genoemd\". \"Hij verwees daarmee naar een proces waarbij hij de provincies zag verdwijnen als tussenniveau en vervangen zag worden door grotere samenwerkingsverbanden tussen gemeenten.\" \"Men heeft eventjes gedacht aan verplichte fusies, maar uiteindelijk zijn het vrijwillige fusies geworden\", voegt De Vadder toe. Die vrijwillige fusies hebben het aantal gemeenten ondertussen al doen afnemen van 308 naar 300. Er is wat aan het bewegen in het fusielandschap met het oog op schaalvergroting en meer efficiëntie Politiek journalist Ivan De Vadder \"In de eerste golf gingen 15 gemeenten samen. Nu komt er een nieuwe golf aan en zie je voor het eerst dat grote steden kleine gemeentes erbij nemen. Er is wat aan het bewegen in het fusielandschap met het oog op schaalvergroting en meer efficiëntie.\" Ideologische keuze Maar dat is niet de enige reden waarom gemeenten vrijwillig kiezen om samen te smelten. Zo verwijst De Vadder naar de ideologische keuze die verschillende gemeenten al maakten. \"Bij de eerste golf zag je heel duidelijk dat ze bij CD&V in Oost-Vlaanderen dachten: laten we niet wachten op een verplichte fusie waarbij we misschien gekoppeld worden aan een liberale gemeente, maar laten we onder CD&V-burgemeesters een aantal gemeenten samennemen en zorgen dat we op die manier ook electoraal sterk staan.\" De Vadder ziet nu een inhaalbeweging bij de liberalen. \"Je hebt Lokeren en Moerbeek, twee liberale gemeenten. Je hebt Tongeren en Borgloon, twee liberale gemeenten. En nu ook Mechelen en Boortmeerbeek. Het is alsof ook de liberale partij heeft ontdekt dat het misschien niet onverstandig is om ook vanuit puur ideologische banden fusies te maken van gemeenten. Zo vrijwaar je natuurlijk in de toekomst je electorale basis\", legt hij uit. Nieuwe fusiegemeenten IN KAART - Deze steden en gemeenten in Vlaanderen willen in 2025 samensmelten 15:48 Toekomst De Vadder verwacht dan ook dat er nog meer fusies zullen volgen. \"En dat er op een bepaald moment wellicht ook definitief zal worden gekozen voor wie nog overblijft om een verplichte fusie te krijgen. Je zal moeten kiezen voor die grotere samenwerkingsverbanden en dan zullen op termijn die provincies verdwijnen.\" \"En dan krijg je dat beeld dat Geert Bourgeois had: de interne staatshervorming. De provincies weg, grotere gemeenten, het gewest en België als hoogste niveau. En dan Europa natuurlijk\", kijkt hij vooruit.",
    "liveBlogItems": [],
    "isVideo": true,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Analyse",
    "expertName": "Ivan De Vadder",
    "expertDescription": "Wetstraatwatcher voor VRT NWS. Maakt en presenteert ook het programma \"De afspraak op vrijdag\". | Voor meer van Ivan De Vadder, klik hier.",
    "expertImageUrls": [
    "//images.vrt.be/orig/2017/05/18/69ad5645-3bbb-11e7-9eb3-02b7b76bf47f.png"
    ],
    "videos": [
    {
    "id": "vid-f4f81df3-0d37-42ef-ab20-e7d659cc2872",
    "publicationId": "pbs-pub-2ed796b7-b5dd-497b-a927-a476723ee790",
    "type": "asset",
    "title": "null - 19/04 null",
    "imageUrl": "https://images.vrt.be/orig/2022/04/19/d4bfdb00-c007-11ec-b07d-02b7b76bf47f.jpg",
    "duration": 102070,
    "assetPath": "/content/dam/vrt/2022/04/19/mechelen-boortmeerbeek-j19-arvato_48255531"
    }
    ]
    },
    {
    "id": "1650375992032",
    "path": "/content/vrtnieuws/nl/2022/04/19/bestuurders-zonder-rijbewijs-kruipen-opnieuw-onder-invloed-achte",
    "title": "Bestuurders zonder rijbewijs kruipen opnieuw onder invloed achter het stuur in Antwerpen",
    "description": "In Antwerpen heeft de politie een bestuurder aan de kant gezet die vorige week vrijdag zijn rijbewijs was kwijtgespeeld omdat het te veel had gedronken. De man was toch opnieuw achter het stuur gekropen en testte opnieuw positief. Een andere bestuurder die zijn rijbewijs moest afgeven werd enkele uren later ook opnieuw uit het verkeer gehaald. Ook deze man was voor de tweede keer in enkele uren tijd onder invloed van drank en drugs. De auto's werden telkens in beslag genomen.",
    "imageUrls": [
    "//images.vrt.be/orig/2021/01/26/a6866a04-5fdd-11eb-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/authors/L/luc-milio",
    "id": "authors:L/luc-milio",
    "title": "Luc Milio",
    "description": "Luc Milio",
    "titlesPath": [
    "Authors",
    "L",
    "Luc Milio"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen",
    "title": "Antwerpen (Stad)",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/19/bestuurders-zonder-rijbewijs-kruipen-opnieuw-onder-invloed-achte/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/19/bestuurders-zonder-rijbewijs-kruipen-opnieuw-onder-invloed-achte/",
    "articleDates": {
    "publicationDate": "2022-04-19T13:48:21+0000",
    "sortingDate": "2022-04-19T13:48:21+0000",
    "lastModifiedDate": "2022-04-19T13:48:22+0000"
    },
    "subtitle": "De Antwerpse politie heeft twee bestuurders aan de kant gezet die onlangs hun rijbewijs waren kwijtgespeeld omdat ze onder invloed reden. Ook nu testten ze positief. Hun voertuigen werden in beslag genomen.",
    "content": "De politie merkte op camerabeelden op dat een auto die vrijdag aan de kant was gezet omdat de bestuurder had gedronken, toch nog rondreed in Antwerpen. De bestuurder had bij de eerste controle zijn rijbewijs moeten inleveren. Ook nu testte hij positief op alcohol. Bij een andere controle bleek een bestuurder onder invloed van alcohol en drugs. Ook deze man speelde zijn rijbewijs kwijt. Enkele uren later zag de politie op camerabeelden de wagen opnieuw opduiken in het verkeer. Dezelfde man bleek achter het stuur te zitten en opnieuw testte hij positief op alcohol en drugs. Op bevel van het parket werden de beide voertuigen in beslag genomen.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649160588620",
    "path": "/content/vrtnieuws/nl/2022/04/05/fusiegemeenten",
    "title": "IN KAART - Deze steden en gemeenten in Vlaanderen willen in 2025 samensmelten",
    "description": "In Vlaanderen zijn acht nieuwe fusiegemeenten op til, die allemaal tegen 1 januari 2025 willen samensmelten. Het gaat om steden en gemeenten in Antwerpen, Oost-Vlaanderen, Vlaams-Brabant en Limburg. In West-Vlaanderen is voorlopig géén sprake van gemeenten die willen samengaan.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/05/2e64c15c-b4e8-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/west-vlaanderen",
    "id": "functional:vrtnieuws/locations/west-vlaanderen",
    "title": "West-Vlaanderen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "West-Vlaanderen"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_tongeren/tongeren",
    "id": "functional:vrtnieuws/locations/limburg/kanton_tongeren/tongeren",
    "title": "Tongeren",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Tongeren",
    "Tongeren"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_kontich/borsbeek",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_kontich/borsbeek",
    "title": "Borsbeek",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Kontich",
    "Borsbeek"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/vlaams-brabant",
    "id": "functional:vrtnieuws/locations/vlaams-brabant",
    "title": "Vlaams-Brabant",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Vlaams-Brabant"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/lochristi",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/lochristi",
    "title": "Lochristi",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Lochristi",
    "Lochristi"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "title": "Antwerpen",
    "description": "District Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)",
    "Antwerpen"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/politiek",
    "id": "functional:vrtnieuws/categories/politiek",
    "title": "Politiek",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Politiek"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_borgloon/borgloon",
    "id": "functional:vrtnieuws/locations/limburg/kanton_borgloon/borgloon",
    "title": "Borgloon",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Borgloon",
    "Borgloon"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/wachtebeke",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/wachtebeke",
    "title": "Wachtebeke",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Lochristi",
    "Wachtebeke"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_beringen/tessenderlo",
    "id": "functional:vrtnieuws/locations/limburg/kanton_beringen/tessenderlo",
    "title": "Tessenderlo",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Beringen",
    "Tessenderlo"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/stories/gemeenteraadsverkiezingen/nieuwe-fusiegemeenten",
    "id": "functional:vrtnieuws/stories/gemeenteraadsverkiezingen/nieuwe-fusiegemeenten",
    "title": "Nieuwe fusiegemeenten",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Dossiers",
    "KIES18",
    "Nieuwe fusiegemeenten"
    ]
    },
    {
    "path": "/content/cq:tags/authors/H/hanne-decre",
    "id": "authors:H/hanne-decre",
    "title": "Hanne Decré",
    "description": "Hanne Decré",
    "titlesPath": [
    "Authors",
    "H",
    "Hanne Decré"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_lokeren/lokeren",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_lokeren/lokeren",
    "title": "Lokeren",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Lokeren",
    "Lokeren"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_bilzen/hoeselt",
    "id": "functional:vrtnieuws/locations/limburg/kanton_bilzen/hoeselt",
    "title": "Hoeselt",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Bilzen",
    "Hoeselt"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_temse/kruibeke",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_temse/kruibeke",
    "title": "Kruibeke",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Temse",
    "Kruibeke"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_beveren/beveren",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_beveren/beveren",
    "title": "Beveren",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Beveren",
    "Beveren"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/moerbeke",
    "id": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/moerbeke",
    "title": "Moerbeke",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Oost-Vlaanderen",
    "Kanton Lochristi",
    "Moerbeke"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_bilzen/bilzen",
    "id": "functional:vrtnieuws/locations/limburg/kanton_bilzen/bilzen",
    "title": "Bilzen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Bilzen",
    "Bilzen"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/limburg/kanton_beringen/ham",
    "id": "functional:vrtnieuws/locations/limburg/kanton_beringen/ham",
    "title": "Ham",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Limburg",
    "Kanton Beringen",
    "Ham"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/05/fusiegemeenten/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/05/fusiegemeenten/",
    "articleDates": {
    "publicationDate": "2022-04-19T13:48:00+0000",
    "sortingDate": "2022-04-19T13:48:00+0000",
    "lastModifiedDate": "2022-04-19T13:54:46+0000"
    },
    "subtitle": "In Vlaanderen zijn er momenteel acht nieuwe fusiegemeenten op til, die allemaal tegen 1 januari 2025 willen samensmelten.",
    "content": "Het verhaal achter deze fusies Oost-Vlaanderen Lochristi en Wachtebeke Lochristi en Wachtebeke kondigden in december 2021 aan dat ze tegen 1 januari 2025 willen fusioneren. \"In plaats van af te wachten tot een verplichte fusie misschien opgedrongen wordt, kiezen we liefst zelf onze bruid\", klonk het toen bij de burgemeester van Lochristi. In totaal zou de fusie dan 31.000 inwoners tellen. Over de naam van de nieuwe fusiegemeente willen de burgemeesters nog niets kwijt. Meer weten over de fusie tussen Lochristi en Wachtebeke? Dan kan u hier terecht. Moerbeke en Lokeren In maart 2022 kondigde Moerbeke aan dat het fuseert met de stad Lokeren en dat het een deelgemeente wordt. \"Als kleine gemeente merk je dat de uitdagingen voor lokale besturen groter worden\", vertelde de burgemeester van Moerbeke. De stad zal na de fusie 49.000 inwoners tellen. De nieuwe fusiegemeente zal de naam van de stad overnemen - Lokeren dus. Benieuwd hoe de inwoners reageerden? Dat kan je in dit artikel ontdekken. Beveren en Kruibeke Het nieuwste fusieproject is de samensmelting tussen Beveren en Kruibeke. Op 4 april 2022 maakte de twee gemeenten bekend dat ze vanaf 2025 één gemeente worden. In totaal zal de gemeente dan 65.000 inwoners tellen. \"Beveren-Kruibeke heeft het potentieel om de op één na grootste gemeente van Vlaanderen te worden\", klinkt het bij de burgemeesters. Ze willen zich vooral kunnen positioneren tussen Antwerpen en Sint-Niklaas, de omliggende steden. Ook Zwijndrecht was trouwens lang een optie, maar die fusie is afgesprongen. Meer weten over deze nieuwe fusie? Dan kan je in dit artikel terecht. Antwerpen (en Vlaams-Brabant) Borsbeek sluit aan bij Antwerpen Eind januari 2022 kondigde Borsbeek en Antwerpen aan dat er gesprekken zijn om van Borsbeek het tiende district van de stad te maken. De uiteindelijk beslissing zal eind 2023 voorgelegd worden aan de twee gemeenteraden, maar bedoeling is dat het op 1 januari 2025 een fait accompli is. Burgemeester De Wever spreekt van \"een historische stap\", maar beseft dat nog niet alle inwoners van Borsbeek overtuigd zijn. \"Ik besef dat het voor sommige Borsbekenaren vloeken in de kerk is.\" Toch belooft De Wever dat het nieuwe district zijn eigenheid zal kunnen bewaren. Dat betekent dat Antwerpen er 11.000 inwoners bij zal krijgen én dat Antwerpen voor het eerst sinds 1983 een stukje groter wordt. Lees meer over het nieuwe district in dit artikel. Mechelen en Boortmeerbeek Mechelen en Boortmeerbeek willen tegen 2025 samensmelten tot één gemeente. Het is de eerste geplande interprovinciale fusie: Mechelen ligt in de provincie Antwerpen, Boortmeerbeek in de provincie Vlaams-Brabant. Met ruim 100.000 inwoners zou de nieuwe fusiegemeente de op drie na grootste worden van Vlaanderen. De gesprekken zijn aan de gang, maar een definitieve beslissing wordt pas eind 2023 genomen. Lees meer over de nieuwe fusiegemeente in dit artikel. Limburg Ham en Tessenderlo In oktober 2021 lieten ook Ham en Tessenderlo weten dat ze wilden samenvoegen, opnieuw is die fusie voorzien voor 1 januari 2025. Over de nieuwe naam is nog niets geweten. \"Er is nog niet over nagedacht\", klonk het in oktober bij de burgemeester van Ham. \"Maar we zullen er de burger zeker in betrekken.\" Er is ook nog een ander addertje: het inwonersaantal. De grote vraag? Geraakt Ham-Tessenderlo samen aan 30.000 inwoners of niet? Als ze de 30.000 halen, krijgen ze 12 miljoen euro, als ze die niet halen 9 miljoen. Die vraag van 3 miljoen zal pas in juni 2022 beantwoord worden, op het moment dat Statbel het definitieve inwonersaantal bekend zal maken. Meer over de fusie en over de spannende telling van de inwoners kan je hier lezen. Bilzen en Hoeselt Eind 2020 startten de gesprekken tussen Bilzen en Hoeselt op, en op 28 juni 2021 keurden de beide gemeenteraden de fusie goed. Ook deze fusie staat gepland voor 2025. De nieuwe gemeente zal dan 42.300 inwoners tellen. Ook Riemst werd bij de gesprekken betrokken, maar zij houden de boot voorlopig af. Als je meer wil weten over deze fusie, lees dan zeker dit artikel. Borgloon en Tongeren In augustus 2021 kondigden Tongeren en Borgloon aan dat ze wilden samenvoegen. Dat kwam als een verrassing, omdat Borgloon eerder keek naar Alken, Heers, Kortessem en Wellen. Uiteindelijk ging de keuze dan toch naar Tongeren. De nieuwe fusiegemeente zal ruim 42.000 inwoners tellen. Over de naam van de nieuwe fusiegemeente is nog niets bekend. Meer over deze fusie kan je in dit artikel lezen. Mogelijk houdt het niet op bij deze fusiegemeenten en zullen de komende weken, maanden of jaren nog gemeenten aankondigen dat ze willen samensmelten. Oudenaarde wil bijvoorbeeld een referendum houden over een mogelijke fusie met buurgemeenten Kluisbergen, Kruisem en Wortegem-Petegem. In dat geval zou het om een \"superfusie\" gaan met een nieuwe gemeente die bijna 60.000 inwoners telt. Schulden Een belangrijk voordeel voor gemeenten die vrijwillig samensmelten, is dat Vlaanderen hen financieel beloont door (een deel van) hun schulden over te nemen. Concreet gaat het om deze \"tarieven\": 200 euro per inwoner als de nieuwe fusiegemeente tussen 20.000 en 25.000 inwoners telt. 300 euro per inwoner als de nieuwe fusiegemeente tussen 25.000 en 30.000 inwoners telt. 400 euro per inwoner als de nieuwe fusiegemeente tussen 30.000 en 35.000 inwoners telt. 500 euro per inwoner als de nieuwe fusiegemeente met meer dan 35.000 inwoners. Domino Opvallend: in West-Vlaanderen is vooralsnog géén sprake van een nieuwe fusiegemeente. Eerder zei politicoloog Herwig Reynaert van de UGent dat dit wellicht toeval is. \"Het heeft meer te maken met het domino-effect. Eens een steentje valt, vallen er meerdere. Naburige gemeenten gaan dan nadenken over de consequenties. Want wat als ze straks gedwongen worden te fusioneren met een gemeente die ze niet willen?\" Toch hebben volgens Reynaert ook in West-Vlaanderen ooit al verkennende gesprekken plaatsgevonden. \"Even heeft zelfs een interprovinciale fusie tussen Knokke-Heist, Damme en Maldegem in Oost-Vlaanderen op tafel gelegen\", zegt hij, maar die hebben tot nog toe geen concreet resultaat opgeleverd. Ook in Vlaams-Brabant was lange tijd geen sprake van fusies, maar met Boortmeerbeek is ook in die provincie nu het eerst steentje gevallen (zij het richting Antwerpen). Vraag is of dit andere gemeenten in Vlaams-Brabant op ideeën brengt. Verplicht? Een andere grote vraag is wat de volgende Vlaamse regering gaat doen: gaat ze de keuze laten bij de gemeenten of ze vrijwillig willen fuseren of niet? Of gaat ze geleidelijk richting een verplichting evolueren? \"Denemarken heeft ooit gezegd dat het maximaal 100 gemeenten wilde\", zegt Reynaert. \"De gemeenten in Denemarken mochten dat in eerste instantie zelf proberen te regelen, anders zou de overheid ingrijpen. Ze zijn geland op 98 gemeenten. Als men in Vlaanderen ook richting die 100 wil, zullen er nog heel wat moeten fusioneren (op dit moment telt Vlaanderen 300 gemeenten). Dat wordt nog een heikele klus, zeker als men blijft vasthouden aan die vrijwilligheid.\"",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Nieuwe fusiegemeenten",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650363396716",
    "path": "/content/vrtnieuws/nl/2022/04/19/verkeerspolitie-in-antwerpen-controleert-reisbussen-extra-aanda",
    "title": "Politie Antwerpen betrapt bestuurder onder invloed van drugs tijdens controle reisbussen",
    "description": "De lokale politie van Antwerpen heeft afgelopen weekend tijdens een controleactie van reisbussen een chauffeur betrapt die onder invloed was van drugs. De actie vond plaats op de busparking langs de Jordaenskaai. Tijdens de actie werden er 9 reisbussen en de bestuurders gecontroleerd. Naast het rijden onder invloed stelde de politie nog andere inbreuken vast, zoals het rijden zonder geldig rijbewijs of het niet respecteren van de rusttijden.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/19/9df1a68e-bfdd-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "title": "Antwerpen",
    "description": "District Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)",
    "Antwerpen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/L/lisa-ceuppens",
    "id": "authors:L/lisa-ceuppens",
    "title": "Lisa Ceuppens",
    "description": "Lisa Ceuppens",
    "titlesPath": [
    "Authors",
    "L",
    "Lisa Ceuppens"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/19/verkeerspolitie-in-antwerpen-controleert-reisbussen-extra-aanda/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/19/verkeerspolitie-in-antwerpen-controleert-reisbussen-extra-aanda/",
    "articleDates": {
    "publicationDate": "2022-04-19T13:04:42+0000",
    "sortingDate": "2022-04-19T13:04:42+0000",
    "lastModifiedDate": "2022-04-19T13:04:42+0000"
    },
    "subtitle": "Afgelopen weekend werden 9 reisbussen gecontroleerd op de parking aan de Jordaenskaai in Antwerpen.",
    "content": "Afgelopen zondag controleerde de politie in Antwerpen negen reisbussen op de parking aan de Jordaenskaai. “Tijdens de controleactie sprong een bestuurder in het oog die positief testte op het gebruik van drugs. De keuring van zijn bus bleek ook meer dan anderhalf jaar vervallen en bovendien was zijn professioneel rijbewijs niet meer geldig omwille van een ongeldige medische keuring”, vertelt Willem Migom van de Antwerpse politie. De bestuurder had ook zijn rusttijden niet gerespecteerd. Zijn rijbewijs werd meteen ingetrokken. “De man kreeg de opdracht om een andere chauffeur te vragen om het voertuig te verplaatsen, maar ook die man testte positief op drugs.” Daarnaast werden er bij enkele bestuurders ook inbreuken vastgesteld met betrekking tot het gebruik van de tachograaf. Dat is een apparaat dat controleert of een chauffeur de nodige rusttijden respecteert. Gezien de ernstige resultaten zullen er in de toekomst nog controles plaatsvinden Willem Migom, woordvoerder Antwerpse politie “Dat soort controles gebeurt uiteraard vaker, maar door het recente zware ongeval op de E19 is er nu wel extra aandacht voor. Beide zaken kunnen niet los van elkaar gezien worden”, zegt Migom. Vorige week zondag gebeurde er een busongeval op de E19 in Schoten, waarbij 2 passagiers om het leven kwamen. Volgens de resultaten van een speekseltest had de chauffeur wellicht drugs gebruikt. “De ernstige resultaten van deze actie bewijzen dat het nodig is om er aandacht voor te hebben en de controles in de toekomst te herhalen”, besluit Willem Migom.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650294009342",
    "path": "/content/vrtnieuws/nl/2022/04/18/jacuzzi-vat-vuur-door-onkruidbrander-in-retie-brandweer-raadt-a",
    "title": "Jacuzzi vat vuur door onkruidbrander in Retie: brandweer raadt af om branders te gebruiken",
    "description": "In Retie heeft een jacuzzi vuur gevat nadat een bewoner onkruid probeerde weg te branden in de tuin. De jacuzzi raakte zwaar beschadigd maar er vielen geen gewonden. \"Als brandweer raden wij het gebruik van deze branders af, er gebeuren te snel ongelukken mee\", zegt Ruut Van Laer van de brandweerzone Taxandria.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/18/407d4742-bf30-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_arendonk/retie",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_arendonk/retie",
    "title": "Retie",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Arendonk",
    "Retie"
    ]
    },
    {
    "path": "/content/cq:tags/authors/M/maaike-joris",
    "id": "authors:M/maaike-joris",
    "title": "Maaike Joris",
    "description": "Maaike Joris",
    "titlesPath": [
    "Authors",
    "M",
    "Maaike Joris"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/18/jacuzzi-vat-vuur-door-onkruidbrander-in-retie-brandweer-raadt-a/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/18/jacuzzi-vat-vuur-door-onkruidbrander-in-retie-brandweer-raadt-a/",
    "articleDates": {
    "publicationDate": "2022-04-18T15:07:17+0000",
    "sortingDate": "2022-04-18T15:07:17+0000",
    "lastModifiedDate": "2022-04-18T15:57:46+0000"
    },
    "subtitle": "Bij de brand vielen er geen gewonden. De jacuzzi raakte wel zwaar beschadigd.",
    "content": "De brand ontstond aan een jacuzzi in een tuin aan de Oude Arendonksebaan in Retie. Volgens de brandweer was de bewoner onkruid aan het wegbranden en is het vuur overgeslagen. Er vielen gelukkig geen gewonden, maar de schade aan de jacuzzi is groot. Retie ligt in de brandweerzone Kempen, maar het was uiteindelijk de brandweer van de zone Taxandria die als eerste ter plaatse was en de brand kon blussen. Met zo'n branders gebeuren snel incidenten, je gebuikt ze beter niet Ruut Van Laer, brandweerzone Taxandria \"Met zo'n branders voor onkruid gebeuren wel vaker incidenten, dus je gebruikt ze beter niet\", zegt Ruut Van Laer van de brandweerzone Taxandria. \"Als het droog is en er staat wat wind kan er tijdens het gebruik van zo'n brander al snel een grote brand ontstaan. Je gebruikt beter een hark of een onkruidborstel. Als je toch een brander wil gebruiken, hou dan altijd een emmer water of een tuinslang bij de hand om de verbrande plekken meteen nat te maken.\"",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650286997024",
    "path": "/content/vrtnieuws/nl/2022/04/18/interprovinciale-fusie-in-de-maak-tussen-mechelen-en-boortmeerbe",
    "title": "Fusie over provinciegrenzen heen? Gesprekken tussen Mechelen en Boortmeerbeek bevestigd",
    "description": "Er zijn wel degelijk gesprekken aan de gang tussen de stad Mechelen in provincie Antwerpen en de Vlaams-Brabantse gemeente Boortmeerbeek die mogelijk tot een fusie kunnen leiden. Dat bevestigt burgemeester Karin Derua (Open VLD) van Boortmeerbeek.",
    "imageUrls": [
    "//images.vrt.be/orig/2021/10/06/40e526d0-2688-11ec-b07d-02b7b76bf47f.png"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/authors/B/bart-decoster",
    "id": "authors:B/bart-decoster",
    "title": "Bart DeCoster",
    "description": "Bart DeCoster",
    "titlesPath": [
    "Authors",
    "B",
    "Bart DeCoster"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/M/maaike-joris",
    "id": "authors:M/maaike-joris",
    "title": "Maaike Joris",
    "description": "Maaike Joris",
    "titlesPath": [
    "Authors",
    "M",
    "Maaike Joris"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/vlaams-brabant/kanton_haacht/boortmeerbeek",
    "id": "functional:vrtnieuws/locations/vlaams-brabant/kanton_haacht/boortmeerbeek",
    "title": "Boortmeerbeek",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Vlaams-Brabant",
    "Kanton Haacht",
    "Boortmeerbeek"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "title": "Mechelen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Mechelen",
    "Mechelen"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/18/interprovinciale-fusie-in-de-maak-tussen-mechelen-en-boortmeerbe/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/18/interprovinciale-fusie-in-de-maak-tussen-mechelen-en-boortmeerbe/",
    "articleDates": {
    "publicationDate": "2022-04-18T14:13:11+0000",
    "sortingDate": "2022-04-18T14:13:11+0000",
    "lastModifiedDate": "2022-04-18T14:36:18+0000"
    },
    "subtitle": "De Antwerpse stad Mechelen en de Vlaams-Brabantse gemeente Boortmeerbeek voeren gesprekken over een mogelijke fusie",
    "content": "Komt er een eerste fusie met een gemeente uit Vlaams-Brabant en zorgt dat meteen voor een inkrimping van die provincie? Die vraag ligt op tafel nu Boortmeerbeek gesprekken voert met de stad Mechelen in de Antwerpse provincie. Dat is opmerkelijk, aangezien de twee gemeenten niet in dezelfde provincie liggen, is er momenteel ook nauwelijks samenwerking. Toch zou een fusie interessant kunnen zijn, want Vlaanderen beloont gemeenten die fuseren namelijk door schulden over te nemen. De nieuwe fusiegemeente zou ruim 100.000 inwoners tellen, wat de nieuwe gemeente 50 miljoen euro zou opbrengen. Het is algemeen bekend dat Mechelen een zware schuldenlast heeft en naarstig zoekt naar een manier om die last te verlichten Bert Meulemans, voorzitter oppositiepartij CD&V Burgemeester Derua van Boortmeerbeek ziet een fusie met een andere gemeente zitten. Zo waren er al gesprekken met Haacht en Kampenhout en nu dus met Mechelen. Alleen is niet iedereen daar blij mee. In Boortmeerbeek klinkt namelijk luid protest bij de oppositie. Onafhankelijk gemeenteraadslid en oud-burgemeester Michel Baert wil niet weten van een fusie. Ook de Boortmeerbeekse oppositiepartij CD&V ziet een fusie met Mechelen niet zitten. Voorzitter Bert Meulemans: \"We vrezen dat Boortmeerbeek dan opgaat in een heel groot geheel waardoor we onze eigenheid verliezen. Ten tweede is het algemeen bekend dat Mechelen een heel zware schuldenlast heeft en naarstig op zoek is naar een manier om die schuldenlast te verlichten. Dat kan uiteraard door een fusie. Alleen staat daar tegenover dat onze inwoners voor eeuwig en altijd de last van Mechelen mee moeten financieren.\" \"Geen connectie\" Ook in Mechelen is de oppositie niet meteen enthousiast over een fusie met Boortmeerbeek. \"Mechelen heeft inderdaad een zeer hoge schuldenlast, dus 50 miljoen zou welkom zijn, maar er zijn logischere gemeenten om mee te fuseren\", zegt Thijs Verbeurgt (Vooruit). \"Er zijn buurgemeenten waar we een politiezone mee delen of waar we samenwerken voor sociale huisvesting. Dat is bij Boortmeerbeek niet het geval. De enige overeenkomst is de politieke kleur van de burgemeesters, ze zijn beiden van Open VLD.\" Ik vang op dat de gesprekken al vergevorderd zijn en dat de kans vrij groot is dat de fusie er zal komen Thijs Verbeurgt, Vooruit Mechelen Volgens Verbeurgt is de kans dat de fusie er zal komen vrij groot. \"Ik vang op dat de gesprekken al veel verder gevorderd zijn dan dat men momenteel beweert, en wij denken dat er in de komende weken duidelijkheid zal komen. Wij gaan nu vragen om het maandag op de gemeenteraad te bespreken, en we willen dat de Mechelaar een stem krijgt in dit debat.\" Het gemeentebestuur heeft nog niets gecommuniceerd over een mogelijke fusie aan de oppositie. Ook wij konden burgemeester Alexander Vandersmissen (Open VLD) voorlopig niet bereiken voor commentaar.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Vlaams-Brabant",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650287954532",
    "path": "/content/vrtnieuws/nl/2022/04/18/1-000-lammetjes-knuffelen-op-lammetjesdag-in-retie",
    "title": "1.000 lammetjes knuffelen op Lammetjesdag in Retie",
    "description": "In het Prinsenpark in Retie vindt de jaarlijkse Lammetjesdag plaats van Kemp VZW. Die vzw doet op een duurzame manier aan landbouw en natuurbeheer. Bezoekers konden er meer dan 1.000 lammetjes aaien en voederen.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/18/959824b2-bf1f-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_arendonk/retie",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_arendonk/retie",
    "title": "Retie",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Arendonk",
    "Retie"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/C/carla-mertens",
    "id": "authors:C/carla-mertens",
    "title": "Carla Mertens",
    "description": "Carla Mertens",
    "titlesPath": [
    "Authors",
    "C",
    "Carla Mertens"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/18/1-000-lammetjes-knuffelen-op-lammetjesdag-in-retie/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/18/1-000-lammetjes-knuffelen-op-lammetjesdag-in-retie/",
    "articleDates": {
    "publicationDate": "2022-04-18T13:55:56+0000",
    "sortingDate": "2022-04-18T13:55:56+0000",
    "lastModifiedDate": "2022-04-18T14:00:44+0000"
    },
    "subtitle": "Kinderen kunnen er meer dan 1.000 lammetjes knuffelen en eten geven.",
    "content": "\"Op het einde van het lammerseizoen hadden we 1.050 lammetjes. Voor onze schapen is dat het perfecte aantal\", zegt Maarten D'hondt, coördinator van KEMP vzw. De vzw doet op een duurzame manier aan landbouw en natuurbeheer. Zo gaan zeven herders elke dag op pad met hun 1.500 Kempense heideschapen. Ze doen aan natuurlijke begrazing in gebieden in en rond Mol in de Antwerpse en de Limburgse Kempen. \"We willen de mensen graag kennis laten maken met onze werking maar het is moeilijk om veel bezoek toe te laten in de schapenstal. Daarom hebben we samen met de provincie Antwerpen een manier gevonden om dat toch te doen in het Provinciaal Groendomein Prinsenpark in Retie\", zegt D'hondt. Door corona was er 2 jaar geen Lammetjesdag, maar vandaag kon die toch weer doorgaan. We willen mensen kennis laten maken met onze werking, maar het is onmogelijk om veel volk toe te laten in onze schapenstal Maarten Dhondt, coördinator KEMP vzw Mensen kunnen vandaag een quizwandeling van 2 kilometer doen in het park, waarbij ze langs een grote kudde schapen wandelen. Op de evenementenweide kunnen ze lammetjes aaien en voederen, er is een wolstand, en kinderen kunnen schilderen. Er zijn ook lamsburgers en ijsjes. Een moeder uit Oud-Turnhout was er graag bij vandaag. \"We vonden het wel fijn om hier naartoe te komen met de kinderen. Onze zoon heeft de lammetjes kunnen aaien. En hij is helemaal gek van de hooiberg, waar hij op kan klimmen.\" Nele en Kaat vonden het alvast superfijn om lammetjes te knuffelen. \"Ze zijn superzacht en schattig.\" Foto: Radio 2",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650284638975",
    "path": "/content/vrtnieuws/nl/2022/04/18/nieuw-natuurgebied-gaat-open-in-poppel-grootste-aankoop-van-na",
    "title": "Nieuw natuurgebied gaat open in Poppel: \"Grootste aankoop van Natuurpunt dit jaar\"",
    "description": "In Poppel bij Ravels is een nieuw natuurgebied opengegaan voor het publiek. Het gaat om de grootste aankoop van Natuurpunt in Vlaanderen van vorig jaar, een gebied van zo'n 67 hectare groot. Natuurpunt wil het gebied vernatten, zodat het water kan opvangen bij hevige regenval en er ook inheemse bomen planten.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/18/b514415d-bf13-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_arendonk/ravels/poppel",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_arendonk/ravels/poppel",
    "title": "Poppel",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Arendonk",
    "Ravels",
    "Poppel"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/video",
    "id": "system:vrtnieuws/labels/video",
    "title": "Video",
    "description": "Aansturen van de video overzichtspagina en de video feed in de app. Niet gebruikt om de teasers aan te passen.",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Video"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/C/carla-mertens",
    "id": "authors:C/carla-mertens",
    "title": "Carla Mertens",
    "description": "Carla Mertens",
    "titlesPath": [
    "Authors",
    "C",
    "Carla Mertens"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/milieu-en-klimaat",
    "id": "functional:vrtnieuws/categories/milieu-en-klimaat",
    "title": "Milieu & Klimaat",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Milieu & Klimaat"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/18/nieuw-natuurgebied-gaat-open-in-poppel-grootste-aankoop-van-na/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/18/nieuw-natuurgebied-gaat-open-in-poppel-grootste-aankoop-van-na/",
    "articleDates": {
    "publicationDate": "2022-04-18T12:37:10+0000",
    "sortingDate": "2022-04-18T12:37:10+0000",
    "lastModifiedDate": "2022-04-18T14:37:02+0000"
    },
    "subtitle": "Het gaat om een nieuw natuurgebied van zo'n 67 hectare groot",
    "content": "\"Ons landschap moet meer een spons worden\", zegt Bart Vangansbeke, nationaal voorzitter van Natuurpunt. \"Bij hevige regenbuien moet het water opgevangen worden.\" Natuurpunt heeft vorig jaar onder meer daarom zo'n 67 hectare natuurgebied aangekocht in Poppel bij Ravels. Dat is uitzonderlijk veel, want meestal koopt Natuurpunt gemiddeld rond de 10 hectare aan. Natuurpunt heeft grootse plannen met het gebied. \"We willen het nieuwe natuurgebied Overbroek vernatten maar we zullen er ook nieuwe bomen aanplanten, voornamelijk inheemse soorten. In totaal komt er zo'n 15 hectare bos bij in Poppel\", zegt Vangansbeke. BEKIJK - Natuurgebied wordt met veel enthousiasme officieel geopend Videospeler inladen... \"In dat nieuwe natuurgebied zullen ook zeldzame vogelsoorten een thuis vinden, zoals de wielewaal, nachtzwaluw, boomleeuwerik, boompieper, zwarte specht en wespendief. Die voelen zich thuis in de natte heide, bovendien is het hier erg rustig\", zegt Vangansbeke. De bezoekersingang van het nieuwe natuurgebied is langs de straat Overbroek in Poppel, links van het huisnummer 33.",
    "liveBlogItems": [],
    "isVideo": true,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Net Binnen",
    "expertName": "",
    "expertDescription": "",
    "videos": [
    {
    "id": "vid-d823dd2d-4a53-4c53-8b85-1dd3bb4d940d",
    "publicationId": "pbs-pub-fb885a13-1ca5-4fec-81c4-b68e5c77a991",
    "type": "asset",
    "title": "null - 18/04 null",
    "imageUrl": "//images.vrt.be/orig/2022/04/18/06f3934f-bf14-11ec-b07d-02b7b76bf47f.jpg",
    "duration": 99120,
    "assetPath": "/content/dam/vrt/2022/04/18/j13-meer-bos-nodig-arvato_48223552"
    }
    ]
    },
    {
    "id": "1650208432086",
    "path": "/content/vrtnieuws/nl/2022/04/17/vliegende-paasklokken-in-bonheiden-elk-kind-krijgt-een-prijs",
    "title": "Vliegende paasklokken in Bonheiden: \"Ieder kind krijgt een prijs\"",
    "description": "In Bonheiden vlogen vanochtend de klokken letterlijk boven het Kerkplein op deze paaszondag. \"Al 40 jaar organiseert de KWB het klokkenwerpen. Na twee coronajaren mocht het evenement eindelijk weer doorgaan en dat deed deugd\", vertelt bestuurslid Francis Hellemans.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/17/25e18891-be63-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/video",
    "id": "system:vrtnieuws/labels/video",
    "title": "Video",
    "description": "Aansturen van de video overzichtspagina en de video feed in de app. Niet gebruikt om de teasers aan te passen.",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Video"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/C/celine-bruyndonckx",
    "id": "authors:C/celine-bruyndonckx",
    "title": "Celine Bruyndonckx",
    "description": "Celine Bruyndonckx",
    "titlesPath": [
    "Authors",
    "C",
    "Celine Bruyndonckx"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_duffel/bonheiden/rijmenam",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_duffel/bonheiden/rijmenam",
    "title": "Rijmenam",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Duffel",
    "Bonheiden",
    "Rijmenam"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_duffel/bonheiden",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_duffel/bonheiden",
    "title": "Bonheiden",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Duffel",
    "Bonheiden"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen",
    "title": "Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/17/vliegende-paasklokken-in-bonheiden-elk-kind-krijgt-een-prijs/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/17/vliegende-paasklokken-in-bonheiden-elk-kind-krijgt-een-prijs/",
    "articleDates": {
    "publicationDate": "2022-04-17T16:06:34+0000",
    "sortingDate": "2022-04-17T16:06:34+0000",
    "lastModifiedDate": "2022-04-17T16:06:58+0000"
    },
    "subtitle": "In Bonheiden vlogen vanochtend de klokken letterlijk boven het Kerkplein op deze paaszondag.",
    "content": "In Bonheiden vlogen de klokken vanochtend weer over het Kerkplein. \"Er hangt een koord boven het plein en daaraan hangt een klok die dan uit de kerk vliegt en eieren laat vallen boven het plein\", legt Hellemans uit. \"In elk ei zit een papiertje met een nummer op. Ze kunnen dan hun prijs komen halen.\" Wie geen ei te pakken heeft gekregen: niet getreurd! \"Iedereen krijgt een prijs\", benadrukt Hellemans. \"Een aantal bedrijven uit bonheiden hebben chocolade eieren en paashazen geschonken. Elk kind krijgt een prijs. Er mogen wel enkel kinderen meedoen tot 12 jaar oud.\" Videospeler inladen... Al 40 jaar een traditie De vliegende paasklokken zijn een echte traditie in Bonheiden. \"Elk jaar na de paasviering, vliegen de klokken over het plein. Dat doen we al 40 jaar. De paasklok gaat 6 keer naar beneden. Er zijn in totaal maar liefst 400 zakjes met chocolade-eieren uitgedeeld. Het was dus een succes\", sluit Hellemans af.",
    "liveBlogItems": [],
    "isVideo": true,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": [
    {
    "id": "vid-33b9f75b-358a-48c7-b7c1-9cb141187fe4",
    "publicationId": "pbs-pub-dd8331bb-24a4-4750-8f9f-06d1b860d28a",
    "type": "asset",
    "title": "null - 17/04 null",
    "imageUrl": "//images.vrt.be/orig/2022/04/17/08d505d5-be67-11ec-b07d-02b7b76bf47f.jpg",
    "duration": 5020,
    "assetPath": "/content/dam/vrt/2022/04/17/pasen-geknipt-r2-arvato_48214093"
    }
    ]
    },
    {
    "id": "1650206305004",
    "path": "/content/vrtnieuws/nl/2022/04/17/honden-op-zoek-naar-paaseieren-in-edegem-speciaal-recept-want",
    "title": "Honden op zoek naar paaseieren in Edegem: \"Speciaal recept, want honden sterven van chocolade\"",
    "description": "In Edegem zoeken zo'n 100-tal honden naar paaseieren. Jana Provoost uit Duffel organiseert een paaszoektocht voor honden op de hondenweide in Fort 5 in Edegem. \"Honden mogen geen chocolade eten. Dus heb ik een recept bedacht voor speciale \"paw-eieren\", vertelt ze enthousiast.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/17/99df2713-be5c-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_duffel/duffel",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_duffel/duffel",
    "title": "Duffel",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Duffel",
    "Duffel"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_kontich/edegem",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_kontich/edegem",
    "title": "Edegem",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Kontich",
    "Edegem"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen",
    "title": "Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen"
    ]
    },
    {
    "path": "/content/cq:tags/authors/C/celine-bruyndonckx",
    "id": "authors:C/celine-bruyndonckx",
    "title": "Celine Bruyndonckx",
    "description": "Celine Bruyndonckx",
    "titlesPath": [
    "Authors",
    "C",
    "Celine Bruyndonckx"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/17/honden-op-zoek-naar-paaseieren-in-edegem-speciaal-recept-want/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/17/honden-op-zoek-naar-paaseieren-in-edegem-speciaal-recept-want/",
    "articleDates": {
    "publicationDate": "2022-04-17T15:05:03+0000",
    "sortingDate": "2022-04-17T15:05:03+0000",
    "lastModifiedDate": "2022-04-17T15:05:05+0000"
    },
    "subtitle": "In Edegem zoeken zo'n 100-tal honden naar paaseieren. Jana Provoost uit Duffel organiseert een paaszoektocht voor honden op de hondenweide in Fort 5 in Edegem. ",
    "content": "Vandaag kunnen honden naar 'paaseieren' zoeken in Edegem. Organisatrice Jana richtte ook al het eerste hondenrestaurant op en organiseert op paaszondag een speciale zoektocht voor honden met \"paw-eieren\". \"Ik heb een geheim recept bedacht voor de \"paw-eieren\". Ik heb er in totaal zo'n 200 gebakken, maar daar zal ik niet mee toekomen, want het is een groot succes\", vertelt ze. In de hondenweide staan paasbomen waar dan haakjes aan hangen. \"Aan die haakjes hangen zakjes met paw-eieren\", legt Jana uit. \"De honden kunnen dan zoeken, snuffelen en smullen van hun paasgeschenkjes.\" Donaties voor Oekraïense hondenopvang Het evenement zelf is gratis, maar de bezoekers kunnen wel geld doneren voor een goed doel in Oekraïne. \"Ik ken een koppel in Oekraïne dat ongeveer 100 honden opvangt. De vrouw is helaas overleden tijdens de oorlog en het hondenverblijf is kapotgeschoten. We zamelen nu geld in om hen te helpen\", vertelt Jana. Mensen kunnen geld doneren bij de \"spaarhaas\". De opbrengst van het event gaat naar een dierenopvang in Oekraïne. Baasjes worden ook verwend En ook de baasjes worden verwend. Zij kunnen iets drinken aan de cocktailbar en de hondenmarkt. \"En ook kindjes mogen zoeken naar echte paaseieren\", lacht Jana. \"Doordat het zo'n groot succes is, ben ik al aan het nadenken over een volgend event. Deze zomer wil ik graag een outdoor hondenrestaurant organiseren.\"",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650196125434",
    "path": "/content/vrtnieuws/nl/2022/04/17/bekijk-paaseieren-rapen-op-een-wijndomein-is-plezier-voor-jong",
    "title": "BEKIJK - Paaseieren rapen op een wijndomein is plezier voor jong en oud: \"Papa krijgt er dorst van\"",
    "description": "De paasklokken zijn gul geweest dit jaar in de wijngaard van het domein Oud Conynsbergh in Boechout. De kinderen komen in zo'n groot veld maar wat graag zoeken. En de volwassenen wachten geduldig tot zij aan de beurt zijn en ze de chocola kunnen doorspoelen.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/17/c493d99f-be44-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/video",
    "id": "system:vrtnieuws/labels/video",
    "title": "Video",
    "description": "Aansturen van de video overzichtspagina en de video feed in de app. Niet gebruikt om de teasers aan te passen.",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Video"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/samenleving",
    "id": "functional:vrtnieuws/categories/samenleving",
    "title": "Samenleving",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Samenleving"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_kontich/boechout",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_kontich/boechout",
    "title": "Boechout",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Kontich",
    "Boechout"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/17/bekijk-paaseieren-rapen-op-een-wijndomein-is-plezier-voor-jong/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/17/bekijk-paaseieren-rapen-op-een-wijndomein-is-plezier-voor-jong/",
    "articleDates": {
    "publicationDate": "2022-04-17T12:16:33+0000",
    "sortingDate": "2022-04-17T12:16:33+0000",
    "lastModifiedDate": "2022-04-17T12:16:58+0000"
    },
    "subtitle": "De paasklokken zijn gul met chocolade en met de drankjes op het wijndomein Oud Conynsbergh in Boechout.",
    "content": "",
    "liveBlogItems": [],
    "isVideo": true,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": [
    {
    "id": "vid-efafe999-4ce6-497c-b738-11c2a5a56e80",
    "publicationId": "pbs-pub-0ab11cc1-d9a6-4951-99dd-1409b437d0c2",
    "type": "asset",
    "title": "null - 17/04 null",
    "imageUrl": "//images.vrt.be/orig/2022/04/17/c493d99f-be44-11ec-b07d-02b7b76bf47f.jpg",
    "duration": 97080,
    "assetPath": "/content/dam/vrt/2022/04/17/j13-3-paaseierenraap-arvato_48210450"
    }
    ]
    },
    {
    "id": "1650188034835",
    "path": "/content/vrtnieuws/nl/2022/04/17/drie-gratis-drankbonnen-voor-jongeren-die-nuchter-naar-fuif-in-b",
    "title": "Gratis drankbonnen voor jongeren die nuchter naar fuif in Balen komen: \"Willen hen gevaren van alcohol tonen\"",
    "description": "In Balen, in de provincie Antwerpen, kregen jongeren die gisteravond naar een lokale fuif gingen, gratis drankbonnen wanneer ze nuchter arriveerden. Met het intiatief \"sobercoins\" wilde de gemeente jongeren bewust maken van de gevaren van overmatig \"voordrinken\" voor ze uitgaan.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/17/a0494010-be32-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_mol/balen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_mol/balen",
    "title": "Balen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Mol",
    "Balen"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/17/drie-gratis-drankbonnen-voor-jongeren-die-nuchter-naar-fuif-in-b/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/17/drie-gratis-drankbonnen-voor-jongeren-die-nuchter-naar-fuif-in-b/",
    "articleDates": {
    "publicationDate": "2022-04-17T09:45:29+0000",
    "sortingDate": "2022-04-17T09:45:29+0000",
    "lastModifiedDate": "2022-04-17T09:45:30+0000"
    },
    "subtitle": "Met het intiatief \"sobercoins\" wilde de gemeente jongeren bewust maken van de gevaren van overmatig \"voordrinken\" voor ze uitgaan.",
    "content": "Noem het \"voordrinken\", \"indrinken\" of \"inpilsen\": jongeren kiezen er tegenwoordig almaar vaker voor om, voor ze naar een fuif of feestje gaan, samen alcohol te drinken. Dat fenomeen lijkt volgens experten de kans op overmatig drank- en drugsgebruik te verhogen. En dat zorgt dan ook weer voor meer overlast en agressie op de fuif zelf. Antwerpen Niet gedronken voor een fuif? Dan krijg je van de gemeente Balen drie gratis drankbonnetjes wo 13 apr 12:59 De gemeente Balen wilde jongeren bewust maken van dat probleem en lanceerde de actie \"sobercoins\". Jongeren die gisteravond nuchter arriveerden op een lokale fuif kregen een sobercoin, die ze op de fuif konden inruilen voor 3 gratis drankbonnen. Dure alchohol Jonas Willems van de lokale stuurgroep alcohol en drugs in Balen noemde de actie geslaagd. \"Heel veel mensen hebben negatief geblazen, dus we hebben goede resultaten geboekt. Jongeren bewust maken, doe je het best door een goed gesprek aan te gaan en de gevaren van alcohol te tonen. Dat is zeker gelukt.\" De jongeren ter plaatse namen de actie alvast positief op, maar ze wezen ook op de hoge prijzen die gevraagd worden voor drank op fuiven. \"Weet je hoe duur alcohol tegenwoordig is op een fuif? Sommigen kunnen dat gewoon niet betalen.\" Dan is de keuze voor de nachtwinkel snel gemaakt, klinkt het nog.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649927395642",
    "path": "/content/vrtnieuws/nl/2022/04/14/9-jaar-geleden-stortte-bus-met-schoolkinderen-van-brug-in-oelege",
    "title": "9 jaar geleden stortte bus met schoolkinderen van brug in Oelegem: \"Ik leg nog elk jaar bloemen neer waar Ilya stierf\"",
    "description": "Het is precies 9 jaar geleden dat een Poolse bus met Russische schoolkinderen van de weg afweek op de E34. De bus stortte metersdiep van de brug in Oelegem naar beneden. Er vielen vijf doden waaronder Ilya, een jongen van 14. De Turnhoutse ambulancier Siegfried Depoorter reed toevallig vlak achter de bus en was als een van de eersten bij de slachtoffers. Elk jaar nog, legt hij bloemen neer op de plaats van het ongeval. Dat heeft hij beloofd aan de moeder van Ilya, de jongen die ter plekke stierf. Zelf heeft hij er jaren over gedaan om de beelden van het ongeval te verwerken.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/14/388243ca-bbd2-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/authors/K/kristel-marien",
    "id": "authors:K/kristel-marien",
    "title": "Kristel Marien",
    "description": "Kristel Marien",
    "titlesPath": [
    "Authors",
    "K",
    "Kristel Marien"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_zandhoven/ranst/oelegem",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_zandhoven/ranst/oelegem",
    "title": "Oelegem",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Zandhoven",
    "Ranst",
    "Oelegem"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/14/9-jaar-geleden-stortte-bus-met-schoolkinderen-van-brug-in-oelege/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/14/9-jaar-geleden-stortte-bus-met-schoolkinderen-van-brug-in-oelege/",
    "articleDates": {
    "publicationDate": "2022-04-14T09:18:48+0000",
    "sortingDate": "2022-04-14T09:18:48+0000",
    "lastModifiedDate": "2022-04-14T09:26:52+0000"
    },
    "subtitle": "Het is precies 9 jaar geleden dat een Poolse bus met Russische schoolkinderen van de weg afweek op de E34. De bus stortte metersdiep van de brug in Oelegem naar beneden. Er vielen vijf doden waaronder Ilya, een jongen van 14.  De Turnhoutse ambulanci",
    "content": "\"Het waren chaotische beelden die ik nooit zal vergeten, toen ik de bus op z'n zij zag liggen beneden,\" vertelt ambulancier Siegfried Depoorter bij Radio 2 Antwerpen. \"Net als bij het zware busongeval dat dit weekend in Schoten gebeurde, was de bus opzij geschoven tegen de vangrail. In Schoten botste de bus tegen de stootrand, en viel op haar zijkant. 9 jaar geleden viel de bus metersdiep naar beneden. De beelden en het geschreeuw van de slachtoffers toen ik bij de bus kwam, zal ik nooit vergeten\". Aan boord van de bus zaten 31 Russische jongeren en 9 begeleiders. Naast Ilya, de jongen van 14, stierven ook de Poolse chauffeur, zijn bijzitter, een Russische gids, en een leerkracht. De moeder van Ilya, een leerkracht, raakte zwaargewond maar overleefde. \"Alleen met haar heb ik, via een tolk, nog contact,\" vertelt Siegfried Depoorter. De vrouw heeft het financieel moeilijk en is nog niet terug naar de plaats van de ramp kunnen komen. \"Daarom zal ik ook vanavond weer, bloemen gaan neerlegggen, op de plaats van het ongeval, omdat ik het haar beloofd heb.\" Ik was bang als mijn eigen kinderen een uitstap deden met een bus Siegfried Depoorter, ambulancier De beelden van het ongeval hebben Siegfried Depoorter jarenlang achtervolgd. \"Vooral de eerste jaren waren moeilijk, nu kijk ik er anders op terug\", zegt Siegfried. \"Ik heb geleerd dat je er niet teveel bij mag stilstaan. Maar toch was ik altijd bang als mijn eigen kinderen met de bus op uitstap gingen.\" Ook het zware busongeval in Schoten van afgelopen weekend en het ongeval met een bus in Egypte van gisteren, zijn heel confronterend. \"Ik zal nooit een bus nemen in Egypte. Ze rijden er veel te snel en veel te gevaarlijk.\"",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649919999657",
    "path": "/content/vrtnieuws/nl/2022/04/14/auto-zonder-nummerplaten-uitgebrand-in-antwerpen-kwaad-opzet-ni",
    "title": "Auto zonder nummerplaten uitgebrand in Antwerpen: kwaad opzet niet uitgesloten",
    "description": "Op het Eilandje in Antwerpen is een geparkeerde auto uitgebrand. De auto had geen nummerplaten meer en ook het chassisnummer kon de politie niet meer achterhalen. De politie is een onderzoek gestart. Kwaad opzet wordt niet uitgesloten.",
    "imageUrls": [
    "//images.vrt.be/orig/2021/12/05/e09419d7-55fa-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "title": "Antwerpen",
    "description": "District Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)",
    "Antwerpen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/A/anneke-hermans",
    "id": "authors:A/anneke-hermans",
    "title": "Anneke Hermans",
    "description": "Anneke Hermans",
    "titlesPath": [
    "Authors",
    "A",
    "Anneke Hermans"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/14/auto-zonder-nummerplaten-uitgebrand-in-antwerpen-kwaad-opzet-ni/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/14/auto-zonder-nummerplaten-uitgebrand-in-antwerpen-kwaad-opzet-ni/",
    "articleDates": {
    "publicationDate": "2022-04-14T07:17:46+0000",
    "sortingDate": "2022-04-14T07:17:46+0000",
    "lastModifiedDate": "2022-04-14T07:20:05+0000"
    },
    "subtitle": "Op het Eilandje in Antwerpen is een geparkeerde auto uitgebrand. De auto had geen nummerplaten meer en ook het chassisnummer kon de politie niet meer achterhalen.",
    "content": "Rond 3.50 uur is een auto uitgebrand in de Braziliëstraat op het Eilandje in Antwerpen. De Auto stond geparkeerd. Opvallend is dat de wagen geen nummerplaten meer had. Ook het chassisnummer kon de politie niet meer achterhalen. De brandweer heeft het voertuig geblust, maar kon niet verhinderen dat de auto helemaal uitbrandde. De politie onderzoekt nu of het een ongeluk was, of dat de brand werd aangestoken.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649916907055",
    "path": "/content/vrtnieuws/nl/2022/04/14/kerkklokken-herenthout-net-op-tijd-hersteld-voor-pasen",
    "title": "Kerkklokken Herenthout net op tijd hersteld voor Pasen: “Halen opnieuw de juiste luidhoogte”",
    "description": "De kerkklokken van de Sint-Pieter en Pauwelkerk in Herenthout kunnen met Pasen opnieuw luiden. Een half jaar geleden werden ze stilgelegd, nadat er barsten werden vastgesteld in de luidbrug van de grootste klok. Daardoor kon ze de juiste luidhoogte niet meer halen.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/14/b0ba98f3-bbbb-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/A/anneke-hermans",
    "id": "authors:A/anneke-hermans",
    "title": "Anneke Hermans",
    "description": "Anneke Hermans",
    "titlesPath": [
    "Authors",
    "A",
    "Anneke Hermans"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_herentals/herenthout",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_herentals/herenthout",
    "title": "Herenthout",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Herentals",
    "Herenthout"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/14/kerkklokken-herenthout-net-op-tijd-hersteld-voor-pasen/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/14/kerkklokken-herenthout-net-op-tijd-hersteld-voor-pasen/",
    "articleDates": {
    "publicationDate": "2022-04-14T06:43:54+0000",
    "sortingDate": "2022-04-14T06:43:54+0000",
    "lastModifiedDate": "2022-04-14T06:43:55+0000"
    },
    "subtitle": "Een halfjaar geleden werden de klokken stilgelegd, nadat er barsten werden vastgesteld in de luidbrug van de grootste klok. Daardoor kon ze de juiste luidhoogte niet meer halen. ",
    "content": "Bij een jaarlijkse controle van de drie klokken van de Sint-Pieter en Pauwelkerk in Herenthout, stelde de controleur grote barsten vast in de luidbrug van de grootste klok. Voor de veiligheid van de volledige installatie werd beslist om de klokken te herstellen. “Door de slijtage kon de grootste klok de juiste luidhoogte niet meer halen”, vertelt Stijn Raeymaekers (Eenheid-N-VA), burgemeester van Herenthout. “De klokken werden zes maanden geleden op non-actief gezet. Gelukkig zijn ze net op tijd hersteld om te luiden met Pasen en ook voor de eerste en plechtige communies die eraan komen.”",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649911150555",
    "path": "/content/vrtnieuws/nl/2022/04/14/stad-mechelen-wil-mobiliteit-nekkerspoel-sneller-verbeteren",
    "title": "Stad Mechelen wil mobiliteit Nekkerspoel sneller verbeteren:\n“Werken starten dit jaar nog”",
    "description": "De stad Mechelen wil dit jaar nog starten met enkele projecten om de mobiliteit in de wijk Nekkerspoel te verbeteren. Het gaat onder meer over de bouw van een fiets- en voetgangersbrug over de Dijle en de aanleg van een fietspad tussen de fietsostrade en het Tangent-fietspad.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/14/f90bc598-bbac-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "title": "Mechelen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Mechelen",
    "Mechelen"
    ]
    },
    {
    "path": "/content/cq:tags/authors/A/anneke-hermans",
    "id": "authors:A/anneke-hermans",
    "title": "Anneke Hermans",
    "description": "Anneke Hermans",
    "titlesPath": [
    "Authors",
    "A",
    "Anneke Hermans"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/14/stad-mechelen-wil-mobiliteit-nekkerspoel-sneller-verbeteren/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/14/stad-mechelen-wil-mobiliteit-nekkerspoel-sneller-verbeteren/",
    "articleDates": {
    "publicationDate": "2022-04-14T04:49:29+0000",
    "sortingDate": "2022-04-14T04:49:29+0000",
    "lastModifiedDate": "2022-04-14T04:49:30+0000"
    },
    "subtitle": "Het gaat onder meer over de bouw van een fiets- en voetgangersbrug over de Dijle en de aanleg van een fietspad tussen de fietsostrade en het Tangent-fietspad. ",
    "content": "De werken maken deel uit van het grotere plan om een nieuwe bestemming te geven aan het Nova-gebouw, waar nu het Speelgoedmuseum zit. Met het Nova-project wil de stad Mechelen de wijk Nekkerspoel grondig aanpakken. “Het is de bedoeling om zowel de look en feel, maar ook de mobiliteit te verbeteren”, zegt schepen van Mobiliteit, Vicky Vanmarcke (Open VLD). “De herlokalisatie van het speelgoedmuseum zal wellicht pas volgend jaar gebeuren. Daar moeten we niet op wachten om nu al de mobiliteit te verbeteren.” Fiets- en voetgangersbrug De mobiliteitswerken zouden dit jaar al moeten starten. Zo komt er een voetgangersbrug over de Dijle. Die brug moet Nekkerspoel verbinden met het Douaneplein. Er wordt ook een verbinding aangelegd tussen het Tangent-fietspad en de fietsostrade. “Fietsers die van Antwerpen komen, zullen zo vlotter kunnen doorstromen naar de binnenstad en richting Brussel”, aldus Vanmarcke. Ook de spoorwegtunnel aan het station Nekkerspoel zal een facelift krijgen.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1649933455601",
    "path": "/content/vrtnieuws/nl/2022/04/14/de-kennedytunnel-in-antwerpen-gaat-dit-weekend-volledig-dicht-ri",
    "title": "Kennedytunnel in Antwerpen is het hele weekend volledig dicht richting Nederland: \"Blijf er liever weg\"",
    "description": "In Antwerpen is de Kennedytunnel sinds 21 uur helemaal dicht in de richting van Nederland voor werken. Dat blijft het hele weekend zo, de tunnelkoker gaat pas maandagochtend om 5 uur weer open. Omrijden kan via de E34 en de Liefkenshoektunnel is al die tijd tolvrij.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/14/9d59c2f6-bbdb-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/video",
    "id": "system:vrtnieuws/labels/video",
    "title": "Video",
    "description": "Aansturen van de video overzichtspagina en de video feed in de app. Niet gebruikt om de teasers aan te passen.",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Video"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/authors/K/kristel-marien",
    "id": "authors:K/kristel-marien",
    "title": "Kristel Marien",
    "description": "Kristel Marien",
    "titlesPath": [
    "Authors",
    "K",
    "Kristel Marien"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen/antwerpen",
    "title": "Antwerpen",
    "description": "District Antwerpen",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)",
    "Antwerpen"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/regions/waasland",
    "id": "functional:vrtnieuws/regions/waasland",
    "title": "Waasland",
    "description": "functional:vrtnieuws/locations/oost-vlaanderen/kanton_beveren/beveren\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_hamme/hamme\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_temse/kruibeke\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_lokeren/lokeren\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_lochristi/moerbeke\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_sint-gillis-waas/sint-gillis-waas\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_sint-niklaas/sint-niklaas\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_sint-gillis-waas/stekene\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_temse/temse\nfunctional:vrtnieuws/locations/oost-vlaanderen/kanton_hamme/waasmunster",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Regio's",
    "Waasland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/audio",
    "id": "system:vrtnieuws/labels/audio",
    "title": "Audio",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Audio"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/14/de-kennedytunnel-in-antwerpen-gaat-dit-weekend-volledig-dicht-ri/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/14/de-kennedytunnel-in-antwerpen-gaat-dit-weekend-volledig-dicht-ri/",
    "articleDates": {
    "publicationDate": "2022-04-15T19:00:00+0000",
    "sortingDate": "2022-04-15T19:00:00+0000",
    "lastModifiedDate": "2022-04-15T19:21:57+0000"
    },
    "subtitle": "Het Vlaams Verkeerscentrum waarschuwt voor lange files als automobilisten dit weekend de Kennedytunnel niet vermijden. De tunnel blijft een heel weekend dicht richting Nederland omdat er werken moeten gebeuren.",
    "content": "\"Het is hoogst uitzonderlijk dat de drukste tunnel van Vlaanderen volledig afgesloten wordt,\" zegt Peter Bruyninckx van het Vlaams Verkeerscentrum. \"Maar de dwarsgoot moet heel dringend hersteld worden. Die staat in voor de afwatering van regenwater dat in de Kennedytunnel loopt. Als het water er blijft staan, is de tunnel niet meer veilig.\" Het Vlaams verkeerscentrum roept met klem op om de omgeving van de tunnel richting Nederland en het knooppunt Antwerpen-West te mijden. Als automobilisten er niet wegblijven, zitten we met kanjers van files Peter Bruyninckx, Vlaams Verkeerscentrum \"Bij de laatste afsluiting tijdens de 10 Miles in Antwerpen hadden we al 5 kilometer file staan voor de tunnel, en dat was een zondagnamiddag\"; zegt Peter Bruyninckx van het Vlaams Verkeerscentrum. \"Nu zit er een zaterdag bij, en dan is er nog 20 procent meer verkeer. Als mensen blijven zeggen dat ze toch gaan passeren via die route, dan zitten we daar met kanjers van files.\" Richting Gent blijft de Kennedytunnel open maar in de richting van Nederland, zijn een aantal omleidingen voorzien. \"Je kan perfect via de E17 rijden, maar net voor de Kennedytunnel moet je dan een omleiding volgen naar de Liefkenshoektunnel,\" zegt Hajo Beeckman van de VRT-verkeersredactie. \"Die is trouwens het hele weekend tolvrij richting Nederland.\" \"De omleiding voorbij de E17 heeft door de Oosterweelwerken plaatselijk wel maar één rijstrook en dat zal dus voor problemen zorgen,\" aldus nog Beeckman. \"Wil je vanuit Oost- en West-vlaanderen naar Antwerpen of de Kempen, dan rijd je beter via de E34, en dan kan je zo rechtstreeks naar de Liefkenshoektunnel. Verkeer vanuit het westen naar Limburg kiest beter de E40 via Brussel.\" Nederland Hier in ons land werden de werken weken op voorhand al aangekondigd via de sociale media en via borden op de weg, maar ook in het buitenland werden mensen verwittigd. We weten dat in Nederland de boodschap verspreid is en we hopen dat de mensen er ook naar zullen luisteren Peter Bruyninckx, Vlaams Verkeerscentrum \"Het Vlaams Verkeercentrum heeft ook contact met verkeerscentrales in onze buurlanden. Ook daar hebben we gevraagd om hun inwoners op het hart te drukken dat het lastig rijden wordt in Antwerpen in de richting van Nederland. We weten dat in Nederland de boodschap verspreid is en we hopen dat de mensen er ook naar zullen luisteren,\" aldus Bruyninckx. 10 Miles Tijdens het weekend na de paasvakantie, op zondagnamiddag 24 april, is de Kennedytunnel richting Nederland opnieuw dicht. Dan vindt het sportevenement Antwerp 10 Miles plaats en kan er tussen 11.30 uur en 17 uur geen verkeer door de tunnelkoker richting Nederland. Het verkeer volgt dan dezelfde omleiding via de E34 en de R2 met tolvrije Liefkenshoektunnel. Bekijk de uitleg door Peter Bruyninckx van het Vlaams Verkeercentrum: Videospeler inladen... Door dringende werken gaat Kennedytunnel vanaf vanavond dicht in de richting van Nederland, een heel paasweekend lang",
    "liveBlogItems": [],
    "isVideo": true,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": [
    {
    "id": "vid-71aae725-4cb0-4389-ba5f-cfa786ae5005",
    "publicationId": "pbs-pub-96db494e-aba8-47ba-b2d9-ae3f41ce13ad",
    "type": "asset",
    "title": "null - 15/04 null",
    "imageUrl": "https://images.vrt.be/orig/2022/04/15/d60a670b-bcae-11ec-b07d-02b7b76bf47f.jpg",
    "duration": 51030,
    "assetPath": "/content/dam/vrt/2022/04/15/antwerpse-tunnels-j13-arvato_48181379"
    }
    ]
    },
    {
    "id": "1650036078010",
    "path": "/content/vrtnieuws/nl/2022/04/15/flixbus-rijdt-vanaf-maandag-weer-naar-oekraine",
    "title": "Flixbus wil vanaf maandag weer naar Oekraïne rijden",
    "description": "Busmaatschappij Flixbus wil vanaf maandag weer naar Oekraïne rijden. Dat kan zowel vanuit Antwerpen als vanuit Brussel. Flixbus benadrukt dat de veiligheid van hun chauffeurs en passagiers wel een prioriteit is en dat ze de situatie continu in de gaten houden.",
    "imageUrls": [
    "//images.vrt.be/orig/2020/01/28/7fd2a6be-41bc-11ea-aae0-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/brussel/kanton_brussel/brussel",
    "id": "functional:vrtnieuws/locations/brussel/kanton_brussel/brussel",
    "title": "Brussel (Stad)",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Brussel",
    "Kanton Brussel",
    "Brussel (Stad)"
    ]
    },
    {
    "path": "/content/cq:tags/authors/A/an-verstuyft",
    "id": "authors:A/an-verstuyft",
    "title": "An Verstuyft",
    "description": "An Verstuyft",
    "titlesPath": [
    "Authors",
    "A",
    "An Verstuyft"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/stories/SpanningenOekraineRusland",
    "id": "functional:vrtnieuws/stories/SpanningenOekraineRusland",
    "title": "Oorlog Rusland-Oekraïne",
    "description": "Oorlog Rusland-Oekraïne",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Dossiers",
    "Oorlog Rusland-Oekraïne"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_antwerpen/antwerpen",
    "title": "Antwerpen (Stad)",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Antwerpen",
    "Antwerpen (Stad)"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/15/flixbus-rijdt-vanaf-maandag-weer-naar-oekraine/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/15/flixbus-rijdt-vanaf-maandag-weer-naar-oekraine/",
    "articleDates": {
    "publicationDate": "2022-04-15T15:31:10+0000",
    "sortingDate": "2022-04-15T15:31:10+0000",
    "lastModifiedDate": "2022-04-15T15:31:11+0000"
    },
    "subtitle": "Dat kan zowel vanuit Antwerpen als vanuit Brussel.",
    "content": "Uit veiligheidsoverwegingen had Flixbus zijn verbindingen naar Oekraïne opgeschort. Vanaf maandag zouden er toch opnieuw bussen naartoe rijden. Volgens Flixbus willen steeds meer vluchtelingen terugkeren en is het in bepaalde delen van het land veilig genoeg. De busmaatschappij plant naar 7 steden te rijden, waaronder de hoofdstad Kiev, via tussenstops in Praag (Tsjechië) en Warschau (Polen). Flixbus zegt wel de situatie permanent op te volgen in samenwerking met lokale partners. De veiligheid van chauffeurs en passagiers is van het grootste belang, zegt de maatschappij.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Oorlog Rusland-Oekraïne",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650032962298",
    "path": "/content/vrtnieuws/nl/2022/04/15/demente-bejaarden-in-mechelen-vormen-samen-het-liswonder-koor",
    "title": "Demente bejaarden in Mechelen vormen samen het Liswonder Koor: \"Muziek uit hun jeugd blijft het langste hangen\"",
    "description": "Een aantal bejaarden met dementie die in woonzorgcentrum De Lisdodde in Mechelen verblijven, hebben samen een contactkoor gevormd. Ze gaven vanmorgen hun allereerste optreden voor een publiek van familieleden. Hun repertoire zijn meezingers, liedjes uit hun jeugd zoals In de Stille Kempen. Op termijn is het de bedoeling dat ook familieleden en mantelzorgers mee in het koor gaan zingen. Ze kunnen dan wat uit hun zorgrol treden en ook leuke dingen doen met de bejaarde voor wie ze zorgen.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/15/1f260915-bcc8-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/binnenland",
    "id": "functional:vrtnieuws/categories/binnenland",
    "title": "Binnenland",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Binnenland"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/net-binnen",
    "id": "system:vrtnieuws/labels/net-binnen",
    "title": "Net Binnen",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Net Binnen"
    ]
    },
    {
    "path": "/content/cq:tags/authors/K/kristel-marien",
    "id": "authors:K/kristel-marien",
    "title": "Kristel Marien",
    "description": "Kristel Marien",
    "titlesPath": [
    "Authors",
    "K",
    "Kristel Marien"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_mechelen/mechelen",
    "title": "Mechelen",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Mechelen",
    "Mechelen"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/labels/audio",
    "id": "system:vrtnieuws/labels/audio",
    "title": "Audio",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "labels",
    "Audio"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/15/demente-bejaarden-in-mechelen-vormen-samen-het-liswonder-koor/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/15/demente-bejaarden-in-mechelen-vormen-samen-het-liswonder-koor/",
    "articleDates": {
    "publicationDate": "2022-04-15T14:43:47+0000",
    "sortingDate": "2022-04-15T14:43:47+0000",
    "lastModifiedDate": "2022-04-15T14:47:28+0000"
    },
    "subtitle": "Een aantal bejaarden met dementie die in woonzorgcentrum De Lisdodde in Mechelen verblijven, hebben samen een contactkoor gevormd. Ze gaven vanmorgen hun allereerste optreden voor een publiek van familieleden. Hun repertoire zijn meezingers, liedjes ",
    "content": "\"We merken dat muziek lang blijft hangen in het geheugen van onze bejaarden,\" zegt ergotherapeut Sanne Leenders. \"Mensen die overdag nauwelijks praten, zingen uit volle borst mee. En bejaarden die onrustig zijn, vinden kalmte door het zingen, maar er zijn ook mensen die er gewoon van genieten. De teksten kunnen ze allemaal nog meezingen. \"Die zitten waarschijnlijk op een ander plekje in hun hersenen opgeslagen, bij de emoties\", zegt Sanne. \"Daarom kiezen we bewust voor oudere, populaire liedjes uit hun jeugd. Dat de ouderen van later dan misschien liedjes van Spring gaan zingen? \"Dat zal wat geven,\" lacht ze. \"Ik heb lang heel hoog kunnen zingen,\" vertelt An (89), \"ik heb zelfs in een koor gezongen als sopraan. Maar dat kan ik nu niet meer. Gaan we straks voor de familie zingen,\" vraagt ze, \"dat ben ik alweer vergeten. Als je jong bent, zing je thuis veel, he, maar later zingt een mens niet veel meer.\" Dat het koor al van in november aan het oefenen is, weet ze niet meer, maar wel dat de nonnen op school aan haar arm trokken als ze in de kerk latijnse missen moest zingen. Familie en mantelzorgers betrekken bij het koor Volgens ergotherapeute Sanne Leenders is het heel belangrijk dat familieleden mee in het koor stappen. Of dat ze, los van het koor, samen liedjes zingen met de bejaarde. \"Mantelzorgers zitten in een lang proces van 'zorgen voor', zegt ze, en het is belangrijk dat zij soms ook leuke dingen kunnen doen samen\". Het contactkoor sluit aan bij de visie van het woonzorgcentrum: dat iemand met dementie veel meer is dan iemand die zorg nodig heeft. Een koor van demente bejaarden, het Liswonder trad voor de eerste keer op.",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    },
    {
    "id": "1650030585627",
    "path": "/content/vrtnieuws/nl/2022/04/15/politie-turnhout-zoekt-dieven-die-voor-bijna-1-500-euro-aan-tand",
    "title": "Politie Turnhout zoekt dieven die voor bijna 1.500 euro aan tandenborstels en fopspenen meenamen uit winkel",
    "description": "De Politie Regio Turnhout heeft een opsporingsbericht verspreid voor twee dieven die voor bijna 1.500 euro aan fopspenen en tandenborstels hebben gestolen. Ze namen die mee uit het rekken van een Kruidvatwinkel aan de Steenweg op Gierle.",
    "imageUrls": [
    "//images.vrt.be/orig/2022/04/15/58556a7b-bcc3-11ec-b07d-02b7b76bf47f.jpg"
    ],
    "tags": [
    {
    "path": "/content/cq:tags/authors/A/an-verstuyft",
    "id": "authors:A/an-verstuyft",
    "title": "An Verstuyft",
    "description": "An Verstuyft",
    "titlesPath": [
    "Authors",
    "A",
    "An Verstuyft"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/categories/justitie",
    "id": "functional:vrtnieuws/categories/justitie",
    "title": "Justitie",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Rubrieken",
    "Justitie"
    ]
    },
    {
    "path": "/content/cq:tags/functional/vrtnieuws/locations/antwerpen/kanton_turnhout/turnhout",
    "id": "functional:vrtnieuws/locations/antwerpen/kanton_turnhout/turnhout",
    "title": "Turnhout",
    "description": "",
    "titlesPath": [
    "Functional tags",
    "VRT Nieuws",
    "Locaties",
    "Antwerpen",
    "Kanton Turnhout",
    "Turnhout"
    ]
    },
    {
    "path": "/content/cq:tags/system/vrtnieuws/brands/radio-2",
    "id": "system:vrtnieuws/brands/radio-2",
    "title": "Radio 2",
    "description": "",
    "titlesPath": [
    "System tags",
    "vrtnieuws",
    "Brands",
    "Radio 2"
    ]
    }
    ],
    "selfUrl": "//www.vrt.be/vrtnws/nl/2022/04/15/politie-turnhout-zoekt-dieven-die-voor-bijna-1-500-euro-aan-tand/",
    "externalUrl": "https://www.vrt.be/vrtnws/nl/2022/04/15/politie-turnhout-zoekt-dieven-die-voor-bijna-1-500-euro-aan-tand/",
    "articleDates": {
    "publicationDate": "2022-04-15T14:16:07+0000",
    "sortingDate": "2022-04-15T14:16:07+0000",
    "lastModifiedDate": "2022-04-15T14:21:24+0000"
    },
    "subtitle": "Ze hebben dat gestolen in de Kruidvat-winkel aan de Steenweg op Gierle.",
    "content": "Op maandag 7 februari 2022 rond 14.45 uur gingen twee winkeldieven aan de haal met een grote hoeveelheid tandverzorgingsproducten en fopspenen uit een vestiging van Kruidvat aan de Steenweg op Gierle in Turnhout. De buit was bijna 1.500 euro waard. \"Er zaten naast tandpasta ook elektrische tandenborstels bij, waardoor het bedrag aanzienlijk is opgelopen\", zegt Rudy Remijsen van de politie. Ze gingen heel nauwgezet aan het werk, volgens de politie. \"De eerste persoon op het opsporingsbericht heeft de producten uit de rekken gehaald, in een mandje gelegd en alle verpakkingen en anti-diefstalklevers eraf gehaald. Daarna kwam de tweede dief binnen en werd de buit aan hem doorgegeven. Hij heeft alles onder zijn kledij verstopt en is ermee naar buiten gewandeld.\" Het winkelpersoneel heeft pas 's anderendaags het lege rek ontdekt en aangifte gedaan van de diefstal. In overleg met het parket mocht de politie nu de camerabeelden verspreiden om de dieven op te sporen. Wie deze mannen herkent, weet waar zij verblijven of er andere nuttige informatie over heeft, wordt gevraagd dit te melden aan de Politie Regio Turnhout, ofwel telefonisch via 0800 25 101 (optie 1), ofwel via mail naar opsporingen@politieregioturnhout.be .",
    "liveBlogItems": [],
    "isVideo": false,
    "isLive": false,
    "hasLive": false,
    "displayTag": "Antwerpen",
    "expertName": "",
    "expertDescription": "",
    "videos": []
    }
  ]

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
    
      var newsApi = new NewsApi();

      return newsApi.fetchData().then((res) => {
        return res.data
         
      });
  }

)



const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articleAdded: {
            reducer(state, action) {
              state.push(action.payload)
            },
            prepare(title, subtitle, content, imageUrls) {
              return {
                payload: {
                  id: nanoid(),
                  title,
                  subtitle,
                  content,
                  imageUrls,
                  articleDates: {
                    publicationDate: new Date().toISOString()
                  }
                }
              }
            }
          },
        articleModified(state, action){
          const { id, title, subtitle, content, newImageUrls } = action.payload
          const oldArticle = state.find(article => article.id === id)
          if (oldArticle) {
            oldArticle.title = title
            oldArticle.subtitle = subtitle
            oldArticle.content = content
            oldArticle.imageUrls = newImageUrls
            oldArticle.articleDates = {
                publicationDate: new Date().toISOString()
            }
          }
        }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        
        payload.forEach(element => {
          
          if(state.filter(x => x.id === element.id).length < 1)
            {
              state.push(element)
            }
        });
        
      })
  }
})

export const { articleAdded, articleModified } = articlesSlice.actions

export default articlesSlice.reducer