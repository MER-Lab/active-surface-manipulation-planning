// Central place for paper metadata shown on the landing page.
// Fields marked `placeholder: true` are not yet finalized — update the
// text here once the real values are available; the UI renders a subtle
// visual marker for anything still flagged as a placeholder.

export const paperInfo = {
  title: 'In-Hand Manipulation Planning for Grippers with Active Surfaces',

  authors: [
    { name: 'Shambhuraj A. Mane', affiliations: [1] },
    { name: 'Andrew S. Morgan', affiliations: [2] },
    { name: 'Berk Calli', affiliations: [1] },
  ],

  affiliations: [
    { id: 1, name: 'Department of Robotics Engineering, Worcester Polytechnic Institute, Worcester, MA 01609, USA' },
    { id: 2, name: 'RAI Institute, Cambridge, MA 02142, USA' },
  ],

  // Only resources that actually exist get a real href; everything else
  // renders as a disabled button rather than a fabricated link.
  links: [
    { label: 'Paper', href: null },
    { label: 'Video', href: null },
    { label: 'Code', href: 'https://github.com/shambhurajmane/PlannerWebsite' },
  ],

  teaserCaption: 'Active surface grippers expands manipulation workspace through continuous sliding or translation along the finger surface. But continuous search quickly becomes combinatorially complex. Contact topology manifolds provides the discrete structure that makes this search tractable.',

  // TODO: replace with real caption text once available.
  planningFormulationCaption: 'Caption placeholder — describe the planning formulation here.',

  abstract:
    'Abstract placeholder — the final abstract text has not been added to the repository yet.',
}
