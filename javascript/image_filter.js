//var items = document.getElementById("img, li") //assign event bindings to all images   
$("document").ready(function(){
  $("img").on("click", flipImage);
  
  
  //assign TWO event types to the images in the same line
  $("img").on("mouseover mouseleave", highlightImage);
  
  //setup buttons for clicks
  $("#robots").on("click", filterRobotsFn);
  $("#no-Figures").on("click", filterFiguresFn);
  $("#plus-3").on("click", filterPlus3Fn);
  
  //$("#clear").on("click", clearFilterFn);
  
  function filterRobotsFn(evt)
  {
    console.log(evt.target);
    var selection = $("#drawing img, #water-color img, #oil img").not(".robots"); //This is the heavy lifting!
    TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
  }
  
  
  function filterFiguresFn(evt)
  {
    console.log(evt.target);
  }
  
  function filterPlus3Fn(evt)
  {
    console.log(evt.target);
  }
  
  function highlightImage(evt)
  {
    //var currentImage = evt.target;
    
    //$(currentImage).toggleClass("highlightImage"); //in our CSS there is a selector class by this name
  }
  
  
  //flipImage does not exist yet. So it would produce an error at this time. So, now we need to create it.
  function flipImage(evt) //evt is shorthand for eventhandler. Its the blob of data for the flipImage event.
  {
    //console.log(evt);  //console.log(evt.target);
    var currentImage = evt.target;
    
    //flip the image
    TweenMax.to(currentImage, 1, {scaleX:-1, scaleY:-1, alpha:.3}); //what you want to animate, the length of time, the axis, the transparency//SEE VIDEO that's part of the Announcement /assignment discussion week7
  }
  
});
