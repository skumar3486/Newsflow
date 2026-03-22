const API_KEY = '0260bcf9bddb4f0f87b518b5ca983b69';
const newsContainer = document.getElementById('news-container');

async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
        const data = await response.json();
        
        console.log("Data received:", data); // Check your Console for this!

        if (data.articles && data.articles.length > 0) {
            displayArticles(data.articles);
        } else {
            newsContainer.innerHTML = "<p class='text-white'>No news found at the moment.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p class='text-red-500'>Failed to load news. Check connection.</p>";
    }
}

function displayArticles(articles) {
    newsContainer.innerHTML = ""; // Clear loader
    articles.slice(0, 10).forEach(article => {
        const card = `
            <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src="${article.urlToImage || 'https://via.placeholder.com/400x200'}" class="w-full h-48 object-cover rounded">
                <h2 class="text-xl font-bold mt-2 text-white">${article.title}</h2>
                <p class="text-gray-400 text-sm mt-1">${article.description || ''}</p>
                <a href="${article.url}" target="_blank" class="inline-block mt-4 text-blue-400 hover:underline">Read Full Story</a>
            </div>
        `;
        newsContainer.insertAdjacentHTML('beforeend', card);
    });
}

// Start the process
getNews();
