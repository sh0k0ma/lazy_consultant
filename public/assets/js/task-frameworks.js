export const TASK_FRAMEWORKS = {
  '施策の立案': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・意図合わせ',
        description: 'プロジェクトの「なぜ」と成功の定義を言語化し、スコープ・制約・体制・合意形成の土台を固める。問題の定義が曖昧だと以降はすべて空回りするため、「本当に解くべき問題は何か」を徹底的に詰める。',
        tasks: [
          {
            name: '関係者マッピングと期待値すり合わせ',
            description: '主要/周辺ステークホルダーを特定し、RACIで責任分担を可視化しつつ、明示/暗黙の期待値を聞き出して整合を取る（傾聴・ピラミッド原則）。成果物：Stakeholder Map、RACI、Expectation Notes。'
          },
          {
            name: '真の目的・課題の定義',
            description: '「5 Whys」と『Are Your Lights On?』の問題定義原則で"お願いの背景""症状と原因""成功の状態"を切り分け、論点（Key Question）を一文で定義。成果物：Problem Statement、論点宣言。'
          },
          {
            name: 'スコープ・制約・前提の固定化',
            description: 'In/Out、期間・予算・人員・法規制等の制約、依存関係と前提を文書化し"変更管理の起点"にする。成果物：Project Charter、Assumption & Constraint List。'
          },
          {
            name: '成功指標（KGI/KPI、Leading/Lagging）の仮設定',
            description: 'Whyに直結するKGIと、因果に基づくKPI（先行/遅行）を仮置き。可観測性・取得方法も同時に規定。成果物：KGI/KPI Tree、計測計画。'
          },
          {
            name: '進め方・体制・コミュニケーション設計',
            description: '意思決定会議体（ガバナンス）、レポート/報連相の頻度、成果物フォーマット、PMOダッシュボードを設計。成果物：Governance/Comms Plan、PMO板。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：論点設計・鍵問いの明確化',
        description: 'MECEで課題をロジックツリー化し、仮説と検証課題をひも付ける。最短で結論に至る"解くべき問い"を定義して調査コストを最小化。',
        tasks: [
          {
            name: 'Top論点の仮置き',
            description: '「So What?/Why So?」で結論仮説→検証論点→必要ファクトへ落とす（ピラミッド/論点思考）。成果物：Issue Tree（仮）。'
          },
          {
            name: 'キークエスチョン設計',
            description: '意思決定者の言語に合わせ、One Sentenceで"答えるべき問い"を定義（結論ファースト）。成果物：Key Questions List。'
          },
          {
            name: '仮説樹の構築',
            description: '仮説思考で"最有力仮説"を明示し、裏取りに必要なデータ/調査をぶら下げる。成果物：Hypothesis Tree。'
          },
          {
            name: '学習バックログの編成',
            description: '仮説検証に必要な分析/インタビュー/観察をチケット化し、優先度・完了条件（DoD）を定義。成果物：Learning Backlog。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：現状理解・情報収集（Where we are）',
        description: '一次/二次情報の線と面を揃え、事実に基づく土台をつくる。3C/PEST/SWOT、現地現物、VOCで多面的に把握。',
        tasks: [
          {
            name: '調査設計（定量/定性）',
            description: 'サンプリング、統計精度、バイアス対策、インタビュー設計（問いの順序/言い換え）を明文化。成果物：Research Plan。'
          },
          {
            name: '3C/PEST/SWOTの骨組み作成',
            description: '外部環境→自社/顧客/競合→内部資源の順で構造化し、仮説と照らして抜け/重複を点検。成果物：分析フレーム下書き。'
          },
          {
            name: '現地現物・VOC取得',
            description: '現場観察と顧客の声を一次情報として採取（録音/写真/発話メモの即時構造化）。成果物：VOCサマリー、現場メモ。'
          },
          {
            name: 'プロセスマッピング/バリューチェーン',
            description: 'As-Isの流れ・手戻り・滞留を可視化し、価値/コスト/リスクの発生点を同定。成果物：As-Is/痛点マップ。'
          },
          {
            name: 'ベンチマーキング',
            description: '先進事例の"仕組み"まで分解し、転用可能要素/不可要素を判別。成果物：Benchmark Brief。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：分析・示唆抽出',
        description: 'データを"洞察"に変換する。記述→診断→処方の順で因果仮説を評価し、解像度を上げる。',
        tasks: [
          {
            name: '定量分析（記述/差分/因果の当たり）',
            description: 'アウトライヤー/季節性/相関の見立て→簡易因果チェック→仮説の棄却/精緻化。成果物：Insight Sheet（定量）。'
          },
          {
            name: '定性のコード化とパターン抽出',
            description: '発話/観察をコード化し、反復モチーフとジョブを抽出。成果物：Theme Map（定性）。'
          },
          {
            name: '仮説検証スプリント',
            description: '短サイクルで"検証→更新"を回し、学習曲線を最大化。成果物：Sprint Log、仮説改訂履歴。'
          },
          {
            name: 'クリティカルシンキング/前提潰し',
            description: '前提・定義・単位系を明示して反証可能性を確保、思い込み排除。成果物：Assumption Test Sheet。'
          },
          {
            name: 'ストーリーライン試作',
            description: '結論→理由→証拠→含意の流れで"だから何"を磨く。成果物：1枚スケッチ（One-Slide Story）。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：施策デザイン（選択肢創出〜評価）',
        description: 'ゼロベースで多案を出し、Impact×Feasibility、リスク、UX/EX、エコシステムで評価。実装に堪える"仕組み化"まで落とす。',
        tasks: [
          {
            name: 'オプション創出（ゼロベース/ラテラル）',
            description: '制約一時解除→逆算思考→具体化の往復で大胆かつ実行可能な案を量産。成果物：Option Catalog。'
          },
          {
            name: 'Impact-Feasibility評価',
            description: '効果/コスト/リードタイム/依存を評価、Quick Winと本丸を層別化。成果物：優先度マトリクス。'
          },
          {
            name: 'UX/EX観点の体験設計',
            description: 'ターゲット行動のBefore/Afterをシナリオで設計、失敗時の代替動線も用意。成果物：サービス青写真。'
          },
          {
            name: 'リスク分析と先回り対策',
            description: '技術/運用/法務/レピュテーションのリスクを洗い出し、手戻り最小の回避/緩和策を定義。成果物：Risk Register。'
          },
          {
            name: '仕組み化・標準化設計',
            description: '属人タスクを役割/手順/チェックリストへ落とし込み、誰でも同品質で回せる状態に。成果物：SOP/Playbook。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：ビジネスケース・意思決定',
        description: '経営判断に耐える"数字と物語"を用意し、最終案を選定。ROI/NPV/感度分析と、簡潔で通る説明を両立。',
        tasks: [
          {
            name: 'コスト/便益/リソースの定量化',
            description: '投資/運用/変動費、効果見積の根拠を透明化し、レンジで示す。成果物：Business Case Sheet。'
          },
          {
            name: 'ロードマップと依存整理',
            description: '里程標（Milestone）とクリティカルパス、意思決定ゲートを設計。成果物：Roadmap。'
          },
          {
            name: '経営合意用ストーリー/資料',
            description: 'One-Slide/エレベーターピッチで"結論と根拠"を短時間で伝える資料を作成。成果物：Executive Deck。'
          },
          {
            name: '意思決定・承認プロセス実行',
            description: '前広の根回し→会議→条件付承認→反映まで一気通貫。成果物：決裁記録。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：実行設計・パイロット',
        description: '机上の計画を"現実のオペレーション"に接続。チェンジマネジメント、PMO、トレーニングで実装可能性を高め、リスクを安く学ぶ。',
        tasks: [
          {
            name: '体制/役割（RACI）とPMO運用',
            description: '実務責任の明確化、進捗・課題・リスクを一元管理するPMO板を整備。成果物：RACI、PMOダッシュボード。'
          },
          {
            name: 'コミュニケーション/エスカレーション設計',
            description: '報連相の頻度・様式、意思決定の経路、危機時のエスカレーション条件を定義。成果物：Comms Runbook。'
          },
          {
            name: 'トレーニング/ナレッジ移転',
            description: '役割別に必要技能を特定し、教材/演習/OJTを設計。成果物：Training Plan、教材。'
          },
          {
            name: 'パイロット設計・実施',
            description: '限定スコープで検証、成功/撤退基準と学習リストを事前定義。成果物：Pilot Plan、結果レビュー。'
          },
          {
            name: '変更影響・抵抗のマネジメント',
            description: '利害・感情の可視化、早期巻き込み、インセンティブ設計で抵抗を低減。成果物：Change Heatmap。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：本格展開・定着化（Execution at scale）',
        description: 'スモールから全社展開へ。Quick Winで推進力を作り、効果測定→学習→標準化で"定着"を実現する。',
        tasks: [
          {
            name: '本番展開・Quick Winの演出',
            description: '可視化しやすい成果を早期提示し、支援者を増やす。成果物：Rollout Plan、Win事例。'
          },
          {
            name: '効果測定とフィードバックループ',
            description: 'KGI/KPIの定点観測、逸脱時の是正アクション、仮説更新を仕組みにする。成果物：KPIモニタリング表、CA（Corrective Action）記録。'
          },
          {
            name: '標準化・マニュアル化',
            description: '成功手順をSOP/チェックリストに落とし、監査可能な状態へ。成果物：運用標準書、監査観点。'
          },
          {
            name: 'ナレッジトランスファーと自走化',
            description: '"コンサル不在でも回る"状態をゴールに、運用委譲・スキルトランスファーを完了。成果物：引継書、運用責任者の承認。'
          },
          {
            name: 'レトロスペクティブ/学習資産化',
            description: '成功/失敗の原因と再現条件を抽出し、次案件の出足を速める資産に集約。成果物：Lessons Learned。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クロージング・次の一手',
        description: '成果/残課題/次の仮説を明文化し、経営意思決定につなぐ。思考解像度を高く保ち、言語化の質で締める。',
        tasks: [
          {
            name: '最終成果物の統合・納品',
            description: 'Exective Summary→本編→付録の構成で、ワンスライド・ワンメッセージを徹底。成果物：最終報告書/付帯データ。'
          },
          {
            name: '未了課題・リスクの承継',
            description: '残課題/決め待ち/潜在リスクを移管し、ガバナンス下で追跡可能に。成果物：Open Issue Log、Risk Transfer Sheet。'
          },
          {
            name: '次の仮説・施策候補の提示',
            description: '今回の学習から"次に効く問い"を提示し、継続的改善の芯を残す。成果物：Next Hypotheses List。'
          }
        ]
      }
    ]
  },
  '課題の解決': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・問題定義（Kickoff & Problem Definition）',
        description: '症状と原因を混同せず、「本当に解くべき課題」を一行で定義し、成功の姿・境界・制約・体制を最初に固定する。曖昧さを残さないほど後工程のやり直しが減る。',
        tasks: [
          {
            name: 'ステークホルダー速写マップと期待値すり合わせ',
            description: '関係者を一次同定し（意思決定者/影響者/実務者/阻害要因）、RACIで役割を暫定化。初回1:1で暗黙の期待・懸念を引き出し（傾聴/質問設計）、認識ギャップをメモ。注意点：権限構造と非公式の力学を早期に把握。成果物：Stakeholder Map（暫定）、RACI（暫定）、Expectation Notes。'
          },
          {
            name: '「問題の言い換え」と5 Whys',
            description: '「依頼の文言」を事実・評価・欲求に分解し、『Are Your Lights On?』の原則で"依頼されたこと"と"解くべきこと"を分ける。5 Whysで症状→真因を掘り、So What?/Why So?で意味づけ。成果物：Problem Statement v1、5 Whys シート。'
          },
          {
            name: 'スコープ境界・制約・前提の固定化',
            description: 'In/Out、期間・予算・人員・法務・技術負債等を明文化し、変更管理の起点にする。注意点：曖昧語（例：高める/早める）を定義で潰す。成果物：Charter（Scope/Assumption/Constraint）。'
          },
          {
            name: '成功の定義（KGI/KPI）とTo-Be像',
            description: 'KGI（最終成果）と先行/遅行KPIを仮置き、取得方法と更新頻度まで決める。To-Be/As-Isの差分を一枚で可視化。成果物：KGI/KPIツリー、To-Be/Gap図。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：論点設計・検証設計',
        description: 'MECEで課題を分解し、解くべき鍵問い（Key Question）と検証計画を最短経路で束ねる。',
        tasks: [
          {
            name: 'Issue Tree（論点樹）の骨子化',
            description: '結論仮説→主要論点→必要事実の順でトップダウン設計。注意点：相互独立・全体網羅（MECE）と"数ではなく質"。成果物：Issue Tree v1。'
          },
          {
            name: 'Key Questionの一文化',
            description: '意思決定者の"問いの言語"で、答えるべき問いを一文に凝縮（ピラミッド原則/結論ファースト）。成果物：KQリスト。'
          },
          {
            name: '仮説樹と反証条件の設定',
            description: '仮説思考で最有力仮説→代替仮説を並走させ、各々の反証可能条件と必要データを紐づける。成果物：Hypothesis Tree、反証条件表。'
          },
          {
            name: '学習バックログとDoD',
            description: '分析/インタビュー/観察のチケット化、優先度、完了条件（Definition of Done）を明文化。成果物：Learning Backlog。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：現状分析・情報収集（Fact-Finding）',
        description: '一次/二次情報を設計通りに取りに行き、机上と現場のズレを潰す。3C/SWOT/PEST/BPM/VOCを目的適合で使い分ける。',
        tasks: [
          {
            name: 'リサーチ設計（定量×定性）',
            description: '母集団/サンプル/統計精度/バイアス対策、質問ガイド（広→深の順）を設計。成果物：Research Plan、質問票。'
          },
          {
            name: '現地現物・VOC・エキスパート聴取',
            description: '現場観察/ユーザー面談/有識者ヒアリングで一次情報を収集し、逐次コード化。注意点：誘導質問を避ける。成果物：観察ログ、VOCサマリ、Expertメモ。'
          },
          {
            name: '3C/PEST/SWOT/バリューチェーンの素描',
            description: '外部→顧客→競合→自社→内部資源の順でフレームを埋め、仮説との整合を点検。成果物：分析キャンバス一式。'
          },
          {
            name: '業務プロセスマップ（As-Is）',
            description: 'BPMNで流れ/手戻り/滞留を可視化、品質・コスト・リスクの発生点をマーク。成果物：As-Isプロセス図、痛点マップ。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：洞察化・真因特定',
        description: 'データを"示唆"に変換し、真因仮説を反証で絞り込む。言い切れる粒度まで解像度を上げる。',
        tasks: [
          {
            name: '定量の一次分析→仮説当たり',
            description: '欠損/外れ値処理→記述統計→差分/相関→簡易因果チェック（擬似相関に注意）。成果物：Insight Sheet（定量）。'
          },
          {
            name: '定性のコード化・テーマ抽出',
            description: '発話をオープン/軸/選択コードで整理し、"繰り返し語られるモチーフ"を抽出。成果物：Theme Map。'
          },
          {
            name: 'So What?/Why So? の反復',
            description: '得られた事実に意味づけ→根拠の検証→語の定義を明示（国語力の論理・文脈）。成果物：示唆スライド草案。'
          },
          {
            name: '真因仮説の反証テスト',
            description: '最有力仮説に対し、反証可能性を設計し代替仮説とA/Bで当てる。成果物：Refutation Log、仮説改訂履歴。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：解決策の創出・評価',
        description: 'ゼロベースで複数案を出し、Impact×Feasibility、リスク、UX/EX、ROIで客観比較。机上ではなく実装可能性にこだわる。',
        tasks: [
          {
            name: 'オプション幅出し（ゼロベース/ラテラル）',
            description: '制約を一時外し、逆算思考→具体化の往復で大胆かつ実行可能な案を量産。成果物：Option Catalog。'
          },
          {
            name: 'Impact×Feasibilityと優先度決定',
            description: '効果/コスト/期間/依存を評価し、Quick Winと本丸を層別化。成果物：優先度マトリクス、選定理由メモ。'
          },
          {
            name: 'リスク洗い出しと先回り対策',
            description: '技術・運用・法務・レピュテーションのリスクを登録し、回避/低減/受容/移転を設計。成果物：Risk Register。'
          },
          {
            name: 'UX/EX観点の体験設計',
            description: 'Before→Afterの行動変化、失敗時の代替動線を設計（サービス青写真）。成果物：UX/EXシナリオ、サービス青写真。'
          },
          {
            name: '費用対効果と感度分析',
            description: 'ROI/NPV/Cash Impactをレンジで提示し、前提の感度を開示。成果物：Business Case Sheet。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：実行計画・合意形成',
        description: '経営が意思決定できる"数字と物語"を整え、ロードマップとガバナンスで実行可能性を固める。',
        tasks: [
          {
            name: 'ロードマップ/クリティカルパス設計',
            description: 'マイルストーン、依存関係、意思決定ゲート、Exit基準を明確化。成果物：Roadmap、Milestone List。'
          },
          {
            name: 'ガバナンス/会議体・根回し',
            description: '決裁者別の関心事に合わせて事前合意形成を設計（政治力学/利害整理）。成果物：Governance Plan、Stakeholder Brief。'
          },
          {
            name: '経営合意資料（ピラミッド/1スライド1メッセージ）',
            description: '結論→理由→証拠→含意の順で短時間に通る資料を作る。成果物：Executive Deck、Elevator Pitch。'
          },
          {
            name: '契約/役割/成果基準の明文化',
            description: 'スコープ、受入基準、変更管理、責任分界を締結。成果物：実行覚書、RACI最終版。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：パイロット実行・チェンジマネジメント',
        description: '小さく始めて早く学ぶ。PMO・RACI・トレーニングで運用に乗せ、抵抗と学習をマネージする。',
        tasks: [
          {
            name: 'PMO立ち上げと運用板',
            description: '進捗/課題/リスクを一元管理、エスカレーション条件と頻度を定義。成果物：PMOダッシュボード、運用Runbook。'
          },
          {
            name: 'パイロット設計・実施',
            description: '限定スコープで試行し、成功/撤退基準を事前定義。成果物：Pilot Plan、結果レビュー。'
          },
          {
            name: 'トレーニング/ナレッジ移転',
            description: '役割別教材とOJT、FAQ/既知の落とし穴を可視化。成果物：Training Kit、KT記録。'
          },
          {
            name: 'PDCAと逸脱是正',
            description: 'KPI乖離の原因→対策→効果検証を短サイクルで回す。成果物：KPIモニタ、CA/PA記録。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：本格展開・定着化（Rollout & Embedding）',
        description: 'Quick Winで推進力を維持しつつ、標準化・ガバナンス・インセンティブで"新しい当たり前"にする。',
        tasks: [
          {
            name: 'ロールアウト計画とQuick Win演出',
            description: '可視化しやすい成果を早期に提示し支持者を増やす。成果物：Rollout Plan、Win事例。'
          },
          {
            name: '標準化・文書化・監査性の確保',
            description: 'SOP/チェックリスト化し、監査可能な運用へ。成果物：運用標準書、監査観点。'
          },
          {
            name: 'インセンティブ/評価制度の整合',
            description: '望ましい行動に報いる評価・賞罰を制度と接続。成果物：Incentive設計メモ。'
          },
          {
            name: '効果測定と継続改善',
            description: 'KGI/KPIの定点観測、仮説更新を制度化。成果物：定点レポート、改善バックログ。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クロージング・次の課題へ',
        description: '成果・学習・未了課題を経営に接続し、再現可能な"勝ち筋"として資産化。次の問いを残して終える。',
        tasks: [
          {
            name: '最終成果物の統合・納品',
            description: 'Executive Summary→本編→付録の順で、ワンスライド・ワンメッセージを徹底。成果物：最終報告書、付帯データ。'
          },
          {
            name: '未了課題・リスクの承継',
            description: '残課題/決め待ち/潜在リスクをガバナンスに移し、追跡可能に。成果物：Open Issue Log、Risk Transfer Sheet。'
          },
          {
            name: 'Lessons Learnedと再現条件',
            description: '成功/失敗の原因と再現条件を抽出し、次案件の出足を速める。成果物：Lessons Learned、Playbook更新。'
          },
          {
            name: '次の仮説・課題候補の提示',
            description: '今回の学習から"次に効く問い"を提示し、継続的改善の芯を残す。成果物：Next Hypotheses List。'
          }
        ]
      }
    ]
  },
  'アクションの訴求': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・訴求ゴールの固定化（Kickoff & Ask-Definition）',
        description: '「誰に・何を・いつまでに・どうしてほしいか」を一文で定義し、相手理解/政治地図/意思決定経路/根回しの出発点を揃える。症状と課題、依頼と本質を混同しないほど後戻りが減る。',
        tasks: [
          {
            name: 'アクション依頼の一文化（Wanted Action 1-liner）',
            description: 'ピラミッド原則/結論ファーストで「対象者・動詞・締切・判定指標」を含む一文に圧縮。注意点：曖昧語は定義で潰す。成果物：Wanted Action文、用語定義。'
          },
          {
            name: '相手プロファイリングとWIIFM定義',
            description: '役職/ミッション/過去発言/価値観/意思決定スタイルを整理し、WIIFM（相手のメリット）を言語化。注意点：推測は禁物、一次情報を最優先。成果物：Persona Sheet、WIIFMメモ。'
          },
          {
            name: '意思決定ルートと政治地図',
            description: '公式・非公式の決裁ルート、キーパーソン/インフルエンサーを可視化（RACI/パワーマップ）。根回し対象と順番も設計。成果物：Decision Map、RACI（暫定）。'
          },
          {
            name: '反論・懸念の事前棚卸し',
            description: '「価格/優先/人手/リスク/他案」の反論をMECEに並べ、反証/譲歩/代替を準備。成果物：Objection Playbook、Q&A。'
          }
        ]
      }
    ]
  },
  '比較検討': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・目的固定（Kickoff & Goal Framing）',
        description: '「何のための比較か」「誰が何を以て決めるか」「比較しないものは何か」を最初に固定し、依頼の言い換えと前提のすり合わせで後戻りを抑える。',
        tasks: [
          {
            name: '依頼の言い換えと成功基準の一文化',
            description: '5 Whys/So What?で依頼の背景を掘り、「この比較で何を決めるか（導入/見送り/再検討）」「成功の定義（例：来期予算内でTCO◯％圧縮）」を一文で固定。注意点：主語・述語・判断条件を明記し、現状維持（As-Is）も必ず比較対象に含める。成果物：Problem Statement、Decision Goal、一文サマリ。'
          },
          {
            name: '意思決定者・読み手・バイアスの特定',
            description: '決裁者/影響者/利用者を洗い出し、読み手の関心軸と依頼者の先入観（特定案への傾き）を可視化。政治力学を踏まえ中立性を宣言する。成果物：Stakeholder Map、Bias Note、中立宣言。'
          },
          {
            name: 'スコープ／深さ／フォーマット合意',
            description: '対象候補の定義、粒度（概要か詳細か）、成果物形式（Deck/Excel/1-pager）を握る。変更管理の窓口を明確化。成果物：Evaluation Charter、WBS、合意メモ。'
          }
        ]
      }
    ]
  },
  'リサーチ': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・問いの確定（Kickoff & Ask Framing）',
        description: '「何を探すか」ではなく「何のために探すか」を一文で固定し、依頼の真意・成功基準・スコープ・制約・成果物形式を最初に握る。症状と課題、依頼と本質を混同しないほど後戻りが減る。',
        tasks: [
          {
            name: '依頼の解像化とKey Question（KQ）定義',
            description: '依頼背景を5 Whys/So What?で掘り、意思決定で答えるべきKQを一文化（例：「来期の新規◯◯市場参入可否を、需要/収益性/参入障壁で判定できるか？」）。注意点：主語・述語・判定条件を明示。成果物：Problem Statement、KQリスト。'
          },
          {
            name: '成功の姿と用途の合意（KGI/KPI・判定軸）',
            description: 'レポートの用途（提案/投資判断/PoC選定）→判定軸→KGI/KPI（先行/遅行）を合意。注意点：利用シーンに沿った粒度。成果物：Use-case合意メモ、評価軸表。'
          },
          {
            name: 'スコープ・制約・前提の固定化',
            description: '対象市場/期間/地域/企業/価格帯等のIn/Out、予算・期間・人員・有料DB可否を明文化。成果物：Research Charter（Scope/Assumption/Constraint）。'
          },
          {
            name: '仮説とキラークエスチョン設定',
            description: '仮説思考で最有力仮説と反対仮説を並走させ、当たれば勝ちのキラークエスチョンを定義。成果物：Hypothesis Tree、Killer Question。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：調査設計・検索戦略（Design & Search Plan）',
        description: '情報源・検索式・深さ・時間配分・中間合意点を設計し、迷わず取る・やめるを判断できる態勢を作る。',
        tasks: [
          {
            name: '情報源マップと購買判断',
            description: '官公庁/業団体/IR/学術/調査会社/有料DBを網羅マップ化し、費用対効果で購入判断。成果物：Source Map、購買可否メモ。'
          },
          {
            name: 'キーワードユニバースと検索式設計',
            description: '同義語/対義語/専門語/略称を洗い出し、AND/OR/NOT・""・site:・filetype:・intitle:で検索式を設計。多言語（en/zh/ko 等）と業界語も含める。成果物：Keyword Bank、Boolean Query集。'
          },
          {
            name: 'アナロジー/隣接領域の当て込み',
            description: '類似業界・ビジネスモデルの事例を仮説補強用に探索。注意点：適用条件のズレを明記。成果物：Analogy List。'
          },
          {
            name: '深さと止めどき（Stop Rule）・タイムボックス',
            description: 'テーマごとに深掘りレベル（1次スキャン/精読/深読）と時間上限を設定、途中レビューの里程標も置く。成果物：WBS、タイムボックス表。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：収集実行（一次/二次情報の獲得）',
        description: '信頼の高い源泉から順に取りに行き、原典主義で二次の解釈を脱色。記録・出典管理を厳密に行う。',
        tasks: [
          {
            name: '公的統計/IR/業団体/学術の優先取得',
            description: '政府統計/白書/業団体レポート/企業IR/査読論文を優先、ニュースは出典追跡で原典へ。成果物：Evidence Log（URL/発行日/著者/抜粋）。'
          },
          {
            name: '参考文献の後追い（被引用/関連論文）',
            description: '良質レポートの脚注を辿り、引用網からコア情報を深掘り。成果物：Citation Graph。'
          },
          {
            name: '信頼性スコアリング（出所×新しさ×一致度）',
            description: '出所の公的性/専門性、発行年、他ソース一致度でスコア化（5段階）。成果物：Source Scorecard。'
          },
          {
            name: '著作権・引用ルール遵守と抜粋管理',
            description: '引用範囲・要約/パラフレーズ・出典明記を厳守。成果物：Citation Style定義、抜粋台帳。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：整理・構造化（Organization & Coding）',
        description: '事実/意見/推測を分離し、MECEな骨組み（3C/PEST/SWOT/価値連鎖/4Pなど）へ配置。時系列と比較で矛盾をあぶり出す。',
        tasks: [
          {
            name: '抽出表（Extraction Matrix）の作成',
            description: 'ソース×要点×数値×引用×示唆の表で情報を正規化。成果物：Extraction Matrix（Excel/スプレッドシート）。'
          },
          {
            name: '事実と解釈の二層化',
            description: '「客観（Fact）」と「解釈（View）」を文レベルで分離し、混線を防止。成果物：Fact/View版サマリー。'
          },
          {
            name: 'フレーム整理と比較対照',
            description: '3C/PEST/SWOT/バリューチェーンへ配置し、競合/市場/自社/顧客で差分比較。成果物：分析キャンバス一式。'
          },
          {
            name: '時系列・パターン検出',
            description: '出来事/数値を時系列に並べ、トレンド・外れ値・転換点を特定。成果物：Timeline、Pattern Map。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：検証・反証（Triangulation & Gap Closing）',
        description: '好都合な証拠だけを集める確証バイアスを抑え、反証検索・三角測量・鮮度チェックで結論の耐性を上げる。',
        tasks: [
          {
            name: '反証検索と逆説テスト',
            description: '「デメリット」「失敗」「反対意見」などネガティブ語で逆張り検索し、結論の脆弱点を洗う。成果物：Counter-Evidence Log。'
          },
          {
            name: '三角測量（Source×Method×Time）',
            description: '出所・手法・時点の異なる3系統で同一仮説を当て、整合/不整合を判定。成果物：Triangulation Sheet。'
          },
          {
            name: '鮮度・更新の点検',
            description: '発行日・改訂履歴・規制/価格改定など変動要因の最新性を確認。成果物：Freshness Check表。'
          },
          {
            name: '情報ギャップの追補',
            description: '空白地帯を再検索し、Stop Ruleまでに最低限の埋めを実施。成果物：Gap List→補完ログ。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：示唆抽出・アクション設計（Synthesis → Actions）',
        description: '情報を「知見」→「意思決定材料」に昇華。キラーファクトを核に、実行可能な打ち手と意思決定論点へ落とす。',
        tasks: [
          {
            name: 'So What?の連打とインプリケーション',
            description: '各ファクトに対し「だから何？」を因果で接続し、事業/組織/オペ/技術の示唆へ。成果物：Implication Map。'
          },
          {
            name: 'キラーファクト選定',
            description: '意思決定を一段押し出す象徴的データ（出所明確・再現可）を選び、先頭に置く。成果物：Killer Facts集。'
          },
          {
            name: 'オプション比較（Impact×Feasibility×Risk）',
            description: 'Quick Win/中期/本丸で層別、実現性・コスト・依存関係・リスクで比較。成果物：Option Matrix、推奨案。'
          },
          {
            name: 'シナリオ提示と意思決定論点',
            description: 'ベース/強気/弱気の3シナリオで打ち手の耐性を提示し、経営合意が要る論点を明確化。成果物：Scenario Sheet、Decision Questions。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：アウトプット設計・ドラフトレビュー（Output & Review）',
        description: '結論ファースト/ワンスライド・ワンメッセージで「伝わる」形に整え、ドラフトで認識合わせ。出典・脚注は厳密に。',
        tasks: [
          {
            name: 'エグゼクサマリと本編・付録の編成',
            description: '1ページで全体像→本編（結論→根拠→含意）→Appendix（出典/表/原票）。成果物：Executive Summary、Deck草案。'
          },
          {
            name: '図解・可視化の最適化',
            description: '凡例/単位/期間を明記、1枚1主旨で視覚ノイズを排除。成果物：Chart Book、1枚図。'
          },
          {
            name: '出典・引用の整備と一貫性チェック',
            description: '用語定義/計算式/集計範囲の一貫性、脚注の体裁を統一。成果物：Citation List、Glossary。'
          },
          {
            name: '第三者レビュー（赤入れ）',
            description: 'バイアス/論理飛躍/数字の辻褄/図表の誤読可能性を第三者で点検。成果物：Review Log、修正履歴。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：提示・合意形成・アクション化（Present → Commit）',
        description: 'ドラフトサウンディングで地ならし→本番提示は「結論→根拠→選択肢→推奨→Next」で運営し、合意をアクションに落とす。',
        tasks: [
          {
            name: '事前サウンディング・根回し',
            description: 'キーパーソンへ先出し、反応/懸念を吸い上げ当日のYesの階段を設計。成果物：Stakeholder Brief。'
          },
          {
            name: '本番提示と想定問答',
            description: 'PREPで主張→Q&Aは受容→確認→回答→合意で閉じる。成果物：本番スライド、Q&A集。'
          },
          {
            name: 'アクションバックログ化とRACI',
            description: '「誰が・いつまでに・何を」をチケット化、責任分担をRACIで明確に。成果物：Action Backlog、RACI最終。'
          },
          {
            name: '議事メモ配布とリマインド設計',
            description: '決定/担当/期限/次回を即日共有、リマインドと見える化を仕込む。成果物：MoM、通知設定。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クローズ・学習資産化（Close & Learn）',
        description: '結果・学び・再現条件を残し、次回のスピードと品質を上げる。プロとしての知的誠実さで締める。',
        tasks: [
          {
            name: 'After Action Review（What/So What/Now What）',
            description: 'プロセス/判断/成果を棚卸し、仮説の当たり/外れと修正点を明文化。成果物：AARメモ。'
          },
          {
            name: 'ナレッジ整理とテンプレ更新',
            description: '検索式・抽出表・図表・脚注の雛形を改版して再利用性を強化。成果物：Research Playbook vNext。'
          },
          {
            name: '信頼の締め（謝意・ギブ・再現支援）',
            description: '謝意/追加データの提供/ミニワークショップ等で信頼残高を積む。成果物：サンクスノート、Follow資料。'
          },
          {
            name: '次の仮説とフォロー計画',
            description: '今回の示唆から「次に効く問い」を1行で起案し、軽量サーベイ/継続モニタを設計。成果物：Next Hypotheses、Monitoring Plan。'
          }
        ]
      }
    ]
  },
  'プロジェクト計画・運営': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：コンテキスト固定（Why/Who/Whatの合意）',
        description: '目的・成功基準・決裁構造・スコープ・前提/制約を一度に言語化し、以後の計画/運用設計の"土台"を固定する。症状と本質を切り分け、曖昧語は運用定義に置換し、現状維持（Do-Nothing）も比較対象に含めることで後戻りを抑える。',
        tasks: [
          {
            name: '目的と成功の一文化（Goal/KGI/KPI 1-Liner）',
            description: 'ピラミッド原則で"結論→理由→根拠"を1文化し、5 Whys/So What?で真意を深掘り、KGIと先行/遅行KPIをKPIツリーに分解。注意点：最上位目的（事業KGI）とプロジェクトKPIの因果を曖昧にしない。成果物：Goal Statement／KPIツリー／用語定義（稼働率=99.9%など）。'
          },
          {
            name: 'ステークホルダー/意思決定設計',
            description: 'RACI×パワーマップで決裁者/影響者/利用者/阻害要因を可視化し、Yesの階段（段階合意）を設計。注意点：政治力学と期待値を先に言語化し、利害の開示で中立性を担保。成果物：Stakeholder Map／RACI草案／合意形成計画。'
          },
          {
            name: 'スコープ・前提・制約の固定化',
            description: 'In/Out（機能・地域・期間）と制約（予算/人員/法規）を明記し、現状維持も正式に選択肢化。注意点：境界未定義のまま詳細化しない。成果物：Project Charter（Scope/Assumption/Constraint/Success）。'
          }
        ]
      }
    ]
  },
  'ナレッジ化': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ01：立ち上げ・適用範囲の定義',
        description: '「何を残すか」ではなく「何のために残すか」を先に固定。利用者・再利用シーンを特定し、KGI（再利用率/Time-to-Answer短縮）とKPI（検索→閲覧→適用の転換率）を指標ツリーで接続。論点思考・正しい問題設定が横展開の歩留まりを決める。',
        tasks: [
          {
            name: '成果の定義とユースケース設計',
            description: 'ゴールデンサークル（Why/How/What）とPREPで「誰が・どの場面で・何を決めるために使うか」を1文化。注意点：閲覧数＝成果にしない（行動変化で測る）。成果物：ユースケース一覧、KGI/KPI表、1枚サマリ。'
          },
          {
            name: 'スコープ/非スコープと用語定義',
            description: 'イシューツリーでMECE分解、非スコープを明示。5 Whysで"症状/真因"を分離。成果物：論点マップ、非スコープ声明、用語集。'
          },
          {
            name: 'ステークホルダー/意思決定設計',
            description: 'Power–InterestマトリクスとRACI/DACIで役割・承認経路を可視化。注意点：段階合意（前提→小結→最終）。成果物：RACI、影響マップ、合意形成プラン。'
          },
          {
            name: '情報区分・権限・法務の初期設計',
            description: '公開/社外秘/機微/個情/契約拘束の区分と権限。引用は一次情報原則。成果物：データ分類基準、権限テーブル、引用方針。'
          }
        ]
      }
    ]
  },
  'インタビュー': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ01：目的定義と論点設計',
        description: 'まず「何を訊くか」の前に「なぜ訊くか／何を決めるために訊くか」を固定します。ゴールデンサークル（Why→How→What）と論点思考で"解くべき問い"を言語化し、仮説を置いてインタビューで検証する設計にします。課題の定義を誤ると以降すべてが歪むため、「問題の定義が正しいか？」を繰り返し点検します。',
        tasks: [
          {
            name: '意思決定ゴールと評価指標の確定',
            description: '最終意思決定（例：業務BPRの是非/要件確定）とKGI/KPI（意思決定に必要な確度、リスク許容度、必要粒度）をピラミッド原則で1ページ化。注意点：指標は"行動変化"に紐づける。成果物：1枚サマリ、指標ツリー。'
          },
          {
            name: '論点ツリー／仮説の明文化',
            description: 'ロジックツリーで論点をMECE分解し、「仮説→必要事実→質問」の三段ひな壇に展開（仮説思考）。注意点：仮説は"反証可能性"を明記。成果物：論点ツリー、仮説一覧。'
          },
          {
            name: 'スコープ／非スコープと用語定義',
            description: '対象業務・期間・地域・役割を明確化し、非スコープを宣言。専門用語の定義は冒頭で共有。成果物：スコープ定義書、用語集。'
          }
        ]
      }
    ]
  },
  'day0': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ01：意義と前提のすり合わせ',
        description: 'プロジェクト開始前に"なぜ（Why）"を自分の言葉で再定義し、依頼の曖昧さを解消する。『Are Your Lights On?』の流儀で「問題の本質」を言い換え、目的・前提・境界を最小限の紙幅で固定する。',
        tasks: [
          {
            name: 'SCQA×ゴールデンサークルで1枚化',
            description: 'SCQA（Situation→Complication→Question→Answer）にWhy/How/Whatを重ね、依頼文を"本当に解くべき問い"へ翻訳。注意点は事実と解釈の分離、前提の明記。成果物：Mission Brief（1ページ）、用語定義（脚注）。'
          },
          {
            name: '成功定義とKGI/KPIの暫定設計',
            description: 'GQM（Goal→Question→Metric）で測るべき価値を決め、SMARTでKGI/KPIを暫定化。入手可能データとベースラインの有無を確認。成果物：KGI/KPIドラフト、測定計画メモ。'
          },
          {
            name: 'スコープ＆非スコープの線引き',
            description: 'To-Be／As-Isの差分から"今回やらない"を明確化。『論点思考』で論点化し、迷走を予防。成果物：In/Outリスト、判断基準メモ。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ02：関係者と意思決定の仮設計',
        description: '政治と心理の地図を先に描く。Power×Interestで可視化し、公式ルートと"影の承認ルート"を把握。『Secrets of Consulting』の「ラズベリージャムの法則」を戒めに、拡げすぎない。',
        tasks: [
          {
            name: 'ステークホルダーマッピング',
            description: 'Power-Interestマトリクスで期待・懸念・成功基準を整理、ペルソナ風に言語化。成果物：Stakeholder Map、期待値ギャップ一覧。'
          },
          {
            name: '意思決定設計（RACI/RAPID）',
            description: 'RACIで役割、RAPIDで意思決定の流れを仮置き。注意点は承認所要日数と"抜け道"の明記。成果物：RACI v0／承認フロー図。'
          },
          {
            name: '反論・懸念の先回り',
            description: '典型反論（コスト・リソース・優先度）にPREPで即応できる反証データと代替案を準備。成果物：Objection Playbook。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ03：業界・企業の速習',
        description: '二次情報で事実を素早く掴む。3C/5Forces/PESTで外部→競争→内部の順に"地図"を作る。『ビジネスマンの国語力』に沿い、短文・平易・出典明記。',
        tasks: [
          {
            name: '3C/5Forces/PEST一枚サマリ',
            description: '各フレームを1スライド化し、事実（引用）と示唆（So What）を段落で分離。成果物：環境把握サマリ3枚。'
          },
          {
            name: '競合スナップショット（2×2配置）',
            description: '価格×差別化などの軸でポジショニング、強み弱みと未充足ニーズを記述。成果物：競合比較1枚。'
          },
          {
            name: 'キラーファクト棚卸し',
            description: '説得力のある"象徴データ"を3件抽出、出典の一次性を確認。成果物：Killer Factsメモ。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ04：論点の骨組みづくり',
        description: '先に"解くべき問い"の全体像を作り、時間を浪費しない。『論点思考』『仮説思考』でトップダウン設計。',
        tasks: [
          {
            name: 'イシューツリー＆KPIツリー',
            description: '主論点をMECEに展開、各葉に仮説・必要データ・判定基準・想定インパクトを紐付け。成果物：論点パッケージv0。'
          },
          {
            name: '仮説ログと反証計画',
            description: '仮説ID／根拠／反証条件／代替仮説を記録。確証バイアス対策として反証テストを必ず設計。成果物：Hypothesis Log。'
          },
          {
            name: '初期優先度付け（Impact×Feasibility）',
            description: '各論点の期待効果と実現容易性でマッピング、Quick Win候補を明示。成果物：論点優先マトリクス。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ05：資料とデータの初期棚卸',
        description: '"既にあるもの"を速やかに把握し、空白地帯を可視化。再取得のムダを削る。',
        tasks: [
          {
            name: 'アセット・インベントリ',
            description: '提案書、SOW、組織図、運用手順、KPI定義書等を収集し、鮮度・信頼度・アクセス権を採点。成果物：Document Inventory、ギャップリスト。'
          },
          {
            name: 'データ要求リスト',
            description: 'KPI算出式・粒度・期間・抽出窓口を明文化し、個人情報・機密の取扱注意を明記。成果物：Data Ask List。'
          },
          {
            name: 'ベースライン確認',
            description: '現状KPIの集計起点・例外処理を点検し、比較可能性（定義一貫性）を担保。成果物：Baseline Check Note。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ06：ヒアリング設計',
        description: '短時間で核心に届く質問設計。『解像度が高い人』を意識し、抽象⇄具体のピント合わせを先に決める。',
        tasks: [
          {
            name: '役割別インタビューガイド',
            description: 'SCQA→広く→深掘り（5Whys/Why-So）→クロスチェックの順で質問列を作成。録音合意・匿名化・事実/意見/感情の区別を明示。成果物：Interview Guide v0。'
          },
          {
            name: 'ファクトブック雛形',
            description: '誰／いつ／どこ／数値／証跡URL／未確定フラグを即時記録できるテンプレを作成。成果物：Factbook Template。'
          },
          {
            name: '専門用語対訳・禁則集',
            description: '部署毎の専門語を平易語に対訳、誤用しがちな用語を禁則化。成果物：Glossary v0。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ07：将来の運用像（荒スケッチ）',
        description: '"着地の形"を先に絵で示し、議論を具体へ引き寄せる。『変える技術・考える技術』の"仕組み"志向で。',
        tasks: [
          {
            name: 'SIPOC×Value Chainラフ',
            description: 'As-Is/To-Beの入口→工程→出口をSIPOCで対比、価値発生点はバリューチェーンで補強。成果物：運用像スケッチ。'
          },
          {
            name: 'RACIプロトと運用ルール草案',
            description: '役割・責任・承認・報告の初期割付、変更管理・障害時エスカレーションを一枚化。成果物：RACI v0、Opsルール草案。'
          },
          {
            name: '指標連動の運用KPI試案',
            description: '運用プロセスの健康指標（例：MTTR、SLA達成率）をKGI/KPIと連結。成果物：Ops KPI試案。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ08：コミュニケーションと合意の型作り',
        description: '"伝え方"を先に設計し、初回接触の密度を最大化。ピラミッド原則とワンスライド・ワンメッセージを徹底。',
        tasks: [
          {
            name: 'Kickoffストーリー設計',
            description: '結論→理由→根拠の順で構成し、FAQ（反論想定）を付録化。成果物：Kickoff Deck v0。'
          },
          {
            name: 'ワーキングアグリーメント',
            description: 'レスポンスSLA、会議体、資料品質基準、ファイル命名、議論ルールを明文化。成果物：Team Working Agreement。'
          },
          {
            name: '議事録・意思決定テンプレ',
            description: '決定事項／根拠／代替案／担当／期限を1枚に定型化。成果物：MoM＆Decision Logテンプレ。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ09：リスクと依存の先行整理',
        description: '想定外を"想定済み"にする。RAIDログでリスク・前提・課題・依存を一括管理。',
        tasks: [
          {
            name: 'RAIDログ初期化',
            description: '発生確率×影響度で優先度付け、予兆・予防・緩和・代替案をセット記述。成果物：RAID v0。'
          },
          {
            name: '規制・セキュリティの初期点検',
            description: '法令・契約制約・情報区分（PII、機密）を一覧化し、アクセス権限設計の土台に。成果物：コンプライアンスチェック。'
          },
          {
            name: '依存関係マップ',
            description: '他PJ・ベンダ・リリースカレンダー・データ連携の依存を時系列で可視化。成果物：Dependency Map。'
          }
        ]
      },
      {
        id: 'phase10',
        name: 'フェーズ10：作業基盤と時間設計',
        description: '"迷わず動ける環境"を先に敷設し、初速を上げる。',
        tasks: [
          {
            name: 'テンプレ＆チェックリスト整備',
            description: 'Mission Brief、論点メモ、Issueリスト、調査サマリ、意思決定ブリーフ等の雛形を作成。"埋めやすさ＞網羅"を重視。成果物：テンプレ一式。'
          },
          {
            name: 'タイムボックスと初月カレンダー',
            description: '仮説検証サイクル、レビュー、データ取得、ドラフト締切の"時刻"を決め、バッファ設定。成果物：初月運営カレンダー。'
          },
          {
            name: '情報共有プラットフォーム整備',
            description: 'ナレッジベース/チャット/ファイル階層を設計し、タグと版管理ルールを定義。成果物：ワークスペース構成図、命名規約。'
          }
        ]
      },
      {
        id: 'phase11',
        name: 'フェーズ11：チーム学習と関係性づくり',
        description: 'スキルと信頼を同時に高める"準備の練度"を上げる。『コンサル脳を鍛える』『サバイバルマニュアル』の現場知で"強い立ち上がり"を仕込む。',
        tasks: [
          {
            name: '短回し演習（論点→仮説→反証）',
            description: '実案件想定で15分スプリント演習。沈黙活用・質問力・リフレーミングを練習。成果物：演習ログ、改善アクション。'
          },
          {
            name: '自己紹介＆強みマッピング',
            description: '各自の専門性・関心・弱点を"役割に効く言語"で共有。成果物：Team Skills Matrix。'
          },
          {
            name: 'コミュニケーション・プロトコルのリハ',
            description: '結論先出し、1スライド1メッセージ、MoMの即時回覧を模擬運用。成果物：運用チェックリスト。'
          }
        ]
      },
      {
        id: 'phase12',
        name: 'フェーズ12：キックオフ直前の"見える化"',
        description: '初週から成果に着地できるよう、具体的アウトプットを事前提示し、合意を取りやすくする。',
        tasks: [
          {
            name: 'エグゼクティブブリーフ（1枚）',
            description: '目的／成功指標／前提／主要論点／初週To-Do／主要リスクを1ページで提示。成果物：Executive Brief v1。'
          },
          {
            name: '初週スプリント計画（モック付）',
            description: '初週で提出する"手触りのある"モック（例：As-Isプロセス図v0、Baseline表v0）を添付。成果物：Week-1 Plan & Mocks。'
          },
          {
            name: '報連相リズム確立',
            description: 'デイリー10分・週次30分の定例／報告フォーマット／エスカレーション基準を明文化。成果物：コミュニケーションカレンダー。'
          }
        ]
      }
    ]
  },
  '議事録・メモ作成': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ01：目的・読者・境界の確定',
        description: '"何のために、誰のために、どこまで書くか"を最初に固定する。『Are Your Lights On?』の流儀で問題の定義を言い換え、議事録の用途（意思決定の証跡か、アクション指示書か）を明確化。',
        tasks: [
          {
            name: '利用シーンの定義（SCQA×読者ペルソナ）',
            description: 'SCQAで会議の背景→対立→問い→期待解を整理し、読者（経営層/実務/法務）の知識水準と知りたいことをペルソナ化。注意点：目的が「合意の証跡」か「実行の指示書」かで粒度が変わる。成果物：MoM用途定義メモ、読者ペルソナ。'
          },
          {
            name: 'スコープ＆非スコープの線引き',
            description: '『論点思考』で主要議題と周辺論点をMECEに棚卸し、"議事録で扱わない"話題（雑談、オフレコ）を先に宣言。成果物：In/Outリスト。'
          },
          {
            name: '守秘と証跡レベルの設定',
            description: '情報区分（Public/Internal/Confidential）と証跡度（要約/詳細/逐語）の方針を決定。注意点：法務・契約の閲覧範囲に準拠。成果物：機密ラベル指針。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ02：書式・記法の設計',
        description: '読み手が"迷わない"統一フォーマットを用意。『ビジネスマンの国語力』に沿って短文・能動態・用語統一を徹底。',
        tasks: [
          {
            name: 'MoMテンプレートの整備（ワンスライド・ワンメッセージ）',
            description: 'ヘッダ（目的/日時/出席/機密/版/結論サマリ）、本文（決定/アクション/論点/未決/リスク）、フッタ（次回/責任/RACI）を1〜2枚で収まる型に。成果物：議事録テンプレ（Doc/PPT）。'
          },
          {
            name: '記法ガイド（Fact/Opinion/Actionの三色分け）',
            description: '事実＝黒、意見＝青、アクション＝赤など視覚的ルールを定義。注意点：数値・固有名詞は原典リンク付き。成果物：記法ガイド1枚。'
          },
          {
            name: '用語集＆略語表',
            description: '『解像度が高い人』を意識し、専門用語を平易語で対訳。注意点：社外配布可否を各語に付記。成果物：Glossary v1。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ03：事前情報の摺り合わせ',
        description: '会議で"聞き漏らさない"ための仮説準備。『仮説思考』で結論仮説→必要ファクトを逆算。',
        tasks: [
          {
            name: 'アジェンダの論点化（Pyramid原則）',
            description: '結論→理由→根拠の順でアジェンダ文を作り、各項目に"決めたいこと/出すべきアウトプット"を添える。成果物：論点化アジェンダ。'
          },
          {
            name: 'キラーファクト候補の抽出',
            description: '意思決定を左右するデータを3点準備。注意点：一次ソース確認と日付の明記。成果物：キラーファクトメモ。'
          },
          {
            name: '反論・懸念の想定QA',
            description: '『Secrets of Consulting』に学び、典型反論（コスト/リスク/優先度）をPREPで回答化。成果物：想定QAリスト。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ04：キャプチャ体制の構築',
        description: '"書き漏れゼロ"のための人・ツール・ルールを先に決める。',
        tasks: [
          {
            name: '役割分担（RACI）',
            description: 'Lead Note、Backup、タイムキーパー、決定読み上げ役をRACIで明確に。成果物：議事録RACI。'
          },
          {
            name: '収音・録画の同意取得',
            description: '録音可否、保存期間、再配布範囲を冒頭で宣言。注意点：同意なき録音禁止。成果物：同意文テンプレ。'
          },
          {
            name: 'ツールとビューの事前設定',
            description: 'ノートアプリの見出しショートカット、タイムスタンプ、スピーカー名辞書登録。成果物：ノート設定チェックリスト。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ05：会議当日の"聞き方"運用',
        description: '逐語ではなく"意思決定に効く要点"を拾う。『傾聴×要点抽出』を両立。',
        tasks: [
          {
            name: '要点フレームでのリアルタイム記録',
            description: '各議題ごとに5W1H→結論→根拠→代替案→リスク→アクションの順で枠取り。注意点：数字は再読上げで確認。成果物：ライブノート。'
          },
          {
            name: '中間サマリの口頭確認（So What/Why So）',
            description: '各論点の終わりに「要点/未決/アクション」を30秒で読み上げ認識合わせ。成果物：中間確認メモ。'
          },
          {
            name: '意思決定文のその場整形',
            description: '"主語（誰）＋行為（何を）＋条件/範囲＋期限＋測定方法"を1文で確定。成果物：決定文ドラフト。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ06：アクション・決定・未決の三本柱化',
        description: '読んだ瞬間に"動ける"配置へ再構成する。',
        tasks: [
          {
            name: 'アクションボード化（RACI×期限）',
            description: '誰が/何を/いつまでに/完了条件を表現し、依存関係とリスクを注記。成果物：Action Board（1枚）。'
          },
          {
            name: 'Decision Logの整備',
            description: '決定事項に前提・根拠・代替案・反対意見の有無を付記。注意点：後日覆す際の再審条件を明記。成果物：Decision Log。'
          },
          {
            name: '未決事項トラッキング',
            description: '未決は"責任者/必要データ/期日/次の場"までセットで管理。成果物：Open Issues List。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ07：ドラフト作成（60分以内）',
        description: 'スピードと精度を両立。会議直後"黄金の1時間"で骨子→完成へ。',
        tasks: [
          {
            name: 'エグゼクティブサマリの先出し（結論ファースト）',
            description: '結論/重要決定Top3/アクションTop3/未決Top3を冒頭1ページに。成果物：MoMサマリ1枚。'
          },
          {
            name: '本文整形（ワンスライド・ワンメッセージ）',
            description: '議題ごとに要点→根拠→決定/未決→リスク→アクションの固定順。注意点：冗長表現は削る。成果物：MoM本文ドラフト。'
          },
          {
            name: '証跡リンクと版管理',
            description: '資料・録音タイムスタンプ・発言者を脚注リンク化、版（v0.1→v1.0）を管理。成果物：MoM v0.9。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ08：品質保証（QA）',
        description: '"事実の正確性"と"読みやすさ"を第三者視点で担保。',
        tasks: [
          {
            name: 'Fact vs Opinionの棚卸し',
            description: '色分けルールで誤混在を洗出し、数値・固有名詞の再確認。成果物：ファクトチェックシート。'
          },
          {
            name: '第三者レビュー（赤入れ）',
            description: '非参加者に5分レビューを依頼し、意味の通りにくい箇所を指摘してもらう。成果物：赤入れ版。'
          },
          {
            name: '法務・機密チェック',
            description: '秘匿すべき情報の黒塗り/編集、配布範囲の再確認。成果物：配布用MoM v1.0。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ09：承認・合意形成',
        description: '"公式記録"に格上げするための合意プロセスを短く強く回す。',
        tasks: [
          {
            name: '重要決定の口頭再確認',
            description: 'キーパーソンへ電話/チャットで要点再確認（Yes/Noをもらう）。成果物：同意ログ。'
          },
          {
            name: '承認フロー（RAPID）',
            description: 'Recommend→Agree→Perform→Input→Decideの順で回覧。期限とサイレントアプルーバル条件を明示。成果物：承認記録。'
          },
          {
            name: '差分ハイライト',
            description: 'v0.9→v1.0の変更点を1枚で可視化。成果物：差分サマリ。'
          }
        ]
      },
      {
        id: 'phase10',
        name: 'フェーズ10：配布・周知・検索性の担保',
        description: '"届く・見つかる・使われる"を設計。',
        tasks: [
          {
            name: '配布文面（PREP）',
            description: 'Point（結論）→Reason→Evidence→Point再掲の短文メール。リンク/期限/依頼事項を先頭に。成果物：配布メール。'
          },
          {
            name: 'タグ付け・メタデータ登録',
            description: '会議種別/案件名/論点タグ/関係者/RACI/日付/機密をKBへ登録。成果物：ナレッジベース登録カード。'
          },
          {
            name: 'アクセス権と保持期間の設定',
            description: '閲覧・編集・再配布権限と保存期限をシステムに実装。成果物：権限設定記録。'
          }
        ]
      },
      {
        id: 'phase11',
        name: 'フェーズ11：フォローアップと次アジェンダ化',
        description: '議事録を"動かす文書"へ。行動を締め切りまで進め、次回の質を上げる。',
        tasks: [
          {
            name: 'アクションの進捗リマインド',
            description: '期限前T-2営業日に自動/手動で催促。障害・依存の早期吸い上げ。成果物：リマインドログ。'
          },
          {
            name: '次回アジェンダ素案（論点引継ぎ）',
            description: '未決→必要材料→担当→予定時間をセットで提示。成果物：次回アジェンダ案。'
          },
          {
            name: '意思決定の影響トラッキング',
            description: '決定がKPI・コスト・リスクに与える初期効果をメモ化。成果物：Decision Impactメモ。'
          }
        ]
      },
      {
        id: 'phase12',
        name: 'フェーズ12：振り返りと継続改善',
        description: '"書き方の改善"を回し続ける。『KPT×AAR』で型を磨き、組織知にする。',
        tasks: [
          {
            name: 'KPT/AARレトロ',
            description: 'Keep/Problem/TryとAfter Action Review（目的→実行→結果→示唆）で毎月振り返り。成果物：改善バックログ。'
          },
          {
            name: 'テンプレ・ガイドの改訂',
            description: '読者の行動データ（閲覧率/検索語）を元に構成・見出しを最適化。成果物：テンプレvUp。'
          },
          {
            name: '良質MoMの社内展開',
            description: 'ベスト事例をワンスライドで解説し、昼学習会で共有。成果物：事例スライド、録画。'
          }
        ]
      }
    ]
  }
};