import { useState } from 'react'
import './App.css'
import WorkOrder from './WorkOrder'

function App() {
  // 目前顯示哪一頁：'home'（履歷）或 'mes'（工單系統）
  const [currentPage, setCurrentPage] = useState('home')

  const skills = [
    { category: '核心程式語言', items: ['C', 'Java', 'SQL (MySQL)'] },
    { category: 'Web 探索與實作', items: ['HTML / CSS', 'JavaScript 基礎', 'React / Vite'] },
    { category: '開發環境與工具', items: ['VS Code', 'Git / GitHub 基礎操作', 'Windows 終端機'] }
  ]

  // 如果目前切換到 mes，就顯示獨立的 WorkOrder 頁面
  if (currentPage === 'mes') {
    return <WorkOrder onBack={() => setCurrentPage('home')} />
  }

  // 預設顯示履歷首頁
  return (
    <div className="layout">
      {/* 頂部 Header */}
      <header className="profile-header">
        <div className="profile-left">
          <div className="avatar-box">TH</div>
          <div>
            <h1 className="name">張庭瑄 (Ting-Hsuan)</h1>
            <p className="headline">資訊管理背景 ｜ 專注程式邏輯與 Web 系統開發</p>
            <div className="badge-row">
              <span className="status-dot"></span>
              <span className="status-text">積極尋求軟體開發 / MES 全端工程師職位</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="btn-primary">
            GitHub 專案 ↗
          </a>
        </div>
      </header>

      {/* 簡介 */}
      <section className="card-section">
        <h2 className="section-label">ABOUT & OBJECTIVE</h2>
        <p className="about-text">
          具備資訊管理背景，主要以 C 與 Java 作為程式邏輯與物件導向基礎，並具備 SQL 資料庫基礎操作概念。習慣動手查資料並排查問題，目前正持續透過實作累積 Web 與系統開發基礎，期望能加入重視邏輯嚴謹性與扎實工程思維的團隊，在實務中持續學習與成長。
        </p>
      </section>

      {/* 核心技能 */}
      <section className="card-section">
        <h2 className="section-label">TECHNICAL SKILLS</h2>
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

      {/* 實作專案 */}
      <section className="card-section">
        <h2 className="section-label">PROJECTS & PRACTICE</h2>
        <div className="project-grid">
          
          {/* 專案一：點擊直接進入工單 Demo */}
          <div 
            className="project-card" 
            onClick={() => setCurrentPage('mes')} 
            style={{ cursor: 'pointer' }}
          >
            <div className="project-header">
              <span className="project-tag">React / 狀態管理 / 內部後台介面</span>
              <span className="arrow-icon">進入 Demo ↗</span>
            </div>
            <h3 className="project-name">MES 生產工單即時管理系統 (Demo)</h3>
            <p className="project-detail">
              模擬現場操作員之日常工單操作流程，包含機台產線指派、輪胎規格新增、生產狀態即時調整（待生產／生產中／已完工）等互動功能。點擊即可直接於網頁操作體驗。
            </p>
          </div>

          {/* 專案二：個人網站與 CI/CD */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-tag">React / Vite / Git / Vercel</span>
              <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="arrow-icon">GitHub ↗</a>
            </div>
            <h3 className="project-name">個人線上作品集與自動化部署</h3>
            <p className="project-detail">
              採用 React 與現代前端建置工具實作乾淨極簡風格頁面，實踐 Git 版本控制與 Vercel 自動化發布流程，並落實本機開發與雲端託管整合。
            </p>
          </div>

        </div>
      </section>

      {/* 頁尾 */}
      <footer className="footer">
        <span>© 2026 張庭瑄 (Ting-Hsuan)</span>
        <span className="footer-built">React & Vite Workflow</span>
      </footer>
    </div>
  )
}

export default App