var happy= [
    "https://ep01.epimg.net/verne/imagenes/2015/03/19/articulo/1426782979_671677_1426787788_noticia_normal.jpg", 
    "https://www.lifeder.com/wp-content/uploads/2016/08/qu%C3%A9-es-la-felicidad.jpg",
    "https://www.puzzlepassion.com/wp-content/uploads/2017/06/felicidad.jpg"
];
var excited= ["https://sayingimages.com/wp-content/uploads/im-so-excited-meme-1.jpg"
,"https://66.media.tumblr.com/6069484c8b581575f4c52f715cfadafd/tumblr_inline_otdajiLX8P1u8649n_540.gif",
"https://st.depositphotos.com/1526816/3098/v/950/depositphotos_30988719-stock-illustration-a-very-excited-beanie-monster.jpg"];
var tired= ["http://sooluciona.com/wp-content/uploads/2018/10/cansado.jpg",
"https://www.revistamoi.com/wp-content/uploads/2017/12/cansado-de-estar-cansado.jpg",
"https://i.pinimg.com/originals/e0/93/25/e09325884a55b2e1b1d9f6e89efd422b.gif"];
var hungry= ["","https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6cAYAW-CF2ITMw8dWoRbT-7wKXLtk8feGbrSncd4ZFXoM0ruTw",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1CB4MnhoI4zRQ9p4n4W1K_wUdKpIyQ7XLobSjIwfs3ZoVP-YVg"];


$('button').click(function(){
    var Mood =$("input").val();
     $(".img").html("");
   if (Mood=== "happy"){
      happyMood();
   }else if(Mood=== "tired"){
      tiredMood();
   }else if(Mood=== "hungry"){
       hungryMood();
   }else if(Mood=== "excited"){
       excitedMood();
   }else{
   
   }

});

function happyMood(){
   changeBackgroundColor("DeepPink ");
      changeTextColor("DarkTurquoise ");
      displayImages(happy);
    
}
function tiredMood(){
    changeBackgroundColor("Gray ");
      changeTextColor("black");
      displayImages(tired);
}
function hungryMood(){
 changeBackgroundColor("Gold  ");
      changeTextColor("red");
      displayImages(hungry);
}
function excitedMood(){
    changeBackgroundColor("#a100e6  ");
      changeTextColor("white ");
      displayImages(excited);
}

function changeBackgroundColor(color){
    $("body").css('background-color',color);
}

function changeTextColor(color){
     $("body").css('color',color);
}

function displayImages(image){
    $(".images").empty();
  image.forEach(function(images){
        $('.images').append('<img src='+ images +'>');
});
}




