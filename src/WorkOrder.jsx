import React, { useState } from 'react'
import './WorkOrder.css' 

export default function WorkOrder({ onBack }) {
  // 通用練習用假資料：日常辦公用品
  const [items, setItems] = useState([
    { id: 'ITEM-01', name: '27 吋電腦螢幕', category: '辦公設備', qty: 2, status: '處理中' },
    { id: 'ITEM-02', name: '無線鍵盤滑鼠組', category: '電腦周邊', qty: 5, status: '待處理' },
    { id: 'ITEM-03', name: 'A4 影印紙 (箱)', category: '耗材用品', qty: 20, status: '已結案' },
  ])

  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('辦公設備')
  const [newQty, setNewQty] = useState('')

  // 狀態任意切換（按錯隨時可以改回來）
  const handleStatusChange = (id, newStatus) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ))
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

    const newItem = {
      id: `ITEM-${String(nextNumber).padStart(2, '0')}`,
      name: newName,
      category: newCategory,
      qty: Number(newQty),
      status: '待處理'
    }

    setItems([...items, newItem])
    setNewName('')
    setNewQty('')
  }

  return (
    <div className="layout">
      {/* 頂部導航列 */}
      <div className="demo-nav">
        <button onClick={onBack} className="btn-back">
          ← 返回個人履歷
        </button>
        <span className="demo-badge">React Interactive Demo</span>
      </div>

      <div className="mes-container">
        <div className="mes-header">
          <h2 className="mes-title">內部品項與工單管理後台 (Demo)</h2>
          <p className="mes-sub">練習 React 狀態管理與常見內部後台清單操作（新增、狀態切換、移除）</p>
        </div>

        {/* 新增品項表單 */}
        <form onSubmit={handleAddItem} className="mes-form">
          <input 
            type="text" 
            placeholder="品項名稱 (例: 延長線)" 
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
            required
          />
          <button type="submit" className="mes-btn-submit">＋ 新增品項</button>
        </form>

        {/* 清單表格 */}
        <div className="mes-table-wrap">
          <table className="mes-table">
            <thead>
              <tr>
                <th>編號</th>
                <th>品項名稱</th>
                <th>分類</th>
                <th>數量</th>
                <th>目前狀態</th>
                <th>操作 / 變更狀態</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="font-mono">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.qty}</td>
                  <td>
                    <span className={`status-tag status-${item.status}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-cell">
                      {/* 下拉選單：隨時可切換狀態，按錯也能換回來 */}
                      <select 
                        value={item.status} 
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="status-dropdown"
                      >
                        <option value="待處理">待處理</option>
                        <option value="處理中">處理中</option>
                        <option value="已結案">已結案</option>
                      </select>

                      {/* 刪除按鈕 */}
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
              {items.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>
                    目前無品項資料，請從上方新增。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}