import './style.css';

const deploySteps = [
  'Merge to main',
  'SSH into server',
  'Pull latest code',
  'Rebuild containers',
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="shell" aria-labelledby="page-title">
    <div class="eyebrow">Vite + Docker + GitHub Actions</div>
    <h1 id="page-title">Deploy starter</h1>
    <p class="lede">
      A small Vite app packaged with Docker Compose and ready to redeploy whenever changes land on main.
    </p>

    <div class="status-panel" aria-label="Deployment workflow overview">
      <div>
        <span class="status-label">Workflow</span>
        <strong>Deploy on merge</strong>
      </div>
      <div>
        <span class="status-label">Runtime</span>
        <strong>Tech talk Screen</strong>
      </div>
      <div>
        <span class="status-label">Port</span>
        <strong>9090 -> 80</strong>
      </div>
    </div>

    <ol class="timeline">
      ${deploySteps.map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join('')}
    </ol>
  </section>
`;