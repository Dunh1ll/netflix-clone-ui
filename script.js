// === DATA ===
const PROFILES = [
    { id:1, name:'Alex', avatar:'https://picsum.photos/seed/nxfprofile1/200/200' },
    { id:2, name:'Emma', avatar:'https://picsum.photos/seed/nxfprofile2/200/200' },
    { id:3, name:'James', avatar:'https://picsum.photos/seed/nxfprofile3/200/200' },
    { id:4, name:'Kids', avatar:'https://picsum.photos/seed/nxfprofile4/200/200' },
];

const MOVIES = [
    { id:1, title:'Stranger Things', year:2016, rating:'TV-14', duration:'5 Seasons', match:98, genre:['Sci-Fi','Drama','Horror'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxfstranger/400/225', heroImg:'https://picsum.photos/seed/nxfstrangerh/1400/800', desc:'When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.' },
    { id:2, title:'The Crown', year:2017, rating:'TV-MA', duration:'4 Seasons', match:95, genre:['Drama','Historical'], category:'Series', isNew:false, img:'https://picsum.photos/seed/nxfcrown/400/225', heroImg:'https://picsum.photos/seed/nxfcrownh/1400/800', desc:'Follows the political rivalries and romance of Queen Elizabeth II\'s reign.' },
    { id:3, title:'Breaking Bad', year:2008, rating:'TV-MA', duration:'5 Seasons', match:97, genre:['Crime','Drama','Thriller'], category:'Series', isNew:false, img:'https://picsum.photos/seed/nxfbreaking/400/225', heroImg:'https://picsum.photos/seed/nxfbreakingh/1400/800', desc:'A high school chemistry teacher diagnosed with cancer turns to manufacturing methamphetamine.' },
    { id:4, title:'The Witcher', year:2019, rating:'TV-MA', duration:'3 Seasons', match:89, genre:['Fantasy','Action'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxfwitcher/400/225', heroImg:'https://picsum.photos/seed/nxfwitcherh/1400/800', desc:'Geralt of Rivia, a mutated monster-hunter, journeys toward his destiny in a turbulent world.' },
    { id:5, title:'Squid Game', year:2021, rating:'TV-MA', duration:'2 Seasons', match:99, genre:['Thriller','Survival'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxfsquid/400/225', heroImg:'https://picsum.photos/seed/nxfsquidh/1400/800', desc:'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.' },
    { id:6, title:'Wednesday', year:2022, rating:'TV-14', duration:'1 Season', match:91, genre:['Mystery','Comedy'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxfwednesday/400/225', heroImg:'https://picsum.photos/seed/nxfwednesdayh/1400/800', desc:'Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.' },
    { id:7, title:'Inception', year:2010, rating:'PG-13', duration:'2h 28m', match:93, genre:['Sci-Fi','Thriller'], category:'Movies', isNew:false, img:'https://picsum.photos/seed/nxfinception/400/225', heroImg:'https://picsum.photos/seed/nxfinceptionh/1400/800', desc:'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.' },
    { id:8, title:'Interstellar', year:2014, rating:'PG-13', duration:'2h 49m', match:96, genre:['Sci-Fi','Drama'], category:'Movies', isNew:false, img:'https://picsum.photos/seed/nxfinterstellar/400/225', heroImg:'https://picsum.photos/seed/nxfinterstellarh/1400/800', desc:'When Earth becomes uninhabitable, a farmer is tasked to pilot a spacecraft to find a new planet for humans.' },
    { id:9, title:'Oppenheimer', year:2023, rating:'R', duration:'3h 00m', match:92, genre:['Drama','History'], category:'Movies', isNew:true, img:'https://picsum.photos/seed/nxfoppenheimer/400/225', heroImg:'https://picsum.photos/seed/nxfoppenheimerh/1400/800', desc:'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.' },
    { id:10, title:'The Queen\'s Gambit', year:2020, rating:'TV-MA', duration:'1 Season', match:97, genre:['Drama'], category:'Series', isNew:false, img:'https://picsum.photos/seed/nxfqueens/400/225', heroImg:'https://picsum.photos/seed/nxfqueensh/1400/800', desc:'An orphaned chess prodigy struggles with addiction while battling to become the greatest chess player.' },
    { id:11, title:'Money Heist', year:2017, rating:'TV-MA', duration:'5 Seasons', match:95, genre:['Crime','Thriller'], category:'Series', isNew:false, img:'https://picsum.photos/seed/nxfheist/400/225', heroImg:'https://picsum.photos/seed/nxfheisth/1400/800', desc:'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history.' },
    { id:12, title:'Dune: Part Two', year:2024, rating:'PG-13', duration:'2h 46m', match:94, genre:['Sci-Fi','Adventure'], category:'Movies', isNew:true, img:'https://picsum.photos/seed/nxfdune2/400/225', heroImg:'https://picsum.photos/seed/nxfdune2h/1400/800', desc:'Paul Atreides unites with the Fremen to seek revenge against the conspirators who destroyed his family.' },
    { id:13, title:'Arcane', year:2021, rating:'TV-14', duration:'2 Seasons', match:96, genre:['Animation','Action'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxfarcane/400/225', heroImg:'https://picsum.photos/seed/nxfarcaneh/1400/800', desc:'Set in League of Legends\' utopian city of Piltover and the oppressed underbelly of Zaun.' },
    { id:14, title:'Black Mirror', year:2011, rating:'TV-MA', duration:'6 Seasons', match:89, genre:['Sci-Fi','Thriller'], category:'Series', isNew:false, img:'https://picsum.photos/seed/nxfmirror/400/225', heroImg:'https://picsum.photos/seed/nxfmirrorh/1400/800', desc:'An anthology series exploring a twisted high-tech multiverse where humanity\'s greatest innovations collide.' },
    { id:15, title:'The Last of Us', year:2023, rating:'TV-MA', duration:'1 Season', match:95, genre:['Drama','Action'], category:'Series', isNew:true, img:'https://picsum.photos/seed/nxftlou/400/225', heroImg:'https://picsum.photos/seed/nxftlouh/1400/800', desc:'Joel and Ellie must navigate a post-apocalyptic America ravaged by a fungal infection.' },
];

const ROWS = [
    { title:'Continue Watching for You', filter:m=>[1,3,5,8].includes(m.id) },
    { title:'Top 10 in Your Country Today', filter:m=>m.match>=94, isTop10:true },
    { title:'Popular on Netfflix', filter:m=>m.match>=90 },
    { title:'Trending Now', filter:m=>m.isNew },
    { title:'TV Shows', filter:m=>m.category==='Series' },
    { title:'Movies', filter:m=>m.category==='Movies' },
    { title:'Sci-Fi & Fantasy', filter:m=>m.genre.includes('Sci-Fi')||m.genre.includes('Fantasy') },
    { title:'Crime & Thriller', filter:m=>m.genre.includes('Crime')||m.genre.includes('Thriller') },
];

// === STATE ===
let currentProfile = PROFILES[0];
let myList = new Set();
let heroIdx = 0;
let currentModalMovie = null;
let isPlaying = false;
let playerTimer = null;
let heroTimer = null;

// === SVG ICONS ===
const iconPlay = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
const iconPlus = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const iconChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderProfiles();
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('nav-solid', window.scrollY > 50);
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.profile-menu-container')) document.getElementById('profile-dropdown').classList.add('hidden');
        if (!e.target.closest('.search-box') && !e.target.closest('.nav-right')) closeSearch();
        if (e.target.classList.contains('modal-overlay')) closeModal();
    });
});

// === PROFILES ===
function renderProfiles() {
    const grid = document.getElementById('profile-grid');
    grid.innerHTML = PROFILES.map(p => `
        <div class="profile-item" onclick="selectProfile(${p.id})">
            <img src="${p.avatar}" alt="${p.name}">
            <span>${p.name}</span>
        </div>
    `).join('');
}

function selectProfile(id) {
    currentProfile = PROFILES.find(p => p.id === id);
    document.getElementById('nav-avatar').src = currentProfile.avatar;
    document.getElementById('nav-avatar').alt = currentProfile.name;
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    initApp();
    showToast(`Welcome back, ${currentProfile.name}!`, 'lucide:hand-metal');
}

function initApp() {
    renderBillboard();
    heroTimer = setInterval(() => {
        if (document.hidden) return;
        heroIdx++;
        renderBillboard();
    }, 8000);
    renderRows();
}

// === BILLBOARD ===
function renderBillboard() {
    const heroMovies = MOVIES.filter(m => m.match >= 93 && m.heroImg);
    const m = heroMovies[heroIdx % heroMovies.length];
    
    const bb = document.getElementById('billboard');
    bb.querySelector('.billboard-bg').style.backgroundImage = `url(${m.heroImg})`;
    bb.querySelector('.billboard-title').textContent = m.title;
    bb.querySelector('.billboard-meta').innerHTML = `
        <span class="match">${m.match}% Match</span>
        <span class="maturity">${m.rating}</span>
        <span>${m.duration}</span>
    `;
    bb.querySelector('.billboard-description').textContent = m.desc;
    bb.querySelector('.billboard-buttons').innerHTML = `
        <button class="btn-play" onclick="playVideoFor(${m.id})"><iconify-icon icon="lucide:play" aria-hidden="true"></iconify-icon> Play</button>
        <button class="btn-info" onclick="openModal(${m.id})"><iconify-icon icon="lucide:info" aria-hidden="true"></iconify-icon> More Info</button>
    `;
}

// === ROWS ===
function renderRows() {
    const container = document.getElementById('main-content');
    container.innerHTML = ROWS.map((row, idx) => {
        const movies = MOVIES.filter(row.filter);
        return `
            <div class="row-container">
                <h2 class="row-title">${row.title}</h2>
                <div class="row-arrows">
                    <button class="row-arrow" onclick="scrollRow(${idx}, -1)" aria-label="Scroll left"><iconify-icon icon="lucide:chevron-left" aria-hidden="true"></iconify-icon></button>
                    <button class="row-arrow" onclick="scrollRow(${idx}, 1)" aria-label="Scroll right"><iconify-icon icon="lucide:chevron-right" aria-hidden="true"></iconify-icon></button>
                </div>
                <div class="row-slider" id="row-${idx}">
                    ${movies.map((m, i) => row.isTop10 ? renderTop10Card(m, i) : renderCard(m)).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderCard(m) {
    const inList = myList.has(m.id);
    return `
        <div class="slider-item" onclick="openModal(${m.id})">
            <div class="card-img-box">
                <img src="${m.img}" alt="${m.title}" loading="lazy">
            </div>
            <div class="card-info">
                <div class="card-buttons">
                    <button class="btn-play" onclick="event.stopPropagation();playVideoFor(${m.id})" aria-label="Play ${m.title}">${iconPlay}</button>
                    <button class="btn-icon ${inList?'active':''}" onclick="event.stopPropagation();toggleMyList(${m.id})" aria-label="${inList ? 'Remove from' : 'Add to'} My List">${inList ? iconCheck : iconPlus}</button>
                    <button class="btn-icon" onclick="event.stopPropagation();openModal(${m.id})" aria-label="Expand details">${iconChevronDown}</button>
                </div>
                <div class="card-meta">
                    <span class="match">${m.match}% Match</span>
                    <span class="maturity">${m.rating}</span>
                    <span>${m.duration}</span>
                </div>
                <div class="card-genres">
                    ${m.genre.map((g, i) => `<span>${g}</span>${i < m.genre.length - 1 ? '<span class="dot"></span>' : ''}`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderTop10Card(m, i) {
    return `
        <div class="slider-item top10-item" onclick="openModal(${m.id})">
            <span class="top10-num" aria-hidden="true">${i+1}</span>
            <div class="card-img-box">
                <img src="${m.img.replace('/400/225','/300/450')}" alt="${m.title}" style="height:100%;width:auto;" loading="lazy">
            </div>
        </div>
    `;
}

function scrollRow(idx, dir) {
    const row = document.getElementById(`row-${idx}`);
    if (row) row.scrollBy({ left: dir * (row.offsetWidth * 0.75), behavior: 'smooth' });
}

// === NAVIGATION LOGIC ===
function setActiveNav(name) {
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.textContent.trim() === name) a.classList.add('active');
    });
}

function goHome(e) {
    if(e) e.preventDefault();
    setActiveNav('Home');
    renderRows();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCategory(e, cat) {
    if(e) e.preventDefault();
    
    let navName = '';
    let title = '';
    if (cat === 'Series') { navName = 'TV Shows'; title = 'TV Shows'; }
    else if (cat === 'Movies') { navName = 'Movies'; title = 'Movies'; }
    else if (cat === 'New') { navName = 'New & Popular'; title = 'New & Popular'; }
    
    setActiveNav(navName);
    
    const container = document.getElementById('main-content');
    const filtered = cat === 'New' ? MOVIES.filter(m => m.isNew) : MOVIES.filter(m => m.category === cat);
    
    container.innerHTML = `
        <div class="row-container" style="margin-top: 100px;">
            <h2 class="row-title">${title}</h2>
            <div style="display:flex; flex-wrap:wrap; gap:16px;">
                ${filtered.length ? filtered.map(m => renderCard(m)).join('') : '<p>No titles found in this category yet.</p>'}
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMyList(e) {
    if(e) e.preventDefault();
    setActiveNav('My List');
    
    const container = document.getElementById('main-content');
    const listMovies = MOVIES.filter(m => myList.has(m.id));
    
    container.innerHTML = `
        <div class="row-container" style="margin-top: 100px;">
            <h2 class="row-title">My List</h2>
            <div style="display:flex; flex-wrap:wrap; gap:16px;">
                ${listMovies.length ? listMovies.map(m => renderCard(m)).join('') : '<p>Your list is empty. Click the + icon on any movie to add it!</p>'}
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === MODAL ===
function openModal(id) {
    const m = MOVIES.find(x => x.id === id);
    if (!m) return;
    currentModalMovie = m;
    
    const modalImg = document.getElementById('modal-img');
    modalImg.src = m.heroImg;
    modalImg.alt = `${m.title} background`;
    
    document.getElementById('modal-title').textContent = m.title;
    
    const inList = myList.has(m.id);
    const listBtn = document.getElementById('modal-list-btn');
    listBtn.innerHTML = `<iconify-icon icon="${inList?'lucide:check':'lucide:plus'}" aria-hidden="true"></iconify-icon>`;
    listBtn.className = `btn-icon ${inList?'active':''}`;
    listBtn.setAttribute('aria-label', `${inList ? 'Remove from' : 'Add to'} My List`);
    
    document.querySelector('.modal-meta').innerHTML = `
        <span class="match">${m.match}% Match</span> | <span>${m.year}</span> | <span class="maturity">${m.rating}</span> | <span>${m.duration}</span>
    `;
    document.querySelector('.modal-desc').textContent = m.desc;
    document.querySelector('.modal-cast').innerHTML = `<span style="color:#fff">Genres: </span>${m.genre.join(', ')}`;
    
    document.getElementById('detail-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function toggleLike() {
    showToast('Thanks for your feedback!', 'lucide:thumbs-up');
}

// === PLAYER ===
function playVideo() {
    if (!currentModalMovie) return;
    closeModal();
    startPlayer(currentModalMovie);
}

function playVideoFor(id) {
    const m = MOVIES.find(x => x.id === id);
    if (!m) return;
    currentModalMovie = m;
    startPlayer(m);
}

function startPlayer(m) {
    const playerImg = document.getElementById('player-img');
    playerImg.src = m.heroImg;
    playerImg.alt = `Playing ${m.title}`;
    
    document.getElementById('video-player').classList.remove('hidden');
    document.body.style.cursor = 'none';
    isPlaying = true;
    let progress = 0;
    const bar = document.getElementById('player-progress');
    bar.value = 0;
    playerTimer = setInterval(() => {
        if (!isPlaying) return;
        progress += 0.2;
        if (progress >= 100) { clearInterval(playerTimer); }
        bar.value = progress;
    }, 100);
}

function closePlayer() {
    isPlaying = false;
    clearInterval(playerTimer);
    document.getElementById('video-player').classList.add('hidden');
    document.body.style.cursor = 'default';
}

function togglePlayPause() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('play-pause-btn');
    btn.innerHTML = `<iconify-icon icon="${isPlaying?'lucide:pause':'lucide:play'}" aria-hidden="true"></iconify-icon>`;
    btn.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video');
    if (isPlaying) showToast('Playing', 'lucide:play'); else showToast('Paused', 'lucide:pause');
}

function skipBack() { document.getElementById('player-progress').value = Math.max(0, parseFloat(document.getElementById('player-progress').value) - 5); }
function skipForward() { document.getElementById('player-progress').value = Math.min(100, parseFloat(document.getElementById('player-progress').value) + 5); }

// === LIST & SEARCH ===
function toggleMyList(id) {
    event.stopPropagation();
    if (myList.has(id)) {
        myList.delete(id);
        showToast('Removed from My List', 'lucide:minus-circle');
    } else {
        myList.add(id);
        showToast('Added to My List', 'lucide:plus-circle');
    }
    // Update modal button immediately
    if (currentModalMovie && currentModalMovie.id === id) {
        const inList = myList.has(id);
        const listBtn = document.getElementById('modal-list-btn');
        listBtn.innerHTML = `<iconify-icon icon="${inList?'lucide:check':'lucide:plus'}" aria-hidden="true"></iconify-icon>`;
        listBtn.className = `btn-icon ${inList?'active':''}`;
    }
    renderRows(); 
}

function toggleSearch() {
    const box = document.getElementById('search-box');
    box.classList.toggle('active');
    if (box.classList.contains('active')) {
        setActiveNav(''); // Deselect nav links
        document.getElementById('search-input').focus();
    } else {
        document.getElementById('search-input').value = '';
        handleSearch('');
    }
}

function closeSearch() {
    const box = document.getElementById('search-box');
    if (box.classList.contains('active')) {
        box.classList.remove('active');
        document.getElementById('search-input').value = '';
        handleSearch('');
    }
}

function handleSearch(query) {
    if (query.length > 2) {
        const results = MOVIES.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
        const container = document.getElementById('main-content');
        container.innerHTML = `
            <div class="row-container" style="margin-top: 100px;">
                <h2 class="row-title">Search Results</h2>
                <div style="display:flex; flex-wrap:wrap; gap:16px;">
                    ${results.length ? results.map(m => renderCard(m)).join('') : '<p>No results found.</p>'}
                </div>
            </div>
        `;
    } else if (query.length === 0) {
        goHome(null); // Revert to home view and active state
    }
}

function toggleMute() {
    const iconContainer = document.getElementById('mute-icon');
    const isMuted = iconContainer.getAttribute('data-muted') === 'true';
    
    if (isMuted) {
        iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
        iconContainer.setAttribute('data-muted', 'false');
        showToast('Unmuted', 'lucide:volume-2');
    } else {
        iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
        iconContainer.setAttribute('data-muted', 'true');
        showToast('Muted', 'lucide:volume-x');
    }
}

function toggleNotifications() {
    showToast('No new notifications', 'lucide:bell');
}

function toggleProfileMenu() {
    const dd = document.getElementById('profile-dropdown');
    dd.classList.toggle('hidden');
    if (!dd.classList.contains('hidden')) {
        dd.innerHTML = `
            <button class="dropdown-item" onclick="document.getElementById('profile-dropdown').classList.add('hidden')"><iconify-icon icon="lucide:user" aria-hidden="true"></iconify-icon> Manage Profiles</button>
            <button class="dropdown-item" onclick="document.getElementById('profile-dropdown').classList.add('hidden')"><iconify-icon icon="lucide:settings" aria-hidden="true"></iconify-icon> Account</button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" onclick="signOut()"><iconify-icon icon="lucide:log-out" aria-hidden="true"></iconify-icon> Sign out of Netfflix</button>
        `;
    }
}

function signOut() {
    document.getElementById('profile-dropdown').classList.add('hidden');
    document.getElementById('app').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
}

// === TOAST ===
function showToast(msg, icon = 'lucide:check-circle') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<iconify-icon icon="${icon}" style="font-size:20px; color:#E50914;" aria-hidden="true"></iconify-icon> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}