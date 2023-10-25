import ElementDetailsProps from "@/types/ElementTypes";

export const RowOneElem: ElementDetailsProps[] = [
  {
    id: 1,
    neighbour: ["Oganesson", "Helium"],
    description:
      "Hydrogen is the lightest and, the simplest element and with a ratio of 80%, it is the main ingridient in the observable universe. 20% consist of Helium, the ratio of the heavier elements is below 1%. Most of the stars including our sun, generates energy by fusion of hydrogen to helium. Hydrogen is quiet abundant in earth too, opposite to helium, because it is very reactive elemnet and so is part of many different compounds.",
    general_properties: {
      name: "Hydrogen",
      atomic_number: 1,
      group: 1,
      period: 1,
      block: "S",
      cas_number: "1333-74-0",
      symbol: "H",
    },
    particles: {
      electrons: 1,
      protons: 1,
      neutrons: 1,
    },
    overview: {
      latin_name: "Hydrogenium",
      discovery: 1766,
      discoverer: "Henry Cavendish",
    },
    atomic_properties: {
      atomic_weight: 1.008,
      oxidation_states: [-1, +1],
      electron_shell_configuration: "K1",
      electron_configuration: "<p>1s<sup>1</sup></p>",
      gas_atom_multiplicities: 2,
      atomic_radius: 53,
      covalent_radius: 31,
      van_der_walls_radius: 120,
      crystall_structure: "Hexagonal",
    },
    thermodynamic_properties: {
      boiling_point: "-252.87℃",
      melting_point: "-259.17℃",
      phase: "Gas",
      fusion_heat: 0.558,
      specific_heat: 14300,
      vaporization_heat: 0.452,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>1.12•10<sup>-2</sup><p>",
      refrective_index: 1.000132,
      sound_speed: 1270,
      thermal_conductivity: 0.1805,
    },
    reactivity: {
      electronegativity: 2.2,
      valence: 1,
      electron_affinity: 72.8,
      ionization_energy: 1312,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.332,
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagentic",
      volume_magnetic_suspectibility: "<p>-2.23•10<sup>-9</sup></p>",
      mass_magnetic_suspectibility: "<p>-2.48•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>-4.99•10<sup>-9</sup></p>",
    },
    prevalence: {
      universe: "75.00%",
      sun: "75.00%",
      ocean: "11%",
      human: "10%",
      earth_crust: "0.15%",
      meteorites: "2%",
    },
  },
  {
    id: 2,
    neighbour: ["Hydrogen", "Lithium"],
    description:
      "About 20% of the visible matter in the universe is helium, but because it is so light and does not react chemically with anything, it escaped from earth into space, when the solar system was young. So now it is quite rare here. Nonetheless it has multiple applications, from making balloons fly to coolingthings to extremely low temperatures with liquid helium.",
    general_properties: {
      name: "Helium",
      atomic_number: 2,
      group: 18,
      period: 1,
      block: "P",
      cas_number: "7440-59-7",
      symbol: "He",
    },
    particles: {
      electrons: 2,
      protons: 2,
      neutrons: 2,
    },
    overview: {
      latin_name: "Helium",
      discovery: 1868,
      discoverer: "Sir Edward Frankland, Pierre Janssen, Normal Lockver",
    },
    atomic_properties: {
      atomic_weight: 4.002602,
      electron_shell_configuration: "K2",
      electron_configuration: "<p>1s<sup>2</sup></p>",
      gas_atom_multiplicities: 1,
      atomic_radius: 31,
      covalent_radius: 28,
      van_der_walls_radius: 140,
      crystall_structure: "Hexagonal",
    },
    thermodynamic_properties: {
      boiling_point: "-268.93℃",
      melting_point: "-272℃",
      phase: "Gas",
      fusion_heat: 0.02,
      specific_heat: 5193.1,
      vaporization_heat: 0.083,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "<p>2.242•10<sup>-2</sup></p>",
      refrective_index: 1.000035,
      sound_speed: 970,
      thermal_conductivity: 0.1513,
    },
    reactivity: {
      valence: 0,
      ionization_energy: 1312,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.007,
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagentic",
      volume_magnetic_suspectibility: "<p>-1.05•10<sup>-9</sup></p>",
      mass_magnetic_suspectibility: "<p>-5.9•10<sup>-9</sup></p>",
      molar_magnetic_suspectibility: "<p>-2.36•10<sup>-11</sup></p>",
    },
    prevalence: {
      universe: "23.00%",
      sun: "23.00%",
      ocean: "<p>7.3•10<sup>-10</sup>%</p>",
      human: "0%",
      earth_crust: "<p>5.5•10<sup>-7</sup>%</p>",
      meteorites: "0%",
    },
  },
];
