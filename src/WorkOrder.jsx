import React, { useState } from 'react'

export default function WorkOrder({ onBack }) {
  // 模擬工廠內部的初始工單資料
  const [orders, setOrders] = useState([
    { id: 'WO-2026-001', model: 'KR201 轎車胎 215/55R17', line: '機台 A-01', qty: 120, status: '生產中' },
    { id: 'WO-2026-002', model: 'KR50 休旅胎 225/65R17', line: '機台 B-03', qty: 80, status: '待生產' },
    { id: 'WO-2026-003', model: 'K117 自行車競速胎 700x25C', line: '機台 C-02', qty: 300, status: '已完工' },
  ])

  const [newModel, setNewModel] = useState('')
  const [newLine, setNewLine] = useState('機台 A-01')
  const [newQty, setNewQty] = useState('')

  // 調整工單狀態
  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ))
  }

  // 新增工單
  const handleAddOrder = (e) => {
    e.preventDefault()
    if (!newModel || !newQty) return

    const newOrder = {
      id: `WO-2026-00${orders.length + 1}`,
      model: newModel,
      line: newLine,
      qty: Number(newQty),
      status: '待生產'
    }

    setOrders([...orders, newOrder])
    setNewModel('')
    setNewQty('')
  }

  return (
    <div className="layout">
      {/* 獨立頁面的頂部導航列 */}
      <div className="demo-nav">
        <button onClick={onBack} className="btn-back">
          ← 返回個人履歷
        </button>
        <span className="demo-badge">Live Interactive Demo</span>
      </div>

      <div className="mes-container">
        <div className="mes-header">
          <h2 className="mes-title">🏭 MES 工單即時管理系統 Demo</h2>
          <p className="mes-sub">模擬現場操作員「隨行查詢、派工與狀態調整」之後台操作流程</p>
        </div>

        {/* 新增工單表單 */}
        <form onSubmit={handleAddOrder} className="mes-form">
          <input 
            type="text" 
            placeholder="輪胎型號 (例: KR201 215/55R17)" 
            value={newModel} 
            onChange={(e) => setNewModel(e.target.value)}
            className="mes-input"
            required
          />
          <select value={newLine} onChange={(e) => setNewLine(e.target.value)} className="mes-select">
            <option value="機台 A-01">機台 A-01</option>
            <option value="機台 B-03">機台 B-03</option>
            <option value="機台 C-02">機台 C-02</option>
          </select>
          <input 
            type="number" 
            placeholder="數量" 
            value={newQty} 
            onChange={(e) => setNewQty(e.target.value)}
            className="mes-input-sm"
            required
          />
          <button type="submit" className="mes-btn-submit">＋ 建立派工</button>
        </form>

        {/* 工單列表表格 */}
        <div className="mes-table-wrap">
          <table className="mes-table">
            <thead>
              <tr>
                <th>工單號碼</th>
                <th>規格型號</th>
                <th>產線機台</th>
                <th>目標數量</th>
                <th>目前狀態</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="font-mono">{order.id}</td>
                  <td>{order.model}</td>
                  <td>{order.line}</td>
                  <td>{order.qty} 條</td>
                  <td>
                    <span className={`status-tag status-${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    {order.status === '待生產' && (
                      <button onClick={() => handleStatusChange(order.id, '生產中')} className="btn-action">
                        開始生產
                      </button>
                    )}
                    {order.status === '生產中' && (
                      <button onClick={() => handleStatusChange(order.id, '已完工')} className="btn-action btn-complete">
                        報工完工
                      </button>
                    )}
                    {order.status === '已完工' && (
                      <span className="text-done">已結案</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}