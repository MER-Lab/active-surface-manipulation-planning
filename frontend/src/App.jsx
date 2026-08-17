import PublicationHeader from './components/PublicationHeader'
import ExperimentVideoSelector from './components/ExperimentVideoSelector'
import TeaserSection from './sections/TeaserSection'
import AbstractSection from './sections/AbstractSection'
import IntroVideosSection from './sections/IntroVideosSection'
import PlanningFormulationSection from './sections/PlanningFormulationSection'
import OpensourceSection from './sections/OpensourceSection'
import { paperInfo } from './data/paperInfo'
import { physicalExperiments, simulationExperiments } from './data/experimentsData'

function App() {
  return (
    <main>
      <PublicationHeader
        title={paperInfo.title}
        authors={paperInfo.authors}
        affiliations={paperInfo.affiliations}
        links={paperInfo.links}
      />
      <TeaserSection caption={paperInfo.teaserCaption} />
      {/* <AbstractSection abstract={paperInfo.abstract} /> */}
      <IntroVideosSection />
      <PlanningFormulationSection caption={paperInfo.planningFormulationCaption} />
      <ExperimentVideoSelector
        title="Physical Experiments in SE(3) using the Variable-Friction Gripper"
        experiments={physicalExperiments}
        videoSide="left"
      />
      <ExperimentVideoSelector
        title="Simulation Experiments in SE(3) with the BOP Gripper"
        experiments={simulationExperiments}
        videoSide="right"
      />
      <OpensourceSection />
    </main>
  )
}

export default App
