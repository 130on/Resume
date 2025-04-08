function Projects() {
    return (
      <section className="container py-5">
        <h2>Projects</h2>
  
        <div className="mb-4">
          <h4>
            <a href="https://ui-timeline.netlify.app/" target="_blank" rel="noreferrer">
              UI Timeline – Web Development
            </a>
          </h4>
          <p>A modern timeline UI built using front-end technologies. Hosted on Netlify.</p>
        </div>
  
        <div>
          <h4>Algorithm Gauge Application</h4>
          <p>
            Hosted on the WSU server. A full-featured web app with:
            <ul>
              <li>Multi-page layout</li>
              <li>Experiment tracking</li>
              <li>History view and contribution breakdown</li>
            </ul>
          </p>
          <div className="d-flex flex-wrap gap-3">
            {[
              "AlgoGaugeHome.png",
              "AlgoGaugeMultiPage.png",
              "AlgoGaugeMultiExperiment.png",
              "AlgoGaugeHistory.png",
              "AlgoGaugeContribution1.png",
              "AlgoGaugeContribution2.png"
            ].map((img, i) => (
              <img
                key={i}
                src={`/files/${img}`}
                alt={`Screenshot ${i + 1}`}
                className="img-thumbnail"
                style={{ width: "250px", maxHeight: "180px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  