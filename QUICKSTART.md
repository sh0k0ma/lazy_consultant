# Quick Start Guide

## インストールと起動

```bash
npm install
npm run dev
# http://127.0.0.1:3001
```

---

## 基本操作

### プロジェクト作成
1. 「+ Add Project」をクリック
2. 情報を入力して保存

### ワーク追加
プロジェクトカードの「+ Work」から作成

### タスク追加
ワークカードの「+ Task」から作成

### フレームワーク使用
1. タスクをクリック
2. プランニング / エグゼキューション / クロージング のタブを切り替え
3. チェックリストを確認・完了

### ナレッジ管理
「Knowledge」からエントリを追加・検索

---

## コマンド

```bash
npm run dev    # 開発モード
npm start      # 本番モード
```

---

## トラブルシューティング

### ポート使用中
```bash
lsof -i :3001
echo "PORT=3002" > .env && npm run dev
```

### データリセット
```bash
echo "[]" > src/data/*.json
```
