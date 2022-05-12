  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  let engine;
  let world;

  var ground;
  var left;
  var right;
  var top_wall;

  var ball;

  var button1, button2;

  function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    button1= createImg('right.png');
    button1.position(330,25);
    button1.size(32,32);
    button1.mouseClicked(hForce);

    button2= createImg('up.png');
    button2.position(40,25);
    button2.size(32,32);
    button2.mouseClicked(vForce);

    var ball_op= {
    restitution:0.85,
    frictionAir:0.01
    }
    var g_op= {
      isStatic: true,
      collision: true
    }

    ground =new Ground(200,390,400,20,g_op);
    right = new Ground(390,200,20,400,g_op);
    left = new Ground(10,200,20,400,g_op);
    top_wall = new Ground(200,10,400,20,g_op);

    ball = Bodies.circle(200,200,12,ball_op);
    World.add(world,ball);
  
    rectMode(CENTER);
    ellipseMode(RADIUS);
  }

  function draw(){

    background(51);
    var pos = ball.position;
    ground.show();
    top_wall.show();
    left.show();
    right.show();

    ellipse(pos.x, pos.y, 12);

    Engine.update(engine);

  }

  function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});

  }

  function vForce(){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});

  }

