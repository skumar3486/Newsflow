// Application Data - embedded from provided JSON
const appData = {
  "stories": [
    {
      "id": 1,
      "headline": "Gaza War Negotiations Continue as Hamas Agrees to Partial Peace Plan",
      "summary": "Hamas has agreed 'in principle' to President Trump's 20-point peace plan, with negotiations set to continue in Egypt. Israeli and Palestinian delegations are meeting in Cairo to finalize technical details for hostage release and potential ceasefire.",
      "category": "International",
      "location": "Gaza/Egypt",
      "when": "October 5, 2025",
      "who": "Hamas, Israel, Trump Administration",
      "what": "Peace negotiations and hostage release talks",
      "how": "Through diplomatic channels and Egyptian mediation",
      "breaking": true,
      "last_updated": "2025-10-05T15:00:00Z",
      "opinions_count": 0,
      "votes": {"support_peace": 0, "against_deal": 0},
      "updates": [
        "Hamas delegation arrives in Cairo for talks",
        "Israeli negotiators present in Egypt", 
        "Trump administration monitoring progress",
        "Hostage families await developments"
      ]
    },
    {
      "id": 2,
      "headline": "Russia Launches Massive Attack on Ukraine, 5 Killed",
      "summary": "Russia conducted its largest nighttime attack on Ukraine with over 50 ballistic missiles and 500 drones, targeting civilian infrastructure across nine regions. At least 5 civilians died including 4 in Lviv.",
      "category": "International",
      "location": "Ukraine",
      "when": "October 5, 2025",
      "who": "Russian forces, Ukrainian civilians",
      "what": "Large-scale missile and drone attack",
      "how": "Ballistic missiles and drone strikes",
      "breaking": true,
      "last_updated": "2025-10-05T12:00:00Z",
      "opinions_count": 0,
      "votes": {"condemn_attack": 0, "support_ukraine": 0},
      "updates": [
        "Air raid sirens across Ukraine",
        "Power outages reported in multiple cities",
        "International community condemns attack",
        "Zelensky calls for more air defense support"
      ]
    },
    {
      "id": 3,
      "headline": "Indonesia School Building Collapse Kills 36 Students", 
      "summary": "A prayer hall at an Islamic boarding school collapsed due to structural failure, killing 36 students with 26 still missing. Rescue operations continue as authorities investigate the cause.",
      "category": "International",
      "location": "Indonesia",
      "when": "October 4-5, 2025",
      "who": "Students, rescue teams, school authorities",
      "what": "Building collapse at Islamic boarding school",
      "how": "Structural failure of prayer hall",
      "breaking": false,
      "last_updated": "2025-10-05T10:00:00Z",
      "opinions_count": 0,
      "votes": {"improve_safety": 0, "investigate_cause": 0},
      "updates": [
        "Rescue teams working around the clock",
        "26 students still missing",
        "Government orders school safety audit",
        "Families gather at disaster site"
      ]
    },
    {
      "id": 4,
      "headline": "Japan Elects First Female Prime Minister Candidate",
      "summary": "Japan's ruling party elected Sanae Takaichi as new leader, making her likely to become the country's first female prime minister. The 64-year-old former Economic Security Minister is known for her conservative stance.",
      "category": "International",
      "location": "Japan",
      "when": "October 4, 2025",
      "who": "Sanae Takaichi, Japanese ruling party",
      "what": "Historic election of female party leader",
      "how": "Party leadership election",
      "breaking": false,
      "last_updated": "2025-10-04T18:00:00Z",
      "opinions_count": 0,
      "votes": {"historic_moment": 0, "policy_concerns": 0},
      "updates": [
        "Takaichi wins party leadership vote",
        "First woman to lead ruling party",
        "Parliament vote scheduled next week",
        "International congratulations pour in"
      ]
    },
    {
      "id": 5,
      "headline": "Kerala Bans Coldrif Cough Syrup After Child Deaths",
      "summary": "Kerala suspended sales of Coldrif cough syrup following reports of 11 child deaths in Madhya Pradesh and Rajasthan. The syrup was found to contain excessive levels of diethylene glycol.",
      "category": "National",
      "location": "India",
      "when": "October 5, 2025",
      "who": "Kerala government, health authorities",
      "what": "Ban on dangerous cough syrup",
      "how": "Government health directive after safety concerns",
      "breaking": false,
      "last_updated": "2025-10-05T14:00:00Z",
      "opinions_count": 0,
      "votes": {"support_ban": 0, "need_investigation": 0},
      "updates": [
        "Kerala issues immediate ban order",
        "Other states review similar products",
        "Drug Controller General investigating",
        "Parents advised to check medicine cabinets"
      ]
    },
    {
      "id": 6,
      "headline": "Darjeeling Landslides Kill 18, Rescue Operations Continue",
      "summary": "Heavy rainfall triggered massive landslides in Darjeeling hills, killing at least 18 people and leaving many tourists stranded. NDRF teams are conducting rescue operations as weather conditions remain challenging.",
      "category": "National",
      "location": "West Bengal, India", 
      "when": "October 5, 2025",
      "who": "Victims, tourists, rescue teams",
      "what": "Natural disaster - landslides due to heavy rain",
      "how": "Extreme weather causing geological instability",
      "breaking": true,
      "last_updated": "2025-10-05T16:00:00Z",
      "opinions_count": 0,
      "votes": {"climate_action": 0, "better_warning_systems": 0},
      "updates": [
        "NDRF teams deployed for rescue",
        "Hundreds of tourists stranded",
        "Roads blocked by debris",
        "Weather warning extended"
      ]
    },
    {
      "id": 7,
      "headline": "Trump Authorizes 300 National Guard Troops to Chicago",
      "summary": "President Trump authorized deployment of 300 National Guard troops to Chicago despite local opposition, citing need to protect federal assets and combat crime in the city.",
      "category": "International",
      "location": "Chicago, USA",
      "when": "October 5, 2025",
      "who": "President Trump, Chicago officials, National Guard",
      "what": "Federal troop deployment to major US city",
      "how": "Presidential authorization despite local objections",
      "breaking": true,
      "last_updated": "2025-10-05T13:00:00Z",
      "opinions_count": 0,
      "votes": {"support_deployment": 0, "oppose_federal_intervention": 0},
      "updates": [
        "Presidential order signed",
        "Chicago mayor opposes deployment",
        "National Guard preparing mobilization",
        "Federal vs local authority debate intensifies"
      ]
    },
    {
      "id": 8,
      "headline": "Bitcoin Hits All-Time High Above $125,000",
      "summary": "Bitcoin reached a new record high of $125,245, driven by US policy optimism, ETF inflows, and strong institutional demand. The cryptocurrency continues its bull run in 2025.",
      "category": "Business",
      "location": "Global",
      "when": "October 5, 2025",
      "who": "Cryptocurrency investors, institutions",
      "what": "Record-breaking Bitcoin price milestone",
      "how": "Market demand and institutional adoption",
      "breaking": false,
      "last_updated": "2025-10-05T11:00:00Z",
      "opinions_count": 0,
      "votes": {"bullish_crypto": 0, "bubble_concerns": 0},
      "updates": [
        "New all-time high reached",
        "ETF inflows surge",
        "Institutional adoption accelerates",
        "Regulatory clarity improves sentiment"
      ]
    },
    {
      "id": 9,
      "headline": "Indian Dental Student Shot Dead at US Gas Station",
      "summary": "Chandrashekar Pole, a 27-year-old dental student from Hyderabad, was killed while working at a gas station in Dallas. His family has requested Indian government assistance to repatriate his body.",
      "category": "International",
      "location": "Dallas, USA",
      "when": "October 4, 2025",
      "who": "Indian student, family, authorities",
      "what": "Fatal shooting of international student",
      "how": "Gun violence at workplace",
      "breaking": false,
      "last_updated": "2025-10-05T09:00:00Z",
      "opinions_count": 0,
      "votes": {"gun_control": 0, "student_safety": 0},
      "updates": [
        "Police investigating the shooting",
        "Indian consulate contacted family",
        "University expresses condolences",
        "Community rallies for student safety"
      ]
    },
    {
      "id": 10,
      "headline": "Nearly 1,000 Trapped by Blizzard on Mount Everest",
      "summary": "Rescue efforts are underway for nearly 1,000 people trapped by a blizzard on the Tibetan side of Mount Everest. Roads to campsites have been blocked by severe weather conditions.",
      "category": "International",
      "location": "Tibet/Mount Everest",
      "when": "October 5, 2025",
      "who": "Climbers, rescue teams, Chinese authorities",
      "what": "Emergency rescue operation on world's highest mountain",
      "how": "Severe weather trapping climbers and support staff",
      "breaking": true,
      "last_updated": "2025-10-05T08:00:00Z",
      "opinions_count": 0,
      "votes": {"improve_safety": 0, "climate_impact": 0},
      "updates": [
        "Rescue helicopters deployed",
        "Weather conditions worsening",
        "International climbing community concerned",
        "Chinese authorities coordinating response"
      ]
    }
  ],
  "breaking_schedule": [
    {"time": "06:00", "story_id": 1, "title": "Gaza Peace Talks Continue in Egypt"},
    {"time": "08:30", "story_id": 2, "title": "Russia's Largest Ukraine Attack Kills 5"},
    {"time": "11:00", "story_id": 7, "title": "Trump Deploys National Guard to Chicago"},
    {"time": "13:30", "story_id": 6, "title": "Darjeeling Landslides: 18 Dead, Rescue Operations Continue"},
    {"time": "16:00", "story_id": 10, "title": "1,000 Trapped by Everest Blizzard"},
    {"time": "18:30", "story_id": 1, "title": "Hamas Responds to Trump Peace Plan"},
    {"time": "21:00", "story_id": 2, "title": "Ukraine Under Heavy Russian Bombardment"},
    {"time": "23:30", "story_id": 7, "title": "Federal Troops Arrive in Chicago Despite Opposition"}
  ]
};

// Application State
let currentFilter = 'all';
let searchQuery = '';
let userVotes = {};
let userLikes = {};
let storyComments = {};
let currentStory = null;
let breakingNewsIndex = 0;

// DOM Elements
const newsFeed = document.getElementById('news-feed');
const searchInput = document.getElementById('search-input');
const refreshBtn = document.getElementById('refresh-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
const breakingBanner = document.getElementById('breaking-banner');
const breakingText = document.getElementById('breaking-text');
const storyModal = document.getElementById('story-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const commentsModal = document.getElementById('comments-modal');
const commentsBackdrop = document.getElementById('comments-backdrop');
const commentsClose = document.getElementById('comments-close');
const commentsList = document.getElementById('comments-list');
const commentInput = document.getElementById('comment-input');
const addCommentBtn = document.getElementById('add-comment-btn');
const notification = document.getElementById('notification');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderNewsFeed();
    setupEventListeners();
    startBreakingNewsCycle();
    simulateRealtimeData();
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Refresh button
    refreshBtn.addEventListener('click', handleRefresh);
    
    // Category filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => handleCategoryFilter(btn.dataset.category));
    });
    
    // Modal events
    modalBackdrop.addEventListener('click', closeStoryModal);
    modalClose.addEventListener('click', closeStoryModal);
    
    commentsBackdrop.addEventListener('click', closeCommentsModal);
    commentsClose.addEventListener('click', closeCommentsModal);
    
    // Comments
    addCommentBtn.addEventListener('click', addComment);
    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addComment();
    });
}

function renderNewsFeed() {
    const filteredStories = getFilteredStories();
    
    newsFeed.innerHTML = '';
    
    if (filteredStories.length === 0) {
        newsFeed.innerHTML = '<div style="text-align: center; color: var(--color-text-secondary); margin-top: 2rem;">No stories found matching your criteria.</div>';
        return;
    }
    
    filteredStories.forEach(story => {
        const storyCard = createStoryCard(story);
        newsFeed.appendChild(storyCard);
    });
}

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => openStoryModal(story);
    
    const voteOptions = Object.keys(story.votes);
    const totalVotes = Object.values(story.votes).reduce((sum, count) => sum + count, 0);
    
    card.innerHTML = `
        <div class="news-card-header">
            <div class="news-meta">
                <span class="category-badge ${story.category.toLowerCase()}">${story.category}</span>
                ${story.breaking ? '<span class="breaking-badge">BREAKING</span>' : ''}
            </div>
            <div class="story-meta">${story.location} • ${formatTime(story.last_updated)}</div>
            <h2 class="news-headline">${story.headline}</h2>
            <p class="news-summary">${story.summary}</p>
            
            <div class="news-details">
                <div class="detail-item">
                    <div class="detail-label">Who</div>
                    <div>${story.who}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">What</div>
                    <div>${story.what}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">When</div>
                    <div>${story.when}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">How</div>
                    <div>${story.how}</div>
                </div>
            </div>
        </div>
        
        <div class="voting-section">
            <div class="voting-title">What's your opinion?</div>
            <div class="vote-options">
                ${voteOptions.map(option => `
                    <button class="vote-btn ${userVotes[story.id] === option ? 'voted' : ''}" 
                            onclick="event.stopPropagation(); vote(${story.id}, '${option}')">
                        ${formatVoteOption(option)}
                    </button>
                `).join('')}
            </div>
            <div class="vote-results">
                ${voteOptions.map(option => {
                    const percentage = totalVotes > 0 ? (story.votes[option] / totalVotes * 100) : 0;
                    return `
                        <div class="vote-bar">
                            <div class="vote-progress" style="width: ${percentage}%"></div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="interaction-bar">
            <div class="interaction-buttons">
                <button class="interaction-btn ${userLikes[story.id] ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike(${story.id})">
                    ❤️ ${userLikes[story.id] ? 'Liked' : 'Like'}
                </button>
                <button class="interaction-btn" onclick="event.stopPropagation(); openCommentsModal(${story.id})">
                    💬 Comment
                </button>
                <button class="interaction-btn" onclick="event.stopPropagation(); shareStory(${story.id})">
                    📤 Share
                </button>
            </div>
            <div class="interaction-stats">
                <span>${Object.values(story.votes).reduce((sum, count) => sum + count, 0)} votes</span>
                <span>${getCommentCount(story.id)} comments</span>
            </div>
        </div>
    `;
    
    return card;
}

function getFilteredStories() {
    let filtered = appData.stories;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'breaking') {
            filtered = filtered.filter(story => story.breaking);
        } else {
            filtered = filtered.filter(story => story.category === currentFilter);
        }
    }
    
    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(story => 
            story.headline.toLowerCase().includes(query) ||
            story.summary.toLowerCase().includes(query) ||
            story.location.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

function handleSearch(e) {
    searchQuery = e.target.value;
    renderNewsFeed();
}

function handleRefresh() {
    // Simulate new data by incrementing vote counts slightly
    appData.stories.forEach(story => {
        Object.keys(story.votes).forEach(option => {
            story.votes[option] += Math.floor(Math.random() * 3);
        });
    });
    
    renderNewsFeed();
    showNotification('Newsflow updated with latest data!');
}

function handleCategoryFilter(category) {
    currentFilter = category;
    
    // Update active button
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    renderNewsFeed();
}

function vote(storyId, option) {
    const story = appData.stories.find(s => s.id === storyId);
    if (!story) return;
    
    // Remove previous vote if exists
    if (userVotes[storyId]) {
        story.votes[userVotes[storyId]]--;
    }
    
    // Add new vote
    story.votes[option]++;
    userVotes[storyId] = option;
    
    renderNewsFeed();
    showNotification(`Vote recorded: ${formatVoteOption(option)}`);
}

function toggleLike(storyId) {
    userLikes[storyId] = !userLikes[storyId];
    renderNewsFeed();
    showNotification(userLikes[storyId] ? 'Story liked!' : 'Like removed');
}

function shareStory(storyId) {
    const story = appData.stories.find(s => s.id === storyId);
    if (!story) return;
    
    // Simulate sharing
    showNotification('Story shared successfully on Newsflow!');
}

function openStoryModal(story) {
    currentStory = story;
    
    const totalVotes = Object.values(story.votes).reduce((sum, count) => sum + count, 0);
    const voteOptions = Object.keys(story.votes);
    
    modalBody.innerHTML = `
        <div class="story-detail">
            <div class="news-meta" style="margin-bottom: 1rem;">
                <span class="category-badge ${story.category.toLowerCase()}">${story.category}</span>
                ${story.breaking ? '<span class="breaking-badge">BREAKING</span>' : ''}
            </div>
            <div class="story-meta" style="margin-bottom: 1rem;">${story.location} • ${formatTime(story.last_updated)}</div>
            <h1 style="margin-bottom: 1rem;">${story.headline}</h1>
            <p style="margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">${story.summary}</p>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div><strong>Who:</strong> ${story.who}</div>
                <div><strong>What:</strong> ${story.what}</div>
                <div><strong>When:</strong> ${story.when}</div>
                <div><strong>How:</strong> ${story.how}</div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Public Opinion</h3>
                <div class="chart-container">
                    <canvas id="voteChart"></canvas>
                </div>
            </div>
            
            <div class="story-updates">
                <h3 class="updates-title">Live Updates</h3>
                ${story.updates.map(update => `
                    <div class="update-item">${update}</div>
                `).join('')}
            </div>
        </div>
    `;
    
    storyModal.classList.remove('hidden');
    
    // Create chart after modal is shown
    setTimeout(() => createVoteChart(story), 100);
}

function createVoteChart(story) {
    const ctx = document.getElementById('voteChart');
    if (!ctx) return;
    
    const voteOptions = Object.keys(story.votes);
    const voteData = Object.values(story.votes);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'];
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: voteOptions.map(option => formatVoteOption(option)),
            datasets: [{
                data: voteData,
                backgroundColor: colors.slice(0, voteOptions.length),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function closeStoryModal() {
    storyModal.classList.add('hidden');
    currentStory = null;
}

function openCommentsModal(storyId) {
    const story = appData.stories.find(s => s.id === storyId);
    if (!story) return;
    
    renderComments(storyId);
    commentsModal.classList.remove('hidden');
    commentsModal.dataset.storyId = storyId;
}

function closeCommentsModal() {
    commentsModal.classList.add('hidden');
    delete commentsModal.dataset.storyId;
}

function renderComments(storyId) {
    const comments = storyComments[storyId] || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<div style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">No comments yet. Be the first to comment!</div>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <div class="comment-avatar">${comment.author.charAt(0).toUpperCase()}</div>
            <div class="comment-content">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-text">${comment.text}</div>
            </div>
        </div>
    `).join('');
}

function addComment() {
    const storyId = parseInt(commentsModal.dataset.storyId);
    const commentText = commentInput.value.trim();
    
    if (!commentText) return;
    
    if (!storyComments[storyId]) {
        storyComments[storyId] = [];
    }
    
    const comment = {
        id: Date.now(),
        author: `NewsflowUser${Math.floor(Math.random() * 1000)}`,
        text: commentText,
        timestamp: new Date().toISOString()
    };
    
    storyComments[storyId].unshift(comment);
    commentInput.value = '';
    
    renderComments(storyId);
    renderNewsFeed(); // Update comment counts
    showNotification('Comment added to Newsflow!');
}

function getCommentCount(storyId) {
    return storyComments[storyId] ? storyComments[storyId].length : 0;
}

function startBreakingNewsCycle() {
    function updateBreakingNews() {
        const breakingStories = appData.stories.filter(story => story.breaking);
        if (breakingStories.length === 0) return;
        
        const currentBreaking = breakingStories[breakingNewsIndex % breakingStories.length];
        breakingText.textContent = currentBreaking.headline;
        
        breakingNewsIndex++;
        
        // Show notification for breaking news
        if (Math.random() > 0.7) { // 30% chance of notification
            setTimeout(() => {
                showNotification(`🚨 Breaking on Newsflow: ${currentBreaking.headline}`, 4000);
            }, 1000);
        }
    }
    
    updateBreakingNews();
    setInterval(updateBreakingNews, 8000); // Change every 8 seconds for demo (instead of 2.5 hours)
}

function simulateRealtimeData() {
    // Simulate vote increases and new comments
    setInterval(() => {
        const randomStory = appData.stories[Math.floor(Math.random() * appData.stories.length)];
        const voteOptions = Object.keys(randomStory.votes);
        const randomOption = voteOptions[Math.floor(Math.random() * voteOptions.length)];
        
        randomStory.votes[randomOption]++;
        
        // Sometimes add a fake comment
        if (Math.random() > 0.8) {
            const storyId = randomStory.id;
            if (!storyComments[storyId]) {
                storyComments[storyId] = [];
            }
            
            const fakeComments = [
                "This is concerning news",
                "Hope this situation improves soon",
                "Thanks for sharing this update",
                "Important development to watch",
                "Thoughts and prayers for everyone affected"
            ];
            
            const comment = {
                id: Date.now(),
                author: `NewsflowReader${Math.floor(Math.random() * 500)}`,
                text: fakeComments[Math.floor(Math.random() * fakeComments.length)],
                timestamp: new Date().toISOString()
            };
            
            storyComments[storyId].unshift(comment);
        }
        
        // Only re-render if no modals are open
        if (storyModal.classList.contains('hidden') && commentsModal.classList.contains('hidden')) {
            renderNewsFeed();
        }
    }, 12000); // Every 12 seconds
}

function formatTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffHours < 1) {
        return `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
        return `${diffHours}h ago`;
    } else {
        return date.toLocaleDateString();
    }
}

function formatVoteOption(option) {
    return option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function showNotification(message, duration = 3000) {
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, duration);
}