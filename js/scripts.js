$(document).ready(function(){

  //Remove starting page overlay
  $("#start").click(function(){
    $("#starting-page").hide();
  })
  $("#retake").click(function(){
    location.reload();
  })

  $("#language-quiz").submit(function(event){

    event.preventDefault();

    const job = $("#job").val();
    const breakfast = $("#breakfast").val();
    const coffee = $("input:radio[name=coffee]:checked").val();
    const stressed = $("input:radio[name=stressed]:checked").val();
    const problem= $("input:radio[name=problem]:checked").val();
    const results = $("#results");
    let score = 0;

    //Scoring Logic
    if(job === "web"){
      score += 2;
    } else {
      score += 10;
    }

    if(breakfast === "waffle"){
      score += 1;
    } else{
      score += 2;
    }

    if(coffee === "1cup" || coffee === "5cup"){
      score += 1;
    } else {
      score += 2;
    }

    if(stressed === "hair" || stressed === "nail"){
      score += 1;
    } else {
      score += 2;
    }

    if(problem === "yes"){
      score += 2;
    } else {
      score = 0;
    }

    if(score === 0){
      results.html("If you don't like probelm solving then maybe programming <strong>isnt</strong> for you...");
    } else if (score > 0 && score < 10){
      results.html("It sounds like <em>front-end web development</em> would be up your ally! Check out learning <strong>JavaScript</strong>!");
    } else if (score === 10){
      results.html("It sounds like <em>full-stack web development</em> would be up your ally! Check out learning <strong>JavaScript</strong> for front-end and <strong>C#/.NET</strong> for back-end!");
    } else {
      results.html("It sounds like <em>software development</em> is up your ally! Check out learning <strong>Swift</strong> for iOS mobile apps or <strong>Python</strong> for general software!");
    };
    $("#results-page").show();
  })


})