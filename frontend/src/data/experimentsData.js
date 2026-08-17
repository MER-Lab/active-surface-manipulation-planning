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
  { key: 'sim-exp-1', label: 'Experiment 1', src: video('experiments/sim_exp1.mp4') },
  { key: 'sim-exp-2', label: 'Experiment 2', src: video('experiments/sim_exp2.mp4') },
  { key: 'sim-exp-3', label: 'Experiment 3', src: video('experiments/sim_exp3.mp4') },
]

export const opensourceHighlights = [
  { key: 'opensource-1', src: video('opensource/opensource_1.mp4') },
  { key: 'opensource-2', src: video('opensource/opensource_2.mp4') },
  { key: 'opensource-3', src: video('opensource/opensource_3.mp4') },
]

export const generalizedPlannerHighlights = [
  { key: 'planner-demo-1', title: 'Demo 1', src: video('opensource/planner_demo1.mp4') },
  { key: 'planner-demo-2', title: 'Demo 2', src: video('opensource/planner_demo2.mp4') },
  { key: 'planner-demo-3', title: 'Demo 3', src: video('opensource/planner_demo3.mp4') },
]
