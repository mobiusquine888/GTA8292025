<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTA6FastLane - Ultimate GTA 6 Countdown Hub</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>">
    
    <style>
        /* GTA 6 Beta Banner Styles */
        #beta-banner-close {
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 1.2rem;
            line-height: 1;
            color: #ffcc00;
            text-shadow: 0 0 6px rgba(255, 204, 0, 0.8);
            padding: 4px 8px;
        }
        
        #beta-banner-close:hover {
            color: #ffffff;
        }
        
        /* Disclaimer Banner Styles */
        #disclaimer-banner-close {
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 1.2rem;
            line-height: 1;
            color: #ffcc00;
            text-shadow: 0 0 6px rgba(255, 204, 0, 0.8);
            padding: 4px 8px;
            margin-left: 10px;
        }
        
        #disclaimer-banner-close:hover {
            color: #ffffff;
        }

        /* Beta Banner Mobile Fix */
        @media (max-width: 768px) {
            #beta-banner {
                padding: 0.5rem;
                font-size: 0.9rem;
            }
            
            #beta-banner > div {
                flex-direction: column;
                gap: 0.5rem;
                text-align: center;
            }
        }

        /* Feedback Button Glow */
        #feedbackBtnGlow {
            border: none;
            background: #ff0055;
            color: white;
            padding: .45rem .9rem;
            border-radius: .4rem;
            cursor: pointer;
            font-weight: bold;
            text-shadow: 0 0 4px rgba(0,0,0,0.7);
            box-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055;
            animation: neonPulse 1.8s infinite alternate;
        }
        
        @keyframes neonPulse {
            from { 
                box-shadow: 0 0 6px #ff0055, 0 0 12px #ff0055, 0 0 20px #ff0055; 
                transform: scale(1);
            }
            to { 
                box-shadow: 0 0 12px #ff0055, 0 0 24px #ff0055, 0 0 36px #ff0055; 
                transform: scale(1.05);
            }
        }

        :root {
            --primary-color: #00ffa2;
            --secondary-color: #ff007c;
            --accent-color: #8a2be2;
            --gold-color: #ffd700;
            --premium-color: #ff6b35;
            --success-color: #2ed573;
            --warning-color: #ffa502;
            --danger-color: #ff4757;
            --text-color: #f5f5f5;
            --bg-color: #0a0a0a;
            --card-bg: #1a1a1a;
            --border-color: #2a2a2a;
            --shadow: 0 4px 25px rgba(0,0,0,0.8);
            --gradient-primary: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            --gradient-premium: linear-gradient(135deg, var(--gold-color) 0%, var(--premium-color) 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background: #0a0a0a;
            color: var(--text-color);
            min-height: 100vh;
            padding-bottom: 70px;
        }

        /* Night Mode Theme */
        body.night-mode {
            --primary-color: #ffffff !important;
            --secondary-color: #ffffff !important;
            --accent-color: #ffffff !important;
            --gold-color: #ffffff !important;
            --premium-color: #ffffff !important;
            --success-color: #ffffff !important;
            --warning-color: #ffffff !important;
            --danger-color: #ffffff !important;
            --text-color: #ffffff !important;
            --bg-color: #000000 !important;
            --card-bg: #000000 !important;
            --border-color: #333333 !important;
            --shadow: 0 4px 25px rgba(255,255,255,0.1) !important;
            --gradient-primary: linear-gradient(135deg, #ffffff 0%, #cccccc 100%) !important;
            --gradient-premium: linear-gradient(135deg, #ffffff 0%, #cccccc 100%) !important;
            background: #000000 !important;
            background-image: none !important;
        }

        body.night-mode .header {
            background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%) !important;
            color: #000000 !important;
        }

        body.night-mode .stat-card,
        body.night-mode .tab-content > div,
        body.night-mode [style*="background: var(--card-bg)"] {
            background: #000000 !important;
            border: 1px solid #333333 !important;
        }

        .header {
            background: var(--gradient-primary);
            color: white;
            padding: 1rem;
            text-align: center;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
            transition: all 0.3s ease;
        }

        .header.minimal {
            padding: 0.5rem 1rem;
        }

        .header.minimal .user-status-container,
        .header.minimal .action-buttons,
        .header.minimal .live-activity,
        .header.minimal .countdown-container,
        .header.minimal .achievement-showcase,
        .header.minimal .trailer-link {
            display: none;
        }

        .header.minimal h1 {
            font-size: 1.5rem;
            margin: 0;
        }

        .header h1 {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            margin-bottom: 0.5rem;
            font-weight: 900;
            cursor: pointer;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.1); }
            to { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.3); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .user-status-container {
            position: absolute;
            top: 4rem;
            left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .user-status {
            background: rgba(255,255,255,0.25);
            padding: 0.6rem 1.2rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .action-buttons {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
            flex-direction: column;
        }

        .action-btn {
            background: rgba(255,255,255,0.3);
            border: 2px solid rgba(255,255,255,0.5);
            color: white;
            padding: 0.75rem;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .action-btn:hover {
            background: rgba(255,255,255,0.5);
            transform: scale(1.1);
        }

        .countdown-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 0.5rem;
            margin: 1rem 0;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 1rem;
        }

        .countdown-item {
            background: rgba(255,255,255,0.15);
            border-radius: 12px;
            padding: 1rem 0.5rem;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.2);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .countdown-item:hover {
            transform: scale(1.05);
            background: rgba(255,255,255,0.25);
        }

        .countdown-number {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 900;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            display: block;
        }

        .countdown-label {
            font-size: clamp(0.7rem, 2vw, 0.9rem);
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.9;
            font-weight: 600;
        }

        .live-activity {
            background: rgba(46, 213, 115, 0.1);
            border: 1px solid var(--success-color);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--success-color);
            margin: 0.5rem auto;
            max-width: 400px;
        }

        .achievement-showcase {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
            flex-wrap: wrap;
        }

        .achievement {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient-premium);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .achievement:hover {
            transform: scale(1.2);
        }

        .achievement.locked {
            background: rgba(255,255,255,0.1);
            opacity: 0.3;
        }

        .tabs-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--card-bg);
            border-top: 2px solid var(--border-color);
            z-index: 1000;
            box-shadow: 0 -4px 25px rgba(0,0,0,0.3);
        }

        .tabs {
            display: flex;
            justify-content: space-around;
            padding: 0.5rem 0;
            max-width: 1200px;
            margin: 0 auto;
        }

        .tab {
            background: transparent;
            border: none;
            color: var(--text-color);
            padding: 0.3rem 0.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            font-size: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.15rem;
            min-width: 36px;
            flex: 1;
            opacity: 0.7;
        }

        .tab:hover {
            opacity: 1;
            color: var(--primary-color);
        }

        .tab.active {
            color: var(--primary-color);
            opacity: 1;
        }

        .tab .tab-icon {
            font-size: 1rem;
            display: block;
        }

        .tab .tab-label {
            font-size: 0.45rem;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        .tab.premium .tab-icon::after {
            content: '👑';
            position: absolute;
            font-size: 0.6rem;
            margin-left: -0.25rem;
            margin-top: -0.25rem;
        }

        .content-area {
            padding: 1rem 1rem 170px 1rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .tab-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .viral-challenge {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 15px;
            padding: 2rem;
            margin: 1rem 0;
            text-align: center;
            color: white;
        }

        .referral-system {
            background: var(--gradient-primary);
            color: white;
            border-radius: 15px;
            padding: 2rem;
            margin: 1rem 0;
            text-align: center;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 1rem;
            margin: 1rem 0;
        }

        .stat-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem 1rem;
            text-align: center;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            border-top: 4px solid var(--primary-color);
            cursor: pointer;
        }

        .stat-card:hover {
            transform: translateY(-3px) scale(1.02);
        }

        .stat-card.premium {
            border-top-color: var(--gold-color);
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 107, 53, 0.05));
        }

        .stat-number {
            font-size: clamp(1.5rem, 4vw, 2rem);
            font-weight: 800;
            color: var(--primary-color);
            display: block;
        }

        .stat-card.premium .stat-number {
            color: var(--gold-color);
        }

        .floating-btn {
            background: var(--gradient-primary);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 15px 20px;
            cursor: pointer;
            box-shadow: var(--shadow);
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .floating-btn:hover {
            transform: scale(1.1);
        }

        .floating-btn.premium {
            background: var(--gradient-premium);
        }

        .floating-actions {
            position: fixed;
            bottom: 80px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 1000;
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow);
            z-index: 1000;
            display: none;
            max-width: calc(100vw - 40px);
            font-size: 0.9rem;
        }

        .trailer-link:hover .play-button {
            transform: translate(-50%, -50%) scale(1.1);
            background: rgba(255,0,0,1);
        }

        .trailer-link:hover .overlay {
            opacity: 1;
        }

        .trailer-link:hover > div {
            transform: scale(1.02);
        }

        @media (max-width: 768px) {
            .user-status-container,
            .action-buttons {
                position: static;
                margin: 0.5rem 0;
            }

            .action-buttons {
                flex-direction: row;
                justify-content: center;
            }

            .countdown-container {
                grid-template-columns: repeat(4, 1fr);
                gap: 0.3rem;
                padding: 0 0.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- GTA 6 Always-On-Top Beta Banner -->
    <div id="beta-banner" role="region" aria-label="Beta notice"
         style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          display: none;
          background: rgba(20, 20, 20, 0.97);
          color: #f0f0f0;
          border-bottom: 2px solid #ff0055;
          font-family: 'Trebuchet MS', Impact, system-ui, sans-serif;
          letter-spacing: 0.5px;
          text-shadow: 0 0 4px rgba(255,0,85,0.8);
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.6s ease, opacity 0.6s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.6);
         ">
      <div style="
          max-width: 1100px; margin: 0 auto; padding: 1rem 1rem;
          display: flex; align-items: center; gap:.75rem; justify-content: space-between;
         ">
        <div style="display:flex; align-items:center; gap:.6rem; font-size: 1rem;">
          <span aria-hidden="true" style="font-size: 1.2rem; color:#ff0055;">⚠️</span>
          <strong style="color:#ffcc00;">Beta version — we're testing!</strong>
          <span>Feedback appreciated.</span>
        </div>
        <div style="display:flex; align-items:center; gap:.5rem;">
          <button id="feedbackBtnGlow"
                  onclick="document.getElementById('feedbackBtn').click()">
            Give Feedback
          </button>
          <button id="beta-banner-close" aria-label="Dismiss beta banner">✕</button>
        </div>
      </div>
    </div>

    <header class="header">
        <div class="user-status-container">
            <div class="user-status">
                <span id="userLevel">Insider</span>
            </div>
            <div class="user-status">
                XP: <span id="userXP">1,247</span> | Coins: <span id="userCoins">850</span>
            </div>
        </div>
        
        <div class="action-buttons">
            <button class="action-btn" onclick="toggleTheme()" id="themeToggle" title="Toggle Theme">🌙</button>
            <button class="action-btn" onclick="showNotification('Achievements feature coming soon!')" title="Achievements">🏆</button>
            <button class="action-btn" onclick="showNotification('Notifications feature coming soon!')" title="Notifications">🔔</button>
            <button class="action-btn" onclick="showNotification('Wallet feature coming soon!')" title="Wallet">💰</button>
        </div>
        
        <!-- Games button positioned with floating actions -->
        <button style="background: var(--gradient-primary); color: white; border: none; border-radius: 50%; width: 100px; height: 100px; cursor: pointer; box-shadow: var(--shadow); font-size: 2.5rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; position: fixed; bottom: 80px; left: 20px; z-index: 1000;" onclick="showTab('challenges')" title="Mini-Games" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🎯</button>
        
        <h1 onclick="showNotification('Easter egg activated!')">🎮 GTA6FastLane</h1>
        
        <div class="live-activity" id="liveActivity">
            🔴 LIVE: <span id="onlineCount">12,847</span> fans online | Limited event active!
        </div>
        
       <div class="trailer-link" style="max-width: 600px; margin: 1rem auto; position: relative;">
    <!-- Preview Card -->
    <div id="trailerPreview" style="position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: 12px; cursor: pointer; transition: transform 0.3s ease;">
        <div style="position: absolute; inset: 0; background: linear-gradient(45deg, #FF6B6B 0%, #4ECDC4 25%, #45B7D1 50%, #96CEB4 75%, #FFEAA7 100%); display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); z-index: 2;">
                <div style="font-family: 'Montserrat', sans-serif; font-size: clamp(1.2rem, 3vw, 2.5rem); font-weight: 900; margin-bottom: 0.5rem; letter-spacing: 2px;">GRAND THEFT AUTO</div>
                <div style="font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; margin-bottom: 0.5rem; text-shadow: 3px 3px 6px rgba(0,0,0,0.9);">VI</div>
                <div style="font-size: clamp(0.8rem, 2vw, 1.2rem); opacity: 0.9; font-weight: 600;">SPRING 2025</div>
                <div style="font-size: clamp(0.7rem, 1.8vw, 1rem); opacity: 0.8; margin-top: 0.5rem;">Jason & Lucia • Vice City</div>
            </div>

            <div style="position: absolute; top: 20px; left: 20px; width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; animation: float 3s ease-in-out infinite;"></div>
            <div style="position: absolute; bottom: 30px; right: 30px; width: 25px; height: 25px; background: rgba(255,255,255,0.15); border-radius: 50%; animation: float 2s ease-in-out infinite reverse;"></div>
            <div style="position: absolute; top: 50%; left: 15px; width: 15px; height: 15px; background: rgba(255,255,255,0.1); border-radius: 50%; animation: float 2.5s ease-in-out infinite;"></div>

            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%); z-index: 1;"></div>
        </div>

        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,0,0,0.9); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; transition: all 0.3s ease; z-index: 10; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" class="play-button">▶</div>
        <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.8); color: white; padding: 6px 10px; border-radius: 4px; font-size: 12px; font-weight: 600;">Official Trailer</div>
        <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">1:30</div>
        <div style="position: absolute; inset: 0; opacity: 0; transition: opacity 0.3s ease; background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);" class="overlay"></div>
    </div>

    <!-- YouTube iframe (hidden until click) -->
    <div id="trailerPlayer" style="display:none; aspect-ratio:16/9; border-radius:12px; overflow:hidden;">
        <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VQRLujxTm3c?autoplay=1"
            title="GTA 6 Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy">
        </iframe>
    </div>

    <p style="text-align: center; margin-top: 0.5rem; color: var(--text-color); font-size: 0.9rem; font-weight: 600;">Watch GTA 6 Official Trailer - Jason & Lucia</p>
</div>

<script>
  document.getElementById("trailerPreview").addEventListener("click", function() {
    document.getElementById("trailerPreview").style.display = "none";
    document.getElementById("trailerPlayer").style.display = "block";
  });
</script>

        
        <div class="countdown-container">
            <div class="countdown-item" onclick="awardRewards(5, 2, 'Countdown clicked!')">
                <span class="countdown-number" id="days">273</span>
                <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-item" onclick="awardRewards(5, 2, 'Countdown clicked!')">
                <span class="countdown-number" id="hours">15</span>
                <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-item" onclick="awardRewards(5, 2, 'Countdown clicked!')">
                <span class="countdown-number" id="minutes">42</span>
                <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-item" onclick="awardRewards(5, 2, 'Countdown clicked!')">
                <span class="countdown-number" id="seconds">18</span>
                <div class="countdown-label">Seconds</div>
            </div>
        </div>
        
        <div class="achievement-showcase" id="achievementShowcase">
            <div class="achievement" title="Early Bird">🦅</div>
            <div class="achievement" title="Streak Master">🔥</div>
            <div class="achievement locked" title="Prediction King">👑</div>
            <div class="achievement locked" title="Viral Sharer">📱</div>
            <div class="achievement locked" title="Crypto Collector">💎</div>
        </div>
    </header>

    <div class="tabs-container">
        <nav class="tabs">
            <button class="tab active" onclick="showTab('home')" data-tab="home">
                <span class="tab-icon">🏠</span>
                <span class="tab-label">Home</span>
            </button>
            <button class="tab" onclick="showTab('news')" data-tab="news">
                <span class="tab-icon">📰</span>
                <span class="tab-label">News</span>
            </button>
            <button class="tab" onclick="showTab('youtube')" data-tab="youtube">
                <span class="tab-icon">📺</span>
                <span class="tab-label">GTA</span>
            </button>
            <button class="tab" onclick="showTab('rumors')" data-tab="rumors">
                <span class="tab-icon">🔥</span>
                <span class="tab-label">Rumors</span>
            </button>
            <button class="tab" onclick="showTab('trevor')" data-tab="trevor">
                <span class="tab-icon">😈</span>
                <span class="tab-label">Trevor</span>
            </button>
            <button class="tab" onclick="showTab('theories')" data-tab="theories">
                <span class="tab-icon">🧠</span>
                <span class="tab-label">Theories</span>
            </button>
            <button class="tab" onclick="showTab('rdr2')" data-tab="rdr2">
                <span class="tab-icon">🤠</span>
                <span class="tab-label">RDR2</span>
            </button>
            <button class="tab" onclick="showTab('chat')" data-tab="chat">
                <span class="tab-icon">💬</span>
                <span class="tab-label">Chat</span>
            </button>
            <button class="tab" onclick="showTab('shop')" data-tab="shop">
                <span class="tab-icon">🛒</span>
                <span class="tab-label">Shop</span>
            </button>
            <button class="tab premium" onclick="showTab('premium')" data-tab="premium">
                <span class="tab-icon">👑</span>
                <span class="tab-label">Premium</span>
            </button>
        </nav>
    </div>

    <main class="content-area">
        <!-- Home Tab -->
        <div id="home" class="tab-content active">
            <div class="viral-challenge">
                <h2>🚀 VIRAL CHALLENGE ACTIVE!</h2>
                <p><strong>Share GTA6FastLane and earn 500 coins + exclusive NFT!</strong></p>
                <button class="floating-btn" style="position: static; margin: 1rem auto; display: flex;" onclick="shareForReward()">
                    🎁 Share & Earn Rewards
                </button>
            </div>

            <div class="referral-system">
                <h3>💰 Refer Friends & Earn</h3>
                <p>Each friend earns you <strong>100 coins + 50 XP</strong></p>
                <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 1.2rem; font-weight: bold; margin: 1rem 0; letter-spacing: 2px; cursor: pointer;" onclick="copyReferralCode()">
                    GTAFL-<span id="userReferralCode">A7B9X2</span>
                </div>
                <small>Click to copy your referral code</small>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">52,847</span>
                    <div>Total Members</div>
                </div>
                <div class="stat-card premium">
                    <span class="stat-number">8,234</span>
                    <div>Premium Members</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">1,247</span>
                    <div>Shares Today</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">15,678</span>
                    <div>NFTs Minted</div>
                </div>
            </div>
        </div>

        <!-- News Tab -->
        <div id="news" class="tab-content">
            <style>
                .news-header {
                    background: var(--gradient-primary);
                    padding: 2rem;
                    border-radius: 15px;
                    margin-bottom: 2rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .news-header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%);
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
                
                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 1.5rem;
                    padding: 0 1rem;
                }
                
                .news-card {
                    background: var(--card-bg);
                    border: 2px solid var(--border-color);
                    border-radius: 15px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    position: relative;
                    cursor: pointer;
                }
                
                .news-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 30px rgba(0,255,162,0.3);
                }
                
                .news-thumbnail {
                    width: 100%;
                    height: 150px;
                    background: linear-gradient(135deg, var(--primary-color)20, var(--secondary-color)20);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .news-thumbnail::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: scan 2s infinite;
                }
                
                @keyframes scan {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
                
                .news-content {
                    padding: 1rem;
                }
                
                .news-source {
                    color: var(--primary-color);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .news-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    line-height: 1.3;
                    margin-bottom: 0.75rem;
                    color: var(--text-color);
                    height: 2.6rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                
                .news-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.75rem;
                    color: rgba(245,245,245,0.7);
                }
                
                .news-category {
                    background: var(--accent-color);
                    padding: 0.2rem 0.6rem;
                    border-radius: 15px;
                    font-size: 0.65rem;
                    font-weight: 600;
                }
                
                .trending-badge {
                    background: var(--danger-color);
                    color: white;
                    padding: 0.2rem 0.4rem;
                    border-radius: 10px;
                    font-size: 0.6rem;
                    font-weight: 700;
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    animation: pulse 2s infinite;
                    z-index: 2;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                /* Night Mode */
                body.night-mode .news-card {
                    border-color: rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.05);
                }
                
                body.night-mode .news-card:hover {
                    border-color: white;
                    box-shadow: 0 10px 30px rgba(255,255,255,0.2);
                }
                
                body.night-mode .news-source {
                    color: white;
                }
                
                body.night-mode .news-category {
                    background: rgba(255,255,255,0.2);
                    color: white;
                }
                
                /* Mobile */
                @media (max-width: 768px) {
                    .news-grid {
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 1rem;
                        padding: 0 0.5rem;
                    }
                    
                    .news-header {
                        padding: 1.5rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .news-thumbnail {
                        height: 120px;
                        font-size: 2rem;
                    }
                    
                    .news-content {
                        padding: 0.8rem;
                    }
                    
                    .news-title {
                        font-size: 0.9rem;
                    }
                }
            </style>
            
            <div class="news-header">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔥 Latest GTA 6 News</h2>
                <p style="opacity: 0.9; font-size: 1.1rem;">Breaking news, leaks, and updates from the gaming world</p>
                <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                    <span id="newsCount">100</span> Stories • Updated Live
                </div>
            </div>
            
            <div class="news-grid" id="newsGrid">
                <div class="news-card" onclick="window.open('https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026', '_blank')">
                    <div class="trending-badge">🔥 OFFICIAL</div>
                    <div class="news-thumbnail">🎮</div>
                    <div class="news-content">
                        <div class="news-source">🌟 Rockstar Games</div>
                        <div class="news-title">Grand Theft Auto VI - Now Coming May 26, 2026</div>
                        <div class="news-meta">
                            <span class="news-category">Official</span>
                            <span>rockstargames.com</span>
                        </div>
                    </div>
                </div>
                
                <div class="news-card" onclick="window.open('https://indiatimes.com/trending/gta-6-fans-buzz-as-rockstar-games-new-job-listing-for-motion-graphics-and-trailer-creation-sparks-speculation-of-trailer-3-668681.html', '_blank')">
                    <div class="trending-badge">🔥 HOT</div>
                    <div class="news-thumbnail">📺</div>
                    <div class="news-content">
                        <div class="news-source">📰 India Times</div>
                        <div class="news-title">Rockstar Job Listing Sparks Trailer 3 Speculation</div>
                        <div class="news-meta">
                            <span class="news-category">Rumors</span>
                            <span>indiatimes.com</span>
                        </div>
                    </div>
                </div>
                
                <!-- Continue with all 100 cards from your list... -->
                <!-- Due to character limits, I'll need to provide the rest in chunks -->
            </div>
            
            <script>
            // News section specific JavaScript for night/day mode compatibility
            function initNewsSection() {
                const newsCards = document.querySelectorAll('.news-card');
                const isNightMode = document.body.classList.contains('night-mode');
                
                newsCards.forEach(card => {
                    if (isNightMode) {
                        card.style.borderColor = 'rgba(255,255,255,0.2)';
                        card.style.background = 'rgba(255,255,255,0.05)';
                    }
                });
            }
            </script>
        </div>

        <!-- YouTube Tab -->
        <div id="youtube" class="tab-content">
            <h2 style="color: var(--primary-color);">🎮 GTA 6 - Vice City Dreams</h2>
            <div class="stats-grid" style="margin-bottom: 2rem;">
                <div class="stat-card">
                    <span class="stat-number" id="ytVideoCount">Loading...</span>
                    <div>Videos Found</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number" id="ytTotalViews">Loading...</span>
                    <div>Total Views</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number" id="ytChannelCount">Loading...</span>
                    <div>Channels</div>
                </div>
                <div class="stat-card premium">
                    <span class="stat-number">LIVE</span>
                    <div>Streaming</div>
                </div>
            </div>
            <div id="youtubeGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-top: 2rem;">
                <div style="text-align: center; padding: 2rem; color: var(--primary-color);">
                    Loading GTA 6 videos...
                </div>
            </div>
        </div>

        <!-- Rumors Tab -->
        <div id="rumors" class="tab-content">
            <div style="background: var(--gradient-primary); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔥 Hot Rumors & Leaks</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Latest speculation and insider information</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">47</span>
                    <div>Active Rumors</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">23</span>
                    <div>Confirmed Leaks</div>
                </div>
                <div class="stat-card premium">
                    <span class="stat-number">91%</span>
                    <div>Accuracy Rate</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">15K</span>
                    <div>Leak Hunters</div>
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">📱 Latest Rumors</h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--danger-color);">
                        <strong style="color: var(--danger-color);">🔥 HOT:</strong> Multiple map expansions confirmed through datamining
                    </div>
                    <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--warning-color);">
                        <strong style="color: var(--warning-color);">⚠️ UNVERIFIED:</strong> Crypto integration rumored for in-game economy
                    </div>
                    <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--success-color);">
                        <strong style="color: var(--success-color);">✅ CONFIRMED:</strong> Vice City setting officially announced
                    </div>
                </div>
            </div>
        </div>

        <!-- Trevor Tab -->
        <div id="trevor" class="tab-content">
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem; color: white;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">😈 Trevor Phillips Enterprises</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">The wildest character returns</p>
            </div>
            
            <div style="background: var(--card-bg); padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                <h3 style="color: var(--premium-color); margin-bottom: 1rem;">🎭 Character Analysis</h3>
                <p style="line-height: 1.6; margin-bottom: 1rem;">Trevor Phillips remains one of gaming's most complex and controversial protagonists. His unpredictable nature and chaotic energy made him a standout in GTA V.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                    <div style="text-align: center; padding: 1rem; background: rgba(255, 107, 53, 0.1); border-radius: 8px;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔥</div>
                        <strong>Chaos Factor</strong>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: rgba(255, 107, 53, 0.1); border-radius: 8px;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                        <strong>Business Empire</strong>
                    </div>
                    <div style="text-align: center; padding: 1rem; background: rgba(255, 107, 53, 0.1); border-radius: 8px;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
                        <strong>Unpredictable</strong>
                    </div>
                </div>
            </div>
        </div>

        <!-- Theories Tab -->
        <div id="theories" class="tab-content">
            <div style="background: var(--gradient-primary); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🧠 Fan Theories</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Community speculation and analysis</p>
            </div>
            
            <div style="margin-top: 2rem;">
                <div style="display: grid; gap: 1.5rem;">
                    <div style="background: var(--card-bg); padding: 2rem; border-radius: 15px; border-left: 4px solid var(--primary-color);">
                        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">🌴 Vice City Connection Theory</h3>
                        <p style="line-height: 1.6;">Multiple clues suggest GTA 6 will feature an evolved Vice City with connections to previous games in the series.</p>
                    </div>
                    <div style="background: var(--card-bg); padding: 2rem; border-radius: 15px; border-left: 4px solid var(--secondary-color);">
                        <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">👥 Multiple Protagonists</h3>
                        <p style="line-height: 1.6;">Following GTA V's success, fans theorize multiple playable characters will return with Jason and Lucia as the main duo.</p>
                    </div>
                    <div style="background: var(--card-bg); padding: 2rem; border-radius: 15px; border-left: 4px solid var(--accent-color);">
                        <h3 style="color: var(--accent-color); margin-bottom: 1rem;">🌊 Dynamic Weather System</h3>
                        <p style="line-height: 1.6;">Leaked footage suggests advanced weather patterns including hurricanes that could affect gameplay mechanics.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- RDR2 Tab -->
        <div id="rdr2" class="tab-content">
            <div style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem; color: white;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤠 Red Dead Redemption 2</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Rockstar's masterpiece while we wait</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">50M+</span>
                    <div>Copies Sold</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">200+</span>
                    <div>Hours Content</div>
                </div>
                <div class="stat-card premium">
                    <span class="stat-number">97%</span>
                    <div>Metacritic Score</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">Active</span>
                    <div>Online Mode</div>
                </div>
            </div>
        </div>

        <!-- Chat Tab -->
        <div id="chat" class="tab-content">
            <div style="background: var(--gradient-primary); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">💬 Live Chat</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Connect with fellow GTA fans worldwide</p>
            </div>
            
            <div style="background: var(--card-bg); border-radius: 15px; padding: 1.5rem; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="color: var(--primary-color);">Global Chat</h3>
                    <span style="background: var(--success-color); color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">🟢 Online: 1,247</span>
                </div>
                <div id="chatMessages" style="height: 300px; overflow-y: auto; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <div style="margin-bottom: 0.5rem;"><strong style="color: var(--primary-color);">GTAFan2025:</strong> Can't wait for May 2026!</div>
                    <div style="margin-bottom: 0.5rem;"><strong style="color: var(--secondary-color);">ViceCityLover:</strong> The trailer looks amazing 🔥</div>
                    <div style="margin-bottom: 0.5rem;"><strong style="color: var(--gold-color);">Premium_User:</strong> Got my collector's edition pre-ordered ✨</div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <input type="text" placeholder="Type your message..." style="flex: 1; padding: 0.8rem; border: 2px solid var(--border-color); background: var(--bg-color); color: var(--text-color); border-radius: 25px; font-size: 0.9rem;" id="chatInput">
                    <button style="background: var(--gradient-primary); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 25px; cursor: pointer; font-weight: 600;" onclick="sendMessage()">Send</button>
                </div>
            </div>
        </div>

        <!-- Shop Tab -->
        <div id="shop" class="tab-content">
            <div style="background: var(--gradient-premium); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒 FastLane Store</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Exclusive merch and digital collectibles</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                <div style="background: var(--card-bg); border-radius: 15px; overflow: hidden; transition: transform 0.3s ease;">
                    <div style="height: 200px; background: linear-gradient(135deg, var(--primary-color)20, var(--secondary-color)20); display: flex; align-items: center; justify-content: center; font-size: 3rem;">👕</div>
                    <div style="padding: 1.5rem;">
                        <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">GTA 6 T-Shirt</h3>
                        <p style="margin-bottom: 1rem; opacity: 0.8;">Official Vice City design</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 1.2rem; font-weight: bold; color: var(--gold-color);">500 Coins</span>
                            <button class="floating-btn" onclick="purchaseItem('tshirt')">Buy Now</button>
                        </div>
                    </div>
                </div>
                
                <div style="background: var(--card-bg); border-radius: 15px; overflow: hidden; transition: transform 0.3s ease;">
                    <div style="height: 200px; background: linear-gradient(135deg, var(--gold-color)20, var(--premium-color)20); display: flex; align-items: center; justify-content: center; font-size: 3rem;">🎨</div>
                    <div style="padding: 1.5rem;">
                        <h3 style="color: var(--gold-color); margin-bottom: 0.5rem;">Exclusive NFT</h3>
                        <p style="margin-bottom: 1rem; opacity: 0.8;">Limited edition artwork</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 1.2rem; font-weight: bold; color: var(--gold-color);">1,000 Coins</span>
                            <button class="floating-btn premium" onclick="purchaseItem('nft')">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Premium Tab -->
        <div id="premium" class="tab-content">
            <div style="background: var(--gradient-premium); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">👑 Premium Access</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Unlock exclusive features and early access</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background: var(--card-bg); border-radius: 15px; padding: 2rem; border: 2px solid var(--gold-color);">
                    <h3 style="color: var(--gold-color); text-align: center; margin-bottom: 1.5rem;">👑 Premium Monthly</h3>
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <span style="font-size: 3rem; font-weight: 900; color: var(--gold-color);">$9.99</span>
                        <span style="opacity: 0.7;">/month</span>
                    </div>
                    <ul style="list-style: none; margin-bottom: 2rem;">
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">✨ Early news access</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🎮 Exclusive mini-games</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">💎 Premium NFTs</li>
                        <li style="padding: 0.5rem 0;">🔥 VIP chat rooms</li>
                    </ul>
                    <button class="floating-btn premium" style="width: 100%; justify-content: center;" onclick="upgradePremium()">Upgrade Now</button>
                </div>
            </div>
        </div>

        <!-- Challenges Tab -->
        <div id="challenges" class="tab-content">
            <div style="background: var(--gradient-primary); padding: 2rem; border-radius: 15px; text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎯 Mini-Games & Challenges</h2>
                <p style="font-size: 1.1rem; opacity: 0.9;">Earn XP and coins while waiting for GTA 6</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                <div style="background: var(--card-bg); border-radius: 15px; padding: 1.5rem; cursor: pointer; transition: transform 0.3s ease;" onclick="playGame('trivia')">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🧠</div>
                    <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">GTA Trivia</h3>
                    <p style="opacity: 0.8; margin-bottom: 1rem;">Test your Grand Theft Auto knowledge</p>
                    <div style="color: var(--gold-color); font-weight: bold;">Reward: 50 XP + 25 Coins</div>
                </div>
                
                <div style="background: var(--card-bg); border-radius: 15px; padding: 1.5rem; cursor: pointer; transition: transform 0.3s ease;" onclick="playGame('prediction')">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🔮</div>
                    <h3 style="color: var(--secondary-color); margin-bottom: 0.5rem;">Release Prediction</h3>
                    <p style="opacity: 0.8; margin-bottom: 1rem;">Predict GTA 6 features and release details</p>
                    <div style="color: var(--gold-color); font-weight: bold;">Reward: 100 XP + 75 Coins</div>
                </div>
                
                <div style="background: var(--card-bg); border-radius: 15px; padding: 1.5rem; cursor: pointer; transition: transform 0.3s ease;" onclick="playGame('memory')">
                    <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🃏</div>
                    <h3 style="color: var(--accent-color); margin-bottom: 0.5rem;">Vice City Memory</h3>
                    <p style="opacity: 0.8; margin-bottom: 1rem;">Match pairs of GTA locations and characters</p>
                    <div style="color: var(--gold-color); font-weight: bold;">Reward: 75 XP + 50 Coins</div>
                </div>
            </div>
        </div>
    </main>

    <!-- Floating Actions -->
    <div class="floating-actions">
        <button class="floating-btn" onclick="quickShare()" title="Quick Share">
            📤 Share
        </button>
        <button class="floating-btn premium" onclick="showTab('premium')" title="Go Premium">
            👑 Premium
        </button>
        <button class="floating-btn" onclick="showNotification('Feedback submitted!')" id="feedbackBtn" title="Feedback">
            💭 Feedback
        </button>
    </div>

    <!-- Notification Toast -->
    <div class="notification" id="notification">
        <span id="notificationText">Notification text</span>
        <button onclick="hideNotification()" style="background: none; border: none; color: white; margin-left: 1rem; cursor: pointer;">✕</button>
    </div>

    <!-- Achievement Modal -->
    <div id="achievementModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: none; align-items: center; justify-content: center; z-index: 2000;">
        <div style="background: var(--card-bg); border-radius: 20px; padding: 2rem; text-align: center; max-width: 400px; margin: 1rem; border: 2px solid var(--gold-color);">
            <div style="font-size: 4rem; margin-bottom: 1rem;" id="achievementIcon">🏆</div>
            <h2 style="color: var(--gold-color); margin-bottom: 1rem;" id="achievementTitle">Achievement Unlocked!</h2>
            <p style="margin-bottom: 1.5rem; opacity: 0.9;" id="achievementDescription">You've earned a new achievement!</p>
            <button class="floating-btn premium" onclick="closeAchievementModal()">Awesome!</button>
        </div>
    </div>

    <script>
        // Global state management
        let gameState = {
            user: {
                level: 'Insider',
                xp: 1247,
                coins: 850,
                referralCode: 'A7B9X2',
                achievements: ['early_bird', 'streak_master'],
                theme: 'dark'
            },
            stats: {
                onlineCount: 12847,
                totalMembers: 52847,
                premiumMembers: 8234,
                sharesToday: 1247,
                nftsMinted: 15678
            },
            countdown: {
                targetDate: new Date('2026-05-26T00:00:00').getTime()
            }
        };

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            initCountdown();
            initLiveStats();
            showBetaBanner();
            updateUserDisplay();
            loadTheme();
        });

        // Countdown Timer
        function initCountdown() {
            function updateCountdown() {
                const now = new Date().getTime();
                const timeLeft = gameState.countdown.targetDate - now;

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        }

        // Live statistics animation
        function initLiveStats() {
            function updateStats() {
                const variation = () => Math.floor(Math.random() * 10) - 5;
                gameState.stats.onlineCount += variation();
                gameState.stats.totalMembers += Math.floor(Math.random() * 3);
                
                document.getElementById('onlineCount').textContent = gameState.stats.onlineCount.toLocaleString();
            }

            setInterval(updateStats, 5000);
        }

        // Tab system
        function showTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            const selectedContent = document.getElementById(tabName);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
            
            // Activate corresponding tab button
            const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }

            // Scroll to top when switching tabs
            window.scrollTo(0, 0);

            // Award interaction rewards
            awardRewards(2, 1, `Explored ${tabName} section`);
        }

        // Theme toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            
            if (body.classList.contains('night-mode')) {
                body.classList.remove('night-mode');
                themeToggle.textContent = '🌙';
                gameState.user.theme = 'dark';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('night-mode');
                themeToggle.textContent = '☀️';
                gameState.user.theme = 'light';
                localStorage.setItem('theme', 'light');
            }
            
            awardRewards(5, 2, 'Theme toggled!');
            showNotification('Theme changed!');
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.body.classList.add('night-mode');
                document.getElementById('themeToggle').textContent = '☀️';
            }
        }

        // Reward system
        function awardRewards(xp, coins, message) {
            gameState.user.xp += xp;
            gameState.user.coins += coins;
            updateUserDisplay();
            showNotification(`+${xp} XP, +${coins} coins: ${message}`);
            
            checkLevelUp();
        }

        function updateUserDisplay() {
            document.getElementById('userXP').textContent = gameState.user.xp.toLocaleString();
            document.getElementById('userCoins').textContent = gameState.user.coins.toLocaleString();
        }

        function checkLevelUp() {
            const levels = [
                { name: 'Rookie', threshold: 0 },
                { name: 'Insider', threshold: 1000 },
                { name: 'Veteran', threshold: 2500 },
                { name: 'Legend', threshold: 5000 },
                { name: 'Master', threshold: 10000 }
            ];
            
            const currentLevel = levels.reverse().find(level => gameState.user.xp >= level.threshold);
            
            if (currentLevel && currentLevel.name !== gameState.user.level) {
                gameState.user.level = currentLevel.name;
                document.getElementById('userLevel').textContent = currentLevel.name;
                showAchievement('Level Up!', `Welcome to ${currentLevel.name} status!`, '🎉');
            }
        }

        // Notification system
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            
            notificationText.textContent = message;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 10);
            
            setTimeout(hideNotification, 3000);
        }

        function hideNotification() {
            const notification = document.getElementById('notification');
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }

        // Achievement system
        function showAchievement(title, description, icon) {
            document.getElementById('achievementTitle').textContent = title;
            document.getElementById('achievementDescription').textContent = description;
            document.getElementById('achievementIcon').textContent = icon;
            document.getElementById('achievementModal').style.display = 'flex';
        }

        function closeAchievementModal() {
            document.getElementById('achievementModal').style.display = 'none';
        }

        // Beta banner functionality
        function showBetaBanner() {
            setTimeout(() => {
                const banner = document.getElementById('beta-banner');
                banner.style.display = 'block';
                setTimeout(() => {
                    banner.style.transform = 'translateY(0)';
                    banner.style.opacity = '1';
                }, 100);
            }, 2000);
        }

        document.getElementById('beta-banner-close').addEventListener('click', function() {
            const banner = document.getElementById('beta-banner');
            banner.style.transform = 'translateY(-100%)';
            banner.style.opacity = '0';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 600);
        });

        // Social features
        function shareForReward() {
            if (navigator.share) {
                navigator.share({
                    title: 'GTA6FastLane - Ultimate GTA 6 Hub',
                    text: 'Join the ultimate GTA 6 community! Countdown, news, and exclusive content.',
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard!');
            }
            
            awardRewards(25, 15, 'Shared with friends!');
        }

        function quickShare() {
            shareForReward();
        }

        function copyReferralCode() {
            const code = `GTAFL-${gameState.user.referralCode}`;
            navigator.clipboard.writeText(code).then(() => {
                showNotification('Referral code copied!');
                awardRewards(5, 3, 'Referral code copied');
            });
        }

        // Gaming features
        function playGame(gameType) {
            const games = {
                trivia: {
                    name: 'GTA Trivia',
                    reward: { xp: 50, coins: 25 },
                    action: () => showNotification('Trivia game coming soon! Stay tuned.')
                },
                prediction: {
                    name: 'Release Prediction',
                    reward: { xp: 100, coins: 75 },
                    action: () => showNotification('Prediction game coming soon!')
                },
                memory: {
                    name: 'Vice City Memory',
                    reward: { xp: 75, coins: 50 },
                    action: () => showNotification('Memory game coming soon!')
                }
            };

            const game = games[gameType];
            if (game) {
                game.action();
                // In a real implementation, this would launch the actual game
                setTimeout(() => {
                    awardRewards(game.reward.xp, game.reward.coins, `Completed ${game.name}!`);
                }, 2000);
            }
        }

        // Shop functionality
        function purchaseItem(itemType) {
            const items = {
                tshirt: { cost: 500, name: 'GTA 6 T-Shirt' },
                nft: { cost: 1000, name: 'Exclusive NFT' }
            };

            const item = items[itemType];
            if (item) {
                if (gameState.user.coins >= item.cost) {
                    gameState.user.coins -= item.cost;
                    updateUserDisplay();
                    showNotification(`${item.name} purchased! Check your inventory.`);
                    showAchievement('Purchase Complete!', `You bought ${item.name}`, '🛒');
                } else {
                    showNotification('Not enough coins! Complete challenges to earn more.');
                }
            }
        }

        // Premium upgrade
        function upgradePremium() {
            showNotification('Premium upgrade coming soon! Join our waitlist.');
            awardRewards(10, 5, 'Interested in Premium');
        }

        // Chat functionality
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const newMessage = document.createElement('div');
                newMessage.style.marginBottom = '0.5rem';
                newMessage.innerHTML = `<strong style="color: var(--primary-color);">You:</strong> ${message}`;
                chatMessages.appendChild(newMessage);
                
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                awardRewards(3, 1, 'Message sent!');
                
                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.style.marginBottom = '0.5rem';
                    botMessage.innerHTML = `<strong style="color: var(--secondary-color);">GTABot:</strong> Thanks for sharing! The hype is real! 🔥`;
                    chatMessages.appendChild(botMessage);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }

        // Enter key support for chat
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && document.getElementById('chatInput') === document.activeElement) {
                sendMessage();
            }
        });

        // Header scroll effect
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            
            if (window.scrollY > 100) {
                header.classList.add('minimal');
            } else {
                header.classList.remove('minimal');
            }
            
            lastScrollY = window.scrollY;
        });

        // Easter egg functionality
        let easterEggClicks = 0;
        function checkEasterEgg() {
            easterEggClicks++;
            if (easterEggClicks === 5) {
                showAchievement('Secret Found!', 'You discovered the easter egg!', '🥚');
                awardRewards(100, 50, 'Easter egg discovered!');
                easterEggClicks = 0;
            }
        }

        // Add click counter to title
        document.querySelector('h1').addEventListener('click', checkEasterEgg);

        // Simulated YouTube data loading
        setTimeout(() => {
            document.getElementById('ytVideoCount').textContent = '1,247';
            document.getElementById('ytTotalViews').textContent = '50M+';
            document.getElementById('ytChannelCount').textContent = '156';
        }, 1500);

        // Animate stat cards on hover
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Random live activity updates
        setInterval(() => {
            const activities = [
                'Breaking: New leak surfaces!',
                'Trailer analysis trending!',
                'Community event active!',
                'Limited NFT drop live!',
                'Premium livestream ongoing!'
            ];
            
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            document.getElementById('liveActivity').innerHTML = `🔴 LIVE: <span id="onlineCount">${gameState.stats.onlineCount.toLocaleString()}</span> fans online | ${randomActivity}`;
        }, 10000);

        // Achievement unlock simulation
        setTimeout(() => {
            if (Math.random() > 0.7) {
                showAchievement('Daily Login', 'Thanks for visiting GTA6FastLane today!', '📅');
                awardRewards(20, 10, 'Daily login bonus');
            }
        }, 5000);

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.altKey) {
                switch(e.key) {
                    case '1': showTab('home'); break;
                    case '2': showTab('news'); break;
                    case '3': showTab('youtube'); break;
                    case '4': showTab('rumors'); break;
                    case '5': showTab('trevor'); break;
                    case 't': toggleTheme(); break;
                }
            }
        });

        // Mobile optimizations
        if (window.innerWidth <= 768) {
            document.querySelector('.content-area').style.paddingBottom = '100px';
        }

        // Performance monitoring
        window.addEventListener('load', () => {
            console.log('GTA6FastLane loaded successfully!');
            awardRewards(5, 2, 'Welcome bonus!');
        });
    </script>
</body>
</html>
