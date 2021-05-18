var canvas = new fabric.Canvas('my_canvas');
player_y = 10;
player_x = 10;
block_image_width = 31;
block_image_height = 31;

var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });   
}

function block_img_update() {
    fabric.Image.fromURL("player.png",function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);
        block_img_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_img_object);
    });   
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
    console.log(keyPressed);

if(e.shiftKey == true && keyPressed == "80"){
   console.log("p and shift are pressed together");
   block_image_width = block_image_width+10;
   block_image_height = block_image_height+10;
   document.getElementById("current_width").innerHTML = block_image_width;
   document.getElementById("current_height").innerHTML = block_image_height; 
}
if(e.shiftKey == true && keyPressed == "77"){
   console.log("m and shift are pressed together");
   block_image_width = block_image_width-10;
   block_image_height = block_image_height-10;
   document.getElementById("current_width").innerHTML = block_image_width;
   document.getElementById("current_height").innerHTML = block_image_height; 
}

if(keyPressed == "70"){
        new_image('head.jpg');
        console.log("f");
}
if(keyPressed == "66"){
        new_image('spiderman_body.png');
        console.log("b");
}
if(keyPressed == "76"){
        new_image('hulk_legs.png');
        console.log("l");
}
if(keyPressed == "82"){
        new_image('thor_right_hand.png');
        console.log("r");
}
if(keyPressed == "72"){
        new_image('captain_american_left_hand.png');
        console.log("h");
}
if(keyPressed == '38'){
    up()
    console.log("up")
    
}
if(keyPressed == '40'){
    down()
    console.log("down")
    
}
if(keyPressed == '39'){
    right()
    console.log("right")
    
}
if(keyPressed == '37'){
    left()
    console.log("left")
    
}
}
    