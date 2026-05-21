// =========================
// script.js
// =========================

// =========================
// 仮データ
// =========================

const projects = [

  { number: 1, category: "飲食", place: "教室棟" },
  { number: 2, category: "展示", place: "管理棟" },
  { number: 3, category: "体験", place: "定時棟" },
  { number: 4, category: "パフォーマンス", place: "その他" },

  { number: 5, category: "飲食", place: "定時棟" },
  { number: 6, category: "展示", place: "教室棟" },
  { number: 7, category: "体験", place: "その他" },
  { number: 8, category: "パフォーマンス", place: "管理棟" }

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
    "1〜4",
    projects.filter(
      p => p.number <= 4
    )
  );

  createSection(
    "5〜8",
    projects.filter(
      p => p.number >= 5
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
    "定時棟",
    projects.filter(
      p => p.place === "定時棟"
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

  /* アイコン */
  const icon =
    document.createElement("span");

  icon.className =
    "toggle-icon";

  icon.textContent = "▶";

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
          `仮企画 ${project.number}`;

        /* カテゴリ */
        modalCategoryTag.textContent =
          project.category;

        /* 色 */
        modalCategoryTag.className =
          `tag ${categoryClass}`;

        /* 場所 */
        modalPlace.textContent =
          `場所：${project.place}`;

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

        icon.textContent = "▼";

      } else {

        icon.textContent = "▶";

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
