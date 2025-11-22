// 눈 색
let eA, eB;
let isSaving = false;   // gif 

function setup(){
  createCanvas(600,400);
  colorMode(HSB,360,100,100);

  eA = color(0,0,20);
  eB = color(random(360),80,100);
}

function draw(){

  background(220);

  // 시간
  let t1 = millis()/1000;
  let ss = sin(t1);
  let cc = cos(t1);

  // 얼굴 이동
  let mx = ss * 20;
  let my = cc * 5 + 120;

  // 크기
  let sca = 1 + sin(t1*2)*0.08;

  // 눈깜빡임
  let eH = map(abs(sin(frameCount*0.2)),0,1, 5, 80) * sca;

  // 눈색
  let ttt = (sin(t1)+1)/2;
  let eCol = lerpColor(eA, eB, ttt);

  if(frameCount % 110 == 0){
    eA = eB;
    eB = color(random(360),80,100);
  }

  // 얼굴 중심
  let fx = 150 + mx;
  let fy = 150 + my;
  let fw = 250 * sca;
  let fh = 300 * sca;
  let topY = fy - fh/2;

  // 얼굴
  fill(40,40,90);
  noStroke();
  ellipse(fx, fy, fw, fh);

  // 모자
  fill(210,80,60);
  rectMode(CENTER);
  rect(fx, topY - 12, fw*0.92, 22); 
  rect(fx, topY - 62, fw*0.52, 85);
  fill(50,20,100);
  rect(fx, topY - 50, fw*0.4, 10);

  // 눈
  fill(eCol);
  ellipse(100+mx, 100+my, 30 * sca, eH);
  ellipse(200+mx, 100+my, 30 * sca, eH);

  // 코
  fill(0,0,20);
  ellipse(130+mx, 185+my, 5*sca, 5*sca);
  ellipse(170+mx, 185+my, 5*sca, 5*sca);

  // 입
  fill(0,80,80);
  let myM = sin(frameCount*0.05)*10;
  triangle(
    100+mx, 255+my + myM,
    200+mx, 255+my + myM,
    150+mx, 285+my + myM
  );

  // 눈썹
  fill(25,60,20);
  let by = sin(frameCount*0.1)*5;

  quad(
    85+mx, 50+my+by,
    133+mx, 50+my+by,
    133+mx, 55+my+by,
    85+mx, 55+my+by
  );

  quad(
    178+mx, 50+my+by,
    232+mx, 50+my+by,
    232+mx, 55+my+by,
    178+mx, 55+my+by
  );
}


