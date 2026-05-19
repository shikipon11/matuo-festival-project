// =========================
// script.js
// =========================

// 仮の企画データ
const projects = [
  { number: 1, category: "飲食", place: "教室棟" },
  { number: 2, category: "展示", place: "管理棟" },
  { number: 3, category: "体験", place: "定時棟" },
  { number: 4, category: "パフォーマンス", place: "その他" },

  { number: 5, category: "飲食", place: "定時棟" },
  { number: 6, category: "展示", place: "教室棟" },
  { number: 7, category: "体験", place: "その他" },
  { number: 8, category: "パフォーマンス", place: "管理棟" },

  { number: 9, category: "飲食", place: "その他" },
  { number: 10, category: "展示", place: "定時棟" },
  { number: 11, category: "体験", place: "管理棟" },
  { number: 12, category: "パフォーマンス", place: "教室棟" },

  { number: 13, category: "飲食", place: "管理棟" },
  { number: 14, category: "展示", place: "その他" },
  { number: 15, category: "体験", place: "教室棟" },
  { number: 16, category: "パフォーマンス", place: "定時棟" },

  { number: 17, category: "飲食", place: "教室棟" },
  { number: 18, category: "展示", place: "管理棟" },
  { number: 19, category: "体験", place: "定時棟" },
  { number: 20, category: "パフォーマンス", place: "その他" },

  { number: 21, category: "飲食", place: "定時棟" },
  { number: 22, category: "展示", place: "教室棟" },
  { number: 23, category: "体験", place: "その他" },
  { number: 24, category: "パフォーマンス", place: "管理棟" },

  { number: 25, category: "飲食", place: "その他" },
  { number: 26, category: "展示", place: "定時棟" },
  { number: 27, category: "体験", place: "管理棟" },
  { number: 28, category: "パフォーマンス", place: "教室棟" },

  { number: 29, category: "飲食", place: "管理棟" },
  { number: 30, category: "展示", place: "その他" }
];
// =========================
// モーダル取得
// =========================

const modal = document.getElementById("modal");

const closeModal =
  document.getElementById("close-modal");

const modalTitle =
  document.getElementById("modal-title");

const modalCategory =
  document.getElementById("modal-category");

const modalPlace =
  document.getElementById("modal-place");
// 表示エリア取得
const contentArea = document.getElementById("content-area");

// タブボタン取得
const tabButtons = document.querySelectorAll(".tab-button");

// 最初は番号順表示
renderNumberView();

// =========================
// タブ切り替え
// =========================

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    // active削除
    tabButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // active追加
    button.classList.add("active");

    // データ取得
    const tab = button.dataset.tab;

    // 表示切り替え
    if (tab === "number") {
      renderNumberView();
    }

    if (tab === "category") {
      renderCategoryView();
    }

    if (tab === "place") {
      renderPlaceView();
    }

  });

});

// =========================
// 番号順表示
// =========================

function renderNumberView() {

  contentArea.innerHTML = "";

  createSection("1~10", projects.filter(p => p.number <= 10));

  createSection(
    "11~20",
    projects.filter(p => p.number >= 11 && p.number <= 20)
  );

  createSection(
    "21~30",
    projects.filter(p => p.number >= 21)
  );

}

// =========================
// カテゴリ順表示
// =========================

function renderCategoryView() {

  contentArea.innerHTML = "";

  createSection(
    "飲食",
    projects.filter(p => p.category === "飲食")
  );

  createSection(
    "体験",
    projects.filter(p => p.category === "体験")
  );

  createSection(
    "展示",
    projects.filter(p => p.category === "展示")
  );

  createSection(
    "パフォーマンス",
    projects.filter(p => p.category === "パフォーマンス")
  );

}

// =========================
// 場所順表示
// =========================

function renderPlaceView() {

  contentArea.innerHTML = "";

  createSection(
    "教室棟",
    projects.filter(p => p.place === "教室棟")
  );

  createSection(
    "管理棟",
    projects.filter(p => p.place === "管理棟")
  );

  createSection(
    "定時棟",
    projects.filter(p => p.place === "定時棟")
  );

  createSection(
    "その他",
    projects.filter(p => p.place === "その他")
  );

}

// =========================
// 小区分生成
// =========================

function createSection(title, data) {

  // section作成
  const section = document.createElement("div");
  section.className = "section";

  // header作成
  const header = document.createElement("div");
  header.className = "section-header";

  // タイトル
  const titleElement = document.createElement("span");
  titleElement.textContent = title;

  // アイコン
  const icon = document.createElement("span");
  icon.className = "toggle-icon";
  icon.textContent = "▶";

  // headerに追加
  header.appendChild(titleElement);
  header.appendChild(icon);

  // 企画一覧
  const list = document.createElement("div");
  list.className = "project-list";

  // カード生成
  data.forEach(project => {

    // カード
    const card = document.createElement("div");
    card.className = "project-card";

    // カテゴリ色
    let categoryClass = "";

    if (project.category === "飲食") {
      categoryClass = "food";
    }

    if (project.category === "体験") {
      categoryClass = "experience";
    }

    if (project.category === "展示") {
      categoryClass = "exhibition";
    }

    if (project.category === "パフォーマンス") {
      categoryClass = "performance";
    }

    // カード内容
    card.innerHTML = `
      <div class="project-number">
        企画 ${project.number}
      </div>

      <div class="project-title">
        仮企画 ${project.number}
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
    // カードクリック
card.addEventListener("click", () => {

  // タイトル
  modalTitle.textContent =
    `仮企画 ${project.number}`;

  // カテゴリ
  modalCategory.textContent =
    `カテゴリ：${project.category}`;

  // 場所
  modalPlace.textContent =
    `場所：${project.place}`;

  // モーダル表示
  modal.classList.add("show");

});

    // 一覧に追加
    list.appendChild(card);

  });

  // 開閉
  header.addEventListener("click", () => {

    list.classList.toggle("open");

    if (list.classList.contains("open")) {
      icon.textContent = "▼";
    } else {
      icon.textContent = "▶";
    }

  });

  // sectionに追加
  section.appendChild(header);
  section.appendChild(list);

  // 表示
  contentArea.appendChild(section);

}
// =========================
// モーダルを閉じる
// =========================

// ×ボタン
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// 背景クリック
modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    modal.classList.remove("show");
  }

});
