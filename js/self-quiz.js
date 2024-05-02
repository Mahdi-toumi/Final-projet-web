var score = 0
var questionSet0 = $('.fillerQuestion');
var questionSet1 = $('.firstQuestion');
var questionSet2 = $('.secondQuestion');
var resultsBtn = $('.Results');
var resultsShow = $('.Results-show');

var choice1 = $("#btn1");
var choice2 = $("#btn2");
var choice3 = $("#btn3");
var choice4 = $("#btn4");
var choice5 = $("#btn5");

var choice6 = $("#btn6");
var choice7 = $("#btn7");
var choice8 = $("#btn8");
var choice9 = $('#btn9');
var choice10 = $('#btn10');

var choice11 = $('#btn11');
var choice12 = $('#btn12');
var choice13 = $('#btn13');

var choice_checker = 0;

const optionsAnxiety = document.querySelectorAll('.options');


let i = 0;
const nextButton = document.querySelector('#nextQuestion');
const previousButton = document.querySelector('#previousQuestion');
let question = document.querySelector('.question');
const test = document.querySelector(".test");
var container1 = $(".wid-main");
let checkResult = document.querySelector('#checkResult');
let progressBar = document.querySelector('.progress-bar-fill');
const selector=document.querySelector('.wid-main');
var set;
var flag;
if(selector.classList.contains('depression')){
   set=questions2;
   flag=1;
}
else{
   set=questions;
   flag=0;
}

questionGenerator(i);


nextButton.addEventListener('click', () => {

  optionsAnxiety.forEach(function (el) {

    if (el.classList.contains("active")) {
      el.classList.remove("active");
      if (i < set.length - 1) {
        i++;
        questionGenerator(i);
      }
    }

  });


})

function questionGenerator(i) {
  progressBar.style.width = (i + 1) * (100 / set.length) + '%';
  question.innerText = set[i].question;
  console.log(set[i].question);
  if (i == set.length - 1) {
    checkResult.classList.remove('hidden');
    nextButton.classList.add('hidden');
  }
}

optionsAnxiety.forEach(function (el, key) {
  el.addEventListener('click', function (e) {
    let value = e.target.textContent;

    if (value == "Usually") {
      set[i].score = 4;
    } else if (value == "Sometimes") {
      set[i].score = 2;
    } else if (value == "Just a little") {
      set[i].score = 1;
    } else if (value == "Often") {
      set[i].score = 3;
    } else {
      set[i].score = 0;
    }
    el.classList.toggle("active");
    optionsAnxiety.forEach(function (ell, els) {
      if (key !== els) {
        ell.classList.remove('active');
      }
    });
  });
});

checkResult.addEventListener('click', () => {
  let score = 0;
  for (let i = 0; i < set.length; i++) {
    score += set[i].score;
  }
  checkResult.classList.add('hidden');
  console.log(score);
  test.style.display = "none";
  if(!flag){
  if (score >= -1 && score <= 5) {
    container1.append(`
        <h1>No Anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. However, this little degree of anxiety may actually be a sign of anxiety in your life. Individuals who score in this low range sometimes indicate that they may be detached from themselves, others, or their environment. Typically this is not healthy for most and should be avoided. You can help yourself by making a more concerted effort to become reattached to significant others and your environment. </p>
        `)
  } else if (score >= 6 && score <= 22) {
    container1.append(`
        <h1>Mid to little anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis. </p>
        `)
  }
  else if (score >= 23 && score <= 37) {
    container1.append(`
        <h1>Moderate Anxiety</h1>
        <h2>Your Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>Based upon your responses to this anxiety screening measure, it appears that you may be suffering from moderate anxiety, symptoms that might typically qualify you for the diagnosis of an anxiety disorder.<br><br>
        Sometimes people who feel such anxiety symptoms don't realize that their body may be trying to tell them something. Look for patterns in your behavior, such as when and what circumstances under which you experience the symptoms you've described. For example, if it occurs prior to public speaking and your job requires a lot of presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. </p>    
        `)
  }
    else if (score >= 38) {
      container1.append(`
          <h1>Severe Anxiety</h1>
          <h2>Score is ${score}</h2>
          <h3>Results of Your Anxiety Screening Quiz </h3>
          <p>Based upon your responses to this screening measure , Your responses are similar to others who experience severe anxiety symptoms.<br>We recommend consider reaching out to a qualified professional about your symptoms. </p>
          `)
    }

  }
  else{
    if(score>=0&&score<=9){
      container1.append(`
      <h1>No Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>You've answered this depression test in a manner that suggests that while you may occasionally be experiencing some depressive symptoms from time to time, you're not likely to be suffering a major depressive episode at present. Most people experience depressive feelings from time to time in their lives -- this is normal and expected.
      <br><br>
      If, however, you are experiencing depressive symptoms strongly enough that they are interferring with your daily life functioning, you are strongly advised to consult a trained mental health professional for further consultation. Only a mental health professional will be able to make a real and valid diagnosis. </p>
      
      
      
      
      
      `)  
    }
    else if(score>=10&&score<=17){
      container1.append(`
      <h1>Possible mild Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have just a few of the symptoms associated with clinical depression. For most people, this kind of response is likely an indication of the normal ups and downs associated with life. It is unlikely for a person in this response range to qualify for a diagnosis of clinical depression.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      
      `)
    }  
    else if(score>=18&&score<=21){
      container1.append(`
      <h1>Borderline Depression</h1>
      <h2>Your Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=22&&score<=35){
      container1.append(`
      <h1>Mild to moderate Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=36&&score<=53){
      container1.append(`
      <h1>Moderate to severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=54){
      container1.append(`
      <h1>Severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
  
  }

})

function fetchScoreDepression(){
  var scoreDepression=0;
  const answers=document.querySelectorAll('.active');
  answers.forEach(add);
  function add (value){
    if(value.innerText=='Sometimes'){
      scoreDepression+=2;
    }
    else if(value.innerText=='Usually'){
      scoreDepression+=4;
    }
    else if(value.innerText=='Just a little'){
      scoreDepression+=1;
    }
    else if(value.innerText=='Often'){
      scoreDepression+=3;
    }
    
    
  }

  const test =document.querySelector(".depression-test");
  test.style.display="none";
  var container1=$(".wid-main");
  if(scoreDepression>=0&&scoreDepression<=9){
    container1.append(`
    <h1>No Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>You've answered this depression test in a manner that suggests that while you may occasionally be experiencing some depressive symptoms from time to time, you're not likely to be suffering a major depressive episode at present. Most people experience depressive feelings from time to time in their lives -- this is normal and expected.
    <br><br>
    If, however, you are experiencing depressive symptoms strongly enough that they are interferring with your daily life functioning, you are strongly advised to consult a trained mental health professional for further consultation. Only a mental health professional will be able to make a real and valid diagnosis. </p>
    
    
    
    
    
    `)  
  }
  else if(scoreDepression>=10&&scoreDepression<=17){
    container1.append(`
    <h1>Possible mild Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have just a few of the symptoms associated with clinical depression. For most people, this kind of response is likely an indication of the normal ups and downs associated with life. It is unlikely for a person in this response range to qualify for a diagnosis of clinical depression.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    
    `)
  }  
  else if(scoreDepression>=18&&scoreDepression<=21){
    container1.append(`
    <h1>Borderline Depression</h1>
    <h2>Your Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=22&&scoreDepression<=35){
    container1.append(`
    <h1>Mild to moderate Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>

    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=36&&scoreDepression<=53){
    container1.append(`
    <h1>Moderate to severe Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>

    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=54){
    container1.append(`
    <h1>Severe Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  
  
}

function filler1() {

  if (choice_checker == 0) {
    questionSet1.css('visibility', 'visible');
    choice11.addClass('selected');
    choice_checker = 1;
  }

}
function filler2() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice12.addClass('selected');
    choice_checker = 1;
  }
}
function filler3() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice13.addClass('selected');
    choice_checker = 1;
  }
}

function happy() {

  if (choice_checker == 1) {
    score = 1

    choice1.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }
}

function sad() {
  if (choice_checker == 1) {
    score = 2

    choice2.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }
}

function angry() {

  if (choice_checker == 1) {
    score = 3
    choice3.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function nervous() {

  if (choice_checker == 1) {
    score = 4
    choice4.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function sleepy() {

  if (choice_checker == 1) {

    score = 5
    choice5.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }

}

function rock() {

  if (choice_checker == 2) {

    score = score * 7;
    choice6.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function rap() {

  if (choice_checker == 2) {

    score = score * 11;
    choice7.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function pop() {
  if (choice_checker == 2) {

    score = score * 13;
    choice8.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function alt() {

  if (choice_checker == 2) {

    score = score * 17;
    choice9.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function country() {

  if (choice_checker == 2) {

    score = score * 19;
    choice10.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}

function checkResults() {
  if (questionSet0.css('display') === "inline" && questionSet1.css('display') === "inline" && questionSet2.css('display') === "inline") {
    questionSet0.css('display', 'none')
    questionSet1.css('display', 'none')
    questionSet2.css('display', 'none')

  }
  else if (questionSet0.css('display') === "none" && questionSet1.css('display') === "none" && questionSet2.css('display') === "none") {
    resultsBtn.innerHTML = "Check My responses";
    questionSet0.css('display', 'inline')
    questionSet1.css('display', 'inline')
    questionSet2.css('display', 'inline')

  }
  if (score === 7) {
    // resultsBtn.css('background','#93A681');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>It's a nice day outside, or inside. Either way, pump up the music and dance to enjoy it!</h4>
     `);
  } else if (score === 11) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Glad you're feeling good. Treat yourself to something nice today while you enjoy these sick beats. You deserve it :D</h4>
    `);
  } else if (score === 13) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Happy you're doing well today! Hit up a friend and share something cool with them (they might enjoy your playlist too)</h4>
     `);
  } else if (score === 17) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Take a second out of your day to appreciate something good that happened today, no matter how small it was! Don't forget moments like these. </h4>
    
    `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>There's something refreshing about spending time outside. Channel your inner country and breathe in the open road! </h4>
    `)
  } else if (score === 14) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>It's okay to feel down sometimes. Take some time to acknowledge how you feel and let it all out. You got this :)</h4>
     `)
  } else if (score === 22) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>There's no shame in being upset. Something that helps me: the worst days are still only 24 hours long! We believe in you <3 </h4>
    `)
  } else if (score === 26) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>"This is for everybody going through tough times, believe me, been there done that, but everyday above ground is a great day. Remember that" -- The legend Pitbull Mr. Worldwide</h4>
     `)
  } else if (score === 34) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>It's okay if you need time by yourself, but theres no shame in relying on friends, family or others if you have to. </h4>
     `)
  } else if (score === 38) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Even cowboys get the blues...if you need to be distracted, try some relaxing hobbies to pass the time. </h4>
     `)
  } else if (score === 21) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Listen to something loud and fast! Being angry sometimes is okay too.</h4>
    `)
  } else if (score === 33) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Your feelings are valid no matter what. One way to let it out is to exercise (enjoy this playlist while you do, haha)</h4>
   
    `)
  } else if (score === 39) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Don't be afraid to distance yourself from a stressful situation if you have to. Your mental health impacts a lot of your physical health as well. </h4>
     `)
  } else if (score === 51) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Take a second to breathe and pause to assess the situation. Sometimes taking it slow is a good thing when you're angry as well.</h4>
  
    `)
  } else if (score === 57) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Try writing out why you're mad in a letter or email. Once you've perfected and completed it, delete it once you're ready to let go. </h4>
     `)
  } else if (score === 28) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Jitters are completely normal. Distract yourself with something fast and loud!</h4>
   
    `)
  } else if (score === 44) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>If something has the potential to go horribly wrong, it also has the potential of going fantastically well. You never know! </h4>
  
    `)
  } else if (score === 52) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Make sure to treat yourself once you've finished what you're nervous or tense about. Get excited for it!</h4>
    `)

  } else if (score === 68) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Talk it out with a friend! Being nervous or tense together is better than worrying alone. </h4>
   
    `)
  } else if (score === 76) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4> Express how you feel in whatever way you can. Make charts to organize your thoughts, or write emails or letters to yourself. Surprising how much it can help!</h4>
     `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>You've been working hard. Go get some rest! Your body will thank you.</h4>
    
    `)
  } else if (score === 35) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Need to go to sleep but can't? Try tensing your muscles for a few seconds, then releasing them completely. Repeat a few times, and you'll be asleep before you know it! Goodnight~~</h4>
   

    `)
  } else if (score === 55) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Sometimes life gets in the way of a good sleep schedule. Little by little, take the time to make relaxing part of your day. </h4>
   
    `)
  } else if (score === 65) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>You've been working hard. Go get some rest! Your body will thank you.</h4>
   
    `)
  } else if (score === 85) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Studies have shown that people who sleep between 8-9.5 hours at night tend to wake up happier. Gotta start somewhere!</h4>
  

    `)
  } else if (score === 95) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Time to hit the hay...give your eyes a break! You'll see how much better you'll feel :)</h4>



    `)
  }
}


