// escudos.js - Base de datos de logotipos para el marcador

const BaseEscudos = {
    // --- SELECCIONES DEL MUNDIAL (Claves y Variaciones) ---
    "ARGENTINA": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28logo%29.svg",
    "ARG": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28logo%29.svg",
    "BRASIL": "https://upload.wikimedia.org/wikipedia/commons/9/99/CBF_logo.svg",
    "BRA": "https://upload.wikimedia.org/wikipedia/commons/9/99/CBF_logo.svg",
    "FRANCIA": "https://upload.wikimedia.org/wikipedia/commons/d/df/Logo_F%C3%A9d%C3%A9ration_Fran%C3%A7aise_de_Football.svg",
    "FRA": "https://upload.wikimedia.org/wikipedia/commons/d/df/Logo_F%C3%A9d%C3%A9ration_Fran%C3%A7aise_de_Football.svg",
    "ALEMANIA": "https://upload.wikimedia.org/wikipedia/commons/e/e3/DFB-Adler_2014.svg",
    "GER": "https://upload.wikimedia.org/wikipedia/commons/e/e3/DFB-Adler_2014.svg",
    "ITALIA": "https://upload.wikimedia.org/wikipedia/commons/2/29/Logo_FIGC_2023.svg",
    "ITA": "https://upload.wikimedia.org/wikipedia/commons/2/29/Logo_FIGC_2023.svg",
    "INGLATERRA": "https://upload.wikimedia.org/wikipedia/en/8/8b/England_national_football_team_crest.svg",
    "ENG": "https://upload.wikimedia.org/wikipedia/en/8/8b/England_national_football_team_crest.svg",
    "ESPAÑA": "https://upload.wikimedia.org/wikipedia/commons/3/31/RFEF_logo_2021.svg",
    "ESP": "https://upload.wikimedia.org/wikipedia/commons/3/31/RFEF_logo_2021.svg",
    "URUGUAY": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Asociaci%C3%B3n_Uruguaya_de_F%C3%BAtbol_logo.svg",
    "URU": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Asociaci%C3%B3n_Uruguaya_de_F%C3%BAtbol_logo.svg",
    "PORTUGAL": "https://upload.wikimedia.org/wikipedia/commons/d/d4/FPF_Logo.svg",
    "POR": "https://upload.wikimedia.org/wikipedia/commons/d/d4/FPF_Logo.svg",
    "PAISES BAJOS": "https://upload.wikimedia.org/wikipedia/commons/7/78/KNVB_logo_2014.svg",
    "HOLANDA": "https://upload.wikimedia.org/wikipedia/commons/7/78/KNVB_logo_2014.svg",
    "NED": "https://upload.wikimedia.org/wikipedia/commons/7/78/KNVB_logo_2014.svg",
    "MEXICO": "https://upload.wikimedia.org/wikipedia/commons/d/da/Logo_de_la_Federaci%C3%B3n_Mexicana_de_F%C3%BAtbol_%282021%29.svg",
    "MEX": "https://upload.wikimedia.org/wikipedia/commons/d/da/Logo_de_la_Federaci%C3%B3n_Mexicana_de_F%C3%BAtbol_%282021%29.svg",
    "COLOMBIA": "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_FCF.svg",
    "COL": "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_FCF.svg",
    "CHILE": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_ANFP.svg",
    "CHI": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_ANFP.svg",
    "ESTADOS UNIDOS": "https://upload.wikimedia.org/wikipedia/commons/8/86/US_Soccer_federation_logo.svg",
    "USA": "https://upload.wikimedia.org/wikipedia/commons/8/86/US_Soccer_federation_logo.svg",
    "SENEGAL": "https://upload.wikimedia.org/wikipedia/commons/f/f3/F%C3%A9d%C3%A9ration_S%C3%A9n%C3%A9galaise_de_Football_logo.svg",
    "JAPON": "https://upload.wikimedia.org/wikipedia/commons/9/91/JFA_logo.svg",
    "JPN": "https://upload.wikimedia.org/wikipedia/commons/9/91/JFA_logo.svg",
    "MARRUECOS": "https://upload.wikimedia.org/wikipedia/commons/0/0b/FRMF_logo.png",
    "MAR": "https://upload.wikimedia.org/wikipedia/commons/0/0b/FRMF_logo.png",
    "CROACIA": "https://upload.wikimedia.org/wikipedia/commons/9/9a/HNS_Logo_2014.svg",
    "CRO": "https://upload.wikimedia.org/wikipedia/commons/9/9a/HNS_Logo_2014.svg",

    // --- PRIMERA DIVISIÓN ARGENTINA ---
    "BOCA": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Boca_juniors_logo.svg",
    "BOCA JUNIORS": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Boca_juniors_logo.svg",
    "CABJ": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Boca_juniors_logo.svg",
    "RIVER": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_del_C_A_River_Plate.svg",
    "RIVER PLATE": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_del_C_A_River_Plate.svg",
    "CARP": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_del_C_A_River_Plate.svg",
    "INDEPENDIENTE": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg",
    "CAI": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg",
    "RACING": "https://upload.wikimedia.org/wikipedia/commons/5/56/Escudo_de_Racing_Club.svg",
    "RACING CLUB": "https://upload.wikimedia.org/wikipedia/commons/5/56/Escudo_de_Racing_Club.svg",
    "SAN LORENZO": "https://upload.wikimedia.org/wikipedia/commons/1/14/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg",
    "CASLA": "https://upload.wikimedia.org/wikipedia/commons/1/14/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.svg",
    "HURACAN": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Escudo_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg",
    "VELEZ": "https://upload.wikimedia.org/wikipedia/commons/d/db/Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg",
    "VELEZ SARSFIELD": "https://upload.wikimedia.org/wikipedia/commons/d/db/Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg",
    "ESTUDIANTES": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Escudo_del_Club_Estudiantes_de_La_Plata.svg",
    "ESTUDIANTES LP": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Escudo_del_Club_Estudiantes_de_La_Plata.svg",
    "GIMNASIA": "https://upload.wikimedia.org/wikipedia/commons/8/87/C_y_E_La_Plata_logo.svg",
    "GELP": "https://upload.wikimedia.org/wikipedia/commons/8/87/C_y_E_La_Plata_logo.svg",
    "NEWELLS": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Newell%27s_Old_Boys_logo.svg",
    "NEWELL\'S": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Newell%27s_Old_Boys_logo.svg",
    "NOB": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Newell%27s_Old_Boys_logo.svg",
    "ROSARIO CENTRAL": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Club_Atl%C3%A9tico_Rosario_Central_logo.svg",
    "CENTRAL": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Club_Atl%C3%A9tico_Rosario_Central_logo.svg",
    "TALLERES": "https://upload.wikimedia.org/wikipedia/commons/1/18/Club_Atl%C3%A9tico_Talleres_logo.svg",
    "TALLERES C": "https://upload.wikimedia.org/wikipedia/commons/1/18/Club_Atl%C3%A9tico_Talleres_logo.svg",
    "BELGRANO": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Club_Atl%C3%A9tico_Belgrano_logo.svg",
    "LANUS": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Club_Atl%C3%A9tico_Lan%C3%BAs_logo.svg",
    "BANFIELD": "https://upload.wikimedia.org/wikipedia/commons/4/41/Club_Atl%C3%A9tico_Banfield.svg",
    "ARGENTINOS": "https://upload.wikimedia.org/wikipedia/commons/8/86/Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors_logo.svg",
    "ARGENTINOS JRS": "https://upload.wikimedia.org/wikipedia/commons/8/86/Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors_logo.svg",
    "DEFENSA Y JUSTICIA": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Club_Social_y_Deportivo_Defensa_y_Justicia_logo.svg",
    "DEFENSA": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Club_Social_y_Deportivo_Defensa_y_Justicia_logo.svg",
    "TIGRE": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Club_Atl%C3%A9tico_Tigre_logo.svg",
    "PLATENSE": "https://upload.wikimedia.org/wikipedia/commons/9/90/Club_Atl%C3%A9tico_Platense_logo.svg",
    "COLON": "https://upload.wikimedia.org/wikipedia/commons/0/01/Club_Atl%C3%A9tico_Col%C3%B3n_logo.svg",
    "UNION": "https://upload.wikimedia.org/wikipedia/commons/1/13/Club_Atl%C3%A9tico_Uni%C3%B3n_%28Santa_Fe%29_logo.svg",
    "ATLETICO TUCUMAN": "https://upload.wikimedia.org/wikipedia/commons/9/91/Club_Atl%C3%A9tico_Tuc_H_logo.svg",
    "CHACARITA": "https://upload.wikimedia.org/wikipedia/commons/a/af/Club_Atl%C3%A9tico_Chacarita_Juniors.svg",
    "FERRO": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ferro_Carril_Oeste_logo.svg"
};

const ESCUDO_GENERICO = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='none' stroke='%2300ff66' stroke-width='4'/><path d='M25 50 Q50 30 75 50 Q50 70 25 50 M50 5 Q50 50 50 95 M5 50 Q50 50 95 50' fill='none' stroke='%2300ff66' stroke-width='2' stroke-dasharray='4'/></svg>";

function obtenerUrlEscudo(nombre) {
    if (!nombre) return ESCUDO_GENERICO;
    const nombreLimpio = nombre.trim().toUpperCase();

    if (BaseEscudos[nombreLimpio]) {
        return BaseEscudos[nombreLimpio];
    }

    const claves = Object.keys(BaseEscudos);
    for (let i = 0; i < claves.length; i++) {
        if (nombreLimpio.includes(claves[i]) || claves[i].includes(nombreLimpio)) {
            return BaseEscudos[claves[i]];
        }
    }
    return ESCUDO_GENERICO;
}

function cargarEscudoHTML(nombreEquipo, idElementoImg) {
    const imgElement = document.getElementById(idElementoImg);
    if (!imgElement) return;

    const url = obtenerUrlEscudo(nombreEquipo);
    imgElement.src = url;
    imgElement.style.display = 'block';
}