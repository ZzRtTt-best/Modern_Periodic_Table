"use client";
import React, { useEffect, useState, useContext } from "react";
import Navbar from "@/components/Navbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import ElementDetailsProps from "@/types/ElementTypes";
import {
  AtomicProperty,
  AtomStructure,
  Description,
  EMProperty,
  ExternalLink,
  GeneralInfo,
  HealthSafety,
  MaterialProperty,
  NeuclearProperty,
  Overview,
  Particles,
  Prevalence,
  Reactivity,
  ThermoProperty,
} from "@/components/Properties";
import getElementData from "@/helper/getElementData";
import Particle from "@/components/Particle";
import { motion } from "framer-motion";
import GetOrbit from "@/components/GetOrbit";

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [elem, setElem] = useState<ElementDetailsProps | null>(null);
  const { id }: { id: string } = useParams();
  const prevId = parseInt(id) - 1 === 0 ? 116 : parseInt(id) - 1,
    nextId = parseInt(id) + 1 === 119 ? 1 : parseInt(id) + 1;

  useEffect(() => {
    setElem(getElementData(parseInt(id)));
  }, [id]);

  if (typeof window !== "undefined") {
    if (elem) {
      window.document.title = `${elem?.general_properties.name} (${elem?.general_properties.symbol}) - ${elem?.general_properties.atomic_number} `;
    } else {
      window.document.title = `Modern Periodic Table of Elements`;
    }
  }

  return (
    <>
      <div
        className={`flex flex-col min-h-screen w-full ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        } justify-start items-center`}
      >
        <div className="absolute w-full min-h-screen">
          <Particle number={id} />
        </div>
        <div
          className={`flex flex-col w-full ${
            theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
          } justify-start items-center z-[5] bg-opacity-60 backdrop-blur-require`}
        >
          <Navbar />
          <div
            className={`w-full px-10 flex justify-between items-center mt-5 text-lg tracking-wider ${
              theme === "dark" ? "text-white" : "text-black"
            } max-sm:px-5`}
          >
            <Link
              href={`/elements/${prevId}`}
              className="flex justify-between items-center"
            >
              <BsArrowLeft className="cursor-pointer text-xl" />
              <p className="ml-2 text-base max-sm:ml-0">{elem?.neighbour[0]}</p>
            </Link>
            <p className="w-full text-center mx-5 max-sm:hidden">
              {elem && (
                <p>
                  {elem?.general_properties.name}{" "}
                  {`(${elem?.general_properties.symbol})`}
                </p>
              )}
            </p>
            <Link
              href={`/elements/${nextId}`}
              className="flex justify-between items-center"
            >
              <p className="mr-2 text-base max-sm:mr-0">{elem?.neighbour[1]}</p>
              <BsArrowRight className="cursor-pointer text-xl" />
            </Link>
          </div>
        </div>
        {!elem ? (
          <div className="relative w-full h-auto my-2 p-6 flex justify-between items-center z-[5] max-sm:flex-col">
            <div
              className={`relative w-1/3 min-h-[79vh] flex justify-start flex-col items-center ${
                theme === "dark"
                  ? "bg-neutral-950 before:from-neutral-950 before:via-[rgba(255,255,255,0.05)] before:to-neutral-950"
                  : "bg-[#d9d9d9] before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.1)] before:to-[#d9d9d9]"
              } gap-2 rounded-[4px] shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-l before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.05)] before:to-[#d9d9d9] backdrop-blur-sm overflow-hidden before:animate-skeleton`}
            ></div>
            <div
              className={`relative w-2/3 min-h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-3 rounded-[4px] shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-r before:from-10% before:via-20% before:to-100% backdrop-blur-sm before:animate-skeleton overflow-hidden ${
                theme === "dark"
                  ? "bg-neutral-950 before:from-neutral-950 before:via-[rgba(255,255,255,0.05)] before:to-neutral-950"
                  : "bg-[#d9d9d9] before:from-[#d9d9d9] before:via-[rgba(0,0,0,0.1)] before:to-[#d9d9d9]"
              }`}
            ></div>
          </div>
        ) : (
          <div className="relative w-full h-auto my-2 p-6 flex justify-between items-start z-[5] max-sm:flex-col">
            <div
              className={`w-1/3 h-[79vh] flex justify-start flex-col items-center ${
                theme === "dark" ? "text-text_primary" : "text-text_secondary"
              } gap-2 max-[1200px]:w-1/2 max-sm:w-full`}
            >
              <motion.div
                className={`flex justify-center flex-col items-center ${
                  theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
                } shadow-md w-full h-[66vh] rounded-sm p-5 bg-opacity-60 backdrop-blur-require`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              >
                <div className="w-full h-full flex justify-center items-center max-[1200px]:scale-[0.70] max-sm:scale-[0.60] scale-95 max-sm:h-[500px]">
                  {elem && (
                    <>
                      <GetOrbit id={id} />
                      <div
                        className={`absolute h-[35px] w-[35px] ${
                          theme === "dark"
                            ? "bg-bg_light_placeholder text-text_secondary"
                            : "bg-bg_dark_placeholder text-text_primary"
                        } flex justify-center items-center rounded-full z-10`}
                      >
                        {elem?.general_properties.symbol}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
              {elem && <Particles {...elem.particles} />}
              {elem.external_links && <ExternalLink {...elem.external_links} />}
            </div>
            <div className="w-2/3 h-[79vh] ml-5 overflow-y-scroll flex flex-col justify-start items-center gap-3 max-[1200px]:w-1/2 max-sm:w-full max-sm:ml-0 max-sm:mt-5 max-sm:h-[79vh]">
              {elem && (
                <>
                  <Description description={elem.description} />
                  <Overview {...elem.overview} />
                  <GeneralInfo {...elem.general_properties} />
                  <AtomicProperty {...elem.atomic_properties} />
                  {elem.atom_structure && (
                    <AtomStructure {...elem.atom_structure} />
                  )}
                  {elem.thermodynamic_properties && (
                    <ThermoProperty {...elem.thermodynamic_properties} />
                  )}
                  {elem.material_properties && (
                    <MaterialProperty {...elem.material_properties} />
                  )}
                  {elem.reactivity && <Reactivity {...elem.reactivity} />}
                  {elem.electromagnetic_properties && (
                    <EMProperty {...elem.electromagnetic_properties} />
                  )}
                  <NeuclearProperty
                    property={elem.neuclear_properties}
                    name={elem?.general_properties.symbol}
                  />
                  {elem.health_safety && (
                    <HealthSafety {...elem.health_safety} />
                  )}
                  {elem.prevalence && <Prevalence {...elem.prevalence} />}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
