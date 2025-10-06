// Task type frameworks with phases
const TASK_FRAMEWORKS = {
  '課題定義・論点設計': {
    input: [
      '依頼者の名前を確認する。',
      '最終決裁者（最後に決める人）を確認する。',
      '目的（何のためか）を一文で書く。',
      '期待する成果物の形（例：1枚サマリ、スライド10枚）を確認する。',
      '期限（日付と時刻）を確認する。',
      '評価軸（何で良し悪しを決めるか）を1行で書く。',
      '制約（使えるお金・人・時間・データ）を一覧にする。',
      '関係者（影響がある人）をリスト化する。',
      '用語の意味を合わせる（例：「売上」「顧客」などを定義する）。',
      '過去に同じことをやっていないかを聞く。',
      '既にある資料を集める。',
      '想定外に起きやすいことを3つ書き出す。'
    ],
    progress: [
      '大きな問い（Top論点）を仮に決めて書く。',
      'スコープの「入れる」「入れない」を別々に書く。',
      '大きな問いを小さな問いに分けて一覧にする。',
      '各問いに必要な事実（数字・根拠）を書く。',
      '先に仮説（こうだと思う）を1行で書く。',
      '仮説を確かめるための当て先（データ・人）を決める。',
      '前提（こういう条件の上で成り立つ）を表に書く。',
      'リスク（失敗のもと）を表に書く。',
      'Issue（今困っていること）を表に書く。',
      'Decision（決めたこと）を表に書く。',
      '1枚のラフ構成（結論→根拠→次アクション）を描く。',
      '依頼者に途中の考えを5分で共有する。'
    ],
    output: [
      'ブリーフ（目的・Top論点・スコープ・前提・期限）を1枚にまとめる。',
      '判断に必要な事実リストを1枚にまとめる。',
      '次にやること（誰が・いつまでに）を表にする。',
      '不確実な点（まだ決まっていない点）を一言で書く。'
    ]
  },
  'リサーチ': {
    input: [
      '何を決めるための調査かを一文で書く。',
      '必要な出所（公的統計・IR・記事・論文・有識者）を並べる。',
      'いつの情報が必要か（最新・直近1年など）を書く。',
      '比較軸（例：価格・機能・品質・導入のしやすさ）を決める。'
    ],
    progress: [
      '情報の出所と日付を必ずメモする。',
      '事実と意見を分けてメモする。',
      '同じ定義で数字をそろえる。',
      '競合を同じ表で横並び比較する。',
      '気づき（示唆）を各ページに1行で書く。',
      '情報の穴（まだない情報）をメモする。',
      '穴を埋める方法（追加調査・インタビュー）を書き足す。'
    ],
    output: [
      '必要最小限のファクト（表・グラフ）だけをまとめる。',
      '各ファクトの意味（So What）を1行で書く。',
      '次のアクション（誰が・何を・いつ）を最後に書く。'
    ]
  },
  'データ分析・モデル化': {
    input: [
      '目的の数字（KPI）を一つ決めて書く。',
      '期間（例：2024年1月〜3月）を決めて書く。',
      'データの在りか（ファイル・DB・担当者）を確認する。',
      'データ品質（抜け・重複・更新頻度）を点検する。',
      '使う分析の型（集計・回帰・シミュレーション）を決める。'
    ],
    progress: [
      '前処理の手順を手順書に書く。',
      '計算の式をメモに残す。',
      '途中結果をグラフで確認する。',
      '感度分析（前提を±で動かす）を実行する。',
      '想定外の値をチェックする。',
      '前提の変更が結論に与える影響を書き出す。',
      '結果の限界（ここまでは言える・ここからは言えない）を言葉にする。'
    ],
    output: [
      '前提一覧表を1枚にまとめる。',
      '計算フロー図を1枚に描く。',
      'シナリオ別の結果表を1枚にまとめる。',
      '決めに使う数字だけをラスト1枚に載せる。',
      '補足の細かい分析は付録に分ける。'
    ]
  },
  '戦略・施策設計': {
    input: [
      '目標（何を達成するか）を1行で書く。',
      '評価軸（効果・実現性・費用・スピード・リスク）を並べる。',
      '使える資源（人・お金・データ・設備）を書き出す。',
      '触ってはいけない範囲（不可侵領域）を書き出す。'
    ],
    progress: [
      '施策の案を数多く出す（質より量で出す）。',
      '案を評価軸で点数づけする。',
      '上位の案を3つに絞る。',
      '各案の良い点・悪い点を書き分ける。',
      '推奨案を1つに決める。',
      'その理由を3行で書く。',
      '30日・60日・90日の実行ステップを書く。',
      'つまずきやすい点を先に書く。',
      'つまずき対策（回避策）をセットで書く。'
    ],
    output: [
      '推奨案の1枚サマリを作る。',
      '比較表（捨てた案と残した案）を作る。',
      '実行ロードマップ（いつ・誰が・何を）を作る。'
    ]
  },
  '実行計画・PMO': {
    input: [
      '成果物（できあがりの姿）を一文で書く。',
      '受け入れ条件（完了の定義）を箇条書きにする。',
      'マイルストーン（重要な日付）を決める。',
      'WBS（作業の分解表）を作る。',
      'RACI（実行・責任・相談・報告の役割）を決める。',
      '会議の頻度（全体会・課題会・決裁会）を決める。'
    ],
    progress: [
      'RAID（リスク・前提・問題・決定）を表で更新する。',
      'スコープ変更の受付方法を書く。',
      '変更の影響（工数・費用・日程）を見積もる。',
      '変更の承認者を明確にする。',
      '進捗の見える化（計画対実績）を週次で更新する。',
      '重要な遅れを早めにエスカレーションする。',
      'ナレッジ（学び）を都度メモする。'
    ],
    output: [
      '実行台帳（WBS・クリティカルパス・RAID）を配布する。',
      '定例会レポート（進捗・課題・次アクション）を出す。',
      '次四半期の計画案を提示する。'
    ]
  },
  'チェンジマネジメント': {
    input: [
      '関係者を「影響力×関心」でマップ化する。',
      '各関係者の「得」になる点を書く。',
      '各関係者の不安点を書く。',
      '望ましい行動（誰が・いつ・何をする）を書く。'
    ],
    progress: [
      'メッセージ（なぜ・自分の得・やり方）を作る。',
      '伝える人（スポークスパーソン）を決める。',
      '研修の内容と日程を作る。',
      '最初の成功事例を作る。',
      '反発の声を集めて記録する。',
      '是正の手順（聞く→合意→ルール反映）を実施する。'
    ],
    output: [
      'コミュニケーション計画を発行する。',
      '教育計画を発行する。',
      '運用ルールを発行する。',
      '定着KPI（利用率・満足度）を設定する。'
    ]
  },
  '意思決定設計・ガバナンス': {
    input: [
      '決める領域ごとに権限を決める。',
      '判断基準（OKの幅）を書く。',
      '例外の扱い方を書く。',
      '監査に必要な記録（ログ・証跡）を決める。'
    ],
    progress: [
      '提出物のテンプレートを作る。',
      '審議の時間配分を決める。',
      '逸脱を見つける方法を書き出す。',
      '逸脱時の手順（検知→一次対応→恒久対策）を運用する。',
      '規程の見直し時期を決める。'
    ],
    output: [
      'ガバナンス文書（基準・フロー・監査）を発行する。',
      '運用ダッシュボード（遵守率・例外件数）を公開する。'
    ]
  },
  '成果検証・レビュー': {
    input: [
      '期待値（目標値・期間・計算式）を書く。',
      '取得方法（誰が・いつ・どこから）を書く。',
      'やめる基準（撤退条件）を書く。'
    ],
    progress: [
      '実績値を同じ定義で集計する。',
      '外部要因（季節・他施策）を書き出す。',
      '代わりの説明（他の理由）を考えて書く。',
      '学び（効いた点・効かなかった点）を3行で書く。'
    ],
    output: [
      '期待と実績の比較表を作る。',
      '継続・縮小・停止の判断を書いて提出する。',
      '次の改善案と期限を書いて提出する。'
    ]
  },
  'ナレッジ化・横展開': {
    input: [
      '再利用できる資料を選ぶ。',
      'メタ情報（対象・条件・注意点）を付ける。',
      '保管場所と名前の付け方を決める。'
    ],
    progress: [
      '1枚サマリを作る。',
      '使い方の説明を1ページ作る。',
      'よくある失敗を3点書く。',
      'レビュー担当と更新頻度を決める。',
      '展開先の優先度を書き出す。',
      '導入支援（トレーニング・伴走）の手順を書く。'
    ],
    output: [
      '標準パック（テンプレ・チェックリスト・事例・FAQ）を公開する。',
      '利用状況（閲覧・複製・成果への寄与）を記録する。'
    ]
  }
};

import { fetchJSON, putJSON } from './api.js';
import { createElement, clearElement, formatDate, showModal, hideModal } from './dom.js';

let currentTask = null;
let currentPhase = 'input';

async function init() {
  const params = new URLSearchParams(window.location.search);
  const taskId = params.get('id');
  
  if (!taskId) {
    alert('タスクIDが見つかりません');
    window.location.href = '/';
    return;
  }
  
  try {
    const tasks = await fetchJSON('/api/tasks');
    currentTask = tasks.find(t => t.id === taskId);
    
    if (!currentTask) {
      alert('タスクが見つかりません');
      window.location.href = '/';
      return;
    }
    
    renderTaskDetail();
    setupEventListeners();
  } catch (err) {
    console.error('Failed to load task:', err);
    alert('タスクの読み込みに失敗しました');
  }
}

function renderTaskDetail() {
  document.getElementById('task-name').textContent = currentTask.name;
  document.getElementById('task-status').textContent = currentTask.status;
  document.getElementById('task-status').className = `status-badge status-${currentTask.status}`;
  
  // Display field values (no inline editing)
  document.getElementById('task-purpose').textContent = currentTask.purpose || '-';
  document.getElementById('task-type').textContent = currentTask.taskType || '-';
  document.getElementById('task-stakeholders').textContent = currentTask.stakeholders || '-';
  document.getElementById('task-start').textContent = formatDate(currentTask.startDate);
  document.getElementById('task-end').textContent = formatDate(currentTask.endDate);
  
  renderJournals();
  renderTaskFramework();
}

function renderJournals() {
  const container = document.getElementById('journals-container');
  clearElement(container);
  
  if (!currentTask.journals || currentTask.journals.length === 0) {
    container.appendChild(createElement('p', { style: 'color: #64748b;' }, [
      'No journal entries yet.'
    ]));
    return;
  }
  
  // Sort journals by date (newest first)
  const sortedJournals = [...currentTask.journals].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  sortedJournals.forEach((journal, index) => {
    const dateEl = createElement('div', { 
      className: 'journal-date',
      style: 'cursor: pointer;',
      title: 'クリックして日付を編集'
    }, [formatDate(journal.date)]);
    
    dateEl.onclick = async () => {
      const input = document.createElement('input');
      input.type = 'date';
      input.value = journal.date.split('T')[0];
      input.className = 'inline-edit-input';
      
      dateEl.textContent = '';
      dateEl.appendChild(input);
      input.focus();
      
      const saveDate = async () => {
        const actualIndex = currentTask.journals.findIndex(j => j.date === journal.date && j.entry === journal.entry);
        if (actualIndex !== -1) {
          currentTask.journals[actualIndex].date = new Date(input.value).toISOString();
          await saveTask();
          renderJournals();
        }
      };
      
      input.onblur = saveDate;
      input.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          saveDate();
        } else if (e.key === 'Escape') {
          renderJournals();
        }
      };
    };
    
    const entry = createElement('div', { className: 'journal-entry' }, [
      dateEl,
      createElement('div', { className: 'journal-text' }, [journal.entry])
    ]);
    container.appendChild(entry);
  });
}

function renderTaskFramework() {
  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) {
    document.querySelector('.phase-container').style.display = 'none';
    return;
  }
  
  document.getElementById('framework-type').textContent = currentTask.taskType;
  
  // Render phase tabs
  const nav = document.getElementById('phase-nav');
  clearElement(nav);
  
  ['input', 'progress', 'output'].forEach(phase => {
    const tab = createElement('button', {
      className: `phase-tab ${phase === currentPhase ? 'active' : ''}`,
      onClick: () => switchPhase(phase)
    }, [phase.charAt(0).toUpperCase() + phase.slice(1)]);
    nav.appendChild(tab);
  });
  
  renderPhaseContent();
}

function renderPhaseContent() {
  const container = document.getElementById('phase-content-container');
  clearElement(container);
  
  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) return;
  
  const items = framework[currentPhase];
  if (!items) return;
  
  // Initialize phases if not exists
  if (!currentTask.phases) {
    currentTask.phases = {
      input: { completed: false, items: {} },
      progress: { completed: false, items: {} },
      output: { completed: false, items: {} }
    };
  }
  
  const phaseData = currentTask.phases[currentPhase];
  
  const content = createElement('div', { className: 'phase-content active' }, []);
  
  const checklist = createElement('ul', { className: 'checklist' }, []);
  
  items.forEach((item, idx) => {
    const itemKey = `item_${idx}`;
    const itemData = phaseData.items[itemKey] || { checked: false, note: '' };
    
    const checkbox = createElement('input', {
      type: 'checkbox',
      checked: !!itemData.checked,
      onChange: (e) => {
        phaseData.items[itemKey] = {
          ...itemData,
          checked: e.target.checked
        };
        saveTask();
      }
    });
    
    const textarea = createElement('textarea', {
      placeholder: 'Notes...',
      onBlur: (e) => {
        phaseData.items[itemKey] = {
          ...itemData,
          note: e.target.value
        };
        saveTask();
      }
    });
    textarea.value = itemData.note || '';
    
    const li = createElement('li', {}, [
      createElement('div', { className: 'checklist-header' }, [
        checkbox,
        createElement('div', { style: 'flex: 1;' }, [item])
      ]),
      textarea
    ]);
    
    checklist.appendChild(li);
  });
  
  content.appendChild(checklist);
  
  const actions = createElement('div', { className: 'phase-actions' }, [
    createElement('button', {
      className: 'btn btn-primary',
      onClick: () => completePhase()
    }, ['フェーズを完了'])
  ]);
  
  content.appendChild(actions);
  container.appendChild(content);
}

function switchPhase(phase) {
  currentPhase = phase;
  
  // Update active tab
  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderPhaseContent();
}

function completePhase() {
  if (!currentTask.phases) return;
  
  currentTask.phases[currentPhase].completed = true;
  
  // Move to next phase
  if (currentPhase === 'input') {
    currentPhase = 'progress';
  } else if (currentPhase === 'progress') {
    currentPhase = 'output';
  } else {
    alert('すべてのフェーズが完了しました!');
  }
  
  saveTask();
  renderTaskFramework();
}

async function saveTask() {
  try {
    await putJSON(`/api/tasks/${currentTask.id}`, currentTask);
  } catch (err) {
    console.error('Failed to save task:', err);
  }
}

function setupEventListeners() {
  document.getElementById('back-btn').addEventListener('click', () => {
    window.history.back();
  });
  
  document.getElementById('edit-task-btn').addEventListener('click', () => {
    const form = document.getElementById('edit-task-form');
    form.elements.id.value = currentTask.id;
    form.elements.purpose.value = currentTask.purpose || '';
    form.elements.taskType.value = currentTask.taskType;
    form.elements.stakeholders.value = currentTask.stakeholders || '';
    form.elements.startDate.value = currentTask.startDate;
    form.elements.endDate.value = currentTask.endDate;
    showModal('edit-task-modal');
  });
  
  document.getElementById('edit-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const oldTaskType = currentTask.taskType;
    const newTaskType = e.target.elements.taskType.value;
    
    // Check if task type changed
    if (oldTaskType !== newTaskType) {
      if (!confirm('タスクタイプを変更すると、すべてのフェーズデータがリセットされます。続行しますか?')) {
        return;
      }
      currentTask.phases = {
        input: { completed: false, items: {} },
        progress: { completed: false, items: {} },
        output: { completed: false, items: {} }
      };
    }
    
    currentTask.purpose = e.target.elements.purpose.value;
    currentTask.taskType = newTaskType;
    currentTask.stakeholders = e.target.elements.stakeholders.value;
    currentTask.startDate = e.target.elements.startDate.value;
    currentTask.endDate = e.target.elements.endDate.value;
    
    await saveTask();
    renderTaskDetail();
    hideModal('edit-task-modal');
  });
  
  document.getElementById('cancel-edit-task').addEventListener('click', () => {
    hideModal('edit-task-modal');
  });
  
  document.getElementById('add-journal-btn').addEventListener('click', () => {
    showModal('journal-modal');
  });
  
  document.getElementById('journal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const entry = e.target.elements.entry.value;
    
    if (!currentTask.journals) {
      currentTask.journals = [];
    }
    
    currentTask.journals.push({
      date: new Date().toISOString(),
      entry
    });
    
    await saveTask();
    renderJournals();
    hideModal('journal-modal');
    e.target.reset();
  });
  
  document.getElementById('cancel-journal').addEventListener('click', () => {
    hideModal('journal-modal');
  });
  
  // Close modal handlers
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', init);
