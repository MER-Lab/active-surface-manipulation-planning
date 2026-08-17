import VideoPlaceholder from '../components/VideoPlaceholder'
import './PlanningFormulationSection.css'

// Served from public/videos/ (not imported) since it's a large binary that
// shouldn't go through the JS bundler.
const planningVideo = `${import.meta.env.BASE_URL}videos/PlanningFormulation.mp4`

function PlanningFormulationSection({ caption }) {
  return (
    <section className="section planning-formulation-section">
      <div className="container">
        <h2 className="section-heading">Planning Formulation</h2>
        <VideoPlaceholder
          aspectRatio="21 / 9"
          label="Planning formulation video coming soon"
          src={planningVideo}
        />
        {caption ? <p className="planning-formulation-caption">{caption}</p> : null}
      </div>
    </section>
  )
}

export default PlanningFormulationSection
