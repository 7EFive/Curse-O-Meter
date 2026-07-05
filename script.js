// Fakten wurden meistens aus diesen Quellen gewählt:
// https://www.scoopwhoop.com/culture/disturbing-facts-that-will-freak-you-out/
// https://facts.net/creepy-facts/
// https://www.rd.com/list/weird-facts/
// https://mythgyaan.com/creepy-facts/
// https://www.rd.com/list/interesting-facts/


const lv1 = ["It is most likely, that you are sensitive to unsettling things, if you have choosen the lowest level", "Octopuses have three hearts", "Blue whale tongues can weigh as much as an elephant", "Shadows are darker on the Moon", "A flock of ravens is called an “unkindness”"
,"There’s only one Shell gas station shaped like a shell","The average person will spend six years of their life dreaming.","Hot water will turn into ice faster than cold water.","The world’s oldest wooden wheel has been around for more than 5,000 years","Japan has one vending machine for every 40 people"];
const lv2 = ["A different version of you exists in the minds of everyone who knows you.", "It’s impossible to hum while holding your nose for a longer period", "Most wasabi paste isn’t real wasabi", "In the Philippines, McDonald’s serves spaghetti", "The Statue of Liberty used to be a lighthouse"
,"The Eiffel Tower was originally intended for Barcelona","Queen Elizabeth II’s cows sleep on waterbeds","British military tanks are equipped to make tea","Nighttime is the natural state of the universe. Daytime is only caused by a nearby, radiating ball of flame.","We are closer to 2050 then 1990"];
const lv3 = ["People who stay up late at night have more psychopathic tendencies than those who sleep early.", "There is no physical evidence to say that today is Thursday, we all just have to trust that someone has kept count since the first one ever.", "Sloths can hold their breath longer than dolphins.", "It is common for children to hear “voices.”", "“The Devil’s Bible” exists, and it’s a contract between a monk and Satan."
,"The only part of your reflection you can lick is your tongue.","Humans have a primal gaze detecting system that can sense when someone is looking at you, even if not directly.","Sloths can hold their breath longer than dolphins can","The world’s largest waterfall is underwater","William McKinley was shot right after giving away his good-luck charm"];
const lv4 = ["Your skeleton is wet", "It is common for children to hear “voices.”", "Being buried alive accidentally occurred so often that people invented “safety coffins.”", "Every day, a person consumes around 1 to 2 cups of snot.", "Exam phase has started"
,"Siberian bears sometimes dig up dead bodies for food, and use cemeteries as ‘refrigerators’.","Over 50% of commercial pilots have admitted to falling asleep while flying a plane.","The probability of dying on your birthday is higher than on any other day.","Corpses recovered from bodies of water decay faster.","Doctors used the teeth of dead people to make dentures."];
const lv5 = [" Some tumours can grow teeth and hair.", "In 1939, 835 sheep in the US were killed by a single lightning strike.", "During World War 2, Japan bombed China with fleas infected with the bubonic plague.", "There are at least 200 corpses on Mount Everest", "If you fell into a black hole, you could see the start and the end of the universe, Big Bang and all"
,"Dead bodies can still move.","Decorations made from human bones adorn the interior of the Sedlec Ossuary.","Two Scottish doctors originally invented the chainsaw for childbirth.","Even after decapitation, human heads stay conscious for a while.","18th century doctors believed that bloodletting was necessary to “balance” one’s health."];

// Fakten var
const rmdFactBtn = document.getElementById("rmd_fact");
const newFactBtn = document.getElementById("newfact");
const faktEl = document.getElementById("fakt");
const meterEl = document.querySelector(".COmeter");
const logoEl = document.getElementById("logo");
const infoEl = document.getElementById("info");
const crBtn = document.getElementById("cr");
const qaBtn = document.getElementById("qa");
const iconEl = document.querySelector(".ic");

//footer style
logoEl.style.opacity= "0.79";
infoEl.style.color="#ffffff79";
infoEl.style.border= "2px solid #ffffff79";
crBtn.style.color="#ffffff79";
crBtn.style.border= "2px solid #ffffff79";
qaBtn.style.color="#ffffff79";
qaBtn.style.border= "2px solid #ffffff79";

//fact randomizer

let level = localStorage.getItem('lvl');

console.log("get_level: " + level);


rmd_fact.addEventListener("click", () => {
  let randomLevel = Math.floor(Math.random() * 6);
  level = randomLevel;
  console.log("get_level: " + level);
  gen_rez(randomLevel);
});

newfact.addEventListener("click", () => {
  gen_rez(level);
});


gen_rez(level);

function gen_rez(lv) {

  switch (Number(lv)) {
    case 1:
      faktEl.textContent = lv1[sel_ran(lv1)];
      // https://stackoverflow.com/questions/38060349/replace-image-by-javascript für iconen wechsel
      var imgReplace = iconEl;
      imgReplace.src = "img/lv1.png";
      faktEl.style.color="#2FFF00";
      meterEl.style.border= "5px solid #2FFF0080";
      newFactBtn.style.color="#2FFF00";
      rmdFactBtn.style.border= "2px solid #2FFF00";
      break;
    case 2:
      faktEl.textContent = lv2[sel_ran(lv2)];
      // https://stackoverflow.com/questions/38060349/replace-image-by-javascript für iconen wechsel
      var imgReplace = iconEl;
      imgReplace.src = "img/lv2.png";
      faktEl.style.color="#B7F200";
      meterEl.style.border= "5px solid #B7F20080";
      newFactBtn.style.color="#B7F200";
      rmdFactBtn.style.border= "2px solid #B7F200";
      break;
    case 3:
      faktEl.textContent = lv3[sel_ran(lv3)];
      // https://stackoverflow.com/questions/38060349/replace-image-by-javascript für iconen wechsel
      var imgReplace = iconEl;
      imgReplace.src = "img/lv3.png";
      faktEl.style.color="#FFE300";
      meterEl.style.border= "5px solid #FFE30080";
      newFactBtn.style.color="#FFE300";
      rmdFactBtn.style.border= "2px solid #FFE300";
      break;
    case 4:
      faktEl.textContent = lv4[sel_ran(lv4)];
      // https://stackoverflow.com/questions/38060349/replace-image-by-javascript für iconen wechsel
      var imgReplace = iconEl;
      imgReplace.src = "img/lv4.png";
      faktEl.style.color= "#FF7300";
      meterEl.style.border= "5px solid #FF730080";
      newFactBtn.style.color="#FF7300";
      rmdFactBtn.style.border= "2px solid #FF7300";
      break;
    case 5:
      faktEl.textContent = lv5[sel_ran(lv5)];
      // https://stackoverflow.com/questions/38060349/replace-image-by-javascript für iconen wechsel
      var imgReplace = iconEl;
      imgReplace.src = "img/lv5.png";
      faktEl.style.color="#FF0600";
      meterEl.style.border= "5px solid #FF060080";
      newFactBtn.style.color="#FF0600";
      rmdFactBtn.style.border= "2px solid #FF0600";
      newFactBtn.style.opacity= "0.79";
      break;
      default:
  
  }
}
function sel_ran(array) {
  let length = array.length;
  let random = Math.floor(Math.random() * length);
  console.log("lenght: " + length);
  console.log("random: " + random);

  return random;
}




