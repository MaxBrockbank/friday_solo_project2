
$(document).ready(function(){

  //Remove starting page overlay
  $("#start").click(function(){
    $("#starting-page").hide();
    stepThrough();
  })

    //Logic to present one question at a time
  const questions = $(".form-group")
  const nextButton = $("#next");
  const backButton = $("#back");
  const submitButton = $("#submit");
  const heading = $("#heading");
  let step = 0;

  function hideAll(){
    submitButton.hide();
    questions.hide().removeClass("display");
  }

  function showAll(){
    submitButton.show();
    questions.show().removeClass("display");
    nextButton.hide();
    backButton.hide();
  }

  function stepThrough(){
    if(step === 0){
      hideAll();
      backButton.hide();
      $("div[value=1]").show().addClass("display");
    } else if( step === 1){
      hideAll();
      backButton.show()
      $("div[value=2]").show().addClass("display");
    } else if( step === 2){
      hideAll();
      $("div[value=3]").show().addClass("display");
    } else if( step === 3){
      hideAll();
      $("div[value=4]").show().addClass("display");
    } else if( step === 4){
      hideAll();
      $("div[value=5]").show().addClass("display");
    } else {
      showAll();
      heading.text("Is all this correct?");
      heading.removeClass("initialPad").addClass("adjustPad");
    }
  }

  nextButton.click(function(){
    step++;
    stepThrough()
  });
  backButton.click(function(){
    step--;
    stepThrough();
  });

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

    $("#retake").click(function(){
      location.reload();
    })
  })
})