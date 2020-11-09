var ground; 

function Ground(x,y,width,height){
   ground=Bodies.rectangle(x,y,width,height,{isStatic:true});
   rectMode(CENTER);
   fill("brown");
   rect(x,y,width,height);
   World.add(world,ground);
}