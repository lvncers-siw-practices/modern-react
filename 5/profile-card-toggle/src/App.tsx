import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <h1>プロフィール</h1>
      <div>髙橋希尋</div>
      <div>フルスタックエンジニア志望</div>

      <button onClick={handleToggle}>{isOpen ? "閉じる" : "詳細を表示"}</button>

      {isOpen && (
        <section>
          <h2>詳細情報</h2>
          <p>React、TypeScript、UI設計を学習中です。</p>
          <p>
            将来は使いやすいWebアプリケーションを作れるエンジニアを目指しています。
          </p>
        </section>
      )}
    </main>
  );
}

export default App;
