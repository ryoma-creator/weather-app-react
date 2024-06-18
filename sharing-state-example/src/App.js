import { useState } from 'react';

function Panel({ title, children, isActive, onShow, onHide }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <>
          <p>{children}</p>
          <button onClick={onHide}>Hide</button>
        </>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  const [activeIndexes, setActiveIndexes] = useState([]); // 空の配列で初期化

  const handleShow = (index) => {
    setActiveIndexes([...activeIndexes, index]); // 配列に要素を追加
  };

  const handleHide = (index) => {
    setActiveIndexes(activeIndexes.filter((i) => i !== index)); // 配列から要素を削除
  };

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndexes.includes(0)} // 配列に0が含まれているかどうかで判定
        onShow={() => handleShow(0)}
        onHide={() => handleHide(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndexes.includes(1)}
        onShow={() => handleShow(1)}
        onHide={() => handleHide(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}