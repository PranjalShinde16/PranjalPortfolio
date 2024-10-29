import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PNavBar } from "./PNavBar";
import { PBanner } from "./PBanner";
import { PSkills } from "./PSkills";
import { PProjects } from "./PProjects";
import { PContact } from "./PContact";
import { PFooter } from "./PFooter";

export const PranjalPortfolio = () => {
  return (
    <div className="App">
      <PNavBar />
      <PBanner />
      <PSkills />
      <PProjects />
      <PContact />
      <PFooter />
    </div>
  );
}
