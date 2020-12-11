const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}

// Get Quote From API
async function getQuote() {
   const apiUrl = `https://api.quran.sutanlab.id/surah/${getRandomInt(114)}/${getRandomInt(300)}`;
   try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      if (data.data.surah.name.transliteration.id === "") {
         authorText.innerText = "Нет записи"
      } else {
         authorText.innerText = (`Surah ${data.data.surah.name.transliteration.id}  ${data.data.surah.number} ayah ${data.data.number.inSurah}`)
      }

      if (data.data.text.arab.length > 100) {
         quoteText.classList.add("long-quote")
      } else {
         quoteText.classList.remove("long-quote")
      }
      quoteText.innerText = data.data.text.arab
   } catch (error) {
      getQuote()
   }
}

// Tweet Quote
function tweetQuote() {
   const quote = quoteText.innerText
   const author = authorText.innerText
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
   window.open(twitterUrl, "_blank")
}

// Event Listener
newQuoteBtn.addEventListener("click", getQuote)
twitterBtn.addEventListener("click", tweetQuote)


// On Load
getQuote()