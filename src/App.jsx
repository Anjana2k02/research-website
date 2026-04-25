import reportHtml from './content/dynamic-route-report.html?raw'
import './App.css'

const sections = [
  { href: '#_Toc228006045', label: 'Abstract' },
  { href: '#_Toc228006049', label: 'Introduction' },
  { href: '#_Toc228006050', label: 'Methodology' },
  { href: '#_Toc228006051', label: 'Results' },
  { href: '#_Toc228006052', label: 'Conclusion' },
  { href: '#_Toc228006053', label: 'References' },
]

function App() {
  return (
    <main className="site-shell">
      <header className="paper-hero" id="top">
        <div className="paper-hero__copy">
          <p className="eyebrow">Research Paper</p>
          <h1>
            Dynamic Route Optimization using Sensor-Based User Interest
            Detection with Indoor Mapping
          </h1>
          <p className="hero-summary">
            The Dynamic Route Report covers BLE indoor positioning, activity
            recognition, interest detection, and adaptive route generation for
            intelligent indoor navigation.
          </p>
          <div className="hero-actions" aria-label="Paper actions">
            <a className="button button--primary" href="#paper">
              Read Paper
            </a>
            <a
              className="button button--secondary"
              href="/doc/Dynamic_Route_Report.docx"
              download
            >
              Download DOCX
            </a>
          </div>
        </div>

        <dl className="paper-facts" aria-label="Paper details">
          <div>
            <dt>Group</dt>
            <dd>25-26J-287</dd>
          </div>
          <div>
            <dt>Author</dt>
            <dd>Indunil W W A D A</dd>
          </div>
          <div>
            <dt>Student ID</dt>
            <dd>IT22002624</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Indoor navigation</dd>
          </div>
        </dl>
      </header>

      <section className="reader-layout" aria-label="Dynamic Route Report">
        <aside className="toc-panel" aria-label="Report sections">
          <p className="toc-title">Sections</p>
          <nav>
            {sections.map((section) => (
              <a key={section.href} href={section.href}>
                {section.label}
              </a>
            ))}
          </nav>
          <a className="back-to-top" href="#top">
            Back To Top
          </a>
        </aside>

        <article
          id="paper"
          className="paper-document"
          dangerouslySetInnerHTML={{ __html: reportHtml }}
        />
      </section>
    </main>
  )
}

export default App
