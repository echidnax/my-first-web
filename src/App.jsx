import { useState } from 'react'
import './App.css'
import WorkOrder from './WorkOrder'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const skills = [
    { category: 'Languages', items: ['C', 'Java', 'SQL (MySQL)'] },
    { category: 'Web & Frontend', items: ['JavaScript (ES6+)', 'React', 'HTML / CSS', 'Vite'] },
    { category: 'Environment & Tools', items: ['Git / GitHub', 'VS Code', 'Windows Terminal'] }
  ]

  if (currentPage === 'mes') {
    return <WorkOrder onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="site-wrapper">
      <main className="site-content">
        
        {/* 頂部 Header：姓名與基本定位 */}
        <header className="hero-header">
          <div className="hero-top">
            <div>
              <h1 className="hero-name">張庭瑄</h1>
              <p className="hero-sub">Ting-Hsuan Chang</p>
            </div>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Available for Work</span>
            </div>
          </div>
          <p className="hero-bio">
            資訊管理背景。主要以 <strong>C</strong> 與 <strong>Java</strong> 建立程式邏輯與物件導向基礎，具備關聯式資料庫（SQL）概念。目前專注於網頁前端技術與內部系統介面實作，注重嚴謹邏輯與乾淨易讀的程式結構。
          </p>
          <div className="hero-links">
            <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="link-item">
              GitHub ↗
            </a>
          </div>
        </header>

        <div className="divider"></div>

        {/* 精選專案區塊 */}
        <section className="section-block">
          <div className="section-header">
            <h2 className="section-title">Projects & Practice</h2>
            <span className="section-hint">實作專案與互動 Demo</span>
          </div>

          <div className="project-list">
            {/* 專案一：內部管理後台 Demo */}
            <div 
              className="project-row" 
              onClick={() => setCurrentPage('mes')}
            >
              <div className="project-main">
                <div className="project-title-row">
                  <h3 className="project-title">內部品項與工單管理後台</h3>
                  <span className="badge-demo">Live Demo ↗</span>
                </div>
                <p className="project-desc">
                  模擬內部管理流程之互動介面。使用 React 狀態管理實作品項新增、狀態即時切換（待處理／處理中／已結案）與資料異動操作。
                </p>
                <div className="project-tech">React · State Management · Admin UI</div>
              </div>
            </div>

            {/* 專案二：個人作品集與自動化部署 */}
            <a 
              href="https://github.com/echidnax" 
              target="_blank" 
              rel="noreferrer" 
              className="project-row"
            >
              <div className="project-main">
                <div className="project-title-row">
                  <h3 className="project-title">個人作品集與自動化部署</h3>
                  <span className="badge-code">Source Code ↗</span>
                </div>
                <p className="project-desc">
                  以 React 與 Vite 建置之極簡風格個人站。實踐 Git 版本控制流程與 Vercel 自動化 CI/CD 雲端部署。
                </p>
                <div className="project-tech">React · Vite · Git Workflow · Vercel</div>
              </div>
            </a>
          </div>
        </section>

        <div className="divider"></div>

        {/* 技術背景區塊 */}
        <section className="section-block">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <span className="section-hint">技術底子與工具</span>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <div key={index} className="skill-col">
                <h4 className="skill-cat-title">{group.category}</h4>
                <div className="skill-pills">
                  {group.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 簡約頁尾 */}
        <footer className="site-footer">
          <span>© 2026 Ting-Hsuan Chang</span>
          <span>Crafted with React</span>
        </footer>

      </main>
    </div>
  )
}

export default App