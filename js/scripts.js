
$(document).ready(function(){

  //Remove starting page overlay
  $("#start").click(function(){
    $("#starting-page").fadeOut();
    stepThrough();
  })

    //Logic to present one question at a time
  const questions = $(".form-group")
  const nextButton = $("#next");
  const backButton = $("#back");
  const submitButton = $("#submit");
  const heading = $("#heading");
  const main = $("#main");
  let step = 0;

  function hideAll(){
    submitButton.hide();
    questions.delay(200).fadeOut().removeClass("display");
    nextButton.delay(200).fadeOut();
    backButton.delay(200).fadeOut();
  };

  function showStepButtons(){
    nextButton.fadeIn();
    backButton.fadeIn();
  }

  function showAll(){
    submitButton.show();
    questions.show();
    nextButton.hide();
    backButton.hide();
  };

  function stepThrough(){
    if(step === 0){
      submitButton.hide();
      questions.hide();
      backButton.hide();
      nextButton.show();
      $("div[value=1]").show();
    } else if( step === 1){
      hideAll();
      $("div[value=2]").delay(350).fadeIn(200);
      showStepButtons();
    } else if( step === 2){
      hideAll();
      $("div[value=3]").delay(350).fadeIn(200);
      showStepButtons();
    } else if( step === 3){
      hideAll();
      $("div[value=4]").delay(350).fadeIn(200);
      showStepButtons();
    } else if( step === 4){
      hideAll();
      $("div[value=5]").delay(350).fadeIn(200);
      showStepButtons();
    } else {
      heading.text("Is all this correct?");
      heading.removeClass("initialPad").addClass("adjustPad");
      showAll();
    }
  };

  nextButton.click(function(){
    if(step === 0){
      if($("#job").val() === null){
        $("#job").addClass("invalid");
      } else {
        main.fadeOut(200);
        step++;
        stepThrough();
        $("#job").removeClass("invalid");
        main.delay(500).fadeIn(200);
      }
    } else if(step === 1){
      if($("#breakfast").val() === null){
        $("#breakfast").addClass("invalid");
      } else { 
        main.fadeOut(200);
        step++;
        stepThrough();
        $("#breakfast").removeClass("invalid");
        main.delay(500).fadeIn(200);
      }
    } else if(step === 2){
      if($("input:radio[name=coffee]:checked").val() === undefined){
        return;
      } else { 
        main.fadeOut(200);
        step++;
        stepThrough();
        main.delay(500).fadeIn(200);
      }
    } else if (step === 3){
      if($("input:radio[name=stressed]:checked").val() === undefined){
        return;
      } else { 
        main.fadeOut(200);
        step++;
        stepThrough();
        main.delay(500).fadeIn(200);
      }
    } else {
      if($("input:radio[name=problem]:checked").val() === undefined){
        return;
      } else { 
        step++;
        stepThrough();
        $("#problem").removeClass("invalid");
      }
    }

  });
  backButton.click(function(){
    step--;
    stepThrough();
  });

  $("input:radio[name=stressed]").change(function(){
    if($("input:radio[name=stressed]:checked").val() === "other"){
      $("#other-text").show().focus();
    }
  })


  $("#language-quiz").submit(function(event){

    const job = $("#job").val();
    const breakfast = $("#breakfast").val();
    const coffee = $("input:radio[name=coffee]:checked").val();
    const stressed = $("input:radio[name=stressed]:checked").val();
    const problem= $("input:radio[name=problem]:checked").val();
    const results = $("#results");
    let score = 0;
    event.preventDefault();

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
      results.html("If you don't like probelm solving then maybe programming <em><strong>isnt</strong></em> for you...");
    } else if (score > 0 && score < 10){
      results.html("It sounds like <em>front-end web development</em> would be up your alley! Check out learning <strong>JavaScript</strong>!");
    } else if (score === 10){
      results.html("It sounds like <em>full-stack web development</em> would be up your alley! Check out learning <strong>JavaScript</strong> for front-end and <strong>C#/.NET</strong> for back-end!");
    } else {
      results.html("It sounds like <em>software development</em> is up your alley! Check out learning <strong>Swift</strong> for iOS mobile apps or <strong>Python</strong> for general software!");
    };

    $("#results-page").show();

    $("#retake").click(function(){
      $("#language-quiz")[0].reset();
      $("#results-page").hide();
      heading.text("Please answer the following question:");
      heading.removeClass("adjustPad").addClass("initialPad");
      step = 0;
      stepThrough();
    })
  })
})