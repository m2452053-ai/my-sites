const questions = [
  {
    q: "朝起きたときの気分は？",
    c: [
      { t: "まだねむい…", r: "chiikawa" },
      { t: "今日もがんばる！", r: "hachiware" },
      { t: "よくわからない！", r: "usagi" },
      { t: "とりあえずごはん", r: "kurimanjyu" }
    ]
  },
  {
    q: "友だちと遊ぶなら？",
    c: [
      { t: "おしゃべり", r: "momonga" },
      { t: "全力ではしゃぐ", r: "usagi" },
      { t: "静かにまったり", r: "rakko" },
      { t: "ちょっと様子を見る", r: "kani" }
    ]
  },
  {
    q: "ピンチのときは？",
    c: [
      { t: "泣いちゃう", r: "chiikawa" },
      { t: "助けを呼ぶ", r: "hachiware" },
      { t: "勢いで突破", r: "usagi" },
      { t: "冷静に考える", r: "rakko" }
    ]
  },
  {
    q: "好きな時間帯は？",
    c: [
      { t: "朝", r: "hachiware" },
      { t: "昼", r: "kani" },
      { t: "夜", r: "momonga" },
      { t: "いつでも", r: "usagi" }
    ]
  },
  {
    q: "褒められると？",
    c: [
      { t: "照れる", r: "chiikawa" },
      { t: "もっとがんばる", r: "hachiware" },
      { t: "調子にのる", r: "momonga" },
      { t: "気にしない", r: "rakko" }
    ]
  },
  {
    q: "休日の過ごし方は？",
    c: [
      { t: "ゴロゴロ", r: "chiikawa" },
      { t: "外に出る", r: "usagi" },
      { t: "趣味", r: "rakko" },
      { t: "おいしいもの", r: "kurimanjyu" }
    ]
  },
  {
    q: "頼まれごとをされたら？",
    c: [
      { t: "断れない", r: "chiikawa" },
      { t: "すぐ引き受ける", r: "hachiware" },
      { t: "条件しだい", r: "kani" },
      { t: "めんどう", r: "momonga" }
    ]
  },
  {
    q: "新しいことは？",
    c: [
      { t: "こわい", r: "chiikawa" },
      { t: "ワクワク", r: "usagi" },
      { t: "慎重に", r: "rakko" },
      { t: "得かどうか", r: "kurimanjyu" }
    ]
  },
  {
    q: "あなたの強みは？",
    c: [
      { t: "やさしさ", r: "hachiware" },
      { t: "行動力", r: "usagi" },
      { t: "頭の回転", r: "kani" },
      { t: "魅力", r: "momonga" }
    ]
  },
  {
    q: "最後に一言！",
    c: [
      { t: "がんばる…", r: "chiikawa" },
      { t: "なんとかなる！", r: "hachiware" },
      { t: "うらー！", r: "usagi" },
      { t: "乾杯", r: "kurimanjyu" }
    ]
  }
];

let index = 0;
let score = {};

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[index];
  document.getElementById("question").textContent = q.q;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  q.c.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.t;
    btn.onclick = () => selectChoice(choice.r);
    choices.appendChild(btn);
  });
}

function selectChoice(result) {
  score[result] = (score[result] || 0) + 1;
  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let max = 0;
  let final = "";

  for (let key in score) {
    if (score[key] > max) {
      max = score[key];
      final = key;
    }
  }

  const data = {
    chiikawa: ["ちいかわ", "img/chiikawa.png", "やさしくてちょっと泣き虫"],
    hachiware: ["ハチワレ", "img/hachiware.png", "前向きでがんばり屋"],
    usagi: ["うさぎ", "img/usagi.png", "自由で勢いのある天才"],
    kani: ["カニ", "img/kani.png", "頭がよくて現実的"],
    rakko: ["ラッコ", "img/rakko.png", "冷静で頼れる"],
    momonga: ["モモンガ", "img/momonga.png", "自己主張が強くて可愛い"],
    kurimanjyu: ["栗まんじゅう", "img/kurimanjyu.png", "大人でお酒好き"],
    shisa: ["シーサー", "img/shi-sa-.png", "まじめで努力家"]
  };

  document.getElementById("resultName").textContent = data[final][0];
  document.getElementById("resultImg").src = data[final][1];
  document.getElementById("resultText").textContent = data[final][2];
}
