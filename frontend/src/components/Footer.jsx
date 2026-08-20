import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          Website template modified from{' '}
          <a href="https://nerfies.github.io/" target="_blank" rel="noreferrer">
            Nerfies
          </a>
          .
        </p>
        <p>
          This website is licensed under a{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
