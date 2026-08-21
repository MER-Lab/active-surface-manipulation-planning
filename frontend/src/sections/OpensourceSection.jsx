import VideoPlaceholder from '../components/VideoPlaceholder'
import PublicationLinks from '../components/PublicationLinks'
import { opensourceHighlights } from '../data/experimentsData'
import { paperInfo } from '../data/paperInfo'
import './OpensourceSection.css'

function VideoTriptych({ items }) {
  return (
    <div className="triptych-grid">
      {items.map((item) => (
        <div className="triptych-item" key={item.key}>
          <VideoPlaceholder aspectRatio="4 / 3" label="Video coming soon" src={item.src} />
          {item.title ? <h3 className="triptych-title">{item.title}</h3> : null}
          <PublicationLinks
            links={[{ label: 'Watch full walkthrough', href: item.walkthroughHref }]}
          />
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
        <PublicationLinks
          links={paperInfo.links.filter((link) => link.label === 'Code')}
        />
      </div>
    </section>
  )
}

export default OpensourceSection
