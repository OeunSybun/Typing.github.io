
var paragraph=[
              ["Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world.",
              "Its name, which translates to temple city in the Khmer language of the region, references the fact it was built by Emperor Suryavarman II, who ruled the region from 1113 to 1150, as the state temple and political center of his empire. Angkor Wat is located roughly five miles north of the modern Cambodian city of Siem Reap, which has a population of more than 200,000 people. However, when it was built, it served as the capital of the Khmer empire, which ruled the region at the time.",
              "The word Angkor means capital city in the Khmer language, while the word Wat means Temple. Initially, Angkor Wat was designed as a Hindu temple, as that was the religion of the region's ruler at the time, Suryavarman II. However, by the end of the 12th century, it was considered a Buddhist site.",
              "Unfortunately, by then, Angkor Wat had been sacked by a rival tribe to the Khmer, who in turn, at the direction of the new emperor, Jayavarman VII, moved their capital to Angkor Thom and their state temple to Bayon, both of which are a few miles to the north of the historic site. As Angkor Wat's significance within the Buddhist religion of the region increased, so too did the legend surrounding the site. Many Buddhists believe the temple's construction was ordered by the god Indra, and that the work was accomplished in one night, However, scholars now know it took several decades to build Angkor Wat, from the design phase to completion."
              ]
              ,
              ["The Khmer Rouge was a brutal regime that ruled Cambodia, under the leadership of Marxist dictator Pol Pot, from 1975 to 1979. Pol Pot's attempts to create a Cambodian 'master race' through social engineering ultimately led to the deaths of more than 2 million people in the Southeast Asian country. Those killed were either executed as enemies of the regime, or died from starvation, disease or overwork.",
              "Although Pol Pot and the Khmer Rouge didn't come to power until the mid-1970s, the roots of their takeover can be traced to the 1960s, when a communist insurgency first became active in Cambodia, which was then ruled by a monarch.Throughout the 1960s, the Khmer Rouge operated as the armed wing of the Communist Party of Kampuchea, the name the party used for Cambodia. Operating primarily in remote jungle and mountain areas in the northeast of the country, near its border with Vietnam, which at the time was embroiled in its own civil war, the Khmer Rouge did not have popular support across Cambodia, particularly in the cities, including the capital Phnom Penh.",
              "However, after a 1970 military coup led to the ouster of Cambodia's ruling monarch, Prince Norodom Sihanouk, the Khmer Rouge decided to join forces with the deposed leader and form a political coalition. As the monarch had been popular among city-dwelling Cambodians, the Khmer Rouge began to glean more and more support.For the next five years, a civil war between the right-leaning military, which had led the coup, and those supporting the alliance of Prince Norodom and the Khmer Rouge raged in Cambodia.",
              "Eventually, the Khmer Rouge side seized the advantage in the conflict, after gaining control of increasing amounts of territory in the Cambodian countryside.In 1975, Khmer Rouge fighters invaded Phnom Penh and took over the city. With the capital in its grasp, the Khmer Rouge had won the civil war and, thus, ruled the country.",
              "As the new ruler of Cambodia, Pol Pot set about transforming the country into his vision of an agrarian utopia. The cities were evacuated, factories and schools were closed, and currency and private property was abolished. Anyone believed to be an intellectual, such as someone who spoke a foreign language, was immediately killed.",
              "Skilled workers were also killed, in addition to anyone caught in possession of eyeglasses, a wristwatch, or any other modern technology. In forced marches punctuated with atrocities from the Khmer Rouge, the millions who failed to escape Cambodia were herded onto rural collective farms.Between 1975 and 1978, an estimated two million Cambodians died by execution, forced labor, and famine.",
              "In 1978, Vietnamese troops invaded Cambodia, capturing Phnom Penh in early 1979. A moderate Communist government was established, and Pol Pot and the Khmer Rouge retreated back into the jungle. In 1985, Pol Pot officially retired but remained the effective head of the Khmer Rouge, which continued its guerrilla actions against the government in Phnom Penh.",
              "In 1997, however, he was put on trial by the organization after an internal power struggle ousted him from his leadership position. Sentenced to life imprisonment by a people's tribunal, which critics derided as a show trial, Pol Pot later declared in an interview, My conscience is clear. Much of the international community hoped that his captors would extradite him to stand trial for his crimes against humanity, but he died of apparently natural causes while under house arrest in 1998."
              ]
              ,
              ["Cambodia, a country located in Southeast Asia, is bordered by the Lao People's Democratic Republic to the northeast, Thailand to the northwest, Vietnam to the east, and the Gulf of Thailand to the southwest. Cambodia gained its independence in 1953 and is a member of the Association of South-East Asia Nations (ASEAN). Cambodia has a multiparty democracy under a constitutional monarchy, with Phnom Penh as the capital.",
              "Cambodia's economy grew rapidly, at around 10% per year, between 2004 and 2008. Growth slowed slightly during the global financial crisis in 2008 and 2009 but picked up again to reach a five-year high of 7,6% in 2013. The economy is expected to contract approximately 3 percent in 2020, but is expected to bounce back and grow by 4 percent in 2021, The continuing increase in economic growth is largely driven by strong exports of garments and agricultural products; expansions of the construction, real estate development, and tourism sectors; and broad-based development in the industrial and service sectors.",
              "It is optimistic that Cambodia will continue attracting more investors because of its low wages, plentiful labour, proximity to Asian raw materials, favourable tax treatment, and the launch of the ASEAN Economic Community in 2015. Also, the government has said opportunities exist for mining bauxite, gold, iron, gems, and particularly hydrocarbons and natural gas. Following explorations carried out during the last few years, hydrocarbon production is expected to be undertaken in the near future.",
              "Since entering Cambodia in 1998, PwC has continually expanded the scope of its services and currently employs around 200 people. These professionals provide industry-focused assurance, tax, and advisory services. PwC Cambodia has a strong relationship with key ministries, financial institutions, and both commercial and aid-funded organisations.",
              "Its fully integrated tax practice brings together the right combination of compliance, planning, structuring, and industry experience. PwC Cambodia has developed relationships with the tax authorities at both the departmental and ministerial levels and with related government departments. Through this regular dialogue, PwC Cambodia is able to advise clients on the frequently changing Cambodian regulations."
              ]
             ];

var rand_para=parseInt(Math.floor(Math.random()*3));
var num_para=0;
var max_num_para;
maxNumpara();

var img=[];
for(var i=1;i<=24;i++){
  img[i-1]="img/Mario/"+i+".png";
}

var x=4;  //arxis in function runner();
var y; //arxis in function stone_drop();
var i=1;  //image number in function runner();
var check=0;  //number of stone droped;
var a=0;  //head of sentence;
var second=0,minute=0,hour=0;
var time;
var typed=0;
var error=0;
var accuracy=0;
var minuteLimit;
var soundCheck=0;
var backgroundSound;
var volume=0;
$("#character").on("click",running);
$(".volume").on("click",volumeFunction);
$(document).ready(freerun);
btnSound();
$(".start .btn").on("click",function(){
  if(volume==1){
    backgroundSound.pause();
    backgroundSound.currentTime=0;
  }
  minuteLimit();
  $(document).on("keydown", function(){
    if(event.key == "Escape"){
      consequence();
    }
  });
  firstDisplay();
});

function firstDisplay(){
  fadeOutHome();
  time=setInterval(timeProcess,1000);
  earlyDisplay();
  $(document).on("keypress",function(){
    countTyped();
    typedCorrect();
    countAccuracy();
  });
}

function fadeOutHome(){
  $("#Home-Page").fadeOut();
  setTimeout(function(){
    $("#Playing").css({display:"block"});
  },500);
}

function timeProcess(){
  backgroundMusic("Castle",144);
  second=parseInt(second)+1;
  minute=parseInt(minute)+parseInt(second/60);
  hour=parseInt(hour)+parseInt(minute/60);
  if(second==60){
    second=0;
  }
  if(minute==60){
    minute=0;
  }
  if(second<10){
    second="0"+second;
  }
  if(minute<10){
    minute="0"+minute;
  }
  if(hour<10){
    hour="0"+hour;
  }
  if(parseInt(minute)==parseInt(minuteLimit)){
    consequence();
  }
  $(".time").html(hour+":"+minute+":"+second);
}

function earlyDisplay(){
  $(".typed").html("Typed:"+typed);
  $(".error").html("Error:"+error);
  $(".Accuracy").html("Accuracy:"+accuracy);
  $(".first-index").html(paragraph[rand_para][num_para][0]);
  $(".remaining").html(paragraph[rand_para][num_para].substr(1,50));
}

function countTyped(){
  typed=parseInt(typed)+1;
  if(typed<10){
    typed="0"+typed;
  }
  $(".typed").html("Typed:"+typed);
}

function typedCorrect(){
  if(paragraph[rand_para][num_para][a]===event.key){
    var audio=new Audio("music/KeyPress.wav");
    audio.play();
    pushDisplay();
    if(paragraph[rand_para][num_para][a]==="."){
      if(check>=2){
        Return();
      }
      running();
    }
    a++;
  }
  else if(paragraph[rand_para][num_para][a]!=event.key){
    countError();
  }
}

function countAccuracy(){
  accuracy=parseInt(((parseInt(typed)-parseInt(error))/parseInt(typed))*100);
  $(".Accuracy").html("Accuracy:"+accuracy);
}

function pushDisplay(){
  $(".first-index").html(paragraph[rand_para][num_para][a+1]);
  if(paragraph[rand_para][num_para][a+2]==" "){
      $(".remaining").css({left:"10%"});
  }
  else{
    $(".remaining").css({left:"7.7%"});
  }
  $(".remaining").html(paragraph[rand_para][num_para].substr(a+2,49));
}

function running(){
  var character_interval=setInterval(function(){
    runner();
    if(i==24){
      clearInterval(character_interval);
      i=0;
      check++;
    }
    if(check==0){
      stone_drop(check+1,-500);
    }
    else if(check==1){
      stone_drop(check+1,0);
    }
    else if(check==2){
      stone_drop(check+1,500);
    }
  },80);
}

function countError(){
  var audio=new Audio("music/Wrong.mp3");
  audio.play();
  setTimeout(function(){
    audio.pause();
    audio.currentTime=0;
  },100);
  error=parseInt(error)+1;
  if(error<10){
    error="0"+error;
  }
  $(".error").html("Error:"+error);
}

function runner(){
  $("#character")[0].src=img[i];
  $("#character").css({transform:"translateX("+x+"vh)"});
  x=x+2.5;
  i++;
}

function stone_drop(num_stone,x_arxis){
  if(i==17){
    y=3;
    var stone_interval=setInterval(function(){
      $(".stone"+num_stone).css({transform:"translateY("+y+"vh)"});
      y=y+1.3;
      if(y>=40){
        clearInterval(stone_interval);
      }
    },23);
  }
}

function maxNumpara(){
  if(rand_para==0){
    max_num_para=4;
  }
  else if(rand_para==1){
    max_num_para=8;
  }
  else if(rand_para==3){
    max_num_para=5;
  }
}

function freerun(){
  var n=1,m=3;
  var freerun=setInterval(function(){
    $(".freeRun")[0].src="img/Mario/"+m+".png";
    $(".freeRun").css({transform:"translate("+n+"vh,-10vh)"});
    m++;
    n=n+4;
    if(m==21){
      m=3;
    }
    if(n>=180){
      n=1;
    }
  },140);
}

function consequence(){
  clearInterval(time);
  $("#Playing").fadeOut(500);
  setTimeout(function(){
    $(".consequence").css({display:"block"});
  },1000);
  $(".duration").html("DURATION:"+hour+":"+minute+":"+second);
  $(".typed_result").html("TYPED:"+typed);
  $(".error_result").html("ERROR:"+error);
  $(".accuracy_result").html("ACCURACY:"+accuracy+"%");
  $(".done").on("click",function(){
    $(".consequence").fadeOut(500);
    setTimeout(function(){
      location.reload();
    },1000);
  });
}

function Return(){
  clearInterval(time);
  setTimeout(function(){
    num_para=parseInt(num_para)+1;
    if(num_para>=max_num_para){
      rand_para=parseInt(Math.floor(Math.random()*3));
      num_para=parseInt(0);
    }
    $("#Playing").toggle(500);
    a=0;
    check=0;
    x=15;
    y=20;
    $("#Playing").toggle(500);
    $(".stone1").css({transform:"translateY(0px)"});
    $(".stone2").css({transform:"translateY(0px)"});
    $(".stone3").css({transform:"translateY(0px)"});
    $("#character").css({transform:"translateX(4vh)"});
    $(".first-index").html(paragraph[rand_para][num_para][0]);
    $(".remaining").html(paragraph[rand_para][num_para].substr(1,50));
    time=setInterval(timeProcess,1000);
    },3000);
}

function minuteLimit(){
  minuteLimit=$(".minute_limit").find(":selected").text();
  if(minuteLimit=="Minute"){
    minuteLimit=5;
  }
  if(minuteLimit=="No_Limit"){
    minuteLimit=null;
  }
}

function btnSound(){
  $(".btn").on("click",function(){
    var audio=new Audio("music/PressBtn.mp3");
    audio.play();
  });
  $(".about").on("click",function(){
    var audio=new Audio("music/PressBtn.mp3");
    audio.play();
  });
  $(".done").on("click",function(){
    var audio=new Audio("music/PressBtn.mp3");
    audio.play();
  });
}

function backgroundMusic(soundName,second){
  if(volume==1){
    if(soundCheck==0){
      backgroundSound=new Audio("music/"+soundName+".mp3");
      backgroundSound.play();
      soundCheck=1;
    }
    if(parseInt(backgroundSound.currentTime)==second){
      backgroundSound.pause();
      backgroundSound.currentTime=0;
      soundCheck=0;
    }
  }
}


function volumeFunction(){
  if(volume==0){
    $(".volume_img")[0].src="img/Volume_on.png";
    volume=1;
    backgroundSound=new Audio("music/Select.mp3");
    backgroundSound.play();
  }
  else if(volume==1){
    $(".volume_img")[0].src="img/Volume_mute.png";
    volume=0;
    backgroundSound.pause();
    backgroundSound.currentTime=0;
  }
}
