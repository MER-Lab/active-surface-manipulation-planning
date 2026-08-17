// Video lists for the experiment-selector sections and the open-source
// contribution triptychs. `label`/`title` and `src` are placeholders —
// update them once the real clip names/paths are decided. Files that
// don't exist yet fall back to a "coming soon" box automatically
// (see components/VideoPlaceholder.jsx), so it's safe to list entries
// here before the videos are recorded.

// Public-directory assets must be prefixed with BASE_URL so they still
// resolve when the site is deployed under a sub-path (e.g. GitHub Pages
// project sites at /<repo-name>/).
const BASE = import.meta.env.BASE_URL
const video = (path) => `${BASE}videos/${path}`

export const physicalExperiments = [
  { key: 'l-task-1', label: 'L Task 1', src: video('experiments/L_task1.mp4') },
  { key: 'l-task-2', label: 'L Task 2', src: video('experiments/L_task2.mp4') },
  { key: 'l-task-3', label: 'L Task 3', src: video('experiments/L_task3.mp4') },
  { key: 't-task-1', label: 'T Task 1', src: video('experiments/T_task1.mp4') },
  // { key: 't-task-2', label: 'T Task 2', src: video('experiments/T_task2.mp4') },
  { key: 'jello-task-1', label: 'Jello Task 1', src: video('experiments/Jello_task1.mp4') },
  { key: 'jello-task-2', label: 'Jello Task 2', src: video('experiments/Jello_task2.mp4') },
  { key: 'jello-task-3', label: 'Jello Task 3', src: video('experiments/Jello_task3.mp4') },
  { key: 'pudding-task-1', label: 'Pudding Task 2', src: video('experiments/Pudding_task1.mp4') },
  { key: 'pudding-task-2', label: 'Pudding Task 3', src: video('experiments/Pudding_task2.mp4') },
]

export const simulationExperiments = [
  { key: 'sim-exp-1', label: 'T-shape', src: video('experiments/T1_BOP.mp4') },
  { key: 'sim-exp-2', label: 'Screwdriver', src: video('experiments/Screwdriver.mp4') },
  { key: 'sim-exp-3', label: 'Pentagon', src: video('experiments/Pentagon_BOP.mp4') },
  { key: 'sim-exp-3', label: 'Benchmark 1', src: video('experiments/Benchmark1.mp4') },
  { key: 'sim-exp-3', label: 'Benchmark 2', src: video('experiments/Benchmark2.mp4') },
]

export const opensourceHighlights = [
  { key: 'opensource-1', src: video('opensource/Step1.mp4') },
  { key: 'opensource-2', src: video('opensource/Step2.mp4') },
  { key: 'opensource-3', src: video('opensource/Step3.mp4') },
]
