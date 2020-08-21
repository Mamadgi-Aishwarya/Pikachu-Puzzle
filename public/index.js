var myVar = setInterval(myTimer, 1000);
var count=0;
function myTimer() {
  count++;
  document.getElementById("timer").innerHTML ="Time is "+count+" sec";
}
function closeWrong(){
  document.getElementById('wrongModal').style.display="none";
}
function setBackground(){
  document.getElementById("myAudio").autoplay;
  setTimeout(function(){
  document.getElementById('open').style.display="none";
  document.body.style.backgroundAttachment="fixed";
  document.body.style.backgroundPosition="center";
  document.getElementById('body-wrapper').style.display="block";
  }, 2000);
  setTimeout(function(){
    document.getElementById('instruction').style.display="none";
  },12000);
  }
   var parent,score=0;
          function allowDrop(ev) {
              ev.preventDefault();
          }
          function drag(ev) {
              ev.dataTransfer.setData("text", ev.target.id);
        //alert(ev.target.id);
        parent=document.getElementById(ev.target.id).parentNode.id;
          }
  
          function drop(ev) {
              ev.preventDefault();
              var data = ev.dataTransfer.getData("text");
        //alert(data+" "+ev.target.getAttribute('name'));
               ev.target.appendChild(document.getElementById(data));
                setTimeout(function () {
            //alert(document.getElementById(data).parentNode.name);
                   if (data!=ev.target.getAttribute('name') ) { 
                    document.getElementById('wrongModal').style.display="block";
                    document.getElementById(parent).appendChild(document.getElementById(data));
                   }
                   else{
                       score++;
                       //alert(score);
                       document.getElementById('score').innerHTML="Score is "+score;
                       if(score==12){
                       document.getElementById('finish').style.display="block";
                       document.getElementById('finish-text').innerHTML="Game finished in "+count+" seconds"+"<img src='/images/game-over.jpg'>";
                        }
                   }
                }, 500);
          }