// 1. Define your API Key
const API_KEY = '0260bcf9bddb4f0f87b518b5ca983b69';

// 2. Create the function to get the news
async function fetchRealNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
    const data = await response.json();
    
    // This logs the news to your browser console so you can see it working
    console.log(data.articles); 
    
    // Now call a function to put this data into your HTML
    displayNews(data.articles);
}

// 3. Run the function when the page opens
fetchRealNews();
