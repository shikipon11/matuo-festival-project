// =========================
// script.js
// =========================


// =========================
// 仮データ
// =========================

const projects = [
  
  { number: 1, title: "フォトスポット", category: "展示", place: "教室棟", floor: "4階" },
  { number: 2, title: "お化け屋敷", category: "体験", place: "教室棟", floor: "4階" },
  { number: 3, title: "宝探し", category: "体験", place: "教室棟", floor: "4階" },
  { number: 4, title: "写真", category: "展示", place: "教室棟", floor: "4階" },
  { number: 5, title: "CAM", category: "展示", place: "教室棟", floor: "4階" },
  { number: 6, title: "総合社会研究", category: "展示", place: "教室棟", floor: "3階" },
  { number: 7, title: "書道", category: "展示", place: "教室棟", floor: "3階" },
  { number: 8, title: "手相", category: "体験", place: "教室棟", floor: "3階" },
  { number: 9, title: "競技かるた", category: "体験", place: "教室棟", floor: "2階" },
  { number: 10, title: "美術", category: "展示", place: "教室棟", floor: "2階" },
  { number: 11, title: "文芸", category: "展示", place: "教室棟", floor: "2階" },
  { number: 12, title: "松尾祭地域応援", category: "飲食", place: "教室棟", floor: "1階" },
  { number: 13, title: "全校制作", category: "展示", place: "その他", floor: "渡り廊下" },
  { number: 14, title: "カンボジア井戸プロ", category: "飲食", place: "管理棟", floor: "2階" },
  { number: 15, title: "数学", category: "展示", place: "管理棟", floor: "2階" },
  { number: 16, title: "被服", category: "展示", place: "管理棟", floor: "2階" },
  { number: 17, title: "英語", category: "体験", place: "管理棟", floor: "2階" },
  { number: 18, title: "図書", category: "展示", place: "管理棟", floor: "2階" },
  { number: 19, title: "茶道", category: "体験", place: "管理棟", floor: "1階" },
  { number: 20, title: "ものづくり販売", category: "飲食", place: "その他", floor: "昇降口（中）" },
  { number: 21, title: "食品科学", category: "飲食", place: "管理棟" , floor: "1階"},
  { number: 22, title: "化学", category: "体験", place: "管理棟", floor: "3階" },
  { number: 23, title: "天文気象", category: "展示", place: "管理棟", floor: "3階" },
  { number: 24, title: "棋道", category: "体験", place: "管理棟", floor: "3階" },
  { number: 25, title: "クイズ", category: "体験", place: "管理棟", floor: "3階" },
  { number: 26, title: "吹奏楽/書道/ダンス", category: "パフォーマンス", place: "その他", floor: "第一体育館メイン" },
  { number: 27, title: "卓球", category: "体験", place: "その他" , floor: "第一体育館ギャラリー"},
  { number: 28, title: "ちびっこ広場", category: "体験", place: "その他", floor: "定時棟 1階" },
  { number: 29, title: "合唱/小さな音楽会", category: "パフォーマンス", place: "その他", floor: "音楽室" },
  { number: 30, title: "剣道", category: "体験", place: "その他", floor: "格技室" },
  { number: 31, title: "弓道", category: "体験", place: "その他", floor: "ピロティ" },
  { number: 32, title: "現代音楽/吹奏楽", category: "パフォーマンス", place: "その他", floor: "中庭（野外ステージ）" },
  { number: 33, title: "放送", category: "体験", place: "その他" , floor: "昇降口(外)"},
  { number: 34, title: "演劇", category: "パフォーマンス", place: "その他", floor: "同窓会館　1階" },
  { number: 35, title: "室内楽/合唱", category: "パフォーマンス", place: "その他" , floor: "同窓会館　2階"}

];

// =========================
// 要素取得
// =========================

const contentArea =
  document.getElementById("content-area");

const tabButtons =
  document.querySelectorAll(".tab-button");

const modal =
  document.getElementById("modal");

const closeModal =
  document.getElementById("close-modal");

const modalTitle =
  document.getElementById("modal-title");

const modalPlace =
  document.getElementById("modal-place");

const modalNumber =
  document.getElementById(
    "modal-number"
  );

const modalCategoryTag =
  document.getElementById(
    "modal-category-tag"
  );
const modalImage =
  document.getElementById(
    "modal-image"
  );

// =========================
// ハンバーガーメニュー
// =========================

const menuButton =
  document.getElementById("menu-button");

const headerNav =
  document.getElementById("header-nav");

/* 開閉 */
menuButton.addEventListener(
  "click",
  event => {

    /* 外側クリック防止 */
    event.stopPropagation();

    /* 開閉 */
    headerNav.classList.toggle(
      "open"
    );

  }
);

// =========================
// 外側クリックで閉じる
// =========================

document.addEventListener(
  "click",
  event => {

    /* メニュー内 */
    const isNav =
      headerNav.contains(
        event.target
      );

    /* ボタン */
    const isButton =
      menuButton.contains(
        event.target
      );

    /* 外側 */
    if (
      !isNav &&
      !isButton
    ) {

      headerNav.classList.remove(
        "open"
      );

    }

  }
);

// =========================
// スケジュール開閉
// =========================

const scheduleToggle =
  document.getElementById(
    "schedule-toggle"
  );

const scheduleDropdown =
  document.getElementById(
    "schedule-dropdown"
  );

/* 開閉 */
scheduleToggle.addEventListener(
  "click",
  event => {

    /* 外側クリック防止 */
    event.stopPropagation();

    /* 開閉 */
    scheduleDropdown.classList.toggle(
      "open"
    );

  }
);

// =========================
// 外側クリックで閉じる
// =========================

document.addEventListener(
  "click",
  event => {

    /* ドロップダウン内 */
    const isDropdown =
      scheduleDropdown.contains(
        event.target
      );

    /* ボタン */
    const isButton =
      scheduleToggle.contains(
        event.target
      );

    /* 外側 */
    if (
      !isDropdown &&
      !isButton
    ) {

      scheduleDropdown.classList.remove(
        "open"
      );

    }

  }
);

// =========================
// 初期表示
// =========================

renderNumberView();

// =========================
// タブ切り替え
// =========================

tabButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      /* active削除 */
      tabButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      /* active追加 */
      button.classList.add("active");

      /* データ取得 */
      const tab =
        button.dataset.tab;

      /* 表示切り替え */
      if (tab === "number") {

        renderNumberView();

      }

      if (tab === "category") {

        renderCategoryView();

      }

      if (tab === "place") {

        renderPlaceView();

      }

    }
  );

});

// =========================
// 番号順
// =========================

function renderNumberView() {

  contentArea.innerHTML = "";

  createSection(
    "1〜10",
    projects.filter(
      p =>
        p.number >= 1 &&
        p.number <= 10
    )
  );

  createSection(
    "11〜20",
    projects.filter(
      p =>
        p.number >= 11 &&
        p.number <= 20
    )
  );

  createSection(
    "21〜30",
    projects.filter(
      p =>
        p.number >= 21 &&
        p.number <= 30
    )
  );

  createSection(
    "31〜35",
    projects.filter(
      p =>
        p.number >= 31 &&
        p.number <= 35
    )
  );

}
// =========================
// カテゴリ順
// =========================

function renderCategoryView() {

  contentArea.innerHTML = "";

  createSection(
    "飲食",
    projects.filter(
      p => p.category === "飲食"
    )
  );

  createSection(
    "展示",
    projects.filter(
      p => p.category === "展示"
    )
  );

  createSection(
    "体験",
    projects.filter(
      p => p.category === "体験"
    )
  );

  createSection(
    "パフォーマンス",
    projects.filter(
      p => p.category === "パフォーマンス"
    )
  );

}

// =========================
// 場所順
// =========================

function renderPlaceView() {

  contentArea.innerHTML = "";

  createSection(
    "教室棟",
    projects.filter(
      p => p.place === "教室棟"
    )
  );

  createSection(
    "管理棟",
    projects.filter(
      p => p.place === "管理棟"
    )
  );

  createSection(
    "その他",
    projects.filter(
      p => p.place === "その他"
    )
  );

}

// =========================
// セクション生成
// =========================

function createSection(title, data) {

  /* section */
  const section =
    document.createElement("div");

  section.className =
    "section";

  /* header */
  const header =
    document.createElement("div");

  header.className =
    "section-header";

  /* タイトル */
  const titleElement =
    document.createElement("span");

  titleElement.textContent =
    title;
  
  titleElement.classList.add(
  "section-title"
  );

  if (title === "飲食") {

  titleElement.classList.add(
    "food-text"
  );

}

if (title === "展示") {

  titleElement.classList.add(
    "exhibition-text"
  );

}

if (title === "体験") {

  titleElement.classList.add(
    "experience-text"
  );

}

if (title === "パフォーマンス") {

  titleElement.classList.add(
    "performance-text"
  );

}

  /* アイコン */
  const icon =
    document.createElement("span");

  icon.className =
    "toggle-icon";

  icon.textContent = "∨";
  /* header追加 */
  header.appendChild(titleElement);

  header.appendChild(icon);

  /* 一覧 */
  const list =
    document.createElement("div");

  list.className =
    "project-list";

  // =========================
  // カード生成
  // =========================

  data.forEach(project => {

    /* カード */
    const card =
      document.createElement("div");

    card.className =
      "project-card";

    /* 色 */
    let categoryClass = "";

    if (
      project.category === "飲食"
    ) {

      categoryClass = "food";

    }

    if (
      project.category === "展示"
    ) {

      categoryClass = "exhibition";

    }

    if (
      project.category === "体験"
    ) {

      categoryClass = "experience";

    }

    if (
      project.category ===
      "パフォーマンス"
    ) {

      categoryClass =
        "performance";

    }

    /* 中身 */
    card.innerHTML = `

    <div class="project-top">

      <div class="project-circle">
        ${project.number}
      </div>

      <div class="project-title">
        ${project.title}
      </div>

</div>
      <div class="project-tags">

        <div class="tag ${categoryClass}">
          ${project.category}
        </div>

        <div class="tag place">
          ${project.place}
        </div>

      </div>

    `;

    // =========================
    // モーダル
    // =========================

    card.addEventListener(
      "click",
      () => {

        /* 番号 */
        modalNumber.textContent =
          project.number;

        /* タイトル */
        modalTitle.textContent =
          project.title;

        /* カテゴリ */
        modalCategoryTag.textContent =
          project.category;

        /* 色 */
        modalCategoryTag.className =
          `tag ${categoryClass}`;

        modalImage.src =
          project.image;

        /* 場所 */
        if (project.place === "その他") {

            modalPlace.textContent = 
              `場所: ${project.floor}`;

        } else {

            modalPlace.textContent =
                `場所：${project.place} ${project.floor}`;

        }

        /* 表示 */
        modal.classList.add(
          "show"
        );

      }
    );

    /* 一覧追加 */
    list.appendChild(card);

  });

  // =========================
  // 開閉
  // =========================

  header.addEventListener(
    "click",
    () => {

      list.classList.toggle(
        "open"
      );

      if (
        list.classList.contains(
          "open"
        )
      ) {

        icon.textContent = "∧";

      } else {

        icon.textContent = "∨";

      }

    }
  );

  /* section追加 */
  section.appendChild(header);

  section.appendChild(list);

  /* 表示 */
  contentArea.appendChild(section);

}

// =========================
// モーダルを閉じる
// =========================

/* ×ボタン */
closeModal.addEventListener(
  "click",
  () => {

    modal.classList.remove(
      "show"
    );

  }
);

/* 背景クリック */
modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {

      modal.classList.remove(
        "show"
      );

    }

  }
);

/* ESCキー */
document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      modal.classList.remove(
        "show"
      );

    }

  }
);

