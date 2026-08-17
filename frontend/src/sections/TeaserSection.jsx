import VideoPlaceholder from '../components/VideoPlaceholder'
import './TeaserSection.css'

// Served from public/videos/ (not imported) since it's a large binary that
// shouldn't go through the JS bundler.
const mainVideo = `${import.meta.env.BASE_URL}videos/Opening.mp4`

function TeaserSection({ caption }) {
  return (
    <section className="section teaser-section">
      <div className="container">
        <VideoPlaceholder aspectRatio="21 / 9" label="Main paper video (21:9)" src={mainVideo} />
        <p className="teaser-caption">{caption}</p>
      </div>
    </section>
  )
}

export default TeaserSection
