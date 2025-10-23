// ユニバーサルフレームワーク定義
// 3フェーズ: Planning, Execution, Closing

export const UNIVERSAL_FRAMEWORK = {
  planning: {
    name: 'Planning',
    label: 'プランニング',
    items: [
      // 問題定義（Are Your Lights On? の要点）
      { id: 'p1', text: '誰の問題か、本当に「問題」なのか（症状 vs. 本質）？' },
      { id: 'p2', text: '解決後の状態（Definition of Done）と"困りごとが消えた証拠"は何か？' },
      { id: 'p3', text: '影響範囲（誰が得をし、誰が損をするか）と制約・前提は何か？' },
      { id: 'p4', text: 'スコープ内外、期限、成功指標（KGI/KPI）とその測定方法は何か？' },
      // 論点設計（Issue-driven）
      { id: 'p5', text: '上位イシュー → 下位イシューの分解（MECE）と優先度は何か？' },
      { id: 'p6', text: '仮説の初期設定・反証条件・成否判定基準（So What?/Why So?）' },
      // 価値・契約・期待値
      { id: 'p7', text: '成果物の粒度（経営向け要約／実務向け詳細）は何か？' },
      { id: 'p8', text: 'レビュー・承認ゲートのタイミングとその時の成果物は？' },
      { id: 'p9', text: '変更管理（スコープ変更時の判断基準・有償/次フェーズ化）？' },
      { id: 'p10', text: 'RACI/体制、利害関係者マップ、コミュニケーション頻度とチャンネルは何か？' },
      // 計画化（WBS/スプリント）
      { id: 'p11', text: '主要マイルストーン、クリティカルパス、バッファ（納期逆算）' },
      { id: 'p12', text: '品質基準：Definition of Ready/Done、受入条件（テスト観点含む）' },
      { id: 'p13', text: '標準フォーマット：議事録、意思決定記録、仮説検証ログ、リスク台帳を用意できないか' },
      // 変更・定着を見据えた設計
      { id: 'p14', text: '小さな一歩／トリガー／仕組み化（行動変容の設計）' },
      { id: 'p15', text: '受け手の動機・抵抗要因・現場の負担とインセンティブ' },
      // 文書・表現（国語力／可視化）
      { id: 'p16', text: '目的→結論→根拠（SCQA/PEST/3Cなど）で"1スライド＝1メッセージ"' },
      { id: 'p17', text: '用語定義・前提条件・単位と分母／グラフの読解手順を明示' }
    ]
  },
  
  execution: {
    name: 'Execution',
    label: 'エグゼキューション',
    items: [
      // デイリー運用
      { id: 'e1', text: '日次ゴールと進捗判定基準、障害・依存関係の可視化' },
      { id: 'e2', text: '中間デリバリーの短サイクル化（ドラフト→レビュー→反映）' },
      { id: 'e3', text: '決定事項／仮説更新／リスクログの即時更新（No Surprises）' },
      // 検証と意思決定
      { id: 'e4', text: '反証重視の検証（代替仮説・バイアス対策・サンプル妥当性）' },
      { id: 'e5', text: '実験・PoC・A/Bの設計（成功/失敗の事前定義と停止条件）' },
      { id: 'e6', text: '前提変化のトリアージ（市場・内部事情・規制）' },
      // ステークホルダー運用
      { id: 'e7', text: '定例の要約（エグゼク向け1枚＋詳細）／意思決定アジェンダの事前配布' },
      { id: 'e8', text: '反対論点の先回り整理・エスカレーション経路・合意形成の落とし所' },
      // 品質管理（書きぶり＆数的正確性）
      { id: 'e9', text: '正確性・一貫性・再現性・出典・単位／分母の明記' },
      { id: 'e10', text: 'MECEチェックと"重複/漏れ/ダブスタ"の除去' },
      { id: 'e11', text: '能動態・主語動詞・結論先出しの徹底（読み手の負担最小化）' },
      // 変更管理
      { id: 'e12', text: 'スコープ外要求の扱い（受けない／有償化／次フェーズで提案）' },
      { id: 'e13', text: '影響分析と新ベースラインの明示（費用・納期・品質）' }
    ]
  },
  
  closing: {
    name: 'Closing',
    label: 'クロージング',
    items: [
      // 受入／合意形成
      { id: 'c1', text: '受入基準に沿ったエビデンスセット（差分・制約・残課題）' },
      { id: 'c2', text: '検収・決裁の文書化（議事録・確認メール・承認サイン）' },
      // 成果物パッケージング
      { id: 'c3', text: 'エグゼク要約（1–3枚）、詳細レポート、データ・計算書・再現手順' },
      { id: 'c4', text: '再利用テンプレ／FAQ／意思決定ログ（判断の背景を残す）' },
      // 運用移管・定着化
      { id: 'c5', text: 'To-Be業務フロー、責任者・RACI、30/60/90日プラン、教育資料' },
      { id: 'c6', text: 'KPIダッシュボード、最初の"成功体験"を生む案件の選定' },
      // 振り返り（学習の固定化）
      { id: 'c7', text: 'サーベイ（満足度/NPS）、Keep/Problem/Try、失敗カタログ化' },
      { id: 'c8', text: 'ケーススタディ化 → 社内ナレッジへの編入／次回提案の素地' },
      // クローズのコミュニケーション
      { id: 'c9', text: '感謝の一言と"次の打ち手"の示唆（再発注の種）' },
      { id: 'c10', text: '社内外の発信案（許諾範囲でのサクセスストーリー）' }
    ]
  }
};

export function getPhaseOrder() {
  return ['planning', 'execution', 'closing'];
}

export function initializeTaskPhases() {
  const phases = {};
  
  getPhaseOrder().forEach(phaseKey => {
    const phase = UNIVERSAL_FRAMEWORK[phaseKey];
    phases[phaseKey] = {
      name: phase.name,
      label: phase.label,
      completed: false,
      checklist: phase.items.map(item => ({
        ...item,
        checked: false,
        note: ''
      }))
    };
  });
  
  return phases;
}
