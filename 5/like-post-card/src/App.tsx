import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <main>
      <article>
        <h2>今日の学習メモ</h2>
        <p>Reactでは、stateを更新すると画面が再描画されます。</p>

        <button onClick={handleLike}>
          {liked ? "♥ いいね済み" : "♡ いいね"}
        </button>

        <p>いいね数：{liked ? 1 : 0}</p>
      </article>
    </main>
  );
}

export default App;
