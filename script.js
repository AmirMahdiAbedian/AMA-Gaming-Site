
/* ==================================
   1. GAME DATABASE
================================== */

// Steam's public header artwork is used for the additional game cards.
// Images are loaded online; the rest of the site works locally.
const steamHeader = (appId) =>
    `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;

const games = [
    {
        id: "gta-vi",
        title: "Grand Theft Auto VI",
        category: "Action",
        image: "assets/images/gta-vi.jpg",
        description: "Explore the world of Leonida in the next chapter of the Grand Theft Auto series. Discover a huge open world, exciting missions and an unforgettable adventure."
    },
    {
        id: "spider-man-2",
        title: "Marvel's Spider-Man 2",
        category: "Action",
        image: "assets/images/spider-man-2.jpg",
        description: "Play as Peter Parker and Miles Morales as they protect New York City. Experience fast-paced combat, web-swinging and an exciting superhero story."
    },
    {
        id: "ghost-of-tsushima",
        title: "Ghost of Tsushima",
        category: "Action",
        image: "assets/images/ghost-of-tsushima.jpg",
        description: "Travel through beautiful landscapes in feudal Japan. Play as Jin Sakai and fight to protect your home while discovering the way of the samurai."
    },
    {
        id: "rdr2",
        title: "Red Dead Redemption 2",
        category: "Adventure",
        image: "assets/images/rdr2.jpg",
        description: "Experience a detailed open world in the American frontier. Follow Arthur Morgan and the Van der Linde gang through a memorable story."
    },
    {
        id: "hogwarts-legacy",
        title: "Hogwarts Legacy",
        category: "Adventure",
        image: "assets/images/hogwarts-legacy.jpg",
        description: "Discover the magical world of Hogwarts. Attend classes, learn spells and explore a large world full of secrets and adventures."
    },
    {
        id: "elden-ring",
        title: "Elden Ring",
        category: "RPG",
        image: "assets/images/elden-ring.jpg",
        description: "Explore the mysterious Lands Between, discover hidden locations and create your own character in a challenging fantasy adventure."
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        category: "RPG",
        image: "assets/images/cyberpunk-2077.jpg",
        description: "Enter Night City, a futuristic city full of technology, stories and choices. Play as V and shape your own journey."
    },
    {
        id: "forza-horizon-5",
        title: "Forza Horizon 5",
        category: "Racing",
        image: "assets/images/forza-horizon-5.jpg",
        description: "Drive hundreds of cars across the beautiful landscapes of Mexico. Take part in exciting races and explore an open driving world."
    },
    {
        id: "gran-turismo-7",
        title: "Gran Turismo 7",
        category: "Racing",
        image: "assets/images/gran-turismo-7.jpg",
        description: "Enjoy realistic driving, detailed cars and famous racing tracks. Build your collection and improve your driving skills."
    },
    {
        id: "fc-26",
        title: "EA SPORTS FC 26",
        category: "Sports",
        image: "assets/images/fc-26.jpg",
        description: "Build your football team, compete against other players and enjoy football with clubs and players from around the world."
    },
    {
        id: "nba-2k26",
        title: "NBA 2K26",
        category: "Sports",
        image: "assets/images/nba-2k26.jpg",
        description: "Experience basketball with realistic gameplay, exciting matches and different ways to build your basketball career."
    },
    {
        id: "civilization-vii",
        title: "Civilization VII",
        category: "Strategy",
        image: "assets/images/civilization-vii.jpg",
        description: "Build and develop your own civilization. Make decisions, manage resources and guide your people through different historical eras."
    },
    {
        id: "minecraft",
        title: "Minecraft",
        category: "Simulation",
        image: "assets/images/minecraft.jpg",
        description: "Explore a world made of blocks. Build amazing structures, collect resources and create your own adventures."
    },
    {
        id: "stardew-valley",
        title: "Stardew Valley",
        category: "Indie",
        image: "assets/images/stardew-valley.jpg",
        description: "Start a new life in the countryside. Grow crops, meet people, explore caves and build your own farm."
    },
    {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        category: "Action",
        image: steamHeader("2322010"),
        description: "Follow Kratos and Atreus through the Nine Realms in a cinematic adventure inspired by Norse mythology."
    },
    {
        id: "horizon-forbidden-west",
        title: "Horizon Forbidden West",
        category: "Action",
        image: steamHeader("2420110"),
        description: "Join Aloy on a journey across a distant future filled with remarkable landscapes, mysterious machines and new communities."
    },
    {
        id: "batman-arkham-knight",
        title: "Batman: Arkham Knight",
        category: "Action",
        image: steamHeader("208650"),
        description: "Protect Gotham City using detective skills, stealth, gadgets and the Batmobile in a story-driven superhero adventure."
    },
    {
        id: "sekiro",
        title: "Sekiro: Shadows Die Twice",
        category: "Action",
        image: steamHeader("814380"),
        description: "Explore a fantasy version of Sengoku-era Japan as a shinobi, mastering precise movement, timing and challenging encounters."
    },
    {
        id: "uncharted-legacy",
        title: "UNCHARTED: Legacy of Thieves Collection",
        category: "Action",
        image: steamHeader("1659420"),
        description: "Join cinematic treasure-hunting adventures packed with exploration, puzzles, memorable locations and character-driven stories."
    },
    {
        id: "doom-eternal",
        title: "DOOM Eternal",
        category: "Action",
        image: steamHeader("782330"),
        description: "A fast-paced science-fiction action game featuring energetic movement, dramatic environments and an intense soundtrack."
    },
    {
        id: "assassins-creed-mirage",
        title: "Assassin’s Creed Mirage",
        category: "Action",
        image: steamHeader("3035570"),
        description: "Explore the streets of ninth-century Baghdad as Basim in a focused historical adventure built around parkour, stealth and discovery."
    },
    {
        id: "the-last-of-us-part-1",
        title: "The Last of Us Part I",
        category: "Adventure",
        image: steamHeader("1888930"),
        description: "Experience a carefully told journey focused on two characters travelling through a changed world and learning to rely on each other."
    },
    {
        id: "tomb-raider-2013",
        title: "Tomb Raider",
        category: "Adventure",
        image: steamHeader("203160"),
        description: "Follow Lara Croft on her first major expedition, solving environmental puzzles and exploring a mysterious island."
    },
    {
        id: "it-takes-two",
        title: "It Takes Two",
        category: "Adventure",
        image: steamHeader("1426210"),
        description: "A creative two-player adventure where teamwork is essential and every new area introduces a different playful challenge."
    },
    {
        id: "sea-of-thieves",
        title: "Sea of Thieves",
        category: "Adventure",
        image: steamHeader("1172620"),
        description: "Set sail with a crew, explore islands, discover hidden stories and enjoy a shared pirate-themed world."
    },
    {
        id: "journey",
        title: "Journey",
        category: "Adventure",
        image: steamHeader("638230"),
        description: "Travel across a beautiful desert in a quiet, atmospheric adventure told through music, scenery and simple interactions."
    },
    {
        id: "life-is-strange-true-colors",
        title: "Life is Strange: True Colors",
        category: "Adventure",
        image: steamHeader("936790"),
        description: "Explore a story-driven small-town mystery where conversations, relationships and player choices shape the experience."
    },
    {
        id: "skyrim",
        title: "The Elder Scrolls V: Skyrim Special Edition",
        category: "RPG",
        image: steamHeader("489830"),
        description: "Explore a vast fantasy province, create your character, complete quests and uncover stories across a world of dragons and ancient ruins."
    },
    {
        id: "monster-hunter-rise",
        title: "Monster Hunter Rise",
        category: "RPG",
        image: steamHeader("1446780"),
        description: "Prepare for expeditions, learn different weapon styles, gather materials and craft equipment in a lively fantasy setting."
    },
    {
        id: "ff7-remake-intergrade",
        title: "FINAL FANTASY VII REMAKE INTERGRADE",
        category: "RPG",
        image: steamHeader("1462040"),
        description: "Follow Cloud and his companions through a reimagined version of Midgar in a cinematic role-playing adventure."
    },
    {
        id: "persona-5-royal",
        title: "Persona 5 Royal",
        category: "RPG",
        image: steamHeader("1687950"),
        description: "Balance everyday student life with stylish turn-based adventures, memorable characters and a supernatural story set in Tokyo."
    },
    {
        id: "dragons-dogma-2",
        title: "Dragon’s Dogma 2",
        category: "RPG",
        image: steamHeader("2054970"),
        description: "Create a hero, travel through a fantasy world with AI companions and discover quests, towns and unexpected encounters."
    },
    {
        id: "dark-souls-3",
        title: "DARK SOULS III",
        category: "RPG",
        image: steamHeader("374320"),
        description: "Explore a mysterious dark-fantasy world with interconnected locations, distinctive characters and demanding action role-playing systems."
    },
    {
        id: "forza-horizon-4",
        title: "Forza Horizon 4",
        category: "Racing",
        image: steamHeader("1293830"),
        description: "Drive a large collection of cars through a changing recreation of the British countryside and take part in seasonal events."
    },
    {
        id: "nfs-heat",
        title: "Need for Speed Heat",
        category: "Racing",
        image: steamHeader("1222680"),
        description: "Race through the streets of Palm City, customise cars and take on a range of daytime and nighttime driving events."
    },
    {
        id: "f1-24",
        title: "F1 24",
        category: "Racing",
        image: steamHeader("2488620"),
        description: "Experience an officially licensed Formula racing season with detailed circuits, teams and several ways to compete."
    },
    {
        id: "assetto-corsa",
        title: "Assetto Corsa",
        category: "Racing",
        image: steamHeader("244210"),
        description: "Enjoy a driving simulator focused on vehicle handling, track detail and a wide selection of performance cars."
    },
    {
        id: "the-crew-2",
        title: "The Crew 2",
        category: "Racing",
        image: steamHeader("646910"),
        description: "Explore a large open-world version of the United States using cars, motorcycles, boats and aircraft."
    },
    {
        id: "trackmania",
        title: "Trackmania",
        category: "Racing",
        image: steamHeader("2225070"),
        description: "Build and race on creative tracks where precision, quick reactions and clever course design make every run different."
    },
    {
        id: "efootball",
        title: "eFootball",
        category: "Sports",
        image: steamHeader("1665460"),
        description: "Play digital football with clubs, teams and players, and build a squad for different match modes."
    },
    {
        id: "rocket-league",
        title: "Rocket League",
        category: "Sports",
        image: steamHeader("252950"),
        description: "Combine football-style goals with rocket-powered cars in short, skill-based matches."
    },
    {
        id: "nba-2k25",
        title: "NBA 2K25",
        category: "Sports",
        image: steamHeader("2878980"),
        description: "Play basketball with detailed courts, teams and player modes, or build a career across different basketball experiences."
    },
    {
        id: "wwe-2k24",
        title: "WWE 2K24",
        category: "Sports",
        image: steamHeader("2315690"),
        description: "Step into a large roster of wrestling performers and enjoy match types, customisation and showcase-style modes."
    },
    {
        id: "fc-25",
        title: "EA SPORTS FC 25",
        category: "Sports",
        image: steamHeader("2669320"),
        description: "Build a football squad, play different match formats and experience club and international football in a modern sports game."
    },
    {
        id: "age-of-empires-4",
        title: "Age of Empires IV",
        category: "Strategy",
        image: steamHeader("1466860"),
        description: "Build a civilisation, gather resources, develop technology and guide armies through different historical campaigns."
    },
    {
        id: "total-war-warhammer-3",
        title: "Total War: WARHAMMER III",
        category: "Strategy",
        image: steamHeader("1142710"),
        description: "Lead fantasy factions across a strategic campaign map and manage large real-time battles in a richly imagined setting."
    },
    {
        id: "xcom-2",
        title: "XCOM 2",
        category: "Strategy",
        image: steamHeader("268500"),
        description: "Lead a small resistance organisation, plan turn-based missions and make careful choices about a team and its equipment."
    },
    {
        id: "crusader-kings-3",
        title: "Crusader Kings III",
        category: "Strategy",
        image: steamHeader("1158310"),
        description: "Guide a medieval dynasty through diplomacy, alliances, family stories and long-term strategic decisions."
    },
    {
        id: "manor-lords",
        title: "Manor Lords",
        category: "Strategy",
        image: steamHeader("1363080"),
        description: "Design and grow a medieval settlement, manage its resources and guide its development across the seasons."
    },
    {
        id: "civilization-6",
        title: "Sid Meier’s Civilization VI",
        category: "Strategy",
        image: steamHeader("289070"),
        description: "Lead a civilisation from its early beginnings into later eras through exploration, research, culture and diplomacy."
    },
    {
        id: "sims-4",
        title: "The Sims 4",
        category: "Simulation",
        image: steamHeader("1222670"),
        description: "Create characters, design homes and guide everyday stories in a flexible life simulation."
    },
    {
        id: "planet-zoo",
        title: "Planet Zoo",
        category: "Simulation",
        image: steamHeader("703080"),
        description: "Build and manage a wildlife park, design habitats and look after the needs of animals and visitors."
    },
    {
        id: "microsoft-flight-simulator",
        title: "Microsoft Flight Simulator",
        category: "Simulation",
        image: steamHeader("1250410"),
        description: "Explore a detailed digital world from the cockpit of aircraft, with realistic weather and flight environments."
    },
    {
        id: "euro-truck-simulator-2",
        title: "Euro Truck Simulator 2",
        category: "Simulation",
        image: steamHeader("227300"),
        description: "Drive across a detailed network of European roads, deliver cargo and gradually expand a transport business."
    },
    {
        id: "house-flipper-2",
        title: "House Flipper 2",
        category: "Simulation",
        image: steamHeader("1190970"),
        description: "Renovate, decorate and redesign homes by completing creative building and interior-design projects."
    },
    {
        id: "powerwash-simulator",
        title: "PowerWash Simulator",
        category: "Simulation",
        image: steamHeader("1290000"),
        description: "Complete relaxing cleaning jobs, restore a variety of locations and enjoy a calm task-based simulation."
    },
    {
        id: "hades",
        title: "Hades",
        category: "Indie",
        image: steamHeader("1145360"),
        description: "Play as Zagreus in a stylish action roguelike where each run brings new characters, upgrades and story moments."
    },
    {
        id: "hollow-knight",
        title: "Hollow Knight",
        category: "Indie",
        image: steamHeader("367520"),
        description: "Explore a hand-drawn underground kingdom, discover hidden paths and meet unusual characters in a challenging adventure."
    },
    {
        id: "celeste",
        title: "Celeste",
        category: "Indie",
        image: steamHeader("504230"),
        description: "Climb a mysterious mountain through precise platforming challenges and a thoughtful story about perseverance."
    },
    {
        id: "undertale",
        title: "Undertale",
        category: "Indie",
        image: steamHeader("391540"),
        description: "Discover a quirky underground world where conversations and player choices can change how encounters unfold."
    },
    {
        id: "cuphead",
        title: "Cuphead",
        category: "Indie",
        image: steamHeader("268910"),
        description: "Enjoy hand-drawn cartoon visuals, jazz-inspired music and precise run-and-gun platforming challenges."
    },
    {
        id: "ori-and-the-blind-forest",
        title: "Ori and the Blind Forest",
        category: "Indie",
        image: steamHeader("261570"),
        description: "Travel through a beautiful forest as Ori in a platform adventure built around exploration, movement and music."
    },
    {
        id: "dead-cells",
        title: "Dead Cells",
        category: "Indie",
        image: steamHeader("588650"),
        description: "Explore changing levels, discover new abilities and improve your approach in a fast-moving action roguelike."
    },
    {
        id: "terraria",
        title: "Terraria",
        category: "Indie",
        image: steamHeader("105600"),
        description: "Dig, build, craft and explore a colourful 2D world filled with secrets, creative possibilities and distinct environments."
    },
    {
        id: "balatro",
        title: "Balatro",
        category: "Indie",
        image: steamHeader("2379780"),
        description: "Create clever poker-inspired combinations in a strategic card game built around scoring, upgrades and surprising synergies."
    },
    {
        id: "slay-the-spire",
        title: "Slay the Spire",
        category: "Indie",
        image: steamHeader("646570"),
        description: "Climb a mysterious tower by building a card deck, choosing upgrades and adapting your strategy during each run."
    }
];


/* ==================================
   GAME IMAGE SOURCES
   These are remote image URLs, so an internet connection is needed.
   The Home section and all existing site logic remain unchanged.
================================== */

const gameImageSources = {
    "gta-vi": "https://media.altchar.com/prod/images/gm_featured_image/06332c0dcc1e-gta-6-vice-city.jpg",
    "spider-man-2": "https://m.media-amazon.com/images/I/81HhdBzAvSL.jpg",
    "ghost-of-tsushima": "https://i.playground.ru/p/P_HdnIuJtH6gV8nKEIpxMg.jpeg",
    "rdr2": "https://img.goodfon.ru/wallpaper/nbig/2/50/game-rdr2-red-dead-redemption-2-xbox-one-x-uhd-hdr-4k-pho-18.webp",
    "hogwarts-legacy": "https://assets.st-note.com/production/uploads/images/215804080/d42367c7dbff48813ed1329bb3395f1f.jpeg",
    "elden-ring": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    "cyberpunk-2077": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    "forza-horizon-5": "https://media.gamestop.com/i/gamestop/11148773?fmt=auto&h=768&w=768",
    "gran-turismo-7": "https://allsell.am/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/_/p/_playstation5_gran_turismo_7_the_real_driving_simulator.jpg",
    "fc-26": "https://vgbr.com/wp-content/uploads/2025/11/fc26-key-art.png",
    "nba-2k26": "https://www.cjs-cdkeys.com/product_images/ghostProducts/369993.jpg",
    "civilization-vii": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/header.jpg",
    "minecraft": "https://media.karousell.com/media/photos/products/2023/5/31/minecraft_official_activation__1685544165_713e293e_progressive.jpg",
    "stardew-valley": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg"
};

// Replace the temporary local image paths with the selected game artwork.
games.forEach(game => {
    const imageUrl = gameImageSources[game.id];

    if (imageUrl) {
        game.image = imageUrl;
    }
});


/* ==================================
   2. WEBSITE VARIABLES
================================== */

const gamesGrid = document.getElementById("gamesGrid");
const favoritesGrid = document.getElementById("favoritesGrid");

const categoryTitle = document.getElementById("categoryTitle");
const gameCount = document.getElementById("gameCount");
const gameDetails = document.getElementById("gameDetails");

const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");

const backButton = document.getElementById("backButton");

let currentView = "home";
let previousView = "home";
let currentCategory = "Action";
let activeGameId = null;


/* ==================================
   3. LOAD SAVED FAVORITES
================================== */

let favorites = [];

try {
    const savedFavorites = JSON.parse(
        localStorage.getItem("ama-favorites") || "[]"
    );

    if (Array.isArray(savedFavorites)) {
        favorites = savedFavorites;
    }
} catch (error) {
    console.log("Could not load saved favorites.");
}


function saveFavorites() {
    localStorage.setItem(
        "ama-favorites",
        JSON.stringify(favorites)
    );
}


/* ==================================
   4. PAGE NAVIGATION
================================== */

function showView(viewName, clickedButton = null) {

    document.querySelectorAll(".view").forEach(view => {
        view.classList.remove("active");
    });

    const selectedView = document.getElementById(
        viewName + "View"
    );

    if (selectedView) {
        selectedView.classList.add("active");
    }

    if (clickedButton) {

        document.querySelectorAll(".nav-item").forEach(button => {
            button.classList.remove("active");
        });

        clickedButton.classList.add("active");
    }

    currentView = viewName;
}


/* ==================================
   5. CREATE GAME CARDS
================================== */

function renderGames(gameList, container) {

    container.innerHTML = "";

    if (gameList.length === 0) {
        container.innerHTML =
            "<p>No games found.</p>";

        return;
    }

    gameList.forEach(game => {

        const isFavorite = favorites.includes(game.id);

        const card = document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-image-wrap">

                <img
                    src="${game.image}"
                    alt="${game.title}"
                >

                <div class="image-placeholder" hidden>
                    ${game.title}
                </div>

            </div>

            <h3>${game.title}</h3>

            <button
                class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
                type="button"
                aria-label="Toggle favorite"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>
        `;

        // Handle missing image files

        const image = card.querySelector("img");
        const placeholder = card.querySelector(".image-placeholder");

        image.addEventListener("error", () => {
            image.hidden = true;
            placeholder.hidden = false;
        });

        // Favorite button

        const favoriteButton = card.querySelector(".favorite-btn");

        favoriteButton.addEventListener("click", event => {

            event.stopPropagation();

            toggleFavorite(game.id);

            renderGames(gameList, container);
        });

        // Open game details

        card.addEventListener("click", event => {

            if (!event.target.closest(".favorite-btn")) {
                openGame(game.id);
            }

        });

        container.appendChild(card);

    });
}


/* ==================================
   6. CATEGORY PAGES
================================== */

function updateGameCount(count) {
    if (!gameCount) return;

    gameCount.textContent = `${count} ${count === 1 ? "game" : "games"}`;
}


function openCategory(category, clickedButton = null) {

    currentCategory = category;

    categoryTitle.textContent = category + " Games";

    const categoryGames = games.filter(game => {
        return game.category === category;
    });

    updateGameCount(categoryGames.length);
    renderGames(categoryGames, gamesGrid);

    showView("category", clickedButton);
}


/* ==================================
   7. FAVORITES SYSTEM
================================== */

function toggleFavorite(gameId) {

    if (favorites.includes(gameId)) {

        favorites = favorites.filter(id => {
            return id !== gameId;
        });

    } else {

        favorites.push(gameId);

    }

    saveFavorites();

}


function openFavorites(clickedButton = null) {

    const favoriteGames = games.filter(game => {
        return favorites.includes(game.id);
    });

    renderGames(favoriteGames, favoritesGrid);

    showView("favorites", clickedButton);
}


/* ==================================
   8. GAME DETAILS PAGE
================================== */

function openGame(gameId) {

    const game = games.find(item => {
        return item.id === gameId;
    });

    if (!game) {
        return;
    }

    previousView = currentView;
    activeGameId = gameId;

    showGameDetails(game);
    showView("details");

}


function showGameDetails(game) {

    const isFavorite = favorites.includes(game.id);

    gameDetails.innerHTML = `

        <div class="details-image-wrap">

            <img
                src="${game.image}"
                alt="${game.title}"
            >

            <div class="image-placeholder" hidden>
                ${game.title}
            </div>

            <button
                class="favorite-btn details-favorite-btn
                ${isFavorite ? "is-favorite" : ""}"
                type="button"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>

        </div>

        <h1>${game.title}</h1>

        <p><strong>Category:</strong> ${game.category}</p>

        <p>${game.description}</p>

    `;

    const detailImage = gameDetails.querySelector("img");

    detailImage.addEventListener("error", () => {
        detailImage.hidden = true;
        gameDetails.querySelector(".image-placeholder").hidden = false;
    });

    const favoriteButton = gameDetails.querySelector(".favorite-btn");

    favoriteButton.addEventListener("click", () => {

        toggleFavorite(game.id);

        showGameDetails(game);

    });

}


/* ==================================
   9. SEARCH SYSTEM
================================== */

searchInput.addEventListener("input", () => {

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {

        showView("home",
            document.querySelector('[data-view="home"]')
        );

        return;
    }

    const results = games.filter(game => {

        return (
            game.title.toLowerCase().includes(query) ||
            game.category.toLowerCase().includes(query)
        );

    });

    categoryTitle.textContent = "Search Results";
    updateGameCount(results.length);

    renderGames(results, gamesGrid);

    showView("category");

});


/* ==================================
   10. NAVIGATION BUTTONS
================================== */

document.querySelectorAll("[data-view]").forEach(button => {

    button.addEventListener("click", () => {

        const viewName = button.dataset.view;

        if (viewName === "favorites") {
            openFavorites(button);
            return;
        }

        showView(viewName, button);

    });

});


document.querySelectorAll("[data-category]").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        openCategory(category, button);

    });

});


/* ==================================
   11. BACK BUTTON
================================== */

backButton.addEventListener("click", () => {

    showView(previousView);

    if (previousView === "category") {
        openCategory(currentCategory);
    }

    if (previousView === "favorites") {
        openFavorites();
    }

});


/* ==================================
   12. LIGHT & DARK MODE
================================== */

function updateThemeButton() {

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

}


// Load saved theme

const savedTheme = localStorage.getItem("ama-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeButton();


// Change theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkModeEnabled =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "ama-theme",
        darkModeEnabled ? "dark" : "light"
    );

    updateThemeButton();

});


/* ==================================
   13. INITIAL PAGE
================================== */

showView(
    "home",
    document.querySelector('[data-view="home"]')
);

console.log("AMA Gaming Site is ready!");
