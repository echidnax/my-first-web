import './App.css'

function App() {
  const skills = [
    { category: '前端開發', items: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vite'] },
    { category: '後端與資料庫', items: ['Python (Flask)', 'MySQL', 'MongoDB', 'RESTful API'] },
    { category: '工具與部署', items: ['Git / GitHub', 'VS Code', 'Vercel'] }
  ]

  const projects = [
    {
      title: '個人形象與線上履歷',
      tag: 'React / Vite / Vercel',
      desc: '規劃並實作響應式個人站，整合 Git 與 Vercel 自動化 CI/CD 流程，實現即時部署與版本控制。',
      link: 'https://github.com/echidnax'
    },
    {
      title: '圖書管理系統 (LibraryDB)',
      tag: 'Flask / MySQL / REST API',
      desc: '設計關聯式資料庫結構與 DDL，撰寫 Flask 後端 API 串接 MySQL，實作書籍與借閱紀錄之查詢與管理。',
      link: '#'
    },
    {
      title: '多架構 NoSQL 實作分析',
      tag: 'MongoDB / DuckDB / Neo4j',
      desc: '針對 Document、Column 與 Graph 不同架構之資料庫進行資料建模、關聯查詢與資料流演練。',
      link: '#'
    }
  ]

  return (
    <div className="layout">
      {/* 頂部 Profile 區域 */}
      <header className="profile-header">
        <div className="profile-left">
          <div className="avatar-box">TH</div>
          <div>
            <h1 className="name">張庭瑄（Ting-Hsuan Chang）</h1>
            <p className="headline">資訊管理 ｜ 專注前端開發與軟體實作</p>
            <div className="badge-row">
              <span className="status-dot"></span>
              <span className="status-text">開放各項技術合作與交流</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="btn-primary">
            GitHub ↗
          </a>
        </div>
      </header>

      {/* 關於我 */}
      <section className="card-section">
        <h2 className="section-label">ABOUT</h2>
        <p className="about-text">
          具備資訊工程及資訊管理背景，熟悉前端技術、後端 API 串接與資料庫規劃。重視俐落清晰的介面與流暢的開發流程，善於排查問題並透過專案實作持續迭代技術能力。
        </p>
      </section>

      {/* 專業技能 */}
      <section className="card-section">
        <h2 className="section-label">SKILLS</h2>
        <div className="skill-groups">
          {skills.map((group, index) => (
            <div key={index} className="skill-row">
              <span className="skill-title">{group.category}</span>
              <div className="skill-pills">
                {group.items.map((item, i) => (
                  <span key={i} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 專案經歷 */}
      <section className="card-section">
        <h2 className="section-label">FEATURED PROJECTS</h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <a key={index} href={proj.link} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">{proj.tag}</span>
                <span className="arrow-icon">↗</span>
              </div>
              <h3 className="project-name">{proj.title}</h3>
              <p className="project-detail">{proj.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="footer">
        <span>© 2026 Ting-Hsuan</span>
        <span className="footer-built">Crafted with React & Vite</span>
      </footer>
    </div>
  )
}

export default App