import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Solution } from "./sections/Solution";
import { Students } from "./sections/Students";
import { Employers } from "./sections/Employers";
import { QuickTasks } from "./sections/QuickTasks";
import { Security } from "./sections/Security";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Network } from "./sections/Network";
import { Journey } from "./sections/Journey";
import { Technology } from "./sections/Technology";
import { Comparison } from "./sections/Comparison";
import { CTA } from "./sections/CTA";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Students />
        <Employers />
        <QuickTasks />
        <Security />
        <ProductShowcase />
        <Network />
        <Journey />
        <Technology />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
