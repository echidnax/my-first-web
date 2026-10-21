import { useState, useEffect } from 'react'

export default function ApiPractice() {
  const [todo, setTodo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        // 發送真實 HTTP GET 請求到外部公開測試 API
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const result = await res.json()
        setTodo(result)
      } catch (error) {
        console.error('API 串接錯誤:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return <div style={{ padding: '24px', textAlign: 'center' }}>遠端資料載入中...</div>
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '24px',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#0f172a' }}>真實遠端 API 串接實測</h3>
      <div style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#334155' }}>
        <div><strong>來源端點：</strong> <code>https://jsonplaceholder.typicode.com/todos/2</code></div>
        <div><strong>任務編號 (ID)：</strong> {todo?.id}</div>
        <div><strong>任務內容 (Title)：</strong> {todo?.title}</div>
        <div>
          <strong>完成狀態 (Status)：</strong>{' '}
          <span style={{
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: '600',
            fontSize: '0.8rem',
            background: todo?.completed ? '#dcfce7' : '#fee2e2',
            color: todo?.completed ? '#15803d' : '#b91c1c'
          }}>
            {todo?.completed ? '已完成' : '未完成'}
          </span>
        </div>
      </div>
    </div>
  )
}