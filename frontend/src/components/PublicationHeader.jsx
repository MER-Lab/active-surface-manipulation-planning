import PublicationLinks from './PublicationLinks'
import './PublicationHeader.css'

function AuthorList({ authors }) {
  return (
    <p className="pub-authors">
      {authors.map((author, i) => (
        <span key={author.name + i} className={author.placeholder ? 'is-placeholder' : undefined}>
          {author.name}
          <sup>{author.affiliations.join(',')}</sup>
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

function AffiliationList({ affiliations }) {
  return (
    <p className="pub-affiliations">
      {affiliations.map((aff, i) => (
        <span key={aff.id} className={aff.placeholder ? 'is-placeholder' : undefined}>
          <sup>{aff.id}</sup>
          {aff.name}
          {i < affiliations.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}

function PublicationHeader({ title, authors, affiliations, links }) {
  return (
    <header className="pub-header container">
      <h1 className="pub-title">{title}</h1>
      <AuthorList authors={authors} />
      <AffiliationList affiliations={affiliations} />
      <PublicationLinks links={links} />
    </header>
  )
}

export default PublicationHeader
