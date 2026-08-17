import { useState } from 'react'
import VideoPlaceholder from './VideoPlaceholder'
import './ExperimentVideoSelector.css'

/**
 * A titled section with one video on one side and a vertical list of
 * experiment-select buttons on the other. The first experiment is
 * selected (and its video shown) by default; clicking a button swaps
 * the video. Used for both the physical (VF) and simulation (BOP)
 * experiment sections — pass `videoSide="right"` to mirror it.
 */
function ExperimentVideoSelector({ title, experiments, videoSide = 'left' }) {
  const [selected, setSelected] = useState(0)
  const active = experiments[selected]

  return (
    <section className="section experiment-selector-section">
      <div className="container">
        <h2 className="section-heading">{title}</h2>
        <div className={`experiment-layout experiment-layout--video-${videoSide}`}>
          <div className="experiment-video">
            {/* key={active.key} remounts the player on selection change so a
                previous video's load failure doesn't stick to the new one. */}
            <VideoPlaceholder
              key={active.key}
              aspectRatio="16 / 9"
              label={`${active.label} coming soon`}
              src={active.src}
            />
          </div>
          <div className="experiment-buttons" role="tablist" aria-label={title}>
            {experiments.map((exp, i) => (
              <button
                key={exp.key}
                type="button"
                role="tab"
                aria-selected={i === selected}
                className={`experiment-button${i === selected ? ' is-active' : ''}`}
                onClick={() => setSelected(i)}
              >
                {exp.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperimentVideoSelector
