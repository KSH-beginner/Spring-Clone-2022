const HIDDEN_CLASSNAME = "hidden";
const CHANGE_COLOR_CLASSNAME = "change_color";
const CHANGE_COLOR_BOLD_CLASSNAME = "change_color_bold";

// Why Spring 메뉴바
const why_Items = document.querySelector("#why-items");
const box_1 = document.querySelector(".box_1");
const why_li = document.querySelectorAll("#why-box li a");

/* toggle로 1개 함수로 처리 가능
function onShowWhy() {
    box_1.classList.remove(HIDDEN_CLASSNAME);
}

function onHiddenWhy() {
    box_1.classList.add(HIDDEN_CLASSNAME);
}
*/

function ShowHidden_Why() {
  box_1.classList.toggle(HIDDEN_CLASSNAME);
}

why_Items.addEventListener("mouseover", ShowHidden_Why);
why_Items.addEventListener("mouseleave", ShowHidden_Why);

box_1.addEventListener("mouseover", ShowHidden_Why);

for (let i = 0; i < why_li.length; i++) {
  function ChangeColor_Why() {
    why_li[i].classList.toggle(CHANGE_COLOR_CLASSNAME);
  }

  why_li[i].addEventListener("mouseover", ChangeColor_Why);
  why_li[i].addEventListener("mouseleave", ChangeColor_Why);
}

//-------------------------------------------------------------//
// Learn 메뉴바

const learn_Items = document.querySelector("#learn-items");
const box_2 = document.querySelector(".box_2");
const learn_li = document.querySelectorAll("#learn-box li a");

function onShowlearn() {
  box_2.classList.remove(HIDDEN_CLASSNAME);
}

function onHiddenlearn() {
  box_2.classList.add(HIDDEN_CLASSNAME);
}

learn_Items.addEventListener("mouseover", onShowlearn);
learn_Items.addEventListener("mouseleave", onHiddenlearn);

box_2.addEventListener("mouseleave", onHiddenlearn);

for (let i = 0; i < learn_li.length; i++) {
  function onChangeColor_Learn() {
    learn_li[i].classList.add(CHANGE_COLOR_CLASSNAME);
  }

  function onRestoreColor_Learn() {
    learn_li[i].classList.remove(CHANGE_COLOR_CLASSNAME);
  }

  learn_li[i].addEventListener("mouseover", onChangeColor_Learn);
  learn_li[i].addEventListener("mouseleave", onRestoreColor_Learn);
}

//-------------------------------------------------------------//
// Projects 메뉴바

const projects_Items = document.querySelector("#projects-items");
const box_3 = document.querySelector(".box_3");
const projects_li = document.querySelectorAll("#projects-box li a");

function onShowprojects() {
  box_3.classList.remove(HIDDEN_CLASSNAME);
}

function onHiddenprojects() {
  box_3.classList.add(HIDDEN_CLASSNAME);
}

projects_Items.addEventListener("mouseover", onShowprojects);
projects_Items.addEventListener("mouseleave", onHiddenprojects);

box_3.addEventListener("mouseleave", onHiddenprojects);

for (let i = 0; i < projects_li.length; i++) {
  function onChangeColor_Projects() {
    projects_li[i].classList.add(CHANGE_COLOR_CLASSNAME);
  }

  function onRestoreColor_Projects() {
    projects_li[i].classList.remove(CHANGE_COLOR_CLASSNAME);
  }

  function Mouseover_ReplaceColor_Projects() {
    projects_li[i].classList.replace("con_blue", CHANGE_COLOR_CLASSNAME);
  }

  function Mouseleave_ReplaceColor_Projects() {
    projects_li[i].classList.replace(CHANGE_COLOR_CLASSNAME, "con_blue");
  }

  if (projects_li[i].id === "default-color-blue") {
    // View all projects 기본색 클래스로 지정되어 있어서 replace로 바꾸기
    // View all projects에 id를 준 다음에 반복문 돌면서 id가 나왔을 때 replace문 동작
    projects_li[i].addEventListener(
      "mouseover",
      Mouseover_ReplaceColor_Projects
    );
    projects_li[i].addEventListener(
      "mouseleave",
      Mouseleave_ReplaceColor_Projects
    );
  }

  projects_li[i].addEventListener("mouseover", onChangeColor_Projects);
  projects_li[i].addEventListener("mouseleave", onRestoreColor_Projects);
}

//-----------------------------------------------------------------//
// Training 메뉴바
const training_Items = document.getElementById("items-training");

function onChangeColor_training() {
  training_Items.classList.add(CHANGE_COLOR_BOLD_CLASSNAME);
}

function onRestoreColor_training() {
  training_Items.classList.remove(CHANGE_COLOR_BOLD_CLASSNAME);
}

training_Items.addEventListener("mouseover", onChangeColor_training);
training_Items.addEventListener("mouseleave", onRestoreColor_training);

//-----------------------------------------------------------------//
// Support 메뉴바

const support_Items = document.querySelector("#items-support");

function onChangeColor_support() {
  support_Items.classList.add(CHANGE_COLOR_BOLD_CLASSNAME);
}

function onRestoreColor_support() {
  support_Items.classList.remove(CHANGE_COLOR_BOLD_CLASSNAME);
}

support_Items.addEventListener("mouseover", onChangeColor_support);
support_Items.addEventListener("mouseleave", onRestoreColor_support);

//-----------------------------------------------------------------//
// Community 메뉴바

const community_Items = document.querySelector("#community-items");
const box_4 = document.querySelector(".box_4");
const community_li = document.querySelectorAll("#community-box li a");

function onShowcommunity() {
  box_4.classList.remove(HIDDEN_CLASSNAME);
}

function onHiddencommunity() {
  box_4.classList.add(HIDDEN_CLASSNAME);
}

community_Items.addEventListener("mouseover", onShowcommunity);
community_Items.addEventListener("mouseleave", onHiddencommunity);

box_4.addEventListener("mouseleave", onHiddencommunity);

for (let i = 0; i < community_li.length; i++) {
  function onChangeColor_Community() {
    community_li[i].classList.add(CHANGE_COLOR_CLASSNAME);
  }

  function onRestoreColor_Community() {
    community_li[i].classList.remove(CHANGE_COLOR_CLASSNAME);
  }

  community_li[i].addEventListener("mouseover", onChangeColor_Community);
  community_li[i].addEventListener("mouseleave", onRestoreColor_Community);
}

//--------------------------------------------------------------------------//
// Day, Night 버튼
// LocalStorage - DAY / NIGHT 모드 저장 구현

const Day_Night_Btn = document.querySelector("#day_night_mode");
const body = document.querySelector("body");
const bottom_arrow = document.querySelectorAll(".bottom_arrow");
const nav = document.querySelector("#nav");
const top_banner_Btn = document.querySelectorAll(".top_banner_button");
const news_box = document.querySelector(".news_box");
const top_backcolor = document.querySelectorAll(".top_backcolor");
const hr_light = document.querySelectorAll(".hr_light");
const box_select = document.querySelectorAll(".box_select");

const CUR_STATE = "current_state";

function onClickChangeMode() {
  if (body.classList.contains("day")) {
    // dark모드로 변할 때 적용할 것들

    // LocalStorage
    localStorage.removeItem(CUR_STATE);
    localStorage.setItem(CUR_STATE, "Dark");

    // 화살표에 반복문 돌면서 mode 적용
    for (let i = 0; i < bottom_arrow.length; i++) {
      bottom_arrow[i].style.borderColor = "white";
    }

    for (let i = 0; i < top_banner_Btn.length; i++) {
      top_banner_Btn[i].style.borderColor = "white";
    }

    for (let i = 0; i < hr_light.length; i++) {
      hr_light[i].classList.replace("hr_light", "hr_dark");
    }

    for (let i = 0; i < box_select.length; i++) {
      box_select[i].classList.toggle("background_color_black");
    }

    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor = "#2b2f33";
    }

    for (let i = 0; i < top_backcolor.length; i++) {
      top_backcolor[i].style.backgroundColor = "#262a2d";
    }

    Day_Night_Btn.classList.replace("switch_box_day", "switch_box_night");
    body.classList.replace("day", "night");
    nav.classList.add("night");
    news_box.style.borderColor = "#1b1f23";
  } else {
    // day 모드로 바뀔 때 적용할 것들

    // LocalStorage
    localStorage.removeItem(CUR_STATE);
    localStorage.setItem(CUR_STATE, "Day");

    // 화살표에 반복문 돌면서 mode 적용
    for (let i = 0; i < bottom_arrow.length; i++) {
      bottom_arrow[i].style.borderColor = "#1b1f23";
    }

    for (let i = 0; i < top_banner_Btn.length; i++) {
      top_banner_Btn[i].style.borderColor = "#1b1f23";
    }

    for (let i = 0; i < hr_light.length; i++) {
      hr_light[i].classList.replace("hr_dark", "hr_light");
    }

    for (let i = 0; i < box_select.length; i++) {
      box_select[i].classList.toggle("background_color_black");
    }

    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor = "#f2f7f7";
    }

    for (let i = 0; i < top_backcolor.length; i++) {
      top_backcolor[i].style.backgroundColor = "#ebf2f2";
    }

    Day_Night_Btn.classList.replace("switch_box_night", "switch_box_day");
    body.classList.replace("night", "day");
    nav.classList.remove("night");
    news_box.style.borderColor = "white";
  }
}

Day_Night_Btn.addEventListener("click", onClickChangeMode);

//---------------------------------------------------------//
// 탑 배너 버튼 changeColor 구현

const Top_banner_Btn = document.querySelectorAll(".top_banner_button");

for (let i = 0; i < Top_banner_Btn.length; i++) {
  function ChangeColorBtn() {
    if (body.classList.contains("day")) {
      Top_banner_Btn[i].classList.toggle("change_color_button_day");
    } else {
      Top_banner_Btn[i].classList.toggle("change_color_button_night");
    }
  }

  Top_banner_Btn[i].addEventListener("mouseover", ChangeColorBtn);
  Top_banner_Btn[i].addEventListener("mouseleave", ChangeColorBtn);
}

//------------------------------------------------------//
// news-items(뉴스 텍스트) 밑줄 구현

const news_Items = document.querySelectorAll(".news-items");

for (let i = 0; i < news_Items.length; i++) {
  function ShowHidden_Underline() {
    news_Items[i].classList.toggle("news_underline");
  }

  news_Items[i].addEventListener("mouseover", ShowHidden_Underline);
  news_Items[i].addEventListener("mouseleave", ShowHidden_Underline);
}

//------------------------------------------------------//
// 카드 구현

const card_h2 = document.querySelectorAll(".card h2");
const card = document.querySelectorAll(".card");

// for(let i = 0; i < card.length; i++) {
// function card_Mouseover_leave() {
//   card[i].classList.toggle("card_shadow");
//   card_h2[i].classList.toggle("change_color");
//   }

//   card[i].addEventListener("mouseover", card_Mouseover_leave);
//   card[i].addEventListener("mouseleave", card_Mouseover_leave);
// }

for (let i = 0; i < card.length; i++) {
  function card_Mouseover() {
    card[i].classList.add("card_shadow");
    card_h2[i].classList.add("change_color");
  }

  function card_Mouseleave() {
    card[i].classList.remove("card_shadow");
    card_h2[i].classList.remove("change_color");
  }
  card[i].addEventListener("mouseover", card_Mouseover);
  card[i].addEventListener("mouseleave", card_Mouseleave);
}

//------------------------------------------------------//
// code text 밑줄 구현

const code_text = document.querySelectorAll("#code_text a");

for (let i = 0; i < code_text.length; i++) {
  function ShowHidden_Underline() {
    code_text[i].classList.toggle("code_text_underline");
    code_text[i].classList.toggle("active");
  }

  code_text[i].addEventListener("mouseover", ShowHidden_Underline);
  code_text[i].addEventListener("mouseleave", ShowHidden_Underline);
}

//------------------------------------------------------//
// introduction 밑줄 구현

const introduction = document.querySelectorAll("#introduction");

for (let i = 0; i < introduction.length; i++) {
  function ShowHidden_Underline() {
    introduction[i].classList.toggle("introduction_underline");
    introduction[i].classList.toggle("active");
  }

  introduction[i].addEventListener("mouseover", ShowHidden_Underline);
  introduction[i].addEventListener("mouseleave", ShowHidden_Underline);
}

//------------------------------------------------------//
// top a 밑줄 구현

const top_a = document.querySelectorAll("#top a");

for (let i = 0; i < top_a.length; i++) {
  function ShowHidden_Underline() {
    top_a[i].classList.toggle("top_a_underline");
    top_a[i].classList.toggle("active");
  }

  top_a[i].addEventListener("mouseover", ShowHidden_Underline);
  top_a[i].addEventListener("mouseleave", ShowHidden_Underline);
}

//-----------------------------------------------------------------------//
// bottom 영역 change_color 구현
//CHANGE_COLOR_CLASSNAME
const bottom_left_h3 = document.querySelectorAll(".bottom-left h3");
const bottom_left_a = document.querySelectorAll(".bottom-left a");

for (let i = 0; i < bottom_left_h3.length; i++) {
  function onChangeColor_bottom_left_h3() {
    bottom_left_h3[i].classList.add(CHANGE_COLOR_CLASSNAME);
  }

  function onRestoreColor_bottom_left_h3() {
    bottom_left_h3[i].classList.remove(CHANGE_COLOR_CLASSNAME);
  }

  bottom_left_h3[i].addEventListener("mouseover", onChangeColor_bottom_left_h3);
  bottom_left_h3[i].addEventListener(
    "mouseleave",
    onRestoreColor_bottom_left_h3
  );
}

for (let i = 0; i < bottom_left_a.length; i++) {
  function onChangeColor_bottom_left_a() {
    bottom_left_a[i].classList.add(CHANGE_COLOR_CLASSNAME);
  }

  function onRestoreColor_bottom_left_a() {
    bottom_left_a[i].classList.remove(CHANGE_COLOR_CLASSNAME);
  }

  bottom_left_a[i].addEventListener("mouseover", onChangeColor_bottom_left_a);
  bottom_left_a[i].addEventListener("mouseleave", onRestoreColor_bottom_left_a);
}

//-----------------------------------------------------------------------//
// LocalStorage - DAY / NIGHT 상태 저장

const savedUserstate = localStorage.getItem(CUR_STATE);

if (savedUserstate === "Dark") {
  for (let i = 0; i < bottom_arrow.length; i++) {
    bottom_arrow[i].style.borderColor = "white";
  }

  for (let i = 0; i < top_banner_Btn.length; i++) {
    top_banner_Btn[i].style.borderColor = "white";
  }

  for (let i = 0; i < hr_light.length; i++) {
    hr_light[i].classList.replace("hr_light", "hr_dark");
  }

  for (let i = 0; i < box_select.length; i++) {
    box_select[i].classList.toggle("background_color_black");
  }

  for (let i = 0; i < card.length; i++) {
    card[i].style.borderColor = "#2b2f33";
  }

  for (let i = 0; i < top_backcolor.length; i++) {
    top_backcolor[i].style.backgroundColor = "#262a2d";
  }

  Day_Night_Btn.classList.replace("switch_box_day", "switch_box_night");
  body.classList.replace("day", "night");
  nav.classList.add("night");
  news_box.style.borderColor = "#1b1f23";
} else if (savedUserstate === "Day") {
  for (let i = 0; i < bottom_arrow.length; i++) {
    bottom_arrow[i].style.borderColor = "#1b1f23";
  }

  for (let i = 0; i < top_banner_Btn.length; i++) {
    top_banner_Btn[i].style.borderColor = "#1b1f23";
  }

  for (let i = 0; i < hr_light.length; i++) {
    hr_light[i].classList.replace("hr_dark", "hr_light");
  }

  for (let i = 0; i < box_select.length; i++) {
    box_select[i].classList.toggle("background_color_black");
  }

  for (let i = 0; i < card.length; i++) {
    card[i].style.borderColor = "#f2f7f7";
  }

  for (let i = 0; i < top_backcolor.length; i++) {
    top_backcolor[i].style.backgroundColor = "#ebf2f2";
  }

  Day_Night_Btn.classList.replace("switch_box_night", "switch_box_day");
  body.classList.replace("night", "day");
  nav.classList.remove("night");
  news_box.style.borderColor = "white";
}
