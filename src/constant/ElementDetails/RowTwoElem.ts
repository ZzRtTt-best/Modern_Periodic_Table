import ElementDetailsProps from "@/types/ElementTypes";

export const RowTwoElem: ElementDetailsProps[] = [
  {
    id: 3,
    neighbour: ["Helium", "Beryllium"],
    description:
      "Lithium is the lightest metal and the least dense solid element. It is the first alkali metal in the periodic table. It is highly reactive and flammable, and must be stored in mineral oil. When cut, it exhibits a metallic luster, but moist air corrodes it quickly to a dull silvery gray, then black tarnish. It never occurs freely in nature, but only in (usually ionic) compounds, such as pegmatitic minerals which were once the main source of lithium. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines. Lithium metal is isolated electrolytically from a mixture of lithium chloride and potassium chloride.",
    general_properties: {
      name: "Lithium",
      atomic_number: 3,
      group: 1,
      period: 2,
      block: "S",
      cas_number: "7439-93-2",
      symbol: "Li",
    },
    particles: {
      electrons: 3,
      protons: 3,
      neutrons: 4,
    },
    overview: {
      latin_name: "Lithium",
      discovery: 1817,
      discoverer: "Augustus Matthiessen, Johan August Arfwedson, Robert Bunsen",
    },
    atomic_properties: {
      atomic_weight: 6.94,
      oxidation_states: [1],
      electron_shell_configuration: "K2 L1",
      electron_configuration: "<p>1s<sup>2</sup> 2s<sup>1</sup></p>",
      atomic_radius: 167,
      covalent_radius: 128,
      van_der_walls_radius: 182,
      crystall_structure: "Cubic (Face Centered)",
    },
    thermodynamic_properties: {
      boiling_point: "1342℃",
      melting_point: "180.54℃",
      phase: "Solid",
      fusion_heat: 3.0,
      specific_heat: 3570,
      vaporization_heat: 147,
      thermal_expansion: "4.6•10<sup>-5</sup>",
    },
    material_properties: {
      color: "Silvery-white",
      molar_volume: "<p>1.46•10<sup>-2</sup><p>",
      liquid_density: 512,
      density: 535,
      young_modulus: 4.9,
      bulk_modulus: 11,
      mohs_hardness: 0.6,
      shear_modulus: 4.2,
      thermal_conductivity: 85,
      sound_speed: 6000,
    },
    reactivity: {
      electronegativity: 0.98,
      valence: 1,
      electron_affinity: 59.6,
      ionization_energy: 520,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 71,
    },
    electromagnetic_properties: {
      electrical_type: "Conductor",
      magnetic_type: "Paramagentic",
      resisitivity: "9.4•10<sup>-8</sup>",
      electrical_conductivity: "1.1•10<sup>7</sup>",
      volume_magnetic_suspectibility: "<p>1.37•10<sup>-5</sup></p>",
      mass_magnetic_suspectibility: "<p>2.56•10<sup>-8</sup></p>",
      molar_magnetic_suspectibility: "<p>1.78•10<sup>-10</sup></p>",
    },
    prevalence: {
      universe: "6•10<sup>-7</sup>%",
      sun: "6•10<sup>-9</sup>%",
      meteorites: "0.00017%",
      earth_crust: "0.0017%",
      ocean: "0.000018%",
      human: "3•10<sup>-6</sup>%",
    },
  },
  {
    id: 4,
    neighbour: ["Lithium", "Boron"],
    description:
      "It is arelatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays. Within the cores of stars, beryllium is depleted as it is fused into heavier elements. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
    general_properties: {
      name: "Beryllium",
      atomic_number: 4,
      group: 2,
      period: 2,
      block: "S",
      cas_number: "7440-41-7",
      symbol: "Be",
    },
    particles: {
      electrons: 4,
      protons: 4,
      neutrons: 5,
    },
    overview: {
      latin_name: "Beryllium",
      discovery: 1797,
      discoverer:
        "Nicolas-Louis Vauquelin, Friedrich Wohler, Antonie A B Bussy",
    },
    atomic_properties: {
      atomic_weight: 9.0121831,
      oxidation_states: [2],
      electron_shell_configuration: "K2 L2",
      electron_configuration: "<p>1s<sup>2</sup> 2s<sup>2</sup></p>",
      atomic_radius: 112,
      covalent_radius: 96,
      crystall_structure: "Hexagonal",
    },
    thermodynamic_properties: {
      boiling_point: "2470℃",
      melting_point: "1287℃",
      phase: "Solid",
      fusion_heat: 7.95,
      specific_heat: 1820,
      vaporization_heat: 297,
      thermal_expansion: "1.13•10<sup>-5</sup>",
    },
    material_properties: {
      color: "Slate Gray",
      molar_volume: "<p>4.877•10<sup>-6</sup><p>",
      liquid_density: 1690,
      density: 1848,
      young_modulus: 287,
      bulk_modulus: 130,
      mohs_hardness: 5.5,
      shear_modulus: 132,
      thermal_conductivity: 190,
      sound_speed: 13000,
      brinell_hardness: 600,
      poisson_ratio: 0.032,
      vickers_hardness: 1670,
    },
    reactivity: {
      electronegativity: 1.57,
      valence: 2,
      ionization_energy: 899.5,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.0092,
    },
    electromagnetic_properties: {
      electrical_type: "Conductor",
      magnetic_type: "Diamagentic",
      resisitivity: "4•10<sup>-8</sup>",
      superconducting_point: 0.026,
      electrical_conductivity: "2.5•10<sup>7</sup>",
      volume_magnetic_suspectibility: "<p>-2.328•10<sup>-5</sup></p>",
      mass_magnetic_suspectibility: "<p>-1.26•10<sup>-8</sup></p>",
      molar_magnetic_suspectibility: "<p>-1.136•10<sup>-10</sup></p>",
    },
    prevalence: {
      universe: "10<sup>-7</sup>%",
      sun: "10<sup>-8</sup>%",
      ocean: "6•10<sup>-11</sup>%",
      human: "4•10<sup>-8</sup>%",
      earth_crust: "0.00019%",
      meteorites: "2.9•10<sup>-6</sup>%",
    },
  },
  {
    id: 5,
    neighbour: ["Beryllium", "Carbon"],
    description:
      "Boron is not a very frequent element and is found in nature only in compounds together with oxygen. Crystalline boron which is shown here, is nearly as hard as diamond (9.5 on mohs scale, diamond has 10). Boron as different biological functions. Boron compounds have many, often very special apllications, a common one is B<sub>2</sub>O<sub>3</sub> for borosilicate glass. Most famous probably are the perborates as bleach and as washing agent. Becaus of Their bad biodegradability, the use of perborates has gone back. It also highley used in neuclear reactor.",
    general_properties: {
      name: "Boron",
      atomic_number: 5,
      group: 13,
      period: 2,
      block: "P",
      cas_number: "7440-42-8",
      symbol: "B",
    },
    particles: {
      electrons: 5,
      protons: 5,
      neutrons: 6,
    },
    overview: {
      latin_name: "Borum",
      discovery: 1808,
      discoverer:
        "Joseph Louis Gay-Lussac, Louis-Jacques Thenard, Humphry Davy",
    },
    atomic_properties: {
      atomic_weight: 10.81,
      oxidation_states: [3],
      electron_shell_configuration: "K2 L3",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>2</sup></p> 2p<sup>1</sup>",
      atomic_radius: 87,
      covalent_radius: 84,
      crystall_structure: "Rhombohedral",
    },
    thermodynamic_properties: {
      boiling_point: "4000℃",
      melting_point: "2075℃",
      phase: "Solid",
      fusion_heat: 50,
      specific_heat: 1030,
      vaporization_heat: 507,
      thermal_expansion: "6•10<sup>-6</sup>",
    },
    material_properties: {
      color: "Black",
      molar_volume: "<p>4.394•10<sup>-6</sup><p>",
      liquid_density: 2080,
      density: 2460,
      bulk_modulus: 320,
      mohs_hardness: 9.3,
      thermal_conductivity: 27,
      sound_speed: 16200,
      vickers_hardness: 49000,
    },
    reactivity: {
      electronegativity: 2.04,
      valence: 3,
      electron_affinity: 26.7,
      ionization_energy: 800.6,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 760,
    },
    electromagnetic_properties: {
      electrical_type: "Insulator",
      magnetic_type: "Diamagentic",
      resisitivity: "10<sup>4</sup>",
      electrical_conductivity: "10<sup>-4</sup>",
      volume_magnetic_suspectibility: "<p>-2.14•10<sup>-5</sup></p>",
      mass_magnetic_suspectibility: "<p>-8.7•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>-9.41•10<sup>-11</sup></p>",
    },
    prevalence: {
      universe: "10<sup>-7</sup>%",
      sun: "2•10<sup>-7</sup>%",
      meteorites: "0.00016%",
      earth_crust: "0.00086%",
      ocean: "0.000440%",
      human: "7•10<sup>-5</sup>%",
    },
  },
  {
    id: 6,
    neighbour: ["Boron", "Nitrogen"],
    description:
      "Carbon is the base of all life and the element with the most complex chemistry. Coal which consist mostly of carbon, is known and used since prehistorics time. Mineral oil contains largely of hydrocarbons. The combution of carbon mostly produce carbon dioxide, CO<sub>2</sub> This is a green house gas, which traps heat radiation",
    general_properties: {
      name: "Carbon",
      atomic_number: 6,
      group: 14,
      period: 2,
      block: "P",
      cas_number: "7440-44-0",
      symbol: "C",
    },
    particles: {
      electrons: 6,
      protons: 6,
      neutrons: 6,
    },
    overview: {
      latin_name: "Carbonium",
      discovery: -3750,
      discoverer: "Prehistorics",
    },
    atomic_properties: {
      atomic_weight: 12.011,
      oxidation_states: [-4, 2, 4],
      electron_shell_configuration: "K2 L4",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></p>",
      atomic_radius: 67,
      covalent_radius: 76,
      van_der_walls_radius: 170,
      crystall_structure: "Hexagonal",
    },
    thermodynamic_properties: {
      boiling_point: "4027℃",
      melting_point: "3550℃",
      phase: "Solid",
      fusion_heat: 105,
      specific_heat: 710,
      vaporization_heat: 715,
      thermal_expansion: "7.1•10<sup>-6</sup>",
    },
    material_properties: {
      color: "Black",
      molar_volume: "<p>5.315•10<sup>-6</sup><p>",
      density: 2260,
      bulk_modulus: 33,
      mohs_hardness: 0.5,
      thermal_conductivity: 140,
      sound_speed: 18350,
      refrective_index: 2.417,
    },
    reactivity: {
      electronegativity: 2.55,
      valence: 4,
      electron_affinity: 153.9,
      ionization_energy: 1086.5,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.0035,
    },
    electromagnetic_properties: {
      electrical_type: "Conductor",
      magnetic_type: "Diamagentic",
      resisitivity: "10<sup>-5</sup>",
      electrical_conductivity: "10<sup>5</sup>",
      volume_magnetic_suspectibility: "<p>-1.4•10<sup>-5</sup></p>",
      mass_magnetic_suspectibility: "<p>-6.2•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>-7.45•10<sup>-11</sup></p>",
    },
    prevalence: {
      universe: "0.50%",
      sun: "0.30%",
      meteorites: "1.50%",
      earth_crust: "0.18%",
      ocean: "0.002800%",
      human: "23%",
    },
  },
  {
    id: 7,
    neighbour: ["Carbon", "Oxygen"],
    description:
      "Nitrogen is an enormously important element with a versatile chemistry. It is part of every protein. Our air consist of 78% of N<sub>2</sub>. the chemical bond between the two atoms of the same element. This makes N<sub>2</sub> a very stable and inert gas. Ammonia, NH<sub>3</sub> which is itself toxic, is the base material for the nitrogen chemistry and is one of the most produced chemicals in the world. From this, for example fertilizers and explosives are made.",
    general_properties: {
      name: "Nitrogen",
      atomic_number: 7,
      group: 15,
      period: 2,
      block: "P",
      cas_number: "7727-37-9",
      symbol: "N",
    },
    particles: {
      electrons: 7,
      protons: 7,
      neutrons: 7,
    },
    overview: {
      latin_name: "Nitrogenium",
      discovery: 1772,
      discoverer: "Daniel Rutherford, Antonie Laurent Lavoisier",
    },
    atomic_properties: {
      atomic_weight: 14.007,
      oxidation_states: [-3, -2, -1, 1, 2, 3, 4, 5],
      electron_shell_configuration: "K2 L5",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>3</sup></p>",
      atomic_radius: 56,
      covalent_radius: 71,
      van_der_walls_radius: 155,
      crystall_structure: "Hexagonal",
    },
    thermodynamic_properties: {
      boiling_point: "-195.79℃",
      melting_point: "-210.1℃",
      phase: "Gas",
      fusion_heat: 0.36,
      specific_heat: 1040,
      vaporization_heat: 2.79,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>1.12•10<sup>-2</sup><p>",
      density: 1.251,
      thermal_conductivity: 0.02583,
      sound_speed: 333.6,
      refrective_index: 1.000298,
    },
    reactivity: {
      electronegativity: 3.04,
      valence: 3,
      electron_affinity: 7,
      ionization_energy: 1402.3,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 1.91,
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagentic",
      volume_magnetic_suspectibility: "<p>-6.8•10<sup>-9</sup></p>",
      mass_magnetic_suspectibility: "<p>-5.4•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>-1.5•10<sup>-10</sup></p>",
    },
    prevalence: {
      universe: "0.10%",
      sun: "0.10%",
      meteorites: "0.14%",
      earth_crust: "0.002%",
      ocean: "0.000050%",
      human: "2.60%",
    },
  },
  {
    id: 8,
    neighbour: ["Nitrogen", "Fluorine"],
    description:
      "Oxygen, a very reactive gas, is the most abundant element on Earth. It is part of very many natural compounds,in minerals as in organic material and of course in water, H<sub>2</sub>O. Combustion usually is a reaction of a material with Oxygen. Elemental oxygen in the form of O<sub>2</sub> is to 21% part of our air and is used by humans and animals for respiration. it is produced by plants doing photosynthesis, most of it by algae in the sea and by forest on land. O<sub>3</sub> is Ozone, a poisonous gas, which in a high atmospheric layer blocks otherwise deadly UV rays from the Sun.",
    general_properties: {
      name: "Oxygen",
      atomic_number: 8,
      group: 16,
      period: 2,
      block: "P",
      cas_number: "7782-44-7",
      symbol: "O",
    },
    particles: {
      electrons: 8,
      protons: 8,
      neutrons: 8,
    },
    overview: {
      latin_name: "Oxygenium",
      discovery: 1774,
      discoverer: "Joseph Priestley",
    },
    atomic_properties: {
      atomic_weight: 15.999,
      oxidation_states: [-2, -1, 1, 2],
      electron_shell_configuration: "K2 L6",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>4</sup></p>",
      atomic_radius: 48,
      covalent_radius: 66,
      van_der_walls_radius: 152,
      gas_atom_multiplicities: 2,
      crystall_structure: "Cubic (Face-Centered)",
    },
    thermodynamic_properties: {
      boiling_point: "-182.9℃",
      melting_point: "-218.3℃",
      phase: "Gas",
      fusion_heat: 0.222,
      specific_heat: 919,
      vaporization_heat: 3.41,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>1.12•10<sup>-2</sup><p>",
      density: 1.429,
      thermal_conductivity: 0.02658,
      sound_speed: 317.5,
      refrective_index: 1.000271,
    },
    reactivity: {
      electronegativity: 3.44,
      valence: 2,
      electron_affinity: 141,
      ionization_energy: 1313.9,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.00028,
    },
    electromagnetic_properties: {
      magnetic_type: "Paramagnetic",
      volume_magnetic_suspectibility: "<p>1.90772•10<sup>-9</sup></p>",
      mass_magnetic_suspectibility: "<p>1.335•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>4.27184•10<sup>-10</sup></p>",
    },
    prevalence: {
      universe: "1.00%",
      sun: "0.90%",
      meteorites: "40%",
      earth_crust: "46%",
      ocean: "86%",
      human: "61%",
    },
  },
  {
    id: 9,
    neighbour: ["Oxygen", "Neon"],
    description:
      "Flourine is the most chemically aggressive element. In pure form it is a pale yellow-green F<sub>2</sub> Gas. It is extremely toxic and reacts with nearly everything, in most cases very violently. At contact with water,it forms the very caustic hydrofluoric acid, HF. Its salts(fluorides),especially fluorite(Calcium Fluoride,CaF<sub>2</sub>) frequently occure in nature as minerals. Fluoride is needed for bones and teeth, but quickly becomes poisonous if the dose is too high.",
    general_properties: {
      name: "Fluorine",
      atomic_number: 9,
      group: 17,
      period: 2,
      block: "P",
      cas_number: "7782-41-4",
      symbol: "F",
    },
    particles: {
      electrons: 9,
      protons: 9,
      neutrons: 10,
    },
    overview: {
      latin_name: "Fluorine",
      discovery: 1886,
      discoverer: "Henri Moissan",
    },
    atomic_properties: {
      atomic_weight: 18.998403163,
      oxidation_states: [-1],
      electron_shell_configuration: "K2 L7",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>5</sup></p>",
      atomic_radius: 42,
      covalent_radius: 57,
      van_der_walls_radius: 147,
      gas_atom_multiplicities: 2,
      crystall_structure: "Cubic (Face-Centered)",
    },
    thermodynamic_properties: {
      boiling_point: "-188.12℃",
      melting_point: "-219.6℃",
      phase: "Gas",
      fusion_heat: 0.26,
      specific_heat: 824,
      vaporization_heat: 3.27,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>1.12•10<sup>-2</sup><p>",
      density: 1.696,
      thermal_conductivity: 0.0277,
      refrective_index: 1.000195,
    },
    reactivity: {
      electronegativity: 3.98,
      valence: 1,
      electron_affinity: 328,
      ionization_energy: 1681,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.0096,
    },
    prevalence: {
      universe: "1.00%",
      sun: "0.90%",
      meteorites: "40%",
      earth_crust: "46%",
      ocean: "86%",
      human: "61%",
    },
  },
  {
    id: 10,
    neighbour: ["Fluorine", "Sodium"],
    description:
      "Neon is colorless,odorless,inert monatomic gas under standard conditions, with about two-thirds the density of air. It was discovered(along Krypton and Xenon) in 1898 as one of the three residual rare inert elements remaining in dry air,after nitrogen,oxygen,argon and carbon dioxide were removed. Neon was the second of these rare gases to be discovered and was immediately recognized as a new element from its bright red emission spectrum.",
    general_properties: {
      name: "Neon",
      atomic_number: 10,
      group: 18,
      period: 2,
      block: "P",
      cas_number: "7440-01-9",
      symbol: "Ne",
    },
    particles: {
      electrons: 10,
      protons: 10,
      neutrons: 10,
    },
    overview: {
      latin_name: "Neon",
      discovery: 1898,
      discoverer: "Sir William Ramsay, Morris William Travers",
    },
    atomic_properties: {
      atomic_weight: 20.1797,
      electron_shell_configuration: "K2 L8",
      electron_configuration:
        "<p>1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup></p>",
      gas_atom_multiplicities: 1,
      atomic_radius: 38,
      covalent_radius: 58,
      van_der_walls_radius: 154,
      crystall_structure: "Cubic (Face-Centered)",
    },
    thermodynamic_properties: {
      boiling_point: "-246.08℃",
      melting_point: "-246.59℃",
      phase: "Gas",
      fusion_heat: 0.34,
      specific_heat: 1030,
      vaporization_heat: 1.75,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>2.24•10<sup>-2</sup><p>",
      density: 0.9,
      thermal_conductivity: 0.0491,
      refrective_index: 1.000067,
      sound_speed: 936,
    },
    reactivity: {
      valence: 0,
      ionization_energy: 2080.7,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.04,
    },
    prevalence: {
      universe: "1.00%",
      sun: "0.90%",
      meteorites: "40%",
      earth_crust: "46%",
      ocean: "86%",
      human: "61%",
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagnetic",
      mass_magnetic_suspectibility: "-3.69•10<sup>-9</sup>",
      molar_magnetic_suspectibility: "-4.1•10<sup>-9</sup>",
      volume_magnetic_suspectibility: "-8.27•10<sup>-11</sup>",
    },
  },
];
