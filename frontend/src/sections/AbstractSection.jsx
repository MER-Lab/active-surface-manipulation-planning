import VideoPlaceholder from '../components/VideoPlaceholder'
import './AbstractSection.css'

// Served from public/videos/ (not imported) since it's a large binary that
// shouldn't go through the JS bundler.
const planningVideo = `${import.meta.env.BASE_URL}videos/PlanningFormulation.mp4`

function AbstractSection({ abstract, caption }) {
  return (
    <section className="section abstract-section">
      <div className="container">
        <h2 className="section-heading">Abstract</h2>
        {abstract ? <p className="abstract-text">{abstract}</p> : null}
        <VideoPlaceholder
          aspectRatio="16 / 9"
          label="Planning formulation video coming soon"
          src={planningVideo}
        />
        {caption ? <p className="planning-formulation-caption">{caption}</p> : null}
      </div>
    </section>
  )
}

export default AbstractSection
