// @ts-nocheck
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";
import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Experience from "./sections/Experience";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import CanvasLoader from "./layout/Loader";

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
export { default as Resume } from "./sections/Resume";
export type TNavLink = { id: string; title: string };
export type TService = { title: string; icon: string };
export type TTechnology = { name: string; icon: string };
export type TProject = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};
export type TExperience = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};
export type TResumeItem = {
  title: string;
  institution: string;
  date: string;
  description: string;
};
