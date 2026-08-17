import './AbstractSection.css'

function AbstractSection({ abstract }) {
  return (
    <section className="section abstract-section">
      <div className="container">
        <h2 className="section-heading">Abstract</h2>
        <p className="abstract-text">{abstract}</p>
      </div>
    </section>
  )
}

export default AbstractSection
