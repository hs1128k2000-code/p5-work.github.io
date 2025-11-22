
let skin   = [245, 212, 195];    // 피부색(살색)
let hair   = [20, 20, 20];       // 머리카락(검정)
let eyeIris= [110, 80, 50];      // 눈동자(갈색)
let lipCol = [220, 50, 60];      // 입술/입색(빨강)
let jewel  = [235, 200, 40];     // 귀걸이(골드 톤)

function setup(){
  createCanvas(600, 400);   // 과제 권장 규격
  noLoop();                 // 정적 드로잉
  drawCaricature();
}

function drawCaricature(){
  background(245);

  // ===== 머리(후면: 단발 베이스) =====
  noStroke();
  fill(hair);
  // 뒤통수(큰 타원) — 얼굴보다 크게
  ellipse(300, 200, 260, 300);
  // 양옆 단발 볼륨
  ellipse(200, 250, 90, 140);
  ellipse(400, 250, 90, 140);

  // ===== 얼굴(긴 타원형, 살색) =====
  fill(skin);
  ellipse(300, 200, 210, 270);

  // ===== 귀 =====
  fill(skin);
  ellipse(195, 210, 34, 48); // 왼쪽 귀
  ellipse(405, 210, 34, 48); // 오른쪽 귀

  // ===== 귀걸이(세부요소) =====
  noFill(); stroke(jewel); strokeWeight(4);
  arc(195, 232, 18, 18, PI*0.1, PI*1.1);
  arc(405, 232, 18, 18, PI*0.1, PI*1.1);

  // ===== 앞머리(arc로 둥글게) =====
  noStroke(); fill(hair);
  arc(300, 130, 220, 120, PI, TWO_PI);      // 상단 앞머리 라인
  rect(210, 140, 180, 35, 8);                // 앞머리 밴드 느낌
  // 가닥 포인트
  triangle(240, 140, 260, 140, 248, 165);
  triangle(350, 140, 370, 140, 362, 165);

  // ===== 눈(흰자 + 갈색 홍채 + 하이라이트) =====
  // 흰자
  noStroke(); fill(255);
  ellipse(260, 190, 70, 46);
  ellipse(340, 190, 70, 46);
  // 갈색 홍채
  fill(eyeIris);
  ellipse(260, 195, 22, 22);
  ellipse(340, 195, 22, 22);
  // 하이라이트
  fill(255);
  ellipse(254, 188, 6, 6);
  ellipse(334, 188, 6, 6);

  // ===== 코(콧구멍 두 개: 검은색) =====
  noStroke();
  fill(0);
  ellipse(288, 215, 7, 5); // 왼쪽 콧구멍
  ellipse(312, 215, 7, 5); // 오른쪽 콧구멍
  // 콧등 라인(옅게)
  stroke(0, 0, 0, 30); strokeWeight(3); noFill();
  line(300, 200, 300, 210);

  // ===== 입(크게, 빨간색 '삼각형') =====
  noStroke();
  fill(lipCol);
  // 큰 역삼각형 느낌(입꼬리 과장)
  triangle(300, 255, 270, 290, 330, 290);
}