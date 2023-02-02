import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "800px",
        color: "#7d7d7d",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          padding: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
          }}
        >
          株式会社 Sator
        </h1>
        <p
          style={{
            margin: "10px 0",
          }}
        >
          研究及び受託開発における実務経験を元に設立された受託開発会社です。
          大学や研究所、製薬会社などをターゲットとし、システム開発、研究インフラの整備・構築、受託解析などの業務を行っています。
        </p>
        <p
          style={{
            margin: "10px 0",
          }}
        >
          当社は、開発においてコンサルティングから実際の開発までを一貫して行うことで、お客様の要望に応じた最適な解決策を提供します。
          技術的には、フロントエンド・バックエンド・インフラなど、幅広い技術力を持ち合わせています。
          また、バイオインフォマティクスや機械学習などの分野における研究経験もあり、迅速かつ確実にお客様の要望に応えることができます。
        </p>
        <h2
          style={{
            fontSize: "1.4rem",
            margin: "20px 0 10px",
          }}
        >
          会社情報
        </h2>
        <ul>
          <li>社名: 株式会社 Sator</li>
          <li>設立: 2023年1月</li>
          <li>役員: 代表取締役 角崎 太郎</li>
          <li>資本金: 300万円</li>
          <li>連絡先: general [at] sator.co.jp</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
