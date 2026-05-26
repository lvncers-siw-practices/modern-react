import "./App.css";

function App() {
  function handleSelect(name: string) {
    console.log(`${name}が選択されました`);
  }

  return (
    <div>
      <button onClick={() => handleSelect("A商品")}>A商品</button>
      <button onClick={() => handleSelect("B商品")}>B商品</button>
      <button onClick={() => handleSelect("C商品")}>C商品</button>
    </div>
  );
}

export default App;
