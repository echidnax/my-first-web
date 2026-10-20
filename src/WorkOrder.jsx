import React, { useState, useMemo } from 'react'
import './WorkOrder.css'

export default function WorkOrder({ onBack }) {
  // 初始測試資料
  const [items, setItems] = useState([
    { id: 'ITEM-01', name: '27 吋電腦螢幕', category: '辦公設備', qty: 2, status: '處理中', date: '2026-10-18' },
    { id: 'ITEM-02', name: '無線鍵盤滑鼠組', category: '電腦周邊', qty: 5, status: '待處理', date: '2026-10-19' },
    { id: 'ITEM-03', name: 'A4 影印紙 (箱)', category: '耗材用品', qty: 20, status: '已結案', date: '2026-10-15' },
    { id: 'ITEM-04', name: 'Cat.6 網路跳線 (3m)', category: '電腦周邊', qty: 15, status: '處理中', date: '2026-10-20' },
    { id: 'ITEM-05', name: '人體工學辦公椅', category: '辦公設備', qty: 1, status: '待處理', date: '2026-10-20' },
  ])

  // 表單輸入狀態
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('辦公設備')
  const [newQty, setNewQty] = useState('')

  // 搜尋與篩選狀態
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('全部')

  // 1. 衍生狀態：自動計算頂部 KPI 數據看板
  const stats = useMemo(() => {
    return {
      total: items.length,
      pending: items.filter(i => i.status === '待處理').length,
      processing: items.filter(i => i.status === '處理中').length,
      completed: items.filter(i => i.status === '已結案').length,
    }
  }, [items])

  // 2. 衍生狀態：多條件即時過濾（搜尋關鍵字 + 狀態標籤）
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.id.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === '全部' || item.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [items, searchTerm, statusFilter])

  // 狀態切換
  const handleStatusChange = (id, newStatus) => {
    setItems(items.map(item => item.id === id ? { ...item, status: newStatus } : item))
  }

  // 刪除項目
  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  // 新增品項
  const handleAddItem = (e) => {
    e.preventDefault()
    if (!newName || !newQty) return

    const nextNumber = items.length > 0 
      ? Math.max(...items.map(i => parseInt(i.id.replace('ITEM-', '')) || 0)) + 1 
      : 1

    const today = new Date().toISOString().split('T')[0]

    const newItem = {
      id: `ITEM-${String(nextNumber).padStart(2, '0')}`,
      name: newName,
      category: newCategory,
      qty: Number(newQty),
      status: '待處理',
      date: today
    }

    setItems([newItem, ...items]) // 最新新增的排在最前面
    setNewName('')
    setNewQty('')
  }

  return (
    <div className="demo-layout">
      {/* 頂部導航 */}
      <div className="demo-nav">
        <button onClick={onBack} className="btn-back">
          ← 返回個人履歷
        </button>
        <span className="demo-badge">React Admin System Demo</span>
      </div>

      <div className="mes-container">
        {/* 標題與簡介 */}
        <div className="mes-header">
          <h2 className="mes-title">內部設備與耗材管理後台</h2>
          <p className="mes-sub">模擬內部營運系統：具備數據統計看板、多條件過濾搜尋與 CRUD 狀態生命週期控制</p>
        </div>

        {/* 1. 核心看板指標 (KPI Cards) */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <span className="kpi-label">登記總品項</span>
            <span className="kpi-value">{stats.total}</span>
          </div>
          <div className="kpi-card kpi-pending">
            <span className="kpi-label">待處理項目</span>
            <span className="kpi-value">{stats.pending}</span>
          </div>
          <div className="kpi-card kpi-processing">
            <span className="kpi-label">處理中項目</span>
            <span className="kpi-value">{stats.processing}</span>
          </div>
          <div className="kpi-card kpi-completed">
            <span className="kpi-label">已結案項目</span>
            <span className="kpi-value">{stats.completed}</span>
          </div>
        </div>

        {/* 2. 新增品項表單 */}
        <div className="section-box">
          <div className="box-title">快速登記新項目</div>
          <form onSubmit={handleAddItem} className="mes-form">
            <input 
              type="text" 
              placeholder="品項名稱 (例: HDMI 轉接線)" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)}
              className="mes-input"
              required
            />
            <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="mes-select">
              <option value="辦公設備">辦公設備</option>
              <option value="電腦周邊">電腦周邊</option>
              <option value="耗材用品">耗材用品</option>
            </select>
            <input 
              type="number" 
              placeholder="數量" 
              value={newQty} 
              onChange={(e) => setNewQty(e.target.value)}
              className="mes-input-sm"
              min="1"
              required
            />
            <button type="submit" className="mes-btn-submit">＋ 登記新增</button>
          </form>
        </div>

        {/* 3. 搜尋與過濾列 */}
        <div className="filter-bar">
          <div className="search-wrap">
            <input 
              type="text" 
              placeholder="🔍 搜尋編號或品項名稱..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            {['全部', '待處理', '處理中', '已結案'].map((status) => (
              <button
                key={status}
                className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* 4. 清單表格 */}
        <div className="mes-table-wrap">
          <table className="mes-table">
            <thead>
              <tr>
                <th>編號</th>
                <th>品項名稱</th>
                <th>分類</th>
                <th>數量</th>
                <th>登記日期</th>
                <th>目前狀態</th>
                <th>狀態變更 / 操作</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td className="font-mono">{item.id}</td>
                  <td className="font-semibold">{item.name}</td>
                  <td><span className="cat-pill">{item.category}</span></td>
                  <td>{item.qty}</td>
                  <td className="text-muted font-mono">{item.date}</td>
                  <td>
                    <span className={`status-tag status-${item.status}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-cell">
                      <select 
                        value={item.status} 
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="status-dropdown"
                      >
                        <option value="待處理">待處理</option>
                        <option value="處理中">處理中</option>
                        <option value="已結案">已結案</option>
                      </select>
                      <button 
                        onClick={() => handleDeleteItem(item.id)} 
                        className="btn-delete"
                        title="刪除品項"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan="7" className="table-empty">
                    查無相符的品項資料。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 表格底部資訊 */}
        <div className="table-footer">
          <span>顯示 {filteredItems.length} 筆資料（資料庫總計 {items.length} 筆）</span>
          <span>即時前端狀態管理連動中</span>
        </div>
      </div>
    </div>
  )
}