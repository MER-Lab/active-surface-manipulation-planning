import { useState } from 'react'
import './VideoPlaceholder.css'

/**
 * Placeholder for a video slot. Pass `src` once the real asset exists —
 * until then (or if the file at `src` fails to load) this renders an empty
 * framed box at the correct aspect ratio so the surrounding layout doesn't
 * shift when the video is added.
 */
function VideoPlaceholder({ src, aspectRatio = '16 / 9', label }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <video
        className="video-placeholder video-placeholder--media"
        style={{ aspectRatio }}
        src={src}
        controls
        playsInline
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className="video-placeholder" style={{ aspectRatio }}>
      <span className="video-placeholder__label">{label ?? 'Video coming soon'}</span>
    </div>
  )
}

export default VideoPlaceholder
