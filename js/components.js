function renderSkills() {

  const container = document.getElementById("skills-container");

  if (!container) return;

  container.innerHTML = portfolioData.skills.map(skill => `

    <article class="skill-card glass-card">

      <div class="skill-icon ${skill.color}">
        <i data-lucide="${skill.icon}"></i>
      </div>

      <h3>
        ${skill.title}
      </h3>

      <p>
        ${skill.description}
      </p>

      <div class="tech-list">

        ${skill.technologies.map(tech => `
          <span>${tech}</span>
        `).join("")}

      </div>

    </article>

  `).join("");
}


function renderExperience() {

  const container =
    document.getElementById("experience-container");

  if (!container) return;

  container.innerHTML = portfolioData.experience.map(job => `

    <article class="timeline-item">

      <div class="timeline-marker"></div>

      <div class="experience-card glass-card">

        <div class="experience-top">

          <div>

            <span class="experience-type">
              ${job.type}
            </span>

            <h3>
              ${job.role}
            </h3>

            <p class="company">
              ${job.company}
              <span>·</span>
              ${job.location}
            </p>

          </div>

          <span class="experience-date">
            ${job.period}
          </span>

        </div>


        <div class="achievement-list">

          ${job.achievements.map(item => `

            <div class="achievement">

              <span class="achievement-metric">
                ${item.metric}
              </span>

              <p>
                ${item.text}
              </p>

            </div>

          `).join("")}

        </div>

      </div>

    </article>

  `).join("");
}


function renderProjects() {

  const container =
    document.getElementById("projects-container");

  if (!container) return;

  container.innerHTML = portfolioData.projects.map(project => `

    <article class="project-card glass-card">

      <div class="project-header">

        <span class="project-category">
          ${project.category}
        </span>

        <div class="project-icon">
          <i data-lucide="${project.icon}"></i>
        </div>

      </div>


      <h3>
        ${project.title}
      </h3>

      <p>
        ${project.description}
      </p>


      <div class="project-tech">

        ${project.technologies.map(tech => `
          <span>${tech}</span>
        `).join("")}

      </div>


      ${
        project.github !== "#"
          ? `
            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View project
              <i data-lucide="arrow-up-right"></i>
            </a>
          `
          : ""
      }

    </article>

  `).join("");
}