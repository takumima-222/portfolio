# Portfolio

シンプルな個人ポートフォリオサイトです。HTML / CSS / JavaScript のみで構成されています。

## 構成

- `index.html` — ページ本体
- `style.css` — スタイル
- `script.js` — ナビゲーションの開閉、お問い合わせフォームのバリデーション

## ローカルでの確認方法

`index.html` をブラウザで直接開くか、以下のように簡易サーバーを起動してください。

```bash
npx serve .
```

## テスト

`script.js` のメールアドレス検証ロジックには Node.js の組み込みテストランナーを使ったテストがあります。

```bash
npm test
```

## ライセンス

MIT
