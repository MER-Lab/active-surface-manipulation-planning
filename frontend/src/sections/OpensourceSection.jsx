import VideoPlaceholder from '../components/VideoPlaceholder'
import { opensourceHighlights } from '../data/experimentsData'
import './OpensourceSection.css'

function VideoTriptych({ items }) {
  return (
    <div className="triptych-grid">
      {items.map((item) => (
        <div className="triptych-item" key={item.key}>
          <VideoPlaceholder aspectRatio="4 / 3" label="Video coming soon" src={item.src} />
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
      </div>
    </section>
  )
}

export default OpensourceSection
