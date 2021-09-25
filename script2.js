var arj = document.getElementsByClassName("bt");

var drums = document.getElementsByClassName("bt").length;

var arj2 = [];

for(var i=0;i<drums;i++)
{
  arj2.push(arj[i].innerHTML);
}

for(var i=0;i<drums;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var indexOfButton = arj2.indexOf(this.innerHTML)+1;
    var song = "track" + indexOfButton + ".wav";
    var soundToPlay = new Audio(song);
    soundToPlay.play();
  });

}


document.addEventListener("keypress", function (event){
  if(event.key == "w")
  {
    var song1 = new Audio("track1.wav");
    document.getElementsByClassName("bt")[0].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song1.play();
    removeHover(0);
  }
  if(event.key == "a")
  {
    var song2 = new Audio("track2.wav");
    document.getElementsByClassName("bt")[1].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song2.play();
    removeHover(1);
  }
  if(event.key == "s")
  {
    var song3 = new Audio("track3.wav");
    document.getElementsByClassName("bt")[2].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song3.play();
    removeHover(2);
  }
  if(event.key == "d")
  {
    var song4 = new Audio("track4.wav");
    document.getElementsByClassName("bt")[3].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song4.play();
    removeHover(3);
  }
  if(event.key == "j")
  {
    var song5 = new Audio("track5.wav");
    document.getElementsByClassName("bt")[4].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song5.play();
    removeHover(4);
  }
  if(event.key == "k")
  {
    var song6 = new Audio("track6.wav");
    document.getElementsByClassName("bt")[5].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song6.play();
    removeHover(5);
  }
  if(event.key == "l")
  {
    var song7 = new Audio("track7.wav");
    document.getElementsByClassName("bt")[6].style.boxShadow = "0 2px 4px 0 white,  0 2px 16px 0 white";
    song7.play();
    removeHover(6);
  }
});

function removeHover( i)
{
  document.addEventListener("keyup", function (event) {
    var css = "bt:hover{ box-shadow:  0 2px 4px 0 white,  0 2px 16px 0 white}";
    document.getElementsByClassName("bt")[i].style = css;
  } );
}
