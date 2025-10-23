// ユニバーサルフレームワーク定義
// 3フェーズ: Planning (22項目), Execution (17項目), Closing (12項目)

export const UNIVERSAL_FRAMEWORK = {
  planning: {
    name: 'Planning',
    label: 'プランニング',
    items: [
      { id: 'p1', text: '目的・背景の明確化' },
      { id: 'p2', text: '成功基準の定義' },
      { id: 'p3', text: 'スコープの設定' },
      { id: 'p4', text: '主要課題の特定' },
      { id: 'p5', text: '課題の構造化・分析' },
      { id: 'p6', text: 'ステークホルダーの特定' },
      { id: 'p7', text: 'ステークホルダーマップの作成' },
      { id: 'p8', text: '役割・責任の明確化（RACI）' },
      { id: 'p9', text: 'アプローチ・方法論の選定' },
      { id: 'p10', text: 'WBS（作業分解構造）の作成' },
      { id: 'p11', text: 'マイルストーンの設定' },
      { id: 'p12', text: 'スケジュールの策定' },
      { id: 'p13', text: 'リソース計画' },
      { id: 'p14', text: '予算計画' },
      { id: 'p15', text: 'リスクの特定' },
      { id: 'p16', text: 'リスク分析・評価' },
      { id: 'p17', text: 'リスク対応策の策定' },
      { id: 'p18', text: 'コミュニケーション計画' },
      { id: 'p19', text: '品質基準の設定' },
      { id: 'p20', text: '変更管理プロセスの定義' },
      { id: 'p21', text: '承認プロセスの確認' },
      { id: 'p22', text: 'キックオフの実施' }
    ]
  },
  
  execution: {
    name: 'Execution',
    label: 'エグゼキューション',
    items: [
      { id: 'e1', text: 'デイリーオペレーションの実行' },
      { id: 'e2', text: '進捗のトラッキング' },
      { id: 'e3', text: '進捗レポートの作成' },
      { id: 'e4', text: 'ステークホルダーへの報告' },
      { id: 'e5', text: '定例会議の実施' },
      { id: 'e6', text: '成果物のレビュー' },
      { id: 'e7', text: '品質チェック・検証' },
      { id: 'e8', text: '課題の記録・管理' },
      { id: 'e9', text: '是正措置の実施' },
      { id: 'e10', text: '変更要求の管理' },
      { id: 'e11', text: 'リスクモニタリング' },
      { id: 'e12', text: 'リスク対応の実施' },
      { id: 'e13', text: 'ステークホルダー対応' },
      { id: 'e14', text: 'チーム調整・サポート' },
      { id: 'e15', text: 'スケジュール調整' },
      { id: 'e16', text: 'リソース調整' },
      { id: 'e17', text: 'ドキュメント更新' }
    ]
  },
  
  closing: {
    name: 'Closing',
    label: 'クロージング',
    items: [
      { id: 'c1', text: '成果物の最終確認' },
      { id: 'c2', text: '検収・承認取得' },
      { id: 'c3', text: 'ドキュメント整備' },
      { id: 'c4', text: '運用マニュアルの作成' },
      { id: 'c5', text: '引き継ぎ資料の作成' },
      { id: 'c6', text: '引き継ぎセッションの実施' },
      { id: 'c7', text: '振り返り会議の実施' },
      { id: 'c8', text: '学びのドキュメント化' },
      { id: 'c9', text: 'ナレッジベースへの登録' },
      { id: 'c10', text: '最終報告書の作成' },
      { id: 'c11', text: 'ステークホルダーへの完了報告' },
      { id: 'c12', text: 'プロジェクト完了手続き' }
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
