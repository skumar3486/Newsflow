const API_KEY = 'b8f9955826a49f3da1fc1de2a240c49a';
const newsFeed = document.getElementById('news-feed');
const breakingText = document.getElementById('breaking-text');
const refreshBtn = document.getElementById('refresh-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// 1. Function to fetch news from GNews.io
async function fetchNews(category = 'general') {
    newsFeed.innerHTML = '<p style="color: white; text-align: center;">Updating feed...</p>';
    
    // GNews URL structure: category, lang, and country filters
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
            displayNews(data.articles);
            updateBreakingTicker(data.articles);
        } else if (data.errors) {
            newsFeed.innerHTML = `<p style="color: red;">API Error: ${data.errors[0]}</p>`;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        newsFeed.innerHTML = '<p style="color: red;">Failed to connect to GNews server.</p>';
    }
}

// 2. Function to build the news cards (Adjusted for GNews labels)
function displayNews(articles) {
    newsFeed.innerHTML = ''; 

    articles.forEach(article => {
        // GNews uses 'image' instead of 'urlToImage'
        const card = `
            <div class="news-card">
                <div class="card-image">
                    <img src="${article.image || 'https://via.placeholder.com/400x200?text=Newsflow'}" alt="news" onerror="this.src='https://via.placeholder.com/400x200?text=Newsflow'">
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

// 4. Category Filters
categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
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
