import VideoPlaceholder from '../components/VideoPlaceholder'
import { opensourceHighlights, generalizedPlannerHighlights } from '../data/experimentsData'
import './OpensourceSection.css'

function VideoTriptych({ items, withTitles }) {
  return (
    <div className="triptych-grid">
      {items.map((item) => (
        <div className="triptych-item" key={item.key}>
          <VideoPlaceholder aspectRatio="4 / 3" label="Video coming soon" src={item.src} />
          {withTitles && item.title ? <h3 className="triptych-title">{item.title}</h3> : null}
        </div>
      ))}
    </div>
  )
}

function OpensourceSection() {
  return (
    <section className="section opensource-section">
      <div className="container">
        <h2 className="section-heading">Opensource Contribution</h2>
        <VideoTriptych items={opensourceHighlights} />

        <h3 className="opensource-subheading">Generalizable Planning Framework</h3>
        <VideoTriptych items={generalizedPlannerHighlights} withTitles />
      </div>
    </section>
  )
}

export default OpensourceSection
