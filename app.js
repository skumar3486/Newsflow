const API_KEY = '0260bcf9bddb4f0f87b518b5ca983b69';
const newsFeed = document.getElementById('news-feed');
const breakingText = document.getElementById('breaking-text');
const refreshBtn = document.getElementById('refresh-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// 1. Function to fetch and display news
async function fetchNews(category = 'general') {
    newsFeed.innerHTML = '<p style="color: white; text-align: center;">Updating feed...</p>';
    
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok") {
            displayNews(data.articles);
            updateBreakingTicker(data.articles);
        } else {
            newsFeed.innerHTML = `<p style="color: red;">Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        newsFeed.innerHTML = '<p style="color: red;">Failed to connect to news server.</p>';
    }
}

// 2. Function to build the news cards
function displayNews(articles) {
    newsFeed.innerHTML = ''; // Clear the loader

    articles.forEach(article => {
        if (!article.title || !article.urlToImage) return; // Skip incomplete news

        const card = `
            <div class="news-card">
                <div class="card-image">
                    <img src="${article.urlToImage}" alt="news" onerror="this.src='https://via.placeholder.com/400x200?text=Newsflow'">
                </div>
                <div class="card-content">
                    <span class="source-tag">${article.source.name}</span>
                    <h3>${article.title}</h3>
                    <p>${article.description || ''}</p>
                    <div class="card-footer">
                        <a href="${article.url}" target="_blank" class="read-more">Read Story</a>
                    </div>
                </div>
            </div>
        `;
        newsFeed.insertAdjacentHTML('beforeend', card);
    });
}

// 3. Update the breaking news bar
function updateBreakingTicker(articles) {
    const titles = articles.slice(0, 5).map(a => a.title).join("  •  ");
    breakingText.innerText = titles || "No breaking news at the moment.";
}

// 4. Event Listeners for Categories
categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all, add to clicked
        categoryBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.getAttribute('data-category');
        fetchNews(category);
    });
});

// 5. Refresh Button
refreshBtn.addEventListener('click', () => fetchNews());

// Initial Load
window.addEventListener('DOMContentLoaded', () => fetchNews());
