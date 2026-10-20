import { useState } from 'react'
import './App.css'
import WorkOrder from './WorkOrder'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const skills = [
    { category: '核心程式語言', items: ['C', 'Java', 'SQL (MySQL)'] },
    { category: 'Web 開發與技術', items: ['JavaScript (ES6+)', 'React', 'HTML5 / CSS3', 'RESTful API'] },
    { category: '開發環境與工具', items: ['Git / GitHub', 'VS Code', 'MySQL Workbench', 'Windows 終端機'] }
  ]

  const educations = [
    {
      school: '國立雲林科技大學',
      major: '資訊管理系 (二技)',
      period: '畢業',
      desc: '修習資料庫系統、物件導向程式設計、系統分析與設計、資料結構等科目。奠定關聯式資料庫正規化設計與後端邏輯思維基礎。'
    },
    {
      school: '國立臺中科技大學',
      major: '資訊工程科 (五專)',
      period: '畢業',
      desc: '具備計算機概論、演算法、電子學、C語言程式設計與基礎網路架構等知識，擁有基礎工程邏輯與問題分析能力。'
    }
  ]

  if (currentPage === 'mes') {
    return <WorkOrder onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="site-wrapper">
      {/* 頂部導航列 */}
      <nav className="site-nav">
        <div className="nav-container">
          <span className="nav-logo">TH.Chang</span>
          <div className="nav-links">
            <a href="#about">關於我</a>
            <a href="#projects">作品展示</a>
            <a href="#skills">技術技能</a>
            <a href="#education">學歷背景</a>
            <a href="#contact" className="nav-btn-contact">聯絡我</a>
          </div>
        </div>
      </nav>

      {/* 1. Hero 區塊 */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>開放軟體開發 / 內部系統相關職位</span>
          </div>
          <h1 className="hero-title">
            專注程式邏輯與資料流，<br />
            打造可靠扎實的系統介面。
          </h1>
          <p className="hero-subtitle">
            我是 <strong>張庭瑄 (Ting-Hsuan)</strong>，具備資訊管理背景。主要以 C 與 Java 作為物件導向基石，並以 SQL 進行關聯式資料庫規劃與查詢，致力於建構清晰、高效的後台管理與 Web 應用。
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">瀏覽作品展示 ↓</a>
            <a href="#contact" className="btn-secondary">聯絡方式 ✉</a>
          </div>
        </div>
      </header>

      <main className="main-body">
        {/* 2. 關於我 (About) */}
        <section id="about" className="content-section">
          <div className="section-title-wrap">
            <h2 className="section-title">關於我</h2>
            <span className="section-en">ABOUT ME</span>
          </div>
          <div className="about-card">
            <p>
              熱衷於理解系統運作背後的脈絡，具備良好的問題拆解與自主排查能力。在程式學習歷程中，注重程式碼架構的嚴謹性與可讀性，並重視版本控制（Git）與敏捷部署規範。
            </p>
            <p>
              期望能在重視工程思維、邏輯清晰的技術團隊中，持續深耕內部系統、後端服務與現代 Web 開發實務。
            </p>
          </div>
        </section>

       {/* 3. 作品展示 (Portfolio / Projects) */}
        <section id="projects" className="content-section">
          <div className="section-title-wrap">
            <h2 className="section-title">作品展示</h2>
            <span className="section-en">PORTFOLIO</span>
          </div>
          <div className="projects-grid">
            {/* 專案一：產線工單隨行查詢與盤點管理系統 (Live Demo) */}
            <div className="project-card highlight-card" onClick={() => setCurrentPage('mes')}>
              <div className="card-header">
                <span className="tag-live">Live Interactive Demo</span>
                <span className="card-action">進入操作 ↗</span>
              </div>
              <h3 className="card-title">產線工單隨行查詢與即時盤點管理系統</h3>
              <p className="card-desc">
                模擬現場操作員隨行作業介面。支援工單/備品即時檢索、多維度狀態篩選（待處理／處理中／已結案）與動態統計看板。實踐前端狀態管理（State Management）與穩定、低延遲的固定節奏 CRUD 操作流程。
              </p>
              <div className="card-tech">React · State Management · Admin UI Flow · CRUD Logic</div>
            </div>

            {/* 專案二：設備點位通訊與 API 交換系統設計（精準命中工作需求） */}
            <div className="project-card">
              <div className="card-header">
                <span className="tag-db">Backend & Data Flow</span>
                <span className="card-action-muted">系統設計架構</span>
              </div>
              <h3 className="card-title">設備點位通訊監控與資料交換 API 系統設計</h3>
              <p className="card-desc">
                規劃工廠設備與上層系統之通訊介面。設計 RESTful API 端點支援現場點位狀態讀寫與資料交換；規劃關聯式資料庫 Schema（PostgreSQL / SQL），針對設備紀錄、生產歷程與告警日誌進行關聯表設計與多表彙整查詢（JOIN / 聚合統計）。
              </p>
              <div className="card-tech">RESTful API Design · Relational Database (SQL) · Data Modeling · IoT / OPC UA Architecture</div>
            </div>

            {/* 專案三：工程師版本控制與自動化部署實務 */}
            <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="project-card">
              <div className="card-header">
                <span className="tag-cloud">CI / CD & Git Workflow</span>
                <span className="card-action">GitHub 專案 ↗</span>
              </div>
              <h3 className="card-title">工程師團隊版本控制與自動化部署實務</h3>
              <p className="card-desc">
                落實標準 Git 分支開發工作流程（Feature Branch / Merge Request 思維）。整合雲端 CI/CD Pipeline 達成程式碼推送自動化驗證與零停機發布，重視程式碼結構清晰性與技術文件規範。
              </p>
              <div className="card-tech">Git Workflow · CI/CD Pipeline · Vercel · Clean Code</div>
            </a>
          </div>
        </section>

        {/* 技術技能 (Skills) */}
        <section id="skills" className="content-section">
          <div className="section-title-wrap">
            <h2 className="section-title">技術技能</h2>
            <span className="section-en">TECHNICAL SKILLS</span>
          </div>
          <div className="skills-container">
            {skills.map((group, index) => (
              <div key={index} className="skill-row">
                <div className="skill-category">{group.category}</div>
                <div className="skill-badges">
                  {group.items.map((item, i) => (
                    <span key={i} className="skill-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 學歷背景 (Education) */}
        <section id="education" className="content-section">
          <div className="section-title-wrap">
            <h2 className="section-title">學歷背景</h2>
            <span className="section-en">EDUCATION</span>
          </div>
          <div className="edu-container">
            {educations.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-head">
                  <div className="edu-titles">
                    <span className="edu-name">{edu.school}</span>
                    <span className="edu-dept">{edu.major}</span>
                  </div>
                  <span className="edu-status">{edu.period}</span>
                </div>
                <p className="edu-text">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 聯絡方式 (Contact) */}
        <section id="contact" className="content-section">
          <div className="section-title-wrap">
            <h2 className="section-title">聯絡方式</h2>
            <span className="section-en">GET IN TOUCH</span>
          </div>
          <div className="contact-box">
            <p className="contact-intro">
              如果您正在尋找具備資工/資管底子、邏輯清晰且持續實作成長的夥伴，歡迎與我聯繫！
            </p>
            <div className="contact-links">
              <a href="https://github.com/echidnax" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-type">GitHub</span>
                <span className="contact-detail">github.com/echidnax ↗</span>
              </a>
              <div className="contact-item">
                <span className="contact-type">Location</span>
                <span className="contact-detail">Taiwan (開放遠端或指定實體辦公)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="site-footer">
        <p>© 2026 張庭瑄 (Ting-Hsuan Chang) · Crafted with React & Clean CSS</p>
      </footer>
    </div>
  )
}

export default App