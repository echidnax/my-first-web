import './App.css'

function App() {
  const skills = [
    'React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vite',
    'Python (Flask)', 'MySQL', 'MongoDB', 'Git / GitHub', 'RESTful API'
  ]

  const projects = [
    {
      title: '個人形象與線上履歷',
      tag: 'React / Vite / Vercel',
      desc: '規劃並實作響應式個人站，整合 Git 與 Vercel 自動化 CI/CD 流程，實現即時部署與版本控制。',
      link: 'https://github.com/echidnax'
    },
    {
      title: '圖書管理系統 (Library Management System)',
      tag: 'Python Flask / MySQL / RESTful API',
      desc: '設計關聯式資料庫結構與 DDL，撰寫 Flask 後端 API 串接 MySQL，實現書籍與借閱紀錄之查詢、新增與管理。',
      link: '#'
    },
    {
      title: '多架構資料庫實作練習',
      tag: 'MongoDB / DuckDB / Neo4j',
      desc: '探索 Document、Column 與 Graph 不同架構之 NoSQL 資料庫特性，進行資料建模與跨類型查詢演練。',
      link: '#'
    }
  ]

  return (
    <div className="page-wrapper">
      <main className="content-container">
        {/* 個人 Header */}
        <header className="header">
          <div className="header-badge">Online Resume</div>
          <h1 className="name">Ting-Hsuan</h1>
          <p className="headline">資訊管理 ｜ 前端開發探索與軟體實作</p>
          <div className="links">
            <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="pill-link">
              GitHub ↗
            </a>
            <span className="location-tag">Taiwan</span>
          </div>
        </header>

        {/* 簡介 */}
        <section className="section">
          <h2 className="section-heading">About</h2>
          <p className="bio-text">
            具備資訊管理背景，具備前後端基礎與資料庫規劃概念。熱衷於現代前端技術、乾淨介面設計與自動化開發流程，樂於從實作中排查問題並持續累積專案經驗。
          </p>
        </section>

        {/* 技能 */}
        <section className="section">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        {/* 專案經歷 */}
        <section className="section">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-top">
                  <span className="project-tag">{proj.tag}</span>
                  <a href={proj.link} className="arrow-link" target="_blank" rel="noreferrer">↗</a>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 頁尾 */}
        <footer className="footer">
          <p>© 2026 Ting-Hsuan. Built with React & Vite.</p>
        </footer>
      </main>
    </div>
  )
}

export default App