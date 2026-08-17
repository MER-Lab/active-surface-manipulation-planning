import VideoPlaceholder from '../components/VideoPlaceholder'
import './IntroVideosSection.css'
const vfVideo = `${import.meta.env.BASE_URL}videos/VF_intro.mp4`
const bopVideo = `${import.meta.env.BASE_URL}videos/BOP_intro.mp4`

const ITEMS = [
  { key: 'vf_gripper', title: 'Variable Friction (VF) Gripper', src: vfVideo },
  { key: 'bop_gripper', title: 'Belt Orienting Phalanges (BOP) Gripper', src: bopVideo },
] 



function IntroVideosSection() {
  return (
    <section className="section intro-videos-section">
      <h2 className="section-heading">Active Surface Grippers: Actuation mechanism</h2>
      <div className="container intro-videos-grid">
        {ITEMS.map((item) => (
          <div className="intro-video-item" key={item.key}>
            
            <VideoPlaceholder aspectRatio="4 / 3" label={`${item.title} video coming soon` }  src={item.src}/>
            <h3 className="intro-video-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}


export default IntroVideosSection
