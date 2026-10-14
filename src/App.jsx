import './App.css'

function App() {
  const skills = ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Vite', 'UI/UX']

  const projects = [
    {
      title: '個人形象網站',
      desc: '使用 React 與 Vite 打造，並透過 GitHub 與 Vercel 實現自動化 CI/CD 部署。',
      tag: 'Web / DevOps',
      link: '#'
    },
    {
      title: '特色專案展示',
      desc: '這裡可以寫上你的專案摘要、使用的技術工具，以及解決了什麼問題。',
      tag: 'Project',
      link: '#'
    },
    {
      title: '數位創作 / 作品收集',
      desc: '展示插畫、設計稿或任何你想分享的作品集。',
      tag: 'Portfolio',
      link: '#'
    }
  ]

  return (
    <div className="portfolio-container">
      {/* 個人頂部簡介 */}
      <header className="hero-section">
        <div className="avatar-placeholder">ME</div>
        <h1 className="name">Ting-Hsuan</h1>
        <p className="title">Front-End Learner & Digital Creator</p>
        <p className="bio">
          熱愛打造實用的網頁介面與探索現代開發工具。正在持續累積作品與實戰經驗。
        </p>
      </header>

      {/* 技能標籤 */}
      <section className="section">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      {/* 作品卡片 */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((item, index) => (
            <div key={index} className="project-card">
              <span className="project-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="project-link">查看詳情 →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 底部與社群 */}
      <footer className="footer-section">
        <h2 className="section-title">Contact</h2>
        <div className="links-group">
          <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
          <a href="mailto:your-email@example.com" className="link-btn">Email Me</a>
        </div>
        <p className="copyright">© 2026 Ting-Hsuan. Built with React & Vercel.</p>
      </footer>
    </div>
  )
}

export default App