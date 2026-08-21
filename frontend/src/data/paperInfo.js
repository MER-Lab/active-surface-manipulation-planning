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
    { label: 'Video', href: 'https://youtu.be/NZAVUq0EoiQ' },
    { label: 'Code', href: 'https://github.com/shambhurajmane/ActiveSurfaceGrippersPlanning.git' },
  ],

  teaserCaption: 'Active surface grippers expands manipulation workspace through continuous sliding or translation along the finger surface. But continuous search quickly becomes combinatorially complex. Contact topology manifolds provides the discrete structure that makes this search tractable.',

  // TODO: replace with real caption text once available.
  planningFormulationCaption: 'We plan in a combined finger–object state space, treating the object pose and its location along the finger as a single coordinate. This is not merely an alternative parameterization — it is the natural representation for active-surface grippers, where the two are inseparably coupled.',

  abstract:
    'Controlled sliding of objects along finger surfaces is a ubiquitous feature of human hand manipulation, yet it remains largely inaccessible to robotic systems relying on coordinated finger motions alone. Recent advances in grippers, especially those with active-surface fingers (e.g., fingers equipped with belts, rollers, or surface friction modulation), enable this skill with relatively simple, non-anthropomorphic designs. However, current in-hand manipulation planning algorithms cannot utilize this capability—during controlled sliding/translation, the contact point evolves on the finger surface, rather than on the object surface, which breaks the fundamental assumption of traditional planning methods that trace contact trajectories on the object surface. We present an in-hand manipulation planning framework that operates in a combined finger-object state space, explicitly modeling object motion relative to the finger surface. This formulation enables active-surface grippers to plan and execute trajectories that were previously infeasible under object-centric representations, despite being physically realizable by the hardware. We validate on two active surface grippers: the Variable Friction gripper in the real world and the Belt Orienting Phalanges gripper in simulation, demonstrating generalization across distinct surface-actuation mechanisms. The planner produces six-degree-of-freedom trajectories in under three seconds on average, achieves 96% execution success across 135 physical experiments, and 100% task success in simulation, where baselines reach 0–50%.',
}
