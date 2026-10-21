import React from 'react'
import './WorkOrder.css'

export default function ApiDesign({ onBack }) {
  return (
    <div className="demo-layout">
      {/* 頂部導航 */}
      <div className="demo-nav">
        <button onClick={onBack} className="btn-back">
          ← 返回個人履歷
        </button>
        <span className="demo-badge">Architecture & System Spec</span>
      </div>

      <div className="mes-container">
        {/* 標題與簡介 */}
        <div className="mes-header">
          <h2 className="mes-title">設備點位通訊監控與資料交換 API 系統設計</h2>
          <p className="mes-sub">針對工廠自動化場景之資料交換流程、RESTful API 規格與資料模型設計</p>
        </div>

        {/* 1. 系統資料流架構 */}
        <div className="section-box">
          <div className="box-title">一、 系統資料流與架構規劃 (Architecture Flow)</div>
          
          <div className="flow-container">
            {/* 節點 1 */}
            <div className="flow-node">
              <span className="flow-tag">現場設備層</span>
              <div className="flow-title">產線設備 / PLC 控制器</div>
              <div className="flow-desc">感測點位數值量測與運作狀態</div>
            </div>

            <div className="flow-arrow">
              <span className="arrow-line"></span>
              <span className="arrow-label">點位數值變化</span>
              <span className="arrow-head">↓</span>
            </div>

            {/* 節點 2 */}
            <div className="flow-node">
              <span className="flow-tag">通訊監控層</span>
              <div className="flow-title">OPC UA Client 監控服務</div>
              <div className="flow-desc">定時輪詢讀取 / 點位事件訂閱</div>
            </div>

            <div className="flow-arrow">
              <span className="arrow-line"></span>
              <span className="arrow-label">資料交換與封裝</span>
              <span className="arrow-head">↓</span>
            </div>

            {/* 節點 3 */}
            <div className="flow-node highlight">
              <span className="flow-tag">核心服務層</span>
              <div className="flow-title">後端核心 API 服務 (RESTful API)</div>
              <div className="flow-desc">資料解析驗證、權限控管與端點路由分派</div>
            </div>

            {/* 分流箭頭 */}
            <div className="flow-split-arrow">
              <div className="split-branch">
                <span>↙ 寫入歷史日誌</span>
              </div>
              <div className="split-branch">
                <span>↘ 數據查詢與反控</span>
              </div>
            </div>

            {/* 底部雙節點 */}
            <div className="flow-bottom-grid">
              <div className="flow-node sub-node">
                <span className="flow-tag">資料持久層</span>
                <div className="flow-title">PostgreSQL 關聯式資料庫</div>
                <div className="flow-desc">設備主檔、歷史數值日誌儲存</div>
              </div>

              <div className="flow-node sub-node">
                <span className="flow-tag">使用者介面</span>
                <div className="flow-title">Web 操作員管理後台</div>
                <div className="flow-desc">現場隨行查詢、狀態監控與參數下發</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. RESTful API 規格設計 */}
        <div className="section-box">
          <div className="box-title">二、 核心 RESTful API 規格定義</div>
          <div className="mes-table-wrap">
            <table className="mes-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>功能描述</th>
                  <th>傳入參數 / Request Body</th>
                  <th>回應範例 (Response)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="cat-pill" style={{ background: '#dbeafe', color: '#1d4ed8' }}>GET</span></td>
                  <td className="font-mono">/api/v1/devices</td>
                  <td>查詢所有產線設備與目前在線狀態</td>
                  <td className="text-muted">line_id (query, optional)</td>
                  <td className="font-mono text-muted">&#123; "data": [...] &#125;</td>
                </tr>
                <tr>
                  <td><span className="cat-pill" style={{ background: '#dcfce7', color: '#15803d' }}>POST</span></td>
                  <td className="font-mono">/api/v1/telemetry</td>
                  <td>接收設備點位批次量測數據寫入</td>
                  <td className="font-mono text-muted">&#123; "device_id", "val", "ts" &#125;</td>
                  <td className="font-mono text-muted">&#123; "status": "ok" &#125;</td>
                </tr>
                <tr>
                  <td><span className="cat-pill" style={{ background: '#fef3c7', color: '#b45309' }}>PUT</span></td>
                  <td className="font-mono">/api/v1/nodes/write</td>
                  <td>下發點位數值至控制器（遠端參數設定）</td>
                  <td className="font-mono text-muted">&#123; "target_val": 1 &#125;</td>
                  <td className="font-mono text-muted">&#123; "code": 200 &#125;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 資料模型規格表 (取代 SQL 程式碼) */}
        <div className="section-box" style={{ marginBottom: 0 }}>
          <div className="box-title">三、 關聯資料模型設計 (Data Schema Design)</div>
          <p style={{ fontSize: '0.88rem', color: '#475569', margin: '0 0 14px 0' }}>
            採用第三正規化（3NF）架構，分離主檔資料與時間序列量測數據，降低冗餘並維護資料一致性：
          </p>

          {/* 表格 1：設備主檔 */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              表 1：設備主檔清單 (devices)
            </div>
            <div className="mes-table-wrap">
              <table className="mes-table">
                <thead>
                  <tr>
                    <th>欄位名稱 (Field)</th>
                    <th>資料型態 (Type)</th>
                    <th>約束條件 (Constraint)</th>
                    <th>中文說明 (Description)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono font-semibold">device_id</td>
                    <td>VARCHAR(32)</td>
                    <td><span className="cat-pill">Primary Key</span></td>
                    <td>設備唯一識別碼 (例: DEV-01)</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">device_name</td>
                    <td>VARCHAR(100)</td>
                    <td>Not Null</td>
                    <td>設備名稱 (例: 1 號沖壓機)</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">ip_address</td>
                    <td>VARCHAR(45)</td>
                    <td>Not Null</td>
                    <td>現場控制器通訊 IP 位址</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">is_active</td>
                    <td>BOOLEAN</td>
                    <td>Default True</td>
                    <td>設備是否啟用 / 連線中</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 表格 2：點位量測紀錄 */}
          <div>
            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              表 2：點位量測紀錄 (telemetry_logs)
            </div>
            <div className="mes-table-wrap">
              <table className="mes-table">
                <thead>
                  <tr>
                    <th>欄位名稱 (Field)</th>
                    <th>資料型態 (Type)</th>
                    <th>約束條件 (Constraint)</th>
                    <th>中文說明 (Description)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono font-semibold">log_id</td>
                    <td>BIGINT</td>
                    <td><span className="cat-pill">Primary Key</span></td>
                    <td>日誌自增流水號 (Auto Increment)</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">device_id</td>
                    <td>VARCHAR(32)</td>
                    <td><span className="cat-pill" style={{ background: '#fef3c7', color: '#b45309' }}>Foreign Key</span></td>
                    <td>關聯至設備主檔之 device_id</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">node_name</td>
                    <td>VARCHAR(64)</td>
                    <td>Not Null</td>
                    <td>監控點位名稱 (例: Temperature)</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">recorded_val</td>
                    <td>DECIMAL(10,2)</td>
                    <td>Not Null</td>
                    <td>量測數值 (例: 75.50)</td>
                  </tr>
                  <tr>
                    <td className="font-mono font-semibold">created_at</td>
                    <td>TIMESTAMP</td>
                    <td>Indexed</td>
                    <td>資料寫入時間戳記</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}