import { useState, useEffect } from 'react';
import literatureSurveyData from './pages/litreture-survey.json';
import researchGapData from './pages/research-gap.json';
import researchProblemSolutionData from './pages/Research-0Problem-Solution.json';
import researchObjectivesData from './pages/Research-Objectives.json';
import methodologyData from './pages/methodology.json';

const stats = [
  { label: 'Active studies', value: '42' },
  { label: 'Peer collaborators', value: '17' },
  { label: 'Datasets tracked', value: '128' },
]

const timeline = [
  {
    title: 'Project Proposal',
    period: 'March 2021',
    detail: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
    marks: 'Marks: 6, 6%',
  },
  {
    title: 'Progress Presentation I',
    period: 'June 2021',
    detail: 'Progress Presentation I reviews the 50% completion status.',
    marks: 'Marks: 6, 6%',
  },
  {
    title: 'Research Paper',
    period: 'July 2021',
    detail: 'Describes contribution to existing knowledge.',
    marks: 'Marks: 10, 10%',
  },
  {
    title: 'Progress Presentation II',
    period: 'September 2021',
    detail: 'Reviews 90% completion status & Poster presentation.',
    marks: 'Marks: 18, 18%',
  },
  {
    title: 'Website Assessment',
    period: 'March 2026',
    detail: 'Helps promote research project.',
    marks: 'Marks: 2, 2%',
  },
  {
    title: 'Logbook',
    period: 'April 2026',
    detail: 'Status validation, documents 1 & 2.',
    marks: 'Marks: 3, 3%',
  },
  {
    title: 'Final Report',
    period: 'April 2026',
    detail: 'Evaluates completed project.',
    marks: 'Marks: 19, 19%',
  },
  {
    title: 'Final Presentation & Viva',
    period: 'May 2026',
    detail: 'Individual assessment.',
    marks: 'Marks: 20',
    isFinal: true,
  },
]

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProjectScopeOpen, setIsProjectScopeOpen] = useState(false);

  const literatureSurveyParagraphs = (literatureSurveyData?.paragraphs || [])
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const literatureSurveyReferences = (literatureSurveyData?.references || [])
    .map((reference) => ({
      id: Number(reference?.id),
      citation: String(reference?.citation || '').trim(),
    }))
    .filter((reference) => Number.isFinite(reference.id) && reference.citation.length > 0);

  const researchGapIntro = String(researchGapData?.intro || '').trim();
  const researchGapItems = (researchGapData?.gaps || [])
    .map((gap) => ({
      title: String(gap?.title || '').trim(),
      description: String(gap?.description || '').trim(),
    }))
    .filter((gap) => gap.title.length > 0 && gap.description.length > 0);

  const proposedProblemTitle = String(researchProblemSolutionData?.problem?.title || 'Proposed Problem').trim();
  const proposedProblemParagraphs = (researchProblemSolutionData?.problem?.paragraphs || [])
    .map((paragraph) => String(paragraph || '').trim())
    .filter(Boolean);

  const proposedSolutionTitle = String(researchProblemSolutionData?.solution?.title || 'Proposed Solution').trim();
  const proposedSolutionParagraphs = (researchProblemSolutionData?.solution?.paragraphs || [])
    .map((paragraph) => String(paragraph || '').trim())
    .filter(Boolean);

  const researchObjectives = (researchObjectivesData?.objectives || [])
    .map((objective) => ({
      title: String(objective?.title || '').trim(),
      description: String(objective?.description || '').trim(),
    }))
    .filter((objective) => objective.title.length > 0 && objective.description.length > 0);

  const methodologyOverview = (methodologyData?.overview || [])
    .map((paragraph) => String(paragraph || '').trim())
    .filter(Boolean);

  const methodologyComponents = (methodologyData?.components || [])
    .map((component) => String(component || '').trim())
    .filter(Boolean);

  const technologyShowcaseItems = [
    { name: 'Docker', icon: '/svg/docker-svgrepo-com.svg' },
    { name: 'Firebase', icon: '/svg/firebase-svgrepo-com.svg' },
    { name: 'Flutter', icon: '/svg/flutter-svgrepo-com.svg' },
    { name: 'Google Cloud', icon: '/svg/google-cloud-svgrepo-com.svg' },
    { name: 'PostgreSQL', icon: '/svg/pgsql-svgrepo-com.svg' },
    { name: 'Python', icon: '/svg/python.svg' },
    { name: 'Spring Boot', icon: '/svg/spring-boot-icon.svg' },
    { name: 'TensorFlow', icon: '/svg/tensorflow-svgrepo-com.svg' },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'project-scope', label: 'Project Scope', hasDropdown: true },
    { id: 'milestones', label: 'Milestones' },
    { id: 'downloads', label: 'Downloads', hasDropdown: true },
    { id: 'about-us', label: 'About Us' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const projectScopeItems = [
    { id: 'literature-survey', label: 'Literature Survey' },
    { id: 'research-gap', label: 'Research Gap' },
    { id: 'research-problem-solution', label: 'Research Problem & Solution' },
    { id: 'research-objectives', label: 'Research Objectives' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'technologies', label: 'Technologies' },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-[#1a1614] text-[#4a3b32] dark:text-[#eae6e1] font-sans transition-colors duration-300 scroll-smooth">
      <header className="sticky top-0 z-20 bg-white border-b border-[#e8dfd8] shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" onClick={() => setIsProjectScopeOpen(false)} className="shrink-0 text-2xl font-black tracking-tight text-[#6b4f3b]">
              Serendib
            </a>

            <div className="flex items-center gap-5">
              <nav className="hidden lg:flex items-center gap-7 text-base font-medium text-[#6b5a4f]">
                {navItems.map((item, index) => (
                  item.id === 'project-scope' ? (
                    <div key={item.label} className="relative">
                      <button
                        type="button"
                        onClick={() => setIsProjectScopeOpen((prev) => !prev)}
                        className="inline-flex items-center gap-1 text-[#6b5a4f] transition-colors hover:text-[#4f3d31]"
                        aria-expanded={isProjectScopeOpen}
                        aria-controls="project-scope-dropdown"
                      >
                        <span>{item.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mt-[2px] transition-transform ${isProjectScopeOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                      </button>

                      {isProjectScopeOpen ? (
                        <div id="project-scope-dropdown" className="absolute right-0 top-full mt-3 w-[300px] rounded-md border border-[#d8d8d8] bg-[#ececec] p-4 shadow-lg">
                          <div className="space-y-3 text-[34px] leading-none text-[#2f353a]">
                            {projectScopeItems.map((scopeItem) => (
                              <a
                                key={scopeItem.id}
                                href={`#${scopeItem.id}`}
                                onClick={() => setIsProjectScopeOpen(false)}
                                className="block text-[16px] font-medium leading-9 transition-colors hover:text-[#4f3d31]"
                              >
                                {scopeItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={`#${item.id}`}
                      onClick={() => setIsProjectScopeOpen(false)}
                      className={`inline-flex items-center gap-1 transition-colors hover:text-[#4f3d31] ${index === 0 ? 'text-[#5b4638] border-b-2 border-[#8c654b] pb-1' : ''}`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px]"><path d="m6 9 6 6 6-6" /></svg>
                      ) : null}
                    </a>
                  )
                ))}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/favicon.svg"
                  alt="Provided by logo"
                  className="h-9 w-9 rounded-md border border-[#d9d9d9] bg-white p-1"
                />

                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white border border-[#d8d8d8] shadow-sm hover:shadow-md transition-all text-[#4b4b4b]"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <nav className="mt-3 flex flex-wrap justify-end gap-4 pb-1 text-sm font-medium text-[#6b5a4f] lg:hidden">
            {navItems.map((item, index) => (
              item.id === 'project-scope' ? (
                <div key={`${item.label}-mobile`} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProjectScopeOpen((prev) => !prev)}
                    className="whitespace-nowrap inline-flex items-center gap-1 transition-colors hover:text-[#4f3d31]"
                    aria-expanded={isProjectScopeOpen}
                    aria-controls="project-scope-dropdown-mobile"
                  >
                    <span>{item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isProjectScopeOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                  </button>

                  {isProjectScopeOpen ? (
                    <div id="project-scope-dropdown-mobile" className="absolute right-0 top-full z-30 mt-2 w-[280px] rounded-md border border-[#d8d8d8] bg-[#ececec] p-4 shadow-lg">
                      <div className="space-y-2 text-[#2f353a]">
                        {projectScopeItems.map((scopeItem) => (
                          <a
                            key={`${scopeItem.id}-mobile`}
                            href={`#${scopeItem.id}`}
                            onClick={() => setIsProjectScopeOpen(false)}
                            className="block text-base font-medium leading-8 transition-colors hover:text-[#4f3d31]"
                          >
                            {scopeItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <a
                  key={`${item.label}-mobile`}
                  href={`#${item.id}`}
                  onClick={() => setIsProjectScopeOpen(false)}
                  className={`whitespace-nowrap inline-flex items-center gap-1 transition-colors hover:text-[#4f3d31] ${index === 0 ? 'text-[#5b4638]' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  ) : null}
                </a>
              )
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <section id="home" className="scroll-mt-28 mt-6">
          <article className="relative overflow-hidden rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] shadow-xl dark:shadow-2xl dark:shadow-black/40">
            <img
              src="/golden-museum-lighting.jpg"
              alt="Golden museum interior lighting"
              className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-8">
              <h1 className="max-w-4xl text-lg font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">
                Dynamic Route Optimization using Sensor-Based User Interest Detection with Indoor Mapping
              </h1>
            </div>
          </article>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white/85 dark:bg-[#2a2420]/80 backdrop-blur-sm p-5 shadow-sm transition-colors duration-300"
              >
                <p className="text-sm font-medium text-[#7a685c] dark:text-[#9e9187]">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="project-scope" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg transition-colors duration-300 lg:p-8">
          <h2 className="text-2xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">Project scope</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">This section stays in the same page. Detailed scope content can be developed next.</p>

          <div className="mt-6 grid gap-4">
            {projectScopeItems.map((scopeItem) => (
              <article
                key={scopeItem.id}
                id={scopeItem.id}
                className="scroll-mt-28 rounded-2xl border border-[#e8dfd8] dark:border-[#3a322c] bg-[#fcf9f5] dark:bg-[#2a2420] p-5"
              >
                <h3 className="text-lg font-semibold text-[#2b211c] dark:text-[#f2ebe4]">{scopeItem.label}</h3>

                {scopeItem.id === 'literature-survey' ? (
                  <div className="mt-3 space-y-4 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">
                    {literatureSurveyParagraphs.map((paragraph, index) => (
                      <p key={`lit-paragraph-${index}`}>{paragraph}</p>
                    ))}

                    {literatureSurveyReferences.length > 0 ? (
                      <div className="mt-6 border-t border-[#dfd4ca] pt-4 dark:border-[#3a322c]">
                        <h4 className="text-base font-semibold text-[#2b211c] dark:text-[#f2ebe4]">References</h4>
                        <ol className="mt-3 space-y-2">
                          {literatureSurveyReferences.map((reference) => (
                            <li key={`lit-ref-${reference.id}`} className="text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">
                              <span className="font-semibold text-[#4f3d31] dark:text-[#d9c8bb]">[{reference.id}]</span>{' '}
                              {reference.citation}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}
                  </div>
                ) : scopeItem.id === 'research-gap' ? (
                  <div className="mt-3 space-y-4">
                    {researchGapIntro ? (
                      <p className="text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">{researchGapIntro}</p>
                    ) : null}

                    {researchGapItems.length > 0 ? (
                      <div className="grid gap-3 md:grid-cols-3">
                        {researchGapItems.map((gap, index) => (
                          <article key={`research-gap-${index}`} className="rounded-xl border border-[#e2d5ca] bg-white p-4 dark:border-[#3a322c] dark:bg-[#241f1b]">
                            <h4 className="text-sm font-semibold text-[#2b211c] dark:text-[#f2ebe4]">{gap.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">{gap.description}</p>
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : scopeItem.id === 'research-problem-solution' ? (
                  <div className="mt-3 grid gap-4 lg:grid-cols-2">
                    <section className="rounded-xl border border-[#e2d5ca] bg-white p-4 dark:border-[#3a322c] dark:bg-[#241f1b]">
                      <h4 className="text-base font-semibold text-[#2b211c] dark:text-[#f2ebe4]">{proposedProblemTitle}</h4>
                      <div className="mt-2 space-y-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">
                        {proposedProblemParagraphs.map((paragraph, index) => (
                          <p key={`problem-paragraph-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    </section>

                    <section className="rounded-xl border border-[#e2d5ca] bg-white p-4 dark:border-[#3a322c] dark:bg-[#241f1b]">
                      <h4 className="text-base font-semibold text-[#2b211c] dark:text-[#f2ebe4]">{proposedSolutionTitle}</h4>
                      <div className="mt-2 space-y-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">
                        {proposedSolutionParagraphs.map((paragraph, index) => (
                          <p key={`solution-paragraph-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  </div>
                ) : scopeItem.id === 'research-objectives' ? (
                  <ol className="mt-3 space-y-3">
                    {researchObjectives.map((objective, index) => (
                      <li key={`objective-${index}`} className="rounded-xl border border-[#e2d5ca] bg-white p-4 dark:border-[#3a322c] dark:bg-[#241f1b]">
                        <h4 className="text-sm font-semibold text-[#2b211c] dark:text-[#f2ebe4]">{index + 1}. {objective.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">{objective.description}</p>
                      </li>
                    ))}
                  </ol>
                ) : scopeItem.id === 'methodology' ? (
                  <div className="mt-3 space-y-4 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">
                    {methodologyOverview.map((paragraph, index) => (
                      <p key={`methodology-paragraph-${index}`}>{paragraph}</p>
                    ))}

                    {methodologyComponents.length > 0 ? (
                      <div className="rounded-xl border border-[#e2d5ca] bg-white p-4 dark:border-[#3a322c] dark:bg-[#241f1b]">
                        <h4 className="text-sm font-semibold text-[#2b211c] dark:text-[#f2ebe4]">Core components</h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {methodologyComponents.map((component, index) => (
                            <li key={`methodology-component-${index}`}>{component}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : scopeItem.id === 'technologies' ? (
                  <div className="mt-4 space-y-5">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {technologyShowcaseItems.map((technology) => (
                        <article
                          key={technology.name}
                          className="group relative overflow-hidden rounded-2xl border border-[#e3d7cd] bg-gradient-to-br from-[#fffaf4] via-[#fffefb] to-[#f7ede3] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#3a322c] dark:from-[#2a2420] dark:via-[#2f2823] dark:to-[#241f1b]"
                        >
                          <div className="absolute -right-6 -top-8 h-20 w-20 rounded-full bg-[#f6e4d2] opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-90 dark:bg-[#46362b]" />
                          <div className="relative flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#eadccc] bg-white/90 p-2 shadow-sm dark:border-[#4a3e35] dark:bg-[#1f1a16]">
                              <img
                                src={technology.icon}
                                alt={`${technology.name} logo`}
                                className="h-10 w-10 object-contain"
                                loading="lazy"
                              />
                            </div>
                            <p className="text-sm font-semibold tracking-wide text-[#4a3629] dark:text-[#e9ddd1]">
                              {technology.name}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">Content for this subsection can be developed here.</p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="milestones" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg dark:shadow-xl dark:shadow-black/30 transition-colors duration-300 lg:mt-10 lg:p-10">
          <header className="mb-12 text-center md:text-left md:ml-[calc(50%+2rem)] max-w-xl">
            <h2 className="text-3xl font-black tracking-tight text-[#2b211c] dark:text-[#f2ebe4]">Project Milestones</h2>
            <p className="mt-3 text-base leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">A curated chronicle of foundational phases and subsequent evaluations.</p>
          </header>

          <div className="relative w-full">
            {/* Central Spine */}
            <div className="absolute left-6 md:left-1/2 w-[2px] bg-[#e8dfd8] dark:bg-[#3a322c] h-[calc(100%-2rem)] top-4 -translate-x-1/2 z-0"></div>

            {/* Nodes & Cards */}
            <div className="flex flex-col gap-8 relative z-10">
              {timeline.map((step, index) => (
                <div key={index} className="relative flex items-center md:justify-between md:even:flex-row-reverse w-full group">
                  {/* Node */}
                  {step.isFinal ? (
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#8c654b] dark:bg-[#c99f7f] border-4 border-white dark:border-[#221d1a] rounded-full -translate-x-1/2 transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(140,101,75,0.2)] dark:group-hover:shadow-[0_0_0_4px_rgba(201,159,127,0.2)] z-10"></div>
                  ) : (
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white dark:bg-[#221d1a] border-2 border-[#8c654b] dark:border-[#c99f7f] rounded-full -translate-x-1/2 transition-colors duration-300 group-hover:bg-[#8c654b] dark:group-hover:bg-[#c99f7f] group-hover:shadow-[0_0_0_4px_rgba(140,101,75,0.2)] dark:group-hover:shadow-[0_0_0_4px_rgba(201,159,127,0.2)] z-10"></div>
                  )}

                  <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                  
                  <div className={`w-[calc(100%-3rem)] ml-12 md:w-[calc(50%-3rem)] md:ml-0 bg-[#fcf9f5] dark:bg-[#2a2420] rounded-xl border ${step.isFinal ? 'border-[#8c654b] dark:border-[#c99f7f] shadow-md' : 'border-[#e8dfd8] dark:border-[#3a322c]'} p-5 transition-all duration-300 hover:border-[#d6c4b3] dark:hover:border-[#4a3e35] hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40`}>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#8c654b] dark:text-[#c99f7f] mb-1">{step.period}</div>
                    <h3 className="text-lg font-semibold text-[#2b211c] dark:text-[#f2ebe4] mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95] mb-4">{step.detail}</p>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${step.isFinal ? 'bg-[#8c654b] text-white dark:bg-[#c99f7f] dark:text-[#1a1512]' : 'bg-white text-[#7a685c] border border-[#e8dfd8] dark:bg-[#241f1b] dark:text-[#a89d95] dark:border-[#3a322c]'}`}>
                      {step.marks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="downloads" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg transition-colors duration-300 lg:p-8">
          <h2 className="text-2xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">Downloads</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">This section stays in the same page. Download resources can be added here.</p>
        </section>

        <section id="about-us" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg transition-colors duration-300 lg:p-8">
          <h2 className="text-2xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">About us</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">This section stays in the same page. Team and mission details can be expanded here.</p>
        </section>

        <section id="achievements" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg transition-colors duration-300 lg:p-8">
          <h2 className="text-2xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">Achievements</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">This section stays in the same page. Key accomplishments can be highlighted here.</p>
        </section>

        <section id="contact-us" className="scroll-mt-28 mt-8 rounded-3xl border border-[#e8dfd8] dark:border-[#3a322c] bg-white dark:bg-[#221d1a] p-6 shadow-lg transition-colors duration-300 lg:p-8">
          <h2 className="text-2xl font-bold text-[#2b211c] dark:text-[#f2ebe4]">Contact us</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b5a4f] dark:text-[#a89d95]">This section stays in the same page. Contact information and form can be developed here.</p>
        </section>
      </main>
    </div>
  )
}
