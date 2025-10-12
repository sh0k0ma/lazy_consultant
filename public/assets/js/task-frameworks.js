export const TASK_FRAMEWORKS = {
  '施策の立案': {
    phases: [
      {
        id: 'phase1',
        name: 'フェーズ1：着手・意図合わせ',
        description: 'プロジェクトの「なぜ」と成功の定義を言語化し、スコープ・制約・体制・合意形成の土台を固める。不完全情報下でもスタンスを明確化し即レス運用で初速を上げ、デイゼロ準備と物理リマインダーで実行抜けを防ぐ。',
        tasks: [
          {
            name: '関係者マッピングと期待値すり合わせ',
            description: '主要/周辺ステークホルダーを特定し、RACIで責任分担を可視化しつつ、明示/暗黙の期待値を聞き出して整合（傾聴・ピラミッド原則）。成果物：Stakeholder Map、RACI、Expectation Notes。'
          },
          {
            name: '真の目的・課題の定義',
            description: '「5 Whys」と『Are Your Lights On?』で"お願いの背景""症状と原因""成功の状態"を切り分け、論点（Key Question）を一文で定義。成果物：Problem Statement、論点宣言。'
          },
          {
            name: 'スコープ・制約・前提の固定化',
            description: 'In/Out、期間・予算・人員・法規制の制約、依存関係と前提を文書化し"変更管理の起点"に。成果物：Project Charter、Assumption & Constraint List。'
          },
          {
            name: '成功指標（KGI/KPI、Leading/Lagging）の仮設定',
            description: 'Whyに直結するKGIと、因果に基づくKPI（先行/遅行）を仮置き。可観測性・取得方法も同時に規定。成果物：KGI/KPI Tree、計測計画。'
          },
          {
            name: '進め方・体制・コミュニケーション設計',
            description: '意思決定会議体（ガバナンス）、レポート/報連相の頻度、成果物フォーマット、PMOダッシュボードを設計。成果物：Governance/Comms Plan、PMO板。'
          },
          {
            name: 'スタンス表明・即レス規律',
            description: '不完全情報でも結論仮置きで前進。「ケースバイケース」で逃げず、即レスを標準運用。成果物：Decision Log、Response SLA。'
          },
          {
            name: 'デイゼロ準備＆物理リマインダー',
            description: '開始前日までにテンプレ・チェックリスト・アウトラインを用意し、紙/画面貼りで抜け漏れ防止。成果物：Day-0 Kit、Physical Reminders。'
          },
          {
            name: '専門用語アラインメント',
            description: 'クライアント/業界の用語・定義を先に合わせ、誤解減。成果物：Glossary、Definition Sheet。'
          },
          {
            name: '努力配分設計（ホームラン×配分）',
            description: 'インパクト最大の論点に120点集中、周辺は65点許容の配分を明示。成果物：Effort Focus Map。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：論点設計・鍵問いの明確化',
        description: 'MECEで課題をロジックツリー化し、仮説と検証課題をひも付け。論点ワードを書き切る量的基準とクローズド質問で検証速度を上げ、リアリティ・スイッチで思考の深さを確保。',
        tasks: [
          {
            name: 'Top論点の仮置き',
            description: '「So What?/Why So?」で結論仮説→検証論点→必要ファクトへ落とす。成果物：Issue Tree（仮）。'
          },
          {
            name: 'キークエスチョン設計',
            description: '意思決定者の言語で、One Sentenceの"答えるべき問い"。成果物：Key Questions List。'
          },
          {
            name: '仮説樹の構築',
            description: '最有力仮説を明示し、裏取りデータ/調査をぶら下げる。成果物：Hypothesis Tree。'
          },
          {
            name: '学習バックログの編成',
            description: '分析/インタビュー/観察をチケット化し、優先度・DoDを定義。成果物：Learning Backlog。'
          },
          {
            name: '論点ワード100作成（1.5–2枚）＆3時間仕上げ',
            description: 'A4 1.5–2枚（100クエスチョン）を書き切り、ワークプランまで3時間以内で初版完成。成果物：Issue Words、Work Plan v1。'
          },
          {
            name: 'クローズドクエスチョン雛形',
            description: 'オープンではなく"Yes/No＋数値/選択"で詰める質問雛形を準備。成果物：Closed-Q Bank。'
          },
          {
            name: 'リアリティ・スイッチ適用レビュー',
            description: '前提/定義/単位系を明示し、思考の深さをチェック。成果物：Reality-Switch Notes。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：現状理解・情報収集（Where we are）',
        description: '一次/二次の線と面を揃え、3C/PEST/SWOT、現地現物、VOCで多面的に把握。朝一で"仕込み"を動かし、フェルミ推定で粗い数を即時に握る。',
        tasks: [
          {
            name: '調査設計（定量/定性）',
            description: 'サンプリング、統計精度、バイアス対策、インタビュー設計を明文化。成果物：Research Plan。'
          },
          {
            name: '3C/PEST/SWOTの骨組み作成',
            description: '外部→顧客/競合→内部の順で構造化、抜け/重複を点検。成果物：分析フレーム下書き。'
          },
          {
            name: '現地現物・VOC取得',
            description: '観察・顧客の声を一次情報として採取し即時コード化。成果物：VOCサマリー、現場メモ。'
          },
          {
            name: 'プロセスマッピング/バリューチェーン',
            description: 'As-Isの滞留/手戻りを可視化し価値/コスト/リスクの発生点を同定。成果物：As-Is/痛点マップ。'
          },
          {
            name: 'ベンチマーキング',
            description: '先進事例の仕組みまで分解し転用可否を判別。成果物：Benchmark Brief。'
          },
          {
            name: '朝一"仕込み"実行',
            description: 'アンケート配信・データ抽出など時間差作業は朝一で起動。成果物：Prep Queue、依頼ログ。'
          },
          {
            name: 'フェルミ推定セットアップ',
            description: '主要KPIのオーダー把握用に分解→概算→感度。成果物：Fermi Sheet。'
          },
          {
            name: '用語・セグメンテーション整備',
            description: '市場/顧客の切り口定義（本質セグメンテーション）を整理。成果物：Segmentation Draft。'
          },
          {
            name: 'ネガティブ遮断の環境設計',
            description: '低品質情報/雑音源を明示的に遮断し集中維持。成果物：Info-Hygiene Rules。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：分析・示唆抽出',
        description: 'データを"洞察"に変換。記述→診断→処方で因果仮説を評価し、辻褄思考で見解差を統合。',
        tasks: [
          {
            name: '定量分析（記述/差分/因果の当たり）',
            description: '外れ値/季節性/相関→因果当たり→棄却/精緻化。成果物：Insight Sheet（定量）。'
          },
          {
            name: '定性のコード化とパターン抽出',
            description: '発話/観察をコード化し、反復モチーフとジョブを抽出。成果物：Theme Map（定性）。'
          },
          {
            name: '仮説検証スプリント',
            description: '短サイクルで検証→更新。成果物：Sprint Log、仮説改訂履歴。'
          },
          {
            name: 'クリティカルシンキング/前提潰し',
            description: '前提・定義・単位系を明示、反証可能性を確保。成果物：Assumption Test Sheet。'
          },
          {
            name: 'ストーリーライン試作',
            description: '結論→理由→証拠→含意の流れで"だから何"を磨く。成果物：One-Slide Story。'
          },
          {
            name: '辻褄思考レビュー',
            description: '相反する意見の成立条件を探索し、整合解を設計。成果物：Coherence Notes。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：施策デザイン（選択肢創出〜評価）',
        description: 'ゼロベースで多案を出し、Impact×Feasibility、リスク、UX/EX、エコシステムで評価。"最初の2案を封印"して3つ目をひねる習慣と型の進化で質を底上げ。',
        tasks: [
          {
            name: 'オプション創出（ゼロベース/ラテラル）',
            description: '制約一時解除→逆算→具体化の往復で量産。成果物：Option Catalog。'
          },
          {
            name: 'Impact-Feasibility評価',
            description: '効果/コスト/リードタイム/依存を評価、Quick Winと本丸を層別化。成果物：優先度マトリクス。'
          },
          {
            name: 'UX/EX観点の体験設計',
            description: 'ターゲット行動のBefore/Afterをシナリオ化し、失敗時の代替動線も設計。成果物：サービス青写真。'
          },
          {
            name: 'リスク分析と先回り対策',
            description: '技術/運用/法務/レピュのリスクを洗い出し、回避/緩和策を定義。成果物：Risk Register。'
          },
          {
            name: '仕組み化・標準化設計',
            description: '属人タスクを役割/手順/チェックリストへ落とし込み、誰でも同品質で回る状態へ。成果物：SOP/Playbook。'
          },
          {
            name: 'サードアンサー・セッション',
            description: '直感の2案を敢えて出さず、3つ目の面白い案を強制発想。成果物：Third-Answer Set。'
          },
          {
            name: '型の進化（プロセス刷新）',
            description: 'SOP/テンプレを都度アップデート。時間経過任せにせず"型"で成長角度を上げる。成果物：Updated SOP/Template。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：ビジネスケース・意思決定',
        description: '経営判断に耐える"数字と物語"。ROI/NPV/感度にレンジ見積を採用し、反証可能性と短時間で刺さる説明を両立。',
        tasks: [
          {
            name: 'コスト/便益/リソースの定量化',
            description: '投資/運用/変動費、効果見積の根拠を透明化しレンジ提示。成果物：Business Case Sheet。'
          },
          {
            name: 'ロードマップと依存整理',
            description: 'Milestone、クリティカルパス、意思決定ゲート設計。成果物：Roadmap。'
          },
          {
            name: '経営合意用ストーリー/資料',
            description: 'One-Slide/エレベーターピッチで"結論と根拠"を端的に伝える。成果物：Executive Deck。'
          },
          {
            name: '意思決定・承認プロセス実行',
            description: '根回し→会議→条件付承認→反映までを一気通貫。成果物：決裁記録。'
          },
          {
            name: '省力化ポイントの明示',
            description: 'インパクト低の"ナイスハブ"領域は省力運用に振り切り、注力配分を守る。成果物：Effort Cut List。'
          },
          {
            name: '反証可能性ステートメント',
            description: '意思決定の前提/閾値/破綻条件を明文化。成果物：Falsifiability Sheet。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：実行設計・パイロット',
        description: '机上の計画を現場運用へ接続。問いベースPMOとモチベ差の前提設計で生産性を底上げ。',
        tasks: [
          {
            name: '体制/役割（RACI）とPMO運用',
            description: '実務責任の明確化、進捗・課題・リスクの一元管理。成果物：RACI、PMOダッシュボード。'
          },
          {
            name: 'コミュニケーション/エスカレーション設計',
            description: '報連相の頻度・様式、意思決定経路、危機時のEsc条件を定義。成果物：Comms Runbook。'
          },
          {
            name: 'トレーニング/ナレッジ移転',
            description: '役割別スキル要件→教材/OJT設計。成果物：Training Plan、教材。'
          },
          {
            name: 'パイロット設計・実施',
            description: '限定スコープで検証、成功/撤退基準を事前定義。成果物：Pilot Plan、結果レビュー。'
          },
          {
            name: '変更影響・抵抗のマネジメント',
            description: '利害/感情の可視化、早期巻込み、インセンティブ設計。成果物：Change Heatmap。'
          },
          {
            name: '問いベースPMO',
            description: 'タスクではなく論点で管理（Issue-based）。ダッシュボードも論点カラム基準。成果物：Issue-Led Board。'
          },
          {
            name: 'モチベ前提の配賦設計',
            description: '低モチベ前提で、論点ワード枚数や粒度の配賦で思考量を確保。成果物：Thinking Load Plan。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：本格展開・定着化（Execution at scale）',
        description: 'スモールから全社展開へ。Quick Winの演出で推進力を作り、効果測定→学習→標準化で定着。',
        tasks: [
          {
            name: '本番展開・Quick Winの演出',
            description: '可視化しやすい成果を早期提示し支援者を増やす。成果物：Rollout Plan、Win事例。'
          },
          {
            name: '効果測定とフィードバックループ',
            description: 'KGI/KPI定点観測、逸脱時の是正、仮説更新を仕組みに。成果物：KPIモニタ、CAログ。'
          },
          {
            name: '標準化・マニュアル化',
            description: '成功手順をSOP/チェックリスト化、監査可能に。成果物：運用標準書、監査観点。'
          },
          {
            name: 'ナレッジトランスファーと自走化',
            description: '"コンサル不在でも回る"状態へ運用委譲。成果物：引継書、運用責任者承認。'
          },
          {
            name: 'レトロスペクティブ/学習資産化',
            description: '成功/失敗の原因と再現条件を抽出し資産化。成果物：Lessons Learned。'
          },
          {
            name: '成長実感の可視化',
            description: '達成バッジ/トロフィー/帯のストライプ等で成長を見える化し行動継続を促進。成果物：Win Wall、Progress Badges。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クロージング・次の一手',
        description: '成果/残課題/次の仮説を明文化し、経営意思決定につなぐ。言語化の質で締める。',
        tasks: [
          {
            name: '最終成果物の統合・納品',
            description: 'Executive Summary→本編→付録の構成で、ワンスライド・ワンメッセージを徹底。成果物：最終報告書/付帯データ。'
          },
          {
            name: '未了課題・リスクの承継',
            description: '残課題/決め待ち/潜在リスクを移管し、ガバナンス下で追跡可能に。成果物：Open Issue Log、Risk Transfer Sheet。'
          },
          {
            name: '次の仮説・施策候補の提示',
            description: '今回の学習から"次に効く問い"を提示し、継続的改善の芯を残す。成果物：Next Hypotheses List。'
          },
          {
            name: 'ストーリー反省会',
            description: 'どこが"刺さらなかったか"を具体化し、次回の一枚絵を磨く。成果物：Story Post-mortem。'
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
        description: '症状と原因を混同せず、「本当に解くべき課題」を一行で定義し、成功の姿・境界・制約・体制を最初に固定する。曖昧さを残さないほど後工程のやり直しが減る。スタンス表明・即レス規律とデイゼロ準備で初動を固め、専門用語の齟齬を潰し、努力配分設計で資源投下の優先度を決める。',
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
          },
          {
            name: 'スタンス表明・即レス規律',
            description: '不完全情報でも50%で「暫定スタンス」を表明し、学習速度を上げる。"Ping→Pong"を2時間以内徹底（即レス運用）。成果物：Interim Stance、Ping-Pong Log。'
          },
          {
            name: 'デイゼロ準備＆物理リマインダー',
            description: '初日（day0）に全体像整理、論点の骨子、ステークホルダー地図を初版化。付箋/ホワイトボード/手帳に物理で論点と期限を埋め込み、デジタルへの過信を排除。成果物：Day0 1-pager、物理リマインダー写真。'
          },
          {
            name: '専門用語アラインメント',
            description: '発注者/現場/読み手の用語が指す概念を定義し、略語・カタカナの誤用を早期に除去。用語定義シートを共有。成果物：Glossary（初版）。'
          },
          {
            name: '努力配分設計（ホームラン×配分）',
            description: 'プロジェクト全体を「ホームラン×単打」に仕分け、工数・思考資源の配分を明示化（7-2-1ルール等）。成果物：Effort Allocation Plan。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：論点設計・検証設計',
        description: 'MECEで課題を分解し、解くべき鍵問い（Key Question）と検証計画を最短経路で束ねる。論点ワード100枚＆3時間で初版を固め、クローズドクエスチョン雛形で精度を上げ、リアリティ・スイッチで当事者性を確保する。',
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
          },
          {
            name: '論点ワード100作成（1.5-2枚）＆3時間仕上げ',
            description: '論点を100ワードに圧縮し、A4で1.5～2枚に収める。3時間以内初版ルールで動き出しを最速化（完璧ではなく十分を狙う）。成果物：100-Word Issue Brief。'
          },
          {
            name: 'クローズドクエスチョン雛形',
            description: 'インタビュー/調査では「はい/いいえ」「5段階」等の構造化質問で定量化可能に。誘導バイアス排除の設計。成果物：Closed-Q Template。'
          },
          {
            name: 'リアリティ・スイッチ適用レビュー',
            description: '施策/シナリオ/課題を「当事者として本当に動けるか？」で検証し、机上論を排除。成果物：Reality-Check Log。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：現状分析・情報収集（Fact-Finding）',
        description: '一次/二次情報を設計通りに取りに行き、机上と現場のズレを潰す。3C/SWOT/PEST/BPM/VOCを目的適合で使い分ける。朝一"仕込み"で最初の1時間に論点・優先度を再確認し、フェルミ推定で数値感度を研ぎ、用語・セグメントを整備。ネガティブ遮断で集中環境を確保。',
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
          },
          {
            name: '朝一"仕込み"実行',
            description: '始業後の最初の1時間で論点と優先度を再確認し、思考資源を割り当て、フェルミ推定やVOCコード化など先行タスクを"仕込む"。成果物：Daily Prep Note。'
          },
          {
            name: 'フェルミ推定セットアップ',
            description: '不完全情報でも市場規模・効果量・工数をオーダーで弾き（10倍・1/10単位）、分析精度の要否を判定。成果物：Fermi Sheet、前提メモ。'
          },
          {
            name: '用語・セグメンテーション整備',
            description: 'VOCや定量データの集計単位（年齢層・地域・購買頻度等）を統一し、用語の揺れをGlossaryで吸収。成果物：Glossary（改訂版）、Segment定義。'
          },
          {
            name: 'ネガティブ遮断の環境設計',
            description: '通知OFF、物理的な集中スペース確保、否定的フィードバックの一時保留など、思考を守る環境をデザイン。成果物：Focus Protocol。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：洞察化・真因特定',
        description: 'データを"示唆"に変換し、真因仮説を反証で絞り込む。言い切れる粒度まで解像度を上げる。辻褄思考レビューで一貫性を担保し、精緻化を図る。',
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
          },
          {
            name: '辻褄思考レビュー',
            description: '結論→理由→根拠→前提の連鎖が論理的に一貫しているかを検証し、矛盾・飛躍・循環論法を排除。成果物：Logic-Check Sheet。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：解決策の創出・評価',
        description: 'ゼロベースで複数案を出し、Impact×Feasibility、リスク、UX/EX、ROIで客観比較。机上ではなく実装可能性にこだわる。サードアンサー・セッションで常識を疑い、型の進化（プロセス刷新）で思考と手法を更新する。',
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
          },
          {
            name: 'サードアンサー・セッション',
            description: '第一案/第二案の次に「3つ目の道」を強制発想し、無意識の前提・常識を崩す。制約を可変要因に再定義。成果物：Third-Answer Canvas。'
          },
          {
            name: '型の進化（プロセス刷新）',
            description: '今回の学習を踏まえて、自身の思考プロセス・フレームワーク適用法を見直し、次回に引き継ぐ改善を明文化。成果物：Process Evolution Note。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：実行計画・合意形成',
        description: '経営が意思決定できる"数字と物語"を整え、ロードマップとガバナンスで実行可能性を固める。省力化ポイントを明示し、反証可能性ステートメントで検証性を担保する。',
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
          },
          {
            name: '省力化ポイントの明示',
            description: '提案の中で「既存資産・テンプレ・ツール・外注で減らせる工数」を明示し、無理なく回る計画に。成果物：Lean-Work Plan。'
          },
          {
            name: '反証可能性ステートメント',
            description: '仮説・結論・効果予測に対し「どうなれば間違いと認めるか」を明記し、検証可能性を確保。成果物：Falsifiability Sheet。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：パイロット実行・チェンジマネジメント',
        description: '小さく始めて早く学ぶ。PMO・RACI・トレーニングで運用に乗せ、抵抗と学習をマネージする。問いベースPMOで運用し、モチベ前提配賦で思考量/生産性を担保。',
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
          },
          {
            name: '問いベースPMO',
            description: 'タスクではなく「論点」で管理（Issue-led）。ボードも論点カラム基準で構成し、検証すべき問いの消化状況を可視化。成果物：Issue-Led Board。'
          },
          {
            name: 'モチベ前提の配賦設計',
            description: '低モチベーション前提で「論点ワード枚数や粒度」を配賦し、思考量を確保。高モチベ依存を排除。成果物：Thinking-Load Plan。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：本格展開・定着化（Rollout & Embedding）',
        description: 'Quick Winで推進力を維持しつつ、標準化・ガバナンス・インセンティブで"新しい当たり前"にする。成長実感の可視化で継続を促進。',
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
          },
          {
            name: '成長実感の可視化',
            description: '達成バッジ/トロフィー/帯のストライプ等で成長を見える化し、行動継続を促進。成果物：Win Wall、Progress Badges。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クロージング・次の課題へ',
        description: '成果・学習・未了課題を経営に接続し、再現可能な"勝ち筋"として資産化。次の問いを残して終える。言語化の質で締め、ストーリー反省会で次回の一枚絵を磨く。',
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
          },
          {
            name: 'ストーリー反省会',
            description: 'どこが"刺さらなかったか"を具体化し、次回の一枚絵（物語・訴求構造）を磨く。成果物：Story Post-mortem。'
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
        description: '「誰に・何を・いつまでに・どうしてほしいか」を一文で定義し、相手理解/政治地図/意思決定経路/根回しの出発点を揃える。症状と課題、依頼と本質を混同しないほど後戻りが減る。不完全情報でもスタンスを表明し即レス、デイゼロ準備＆物理リマインダーで初動を固める。',
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
          },
          {
            name: 'スタンス表明・即レス規律',
            description: '「ケースバイケース」で逃げず、結論仮置き→前進。Ping→Pongを2時間以内に徹底（即レス運用）。成果物：Decision Log、Response SLA。'
          },
          {
            name: 'デイゼロ準備＆物理リマインダー',
            description: '雛形・チェックリスト・アウトラインを事前作成し、画面貼り/印刷で忘却防止。成果物：Day-0 Kit、Physical Reminders。'
          },
          {
            name: '努力配分設計：120点×1本＋65点許容',
            description: '最重要論点に集中、"ナイスハブ"は省力運用を明示。成果物：Effort Focus Map、Effort Cut List。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：論理骨子・構成（Logic & Structure Design）',
        description: 'MECEで論点を組み、Why Now/Why Thisを数字と構造で通す。論点ワード100＆3時間初版、クローズド質問化、リアリティ・スイッチで深さと速度を両立。',
        tasks: [
          {
            name: 'ワンメッセージ＆PREP骨子',
            description: 'ワンスライド・ワンメッセージ→PREP構成（Point/Reason/Example/Point）。専門語は日常語に置換。成果物：Key Message、PREP骨子。'
          },
          {
            name: '論点ツリーと検証課題の紐づけ',
            description: '結論→主要論点→必要事実をトップダウン分解。MECE徹底。成果物：Issue Tree、Fact Need List。'
          },
          {
            name: '「Why Now?」と不作為コスト（CoI）の定量化',
            description: '機会損失/遅延損/競争差をレンジ＆感度で提示（フェルミ推定を活用）。成果物：CoI試算表、感度分析。'
          },
          {
            name: '選択肢（A/推奨、B/条件付、Plan B/次善）の設計',
            description: 'Impact×Feasibilityで客観比較し、推奨理由を明記。成果物：Option Matrix、推奨理由。'
          },
          {
            name: '論点ワード100 & 3時間初版',
            description: 'A4 1.5-2枚で約100クエスチョンを書き切り、3時間以内にワークプラン初版。成果物：Issue Words、Work Plan v1。'
          },
          {
            name: 'クローズドクエスチョン雛形',
            description: 'Yes/No＋数値/選択で詰める質問集を設計。成果物：Closed-Q Bank。'
          },
          {
            name: 'リアリティ・スイッチ適用',
            description: '前提/定義/単位系を明示し、思考の深さを検査。成果物：Reality-Switch Notes。'
          },
          {
            name: 'サードアンサー設計',
            description: '直感の2案を封印し、3つ目の面白い案を強制発想。成果物：Third-Answer Set。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：ファクト武装と権威づけ（Evidence & Authority）',
        description: '一次/二次の事実＋第三者権威＋現場観察で外部妥当性を獲得。ネガティブ遮断と本質セグメンテーションでブレない材料作り。',
        tasks: [
          {
            name: 'データ収集・検証（定量×定性）',
            description: '母集団/サンプル/偏り明示、誘導質問回避。成果物：Research Plan、Raw Log、集計。'
          },
          {
            name: '第三者の権威/事例の選定',
            description: '客観レポート/先行事例で補強。成果物：Evidence Pack。'
          },
          {
            name: '可視化設計（図解・ビジュアル）',
            description: '一枚一主旨、凡例/単位/出所を明記。成果物：Chart Book、1枚図。'
          },
          {
            name: '解像度の最適化',
            description: '意思決定に必要な粒度へ調整。成果物：Resolution Checklist。'
          },
          {
            name: 'ネガティブ遮断の環境設計',
            description: '低品質情報/雑音源の遮断ルール化。成果物：Info-Hygiene Rules。'
          },
          {
            name: '本質セグメンテーション整備',
            description: '相手別の効き所を定義。成果物：Segmentation Draft。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：ストーリー・資料化（Story & Deck）',
        description: '結論→理由→証拠→含意の物語で頭に刺さり心も動くデックへ。冒頭でWIIFM/CoI/Quick Winを前段化し、反証可能性も明示。',
        tasks: [
          {
            name: 'エグゼクティブ1枚＆詳細骨子',
            description: '冒頭に結論、以降は三点論法。成果物：One-slide Exec、Long Deck骨子。'
          },
          {
            name: 'As-Is / To-Be / ギャップの図解',
            description: '因果線を一本化し道筋を明快に。成果物：ギャップ図、ロードマップ素案。'
          },
          {
            name: 'WIIFM/CoI/Quick Winの前段化',
            description: '冒頭3枚で関心を掴む。成果物：WIIFM/CoI/Quick Winスライド。'
          },
          {
            name: 'スピーカーノートと想定問答',
            description: '短答/長答、根拠と限界を準備。成果物：Speaker Notes、Q&A。'
          },
          {
            name: '反証可能性ステートメント',
            description: '破綻条件/閾値/前提を明示。成果物：Falsifiability Sheet。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：チャネル・場づくり（Channel & Setting）',
        description: '勝負は会議前に決める。最適なタイミング/場/同調者を設計し、根回し・サウンディングで空気を整える。',
        tasks: [
          {
            name: 'タイミング設計とアジェンダ配布',
            description: '相手の繁忙/予算タイミングに合わせ事前通知。成果物：招集文、アジェンダ。'
          },
          {
            name: '個別根回し・サウンディング',
            description: '温度感の吸い上げ→当日の「Yesの階段」を設計。成果物：Stakeholder Brief、温度感メモ。'
          },
          {
            name: '訴求チャネルと演出の選定',
            description: '1on1/小会議/全体会/文書/デモを選択。成果物：Channel Plan、デモ台本。'
          },
          {
            name: 'プロト/デモの準備',
            description: '見れば分かる最小デモで未来を体感。成果物：クリックデモ/紙芝居。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：訴求実行・合意形成（The Ask in the Room）',
        description: '冒頭で目的/役割/ゴール/時間配分を合意し、結論→論拠→選択肢→推奨→意思決定で運営。反論は受容→要約→回答→クローズで前進。',
        tasks: [
          {
            name: 'オープニング（合意の階段づくり）',
            description: '小さなYesを積み上げる。成果物：開会スクリプト。'
          },
          {
            name: '本論提示（PREP×ワンスライド）',
            description: '話速は相手基準、専門語は言い換え。成果物：本論スライド。'
          },
          {
            name: '反論ハンドリング（受容→確認→回答→合意）',
            description: 'リスクは誠実に開示。成果物：Objection Log。'
          },
          {
            name: '意思決定の明確化とコミット獲得',
            description: '「本日はA/Bのいずれで？」の具体二択で促す。成果物：Decision Record。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：アクション後押し・実行支援（Enable & Nudge）',
        description: '相手が今すぐ動ける状態へ。Baby Step、障壁除去、RACI明文化、テンプレ供給、問いベースPMOでハードルを下げる。',
        tasks: [
          {
            name: 'Baby Stepと期限・マイルストーン設定',
            description: '最小アクションを今日に置く。成果物：Action Sheet。'
          },
          {
            name: '障壁の先回り除去',
            description: '時間/予算/承認/ツールの代替策。成果物：Barrier→Counter Plan。'
          },
          {
            name: '役割分担（RACI）と合意文書',
            description: '責任/承認/情報先を明確化。成果物：RACI最終、合意メモ。'
          },
          {
            name: 'テンプレ/ツール提供と伴走表明',
            description: '雛形/チェックリスト配布、「一緒にやる」を明示。成果物：Template Pack、伴走計画。'
          },
          {
            name: '問いベースPMO導入',
            description: 'タスクでなく論点でボード管理。成果物：Issue-Led Board。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：フォローアップ・定着化（Follow-through & Embedding）',
        description: '報連相と定点観測で実行を支え、Quick Winでモメンタム維持。成長の可視化で継続を促す。',
        tasks: [
          {
            name: '議事メモ配布とリマインド運用',
            description: '決定/担当/期限/次回を即日共有、システム登録。成果物：MoM、タスク登録。'
          },
          {
            name: 'KPIフォローとQuick Win報告',
            description: '先行KPIを短サイクル観測、初期成果を可視化。成果物：KPIレポ、Win事例。'
          },
          {
            name: '巻き込み/インセンティブ設計',
            description: '望ましい行動に報いる制度接続。成果物：Incentive案、運用メモ。'
          },
          {
            name: 'ナレッジ移転と教育',
            description: 'SOP/FAQ/動画/OJTで自走化。成果物：SOP、Training Kit。'
          },
          {
            name: '成長実感の可視化',
            description: 'バッジ/トロフィー/帯ストライプ/Win Wallで成長を見える化。成果物：Progress Badges、Win Wall。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クロージング・学習資産化（Close & Learn）',
        description: '結果/学び/再現条件を言語化し、信頼残高を積む。ストーリー反省会で次の一枚絵を磨く。',
        tasks: [
          {
            name: '結果レビュー（What/So What/Now What）',
            description: '事実→含意→次アクションで総括。成果物：After Action Review。'
          },
          {
            name: '信頼の締め（感謝・ギブ・約束履行）',
            description: '小さな約束も確実に守る。成果物：謝意メール、Follow資料。'
          },
          {
            name: '次の仮説と訴求計画の種まき',
            description: '1行で次仮説を提示・共有。成果物：Next Hypotheses List。'
          },
          {
            name: 'プレイブック更新',
            description: 'デック雛形/Q&A/根回し順序/反論対処をテンプレ化。成果物：Persuasion Playbook vNext。'
          },
          {
            name: 'ストーリー反省会',
            description: 'どこが"刺さらなかったか"を具体化。成果物：Story Post-mortem。'
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
          },
          {
            name: 'スタンス表明・即レス規律',
            description: '不完全情報でも結論仮置き→前進。「ケースバイケース」で逃げない運用。成果物：Decision Log、Response SLA。'
          },
          {
            name: 'デイゼロ準備＆物理リマインダー',
            description: 'テンプレ/チェックリスト/アウトラインを前日までに準備し画面貼りで忘却防止。成果物：Day-0 Kit、Physical Reminders。'
          },
          {
            name: '努力配分設計：120点×1本＋65点許容',
            description: '決定打論点に全力投下、"ナイスハブ"は省力化。成果物：Effort Focus Map、Effort Cut List。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：比較軸（評価基準）の設計',
        description: 'MECEかつ測定可能な物差しを設計し、重みと足切り条件を事前合意。論点ワード100＆3時間、クローズド質問化、リアリティ・スイッチで深さと速度を両立。',
        tasks: [
          {
            name: '評価軸ブレスト→体系化',
            description: '機能/非機能/TCO/セキュリティ/サポート/将来性…を出し切り重複排除。成果物：Criteria Tree、定義書。'
          },
          {
            name: '評価基準の可観測化とスケール設計',
            description: '操作定義を言語化（例：「10分・手引なしで主要3操作可」）、尺度を統一。成果物：Scoring Rubric、採点票。'
          },
          {
            name: '重み付け（AHP/加重平均）と必須条件の設定',
            description: '重み確定とMust-have足切り。成果物：Weight Matrix、Must-have List。'
          },
          {
            name: '論点ワード100 & 3時間初版',
            description: '評価軸に関する約100の問いをA4 1.5-2枚で書き切り、3時間以内に評価設計の初版を完成。成果物：Issue Words、Work Plan v1。'
          },
          {
            name: 'クローズドクエスチョン雛形',
            description: 'Yes/No＋数値/選択で詰める質問集。成果物：Closed-Q Bank。'
          },
          {
            name: 'リアリティ・スイッチ適用',
            description: '前提/定義/単位系を明示し"深さ"を点検。成果物：Reality-Switch Notes。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：候補のロングリスト作成と絞り込み',
        description: '情報源の公平性を担保し候補を網羅→短冊評価でショートリスト化。朝一"仕込み"／ネガティブ遮断／本質セグメンテーション／フェルミ推定でぶれない母集団設計。',
        tasks: [
          {
            name: '情報源の標準化とRFI設計',
            description: '公式資料/第三者レポート/事例を同類型で揃え、RFIで同一様式の回答を取得。成果物：Source Map、RFI票。'
          },
          {
            name: 'ロングリスト→ショートリスト',
            description: '必須条件の足切り＋Pugh Matrixで3-5案に絞る。成果物：Long→Short List、足切り記録。'
          },
          {
            name: '前提・用語の整備',
            description: '通貨/税/期間/バージョン等の統一。成果物：Assumption Sheet、Glossary。'
          },
          {
            name: '朝一"仕込み"実行',
            description: '調査依頼/データ抽出など時間差作業は毎朝起動。成果物：Prep Queue、依頼ログ。'
          },
          {
            name: 'ネガティブ遮断の環境設計',
            description: '低品質情報の遮断ルール。成果物：Info-Hygiene Rules。'
          },
          {
            name: '本質セグメンテーション整備',
            description: '候補の効き所を切り分ける軸を定義。成果物：Segmentation Draft。'
          },
          {
            name: 'フェルミ推定セットアップ',
            description: '主要KPIを概算→感度でオーダー把握。成果物：Fermi Sheet。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：情報収集・正規化（Apple-to-Apple化）',
        description: '同一定義・同一単位で比較可能にするため、デモ/PoC/ユーザー聴取を設計し、欠落はベンダー照会で補完。',
        tasks: [
          {
            name: 'デモ/PoC/トライアルの設計と実施',
            description: '代表ユースケースを用い、操作時間/失敗率/学習時間などを計測。成果物：Trial Protocol、計測ログ。'
          },
          {
            name: '第三者評価/口コミ/ユーザー聴取',
            description: '賛否併記で外部妥当性を確保。成果物：Voice Summary。'
          },
          {
            name: 'データの正規化と欠落補完',
            description: '通貨/税/期間を統一、空欄は照会で埋める。成果物：Normalized Dataset、問い合わせログ。'
          },
          {
            name: 'ベンダー向けクローズドQ運用',
            description: 'Yes/No＋数値で回答を揃える。成果物：Vendor Q Sheet。'
          },
          {
            name: 'Reality-Switchチェック',
            description: '計測条件/単位の齟齬を点検。成果物：RS Check List。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：メリット・デメリット分析',
        description: 'SWOT/Kano/MoSCoWで長短を型に落とす。辻褄思考で異論の成立条件を統合し、サードアンサーで「面白い第3案」を強制発想。',
        tasks: [
          {
            name: 'SWOTとKanoで長短の型を揃える',
            description: '強み/弱み/機会/脅威＋魅力/当たり前品質。成果物：SWOT/Kanoシート。'
          },
          {
            name: '実装観点（EX/運用/チェンジマネジメント）の当て込み',
            description: '導入ハードル・教育負荷・権限設計・抵抗を評価。成果物：Adoption Risk、Mitigation案。'
          },
          {
            name: 'TCO/効果/リスクのトレードオフ図解',
            description: '三面図で位置付けを可視化。成果物：Trade-off Map。'
          },
          {
            name: '辻褄思考レビュー',
            description: '相反意見の成立条件を探索し整合案を設計。成果物：Coherence Notes。'
          },
          {
            name: 'サードアンサー・セッション',
            description: '直感の2案を封印し3つ目を出す。成果物：Third-Answer Set。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：スコアリング・順位付け',
        description: '採点基準と重みを透明に適用し、評価者キャリブレーションと感度分析で頑健性を担保。省力化ポイントも明示。',
        tasks: [
          {
            name: 'スコアカードの作成（加重平均/AHP）',
            description: '素点×重みで総合点、前提や「該当なし」を注記。成果物：Scorecard、根拠メモ。'
          },
          {
            name: '評価者キャリブレーションと多人数採点',
            description: '目線合わせ→複数採点→平均/分散を記録、極端値は議論で解消。成果物：Calibration Log、採点履歴。'
          },
          {
            name: '感度分析/シナリオ別順位',
            description: '「コスト最重視」「機能最重視」等で順位変動を検証。成果物：Sensitivity Sheet、Scenario Ranking。'
          },
          {
            name: '省力化ポイントの明示',
            description: '"ナイスハブ"領域を切り分け、時間投下を守る。成果物：Effort Cut List。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：総合評価・推奨の物語化',
        description: '結論→理由→根拠→含意のストーリー。反証可能性ステートメントを併置し、短時間で刺さる材料へ。',
        tasks: [
          {
            name: 'エグゼクティブサマリとレーダーチャート',
            description: '推奨案/順位/決め手/前提を1ページ化。成果物：1-pager、Radar/Heatmap。'
          },
          {
            name: '上位候補のメリデメ・リスクの要約',
            description: '「A=短期費用◎/運用△」「B=機能◎/導入×」等を端的に。Plan Bも提示。成果物：Pros/Cons、Plan B。'
          },
          {
            name: '"決め手"の言語化と引用根拠',
            description: '象徴的データ/ユーザー声を引用、出典と再現手順を明記。成果物：Killer Fact集、引用一覧。'
          },
          {
            name: '反証可能性ステートメント',
            description: '破綻条件/閾値/前提を明示。成果物：Falsifiability Sheet。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：合意形成・決定・コミット',
        description: '事前サウンディングで地ならし→本番はPREP/ピラミッドで運営。問いベースPMOとRACIを同時にセット。',
        tasks: [
          {
            name: 'サウンディング/根回し',
            description: '事前説明で懸念吸い上げ、「Yesの階段」を設計。成果物：Stakeholder Brief、懸念ログ。'
          },
          {
            name: '本番提示とQ&A運営',
            description: '結論→理由→根拠→選択肢→推奨→意思決定の順。成果物：Executive Deck、Q&A集。'
          },
          {
            name: '意思決定記録とRACI明確化',
            description: '決定/条件/保留を記録、初回マイルストーンを確定。成果物：Decision Record、RACI、初期ロードマップ。'
          },
          {
            name: '問いベースPMO導入',
            description: 'タスクではなく論点でボード管理。成果物：Issue-Led Board。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：クローズ・学習資産化',
        description: '比較プロセスを再利用可能なプレイブックへ。成長の可視化でモチベ連鎖を作る。',
        tasks: [
          {
            name: 'After Action Review（What/So What/Now What）',
            description: '前提/重み/データ品質/政治論点の妥当性を検証し改善に落とす。成果物：AARメモ、改善バックログ。'
          },
          {
            name: 'プレイブック/テンプレ更新',
            description: 'スコアカード/基準定義/感度テンプレ/引用体裁/連絡文例を更新。成果物：Comparison Playbook vNext。'
          },
          {
            name: '関係者コミュニケーションの締め',
            description: '未選定先にも敬意を払い結果共有。成果物：謝意/結果連絡テンプレ。'
          },
          {
            name: '成長実感の可視化',
            description: 'バッジ/Win Wall/ストライプ等で進歩を明示し継続を促す。成果物：Progress Badges、Win Wall。'
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
        description: '目的・成功基準・決裁構造・スコープ・前提/制約を一度に言語化し、以後の設計/運用の"土台"を固定。デイゼロ準備と朝一の論点作業を仕込み、即レス運用で初動を加速する。',
        tasks: [
          {
            name: '目的と成功の一文化（Goal/KGI/KPI 1-Liner）',
            description: '結論→理由→根拠を1文で固定し、KGIと先行/遅行KPIをツリー化。朝の時間はワードで論点設計を優先し、PPT着手は後回し。即レスでレビュー枠に合わせて納品。成果物：Goal Statement／KPIツリー／用語定義。'
          },
          {
            name: 'ステークホルダー/意思決定設計',
            description: 'RACI×パワーマップで決裁者/影響者/利用者を可視化し、Yesの階段を設計。Outlook等の予定に合わせた提出時刻を逆算。成果物：Stakeholder Map／RACI草案／合意形成計画。'
          },
          {
            name: 'スコープ・前提・制約の固定化（Do-Nothing含む）',
            description: 'In/Out・制約を明記し、現状維持も正式な選択肢化。デイゼロで必要資料・環境の事前整備。成果物：Project Charter（Scope/Assumption/Constraint/Success）。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ2：要求定義（ユーザー価値と運用現実の橋渡し）',
        description: 'As-Is→To-Beを描き、機能/非機能を観測可能な条件に落とす。ヒアリングはクローズド質問を基本に、曖昧さを排除。',
        tasks: [
          {
            name: 'ユースケース&サービスブループリント',
            description: 'JTBD/ジャーニーから痛点→裏側（Ops）まで描く。朝一で"論点ワード"を下書き→午後に検証。成果物：Use Case Catalog／Blueprint 1枚図。'
          },
          {
            name: '非機能（SLA/SLI/SLO）閾値の観測定義',
            description: '可用性/性能/復旧の測定単位・閾値を確定し、計測計画に接続。成果物：NFR一覧／SLA草案／計測計画。'
          },
          {
            name: '要件確認のクローズド化',
            description: '「ここまで理解→不足はここ」という確認→限定質問で収束させる。成果物：要件票／Q&Aログ。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ3：運用モデル設計（"回る仕組み"の骨格）',
        description: '問いベース（論点ベース）でプロジェクトを管理するPMO骨格を先に設置。L1/L2/L3・SPOC・インシデント/変更/リリースの流れをBPMN化。',
        tasks: [
          {
            name: 'Issue-led Board（問いベースPMO）',
            description: 'タスクではなく論点を親にし、カードは「KQ→必要事実→DoD」で運用。成果物：Issue-led Board／運用ルール。'
          },
          {
            name: '運用プロセスの標準化（BPMN）',
            description: '障害/問題/変更/リリースの手順とエスカレーションを図式化。成果物：Ops Process Map／Runbook。'
          },
          {
            name: 'チーム設計（L1/L2/L3・SPOC）',
            description: 'L1/2/3切り分けと当番/バックアップを明文化。成果物：運用体制表／R&R一覧。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ4：データ・セキュリティ・法令順守設計',
        description: 'データの取得→保存→活用→廃棄、権限/監査/規制対応を前倒しで織り込む。',
        tasks: [
          {
            name: 'データライフサイクル&品質',
            description: 'メタデータ/命名規約、整合性/完全性、保存/廃棄、ログ保全。成果物：Data Policy／DQルール／Retention表。'
          },
          {
            name: 'セキュリティ/権限/監査',
            description: 'RBAC、証跡、脆弱性対応SLA、サプライヤリスク評価。成果物：Security要件／監査ログ方針。'
          },
          {
            name: '法令・契約・倫理の適合',
            description: '個人情報/業法/輸出規制、同意取得、AI/データ倫理。成果物：Compliance Checklist／規約案。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ5：リスク・TCO/ROI・資源設計',
        description: '発生確率×影響度で優先順位づけ、TCO/ROI/NPVをレンジと感度で提示。努力配分は"120点×1本主義"（他は65点可）で勝負タスクに集中。',
        tasks: [
          {
            name: 'リスクレジスタ&早期警報KPI',
            description: '技術/運用/法務/レピュのリスクと回避/低減/移転/受容、トリガーKPIを設定。成果物：Risk Register／Mitigation。'
          },
          {
            name: 'TCO/ROI/NPVと感度分析',
            description: '式・前提・ドライバ（利用率/人件費/障害率）で感度を回す。成果物：Business Case Sheet。'
          },
          {
            name: '資源/能力計画（Make/Buy/Partner）',
            description: 'スキル×工数マトリクス、内製/外注境界、ベンダ評価軸。成果物：Resource Plan。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ6：スケジュール・移行/展開・変更管理設計',
        description: 'パイロット→段階展開、変更管理（RFC→CAB→実施）、撤退/ロールバック基準を明文化。時間差の出る"仕込み"は朝一で起動。',
        tasks: [
          {
            name: '移行/パイロット→段階展開',
            description: '対象/順序/Go-NoGo/バックアウト手順。成果物：Rollout Plan／バックアウトRunbook。'
          },
          {
            name: '変更管理プロセス',
            description: '審査基準・影響分析・承認権限・フリーズ/緊急例外を定義。成果物：Change Policy／CAB運営要領。'
          },
          {
            name: '統合カレンダー&外部要因織込み',
            description: '決算/繁忙期/法改正/メンテ窓を統合。成果物：Integrated Calendar。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ7：コミュニケーション・教育・定着（EX）',
        description: 'わかる→できる→続くの3段階でコミュニケーション/トレーニング/インセンティブを設計。ネガティブ要因の遮断と成長の可視化（ストライプ/バッジ）で継続性を設計。',
        tasks: [
          {
            name: 'コミュニケーション設計（Message Map）',
            description: 'オーディエンス別にPREP台本化、資料はワンスライド・ワンメッセージで統一。成果物：Comms Plan／テンプレ一式。'
          },
          {
            name: 'ロール別トレーニング&認定',
            description: '学習目標→評価項目→修了判定、OJT/動画/演習を組合せ。成果物：Training Plan／教材雛形。'
          },
          {
            name: '行動強化の設計（成長可視化×ネガティブ遮断）',
            description: 'ストライプ/バッジ/Win Wallで成長を見える化し、水を差す要因から防御する環境を設計。成果物：Kudos施策／環境設計メモ。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ8：可観測性・監視/アラート・AAR',
        description: '運用KPI/SLIのダッシュボード、アラート設計、AARで継続改善のループ。',
        tasks: [
          {
            name: 'メトリクス&ダッシュボード',
            description: '可用/性能/品質/満足度/学習時間のSLI、しきい値・可視化粒度を定義。成果物：KPI/SLI定義／ダッシュボード設計書。'
          },
          {
            name: 'アラート/オンコール設計',
            description: '優先度・通知・当番表・エスカレーションとSLA連動。成果物：Alert Policy／On-call Runbook。'
          },
          {
            name: 'AAR/ポストモーテム',
            description: 'What→So What→Now Whatで原因・学びを資産化。成果物：AARテンプレ／改善バックログ。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ9：稼働準備審査（ORR）・移管・最終合意',
        description: '計画/運用設計の"できる根拠"を総点検し、運用主体へ正式移管。朝一は論点最終チェック→午後にデック整形で最終レビューに備える。',
        tasks: [
          {
            name: 'ORR（Operational Readiness Review）',
            description: 'SLA・体制・Runbook・監視・訓練・バックアウトの有無をチェックリストで審査。成果物：ORRレポート／是正計画。'
          },
          {
            name: 'エグゼクサマリ&合意文書',
            description: '結論→根拠→リスク/条件→初期ロードマップを1枚で提示、決裁取得。成果物：Executive One-Pager／Decision Record。'
          },
          {
            name: 'ナレッジ移転/引継ぎ',
            description: '運用演習、シャドー→リバースシャドー、問合せ模擬。成果物：KT計画／引継ぎ完了報告。'
          }
        ]
      },
      {
        id: 'phase10',
        name: 'フェーズ10：クローズ&学習資産化（Playbook化）',
        description: '設計〜稼働準備の知見をテンプレ/チェックリスト/メール文例へ落とし込み、次回の立ち上げ速度と品質を底上げ。論点ワード100＆3時間や問いベースPMOなどの運用知を標準化。',
        tasks: [
          {
            name: '設計プレイブックの更新',
            description: 'Charter雛形、SLA/DoD、BPMN、AAR、ORR、Comms Planを最新版に統合。成果物：Planning & Ops Playbook vNext。'
          },
          {
            name: '指標の初期効果測定',
            description: '当初KPI対比の初期実績を算定し、想定との差分要因を特定。成果物：Initial Outcome Report。'
          },
          {
            name: '関係者リレーションのクロージング',
            description: '感謝/学び共有、未選定案/関係先への礼節ある連絡で信頼残高を貯める。成果物：Closing Note／共有資料。'
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
        description: '「何を残すか」ではなく「何のために残すか」を先に固定。利用者・再利用シーンを特定し、KGI（再利用率/Time-to-Answer短縮）とKPI（検索→閲覧→適用の転換率）を指標ツリーで接続。以後は問いベースで運営（PMO発想）し、意思決定を速くする。',
        tasks: [
          {
            name: '成果の定義とユースケース設計',
            description: 'Why/How/WhatとPREPで「誰が・どの場面で・何を決めるために使うか」を1文化。注意点：閲覧数≠成果、行動変化（適用）で測る。成果物：ユースケース一覧、KGI/KPI表、1枚サマリ。'
          },
          {
            name: 'スコープ/非スコープと用語定義',
            description: 'イシューツリーでMECE分解し非スコープも明示。成果物：論点マップ、非スコープ声明、用語集。'
          },
          {
            name: 'ステークホルダー/意思決定設計',
            description: 'Power–Interest×RACIで役割・承認経路・段階合意（前提→小結→最終）を設計。成果物：RACI、影響マップ、合意形成プラン。'
          },
          {
            name: '運営原則（問いベース/即レス）',
            description: 'プロジェクトは問いベースで進行、問い合わせは即レスを標準化。成果物：運営原則メモ、SLA。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ02：ソース収集・証跡化',
        description: '"語り"ではなく証拠で残す。一次資料・数値・意思決定ログを集め、後から検証可能なトレーサビリティを確保。時間差作業（仕込み）は朝一で動かす運用を徹底。',
        tasks: [
          {
            name: 'アセット棚卸し（成果物/議事/決定ログ）',
            description: '全アセットにメタデータ（作成者/版/日付/適用条件）付与、Docs-as-Code/SemVerで版管理。成果物：アセット台帳、リンク集、版管理ルール。'
          },
          {
            name: 'AAR×KPTインタビュー',
            description: 'AAR（What/So What/Now What）＋KPTで教訓抽出。注意点：クローズドクエスチョンで聞き切り、事実→解釈→示唆の順で記録。成果物：インタビューノート、教訓サマリ。'
          },
          {
            name: '外部ベンチ/参考文献の取り込み',
            description: '一次ソース主義で3C/PEST整理。成果物：ベンチ表、出典リスト（URL/発行日/引用範囲）。'
          },
          {
            name: 'データ抽出と正規化（朝一仕込み）',
            description: 'KPIログの単位/粒度/期間を統一し、抽出・クレンジングなど仕込み作業は朝一に実行。成果物：正規化データ、データ辞書。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ03：抽出・要素分解（成功/失敗・前提/リスク）',
        description: '情報の山を"意思決定に効く要点"へ圧縮。論点→タスク→ワード→スライドの順で加工し、論点ワードはA4 1.5～2枚（100クエスチョン）を書き切る→3時間でワークプランまでを標準に。',
        tasks: [
          {
            name: 'ストーリーライン設計',
            description: 'ピラミッド＆ワンスライド・ワンメッセージでSo What/Why Soを往復。成果物：1ページ要約、論拠ピラミッド。'
          },
          {
            name: '5 Whys×ロジックツリーで真因特定',
            description: '仮説→検証→更新を短サイクル、MECEで抜け漏れを抑制。成果物：因果マップ、論点ツリー。'
          },
          {
            name: 'アサンプション/リスクのトレース',
            description: '施策と前提・成立条件・リスク（確率×影響）を紐付け、再現条件を明記。成果物：アサンプションログ、リスク登録票。'
          },
          {
            name: '失敗のアンチパターン化',
            description: '「兆候→対処」をカード化し誤りの再発を防止。成果物：アンチパターン集。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ04：標準化・テンプレート化',
        description: '"誰がやっても同じにできる"状態へ。SOP/チェックリスト/テンプレ/例文で再現性と品質を固定。朝のクリアタイムはワード作成・定義仕事に充てることをルール化。',
        tasks: [
          {
            name: 'SOP/プレイブック設計',
            description: '目的→前提→準備→手順→判定基準→落とし穴→参考の共通フォーマット。DoR/DoDを明文化。成果物：SOP/プレイブックv1。'
          },
          {
            name: 'チェックリスト＆レビュー観点',
            description: 'QCD/UX/セキュリティ/リスクのYes/No判定とダブルサイン。成果物：チェックリスト、レビューフォーム。'
          },
          {
            name: 'テンプレート/記入例（提案書・計画書・A3）',
            description: 'A3思考で「目的/現状/原因/対策/効果/副作用」を1枚に凝縮。成果物：PPT/Docテンプレ、記入例。'
          },
          {
            name: 'タクソノミ/タグ/メタデータ設計',
            description: '検索語（職種/業界/規模/機能/フェーズ）を前提に統制語彙・命名規則・必須メタデータを定義。成果物：分類表、メタデータ辞書。'
          },
          {
            name: '版管理/変更管理ルール',
            description: 'Git運用、CHANGELOG、破壊的変更はMAJORで明示。成果物：変更管理手順、リリースノート。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ05：ナレッジベース設計（情報設計・検索・表現）',
        description: 'Findability×Readabilityを最大化。利用者の言葉で同義語辞書を作り、検索・タグと連動。クローズドクエスチョンで要件を具体化して要素を落とし込む。',
        tasks: [
          {
            name: '情報アーキテクチャ（IA）設計',
            description: 'ユーザーストーリーからサイトマップ/目次/パンくず設計。1トピック=1URL=1メッセージ。成果物：IA図、CMS構成案。'
          },
          {
            name: '検索最適化と同義語辞書',
            description: '英日/社内語の同義語辞書を整備しタグと連動。成果物：検索辞書、クエリガイド。'
          },
          {
            name: '可視化スタイルガイド',
            description: '色数制限、単位明記、比較は同スケール、凡例先出し。成果物：可視化ガイド。'
          },
          {
            name: '品質基準とピアレビュー',
            description: '事実/意見分離、出典明記、再現手順の有無を合否基準に。成果物：品質基準書、レビュー記録。'
          },
          {
            name: '多言語/アクセシビリティ',
            description: '固有名詞の表記揺れ、代替テキスト、色覚バリアフリー、簡潔日本語（60字以内）。成果物：多言語ガイド、アクセシ仕様。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ06：導入・浸透（チェンジマネジメント）',
        description: '"正しい"より"納得できる"を優先。即レスとハッピーモードで心理的コストを下げ、使われるナレッジにする。低モチベメンバーは論点ワード枚数を増やして思考量で補う運用も併用。',
        tasks: [
          {
            name: '変革ストーリーとコミュニケーション計画',
            description: 'Kotter/ADKAR×PREPで告知→短期勝利→定着。成果物：告知資料、FAQ、説明会台本。'
          },
          {
            name: '研修・オンボーディング（朝活設計）',
            description: 'ロール別の最初の一歩を設計し、朝のクリアタイムはワード/定義仕事に充当。成果物：ハンズオン資料、演習データ。'
          },
          {
            name: '伴走支援/オフィスアワー（即応）',
            description: '初期は即レスで質問コストを下げ、Q&Aログを次版改善に循環。成果物：Q&Aログ、改善バックログ。'
          },
          {
            name: 'インセンティブ/表彰',
            description: '再利用貢献（再利用回数/引用数）の可視化と表彰。成果物：表彰設計、ダッシュボード。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ07：横展開・運用・改善',
        description: 'パイロット→段階拡大→全社展開。問いベース（論点ベース）でガバナンスし、検索→閲覧→適用のKPIファネルを月次で改善。',
        tasks: [
          {
            name: 'パイロット選定とQuick Win設計',
            description: '影響×実現性で部門選定、2週間以内の可視成果を仕込む。成果物：展開計画、成功指標。'
          },
          {
            name: 'ナレッジ・チャンピオン制度',
            description: '各部門の旗振り役を任命し月次サロンで事例共有。成果物：役割定義、運営要領。'
          },
          {
            name: 'ガバナンス/棚卸し',
            description: '使われない/古い/重複コンテンツを定期除却（情報の5S）。成果物：棚卸しレポート、アーカイブ方針。'
          },
          {
            name: 'KPIモニタリングとPDCA（論点レビュー）',
            description: '論点ワード→アクション→適用の流れをレビュー、3時間ルールを守れているか定期点検。成果物：KPIダッシュボード、改善版。'
          },
          {
            name: '成果の可視化と最終報告',
            description: 'Before/After（TTA/再利用率/工数削減）とキラーファクト/反証を併記。成果物：エグゼクティブサマリ、成果事例集。'
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
        description: '「なぜ訊くか／何を決めるために訊くか」を先に固定。意思決定に効くKQを1行化し、専門用語に"慣れておく"ことで誤読を防ぐ。深さはリアリティ・スイッチ（正しさではなく"思考の深さ"の切替）で担保する。',
        tasks: [
          {
            name: '意思決定ゴールと評価指標の確定',
            description: '最終意思決定とKGI/KPIを1ページに。指標は行動変化に紐づける。成果物：1枚サマリ、指標ツリー。'
          },
          {
            name: '論点ツリー／仮説の明文化',
            description: '仮説→必要事実→質問の三段棚。反証可能性を明記し、後工程の型に繋ぐ。成果物：論点ツリー、仮説一覧。'
          },
          {
            name: 'スコープ／非スコープと用語定義',
            description: '対象と非対象を宣言。専門用語の定義を冒頭で共有。成果物：スコープ定義書、用語集。'
          }
        ]
      },
      {
        id: 'phase2',
        name: 'フェーズ02：対象者選定とサンプリング設計',
        description: '階層×機能×立場を網羅し、偏りを抑える。プロセスは"型の進化"を前提にテンプレとして更新可能にする。',
        tasks: [
          {
            name: 'ステークホルダーマッピング',
            description: 'Power×InterestとRACIで影響度・情報保有度を可視化。成果物：利害関係者マップ、RACI表。'
          },
          {
            name: 'サンプリング戦略と割付',
            description: '層化基準・必要サンプル・重複条件（理論的飽和）を定義。成果物：対象者リスト、割付計画。'
          },
          {
            name: 'エキスパート基準の設定',
            description: '資格／査読／年数で基準化し、デルファイ候補抽出の土台に。成果物：選定基準、候補名簿。'
          }
        ]
      },
      {
        id: 'phase3',
        name: 'フェーズ03：コンプライアンス・同意・運営ルール',
        description: '情報区分・保存・権限制御、録音・匿名化・撤回権を標準化し、運営の型に落とす。',
        tasks: [
          {
            name: '情報分類・取扱方針',
            description: '公開/内部/機微の分類、保存期間、持出し禁止、権限。成果物：情報管理ポリシー、権限表。'
          },
          {
            name: 'インフォームド・コンセント',
            description: '目的/利用範囲/録音/匿名化/撤回権を明記。成果物：同意書（JA/EN）。'
          },
          {
            name: 'バイアス低減オペレーション',
            description: '二名体制、順序効果回避、先入観提示禁止。成果物：実施ガイド、役割分担表。'
          }
        ]
      },
      {
        id: 'phase4',
        name: 'フェーズ04：インタビュー設計（プロトコル・質問票）',
        description: '"会話"ではなく"実験"。朝はワードで論点・ストーリーラインを作り、分析やPPTは後回し（集中資源の最適配分）。デイゼロで準備を作り切る。',
        tasks: [
          {
            name: 'プロトコル骨子（導入→本編→深掘り→締め）',
            description: '時間配分（例 5/30/20/5）と質問タイプ定義。成果物：プロトコルv1。'
          },
          {
            name: '質問リスト作成（オープン/クローズ）',
            description: 'PREP構成、事実と判断を分離。サードアンサー（直感1・2ではなく3つ目をひねる）で深掘り案を追加。成果物：質問票、追質問ガイド。'
          },
          {
            name: '業務理解の補助ツール',
            description: 'SIPOC・旅程・RACIを"共創記入"。成果物：白地図一式。'
          },
          {
            name: 'パイロットインタビュー',
            description: '2件試行→曖昧・誘導・冗長の除去。成果物：プロトコルv2、改善ログ。'
          }
        ]
      },
      {
        id: 'phase5',
        name: 'フェーズ05：ロジ整備（アポ・環境・ブリーフィング）',
        description: '急いでやる／相手のレビュー可能時間に合わせて作り切るを徹底（動き出しの遅さを自覚し是正）。',
        tasks: [
          {
            name: 'アポイントと資料送付',
            description: '目的/所要/事前準備明記、守秘・同意を同封。成果物：招待メール、同意書。'
          },
          {
            name: 'インタビュアーブリーフィング',
            description: '役割分担、禁句、深掘り合図を共有。成果物：ブリーフ資料、チェックリスト。'
          },
          {
            name: 'リスク対応（急用/延長/中断）',
            description: '代替日時、録音不調バックアップ、途中中断の扱い。成果物：運営ガイド。'
          }
        ]
      },
      {
        id: 'phase6',
        name: 'フェーズ06：実施（関係構築→深掘り→合意）',
        description: '"訊く"より"引き出す"。辻褄思考で矛盾の背景を理解し、リアリティ・スイッチで深さを切替える。',
        tasks: [
          {
            name: 'アイスブレイクと枠組み共有',
            description: '目的・配分・情報扱い・録音確認。成果物：録音ログ、同意記録。'
          },
          {
            name: '本編（業務/組織/データ/意思決定）',
            description: 'CITで成功/失敗事例、5 Whys/ラダーリングで価値観まで到達。成果物：逐語録、要点メモ。'
          },
          {
            name: '矛盾のクロスチェック',
            description: '他部門・資料・ログで照合、相違は仮説として宿題化。成果物：ギャップリスト、追加質問。'
          },
          {
            name: '終盤サマリと合意',
            description: '口頭要約→抜け漏れ確認→次アクション合意。成果物：サマリ、To-Do。'
          }
        ]
      },
      {
        id: 'phase7',
        name: 'フェーズ07：エキスパート・エリシテーション特化',
        description: '数値の"あたり"を揃えるためフェルミ推定と論理的な話し方（構成）を活用し、デルファイで収束。',
        tasks: [
          {
            name: 'デルファイ・ラウンド設計',
            description: '匿名投票→集計→再提示→収束。成果物：ラウンド計画、集計票。'
          },
          {
            name: '事前確率の校正',
            description: 'Brier等で過信/過小評価を補正。成果物：校正レポート。'
          },
          {
            name: '反事実・限界条件の探索',
            description: '「もしAが成立しないなら？」で前提境界を特定。成果物：前提/限界リスト。'
          }
        ]
      },
      {
        id: 'phase8',
        name: 'フェーズ08：記録・転記・コーディング（定性/定量化）',
        description: '型を進化させる前提で、転記→クレンジング→コード化→可視化の標準手順を更新し続ける。',
        tasks: [
          {
            name: '転記・クレンジング',
            description: '話者・タイムスタンプ・表記統一。成果物：逐語録、スタイルガイド。'
          },
          {
            name: 'コーディング枠組み構築',
            description: '一次→二次コード、相互評価で整合性。成果物：コードブック、信頼性指標。'
          },
          {
            name: '定量化と可視化',
            description: '「n件中x件」頻度化、共起・時系列の図示。成果物：可視化スライド、集計表。'
          }
        ]
      },
      {
        id: 'phase9',
        name: 'フェーズ09：統合・検証・示唆化',
        description: 'So What/Why Soの往復で意思決定材料へ統合。リアリティ・スイッチで深さ、辻褄思考で相反意見の整合を取る。',
        tasks: [
          {
            name: 'インサイト合成とストーリーライン',
            description: '結論→根拠→具体例のピラミッド。成果物：エグゼクサマリ、論拠マップ。'
          },
          {
            name: '反証可能性テスト',
            description: '逆仮説を立て矛盾探索、意思決定影響を明示。成果物：反証ログ、残リスク表。'
          },
          {
            name: 'メンバーチェック/利害調整',
            description: '当事者確認、匿名度合い合意。成果物：確認済みサマリ、修正版。'
          }
        ]
      },
      {
        id: 'phase10',
        name: 'フェーズ10：報告・合意形成・ナレッジ化',
        description: '朝はワードで要旨を仕上げ、"急いでやる"原則でリードタイム短縮。次案件へ回るプレイブック更新（型の進化）まで完了させる。',
        tasks: [
          {
            name: '意思決定者向け報告（口頭+資料）',
            description: '5分版/15分版、キラーファクト、想定QA。成果物：報告スライド、QA集。'
          },
          {
            name: 'アクションプランの明確化',
            description: 'RACI・マイルストーン・成功指標・副作用/緩和策を1枚化。成果物：アクションボード。'
          },
          {
            name: 'ナレッジ登録と展開',
            description: 'タグ/分類/版管理でKB登録、横展開ウェビナーで浸透。成果物：KB記事、録画/配布資料。'
          },
          {
            name: '振り返り（AAR×KPT）',
            description: 'プロセス/質問/運営の改善点を抽出し型を更新。成果物：レトロスペクティブ、改善バックログ。'
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