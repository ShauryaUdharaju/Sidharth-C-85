canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
nasa_img=["NASAimg1.jpeg", "NASAimg2.jpeg", "NASAimg3.jpeg", "NASAimg4.jpeg"]

random_num=Math.floor(Math.random() * 4)
console.log(random_num)

rover_width=100
rover_height=90

background_image=nasa_img[random_num]
rover_image="rover.png"
rover_x=10
rover_y=10

function add()
{
background_img_tag=new Image()
background_img_tag.onload=uploadBackground
background_img_tag.src=background_image

rover_img_tag=new Image()
rover_img_tag.onload=uploadRover
rover_img_tag.src=rover_image
}

function uploadBackground()
{
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)
}

function uploadRover()
{
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed=e.keyCode
    console.log(keyPressed)
    if (keyPressed=="38")
    {
        console.log("up")
        up()
    }

    if (keyPressed=="40")
    {
        console.log("down")
        down()
    }

    if (keyPressed=="37")
    {
        console.log("left")
        left()
    }

    if (keyPressed=="39")
    {
        console.log("right")
        right()
    }
}

function up()
{
  if (rover_y >=0)
    {
       rover_y = rover_y - 10
       uploadBackground()
       uploadRover()
       console.log("when up arrow is pressed, x=" + rover_x + " y=" + rover_y)
    }
}

function down()
{
  if (rover_y <=700)
    {
       rover_y = rover_y + 10
       uploadBackground()
       uploadRover()
       console.log("when down arrow is pressed, x=" + rover_x + " y=" + rover_y)
    }
}

function left()
{
  if (rover_x >=0)
    {
       rover_x = rover_x - 10
       uploadBackground()
       uploadRover()
       console.log("when left arrow is pressed, x=" + rover_x + " y=" + rover_y)
    }
}

function right()
{
  if (rover_x <=700)
    {
       rover_x = rover_x + 10
       uploadBackground()
       uploadRover()
       console.log("when right arrow is pressed, x=" + rover_x + " y=" + rover_y)
    }
}

