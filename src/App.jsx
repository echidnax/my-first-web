import { useState } from 'react'
import './App.css'
import WorkOrder from './WorkOrder'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const skills = [
    { category: '核心程式語言', items: ['C', 'Java', 'SQL (MySQL)'] },
    { category: 'Web 探索與實作', items: ['HTML / CSS', 'JavaScript 基礎', 'React / Vite'] },
    { category: '開發環境與工具', items: ['VS Code', 'Git / GitHub 基礎操作', 'Windows 終端機'] }
  ]

  if (currentPage === 'mes') {
    return <WorkOrder onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        
        {/* 左側固定/資訊欄 */}
        <aside className="sidebar">
          <div>
            <div className="avatar-box">TH</div>
            <h1 className="name">張庭瑄</h1>
            <p className="en-name">Ting-Hsuan</p>
            <p className="headline">資訊管理背景 ｜ 專注程式邏輯與系統實作</p>
            
            <div className="badge-status">
              <span className="status-dot"></span>
              <span>開放軟體開發 / 內部系統相關職位</span>
            </div>

            <div className="sidebar-intro">
              <h2 className="section-title">ABOUT</h2>
              <p className="intro-text">
                具備資訊管理背景，主要以 C 與 Java 作為程式邏輯與物件導向基礎，並具備 SQL 資料庫基礎操作概念。習慣動手查資料並排查問題，目前正持續透過實作累積 Web 與系統開發基礎，期望能加入重視邏輯嚴謹性與扎實工程思維的團隊，在實務中持續學習與成長。
              </p>
            </div>

            <div className="sidebar-skills">
              <h2 className="section-title">TECHNICAL SKILLS</h2>
              {skills.map((group, index) => (
                <div key={index} className="skill-group">
                  <div className="skill-cat-name">{group.category}</div>
                  <div className="skill-tags">
                    {group.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-footer">
            <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="btn-github">
              GitHub 專案庫 ↗
            </a>
          </div>
        </aside>

        {/* 右側專案展示區 */}
        <main className="main-content">
          <div className="content-header">
            <h2 className="section-title">PROJECTS & PRACTICE</h2>
            <p className="section-subtitle">點擊卡片可直接檢視詳細內容或操作即時互動 Demo</p>
          </div>

          <div className="projects-list">
            {/* 專案一：內部後台 Demo */}
            <div 
              className="project-card highlight-card" 
              onClick={() => setCurrentPage('mes')}
            >
              <div className="project-badge-row">
                <span className="tag-interactive">可互動 Demo</span>
                <span className="project-stack">React / 狀態管理 / 內部後台</span>
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="project-title">簡易內部管理後台 (Admin Dashboard Demo)</h3>
                  <span className="enter-link">進入操作 ↗</span>
                </div>
                <p className="project-desc">
                  練習現代前端狀態管理與互動介面之實作專案。實現基礎品項新增、條件檢視與狀態自由切換（待處理／處理中／已結案）等常見內部管理後台操作流程。
                </p>
              </div>
            </div>

            {/* 專案二：個人網站與 CI/CD */}
            <div className="project-card">
              <div className="project-badge-row">
                <span className="tag-deploy">線上部署</span>
                <span className="project-stack">React / Vite / Git / Vercel</span>
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="project-title">個人線上作品集與自動化部署</h3>
                  <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="enter-link">
                    查看原始碼 ↗
                  </a>
                </div>
                <p className="project-desc">
                  採用 React 與現代前端建置工具實作雙欄工程師風格頁面，實踐 Git 版本控制與 Vercel 自動化發布流程，並落實本機開發與雲端託管整合。
                </p>
              </div>
            </div>
          </div>

          <footer className="main-footer">
            <span>© 2026 張庭瑄 (Ting-Hsuan)</span>
            <span>React & Vite Workflow</span>
          </footer>
        </main>

      </div>
    </div>
  )
}

export default App