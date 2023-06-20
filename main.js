let btnGenerate = document.getElementById("btn-generate")
let messageBox = document.getElementById("message-sweet")

let quoteContainer = ["You are the sunshine that brightens my day.",
"Every moment with you feels like a beautiful adventure.",
"You make my heart skip a beat and my face blush with happiness.",
"I'm grateful to have you by my side, making every day more special.",
"You're not just my love; you're my best friend and confidant.",
"Being with you is like a dream come true.",
"Your smile is the most beautiful curve I've ever seen.",
"You're the missing piece that completes my puzzle of happiness.",
"I fall in love with you a little more every time I see you.",
"Your presence alone makes my world a better place.",
"You're the sweetest thing that has ever happened to me.",
"With you, every day feels like a romantic movie.",
"Your love is like a warm hug for my heart.",
"I'm addicted to your adorable smile.",
"You have the most beautiful eyes that I get lost in.",
"Being in your arms is my favorite place to be.",
"You bring out the best in me and make me a better person.",
"I love how you make even the simplest moments extraordinary.",
"You make my heart flutter like a butterfly in love.",
"You're not just my partner; you're my forever love and companion.",
"In a world full of stars, you are the brightest and most beautiful constellation.",
"Your laughter is like music to my ears, and I can't get enough of it.",
"I would walk a thousand miles just to see your smile.",
"You're the reason I believe in magic and fairy tales.",
"Every time I look into your eyes, I see a future full of love and happiness.",
"I'm not a poet, but your presence inspires me to write the most heartfelt verses.",
"Your love has transformed me into a better person, and I'm forever grateful.",
"You have a way of making ordinary moments extraordinary, and I cherish every second with you.",
"I'm mesmerized by your beauty, both inside and out.",
"You are the missing puzzle piece I've been searching for, and now my heart feels complete.",
"I'm so grateful to have you in my life. You're the best thing that has ever happened to me.",
"Your love is like a gentle breeze that brings joy and peace to my heart.",
"I love the way your voice sounds—it's like a melody that soothes my soul.",
"You have the power to turn my ordinary days into extraordinary moments just by being by my side.",
"Your kindness and compassion inspire me to be a better person every day.",
"I'm not sure what I did to deserve someone as amazing as you, but I'll spend the rest of my life proving my love and gratitude.",
"You're the most beautiful person I know, both inside and out. My heart is captivated by your charm.",
"Every love song I hear reminds me of you, because you are the melody that plays in my heart.",
"Your smile is like a ray of sunshine that brightens even the darkest days.",
"I can't imagine my life without you. You're my forever and always."]

let QuoteFunction = () =>{

btnGenerate.addEventListener('click',function(){

let display = Math.floor(Math.random() * quoteContainer.length)
messageBox.textContent= quoteContainer[display]

})


}

QuoteFunction()

