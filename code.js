var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["alien","d2bf9464-7773-4ac1-835c-b34e9df3213c","platform","star","39e89702-2559-4702-87b9-c9bd34380b50","64f08e3b-9d5c-458c-9bf3-50d62594d3b9","c0689d70-a4fc-4ab5-9c54-ef34087563ec","af486bba-344a-4694-a242-2aedf205c72a"],"propsByKey":{"alien":{"name":"alien","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"OdaiZwfE.BpoZ.yLO009U2FAqpOgTrgE","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/alien.png"},"d2bf9464-7773-4ac1-835c-b34e9df3213c":{"name":"alien_copy_1","sourceUrl":null,"frameSize":{"x":40,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"IWBt5c5Sa8bGO_dYq4y4MOKx6xD8f5xW","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":50},"rootRelativePath":"assets/d2bf9464-7773-4ac1-835c-b34e9df3213c.png"},"platform":{"name":"platform","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"5hFvq9GmF3BET1573pJDSDpvqbzqiNs_","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/platform.png"},"star":{"name":"star","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":5,"looping":true,"frameDelay":12,"version":"msn3wD.wwjJujmMR2qIJjoCI53TNLIhh","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/star.png"},"39e89702-2559-4702-87b9-c9bd34380b50":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"koTVSoBUC8.TeUD2Mbhce67o.R_A_z47","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":20},"rootRelativePath":"assets/39e89702-2559-4702-87b9-c9bd34380b50.png"},"64f08e3b-9d5c-458c-9bf3-50d62594d3b9":{"name":"up_green_result_1","sourceUrl":null,"frameSize":{"x":100,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"ok6YLgviev2uM4BLF54R4hzCcZa1rBxs","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":105},"rootRelativePath":"assets/64f08e3b-9d5c-458c-9bf3-50d62594d3b9.png"},"c0689d70-a4fc-4ab5-9c54-ef34087563ec":{"name":"up_green_result_1_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"sIy9jiBDIRmhs2Vo988HbNujPb_CNrRB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":105},"rootRelativePath":"assets/c0689d70-a4fc-4ab5-9c54-ef34087563ec.png"},"af486bba-344a-4694-a242-2aedf205c72a":{"name":"nice","sourceUrl":null,"frameSize":{"x":100,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"q0mjznI0RDFaNQaze1zl0nkRh7rLMpX3","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":105},"rootRelativePath":"assets/af486bba-344a-4694-a242-2aedf205c72a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Variables
var score = 0;
var timer = World.seconds;

// Create Sprites
var platform = createSprite(100, 50);
platform.setAnimation("platform");
platform.velocityY = 0.5;


var death = createSprite(200, 400);
death.setAnimation("animation_1");

var platform2 = createSprite(300, 250);
platform2.setAnimation("platform");
platform2.velocityY = 0.5;

var upbutton = createSprite(300, 300);
upbutton.setAnimation("up_green_result_1");

var leftbutton = createSprite(200, 300);
leftbutton.setAnimation("up_green_result_1_copy_1");

var rightbutton = createSprite(100, 300);
rightbutton.setAnimation("nice");

var item = createSprite(randomNumber(50, 350), randomNumber(-30, -60));
item.setAnimation("star");
item.velocityY = 2;

var item2 = createSprite(randomNumber(50, 350), randomNumber(-30, -60));
item2.setAnimation("star");
item2.velocityY = 2;

var player = createSprite(200, 0);
player.setAnimation("alien");

function draw() {
  // draw the background
  if (timer <= 60) {
    background1();
  }
  else{
    background2();
  }
 if (player.isTouching(death)) {
   score = 0;
   timer = 0;
   player.x = 200;
   player.y = 0;
 }
 
  showScore();
  
  // update the sprites
  loopPlatforms();
  loopItems();
  playerFall();
  controlPlayer();
  playerLands();
  collectItems();
  drawSprites();
}

// Functions
function background1() {
  background("darkBlue");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("darkBlue");
  ellipse(320, 30, 60, 60);
}

function background2() {
  background("lightBlue");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
}

function showScore() {
  fill("white");
  textSize(20);
  text("Score: ",10, 10, 80, 20);
  text(score, 80, 29);
  textSize(40);
  text("Time: "+Math.round(timer), 250, 50);
  timer = timer + 0.033;
}

function loopPlatforms(){
  if (platform.y > 450) {
    platform.y = -10;
  }
  if (platform2.y > 450) {
    platform2.y = -10;
  }
}

function loopItems() {
  if (item.y > 410) {
    item.y = randomNumber(-10, -50);
    item.x = randomNumber(50, 350);
  }
  if (item2.y > 410) {
    item2.y = randomNumber(-10, -50);
    item2.x = randomNumber(50, 350);
  }
}

function playerFall() {
  player.velocityY = player.velocityY + 0.1;
  player.setAnimation("alien");
  
}

function controlPlayer() {
  if(keyDown("up")||mousePressedOver(upbutton)){
   player.velocityY = -3;
  player.setAnimation("alien_copy_1");
  }
  if(keyDown("left")||mousePressedOver(leftbutton)){
     player.x = player.x - 3;
  }
  if(keyDown("right")||mousePressedOver(rightbutton)){
    player.x = player.x + 3;
  }
}

function playerLands(){
  player.collide(platform);
  player.collide(platform2);
}

function collectItems(){
  if (player.isTouching(item)){
    score = score + 1;
    item.y = randomNumber(-10, -50);
    item.x = randomNumber(50, 350);
  }
  if (player.isTouching(item2)){
    score = score + 1;
    item2.y = randomNumber(-10, -50);
    item2.x = randomNumber(50, 350);
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
