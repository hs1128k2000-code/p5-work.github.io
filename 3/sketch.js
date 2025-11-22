// ===== 색상 설정 =====
let skin   = [245, 212, 195];    // 피부색
let hair   = [20, 20, 20];       // 머리카락(검정)
let eyeIris= [110, 80, 50];      // 눈동자(갈색)
let lipCol = [220, 50, 60];      // 입술(빨강)
let jewel  = [235, 200, 40];     // 귀걸이(골드)

// ===== 깜빡임 관련 변수 =====
let blinkInterval = 1800;  // 깜빡임 주기 (ms)
let blinkDuration = 180;   // 눈 감기는 시간 (ms)

// ===== 노란 배경 관련 변수 =====
let flashInterval = 2500;  // 전체 주기 (ms)
let flashDuration = 500;   // 노란 플래시 유지 시간 (ms)

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  // ⚡ 흰화면 → 노란  → 다시 흰화면
  drawFlashingBackground();

  // 🎨 캐리커처 그리기
  drawCaricature();
}
// ============================================
// 🔸 흰 → 노란 → 흰 배경 번쩍 효과 함수
// ============================================
function drawFlashingBackground(){
  let t = millis() % flashInterval; // 시간 흐름 계산

  // 기본 배경 (흰색)
  background(255);

  // 노란색 플래시가 켜지는 구간
  if (t < flashDuration) {
    // 진행 비율 (0~1)
    let p = t / flashDuration;
    // 부드럽게 나타났다 사라지는 알파값 (0 → 255 → 0)
    let alpha = 255 * sin(p * PI);

    // 노란색 플래시 덮기
    fill(255, 230, 0, alpha);
    rect(0, 0, width, height);
  }
}

// ============================================
// 🔸 눈 열림 정도 계산 (깜빡임 애니메이션)
// ============================================
function getEyeOpenAmount() {
  let t = millis() % (blinkInterval + blinkDuration);
  if (t > blinkDuration) return 1;
  let p = t / blinkDuration;
  let tri = 1 - abs(2 * p - 1);   // 삼각파
  return 0.1 + 0.9 * tri;         // 최소 0.1 ~ 최대 1.0
}

// ============================================
// 🔸 캐리커처 본체
// ============================================
function drawCaricature() {
  // 머리 (단발형)
  noStroke();
  fill(hair);
  ellipse(300, 200, 260, 300);
  ellipse(200, 250, 90, 140);
  ellipse(400, 250, 90, 140);

  // 얼굴
  fill(skin);
  ellipse(300, 200, 210, 270);

  // 귀
  fill(skin);
  ellipse(195, 210, 34, 48);
  ellipse(405, 210, 34, 48);

  // 귀걸이
  noFill(); stroke(jewel); strokeWeight(4);
  arc(195, 232, 18, 18, PI*0.1, PI*1.1);
  arc(405, 232, 18, 18, PI*0.1, PI*1.1);

  // 앞머리
  noStroke(); fill(hair);
  arc(300, 130, 220, 120, PI, TWO_PI);
  rect(210, 140, 180, 35, 8);
  triangle(240, 140, 260, 140, 248, 165);
  triangle(350, 140, 370, 140, 362, 165);

  // 눈 (깜빡임)
  let openAmt = getEyeOpenAmount();
  drawBlinkingEye(260, 190, openAmt);
  drawBlinkingEye(340, 190, openAmt);

  // 코
  noStroke();
  fill(0);
  ellipse(288, 215, 7, 5);
  ellipse(312, 215, 7, 5);
  stroke(0, 0, 0, 30); strokeWeight(3); noFill();
  line(300, 200, 300, 210);

  // 입
  noStroke();
  fill(lipCol);
  triangle(300, 255, 270, 290, 330, 290);
}

// ============================================
// 🔸 눈 그리기 (깜빡임 표현)
// ============================================
function drawBlinkingEye(cx, cy, open) {
  const whiteW = 70, whiteH = 46;
  const irisW = 22, irisH = 22;

  let hWhite = whiteH * open;
  let hIris = irisH * open;

  // 흰자
  noStroke(); fill(255);
  ellipse(cx, cy, whiteW, hWhite);

  // 갈색 홍채
  fill(eyeIris);
  ellipse(cx, cy + 5 * open, irisW, hIris);

  // 하이라이트
  fill(255);
  ellipse(cx - 6, cy - 7 * open, 6, 6);
}
// Save a 10-second gif when the user presses the 's' key.
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}
