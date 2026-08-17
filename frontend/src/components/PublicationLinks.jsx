import './PublicationLinks.css'

function PublicationLinks({ links }) {
  return (
    <div className="pub-links" role="list">
      {links.map(({ label, href }) =>
        href ? (
          <a
            key={label}
            className="pub-button"
            href={href}
            target="_blank"
            rel="noreferrer"
            role="listitem"
          >
            {label}
          </a>
        ) : (
          <span
            key={label}
            className="pub-button pub-button--disabled"
            role="listitem"
            aria-disabled="true"
            title="Not yet available"
          >
            {label}
          </span>
        ),
      )}
    </div>
  )
}

export default PublicationLinks
