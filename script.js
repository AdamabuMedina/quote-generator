// Get Quote From API
async function getQuote() {
   const apiUrl = "https://api.quran.sutanlab.id/surah/2/255/?method=getQuote&lang=en&format=json";
   try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
   } catch (error) {
      getQuote()
      console.log("упс, нет цитаты", error)
   }
}

// On Load
getQuote()