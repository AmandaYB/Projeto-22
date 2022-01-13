var starImg, bgImg;
var star, starBody;
var fada, imgFada;
var som;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    imgFada = loadAnimation("fairyImage1.png", "fairyImage2.png");
    som = loadSound("JoyMusic.mp3")
    
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(200,300);
    fada.addAnimation("Fada", imgFada)
    fada.scale = 0.4;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

    som.loop();

}

function draw(){

    background(bgImg);
    if(keyDown(LEFT_ARROW)){
        fada.x = fada.x - 4;
    }

    if(keyDown(RIGHT_ARROW)){
        fada.x = fada.x + 4;
    }

    if(star.y > 470 && starBody.position.y >470){
        Matter.Body.setStatic(starBody, true);
    }

    if(keyDown(DOWN_ARROW)){
        star.velocityY = 4;
    }


    drawSprites()
}
