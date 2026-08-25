
const month = "march";

const fortunes = [
  "A pleasant surprise is waiting for you today.",
  "Trust your instincts — they will guide you in the right direction.",
  "Something you have been working hard for is finally starting to pay off.",
  "Today is a good day to take a chance on yourself.",
  "A new opportunity will appear when you least expect it.",
  "Someone close to you has a message that will brighten your day.",
  "Your patience will soon be rewarded.",
  "A small decision today could lead to something much bigger.",
  "You are closer to your goal than you think.",
  "Good news is making its way toward you.",
  "Your creativity will help you solve a problem today.",
  "An unexpected connection may become important in your future.",
  "Leave room for spontaneity — something wonderful may happen.",
  "The effort you put in today will create opportunities tomorrow.",
  "A fresh start is closer than it seems.",
  "Someone may recognize your efforts soon.",
  "Don't be afraid to step outside your comfort zone.",
  "Your positive energy will attract good things today.",
  "A problem that has been bothering you will soon become clearer.",
  "You will discover that you are capable of more than you thought.",
  "Today favors courage over hesitation.",
  "A meaningful conversation could change your perspective.",
  "Something you thought was a setback may turn out to be an opportunity.",
  "Your hard work has not gone unnoticed.",
  "Follow what excites you — it may lead somewhere unexpected.",
  "A little confidence can open a big door today.",
  "The answer you are looking for may already be within you.",
  "Good things often begin with small steps. Keep going.",
  "A lucky moment is closer than you think.",
  "Your future self will thank you for the decision you make today."
];

if(month === "january"){
    console.log(`Great you are a Capricorn.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "february"){
    console.log(`Great you are a Aquarius.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "march"){
    console.log(`Great you are a Pisces.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "april"){
    console.log(`Great you are a Aries.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "may"){
    console.log(`Great you are a Taurus.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "june"){
    console.log(`Great you are a Gemini.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "july"){
    console.log(`Great you are a Cancer.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "august"){
    console.log(`Great you are a Leo.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "september"){
    console.log(`Great you are a Virgo.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "october"){
    console.log(`Great you are a Libra.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "november"){
    console.log(`Great you are a Scorpio.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else if(month === "december"){
    console.log(`Great you are a Sagittarius.\n Your Fortune: ${fortunes[Math.floor(Math.random()*fortunes.length)]}`)
}
else{
    console.log("Enter a valid month name!")
}