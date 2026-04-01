
// ═══════════════════════════════════
//  DATA
// ═══════════════════════════════════

let PLAYERS = [
  {id:1, name:'Thomas Martin',  num:1,  pos:'GK',  age:28, goals:0,  assists:0,  rating:7.2, tackles:0,  inters:0,  clearances:0, saves:18, goalsConceded:6,  color:'#FF4757'},
  {id:2, name:'Lucas Petit',    num:2,  pos:'RB',  age:22, goals:1,  assists:2,  rating:6.8, tackles:14, inters:8,  clearances:12,saves:0,  goalsConceded:0,  color:'#F0B429'},
  {id:3, name:'Paul Lefebvre',  num:4,  pos:'CB',  age:26, goals:0,  assists:1,  rating:7.0, tackles:22, inters:15, clearances:28,saves:0,  goalsConceded:0,  color:'#F0B429'},
  {id:4, name:'Marc Dupont',    num:5,  pos:'CB',  age:25, goals:1,  assists:0,  rating:6.9, tackles:18, inters:12, clearances:22,saves:0,  goalsConceded:0,  color:'#F0B429'},
  {id:5, name:'Hugo Bernard',   num:3,  pos:'LB',  age:23, goals:0,  assists:3,  rating:7.1, tackles:16, inters:9,  clearances:14,saves:0,  goalsConceded:0,  color:'#F0B429'},
  {id:6, name:'Karim Dubois',   num:8,  pos:'CM',  age:24, goals:3,  assists:4,  rating:7.8, tackles:20, inters:14, clearances:5, saves:0,  goalsConceded:0,  color:'#4DABF7'},
  {id:7, name:'Nolan Richard',  num:6,  pos:'CDM', age:27, goals:1,  assists:2,  rating:7.3, tackles:28, inters:18, clearances:10,saves:0,  goalsConceded:0,  color:'#4DABF7'},
  {id:8, name:'Théo Moreau',    num:10, pos:'CAM', age:21, goals:4,  assists:5,  rating:8.1, tackles:8,  inters:5,  clearances:2, saves:0,  goalsConceded:0,  color:'#4DABF7'},
  {id:9, name:'Maxime Simon',   num:7,  pos:'LW',  age:20, goals:2,  assists:3,  rating:7.4, tackles:5,  inters:3,  clearances:1, saves:0,  goalsConceded:0,  color:'#00E676'},
  {id:10,name:'Alex Bernard',   num:9,  pos:'ST',  age:23, goals:5,  assists:1,  rating:7.9, tackles:3,  inters:2,  clearances:0, saves:0,  goalsConceded:0,  color:'#00E676'},
  {id:11,name:'Clément Garcia', num:11, pos:'RW',  age:22, goals:1,  assists:1,  rating:6.7, tackles:4,  inters:2,  clearances:0, saves:0,  goalsConceded:0,  color:'#00E676'},
  {id:12,name:'Enzo Laurent',   num:12, pos:'GK',  age:20, goals:0,  assists:0,  rating:6.5, tackles:0,  inters:0,  clearances:0, saves:3,  goalsConceded:2,  color:'#FF4757'},
  {id:13,name:'Sami Rousseau',  num:13, pos:'CB',  age:19, goals:0,  assists:0,  rating:6.2, tackles:5,  inters:3,  clearances:7, saves:0,  goalsConceded:0,  color:'#F0B429'},
  {id:14,name:'Julien Blanc',   num:14, pos:'CM',  age:24, goals:0,  assists:1,  rating:6.4, tackles:7,  inters:4,  clearances:2, saves:0,  goalsConceded:0,  color:'#4DABF7'},
  {id:15,name:'Dylan Faure',    num:15, pos:'ST',  age:21, goals:0,  assists:0,  rating:6.1, tackles:1,  inters:0,  clearances:0, saves:0,  goalsConceded:0,  color:'#00E676'},
  {id:16,name:'Kevin Michel',   num:16, pos:'LB',  age:23, goals:0,  assists:0,  rating:6.3, tackles:4,  inters:2,  clearances:5, saves:0,  goalsConceded:0,  color:'#F0B429'},
];

let EVENTS = [
  {id:1, type:'training', title:'Entraînement', date:'2025-03-05', time:'19:00', location:'Stade Municipal', notes:'Travail défensif'},
  {id:2, type:'match',    title:'FC Étoile vs FC Soleil', date:'2025-03-08', time:'15:00', location:'Stade Municipal', opponent:'FC Soleil', home:true},
  {id:3, type:'training', title:'Entraînement', date:'2025-03-12', time:'19:00', location:'Stade Municipal', notes:'Phases offensives'},
  {id:4, type:'training', title:'Entraînement', date:'2025-03-15', time:'10:00', location:'Stade Municipal', notes:'Préparation match'},
  {id:5, type:'match',    title:'FC Delta vs FC Étoile', date:'2025-03-19', time:'14:30', location:'Stade Delta', opponent:'FC Delta', home:false},
  {id:6, type:'training', title:'Entraînement', date:'2025-03-22', time:'19:00', location:'Stade Municipal', notes:'Récupération'},
  {id:7, type:'match',    title:'FC Étoile vs FC Olympique', date:'2025-03-29', time:'15:00', location:'Stade Municipal', opponent:'FC Olympique', home:true},
  {id:8, type:'training', title:'Entraînement', date:'2025-04-02', time:'19:00', location:'Stade Municipal', notes:''},
  {id:9, type:'other',    title:'Réunion du club', date:'2025-04-05', time:'18:00', location:'Salle de réunion', notes:'Budget saison'},
  {id:10,type:'training', title:'Entraînement', date:'2025-04-09', time:'19:00', location:'Stade Municipal', notes:''},
];

let SESSIONS = [
  {id:1, label:'Match — 08 Mars', type:'match', date:'2025-03-08'},
  {id:2, label:'Entr. — 12 Mars', type:'training', date:'2025-03-12'},
  {id:3, label:'Entr. — 15 Mars', type:'training', date:'2025-03-15'},
  {id:4, label:'Match — 19 Mars', type:'match', date:'2025-03-19'},
  {id:5, label:'Entr. — 22 Mars', type:'training', date:'2025-03-22'},
];

// Random attendance data
let ATTENDANCE = {};
SESSIONS.forEach(s => {
  ATTENDANCE[s.id] = {};
  PLAYERS.slice(0,13).forEach(p => {
    const r = Math.random();
    ATTENDANCE[s.id][p.id] = r > 0.15 ? 'present' : r > 0.05 ? 'late' : 'absent';
  });
});

const STANDINGS = [
  {rank:1, name:'FC Victoire',   mj:6, v:5, n:1, d:0, bp:16, bc:4,  pts:16, form:['w','w','w','d','w'], me:false},
  {rank:2, name:'AS Lumière',    mj:6, v:4, n:1, d:1, bp:13, bc:7,  pts:13, form:['w','w','d','w','l'], me:false},
  {rank:3, name:'FC Étoile',     mj:6, v:4, n:1, d:1, bp:12, bc:6,  pts:13, form:['w','w','l','w','d'], me:true},
  {rank:4, name:'FC Delta',      mj:6, v:3, n:2, d:1, bp:11, bc:8,  pts:11, form:['w','d','w','d','l'], me:false},
  {rank:5, name:'Olympique FC',  mj:6, v:3, n:0, d:3, bp:9,  bc:10, pts:9,  form:['w','l','w','l','w'], me:false},
  {rank:6, name:'FC Soleil',     mj:6, v:2, n:2, d:2, bp:8,  bc:9,  pts:8,  form:['d','w','l','d','l'], me:false},
  {rank:7, name:'US Nord',       mj:6, v:1, n:1, d:4, bp:5,  bc:12, pts:4,  form:['l','d','l','w','l'], me:false},
  {rank:8, name:'SC Forêt',      mj:6, v:0, n:2, d:4, bp:3,  bc:16, pts:2,  form:['l','l','d','l','d'], me:false},
];

const RESULTS = [
  {date:'19 Mar', home:'FC Delta',     away:'FC Étoile',   score:'1-2', home_score:1, away_score:2, competition:'Div. 3', me_home:false},
  {date:'08 Mar', home:'FC Étoile',    away:'FC Soleil',   score:'3-1', home_score:3, away_score:1, competition:'Div. 3', me_home:true},
  {date:'22 Fév', home:'FC Étoile',    away:'SC Forêt',    score:'2-0', home_score:2, away_score:0, competition:'Coupe',  me_home:true},
  {date:'08 Fév', home:'AS Lumière',   away:'FC Étoile',   score:'2-1', home_score:2, away_score:1, competition:'Div. 3', me_home:false},
  {date:'25 Jan', home:'FC Étoile',    away:'US Nord',     score:'3-0', home_score:3, away_score:0, competition:'Div. 3', me_home:true},
  {date:'11 Jan', home:'FC Étoile',    away:'Olympique FC',score:'1-1', home_score:1, away_score:1, competition:'Div. 3', me_home:true},
];

// ═══════════════════════════════════
//  PLAN & FREEMIUM
// ═══════════════════════════════════
const PLAN = {
  FREE: 'free',
  PRO:  'pro',
};
const FREE_LIMITS = {
  maxCategories: 1,
  maxPlayers: 25,
  maxSubTeams: 2,
};

let currentPlan = PLAN.FREE; // switch to PLAN.PRO after activation

function isPro() { return currentPlan === PLAN.PRO; }

function activatePro() {
  // In production this would open Stripe checkout
  if (confirm('🚀 Activer la version Pro ?\n\n(Simulation — dans la vraie app, ceci ouvrirait le paiement Stripe)\n\nCliquez OK pour simuler l\'activation Pro.')) {
    currentPlan = PLAN.PRO;
    updatePlanUI();
    showToast('🎉 Version Pro activée ! Toutes les fonctionnalités sont débloquées.');
    setTimeout(() => navigate('home'), 800);
  }
}

function confirmFreePlan() {
  showToast('Vous êtes sur la version gratuite');
}

function updatePlanUI() {
  const badge = document.getElementById('sb-plan-badge');
  const label = document.getElementById('sb-plan-label');
  const banner = document.querySelector('.pro-banner');
  if (isPro()) {
    badge.className = 'sb-plan pro';
    badge.querySelector('.sb-plan-icon').textContent = '⭐';
    if (label) label.textContent = 'Version Pro';
    if (banner) banner.style.display = 'none';
    // Update free CTA on upgrade page
    const freeCta = document.getElementById('free-cta-btn');
    if (freeCta) { freeCta.textContent = 'Plan actuel ✓'; freeCta.disabled = true; }
  } else {
    badge.className = 'sb-plan free';
    badge.querySelector('.sb-plan-icon').textContent = '🆓';
    if (label) label.textContent = 'Version Gratuite';
    if (banner) banner.style.display = 'block';
  }
}

// ─── Gate checks ───
function checkCategoryLimit() {
  if (isPro()) return true;
  const active = CLUB_CATEGORIES.filter(c => c.active);
  if (active.length >= FREE_LIMITS.maxCategories) {
    showProGate('categories');
    return false;
  }
  return true;
}

function checkPlayerLimit() {
  if (isPro()) return true;
  if (PLAYERS.length >= FREE_LIMITS.maxPlayers) {
    showProGate('players');
    return false;
  }
  return true;
}

function checkSubTeamLimit() {
  if (isPro()) return true;
  if (SUB_TEAMS.length >= FREE_LIMITS.maxSubTeams) {
    showProGate('subteams');
    return false;
  }
  return true;
}

// ─── Show gate overlay ───
const GATE_MESSAGES = {
  categories: {
    icon: '📋',
    title: 'Catégories illimitées',
    sub: 'La version gratuite est limitée à <strong>1 catégorie</strong> par club. Passez à Pro pour gérer U6, U7, U8… jusqu\'aux Vétérans, sans aucune limite.',
  },
  players: {
    icon: '👥',
    title: 'Joueurs illimités',
    sub: 'La version gratuite est limitée à <strong>18 joueurs</strong>. Passez à Pro pour un effectif illimité.',
  },
  subteams: {
    icon: '🏟️',
    title: 'Équipes illimitées',
    sub: 'La version gratuite permet <strong>2 équipes</strong> (A + B). Passez à Pro pour créer autant d\'équipes que nécessaire.',
  },
  stats: {
    icon: '📊',
    title: 'Statistiques avancées',
    sub: 'Les statistiques détaillées (évaluations, 30+ métriques, comparateurs) sont réservées à la version Pro.',
  },
  export: {
    icon: '📄',
    title: 'Export PDF',
    sub: 'L\'export en PDF des feuilles de match et rapports de saison est une fonctionnalité Pro.',
  },
};

function showProGate(featureKey) {
  const msg = GATE_MESSAGES[featureKey] || GATE_MESSAGES.categories;
  // Show in a modal
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = '⭐ FONCTIONNALITÉ PRO';
  document.getElementById('modal-body').innerHTML = `
    <div style="text-align:center;padding:.5rem 0 1rem">
      <div style="font-size:3rem;margin-bottom:.75rem">${msg.icon}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:1.4rem;letter-spacing:.05em;margin-bottom:.5rem">${msg.title}</div>
      <div style="font-size:.85rem;color:var(--muted);line-height:1.6;max-width:340px;margin:0 auto">${msg.sub}</div>
    </div>
    <div style="background:linear-gradient(135deg,rgba(240,180,41,.1),rgba(240,180,41,.05));border:1px solid rgba(240,180,41,.25);border-radius:12px;padding:1.1rem;margin-top:.5rem">
      <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem">
        <span style="font-size:1.2rem">⭐</span>
        <div style="font-weight:800;font-size:.9rem;color:var(--accent)">Version Pro — 4,99€/mois</div>
      </div>
      <div style="font-size:.75rem;color:var(--muted);line-height:1.6">
        ✓ Catégories illimitées &nbsp;·&nbsp; ✓ Joueurs illimités &nbsp;·&nbsp; ✓ Stats avancées<br>
        ✓ Export PDF &nbsp;·&nbsp; ✓ App mobile &nbsp;·&nbsp; ✓ 14 jours d'essai gratuit
      </div>
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Plus tard</button>
    <button class="plan-cta-pro" style="padding:.55rem 1.4rem;border-radius:7px;font-size:.85rem" onclick="closeModal();activatePro()">🚀 Passer à Pro</button>`;
  teamModalMode = ''; homeModalMode = '';
  overlay.classList.add('open');
}

// ─── renderCategories with freemium gate ───

// ═══════════════════════════════════
//  STATE
// ═══════════════════════════════════
let currentPage = 'home';
let calYear = 2025, calMonth = 2; // 0-indexed, March
let calView = 'month';
let currentSession = 1;
let modalMode = '';

// ═══════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Update bottom nav
  updateBottomNav(page);

  const titles = {
    home:'Accueil Club', stats:'Statistiques', calendar:'Calendrier',
    results:'Résultats & Classement', attendance:'Présences',
    players:'Joueurs', team:'Mon Équipe', tactical:'Tableau Tactique',
    upgrade:'Passer à Pro', projects:'Projets & Voyages',
    finance:'Gestion Financière', charts:'Graphiques & Analyses',
    notifications:'Notifications'
  };
  const labels = {
    home:'', stats:'Joueur', calendar:'Événement', results:'Match',
    attendance:'Session', players:'Joueur', team:'Joueur',
    tactical:'', upgrade:'', projects:'', finance:'Transaction',
    charts:'', notifications:'Rappel'
  };
  document.getElementById('topbar-title').textContent = titles[page] || page;
  document.getElementById('add-label').textContent = labels[page] || 'Ajouter';

  const hideBtn = ['home','upgrade','projects','tactical','charts','notifications'];
  document.querySelector('.tb-actions').style.display = hideBtn.includes(page) ? 'none' : 'flex';

  if (page === 'home')          renderHome();
  if (page === 'projects')      renderProjects();
  if (page === 'finance')       renderFinance();
  if (page === 'charts')        renderCharts();
  if (page === 'notifications') renderNotifications();

  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
  }
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  sb.classList.toggle('open');
  if (ov) ov.classList.toggle('show');
}

function openTactical() {
  // Génère le fichier tactique avec les vrais joueurs de l'app et l'ouvre dans un nouvel onglet
  const playersJSON = JSON.stringify(PLAYERS.map(p => ({
    id: p.id, name: p.name, num: p.num, pos: p.pos,
    color: p.color, photoUrl: p.photoUrl || null
  })));

  const html = getTacticalHTML(playersJSON);
  const blob = new Blob([html], {type: 'text/html'});
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank');
  if (!win) showToast('⚠️ Autorisez les popups pour ouvrir le tableau tactique');
  else showToast('Tableau tactique ouvert dans un nouvel onglet ↗');
}

function tacInit() {} // no-op — plus utilisé
function tacSyncPlayers() {} // no-op

// ═══════════════════════════════════
//  STATS — PAR ÉQUIPE
// ═══════════════════════════════════

let currentStatsTeam = 'all'; // 'all' | team.id
let currentStatTab   = 'scorers';

// Chaque joueur a des stats PER ÉQUIPE stockées dans PLAYER_STATS
// Structure : PLAYER_STATS[playerId][teamId] = { goals, assists, tackles, inters, clearances, saves, goalsConceded, yellowCards, redCards, rating, apps }
// On initialise avec les données existantes selon l'équipe du joueur
function initPlayerStats() {
  if (window._statsInited) return;
  window._statsInited = true;
  PLAYERS.forEach(p => {
    if (!p.stats) p.stats = {};
    // Retrouver dans quelle(s) équipe(s) est le joueur
    const teams = SUB_TEAMS.filter(t => t.playerIds.includes(p.id));
    if (teams.length === 0) {
      // Pas encore assigné — mettre dans 'unassigned'
      p.stats['unassigned'] = buildStatEntry(p);
    } else {
      teams.forEach(t => {
        if (!p.stats[t.id]) p.stats[t.id] = buildStatEntry(p);
      });
    }
  });
}

function buildStatEntry(p) {
  return {
    goals: p.goals || 0,
    assists: p.assists || 0,
    tackles: p.tackles || 0,
    inters: p.inters || 0,
    clearances: p.clearances || 0,
    saves: p.saves || 0,
    goalsConceded: p.goalsConceded || 0,
    yellowCards: 0,
    redCards: 0,
    rating: p.rating || 6.0,
    apps: 6,
  };
}

// Obtenir les stats d'un joueur pour une équipe donnée
function getStats(player, teamId) {
  if (!player.stats) return buildStatEntry(player);
  if (teamId === 'all') {
    // Agréger toutes les équipes
    const all = Object.values(player.stats);
    if (!all.length) return buildStatEntry(player);
    return {
      goals:        all.reduce((s,e)=>s+e.goals,0),
      assists:      all.reduce((s,e)=>s+e.assists,0),
      tackles:      all.reduce((s,e)=>s+e.tackles,0),
      inters:       all.reduce((s,e)=>s+e.inters,0),
      clearances:   all.reduce((s,e)=>s+e.clearances,0),
      saves:        all.reduce((s,e)=>s+e.saves,0),
      goalsConceded:all.reduce((s,e)=>s+e.goalsConceded,0),
      yellowCards:  all.reduce((s,e)=>s+e.yellowCards,0),
      redCards:     all.reduce((s,e)=>s+e.redCards,0),
      rating:       all.length ? (all.reduce((s,e)=>s+e.rating,0)/all.length) : 6.0,
      apps:         all.reduce((s,e)=>s+e.apps,0),
    };
  }
  return player.stats[teamId] || buildStatEntry(player);
}

// Obtenir les joueurs filtrés par équipe
function getPlayersForTeam(teamId) {
  if (teamId === 'all') return PLAYERS;
  const t = SUB_TEAMS.find(tt=>tt.id===teamId);
  if (!t) return PLAYERS;
  return PLAYERS.filter(p => t.playerIds.includes(p.id));
}

function renderStats() {
  initPlayerStats();

  // KPIs globaux
  const totalGoals   = PLAYERS.reduce((s,p)=>s+(getStats(p,'all').goals),0);
  const totalAssists = PLAYERS.reduce((s,p)=>s+(getStats(p,'all').assists),0);
  document.getElementById('kpi-goals').textContent   = totalGoals;
  document.getElementById('kpi-assists').textContent = totalAssists;

  // Sélecteur d'équipes
  const sel = document.getElementById('stats-team-selector');
  sel.innerHTML = `
    <div class="section-head-action ${currentStatsTeam==='all'?'active-filter':''}"
      style="${currentStatsTeam==='all'?'background:var(--green-dim);border-color:rgba(0,230,118,.3);color:var(--green)':''}"
      onclick="switchStatsTeam('all')">🌐 Toutes</div>
    ${SUB_TEAMS.map(t=>`
      <div class="section-head-action ${currentStatsTeam===t.id?'active-filter':''}"
        style="${currentStatsTeam===t.id?`background:${t.color}15;border-color:${t.color}55;color:${t.color}`:''}"
        onclick="switchStatsTeam('${t.id}')">${t.icon} ${t.name}</div>
    `).join('')}
  `;

  // Titre
  const teamName = currentStatsTeam === 'all'
    ? 'Toutes équipes' : (SUB_TEAMS.find(t=>t.id===currentStatsTeam)?.name || '');
  document.getElementById('stats-sub').textContent = `Saison 2024–2025 · ${teamName}`;

  // Onglets actifs
  document.querySelectorAll('[data-stab]').forEach(b =>
    b.classList.toggle('active', b.dataset.stab === currentStatTab));

  renderStatContent();
}

function switchStatsTeam(teamId) {
  currentStatsTeam = teamId;
  renderStats();
}

function switchStatTab(tab) {
  currentStatTab = tab;
  document.querySelectorAll('[data-stab]').forEach(b =>
    b.classList.toggle('active', b.dataset.stab === tab));
  renderStatContent();
}

function renderStatContent() {
  const players = getPlayersForTeam(currentStatsTeam);
  const tid = currentStatsTeam;
  const content = document.getElementById('stats-content');

  if (!players.length) {
    content.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted);font-size:.85rem">Aucun joueur dans cette équipe.</div>';
    return;
  }

  if (currentStatTab === 'scorers') {
    const sorted = [...players]
      .map(p=>({p, s:getStats(p,tid)}))
      .sort((a,b)=>b.s.goals-a.s.goals || b.s.assists-a.s.assists);
    const maxGoals = sorted[0]?.s.goals || 1;
    content.innerHTML = `
      <table class="data-table">
        <thead><tr>
          <th>#</th><th>Joueur</th><th class="c">Équipe</th>
          <th class="c">Pos</th><th class="c">MJ</th>
          <th>Buts</th><th>Passes déc.</th><th class="r">Note</th>
        </tr></thead>
        <tbody>
          ${sorted.filter(({s})=>s.goals>0||s.assists>0).slice(0,15).map(({p,s},i)=>`
            <tr>
              <td><span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${i<3?'var(--accent)':'var(--muted)'}">${i+1}</span></td>
              <td><div class="player-cell">${avatarHTML(p)}
                <div><div class="player-name">${p.name}</div><div class="player-pos">N°${p.num}</div></div>
              </div></td>
              <td class="c">${getPlayerTeamBadgeStat(p.id)}</td>
              <td class="c"><span class="pos-badge ${posCls(p.pos)}" style="font-size:.6rem">${p.pos}</span></td>
              <td class="c" style="color:var(--muted);font-size:.75rem">${s.apps}</td>
              <td>
                <div class="stat-bar-wrap">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${(s.goals/maxGoals)*100}%;background:var(--green)"></div></div>
                  <div class="stat-num" style="color:var(--green)">${s.goals}</div>
                </div>
              </td>
              <td>
                <div class="stat-bar-wrap">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${(s.assists/Math.max(...sorted.map(x=>x.s.assists),1))*100}%;background:var(--blue)"></div></div>
                  <div class="stat-num" style="color:var(--blue)">${s.assists}</div>
                </div>
              </td>
              <td class="r"><span class="rating ${s.rating>=7.5?'hi':s.rating>=6.5?'mid':'lo'}">${s.rating.toFixed(1)}</span></td>
            </tr>`).join('')}
          ${sorted.filter(({s})=>s.goals>0||s.assists>0).length===0
            ? `<tr><td colspan="8" style="text-align:center;padding:1.5rem;color:var(--muted)">Aucun buteur enregistré</td></tr>` : ''}
        </tbody>
      </table>`;

  } else if (currentStatTab === 'assists') {
    const sorted = [...players]
      .map(p=>({p,s:getStats(p,tid)}))
      .sort((a,b)=>b.s.assists-a.s.assists);
    const maxA = sorted[0]?.s.assists || 1;
    content.innerHTML = `
      <table class="data-table">
        <thead><tr>
          <th>#</th><th>Joueur</th><th class="c">Équipe</th>
          <th>Passes déc.</th><th class="c">Buts</th><th class="r">MJ</th>
        </tr></thead>
        <tbody>
          ${sorted.filter(({s})=>s.assists>0).slice(0,15).map(({p,s},i)=>`
            <tr>
              <td><span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${i<3?'var(--accent)':'var(--muted)'}">${i+1}</span></td>
              <td><div class="player-cell">${avatarHTML(p)}
                <div><div class="player-name">${p.name}</div><div class="player-pos">N°${p.num}</div></div>
              </div></td>
              <td class="c">${getPlayerTeamBadgeStat(p.id)}</td>
              <td>
                <div class="stat-bar-wrap">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${(s.assists/maxA)*100}%;background:var(--blue)"></div></div>
                  <div class="stat-num" style="color:var(--blue)">${s.assists}</div>
                </div>
              </td>
              <td class="c" style="color:var(--green);font-weight:700">${s.goals}</td>
              <td class="r" style="color:var(--muted);font-size:.75rem">${s.apps}</td>
            </tr>`).join('')}
          ${sorted.filter(({s})=>s.assists>0).length===0
            ? `<tr><td colspan="6" style="text-align:center;padding:1.5rem;color:var(--muted)">Aucune passe décisive enregistrée</td></tr>` : ''}
        </tbody>
      </table>`;

  } else if (currentStatTab === 'defense') {
    const defs = players.filter(p=>['CB','LB','RB','CDM','CM'].includes(p.pos));
    const sorted = [...defs].map(p=>({p,s:getStats(p,tid)})).sort((a,b)=>b.s.tackles-a.s.tackles);
    const maxT = sorted[0]?.s.tackles || 1;
    content.innerHTML = `
      <table class="data-table">
        <thead><tr>
          <th>#</th><th>Joueur</th><th class="c">Équipe</th>
          <th>Tacles</th><th class="c">Inter.</th><th class="c">Dégag.</th><th class="r">MJ</th>
        </tr></thead>
        <tbody>
          ${sorted.slice(0,10).map(({p,s},i)=>`
            <tr>
              <td><span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${i<3?'var(--accent)':'var(--muted)'}">${i+1}</span></td>
              <td><div class="player-cell">${avatarHTML(p)}
                <div><div class="player-name">${p.name}</div><div class="player-pos">${p.pos}</div></div>
              </div></td>
              <td class="c">${getPlayerTeamBadgeStat(p.id)}</td>
              <td>
                <div class="stat-bar-wrap">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${(s.tackles/maxT)*100}%;background:var(--accent)"></div></div>
                  <div class="stat-num" style="color:var(--accent)">${s.tackles}</div>
                </div>
              </td>
              <td class="c" style="color:var(--blue);font-weight:700">${s.inters}</td>
              <td class="c" style="color:var(--muted)">${s.clearances}</td>
              <td class="r" style="color:var(--muted);font-size:.75rem">${s.apps}</td>
            </tr>`).join('')}
          ${!sorted.length ? `<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:var(--muted)">Aucun défenseur dans cette équipe</td></tr>` : ''}
        </tbody>
      </table>`;

  } else if (currentStatTab === 'gk') {
    const gks = players.filter(p=>p.pos==='GK');
    const sorted = [...gks].map(p=>({p,s:getStats(p,tid)})).sort((a,b)=>b.s.saves-a.s.saves);
    content.innerHTML = `
      <table class="data-table">
        <thead><tr>
          <th>#</th><th>Joueur</th><th class="c">Équipe</th>
          <th class="c">Arrêts</th><th class="c">Encaissés</th>
          <th class="c">Clean sheets</th><th class="r">% Arrêts</th>
        </tr></thead>
        <tbody>
          ${sorted.map(({p,s},i)=>{
            const pct = s.saves>0 ? Math.round(s.saves/(s.saves+s.goalsConceded)*100) : 0;
            return `<tr>
              <td><span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${i===0?'var(--accent)':'var(--muted)'}">${i+1}</span></td>
              <td><div class="player-cell">${avatarHTML(p)}
                <div><div class="player-name">${p.name}</div><div class="player-pos">N°${p.num}</div></div>
              </div></td>
              <td class="c">${getPlayerTeamBadgeStat(p.id)}</td>
              <td class="c" style="color:var(--green);font-weight:800">${s.saves}</td>
              <td class="c" style="color:var(--red)">${s.goalsConceded}</td>
              <td class="c" style="color:var(--blue)">${Math.floor(s.apps*0.3)}</td>
              <td class="r">
                <div class="stat-bar-wrap" style="justify-content:flex-end">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${pct}%;background:${pct>=70?'var(--green)':pct>=50?'var(--accent)':'var(--red)'}"></div></div>
                  <div class="stat-num" style="color:${pct>=70?'var(--green)':pct>=50?'var(--accent)':'var(--red)'}">${pct}%</div>
                </div>
              </td>
            </tr>`;
          }).join('')}
          ${!sorted.length ? `<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:var(--muted)">Aucun gardien dans cette équipe</td></tr>` : ''}
        </tbody>
      </table>`;

  } else if (currentStatTab === 'ratings') {
    const sorted = [...players]
      .map(p=>({p,s:getStats(p,tid)}))
      .filter(({s})=>s.apps>0)
      .sort((a,b)=>b.s.rating-a.s.rating);
    content.innerHTML = `
      <table class="data-table">
        <thead><tr>
          <th>#</th><th>Joueur</th><th class="c">Équipe</th>
          <th class="c">Pos</th><th class="c">MJ</th>
          <th>Note moyenne</th><th class="c">Buts</th><th class="c">Passes</th>
        </tr></thead>
        <tbody>
          ${sorted.slice(0,15).map(({p,s},i)=>`
            <tr>
              <td><span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${i<3?'var(--accent)':'var(--muted)'}">${i+1}</span></td>
              <td><div class="player-cell">${avatarHTML(p)}
                <div><div class="player-name">${p.name}</div><div class="player-pos">N°${p.num}</div></div>
              </div></td>
              <td class="c">${getPlayerTeamBadgeStat(p.id)}</td>
              <td class="c"><span class="pos-badge ${posCls(p.pos)}" style="font-size:.6rem">${p.pos}</span></td>
              <td class="c" style="color:var(--muted);font-size:.75rem">${s.apps}</td>
              <td>
                <div class="stat-bar-wrap">
                  <div class="stat-bar"><div class="stat-bar-fill" style="width:${(s.rating/10)*100}%;background:${s.rating>=7.5?'var(--green)':s.rating>=6.5?'var(--accent)':'var(--red)'}"></div></div>
                  <span class="rating ${s.rating>=7.5?'hi':s.rating>=6.5?'mid':'lo'}">${s.rating.toFixed(1)}</span>
                </div>
              </td>
              <td class="c" style="color:var(--green);font-weight:700">${s.goals}</td>
              <td class="c" style="color:var(--blue)">${s.assists}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  // Bottom row : résumé équipe
  renderStatsBottom(players, tid);
}

function renderStatsBottom(players, tid) {
  const bottom = document.getElementById('stats-bottom-row');
  const teamLabel = tid==='all' ? 'toutes équipes'
    : (SUB_TEAMS.find(t=>t.id===tid)?.name || '');
  const totalG = players.reduce((s,p)=>s+getStats(p,tid).goals,0);
  const totalA = players.reduce((s,p)=>s+getStats(p,tid).assists,0);
  const totalY = players.reduce((s,p)=>s+getStats(p,tid).yellowCards,0);
  const totalR = players.reduce((s,p)=>s+getStats(p,tid).redCards,0);
  const avgRat  = players.length ? (players.reduce((s,p)=>s+getStats(p,tid).rating,0)/players.length).toFixed(1) : '—';

  bottom.innerHTML = `
    <div class="section-block">
      <div class="section-head"><div class="section-head-title">📊 Résumé — ${teamLabel}</div></div>
      <div style="padding:.75rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem">
        ${[
          ['⚽ Buts',       totalG,  'var(--green)'],
          ['🅰️ Passes',    totalA,  'var(--blue)'],
          ['🟨 Jaunes',     totalY,  'var(--accent)'],
          ['🟥 Rouges',     totalR,  'var(--red)'],
          ['⭐ Note moy.',  avgRat,  'var(--green)'],
          ['👥 Effectif',   players.length, 'var(--muted)'],
        ].map(([l,v,c])=>`
          <div style="background:var(--card2);border:1px solid var(--border);border-radius:8px;padding:.6rem .75rem">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:${c};line-height:1">${v}</div>
            <div style="font-size:.65rem;color:var(--muted);font-weight:600;margin-top:.2rem">${l}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="section-block">
      <div class="section-head">
        <div class="section-head-title">✏️ Saisir des stats</div>
        <div class="section-head-action" onclick="openStatEntryModal()">+ Saisir</div>
      </div>
      <div style="padding:.75rem">
        <div style="font-size:.78rem;color:var(--muted);line-height:1.6;margin-bottom:.75rem">
          Enregistrez les stats d'un joueur après un match. Les stats sont comptabilisées dans l'équipe du joueur.
        </div>
        <div id="recent-stats-list">
          <div style="font-size:.75rem;color:var(--muted2);text-align:center;padding:.5rem">Aucune saisie récente</div>
        </div>
      </div>
    </div>`;
}

// Badge équipe dans les stats (plus compact)
function getPlayerTeamBadgeStat(pid) {
  if (currentStatsTeam !== 'all') return ''; // pas besoin si déjà filtré
  const team = SUB_TEAMS.find(t => t.playerIds.includes(pid));
  if (!team) return '<span style="font-size:.6rem;color:var(--muted)">—</span>';
  return `<span style="font-size:.62rem;font-weight:800;padding:.1rem .4rem;border-radius:4px;background:${team.color}18;color:${team.color};border:1px solid ${team.color}44">${team.icon} ${team.name}</span>`;
}

// Modal de saisie de stats
function openStatEntryModal() {
  const overlay = document.getElementById('modal-overlay');
  teamModalMode = ''; homeModalMode = '';
  document.getElementById('modal-title').textContent = '✏️ SAISIR DES STATS';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Joueur</label>
        <select class="form-select" id="f-stat-pid">
          ${PLAYERS.map(p=>`<option value="${p.id}">${p.name} (${p.pos}${getPlayerTeamForStat(p.id)})</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Équipe</label>
        <select class="form-select" id="f-stat-tid">
          ${SUB_TEAMS.map(t=>`<option value="${t.id}">${t.icon} ${t.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">⚽ Buts</label>
        <input class="form-input" id="f-stat-goals" type="number" min="0" value="0" />
      </div>
      <div class="form-group">
        <label class="form-label">🅰️ Passes déc.</label>
        <input class="form-input" id="f-stat-assists" type="number" min="0" value="0" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">🛡️ Tacles</label>
        <input class="form-input" id="f-stat-tackles" type="number" min="0" value="0" />
      </div>
      <div class="form-group">
        <label class="form-label">⭐ Note (/10)</label>
        <input class="form-input" id="f-stat-rating" type="number" min="1" max="10" step="0.1" value="7.0" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">🟨 Cartons jaunes</label>
        <input class="form-input" id="f-stat-yellow" type="number" min="0" value="0" />
      </div>
      <div class="form-group">
        <label class="form-label">🟥 Cartons rouges</label>
        <input class="form-input" id="f-stat-red" type="number" min="0" value="0" />
      </div>
    </div>
    <div style="background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.15);border-radius:8px;padding:.65rem;font-size:.75rem;color:var(--muted)">
      💡 Les stats seront ajoutées aux totaux du joueur <strong>dans l'équipe sélectionnée</strong>, pas dans le classement général.
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitStatEntry()">Enregistrer</button>`;
  overlay.classList.add('open');
}

function getPlayerTeamForStat(pid) {
  const t = SUB_TEAMS.find(tt=>tt.playerIds.includes(pid));
  return t ? ` · ${t.name}` : '';
}

function submitStatEntry() {
  const pid    = parseInt(document.getElementById('f-stat-pid')?.value);
  const tid    = document.getElementById('f-stat-tid')?.value;
  const goals  = parseInt(document.getElementById('f-stat-goals')?.value) || 0;
  const assists= parseInt(document.getElementById('f-stat-assists')?.value) || 0;
  const tackles= parseInt(document.getElementById('f-stat-tackles')?.value) || 0;
  const rating = parseFloat(document.getElementById('f-stat-rating')?.value) || 7.0;
  const yellow = parseInt(document.getElementById('f-stat-yellow')?.value) || 0;
  const red    = parseInt(document.getElementById('f-stat-red')?.value) || 0;

  const p = PLAYERS.find(pp=>pp.id===pid);
  if (!p) return;
  if (!p.stats) p.stats = {};
  if (!p.stats[tid]) p.stats[tid] = buildStatEntry(p);

  // Ajouter aux totaux de l'équipe
  p.stats[tid].goals        += goals;
  p.stats[tid].assists      += assists;
  p.stats[tid].tackles      += tackles;
  p.stats[tid].yellowCards  += yellow;
  p.stats[tid].redCards     += red;
  p.stats[tid].apps         += 1;
  // Rating : moyenne glissante
  p.stats[tid].rating = ((p.stats[tid].rating * (p.stats[tid].apps-1)) + rating) / p.stats[tid].apps;

  // Aussi s'assurer que le joueur est dans cette équipe
  const team = SUB_TEAMS.find(t=>t.id===tid);
  if (team && !team.playerIds.includes(pid)) team.playerIds.push(pid);

  closeModal();
  renderStats();
  showToast(`Stats de ${p.name} enregistrées dans ${team?.name || tid} ✓`);
}

// ═══════════════════════════════════
//  RENDER CALENDAR
// ═══════════════════════════════════
function renderCalendar() {
  const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  document.getElementById('cal-month-title').textContent = `${months[calMonth].toUpperCase()} ${calYear}`;

  const grid = document.getElementById('calendar-grid');
  const days = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  let html = days.map(d=>`<div class="cal-day-header">${d}</div>`).join('');

  const firstDay = new Date(calYear, calMonth, 1);
  let startDow = firstDay.getDay(); // 0=Sun
  startDow = startDow === 0 ? 6 : startDow - 1; // convert to Mon=0

  const daysInMonth = new Date(calYear, calMonth+1, 0).getDate();
  const daysInPrev  = new Date(calYear, calMonth, 0).getDate();
  const today = new Date();

  let cells = [];
  for (let i = startDow-1; i >= 0; i--) {
    cells.push({day: daysInPrev-i, cur:false});
  }
  for (let d = 1; d <= daysInMonth; d++) cells.push({day:d, cur:true});
  while (cells.length % 7 !== 0) cells.push({day: cells.length - daysInMonth - startDow + 1, cur:false});

  html += cells.map(c => {
    const isToday = c.cur && c.day===today.getDate() && calMonth===today.getMonth() && calYear===today.getFullYear();
    const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(c.day).padStart(2,'0')}`;
    const dayEvents = EVENTS.filter(e => e.date === dateStr);
    const numStr = isToday ? `<div class="cal-day-num" style="display:flex;align-items:center;justify-content:center"><div style="background:var(--green);color:var(--black);width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800">${c.day}</div></div>` : `<div class="cal-day-num">${c.day}</div>`;
    const evHtml = dayEvents.map(e => `<div class="cal-event ${e.type}" title="${e.title}">${e.type==='match'?'⚽':e.type==='training'?'🏋️':'📌'} ${e.title.length>12?e.title.slice(0,12)+'…':e.title}</div>`).join('');
    return `<div class="cal-day${isToday?' today':''}${!c.cur?' other-month':''}" onclick="dayClick('${dateStr}')">${numStr}${evHtml}</div>`;
  }).join('');

  grid.innerHTML = html;

  // List view
  const upcoming = EVENTS.filter(e => new Date(e.date) >= new Date('2025-03-01')).sort((a,b)=>a.date.localeCompare(b.date));
  document.getElementById('event-list').innerHTML = upcoming.map(e => {
    const d = new Date(e.date);
    const day = d.getDate();
    const mon = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'][d.getMonth()];
    const colors = {match:'var(--accent)',training:'var(--green)',other:'var(--blue)'};
    const icons  = {match:'⚽',training:'🏋️',other:'📌'};
    const labels = {match:'Match',training:'Entraînement',other:'Autre'};
    return `<div class="event-list-item">
      <div class="event-date-box" style="background:rgba(${e.type==='match'?'240,180,41':e.type==='training'?'0,230,118':'77,171,247'},0.1)">
        <div class="event-date-day" style="color:${colors[e.type]}">${day}</div>
        <div class="event-date-month" style="color:${colors[e.type]}">${mon}</div>
      </div>
      <div class="event-info">
        <div class="event-title">${icons[e.type]} ${e.title}</div>
        <div class="event-meta">${e.time} · ${e.location}${e.notes?' · '+e.notes:''}</div>
      </div>
      <span class="event-type-tag" style="background:rgba(${e.type==='match'?'240,180,41':e.type==='training'?'0,230,118':'77,171,247'},0.12);color:${colors[e.type]}">${labels[e.type]}</span>
    </div>`;
  }).join('');
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}

function setCalView(v) {
  calView = v;
  document.getElementById('cal-month-view').style.display = v==='month'?'block':'none';
  document.getElementById('cal-list-view').style.display  = v==='list' ?'block':'none';
  document.getElementById('view-month-btn').className = 'tb-btn' + (v==='month'?' active':'');
  document.getElementById('view-list-btn').className  = 'tb-btn' + (v==='list' ?' active':'');
}

function dayClick(date) {
  const evs = EVENTS.filter(e => e.date === date);
  if (evs.length > 0) {
    showToast(`${evs.length} événement(s) le ${date}`);
  } else {
    openAddModal('event', date);
  }
}

// ═══════════════════════════════════
//  RENDER RESULTS
// ═══════════════════════════════════
function renderResults() {
  document.getElementById('standings-body').innerHTML = STANDINGS.map(t => `
    <tr class="${t.me?'my-team':''}">
      <td><span class="rank-num" style="color:${t.rank<=3?'var(--accent)':'var(--muted)'}">${t.rank}</span></td>
      <td><div style="display:flex;align-items:center;gap:.5rem">
        ${t.me?'<span style="color:var(--green);font-size:.8rem">★</span>':''}
        <span style="font-weight:${t.me?700:400}">${t.name}</span>
      </div></td>
      <td>${t.mj}</td><td>${t.v}</td><td>${t.n}</td><td>${t.d}</td>
      <td style="color:var(--green)">${t.bp}</td>
      <td style="color:var(--red)">${t.bc}</td>
      <td><span class="pts">${t.pts}</span></td>
      <td><div class="form-dots">${t.form.map(f=>`<div class="form-dot ${f}">${f.toUpperCase()}</div>`).join('')}</div></td>
    </tr>
  `).join('');

  document.getElementById('results-list').innerHTML = RESULTS.map(r => {
    const meScore = r.me_home ? r.home_score : r.away_score;
    const oppScore = r.me_home ? r.away_score : r.home_score;
    const res = meScore > oppScore ? 'win' : meScore === oppScore ? 'draw' : 'loss';
    return `<div class="match-result-card">
      <div class="mrc-date">${r.date}</div>
      <div class="mrc-teams">
        <span style="${r.me_home?'color:var(--green)':''}font-weight:700">${r.home}</span>
        <span class="mrc-score ${res}">${r.score}</span>
        <span style="${!r.me_home?'color:var(--green)':''}font-weight:700">${r.away}</span>
      </div>
      <div class="mrc-comp">${r.competition}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════
//  RENDER ATTENDANCE
// ═══════════════════════════════════
// ═══════════════════════════════════
//  PRÉSENCES, BLESSURES, CONVOCATION
// ═══════════════════════════════════

// Injuries data : { playerId, type, detail, since, returnDate, active }
const INJURY_TYPES = {
  none:      { label: '✅ Disponible',   color: 'var(--green)'  },
  muscle:    { label: '🩹 Musculaire',   color: 'var(--red)'    },
  bone:      { label: '🦴 Osseux',       color: 'var(--red)'    },
  fatigue:   { label: '😓 Fatigue',      color: 'var(--accent)' },
  sick:      { label: '🤒 Maladie',      color: 'var(--blue)'   },
  suspended: { label: '🟨 Suspendu',     color: 'var(--accent)' },
};

let INJURIES = [
  { id:1, playerId:9,  type:'muscle',  detail:'Déchirure ischio-jambier gauche', since:'2025-03-15', returnDate:'2025-04-05', active:true },
  { id:2, playerId:11, type:'fatigue', detail:'Surmenage après match',           since:'2025-03-20', returnDate:'2025-03-25', active:true },
];

let CONVOCATION_LIST = new Set(); // playerIds convoqués
let currentAttTab = 'presence';

// Statut blessure du joueur
function getInjury(pid) {
  return INJURIES.find(i => i.playerId===pid && i.active) || null;
}

function isAvailable(pid) {
  return !getInjury(pid);
}

// ─── Tab switch ───
function switchAttTab(tab) {
  currentAttTab = tab;
  ['presence','injuries','convocation','summary'].forEach(t => {
    const el = document.getElementById('att-tab-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  document.querySelectorAll('[data-atab]').forEach(b =>
    b.classList.toggle('active', b.dataset.atab === tab));
  if (tab === 'injuries')    renderInjuries();
  if (tab === 'convocation') { generateConvocation(); }
  if (tab === 'summary')     renderAttendanceSummaryTable();
}

// ─── PRÉSENCES ───
function renderAttendance() {
  // Sessions selector
  document.getElementById('session-selector').innerHTML = SESSIONS.map(s => `
    <div class="sess-btn ${s.id===currentSession?'active':''}" onclick="selectSession(${s.id})">${s.label}</div>
  `).join('');

  const sess = SESSIONS.find(s=>s.id===currentSession);
  document.getElementById('att-session-title').textContent =
    (sess.type==='match'?'⚽ Match':'🏋️ Entraînement') + ' — ' +
    new Date(sess.date).toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'long'});

  const att = ATTENDANCE[currentSession];
  document.getElementById('attendance-list').innerHTML = PLAYERS.slice(0,13).map(p => {
    const st  = att[p.id] || 'absent';
    const inj = getInjury(p.id);
    const injType = inj ? inj.type : 'none';
    const injLabel = INJURY_TYPES[injType]?.label || '✅ Disponible';

    return `<div class="presence-row">
      ${avatarHTML(p)}
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;font-size:.82rem">${p.name}</div>
        <div style="font-size:.68rem;color:var(--muted)">${p.pos} · N°${p.num}</div>
      </div>
      <!-- Présence toggle -->
      <div style="width:80px;display:flex;flex-direction:column;align-items:center;gap:.15rem">
        <button class="presence-toggle ${st}" id="toggle-${currentSession}-${p.id}" onclick="togglePresence(${p.id})"></button>
        <div class="presence-status ${st}" id="status-${currentSession}-${p.id}" style="font-size:.6rem">
          ${st==='present'?'Présent':st==='late'?'Retard':'Absent'}
        </div>
      </div>
      <!-- Blessure -->
      <div style="width:90px;text-align:center">
        <span class="injury-tag ${injType}" onclick="openInjuryModal(${p.id})" title="Gérer la blessure">
          ${injLabel}
        </span>
        ${inj ? `<div style="font-size:.58rem;color:var(--muted);margin-top:.15rem">Retour: ${new Date(inj.returnDate).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div>` : ''}
      </div>
      <!-- Statut global -->
      <div style="width:70px;text-align:center">
        ${inj ? `<span style="font-size:.6rem;font-weight:800;color:var(--red)">⛔ INDISPO</span>`
               : `<span style="font-size:.6rem;font-weight:800;color:var(--green)">✓ DISPO</span>`}
      </div>
    </div>`;
  }).join('');

  renderAttendanceKPIs();
}

function renderAttendanceKPIs() {
  const att = ATTENDANCE[currentSession];
  let pres = 0;
  PLAYERS.slice(0,13).forEach(p => { if(att[p.id]==='present') pres++; });
  document.getElementById('att-pct').textContent = Math.round(pres/13*100) + '%';
  document.getElementById('att-total-sessions').textContent = SESSIONS.length;
  document.getElementById('att-injured-count').textContent  = INJURIES.filter(i=>i.active && i.type!=='suspended').length;
  document.getElementById('att-suspended-count').textContent= INJURIES.filter(i=>i.active && i.type==='suspended').length;
}

function selectSession(id) {
  currentSession = id;
  renderAttendance();
}

function togglePresence(pid) {
  const att = ATTENDANCE[currentSession];
  const cur = att[pid];
  att[pid] = cur === 'present' ? 'late' : cur === 'late' ? 'absent' : 'present';
  const btn = document.getElementById(`toggle-${currentSession}-${pid}`);
  const lbl = document.getElementById(`status-${currentSession}-${pid}`);
  const st = att[pid];
  btn.className = `presence-toggle ${st}`;
  lbl.textContent = st==='present'?'Présent':st==='late'?'Retard':'Absent';
  renderAttendanceKPIs();
}

function markAll(status) {
  PLAYERS.slice(0,13).forEach(p => { ATTENDANCE[currentSession][p.id] = status; });
  renderAttendance();
  showToast(status==='present' ? 'Tous présents ✓' : 'Tous absents');
}

function renderAttendanceSummary() { renderAttendanceKPIs(); }

// ─── BLESSURES ───
function renderInjuries() {
  const active = INJURIES.filter(i=>i.active);
  const injList = document.getElementById('injury-list');
  const injHist = document.getElementById('injury-history');

  if (!injList) return;

  if (!active.length) {
    injList.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--muted);font-size:.85rem">
      ✅ Aucun joueur blessé en ce moment</div>`;
  } else {
    injList.innerHTML = active.map(inj => {
      const p = PLAYERS.find(pp=>pp.id===inj.playerId);
      if (!p) return '';
      const daysLeft = Math.max(0, Math.ceil((new Date(inj.returnDate)-new Date())/(1000*3600*24)));
      return `<div class="injury-card">
        <div class="injury-severity" style="background:${INJURY_TYPES[inj.type]?.color || 'var(--muted)'}"></div>
        ${avatarHTML(p)}
        <div class="inj-info">
          <div class="inj-type">${p.name} <span class="injury-tag ${inj.type}">${INJURY_TYPES[inj.type]?.label}</span></div>
          <div class="inj-detail">${inj.detail || '—'} · Depuis le ${new Date(inj.since).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div>
        </div>
        <div class="inj-return" style="color:${daysLeft>14?'var(--red)':daysLeft>7?'var(--accent)':'var(--green)'}">
          ${daysLeft === 0 ? '🟢 Apte' : `${daysLeft}j restants`}
          <div style="font-size:.6rem;color:var(--muted)">Retour: ${new Date(inj.returnDate).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div>
        </div>
        <div style="display:flex;gap:.25rem">
          <div class="pc-btn" onclick="openInjuryModal(${p.id})" title="Modifier">✏️</div>
          <div class="pc-btn" onclick="clearInjury(${inj.id})" title="Marquer apte" style="color:var(--green)">✓</div>
        </div>
      </div>`;
    }).join('');
  }

  // Historique
  const past = INJURIES.filter(i=>!i.active);
  injHist.innerHTML = past.length ? past.map(inj => {
    const p = PLAYERS.find(pp=>pp.id===inj.playerId);
    return `<div class="injury-card" style="opacity:.65">
      ${avatarHTML(p||{name:'?',color:'#666',photoUrl:null})}
      <div class="inj-info">
        <div class="inj-type">${p?.name||'?'} <span class="injury-tag ${inj.type}">${INJURY_TYPES[inj.type]?.label}</span></div>
        <div class="inj-detail">${inj.detail} · du ${new Date(inj.since).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})} au ${new Date(inj.returnDate).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div>
      </div>
      <span style="font-size:.68rem;color:var(--green);font-weight:700">✅ Rétabli</span>
    </div>`;
  }).join('') : `<div style="text-align:center;padding:1.5rem;color:var(--muted);font-size:.78rem">Aucun historique</div>`;
}

function openInjuryModal(pid) {
  const inj = pid ? INJURIES.find(i=>i.playerId===pid&&i.active) : null;
  const p   = pid ? PLAYERS.find(pp=>pp.id===pid) : null;
  teamModalMode=''; homeModalMode='';
  document.getElementById('modal-title').textContent = '🩹 ' + (p ? 'BLESSURE — '+p.name.toUpperCase() : 'SIGNALER UNE BLESSURE');

  document.getElementById('modal-body').innerHTML = `
    ${!p ? `<div class="form-group">
      <label class="form-label">Joueur</label>
      <select class="form-select" id="f-inj-pid">
        ${PLAYERS.map(pp=>`<option value="${pp.id}">${pp.name} (${pp.pos})</option>`).join('')}
      </select>
    </div>` : `<input type="hidden" id="f-inj-pid" value="${pid}">`}
    <div class="form-group">
      <label class="form-label">Type de blessure / statut</label>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap" id="inj-type-row">
        ${Object.entries(INJURY_TYPES).map(([k,v])=>`
          <div class="injury-tag ${k} ${inj&&inj.type===k?'active':''}" style="cursor:pointer;padding:.3rem .65rem;${inj&&inj.type===k?'outline:2px solid white;':''}font-size:.72rem"
            onclick="selectInjType('${k}',this)">${v.label}</div>`).join('')}
      </div>
      <input type="hidden" id="f-inj-type" value="${inj?inj.type:'none'}" />
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <input class="form-input" id="f-inj-detail" placeholder="Ex: Déchirure ischio-jambier gauche" value="${inj?inj.detail:''}" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Date de début</label>
        <input class="form-input" id="f-inj-since" type="date" value="${inj?inj.since:new Date().toISOString().slice(0,10)}" />
      </div>
      <div class="form-group">
        <label class="form-label">Retour estimé</label>
        <input class="form-input" id="f-inj-return" type="date" value="${inj?inj.returnDate:''}" />
      </div>
    </div>
    ${inj?`<button class="btn btn-ghost" style="width:100%;margin-top:.25rem;color:var(--green);border-color:rgba(0,230,118,.3)" onclick="clearInjury(${inj.id});closeModal()">✅ Marquer comme rétabli</button>`:''}`;

  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitInjury()">Enregistrer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function selectInjType(type, el) {
  document.getElementById('f-inj-type').value = type;
  document.querySelectorAll('#inj-type-row .injury-tag').forEach(d => d.style.outline = 'none');
  el.style.outline = '2px solid white';
}

function submitInjury() {
  const pid    = parseInt(document.getElementById('f-inj-pid')?.value);
  const type   = document.getElementById('f-inj-type')?.value || 'muscle';
  const detail = document.getElementById('f-inj-detail')?.value || '';
  const since  = document.getElementById('f-inj-since')?.value  || new Date().toISOString().slice(0,10);
  const ret    = document.getElementById('f-inj-return')?.value || since;
  if (type === 'none') { clearInjuryByPlayer(pid); closeModal(); return; }
  // Remove existing active injury for this player
  INJURIES.forEach(i => { if(i.playerId===pid&&i.active) i.active=false; });
  INJURIES.push({ id: Date.now(), playerId:pid, type, detail, since, returnDate:ret, active:true });
  closeModal();
  renderAttendance();
  renderInjuries();
  renderAttendanceKPIs();
  const p = PLAYERS.find(pp=>pp.id===pid);
  showToast(`${p?.name} — ${INJURY_TYPES[type]?.label} enregistré`);
}

function clearInjury(injId) {
  const inj = INJURIES.find(i=>i.id===injId);
  if (inj) inj.active = false;
  renderAttendance(); renderInjuries(); renderAttendanceKPIs();
  showToast('Joueur marqué comme rétabli ✅');
}

function clearInjuryByPlayer(pid) {
  INJURIES.forEach(i => { if(i.playerId===pid&&i.active) i.active=false; });
  renderAttendance(); renderInjuries(); renderAttendanceKPIs();
}

// ─── CONVOCATION ───
function generateConvocation() {
  const threshold = parseInt(document.getElementById('conv-threshold')?.value || 60);
  const maxCount  = parseInt(document.getElementById('conv-count')?.value || 18);

  // Calcul assiduité sur les sessions d'entraînement de la semaine passée
  const trainingSessions = SESSIONS.filter(s=>s.type==='training');

  const scored = PLAYERS.map(p => {
    const inj = getInjury(p.id);
    const blocked = !!inj;
    const blockReason = inj ? INJURY_TYPES[inj.type]?.label : null;

    // Assiduité : sessions d'entraînement où présent ou en retard
    const totalTrain = trainingSessions.length || 1;
    let present = 0;
    trainingSessions.forEach(s => {
      const st = ATTENDANCE[s.id]?.[p.id];
      if (st==='present') present += 1;
      else if (st==='late') present += 0.5;
    });
    const assiduity = Math.round((present/totalTrain)*100);

    // Score global : assiduité (50%) + note (30%) + buts contribution (20%)
    const ratingScore = ((p.rating||6)/10)*30;
    const assiduityScore = (assiduity/100)*50;
    const contribScore = Math.min((p.goals+p.assists)/10, 1)*20;
    const score = Math.round(assiduityScore + ratingScore + contribScore);

    return { p, score, assiduity, blocked, blockReason, inj };
  }).sort((a,b) => {
    if (a.blocked && !b.blocked) return 1;
    if (!a.blocked && b.blocked) return -1;
    return b.score - a.score;
  });

  // Auto-sélection : non bloqués avec assiduité >= seuil
  CONVOCATION_LIST = new Set(
    scored.filter(x => !x.blocked && x.assiduity >= threshold)
          .slice(0, maxCount)
          .map(x => x.p.id)
  );

  // Prochain match
  const nextMatch = EVENTS.find(e => e.type==='match' && new Date(e.date) >= new Date());
  const convTitle = document.getElementById('conv-match-title');
  if (convTitle) {
    convTitle.textContent = nextMatch
      ? `📅 ${nextMatch.title} — ${new Date(nextMatch.date).toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'long'})}`
      : '📅 Aucun match prévu';
  }

  // Render liste scorée
  const listEl = document.getElementById('convocation-list');
  if (!listEl) return;

  listEl.innerHTML = scored.map(({p, score, assiduity, blocked, blockReason}) => {
    const isIn = CONVOCATION_LIST.has(p.id);
    const scoreColor = score>=70?'var(--green)':score>=50?'var(--accent)':'var(--red)';
    return `<div class="conv-player-row ${isIn?'selected':''} ${blocked?'blocked':''}" id="conv-row-${p.id}">
      <div class="conv-toggle ${blocked?'blocked':isIn?'in':'out'}" id="conv-tgl-${p.id}"
        onclick="${blocked?`showToast('${p.name} : ${blockReason} — indisponible')`:
          `toggleConvocation(${p.id})`}">
        ${blocked?'✕':isIn?'✓':''}
      </div>
      ${avatarHTML(p)}
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:.82rem;display:flex;align-items:center;gap:.35rem">
          ${p.name}
          ${blocked?`<span class="injury-tag ${getInjury(p.id)?.type||'none'}" style="font-size:.58rem">${blockReason}</span>`:''}
        </div>
        <div class="conv-reasons">
          <span class="conv-chip chip-b">${p.pos}</span>
          <span class="conv-chip ${assiduity>=70?'chip-g':assiduity>=50?'chip-y':'chip-r'}">
            📅 ${assiduity}% assid.
          </span>
          <span class="conv-chip chip-g">⭐ ${(p.rating||6).toFixed(1)}</span>
          ${p.goals>0?`<span class="conv-chip chip-g">⚽ ${p.goals}</span>`:''}
        </div>
      </div>
      <div class="conv-score" style="background:${scoreColor}22;color:${scoreColor};border:2px solid ${scoreColor}44">
        ${score}
      </div>
    </div>`;
  }).join('');

  renderConvocationFinal();
}

function toggleConvocation(pid) {
  if (CONVOCATION_LIST.has(pid)) CONVOCATION_LIST.delete(pid);
  else CONVOCATION_LIST.add(pid);
  // Update toggle UI
  const tgl = document.getElementById('conv-tgl-'+pid);
  const row = document.getElementById('conv-row-'+pid);
  if (tgl) { tgl.className = `conv-toggle ${CONVOCATION_LIST.has(pid)?'in':'out'}`; tgl.textContent = CONVOCATION_LIST.has(pid)?'✓':''; }
  if (row) row.className = `conv-player-row ${CONVOCATION_LIST.has(pid)?'selected':''}`;
  renderConvocationFinal();
}

function renderConvocationFinal() {
  const finalEl = document.getElementById('convocation-final');
  if (!finalEl) return;
  const convoked = PLAYERS.filter(p => CONVOCATION_LIST.has(p.id));

  if (!convoked.length) {
    finalEl.innerHTML = '<div style="text-align:center;padding:1.5rem;color:var(--muted);font-size:.82rem">Aucun joueur sélectionné</div>';
    return;
  }

  // Group by position
  const groups = [
    { label:'🧤 Gardiens',   filter: p=>p.pos==='GK' },
    { label:'🛡️ Défenseurs', filter: p=>['LB','CB','RB'].includes(p.pos) },
    { label:'⚡ Milieux',    filter: p=>['CM','LM','RM','CAM','CDM'].includes(p.pos) },
    { label:'⚽ Attaquants', filter: p=>['LW','RW','ST','CF'].includes(p.pos) },
  ];

  finalEl.innerHTML = groups.map(g => {
    const gp = convoked.filter(g.filter);
    if (!gp.length) return '';
    return `<div class="squad-section-label">${g.label} · ${gp.length}</div>` +
      gp.map(p => `
        <div class="conv-player-row selected">
          ${avatarHTML(p)}
          <div style="flex:1"><div style="font-weight:700;font-size:.82rem">${p.name}</div>
            <div style="font-size:.68rem;color:var(--muted)">${p.pos} · N°${p.num}</div></div>
          <div class="pc-btn del" onclick="toggleConvocation(${p.id})" title="Retirer">✕</div>
        </div>`).join('');
  }).join('') +
  `<div style="padding:.75rem 1.1rem;background:rgba(0,230,118,.05);border-top:1px solid var(--border);font-size:.78rem;color:var(--green);font-weight:700">
    ✓ ${convoked.length} joueur${convoked.length>1?'s':''} convoqué${convoked.length>1?'s':''}
  </div>`;
}

function saveConvocation() {
  const n = CONVOCATION_LIST.size;
  showToast(`Liste de ${n} joueur${n>1?'s':''} validée ✓`);
}

function exportConvocation() {
  if (!isPro()) { showProGate('export'); return; }
  showToast('Export PDF de la convocation ✓');
}

// ─── BILAN ───
function renderAttendanceSummaryTable() {
  document.getElementById('att-player-body').innerHTML = PLAYERS.slice(0,13).map(p => {
    let pres=0, abs=0, late=0;
    SESSIONS.forEach(s => {
      const st = ATTENDANCE[s.id]?.[p.id];
      if(st==='present') pres++;
      else if(st==='late') late++;
      else abs++;
    });
    const total = SESSIONS.length;
    const pct = Math.round((pres+late*0.5)/total*100);
    const inj = getInjury(p.id);
    return `<tr>
      <td><div class="player-cell">${avatarHTML(p)}<div><div class="player-name">${p.name}</div><div class="player-pos">${p.pos}</div></div></div></td>
      <td class="c" style="color:var(--green);font-weight:700">${pres}</td>
      <td class="c" style="color:var(--red)">${abs}</td>
      <td class="c" style="color:var(--accent)">${late}</td>
      <td class="c">${inj?`<span class="injury-tag ${inj.type}" style="font-size:.58rem">${INJURY_TYPES[inj.type]?.label}</span>`:'<span style="font-size:.68rem;color:var(--green)">✅</span>'}</td>
      <td>
        <div style="display:flex;align-items:center;gap:.5rem">
          <div class="attendance-bar"><div class="attendance-fill" style="width:${pct}%;background:${pct>=80?'var(--green)':pct>=60?'var(--accent)':'var(--red)'}"></div></div>
          <span style="font-size:.7rem;font-weight:700;font-family:'Space Mono',monospace;width:34px">${pct}%</span>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ═══════════════════════════════════
//  RENDER PLAYERS
// ═══════════════════════════════════
function renderPlayers() {
  document.getElementById('players-body').innerHTML = PLAYERS.map(p => `
    <tr style="cursor:pointer" onclick="showToast('${p.name} — N°${p.num}')">
      <td><div class="player-cell">${avatarHTML(p)}<div><div class="player-name">${p.name}</div><div class="player-pos">N°${p.num}</div></div></div></td>
      <td class="c" style="font-family:'Space Mono',monospace">${p.num}</td>
      <td class="c"><span class="pos-badge ${posCls(p.pos)}">${p.pos}</span></td>
      <td class="c" style="color:var(--muted)">${p.age} ans</td>
      <td class="c" style="color:var(--green);font-weight:700">${p.goals}</td>
      <td class="c" style="color:var(--blue)">${p.assists}</td>
      <td class="r"><span class="rating ${p.rating>=7.5?'hi':p.rating>=6.5?'mid':'lo'}">${p.rating.toFixed(1)}</span></td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════
//  MODAL
// ═══════════════════════════════════
function openAddModal(mode, prefill) {
  // If on team page, redirect to team modal
  if (currentPage === 'team' || mode === 'player' && currentPage === 'team') {
    openTeamModal('player'); return;
  }
  modalMode = mode || currentPage;
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  const title = document.getElementById('modal-title');

  if (modalMode === 'event' || modalMode === 'calendar') {
    title.textContent = 'AJOUTER UN ÉVÉNEMENT';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-type">
          <option value="training">🏋️ Entraînement</option>
          <option value="match">⚽ Match</option>
          <option value="other">📌 Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Titre</label>
        <input class="form-input" id="f-title" placeholder="Ex: FC Étoile vs FC Soleil" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input class="form-input" id="f-date" type="date" value="${prefill||'2025-03-29'}" />
        </div>
        <div class="form-group">
          <label class="form-label">Heure</label>
          <input class="form-input" id="f-time" type="time" value="19:00" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Lieu</label>
        <input class="form-input" id="f-loc" placeholder="Stade Municipal" value="Stade Municipal" />
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <input class="form-input" id="f-notes" placeholder="Notes optionnelles…" />
      </div>
    `;
  } else if (modalMode === 'player' || modalMode === 'players' || modalMode === 'stats') {
    title.textContent = 'AJOUTER UN JOUEUR';
    body.innerHTML = `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Prénom</label>
          <input class="form-input" id="f-fname" placeholder="Prénom" />
        </div>
        <div class="form-group">
          <label class="form-label">Nom</label>
          <input class="form-input" id="f-lname" placeholder="Nom" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">N° maillot</label>
          <input class="form-input" id="f-num" type="number" min="1" max="99" placeholder="Ex: 10" />
        </div>
        <div class="form-group">
          <label class="form-label">Âge</label>
          <input class="form-input" id="f-age" type="number" min="14" max="50" placeholder="Ex: 22" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Poste</label>
        <select class="form-select" id="f-pos">
          <option value="GK">Gardien (GK)</option>
          <option value="CB">Défenseur central (CB)</option>
          <option value="LB">Arrière gauche (LB)</option>
          <option value="RB">Arrière droit (RB)</option>
          <option value="CDM">Milieu défensif (CDM)</option>
          <option value="CM">Milieu central (CM)</option>
          <option value="CAM">Milieu offensif (CAM)</option>
          <option value="LW">Ailier gauche (LW)</option>
          <option value="RW">Ailier droit (RW)</option>
          <option value="ST" selected>Attaquant (ST)</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Contact / Téléphone</label>
        <input class="form-input" id="f-phone" placeholder="06 XX XX XX XX" type="tel" />
      </div>
    `;
  } else if (modalMode === 'results') {
    title.textContent = 'SAISIR UN RÉSULTAT';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Date du match</label>
        <input class="form-input" id="f-date" type="date" value="2025-03-29" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Équipe domicile</label>
          <input class="form-input" id="f-home" placeholder="FC Étoile" value="FC Étoile" />
        </div>
        <div class="form-group">
          <label class="form-label">Équipe extérieur</label>
          <input class="form-input" id="f-away" placeholder="Adversaire" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Buts domicile</label>
          <input class="form-input" id="f-hscore" type="number" min="0" value="0" />
        </div>
        <div class="form-group">
          <label class="form-label">Buts extérieur</label>
          <input class="form-input" id="f-ascore" type="number" min="0" value="0" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Compétition</label>
        <select class="form-select" id="f-comp">
          <option>Div. 3</option><option>Coupe</option><option>Amical</option>
        </select>
      </div>
    `;
  } else if (modalMode === 'session' || modalMode === 'attendance') {
    title.textContent = 'NOUVELLE SESSION';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-type">
          <option value="training">🏋️ Entraînement</option>
          <option value="match">⚽ Match</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input class="form-input" id="f-date" type="date" value="2025-04-02" />
        </div>
        <div class="form-group">
          <label class="form-label">Heure</label>
          <input class="form-input" id="f-time" type="time" value="19:00" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <input class="form-input" id="f-notes" placeholder="Ex: Travail sur phases offensives" />
      </div>
    `;
  }

  overlay.classList.add('open');
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  teamModalMode = '';
  homeModalMode = '';
  _pendingStaffPhoto = null;
  // Reset footer
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitModal()">Enregistrer</button>
  `;
}

function submitModal() {
  if (['info','badge','season','player','editPlayer','addSubTeam','editSubTeam','addToSubTeam','globalMove'].includes(teamModalMode)) {
    submitTeamModal(); return;
  }
  if (['club','staff','editStaff','category','editCat','news'].includes(homeModalMode)) {
    submitHomeModal(); return;
  }
  document.getElementById('modal-overlay').classList.remove('open');
  const msgs = {
    event:'Événement ajouté ✓', calendar:'Événement ajouté ✓',
    player:'Joueur ajouté ✓', players:'Joueur ajouté ✓', stats:'Joueur ajouté ✓',
    results:'Résultat enregistré ✓', session:'Session créée ✓', attendance:'Session créée ✓'
  };
  showToast(msgs[modalMode] || 'Enregistré ✓');
}

// ═══════════════════════════════════
//  HELPERS
// ═══════════════════════════════════
function initials(name) {
  return name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
}

function avatarHTML(p, cls='') {
  if (p.photoUrl) {
    return `<div class="avatar ${cls}" style="background:${p.color};overflow:hidden"><img src="${p.photoUrl}" alt="${p.name}" /></div>`;
  }
  return `<div class="avatar ${cls}" style="background:${p.color}">${initials(p.name)}</div>`;
}

function posCls(pos) {
  if(pos==='GK') return 'pos-gk';
  if(['LB','CB','RB'].includes(pos)) return 'pos-def';
  if(['CM','LM','RM','CAM','CDM'].includes(pos)) return 'pos-mid';
  return 'pos-att';
}

function exportPage() {
  if (!isPro()) { showProGate('export'); return; }
  showToast('Export PDF en cours… ✓');
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2500);
}

// ═══════════════════════════════════
//  TEAM DATA
// ═══════════════════════════════════
let TEAM = {
  name: 'FC Étoile 2024', emoji: '⚽', city: 'Paris',
  league: 'Division 3', season: 'Saison 2024–2025',
  primaryColor: '#00E676', secondaryColor: '#F0B429',
};

let SEASONS = [
  { id:1, label:'2024–2025', active:true  },
  { id:2, label:'2023–2024', active:false },
  { id:3, label:'2022–2023', active:false },
];

const TEAM_COLORS = ['#00E676','#FF4757','#F0B429','#4DABF7','#B197FC','#FF6B9D','#ffffff','#111111','#E63946','#2EC4B6','#F72585','#3A86FF'];
const TEAM_EMOJIS = ['⚽','🏆','⭐','🦁','🐯','🦅','🔥','💎','🛡️','⚡','🌟','🦊','🐺','🦋','🎯','👑'];

let playerFilter = 'all';
let editingPlayerId = null;
let teamModalMode = '';

// ═══════════════════════════════════
//  RENDER TEAM
// ═══════════════════════════════════
function renderTeam() {
  // Hero badge
  updateTeamBadgeDisplay();
  document.getElementById('team-name-display').textContent = TEAM.name;
  document.getElementById('team-page-title').textContent = TEAM.name.toUpperCase();
  document.getElementById('team-league-display').textContent = TEAM.league;
  document.getElementById('team-season-display').textContent = TEAM.season;
  document.getElementById('team-city-display').textContent = TEAM.city;
  document.getElementById('team-count-display').textContent = PLAYERS.length;

  // Sidebar
  const logoEl = TEAM.logoUrl
    ? `<img src="${TEAM.logoUrl}" style="width:18px;height:18px;object-fit:cover;border-radius:3px;vertical-align:middle;margin-right:4px" />`
    : (TEAM.emoji || '⚽') + ' ';
  document.querySelector('.sb-team-name').innerHTML = logoEl + TEAM.name;
  document.querySelector('.sb-team-sub').textContent = TEAM.season + ' · ' + TEAM.league;

  // Color palettes
  ['primary','secondary'].forEach(type => {
    const el = document.getElementById(type + '-colors');
    const cur = TEAM[type + 'Color'];
    el.innerHTML = TEAM_COLORS.map(c => `
      <div class="color-swatch ${c===cur?'active':''}" style="background:${c}"
        onclick="selectTeamColor('${type}','${c}')"></div>
    `).join('');
  });
  updateColorPreview();

  // Seasons
  document.getElementById('seasons-list').innerHTML = SEASONS.map(s => `
    <div class="season-card" onclick="activateSeason(${s.id})">
      <div style="font-weight:600;font-size:.85rem;flex:1">${s.label}</div>
      ${s.active ? '<span class="season-active-badge">ACTIVE</span>' : '<span style="font-size:.72rem;color:var(--muted)">Archivée</span>'}
    </div>
  `).join('');

  // Squad
  renderSquad();
}

function renderSquad() {
  const filtered = playerFilter === 'all' ? PLAYERS
    : playerFilter === 'GK' ? PLAYERS.filter(p => p.pos === 'GK')
    : playerFilter === 'DEF' ? PLAYERS.filter(p => ['CB','LB','RB'].includes(p.pos))
    : playerFilter === 'MID' ? PLAYERS.filter(p => ['CM','LM','RM','CAM','CDM'].includes(p.pos))
    : PLAYERS.filter(p => ['LW','RW','ST','CF'].includes(p.pos));

  document.getElementById('squad-count').textContent = PLAYERS.length;
  document.getElementById('squad-list').innerHTML = filtered.map(p => `
    <div class="player-card" onclick="openTeamModal('editPlayer', ${p.id})">
      ${avatarHTML(p, 'lg')}
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:.85rem">${p.name}</div>
        <div style="font-size:.7rem;color:var(--muted);margin-top:.1rem">
          N°${p.num} · <span class="pos-badge ${posCls(p.pos)}" style="font-size:.6rem">${p.pos}</span> · ${p.age} ans
        </div>
      </div>
      <div class="player-card-actions">
        <div class="pc-btn" onclick="event.stopPropagation();openTeamModal('editPlayer',${p.id})" title="Modifier">✏️</div>
        <div class="pc-btn del" onclick="event.stopPropagation();deletePlayer(${p.id})" title="Supprimer">🗑</div>
      </div>
    </div>
  `).join('') || '<div style="text-align:center;padding:2rem;color:var(--muted);font-size:.85rem">Aucun joueur dans cette catégorie</div>';
}

function filterPlayers(f) {
  playerFilter = f;
  ['all','GK','DEF','MID','ATT'].forEach(id => {
    const el = document.getElementById('filter-' + id);
    if (el) el.style.cssText = f===id
      ? 'background:var(--green-dim);border-color:rgba(0,230,118,.3);color:var(--green)'
      : '';
  });
  renderSquad();
}

function selectTeamColor(type, color) {
  TEAM[type + 'Color'] = color;
  renderTeam();
}

function updateColorPreview() {
  const hp = document.getElementById('color-preview-home');
  const ap = document.getElementById('color-preview-away');
  if (hp) { hp.style.background = TEAM.primaryColor + '33'; hp.style.color = TEAM.primaryColor; }
  if (ap) { ap.style.background = TEAM.secondaryColor + '33'; ap.style.color = TEAM.secondaryColor; }
}

function saveTeamColors() { showToast('Couleurs enregistrées ✓'); }

function activateSeason(id) {
  SEASONS.forEach(s => s.active = s.id === id);
  const active = SEASONS.find(s=>s.active);
  if (active) { TEAM.season = 'Saison ' + active.label; }
  renderTeam();
  showToast('Saison ' + active.label + ' activée');
}

// ═══════════════════════════════════
//  TEAM MODALS
// ═══════════════════════════════════
function openTeamModal(mode, pid) {
  teamModalMode = mode;
  editingPlayerId = pid || null;
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  const title = document.getElementById('modal-title');
  const footer = document.querySelector('.modal-footer');
  footer.style.display = 'flex';

  if (mode === 'info') {
    title.textContent = 'MODIFIER L\'ÉQUIPE';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Nom de l'équipe</label>
        <input class="form-input" id="f-tname" value="${TEAM.name}" placeholder="FC Étoile 2024" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Ville</label>
          <input class="form-input" id="f-tcity" value="${TEAM.city}" placeholder="Paris" />
        </div>
        <div class="form-group">
          <label class="form-label">Compétition / Ligue</label>
          <input class="form-input" id="f-tleague" value="${TEAM.league}" placeholder="Division 3" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Saison en cours</label>
        <input class="form-input" id="f-tseason" value="${TEAM.season}" placeholder="Saison 2024–2025" />
      </div>
      <div class="form-group">
        <label class="form-label">Description / Slogan (optionnel)</label>
        <input class="form-input" id="f-tdesc" placeholder="Notre équipe, notre fierté…" />
      </div>
    `;
  } else if (mode === 'badge') {
    title.textContent = 'LOGO DU CLUB';
    const hasLogo = !!TEAM.logoUrl;
    body.innerHTML = `
      <!-- Upload zone -->
      <div class="form-group" style="text-align:center">
        <label class="form-label" style="display:block;margin-bottom:.75rem">Image du logo</label>
        <div class="logo-upload-zone" id="logo-zone">
          <div class="logo-upload-box ${hasLogo?'has-photo':''}" id="logo-preview-box">
            ${hasLogo
              ? `<img src="${TEAM.logoUrl}" id="logo-preview-img" /><button class="photo-clear-btn" onclick="clearLogo(event)">✕</button>`
              : `<div class="upload-icon">🏟️</div><div class="upload-hint">Cliquez pour<br>choisir un logo</div>`}
          </div>
          <input type="file" accept="image/*" onchange="previewLogo(event)" />
        </div>
        <div class="upload-source-row">
          <div class="upload-src-btn">
            📁 Galerie
            <input type="file" accept="image/*" capture="false" onchange="previewLogo(event)" />
          </div>
          <div class="upload-src-btn">
            📷 Caméra
            <input type="file" accept="image/*" capture="environment" onchange="previewLogo(event)" />
          </div>
        </div>
        <div style="font-size:.68rem;color:var(--muted);margin-top:.5rem">JPG, PNG, SVG · Max 5 Mo</div>
      </div>

      <div style="display:flex;align-items:center;gap:.75rem;margin:.75rem 0">
        <div style="flex:1;height:1px;background:var(--border)"></div>
        <span style="font-size:.7rem;color:var(--muted);font-weight:600">OU choisir un emoji</span>
        <div style="flex:1;height:1px;background:var(--border)"></div>
      </div>

      <div class="form-group">
        <div class="emoji-grid" id="emoji-grid">
          ${TEAM_EMOJIS.map(e => `<div class="emoji-opt ${!hasLogo&&e===TEAM.emoji?'active':''}" onclick="selectEmoji('${e}')">${e}</div>`).join('')}
        </div>
      </div>
    `;
  } else if (mode === 'season') {
    title.textContent = 'NOUVELLE SAISON';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Label de la saison</label>
        <input class="form-input" id="f-season" placeholder="Ex: 2025–2026" value="2025–2026" />
      </div>
      <div style="background:rgba(240,180,41,0.08);border:1px solid rgba(240,180,41,0.2);border-radius:8px;padding:.75rem;font-size:.78rem;color:var(--accent)">
        ⚠️ Créer une nouvelle saison archivera la saison actuelle. Les stats seront conservées.
      </div>
    `;
  } else if (mode === 'addSubTeam') {
    title.textContent = 'NOUVELLE ÉQUIPE';
    buildSubTeamForm('Équipe B', '🟡', '#F0B429');
    document.querySelector('.modal-footer').innerHTML = `
      <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
      <button class="btn btn-green" onclick="submitTeamModal()">Créer</button>`;
    overlay.classList.add('open');
    return;
  } else if (mode === 'player') {
    title.textContent = 'AJOUTER UN JOUEUR';
    body.innerHTML = playerFormHTML();
  } else if (mode === 'editPlayer') {
    const p = PLAYERS.find(pp => pp.id === pid);
    if (!p) return;
    title.textContent = 'MODIFIER LE JOUEUR';
    body.innerHTML = playerFormHTML(p);
    // Add delete button in footer
    footer.innerHTML = `
      <button class="btn btn-red" onclick="deletePlayer(${pid});closeModal()">🗑 Supprimer</button>
      <div style="flex:1"></div>
      <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
      <button class="btn btn-green" onclick="submitTeamModal()">Enregistrer</button>
    `;
    overlay.classList.add('open');
    return;
  }

  // Reset footer
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitTeamModal()">Enregistrer</button>
  `;
  overlay.classList.add('open');
}

function playerFormHTML(p) {
  const posOptions = ['GK','LB','CB','RB','CDM','CM','CAM','LM','RM','LW','RW','ST','CF'];
  const hasPhoto = p && !!p.photoUrl;
  return `
    <!-- Photo joueur -->
    <div class="form-group" style="text-align:center">
      <label class="form-label" style="display:block;margin-bottom:.6rem">Photo du joueur</label>
      <div style="position:relative;display:inline-block">
        <div class="avatar-upload ${hasPhoto?'has-photo':''}" id="player-photo-preview" style="width:80px;height:80px;${hasPhoto?'border:2px solid var(--green)':''}${p?';background:'+p.color:''}">
          ${hasPhoto
            ? `<img src="${p.photoUrl}" /><button class="photo-clear-btn" onclick="clearPlayerPhoto(event)">✕</button>`
            : `<div class="upload-icon">👤</div><div class="upload-hint">Ajouter<br>une photo</div>`}
          ${!hasPhoto && p ? `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:800;color:var(--black);border-radius:50%">${initials(p.name)}</div>` : ''}
        </div>
      </div>
      <div class="upload-source-row" style="max-width:220px;margin:.5rem auto 0">
        <div class="upload-src-btn">
          📁 Galerie
          <input type="file" accept="image/*" onchange="previewPlayerPhoto(event)" />
        </div>
        <div class="upload-src-btn">
          📷 Caméra
          <input type="file" accept="image/*" capture="user" onchange="previewPlayerPhoto(event)" />
        </div>
      </div>
    </div>

    <div style="height:1px;background:var(--border);margin:.5rem 0"></div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Prénom</label>
        <input class="form-input" id="f-fname" placeholder="Prénom" value="${p ? p.name.split(' ')[0] : ''}" />
      </div>
      <div class="form-group">
        <label class="form-label">Nom</label>
        <input class="form-input" id="f-lname" placeholder="Nom" value="${p ? p.name.split(' ').slice(1).join(' ') : ''}" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">N° maillot</label>
        <input class="form-input" id="f-num" type="number" min="1" max="99" placeholder="Ex: 10" value="${p ? p.num : ''}" />
      </div>
      <div class="form-group">
        <label class="form-label">Âge</label>
        <input class="form-input" id="f-age" type="number" min="14" max="55" placeholder="Ex: 22" value="${p ? p.age : ''}" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Poste</label>
        <select class="form-select" id="f-pos">
          ${posOptions.map(pos => `<option value="${pos}" ${p&&p.pos===pos?'selected':''}>${pos}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Pied fort</label>
        <select class="form-select" id="f-foot">
          <option value="D" ${p&&p.foot==='D'?'selected':''}>Pied droit</option>
          <option value="G" ${p&&p.foot==='G'?'selected':''}>Pied gauche</option>
          <option value="2" ${p&&p.foot==='2'?'selected':''}>Les deux</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Téléphone / Contact</label>
      <input class="form-input" id="f-phone" type="tel" placeholder="06 XX XX XX XX" value="${p ? (p.phone||'') : ''}" />
    </div>
    <div class="form-group">
      <label class="form-label">Email</label>
      <input class="form-input" id="f-email" type="email" placeholder="joueur@email.com" value="${p ? (p.email||'') : ''}" />
    </div>
  `;
}

// temp holders during modal editing
let _pendingPlayerPhoto = null;
let _pendingLogoUrl = null;

function previewPlayerPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('⚠️ Image trop lourde (max 5 Mo)'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _pendingPlayerPhoto = e.target.result;
    const box = document.getElementById('player-photo-preview');
    if (box) {
      box.innerHTML = `<img src="${_pendingPlayerPhoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" /><button class="photo-clear-btn" style="display:flex" onclick="clearPlayerPhoto(event)">✕</button>`;
      box.classList.add('has-photo');
      box.style.border = '2px solid var(--green)';
    }
  };
  reader.readAsDataURL(file);
}

function clearPlayerPhoto(e) {
  e.stopPropagation();
  _pendingPlayerPhoto = null;
  const box = document.getElementById('player-photo-preview');
  if (box) {
    box.classList.remove('has-photo');
    box.style.border = '2px dashed var(--border2)';
    box.innerHTML = `<div class="upload-icon">👤</div><div class="upload-hint">Ajouter<br>une photo</div>`;
  }
  if (editingPlayerId) {
    const p = PLAYERS.find(pp => pp.id === editingPlayerId);
    if (p) p.photoUrl = null;
  }
}

function previewLogo(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('⚠️ Image trop lourde (max 5 Mo)'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    _pendingLogoUrl = e.target.result;
    // Clear emoji selection
    document.querySelectorAll('.emoji-opt').forEach(el => el.classList.remove('active'));
    const box = document.getElementById('logo-preview-box');
    if (box) {
      box.innerHTML = `<img src="${_pendingLogoUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:16px" /><button class="photo-clear-btn" style="display:flex" onclick="clearLogo(event)">✕</button>`;
      box.classList.add('has-photo');
      box.style.border = '2px solid var(--green)';
    }
  };
  reader.readAsDataURL(file);
}

function clearLogo(e) {
  e.stopPropagation();
  _pendingLogoUrl = null;
  TEAM.logoUrl = null;
  const box = document.getElementById('logo-preview-box');
  if (box) {
    box.classList.remove('has-photo');
    box.style.border = '';
    box.innerHTML = `<div class="upload-icon">🏟️</div><div class="upload-hint">Cliquez pour<br>choisir un logo</div>`;
  }
  updateTeamBadgeDisplay();
}

function updateTeamBadgeDisplay() {
  const badge = document.getElementById('team-badge-display');
  const emojiEl = document.getElementById('team-emoji-display');
  if (!badge) return;
  if (TEAM.logoUrl) {
    badge.innerHTML = `<img src="${TEAM.logoUrl}" /><div class="team-badge-edit">✏️</div>`;
  } else {
    badge.innerHTML = `<span id="team-emoji-display">${TEAM.emoji}</span><div class="team-badge-edit">✏️</div>`;
  }
  badge.style.background = TEAM.primaryColor + '22';
}

function selectEmoji(e) {
  TEAM.emoji = e;
  _pendingLogoUrl = null; // emoji takes over
  document.querySelectorAll('.emoji-opt').forEach(el => el.classList.toggle('active', el.textContent === e));
  // Clear logo preview if any
  const box = document.getElementById('logo-preview-box');
  if (box) {
    box.classList.remove('has-photo');
    box.innerHTML = `<div class="upload-icon">🏟️</div><div class="upload-hint">Cliquez pour<br>choisir un logo</div>`;
  }
}

function submitTeamModal() {
  if (teamModalMode === 'addSubTeam') {
    // ── FREEMIUM GATE ──
    if (!checkSubTeamLimit()) return;
    const name  = document.getElementById('f-stname')?.value?.trim();
    const icon  = document.getElementById('f-sticon')?.value || '🟡';
    const color = document.getElementById('f-stcolor')?.value || '#F0B429';
    if (!name) { showToast('⚠️ Nom requis'); return; }
    const newId = 'team_' + Date.now();
    SUB_TEAMS.push({ id: newId, name, icon, color, playerIds: [] });
    activeTeamTab = newId;
    renderTeamTabs();
    showToast(name + ' créée ✓');
    closeModal(); return;

  } else if (teamModalMode === 'editSubTeam') {
    const t = SUB_TEAMS.find(tt=>tt.id===editingPlayerId);
    if (t) {
      t.name  = document.getElementById('f-stname')?.value?.trim() || t.name;
      t.icon  = document.getElementById('f-sticon')?.value || t.icon;
      t.color = document.getElementById('f-stcolor')?.value || t.color;
    }
    renderTeamTabs();
    showToast('Équipe mise à jour ✓');
    closeModal(); return;

  } else if (teamModalMode === 'addToSubTeam') {
    const t = SUB_TEAMS.find(tt=>tt.id===editingPlayerId);
    if (t) {
      selectedForAdd.forEach(pid => { if (!t.playerIds.includes(pid)) t.playerIds.push(pid); });
      selectedForAdd.clear();
    }
    renderTeamTabs();
    showToast('Joueurs ajoutés ✓');
    closeModal(); return;

  } else if (teamModalMode === 'globalMove') {
    const pid    = parseInt(document.getElementById('f-movepid')?.value);
    const toId   = document.getElementById('f-movetid')?.value;
    const action = document.getElementById('f-moveaction')?.value;
    const toT = SUB_TEAMS.find(t=>t.id===toId);
    if (toT && !toT.playerIds.includes(pid)) toT.playerIds.push(pid);
    if (action === 'move') {
      SUB_TEAMS.forEach(t => { if (t.id !== toId) t.playerIds = t.playerIds.filter(id=>id!==pid); });
    }
    renderTeamTabs();
    const p = PLAYERS.find(pp=>pp.id===pid);
    showToast(`${p?.name} → ${toT?.name} ✓`);
    closeModal(); return;

  } else if (teamModalMode === 'info') {
    TEAM.name   = document.getElementById('f-tname')?.value   || TEAM.name;
    TEAM.city   = document.getElementById('f-tcity')?.value   || TEAM.city;
    TEAM.league = document.getElementById('f-tleague')?.value || TEAM.league;
    TEAM.season = document.getElementById('f-tseason')?.value || TEAM.season;
    renderTeam();
    showToast('Équipe mise à jour ✓');
  } else if (teamModalMode === 'badge') {
    if (_pendingLogoUrl) {
      TEAM.logoUrl = _pendingLogoUrl;
      TEAM.emoji = null;
    } else if (!_pendingLogoUrl && TEAM.emoji) {
      // Emoji sélectionné — effacer le logo
      TEAM.logoUrl = null;
    }
    _pendingLogoUrl = null;
    // Sync CLUB aussi pour la page d'accueil
    CLUB.logoUrl = TEAM.logoUrl;
    CLUB.emoji   = TEAM.emoji;
    updateTeamBadgeDisplay();
    renderTeam();
    renderHome();
    showToast('Logo mis à jour ✓');
    scheduleSave();
  } else if (teamModalMode === 'season') {
    const label = document.getElementById('f-season')?.value;
    if (label) {
      SEASONS.forEach(s => s.active = false);
      const newId = Math.max(...SEASONS.map(s=>s.id)) + 1;
      SEASONS.unshift({ id: newId, label, active: true });
      TEAM.season = 'Saison ' + label;
      renderTeam();
      showToast('Saison ' + label + ' créée ✓');
    }
  } else if (teamModalMode === 'player') {
    // ── FREEMIUM GATE ──
    if (!checkPlayerLimit()) return;
    const fname = document.getElementById('f-fname')?.value?.trim();
    const lname = document.getElementById('f-lname')?.value?.trim();
    const num   = parseInt(document.getElementById('f-num')?.value) || PLAYERS.length + 1;
    const age   = parseInt(document.getElementById('f-age')?.value) || 20;
    const pos   = document.getElementById('f-pos')?.value || 'CM';
    const phone = document.getElementById('f-phone')?.value || '';
    const email = document.getElementById('f-email')?.value || '';
    if (!fname || !lname) { showToast('⚠️ Nom et prénom requis'); return; }
    const POS_COLORS_MAP = { GK:'#FF4757', LB:'#F0B429', CB:'#F0B429', RB:'#F0B429', LM:'#4DABF7', CM:'#4DABF7', RM:'#4DABF7', CAM:'#4DABF7', CDM:'#4DABF7', LW:'#00E676', RW:'#00E676', ST:'#00E676', CF:'#00E676' };
    const newPlayer = {
      id: PLAYERS.length > 0 ? Math.max(...PLAYERS.map(p=>p.id)) + 1 : 1,
      name: fname + ' ' + lname, num, pos, age, phone, email,
      goals:0, assists:0, rating:6.0, tackles:0, inters:0, clearances:0, saves:0, goalsConceded:0,
      color: POS_COLORS_MAP[pos] || '#4DABF7',
      photoUrl: _pendingPlayerPhoto || null,
      foot: document.getElementById('f-foot')?.value || 'D',
    };
    _pendingPlayerPhoto = null;
    PLAYERS.push(newPlayer);
    renderTeam(); renderStats(); renderPlayers();
    showToast(fname + ' ' + lname + ' ajouté ✓');
    scheduleSave();
  } else if (teamModalMode === 'editPlayer') {
    const p = PLAYERS.find(pp => pp.id === editingPlayerId);
    if (!p) return;
    const fname = document.getElementById('f-fname')?.value?.trim();
    const lname = document.getElementById('f-lname')?.value?.trim();
    if (!fname || !lname) { showToast('⚠️ Nom et prénom requis'); return; }
    p.name  = fname + ' ' + lname;
    p.num   = parseInt(document.getElementById('f-num')?.value) || p.num;
    p.age   = parseInt(document.getElementById('f-age')?.value) || p.age;
    p.pos   = document.getElementById('f-pos')?.value || p.pos;
    p.phone = document.getElementById('f-phone')?.value || '';
    p.email = document.getElementById('f-email')?.value || '';
    p.foot  = document.getElementById('f-foot')?.value || p.foot || 'D';
    if (_pendingPlayerPhoto !== null) { p.photoUrl = _pendingPlayerPhoto; }
    _pendingPlayerPhoto = null;
    renderTeam(); renderStats(); renderPlayers();
    showToast(p.name + ' mis à jour ✓');
    scheduleSave();
  }
  closeModal();
}

function deletePlayer(pid) {
  const p = PLAYERS.find(pp => pp.id === pid);
  if (!p) return;
  if (!confirm(`Supprimer ${p.name} de l'effectif ?`)) return;
  const idx = PLAYERS.indexOf(p);
  PLAYERS.splice(idx, 1);
  // Remove from sub-teams
  SUB_TEAMS.forEach(t => { t.playerIds = t.playerIds.filter(id => id !== pid); });
  renderTeam(); renderStats(); renderPlayers();
  showToast(p.name + ' supprimé');
}

// ═══════════════════════════════════
//  MULTI-TEAM DATA & LOGIC
// ═══════════════════════════════════

// Sub-teams: "Équipe A" and optional "Équipe B / Réserve / etc."
// teamId 'all' = Vue globale (tous les joueurs)
let SUB_TEAMS = [
  { id: 'A', name: 'Équipe A', icon: '⭐', color: '#00E676', playerIds: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 'B', name: 'Équipe B', icon: '🟡', color: '#F0B429', playerIds: [12,13,14,15,16] },
];

let activeTeamTab = 'all'; // 'all' | team.id
let teamPlayerFilter = 'all';

function renderTeam() {
  updateTeamBadgeDisplay();
  document.getElementById('team-name-display').textContent   = TEAM.name;
  document.getElementById('team-page-title').textContent     = TEAM.name.toUpperCase();
  document.getElementById('team-league-display').textContent = TEAM.league;
  document.getElementById('team-season-display').textContent = TEAM.season;
  document.getElementById('team-city-display').textContent   = TEAM.city;
  document.getElementById('team-count-display').textContent  = PLAYERS.length;

  // Sidebar
  const logoEl = TEAM.logoUrl
    ? `<img src="${TEAM.logoUrl}" style="width:16px;height:16px;object-fit:cover;border-radius:3px;vertical-align:middle;margin-right:4px" />`
    : (TEAM.emoji || '⚽') + ' ';
  document.querySelector('.sb-team-name').innerHTML = logoEl + TEAM.name;
  document.querySelector('.sb-team-sub').textContent = TEAM.season + ' · ' + TEAM.league;

  // Color palettes
  ['primary','secondary'].forEach(type => {
    const el = document.getElementById(type + '-colors');
    if (!el) return;
    const cur = TEAM[type + 'Color'];
    el.innerHTML = TEAM_COLORS.map(c => `
      <div class="color-swatch ${c===cur?'active':''}" style="background:${c}"
        onclick="selectTeamColor('${type}','${c}')"></div>
    `).join('');
  });
  updateColorPreview();

  // Seasons
  const sl = document.getElementById('seasons-list');
  if (sl) sl.innerHTML = SEASONS.map(s => `
    <div class="season-card" onclick="activateSeason(${s.id})">
      <div style="font-weight:600;font-size:.85rem;flex:1">${s.label}</div>
      ${s.active ? '<span class="season-active-badge">ACTIVE</span>' : '<span style="font-size:.72rem;color:var(--muted)">Archivée</span>'}
    </div>
  `).join('');

  renderTeamTabs();
}

function renderTeamTabs() {
  const tabsEl = document.getElementById('team-tabs');
  const contentEl = document.getElementById('team-tab-content');
  if (!tabsEl || !contentEl) return;

  // Build tabs: Vue globale + each sub-team
  const totalAll = PLAYERS.length;
  tabsEl.innerHTML = `
    <button class="team-tab ${activeTeamTab==='all'?'active':''}" onclick="switchTeamTab('all')">
      🌐 Vue globale <span class="tab-badge">${totalAll}</span>
    </button>
    ${SUB_TEAMS.map(t => `
      <button class="team-tab ${activeTeamTab===t.id?'active':''}" onclick="switchTeamTab('${t.id}')">
        ${t.icon} ${t.name} <span class="tab-badge">${t.playerIds.length}</span>
      </button>
    `).join('')}
  `;

  // Render active tab content
  if (activeTeamTab === 'all') {
    renderGlobalView(contentEl);
  } else {
    const subTeam = SUB_TEAMS.find(t => t.id === activeTeamTab);
    if (subTeam) renderSubTeamView(contentEl, subTeam);
  }
}

function switchTeamTab(tabId) {
  activeTeamTab = tabId;
  teamPlayerFilter = 'all';
  renderTeamTabs();
}

// ─── VUE GLOBALE : tous les joueurs ───
function renderGlobalView(container) {
  const posGroups = [
    { key:'GK',  label:'🧤 Gardiens',    test: p => p.pos==='GK' },
    { key:'DEF', label:'🛡️ Défenseurs',  test: p => ['LB','CB','RB'].includes(p.pos) },
    { key:'MID', label:'⚡ Milieux',      test: p => ['CM','LM','RM','CAM','CDM'].includes(p.pos) },
    { key:'ATT', label:'⚽ Attaquants',   test: p => ['LW','RW','ST','CF'].includes(p.pos) },
  ];

  // Filter bar
  const filterBar = `
    <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.85rem;align-items:center">
      <span style="font-size:.7rem;font-weight:700;color:var(--muted);letter-spacing:.06em;text-transform:uppercase">Filtrer :</span>
      ${[['all','Tous'],['GK','GK'],['DEF','Défense'],['MID','Milieu'],['ATT','Attaque']].map(([k,l])=>`
        <div class="section-head-action ${teamPlayerFilter===k?'':''}${ teamPlayerFilter===k?'style="background:var(--green-dim);border-color:rgba(0,230,118,.3);color:var(--green)"':''}"
          style="${teamPlayerFilter===k?'background:var(--green-dim);border-color:rgba(0,230,118,.3);color:var(--green)':''}"
          onclick="setTeamFilter('${k}')">${l}</div>
      `).join('')}
      <div style="margin-left:auto">
        <div class="section-head-action" onclick="openTeamModal('player')">+ Ajouter un joueur</div>
      </div>
    </div>`;

  let html = filterBar;

  if (teamPlayerFilter === 'all') {
    posGroups.forEach(g => {
      const group = PLAYERS.filter(g.test);
      if (!group.length) return;
      html += `<div class="squad-section-label">${g.label} · ${group.length}</div>`;
      html += group.map(p => playerCardHTML(p, true)).join('');
    });
  } else {
    const group = PLAYERS.filter(posGroups.find(g=>g.key===teamPlayerFilter)?.test || (()=>true));
    if (!group.length) html += `<div style="text-align:center;padding:2rem;color:var(--muted);font-size:.82rem">Aucun joueur dans cette catégorie</div>`;
    else html += group.map(p => playerCardHTML(p, true)).join('');
  }

  html += `<div style="text-align:center;padding:.5rem;font-size:.72rem;color:var(--muted)">Total : ${PLAYERS.length} joueurs dans l'effectif</div>`;
  container.innerHTML = html;
}

// ─── VUE SOUS-ÉQUIPE ───
function renderSubTeamView(container, subTeam) {
  const teamPlayers   = PLAYERS.filter(p => subTeam.playerIds.includes(p.id));
  const otherPlayers  = PLAYERS.filter(p => !subTeam.playerIds.includes(p.id));

  container.innerHTML = `
    <!-- Sub-team header -->
    <div class="subteam-header">
      <div class="subteam-badge" style="background:${subTeam.color}18;border:2px solid ${subTeam.color}44">${subTeam.icon}</div>
      <div>
        <div class="subteam-name">${subTeam.name}</div>
        <div class="subteam-meta">${teamPlayers.length} joueur${teamPlayers.length>1?'s':''} · ${TEAM.name}</div>
      </div>
      <div class="subteam-actions">
        <button class="tb-btn" onclick="openEditSubTeamModal('${subTeam.id}')">✏️ Modifier</button>
        <button class="tb-btn" onclick="openAddToSubTeamModal('${subTeam.id}')">+ Ajouter joueur</button>
        ${SUB_TEAMS.length > 1 ? `<button class="tb-btn" style="color:var(--red)" onclick="deleteSubTeam('${subTeam.id}')">🗑</button>` : ''}
      </div>
    </div>

    <!-- Players in this team -->
    <div class="squad-section-label">👥 EFFECTIF — ${teamPlayers.length} JOUEURS</div>
    ${teamPlayers.length
      ? teamPlayers.map(p => playerCardHTML(p, false, subTeam.id)).join('')
      : '<div style="text-align:center;padding:1.5rem;color:var(--muted);font-size:.82rem">Aucun joueur dans cette équipe. Cliquez "+ Ajouter joueur".</div>'}

    <!-- Available from other teams -->
    ${otherPlayers.length ? `
      <div class="squad-section-label" style="margin-top:.5rem">🔄 DISPONIBLES POUR MONTÉE / DESCENTE — ${otherPlayers.length}</div>
      ${otherPlayers.map(p => playerCardMiniHTML(p, subTeam.id)).join('')}
    ` : ''}
  `;
}

// ─── Player card HTML helpers ───
function playerCardHTML(p, showTeamBadge, teamId) {
  const teamBadge = showTeamBadge ? getPlayerTeamBadge(p.id) : '';
  return `
    <div class="player-card" onclick="openTeamModal('editPlayer',${p.id})">
      ${avatarHTML(p, 'lg')}
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:.85rem;display:flex;align-items:center;gap:.4rem">
          ${p.name} ${teamBadge}
        </div>
        <div style="font-size:.7rem;color:var(--muted);margin-top:.15rem">
          N°${p.num} · <span class="pos-badge ${posCls(p.pos)}" style="font-size:.6rem">${p.pos}</span> · ${p.age} ans
        </div>
      </div>
      <div class="player-card-actions">
        ${teamId ? `<div class="pc-btn" onclick="event.stopPropagation();movePlayerBetweenTeams(${p.id},'${teamId}')" title="Changer d'équipe">🔄</div>` : ''}
        <div class="pc-btn" onclick="event.stopPropagation();openTeamModal('editPlayer',${p.id})" title="Modifier">✏️</div>
        <div class="pc-btn del" onclick="event.stopPropagation();deletePlayer(${p.id})" title="Supprimer">🗑</div>
      </div>
    </div>`;
}

function playerCardMiniHTML(p, targetTeamId) {
  return `
    <div class="player-card" style="opacity:.7" onclick="addPlayerToSubTeam(${p.id},'${targetTeamId}')">
      ${avatarHTML(p)}
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;font-size:.8rem">${p.name}</div>
        <div style="font-size:.65rem;color:var(--muted)">${p.pos} · N°${p.num}</div>
      </div>
      <div style="font-size:.72rem;color:var(--green);font-weight:700;flex-shrink:0">+ Ajouter →</div>
    </div>`;
}

function getPlayerTeamBadge(pid) {
  const team = SUB_TEAMS.find(t => t.playerIds.includes(pid));
  if (!team) return '';
  return `<span class="player-card-team-badge" style="background:${team.color}18;color:${team.color};border:1px solid ${team.color}44">${team.icon} ${team.name}</span>`;
}

function setTeamFilter(f) {
  teamPlayerFilter = f;
  renderTeamTabs();
}

// ─── Sub-team management ───
function openEditSubTeamModal(teamId) {
  const t = SUB_TEAMS.find(tt=>tt.id===teamId);
  if (!t) return;
  teamModalMode = 'editSubTeam';
  editingPlayerId = teamId;
  buildSubTeamForm(t.name, t.icon, t.color);
  document.getElementById('modal-title').textContent = 'MODIFIER L\'ÉQUIPE';
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitTeamModal()">Enregistrer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function buildSubTeamForm(name, icon, color) {
  const icons = ['⭐','🟡','🔵','🔴','🟢','🟣','⚡','🏅','🥈','🛡️','💫','🎯'];
  const colors = ['#00E676','#F0B429','#4DABF7','#FF4757','#B197FC','#FF6B9D','#2EC4B6','#fff'];
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label class="form-label">Nom de l'équipe</label>
      <input class="form-input" id="f-stname" value="${name}" placeholder="Ex: Équipe Réserve" />
    </div>
    <div class="form-group">
      <label class="form-label">Icône</label>
      <div style="display:flex;gap:.35rem;flex-wrap:wrap" id="st-icon-row">
        ${icons.map(ic=>`<div style="width:34px;height:34px;border-radius:8px;background:var(--card);border:1px solid ${ic===icon?'var(--green)':'var(--border)'};display:flex;align-items:center;justify-content:center;font-size:1.1rem;cursor:pointer" onclick="selectSubTeamIcon('${ic}',this)">${ic}</div>`).join('')}
      </div>
      <input type="hidden" id="f-sticon" value="${icon}" />
    </div>
    <div class="form-group">
      <label class="form-label">Couleur</label>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap">
        ${colors.map(c=>`<div style="width:28px;height:28px;border-radius:6px;background:${c};cursor:pointer;border:2px solid ${c===color?'white':'transparent'}" onclick="selectSubTeamColor('${c}',this)"></div>`).join('')}
      </div>
      <input type="hidden" id="f-stcolor" value="${color}" />
    </div>`;
}

function selectSubTeamIcon(ic, el) {
  document.getElementById('f-sticon').value = ic;
  document.querySelectorAll('#st-icon-row > div').forEach(d => d.style.borderColor = 'var(--border)');
  el.style.borderColor = 'var(--green)';
}
function selectSubTeamColor(c, el) {
  document.getElementById('f-stcolor').value = c;
  document.querySelectorAll('[onclick^="selectSubTeamColor"]').forEach(d => d.style.borderColor = 'transparent');
  el.style.borderColor = 'white';
}

function openAddToSubTeamModal(teamId) {
  const t = SUB_TEAMS.find(tt=>tt.id===teamId);
  const available = PLAYERS.filter(p => !t.playerIds.includes(p.id));
  teamModalMode = 'addToSubTeam';
  editingPlayerId = teamId;
  document.getElementById('modal-title').textContent = `AJOUTER À ${t.name.toUpperCase()}`;
  document.getElementById('modal-body').innerHTML = available.length
    ? available.map(p => `
        <div class="move-player-item" id="sel-${p.id}" onclick="toggleSelectForAdd(${p.id})">
          ${avatarHTML(p)}
          <div class="move-player-name">${p.name}</div>
          <span class="pos-badge ${posCls(p.pos)}" style="font-size:.62rem">${p.pos} · N°${p.num}</span>
        </div>`).join('')
    : '<div style="text-align:center;padding:1.5rem;color:var(--muted)">Tous les joueurs sont déjà dans cette équipe.</div>';
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitTeamModal()">Ajouter la sélection</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

let selectedForAdd = new Set();
function toggleSelectForAdd(pid) {
  const el = document.getElementById('sel-' + pid);
  if (selectedForAdd.has(pid)) { selectedForAdd.delete(pid); el?.classList.remove('selected'); }
  else { selectedForAdd.add(pid); el?.classList.add('selected'); }
}

function addPlayerToSubTeam(pid, teamId) {
  const t = SUB_TEAMS.find(tt=>tt.id===teamId);
  if (!t || t.playerIds.includes(pid)) return;
  t.playerIds.push(pid);
  renderTeamTabs();
  showToast(`${PLAYERS.find(p=>p.id===pid)?.name} ajouté à ${t.name} ✓`);
}

function removePlayerFromSubTeam(pid, teamId) {
  const t = SUB_TEAMS.find(tt=>tt.id===teamId);
  if (!t) return;
  t.playerIds = t.playerIds.filter(id=>id!==pid);
  renderTeamTabs();
  showToast('Joueur retiré de l\'équipe');
}

function deleteSubTeam(teamId) {
  if (!confirm('Supprimer cette équipe ? Les joueurs resteront dans l\'effectif.')) return;
  SUB_TEAMS = SUB_TEAMS.filter(t=>t.id!==teamId);
  if (activeTeamTab === teamId) activeTeamTab = 'all';
  renderTeamTabs();
  showToast('Équipe supprimée');
}

// ─── Move player between teams ───
let movePid = null, moveFromTeam = null, moveToTeamId = null;

function movePlayerBetweenTeams(pid, fromTeamId) {
  movePid = pid; moveFromTeam = fromTeamId; moveToTeamId = null;
  const p = PLAYERS.find(pp=>pp.id===pid);
  const otherTeams = SUB_TEAMS.filter(t=>t.id!==fromTeamId);
  document.getElementById('move-modal-body').innerHTML = `
    <p style="font-size:.82rem;color:var(--muted);margin-bottom:1rem">
      Déplacer <strong style="color:var(--text)">${p?.name}</strong> vers une autre équipe :
    </p>
    ${otherTeams.map(t=>`
      <div class="move-player-item" onclick="selectMoveTarget('${t.id}',this)" id="movetgt-${t.id}"
        style="border-radius:10px;padding:.7rem .9rem;margin-bottom:.4rem">
        <div style="font-size:1.3rem">${t.icon}</div>
        <div>
          <div style="font-weight:700;font-size:.85rem">${t.name}</div>
          <div style="font-size:.7rem;color:var(--muted)">${t.playerIds.length} joueurs actuellement</div>
        </div>
      </div>`).join('')}
    <div style="margin-top:.75rem;padding:.7rem;background:rgba(0,230,118,.05);border:1px solid rgba(0,230,118,.15);border-radius:8px;font-size:.75rem;color:var(--muted)">
      ℹ️ Le joueur sera retiré de l'équipe actuelle et ajouté à la nouvelle.
    </div>`;
  const btn = document.getElementById('move-confirm-btn');
  btn.disabled = true; btn.style.opacity = '.4';
  document.getElementById('move-modal-overlay').classList.add('open');
}

function selectMoveTarget(teamId, el) {
  moveToTeamId = teamId;
  document.querySelectorAll('[id^="movetgt-"]').forEach(d => { d.classList.remove('selected'); d.style.background=''; });
  el.classList.add('selected');
  const btn = document.getElementById('move-confirm-btn');
  btn.disabled = false; btn.style.opacity = '1';
}

function confirmMovePlayer() {
  if (!movePid || !moveFromTeam || !moveToTeamId) return;
  const fromT = SUB_TEAMS.find(t=>t.id===moveFromTeam);
  const toT   = SUB_TEAMS.find(t=>t.id===moveToTeamId);
  if (!fromT || !toT) return;
  fromT.playerIds = fromT.playerIds.filter(id=>id!==movePid);
  if (!toT.playerIds.includes(movePid)) toT.playerIds.push(movePid);
  closeMoveModal();
  renderTeamTabs();
  const p = PLAYERS.find(pp=>pp.id===movePid);
  showToast(`${p?.name} → ${toT.name} ✓`);
}

function closeMoveModal(e) {
  if (e && e.target !== document.getElementById('move-modal-overlay')) return;
  document.getElementById('move-modal-overlay').classList.remove('open');
  movePid = null; moveFromTeam = null; moveToTeamId = null;
}

function openMovePlayerModal() {
  // Open global move dialog — pick player then destination
  const overlay = document.getElementById('modal-overlay');
  teamModalMode = 'globalMove';
  document.getElementById('modal-title').textContent = '🔄 DÉPLACER UN JOUEUR';
  document.getElementById('modal-body').innerHTML = `
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:.75rem">Sélectionnez un joueur et son équipe de destination :</div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Joueur</label>
        <select class="form-select" id="f-movepid">
          ${PLAYERS.map(p=>`<option value="${p.id}">${p.name} (${p.pos})</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Vers l'équipe</label>
        <select class="form-select" id="f-movetid">
          ${SUB_TEAMS.map(t=>`<option value="${t.id}">${t.icon} ${t.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Action</label>
      <select class="form-select" id="f-moveaction">
        <option value="move">Déplacer (retirer de l'équipe actuelle)</option>
        <option value="copy">Monter (garder dans les deux équipes)</option>
      </select>
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitTeamModal()">Confirmer</button>`;
  overlay.classList.add('open');
}

// ─── openTeamModal addSubTeam case ───

// ═══════════════════════════════════
//  HOME PAGE DATA
// ═══════════════════════════════════

let CLUB = {
  name: 'FC Étoile 2024', emoji: '⚽', city: 'Paris',
  league: 'Division 3', season: 'Saison 2024–2025',
  founded: '2010', primaryColor: '#00E676', secondaryColor: '#F0B429',
  desc: 'Un club amateur passionné au cœur de la ville. Notre mission : développer le talent, l\'esprit d\'équipe et l\'amour du football.',
  logoUrl: null,
};

let STAFF = [
  { id:1, name:'Marc Leroy',    role:'Entraîneur Principal', phone:'06 12 34 56 78', email:'marc@fcetoile.fr', color:'#00E676', photoUrl:null },
  { id:2, name:'Julie Bernard', role:'Entraîneur Adjointe',  phone:'06 23 45 67 89', email:'julie@fcetoile.fr', color:'#4DABF7', photoUrl:null },
  { id:3, name:'Paul Simon',    role:'Préparateur Physique', phone:'06 34 56 78 90', email:'paul@fcetoile.fr',  color:'#F0B429', photoUrl:null },
  { id:4, name:'Clara Moreau',  role:'Médecin du club',      phone:'06 45 67 89 01', email:'clara@fcetoile.fr', color:'#B197FC', photoUrl:null },
  { id:5, name:'Antoine Petit', role:'Dirigeant / Président',phone:'06 56 78 90 12', email:'antoine@fcetoile.fr',color:'#FF4757',photoUrl:null },
  { id:6, name:'Sophie Blanc',  role:'Secrétaire',           phone:'06 67 89 01 23', email:'sophie@fcetoile.fr', color:'#FF6B9D', photoUrl:null },
];

const ALL_CATEGORIES = [
  { id:1,  name:'U6',        ageRange:'4-5 ans',    color:'#FF6B9D', active:false, players:0,  coach:'' },
  { id:2,  name:'U7',        ageRange:'5-6 ans',    color:'#FF6B9D', active:false, players:0,  coach:'' },
  { id:3,  name:'U8',        ageRange:'6-7 ans',    color:'#F0B429', active:false, players:0,  coach:'' },
  { id:4,  name:'U9',        ageRange:'7-8 ans',    color:'#F0B429', active:true,  players:12, coach:'Marc Leroy' },
  { id:5,  name:'U10',       ageRange:'8-9 ans',    color:'#F0B429', active:true,  players:14, coach:'Julie Bernard' },
  { id:6,  name:'U11',       ageRange:'9-10 ans',   color:'#00E676', active:true,  players:15, coach:'Paul Simon' },
  { id:7,  name:'U12',       ageRange:'10-11 ans',  color:'#00E676', active:true,  players:13, coach:'Marc Leroy' },
  { id:8,  name:'U13',       ageRange:'11-12 ans',  color:'#4DABF7', active:true,  players:16, coach:'Antoine Petit' },
  { id:9,  name:'U14',       ageRange:'12-13 ans',  color:'#4DABF7', active:true,  players:14, coach:'Julie Bernard' },
  { id:10, name:'U15',       ageRange:'13-14 ans',  color:'#4DABF7', active:true,  players:15, coach:'Paul Simon' },
  { id:11, name:'U17',       ageRange:'15-16 ans',  color:'#B197FC', active:true,  players:17, coach:'Marc Leroy' },
  { id:12, name:'U19',       ageRange:'17-18 ans',  color:'#B197FC', active:true,  players:18, coach:'Antoine Petit' },
  { id:13, name:'Senior A',  ageRange:'18+ ans',    color:'#00E676', active:true,  players:16, coach:'Marc Leroy' },
  { id:14, name:'Senior B',  ageRange:'18+ ans',    color:'#00E676', active:true,  players:15, coach:'Julie Bernard' },
  { id:15, name:'Féminine',  ageRange:'Tout âge',   color:'#FF6B9D', active:true,  players:14, coach:'Clara Moreau' },
  { id:16, name:'Vétérans',  ageRange:'35+ ans',    color:'#F0B429', active:true,  players:11, coach:'Paul Simon' },
];

let CLUB_CATEGORIES = ALL_CATEGORIES.filter(c => c.active);

let NEWS = [
  { id:1, icon:'🏆', title:'Victoire 3-1 contre FC Delta', date:'19 Mar 2025', text:'Belle performance collective avec un doublé d\'Alex Bernard.' },
  { id:2, icon:'📅', title:'Entraînement annulé le 25 mars', date:'18 Mar 2025', text:'En raison des intempéries, la séance du mardi est reportée.' },
  { id:3, icon:'👕', title:'Nouvelles tenues disponibles', date:'10 Mar 2025', text:'Les maillots de la saison 2024-25 sont disponibles au vestiaire.' },
  { id:4, icon:'🎉', title:'Tournoi de printemps confirmé', date:'05 Mar 2025', text:'Le tournoi annuel aura lieu le 12 avril. Inscription avant le 1er avril.' },
];

let homeModalMode = '';
let editingStaffId = null;
let editingCatId = null;
let catViewList = false;

// ═══════════════════════════════════
//  RENDER HOME
// ═══════════════════════════════════
function renderHome() {
  // Sync club info from TEAM
  CLUB.name = TEAM.name || CLUB.name;
  CLUB.emoji = TEAM.emoji || CLUB.emoji;
  CLUB.logoUrl = TEAM.logoUrl || CLUB.logoUrl;
  CLUB.league = TEAM.league || CLUB.league;
  CLUB.season = TEAM.season || CLUB.season;
  CLUB.city = TEAM.city || CLUB.city;

  // Hero
  const logoEl = document.getElementById('home-club-emoji');
  const logoBig = document.getElementById('club-logo-big');
  if (CLUB.logoUrl) {
    logoBig.innerHTML = `<img src="${CLUB.logoUrl}" />`;
  } else {
    logoBig.innerHTML = `<span id="home-club-emoji">${CLUB.emoji || '⚽'}</span>`;
  }
  document.getElementById('home-club-name').textContent   = CLUB.name;
  document.getElementById('home-page-title').textContent  = CLUB.name.toUpperCase();
  document.getElementById('home-club-league').textContent = CLUB.league;
  document.getElementById('home-club-season').textContent = CLUB.season;
  document.getElementById('home-club-city').textContent   = CLUB.city;
  document.getElementById('home-club-year').textContent   = CLUB.founded || '2010';
  document.getElementById('home-club-desc').textContent   = CLUB.desc;
  document.getElementById('home-club-players').textContent = PLAYERS.length;

  // Sidebar
  document.getElementById('sb-team-name').innerHTML = (CLUB.logoUrl
    ? `<img src="${CLUB.logoUrl}" style="width:16px;height:16px;object-fit:cover;border-radius:3px;vertical-align:middle;margin-right:4px">`
    : (CLUB.emoji || '⚽') + ' ') + CLUB.name;
  document.getElementById('sb-team-sub').textContent = CLUB.season + ' · ' + CLUB.league;

  // KPIs
  const activeCats = CLUB_CATEGORIES.filter(c => c.active);
  document.getElementById('hkpi-cats').textContent    = activeCats.length;
  document.getElementById('hkpi-players').textContent = PLAYERS.length;

  // Staff
  renderStaff();

  // Categories
  renderCategories();

  // News
  renderNews();
}

function renderStaff() {
  document.getElementById('staff-grid').innerHTML = STAFF.map(s => `
    <div class="staff-card">
      <div class="staff-avatar" style="background:${s.color}22;border:2px solid ${s.color}44">
        ${s.photoUrl
          ? `<img src="${s.photoUrl}" />`
          : `<span style="color:${s.color};font-weight:800;font-size:.85rem">${initials(s.name)}</span>`}
      </div>
      <div class="staff-info">
        <div class="staff-name">${s.name}</div>
        <div class="staff-role">${s.role}</div>
        ${s.phone ? `<div class="staff-contact">${s.phone}</div>` : ''}
      </div>
      <div class="staff-actions">
        <div class="staff-edit-btn" onclick="openHomeModal('editStaff',${s.id})" title="Modifier">✏️</div>
        <div class="staff-edit-btn" onclick="deleteStaff(${s.id})" title="Supprimer" style="color:var(--red);border-color:rgba(255,71,87,.25)">🗑</div>
      </div>
    </div>
  `).join('');
}

function renderCategories() {
  const cats = CLUB_CATEGORIES;
  document.getElementById('cat-count').textContent = cats.length;

  if (cats.length === 0) {
    document.getElementById('cat-grid').innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted)">
        <div style="font-size:2rem;margin-bottom:.5rem">📋</div>
        <div style="font-size:.85rem">Aucune catégorie. Cliquez sur "+ Ajouter" pour créer votre première catégorie.</div>
      </div>`;
    return;
  }

  document.getElementById('cat-grid').innerHTML = cats.map((c, idx) => {
    // In free mode, categories beyond index 0 are locked (shown but blurred)
    const isLocked = !isPro() && idx >= FREE_LIMITS.maxCategories;
    return `
      <div class="cat-card${isLocked?' pro-gate':''}" style="--cat-color:${c.color}${isLocked?';opacity:.6':''}">
        ${isLocked ? `
          <div style="position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(8,12,10,.75);border-radius:10px;gap:.4rem;cursor:pointer" onclick="showProGate('categories')">
            <div style="font-size:1.5rem">🔒</div>
            <div style="font-size:.72rem;font-weight:800;color:var(--accent)">PRO REQUIS</div>
            <div style="font-size:.62rem;color:var(--muted);text-align:center;padding:0 .5rem">Passez à Pro pour débloquer</div>
          </div>` : ''}
        <div class="cat-name" style="color:${c.color}">${c.name}</div>
        <div class="cat-coach">${c.ageRange}${c.coach ? ' · 👤 ' + c.coach : ''}</div>
        <div class="cat-count-row">
          <div class="cat-count" style="color:${c.color}">👥 ${c.players} joueurs</div>
          <span class="cat-status ${c.active?'active':'inactive'}">${c.active?'ACTIF':'INACTIF'}</span>
        </div>
        ${!isLocked ? `
        <div class="cat-actions">
          <div class="cat-act-btn" onclick="openHomeModal('editCat',${c.id})">✏️ Modifier</div>
          <div class="cat-act-btn" onclick="toggleCat(${c.id})">${c.active?'⏸ Désactiver':'▶ Activer'}</div>
          <div class="cat-act-btn" onclick="deleteCat(${c.id})" style="color:var(--red)">🗑</div>
        </div>` : ''}
      </div>`;
  }).join('');
}

function renderNews() {
  document.getElementById('news-list').innerHTML = NEWS.slice(0,5).map(n => `
    <div class="news-item">
      <div class="news-dot" style="background:rgba(0,230,118,0.08)">${n.icon}</div>
      <div class="news-body">
        <div class="news-title">${n.title}</div>
        <div class="news-date">${n.date}</div>
        <div class="news-text">${n.text}</div>
      </div>
      <div class="staff-edit-btn" onclick="deleteNews(${n.id})" style="flex-shrink:0;color:var(--red)">🗑</div>
    </div>
  `).join('') || '<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:.82rem">Aucune actualité</div>';
}

function toggleCatView() {
  catViewList = !catViewList;
  const grid = document.getElementById('cat-grid');
  const btn = document.getElementById('cat-view-btn');
  if (catViewList) {
    grid.style.gridTemplateColumns = '1fr';
    btn.textContent = 'Vue grille';
  } else {
    grid.style.gridTemplateColumns = 'repeat(4,1fr)';
    btn.textContent = 'Vue liste';
  }
}

function toggleCat(id) {
  const c = CLUB_CATEGORIES.find(cc=>cc.id===id) || ALL_CATEGORIES.find(cc=>cc.id===id);
  if (c) { c.active = !c.active; renderCategories(); showToast(c.name + (c.active?' activée':' désactivée')); }
}

function deleteCat(id) {
  if (!confirm('Supprimer cette catégorie ?')) return;
  CLUB_CATEGORIES = CLUB_CATEGORIES.filter(c=>c.id!==id);
  renderCategories();
  showToast('Catégorie supprimée');
}

function deleteStaff(id) {
  if (!confirm('Supprimer ce membre du staff ?')) return;
  STAFF = STAFF.filter(s=>s.id!==id);
  renderStaff();
  showToast('Membre supprimé');
}

function deleteNews(id) {
  NEWS = NEWS.filter(n=>n.id!==id);
  renderNews();
  showToast('Annonce supprimée');
}

// ═══════════════════════════════════
//  HOME MODALS
// ═══════════════════════════════════
function openHomeModal(mode, id) {
  homeModalMode = mode;
  editingStaffId = null; editingCatId = null;
  const overlay = document.getElementById('modal-overlay');
  const body    = document.getElementById('modal-body');
  const title   = document.getElementById('modal-title');
  const footer  = document.querySelector('.modal-footer');
  footer.innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitHomeModal()">Enregistrer</button>`;

  if (mode === 'club') {
    title.textContent = 'INFORMATIONS DU CLUB';
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Nom du club</label>
        <input class="form-input" id="f-cname" value="${CLUB.name}" placeholder="FC Étoile 2024" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Ville</label>
          <input class="form-input" id="f-ccity" value="${CLUB.city}" placeholder="Paris" />
        </div>
        <div class="form-group">
          <label class="form-label">Année de fondation</label>
          <input class="form-input" id="f-cfounded" value="${CLUB.founded||''}" placeholder="Ex: 2010" type="number" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Compétition / Ligue</label>
          <input class="form-input" id="f-cleague" value="${CLUB.league}" placeholder="Division 3" />
        </div>
        <div class="form-group">
          <label class="form-label">Saison</label>
          <input class="form-input" id="f-cseason" value="${CLUB.season}" placeholder="Saison 2024–2025" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Description / Slogan</label>
        <textarea class="form-input" id="f-cdesc" rows="3" placeholder="Décrivez votre club…" style="resize:vertical;min-height:70px">${CLUB.desc}</textarea>
      </div>`;

  } else if (mode === 'staff' || mode === 'editStaff') {
    editingStaffId = id || null;
    const s = STAFF.find(st=>st.id===id);
    title.textContent = s ? 'MODIFIER LE STAFF' : 'AJOUTER UN MEMBRE';
    const roleOptions = ['Entraîneur Principal','Entraîneur Adjoint(e)','Préparateur Physique','Médecin du club','Kinésithérapeute','Dirigeant / Président','Vice-Président','Secrétaire','Trésorier','Autre'];
    body.innerHTML = `
      <div class="form-group" style="text-align:center;margin-bottom:.75rem">
        <div style="width:64px;height:64px;border-radius:50%;margin:0 auto .5rem;overflow:hidden;border:2px solid var(--border);background:${s?s.color+'22':'var(--card)'};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1rem;position:relative" id="staff-photo-prev">
          ${s&&s.photoUrl?`<img src="${s.photoUrl}" style="width:100%;height:100%;object-fit:cover" />`:(s?initials(s.name):'👤')}
        </div>
        <div class="upload-source-row" style="max-width:200px;margin:.3rem auto 0">
          <div class="upload-src-btn">📁 Galerie<input type="file" accept="image/*" onchange="previewStaffPhoto(event)" /></div>
          <div class="upload-src-btn">📷 Caméra<input type="file" accept="image/*" capture="user" onchange="previewStaffPhoto(event)" /></div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Prénom</label>
          <input class="form-input" id="f-sfname" value="${s?s.name.split(' ')[0]:''}" placeholder="Prénom" />
        </div>
        <div class="form-group">
          <label class="form-label">Nom</label>
          <input class="form-input" id="f-slname" value="${s?s.name.split(' ').slice(1).join(' '):''}" placeholder="Nom" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Rôle</label>
        <select class="form-select" id="f-srole">
          ${roleOptions.map(r=>`<option ${s&&s.role===r?'selected':''}>${r}</option>`).join('')}
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Téléphone</label>
          <input class="form-input" id="f-sphone" value="${s?s.phone||'':''}" placeholder="06 XX XX XX XX" type="tel" />
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" id="f-semail" value="${s?s.email||'':''}" placeholder="email@club.fr" type="email" />
        </div>
      </div>`;
    if (s) {
      footer.innerHTML = `
        <button class="btn btn-red" onclick="deleteStaff(${id});closeModal()">🗑 Supprimer</button>
        <div style="flex:1"></div>
        <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
        <button class="btn btn-green" onclick="submitHomeModal()">Enregistrer</button>`;
    }

  } else if (mode === 'category' || mode === 'editCat') {
    editingCatId = id || null;
    const c = CLUB_CATEGORIES.find(cc=>cc.id===id) || ALL_CATEGORIES.find(cc=>cc.id===id);
    title.textContent = c ? 'MODIFIER LA CATÉGORIE' : 'AJOUTER UNE CATÉGORIE';
    const allCatNames = ['U5','U6','U7','U8','U9','U10','U11','U12','U13','U14','U15','U16','U17','U18','U19','U20','Senior A','Senior B','Senior C','Féminine U12','Féminine U15','Féminine Senior','Vétérans'];
    const catColors = ['#00E676','#4DABF7','#F0B429','#FF4757','#B197FC','#FF6B9D','#2EC4B6','#F72585'];
    const coachOptions = ['', ...STAFF.filter(s=>s.role.toLowerCase().includes('entraîneur')||s.role.toLowerCase().includes('coach')).map(s=>s.name), ...STAFF.map(s=>s.name)];
    const uniqueCoaches = [...new Set(coachOptions)];
    body.innerHTML = `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Nom de la catégorie</label>
          <select class="form-select" id="f-catname">
            ${allCatNames.map(n=>`<option ${c&&c.name===n?'selected':''}>${n}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Ou nom personnalisé</label>
          <input class="form-input" id="f-catcustom" placeholder="Ex: Futsal Adultes" value="${c&&!allCatNames.includes(c.name)?c.name:''}" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Tranche d'âge</label>
          <input class="form-input" id="f-catage" value="${c?c.ageRange:''}" placeholder="Ex: 9-10 ans" />
        </div>
        <div class="form-group">
          <label class="form-label">Nombre de joueurs</label>
          <input class="form-input" id="f-catplayers" type="number" min="0" value="${c?c.players:0}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Entraîneur responsable</label>
        <select class="form-select" id="f-catcoach">
          ${uniqueCoaches.map(cn=>`<option ${c&&c.coach===cn?'selected':''}>${cn}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Couleur</label>
        <div style="display:flex;gap:.4rem;flex-wrap:wrap">
          ${catColors.map(col=>`<div style="width:28px;height:28px;border-radius:6px;background:${col};cursor:pointer;border:2px solid ${c&&c.color===col?'white':'transparent'}" onclick="selectCatColor('${col}',this)"></div>`).join('')}
        </div>
        <input type="hidden" id="f-catcolor" value="${c?c.color:'#00E676'}" />
      </div>`;
    if (c) {
      footer.innerHTML = `
        <button class="btn btn-red" onclick="deleteCat(${id});closeModal()">🗑 Supprimer</button>
        <div style="flex:1"></div>
        <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
        <button class="btn btn-green" onclick="submitHomeModal()">Enregistrer</button>`;
    }

  } else if (mode === 'news') {
    title.textContent = 'PUBLIER UNE ACTUALITÉ';
    const icons = ['📢','🏆','📅','👕','🎉','⚠️','🎓','🏅','📌','💬'];
    body.innerHTML = `
      <div class="form-group">
        <label class="form-label">Icône</label>
        <div style="display:flex;gap:.4rem;flex-wrap:wrap" id="news-icon-row">
          ${icons.map(ic=>`<div style="width:36px;height:36px;border-radius:8px;background:var(--card);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.1rem;cursor:pointer" onclick="selectNewsIcon('${ic}',this)">${ic}</div>`).join('')}
        </div>
        <input type="hidden" id="f-nicon" value="📢" />
      </div>
      <div class="form-group">
        <label class="form-label">Titre</label>
        <input class="form-input" id="f-ntitle" placeholder="Ex: Victoire contre FC Delta" />
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-input" id="f-ntext" rows="3" placeholder="Détails de l'annonce…" style="resize:vertical;min-height:70px"></textarea>
      </div>`;
  }

  overlay.classList.add('open');
}

let _pendingStaffPhoto = null;

function previewStaffPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    _pendingStaffPhoto = e.target.result;
    const prev = document.getElementById('staff-photo-prev');
    if (prev) prev.innerHTML = `<img src="${_pendingStaffPhoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" />`;
  };
  reader.readAsDataURL(file);
}

function selectCatColor(color, el) {
  document.getElementById('f-catcolor').value = color;
  document.querySelectorAll('[onclick^="selectCatColor"]').forEach(d => d.style.borderColor = 'transparent');
  el.style.borderColor = 'white';
}

function selectNewsIcon(icon, el) {
  document.getElementById('f-nicon').value = icon;
  document.querySelectorAll('#news-icon-row > div').forEach(d => d.style.borderColor = 'var(--border)');
  el.style.borderColor = 'var(--green)';
}

function submitHomeModal() {
  if (homeModalMode === 'club') {
    CLUB.name    = document.getElementById('f-cname')?.value    || CLUB.name;
    CLUB.city    = document.getElementById('f-ccity')?.value    || CLUB.city;
    CLUB.founded = document.getElementById('f-cfounded')?.value || CLUB.founded;
    CLUB.league  = document.getElementById('f-cleague')?.value  || CLUB.league;
    CLUB.season  = document.getElementById('f-cseason')?.value  || CLUB.season;
    CLUB.desc    = document.getElementById('f-cdesc')?.value    || CLUB.desc;
    // Sync to TEAM
    TEAM.name = CLUB.name; TEAM.city = CLUB.city;
    TEAM.league = CLUB.league; TEAM.season = CLUB.season;
    renderHome(); renderTeam();
    showToast('Informations du club mises à jour ✓');

  } else if (homeModalMode === 'staff' || homeModalMode === 'editStaff') {
    const fname = document.getElementById('f-sfname')?.value?.trim();
    const lname = document.getElementById('f-slname')?.value?.trim();
    const role  = document.getElementById('f-srole')?.value;
    const phone = document.getElementById('f-sphone')?.value || '';
    const email = document.getElementById('f-semail')?.value || '';
    if (!fname || !lname) { showToast('⚠️ Nom et prénom requis'); return; }
    const colors = ['#00E676','#4DABF7','#F0B429','#FF4757','#B197FC','#FF6B9D'];
    if (editingStaffId) {
      const s = STAFF.find(st=>st.id===editingStaffId);
      if (s) { s.name=fname+' '+lname; s.role=role; s.phone=phone; s.email=email; if(_pendingStaffPhoto) s.photoUrl=_pendingStaffPhoto; }
    } else {
      STAFF.push({ id:Date.now(), name:fname+' '+lname, role, phone, email, color:colors[STAFF.length%colors.length], photoUrl:_pendingStaffPhoto||null });
    }
    _pendingStaffPhoto = null;
    renderStaff();
    showToast('Staff mis à jour ✓');

  } else if (homeModalMode === 'category' || homeModalMode === 'editCat') {
    const custom = document.getElementById('f-catcustom')?.value?.trim();
    const name   = custom || document.getElementById('f-catname')?.value;
    const age    = document.getElementById('f-catage')?.value || '';
    const players= parseInt(document.getElementById('f-catplayers')?.value) || 0;
    const coach  = document.getElementById('f-catcoach')?.value || '';
    const color  = document.getElementById('f-catcolor')?.value || '#00E676';
    if (!name) { showToast('⚠️ Nom de catégorie requis'); return; }
    if (editingCatId) {
      const c = CLUB_CATEGORIES.find(cc=>cc.id===editingCatId);
      if (c) { c.name=name; c.ageRange=age; c.players=players; c.coach=coach; c.color=color; }
    } else {
      // ── FREEMIUM GATE ──
      if (!checkCategoryLimit()) return;
      CLUB_CATEGORIES.push({ id:Date.now(), name, ageRange:age, players, coach, color, active:true });
    }
    renderCategories();
    document.getElementById('hkpi-cats').textContent = CLUB_CATEGORIES.filter(c=>c.active).length;
    showToast('Catégorie enregistrée ✓');

  } else if (homeModalMode === 'news') {
    const icon  = document.getElementById('f-nicon')?.value || '📢';
    const title = document.getElementById('f-ntitle')?.value?.trim();
    const text  = document.getElementById('f-ntext')?.value?.trim();
    if (!title) { showToast('⚠️ Titre requis'); return; }
    const today = new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});
    NEWS.unshift({ id:Date.now(), icon, title, date:today, text:text||'' });
    renderNews();
    showToast('Actualité publiée ✓');
  }

  closeModal();
}

// ═══════════════════════════════════
//  PROJETS & VOYAGES & TOURNOIS
// ═══════════════════════════════════

const PROJECT_TYPES = {
  tournament: { label:'Tournoi',    icon:'🏆', color:'#F0B429' },
  trip:       { label:'Voyage',     icon:'✈️',  color:'#4DABF7' },
  event:      { label:'Événement',  icon:'🎉',  color:'#B197FC' },
  training:   { label:'Stage',      icon:'🏋️',  color:'#00E676' },
};
const PROJECT_STATUSES = {
  planning:  { label:'En préparation', cls:'ps-planning'  },
  confirmed: { label:'Confirmé',       cls:'ps-confirmed' },
  ongoing:   { label:'En cours',       cls:'ps-ongoing'   },
  done:      { label:'Terminé',        cls:'ps-done'      },
};

let PROJECTS = [
  {
    id: 1, type: 'tournament', status: 'confirmed', emoji: '🏆',
    name: 'Tournoi de Printemps', location: 'Paris, Stade Vélodrome',
    dateStart: '2025-04-12', dateEnd: '2025-04-13',
    desc: 'Tournoi annuel inter-clubs, 8 équipes participantes. Notre objectif : atteindre la finale !',
    budget: 850, budgetPaid: 400,
    participants: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    participantStatus: {1:'yes',2:'yes',3:'yes',4:'yes',5:'yes',6:'yes',7:'yes',8:'yes',9:'yes',10:'yes',11:'yes',12:'wait',13:'wait',14:'yes',15:'no',16:'yes'},
    checklist: [
      {id:1, text:'Inscription au tournoi', done:true,  assignee:'Président'},
      {id:2, text:'Réserver transport (bus)', done:true,  assignee:'Dirigeant'},
      {id:3, text:'Préparer les maillots', done:false, assignee:'Coach'},
      {id:4, text:'Convocation joueurs envoyée', done:false, assignee:'Coach'},
      {id:5, text:'Prévoir eau & collations', done:false, assignee:'Staff'},
    ],
    budgetLines: [
      {cat:'Inscription',   amount:200, paid:true},
      {cat:'Transport',     amount:350, paid:true},
      {cat:'Restauration',  amount:180, paid:false},
      {cat:'Équipements',   amount:120, paid:false},
    ],
    color: '#F0B429',
  },
  {
    id: 2, type: 'trip', status: 'planning', emoji: '✈️',
    name: 'Séjour sportif Barcelone', location: 'Barcelone, Espagne',
    dateStart: '2025-06-20', dateEnd: '2025-06-24',
    desc: 'Voyage sportif en Espagne avec visite du Camp Nou, matchs amicaux et team building.',
    budget: 4500, budgetPaid: 0,
    participants: [1,2,3,4,5,6,7,8,9,10,11],
    participantStatus: {1:'wait',2:'wait',3:'yes',4:'yes',5:'wait',6:'yes',7:'yes',8:'yes',9:'wait',10:'yes',11:'wait'},
    checklist: [
      {id:1, text:'Sondage disponibilité joueurs', done:true,  assignee:'Coach'},
      {id:2, text:'Devis hébergement (hôtel)',     done:true,  assignee:'Président'},
      {id:3, text:'Réserver vols',                 done:false, assignee:'Dirigeant'},
      {id:4, text:'Organisation matchs amicaux',   done:false, assignee:'Coach'},
      {id:5, text:'Assurances voyage',              done:false, assignee:'Staff'},
      {id:6, text:'Collecte des acomptes',          done:false, assignee:'Trésorier'},
    ],
    budgetLines: [
      {cat:'Hébergement (4 nuits)', amount:1800, paid:false},
      {cat:'Vols aller-retour',     amount:1600, paid:false},
      {cat:'Transport local',       amount:400,  paid:false},
      {cat:'Activités / Musées',    amount:450,  paid:false},
      {cat:'Repas',                 amount:250,  paid:false},
    ],
    color: '#4DABF7',
  },
  {
    id: 3, type: 'event', status: 'planning', emoji: '🎉',
    name: 'Gala de fin de saison', location: 'Salle des fêtes, Paris',
    dateStart: '2025-05-31', dateEnd: '2025-05-31',
    desc: 'Soirée de remise des trophées, récompenses individuelles et collectives, buffet et animations.',
    budget: 1200, budgetPaid: 0,
    participants: PLAYERS.slice(0,11).map(p=>p.id),
    participantStatus: {},
    checklist: [
      {id:1, text:'Réserver la salle',              done:false, assignee:'Président'},
      {id:2, text:'Prévoir traiteur / buffet',      done:false, assignee:'Staff'},
      {id:3, text:'Trophées et récompenses',        done:false, assignee:'Dirigeant'},
      {id:4, text:'Invitations familles / sponsors',done:false, assignee:'Secrétaire'},
    ],
    budgetLines: [
      {cat:'Location salle',  amount:300, paid:false},
      {cat:'Traiteur buffet', amount:600, paid:false},
      {cat:'Trophées',        amount:200, paid:false},
      {cat:'Décoration',      amount:100, paid:false},
    ],
    color: '#B197FC',
  },
  {
    id: 4, type: 'training', status: 'done', emoji: '🏋️',
    name: 'Stage de préparation hivernale', location: 'Centre sportif, Lyon',
    dateStart: '2025-01-18', dateEnd: '2025-01-20',
    desc: 'Stage de 3 jours pour préparer la reprise de la saison. Travail physique intensif et cohésion.',
    budget: 2100, budgetPaid: 2100,
    participants: [1,2,3,4,5,6,7,8,9,10,11,12],
    participantStatus: {1:'yes',2:'yes',3:'yes',4:'yes',5:'yes',6:'yes',7:'yes',8:'yes',9:'yes',10:'yes',11:'no',12:'yes'},
    checklist: [
      {id:1, text:'Réservation centre sportif', done:true, assignee:'Président'},
      {id:2, text:'Programme d\'entraînement',  done:true, assignee:'Coach'},
      {id:3, text:'Transport minibus',          done:true, assignee:'Dirigeant'},
      {id:4, text:'Hébergement confirmé',       done:true, assignee:'Staff'},
      {id:5, text:'Bilan et compte-rendu',      done:true, assignee:'Coach'},
    ],
    budgetLines: [
      {cat:'Hébergement', amount:900,  paid:true},
      {cat:'Repas',       amount:600,  paid:true},
      {cat:'Transport',   amount:350,  paid:true},
      {cat:'Terrain',     amount:250,  paid:true},
    ],
    color: '#00E676',
  },
];

let currentProjectFilter = 'all';
let currentProjectId = null;

// ─── Render liste ───
function renderProjects() {
  const filtered = currentProjectFilter === 'all'
    ? PROJECTS : PROJECTS.filter(p => p.type === currentProjectFilter);

  // KPIs
  document.getElementById('pkpi-active').textContent  = PROJECTS.filter(p=>p.status==='ongoing').length;
  document.getElementById('pkpi-planned').textContent = PROJECTS.filter(p=>p.status==='planning'||p.status==='confirmed').length;
  document.getElementById('pkpi-done').textContent    = PROJECTS.filter(p=>p.status==='done').length;
  const totalBudget = PROJECTS.reduce((s,p)=>s+p.budget,0);
  document.getElementById('pkpi-budget').textContent  = totalBudget.toLocaleString('fr-FR') + '€';

  if (!filtered.length) {
    document.getElementById('proj-grid').innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">
        <div style="font-size:2.5rem;margin-bottom:.75rem">🗺️</div>
        <div style="font-size:.9rem">Aucun projet dans cette catégorie.</div>
        <div class="section-head-action" onclick="openProjectModal()" style="display:inline-flex;margin-top:1rem;background:var(--green-dim);border-color:rgba(0,230,118,.3);color:var(--green)">+ Créer un projet</div>
      </div>`;
    return;
  }

  document.getElementById('proj-grid').innerHTML = filtered.map(proj => {
    const type   = PROJECT_TYPES[proj.type];
    const status = PROJECT_STATUSES[proj.status];
    const d1 = new Date(proj.dateStart).toLocaleDateString('fr-FR',{day:'numeric',month:'short'});
    const d2 = new Date(proj.dateEnd).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});
    const sameDay = proj.dateStart === proj.dateEnd;
    const totalTasks = proj.checklist.length;
    const doneTasks  = proj.checklist.filter(t=>t.done).length;
    const prog = totalTasks ? Math.round(doneTasks/totalTasks*100) : 0;
    const paid = proj.budgetLines.reduce((s,l)=>s+(l.paid?l.amount:0),0);
    const confirmed = Object.values(proj.participantStatus).filter(s=>s==='yes').length;

    return `<div class="project-card" onclick="openProjectDetail(${proj.id})">
      <div class="project-card-banner" style="background:linear-gradient(135deg,${proj.color}33,${proj.color}15)">
        <span style="font-size:2.5rem;position:relative;z-index:1">${proj.emoji}</span>
        <div class="project-type-icon">${type.icon}</div>
      </div>
      <div class="project-card-body">
        <div class="project-card-title">${proj.name}</div>
        <div class="project-card-meta">
          📍 ${proj.location}<br>
          📅 ${sameDay ? d1 : d1 + ' → ' + d2}<br>
          ${proj.desc.length > 60 ? proj.desc.slice(0,60)+'…' : proj.desc}
        </div>
        <!-- Progress -->
        <div style="margin-top:.65rem">
          <div style="display:flex;justify-content:space-between;font-size:.62rem;color:var(--muted);margin-bottom:.25rem">
            <span>Tâches ${doneTasks}/${totalTasks}</span>
            <span style="color:${proj.color}">${prog}%</span>
          </div>
          <div class="project-prog-bar">
            <div class="project-prog-fill" style="width:${prog}%;background:${proj.color}"></div>
          </div>
        </div>
      </div>
      <div class="project-card-footer">
        <span class="project-status ${status.cls}">${status.label}</span>
        <div style="display:flex;gap:.75rem;font-size:.7rem;color:var(--muted)">
          <span>👥 ${confirmed}/${proj.participants.length}</span>
          <span style="color:${proj.color}">💶 ${paid}€/${proj.budget}€</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterProjects(f) {
  currentProjectFilter = f;
  document.querySelectorAll('[data-pf]').forEach(el => {
    const active = el.dataset.pf === f;
    el.style.background = active ? 'var(--green-dim)' : '';
    el.style.borderColor = active ? 'rgba(0,230,118,.3)' : '';
    el.style.color = active ? 'var(--green)' : '';
  });
  renderProjects();
}

// ─── Détail projet ───
function openProjectDetail(id) {
  currentProjectId = id;
  const proj = PROJECTS.find(p=>p.id===id);
  if (!proj) return;

  document.getElementById('proj-list-view').style.display   = 'none';
  document.getElementById('proj-detail-view').style.display = 'block';
  document.getElementById('proj-page-title').textContent = proj.name.toUpperCase();
  document.getElementById('proj-breadcrumb').textContent = 'Projets → ' + proj.name;

  const type   = PROJECT_TYPES[proj.type];
  const status = PROJECT_STATUSES[proj.status];
  const d1 = new Date(proj.dateStart).toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const d2 = new Date(proj.dateEnd).toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const doneTasks = proj.checklist.filter(t=>t.done).length;
  const prog = proj.checklist.length ? Math.round(doneTasks/proj.checklist.length*100) : 0;
  const totalPaid = proj.budgetLines.reduce((s,l)=>s+(l.paid?l.amount:0),0);
  const totalDue  = proj.budget - totalPaid;

  document.getElementById('proj-detail-content').innerHTML = `
    <!-- Header -->
    <div class="project-detail-header">
      <div class="project-emoji-big" style="background:${proj.color}18;border-color:${proj.color}33">${proj.emoji}</div>
      <div style="flex:1;min-width:0">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.6rem;letter-spacing:.04em;margin-bottom:.35rem">${proj.name}</div>
        <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:.5rem">
          <span class="project-status ${status.cls}">${status.label}</span>
          <span style="font-size:.75rem;color:var(--muted)">📍 ${proj.location}</span>
          <span style="font-size:.75rem;color:var(--muted)">📅 ${d1}${proj.dateStart!==proj.dateEnd?' → '+d2:''}</span>
          <span style="font-size:.75rem;color:${proj.color}">${type.icon} ${type.label}</span>
        </div>
        <div style="font-size:.82rem;color:var(--muted);line-height:1.6;max-width:520px">${proj.desc}</div>
        <div style="margin-top:.75rem">
          <div style="display:flex;justify-content:space-between;font-size:.68rem;color:var(--muted);margin-bottom:.3rem">
            <span>Avancement global</span><span style="color:${proj.color};font-weight:700">${prog}%</span>
          </div>
          <div class="project-prog-bar" style="height:8px">
            <div class="project-prog-fill" style="width:${prog}%;background:${proj.color}"></div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:flex-end;flex-shrink:0">
        <div style="text-align:center;background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:.6rem .9rem;min-width:90px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:${proj.color}">${proj.budget.toLocaleString('fr-FR')}€</div>
          <div style="font-size:.62rem;color:var(--muted)">Budget total</div>
        </div>
        <div style="text-align:center;background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:.6rem .9rem;min-width:90px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:var(--red)">${totalDue.toLocaleString('fr-FR')}€</div>
          <div style="font-size:.62rem;color:var(--muted)">Reste à payer</div>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-bottom:1.2rem">
      <!-- Checklist -->
      <div class="section-block">
        <div class="section-head">
          <div class="section-head-title">✅ Checklist — ${doneTasks}/${proj.checklist.length}</div>
          <div class="section-head-action" onclick="addChecklistItem(${proj.id})">+ Tâche</div>
        </div>
        <div id="proj-checklist">
          ${proj.checklist.map(t=>`
            <div class="checklist-item">
              <div class="check-box ${t.done?'done':''}" onclick="toggleTask(${proj.id},${t.id})">
                ${t.done?'✓':''}
              </div>
              <div class="checklist-text ${t.done?'done':''}">${t.text}</div>
              <div class="checklist-assignee">${t.assignee}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Budget -->
      <div class="section-block">
        <div class="section-head">
          <div class="section-head-title">💶 Budget — ${totalPaid}€ payé / ${proj.budget}€</div>
          <div class="section-head-action" onclick="addBudgetLine(${proj.id})">+ Ligne</div>
        </div>
        <div>
          ${proj.budgetLines.map((l,i)=>`
            <div class="budget-row">
              <div class="budget-category">${l.cat}</div>
              <div class="budget-amount ${l.paid?'budget-paid':'budget-due'}">${l.amount}€</div>
              <div class="budget-total" style="font-size:.65rem;margin-left:.5rem">${l.paid?'✅ Payé':'⏳ En attente'}</div>
              <div class="pc-btn" style="margin-left:.4rem" onclick="toggleBudgetPaid(${proj.id},${i})">${l.paid?'↩':'✓'}</div>
            </div>`).join('')}
          <div class="budget-row" style="background:rgba(0,0,0,.15);font-weight:700">
            <div class="budget-category">TOTAL</div>
            <div class="budget-amount" style="color:var(--green)">${totalPaid}€ <span style="color:var(--red);font-size:.72rem">/ ${totalDue}€ restant</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Participants -->
    <div class="section-block">
      <div class="section-head">
        <div class="section-head-title">👥 Participants — ${Object.values(proj.participantStatus).filter(s=>s==='yes').length} confirmés / ${proj.participants.length}</div>
        <div style="display:flex;gap:.4rem">
          <div class="section-head-action" onclick="markAllParticipants(${proj.id},'yes')" style="color:var(--green)">✓ Tous oui</div>
          <div class="section-head-action" onclick="openAddParticipantModal(${proj.id})">+ Ajouter</div>
        </div>
      </div>
      <div id="proj-participants">
        ${proj.participants.map(pid => {
          const p = PLAYERS.find(pp=>pp.id===pid);
          if (!p) return '';
          const st = proj.participantStatus[pid] || 'wait';
          return `<div class="participant-row">
            ${avatarHTML(p)}
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:.82rem">${p.name}</div>
              <div style="font-size:.68rem;color:var(--muted)">${p.pos} · N°${p.num}</div>
            </div>
            <div style="display:flex;gap:.3rem;align-items:center">
              <div class="pc-btn ${st==='yes'?'':''}${ st==='yes'?'style="color:var(--green);border-color:rgba(0,230,118,.3)"':''}" onclick="setParticipantStatus(${proj.id},${pid},'yes')" title="Confirmer" style="${st==='yes'?'color:var(--green);border-color:rgba(0,230,118,.3)':''}">✓</div>
              <div class="pc-btn" onclick="setParticipantStatus(${proj.id},${pid},'no')" title="Absent" style="${st==='no'?'color:var(--red);border-color:rgba(255,71,87,.3)':''}">✕</div>
              <div class="pc-btn" onclick="setParticipantStatus(${proj.id},${pid},'wait')" title="En attente" style="${st==='wait'?'color:var(--accent);border-color:rgba(240,180,41,.3)':''}">?</div>
            </div>
            <span class="part-status part-${st}" style="margin-left:.4rem">
              ${st==='yes'?'✅ Confirmé':st==='no'?'❌ Absent':'⏳ En attente'}
            </span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

function closeProjectDetail() {
  currentProjectId = null;
  document.getElementById('proj-list-view').style.display   = 'block';
  document.getElementById('proj-detail-view').style.display = 'none';
  document.getElementById('proj-page-title').textContent = 'PROJETS DU CLUB';
  document.getElementById('proj-breadcrumb').textContent = 'Projets';
  renderProjects();
}

// ─── Actions checklist ───
function toggleTask(projId, taskId) {
  const proj = PROJECTS.find(p=>p.id===projId);
  const task = proj?.checklist.find(t=>t.id===taskId);
  if (task) {
    task.done = !task.done;
    openProjectDetail(projId);
    showToast(task.done ? '✅ Tâche complétée' : 'Tâche rouverte');
  }
}

function addChecklistItem(projId) {
  const text = prompt('Nouvelle tâche :');
  if (!text) return;
  const assignee = prompt('Assigné à :') || 'Coach';
  const proj = PROJECTS.find(p=>p.id===projId);
  if (proj) {
    proj.checklist.push({ id: Date.now(), text, done: false, assignee });
    openProjectDetail(projId);
  }
}

// ─── Actions budget ───
function toggleBudgetPaid(projId, lineIdx) {
  const proj = PROJECTS.find(p=>p.id===projId);
  if (proj && proj.budgetLines[lineIdx]) {
    proj.budgetLines[lineIdx].paid = !proj.budgetLines[lineIdx].paid;
    openProjectDetail(projId);
    showToast(proj.budgetLines[lineIdx].paid ? '💶 Marqué payé ✓' : 'Marqué non payé');
  }
}

function addBudgetLine(projId) {
  const cat    = prompt('Catégorie de dépense :');
  if (!cat) return;
  const amount = parseFloat(prompt('Montant (€) :')) || 0;
  const proj = PROJECTS.find(p=>p.id===projId);
  if (proj) {
    proj.budgetLines.push({ cat, amount, paid: false });
    proj.budget += amount;
    openProjectDetail(projId);
  }
}

// ─── Actions participants ───
function setParticipantStatus(projId, pid, status) {
  const proj = PROJECTS.find(p=>p.id===projId);
  if (proj) {
    proj.participantStatus[pid] = status;
    openProjectDetail(projId);
  }
}

function markAllParticipants(projId, status) {
  const proj = PROJECTS.find(p=>p.id===projId);
  if (proj) {
    proj.participants.forEach(pid => proj.participantStatus[pid] = status);
    openProjectDetail(projId);
    showToast('Tous les participants confirmés ✓');
  }
}

function openAddParticipantModal(projId) {
  const proj = PROJECTS.find(p=>p.id===projId);
  const available = PLAYERS.filter(p => !proj.participants.includes(p.id));
  if (!available.length) { showToast('Tous les joueurs sont déjà participants'); return; }
  teamModalMode=''; homeModalMode='';
  document.getElementById('modal-title').textContent = '+ AJOUTER DES PARTICIPANTS';
  document.getElementById('modal-body').innerHTML = available.map(p=>`
    <div class="move-player-item" id="add-part-${p.id}" onclick="toggleAddParticipant(${p.id})">
      ${avatarHTML(p)}
      <div class="move-player-name">${p.name}</div>
      <span class="pos-badge ${posCls(p.pos)}" style="font-size:.62rem">${p.pos}</span>
    </div>`).join('');
  const selectedParts = new Set();
  window._addParticipantProjId = projId;
  window._selectedParts = selectedParts;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="confirmAddParticipants()">Ajouter</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function toggleAddParticipant(pid) {
  const set = window._selectedParts;
  const el  = document.getElementById('add-part-'+pid);
  if (set.has(pid)) { set.delete(pid); el?.classList.remove('selected'); }
  else { set.add(pid); el?.classList.add('selected'); }
}

function confirmAddParticipants() {
  const proj = PROJECTS.find(p=>p.id===window._addParticipantProjId);
  if (proj) {
    window._selectedParts.forEach(pid => {
      if (!proj.participants.includes(pid)) {
        proj.participants.push(pid);
        proj.participantStatus[pid] = 'wait';
      }
    });
  }
  closeModal();
  openProjectDetail(window._addParticipantProjId);
  showToast(`${window._selectedParts.size} joueur(s) ajouté(s) ✓`);
}

// ─── Créer / modifier projet ───
function openProjectModal(id) {
  const proj = id ? PROJECTS.find(p=>p.id===id) : null;
  teamModalMode=''; homeModalMode='';
  document.getElementById('modal-title').textContent = proj ? 'MODIFIER LE PROJET' : 'NOUVEAU PROJET';
  const emojis = ['🏆','✈️','🎉','🏋️','⚽','🏅','🎓','🌍','🏖️','🎪','🚌','🏕️'];
  document.getElementById('modal-body').innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Émoji</label>
        <div style="display:flex;gap:.3rem;flex-wrap:wrap" id="proj-emoji-row">
          ${emojis.map(e=>`<div style="width:34px;height:34px;border-radius:8px;background:var(--card);border:1px solid ${proj&&proj.emoji===e?'var(--green)':'var(--border)'};display:flex;align-items:center;justify-content:center;font-size:1.1rem;cursor:pointer" onclick="selectProjEmoji('${e}',this)">${e}</div>`).join('')}
        </div>
        <input type="hidden" id="f-proj-emoji" value="${proj?.emoji||'🏆'}" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Nom du projet</label>
      <input class="form-input" id="f-proj-name" placeholder="Ex: Tournoi de Printemps" value="${proj?.name||''}" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-proj-type">
          ${Object.entries(PROJECT_TYPES).map(([k,v])=>`<option value="${k}" ${proj?.type===k?'selected':''}>${v.icon} ${v.label}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Statut</label>
        <select class="form-select" id="f-proj-status">
          ${Object.entries(PROJECT_STATUSES).map(([k,v])=>`<option value="${k}" ${proj?.status===k?'selected':''}>${v.label}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Lieu</label>
      <input class="form-input" id="f-proj-loc" placeholder="Paris, Stade Vélodrome" value="${proj?.location||''}" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Date début</label>
        <input class="form-input" id="f-proj-d1" type="date" value="${proj?.dateStart||''}" />
      </div>
      <div class="form-group">
        <label class="form-label">Date fin</label>
        <input class="form-input" id="f-proj-d2" type="date" value="${proj?.dateEnd||''}" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Budget total (€)</label>
        <input class="form-input" id="f-proj-budget" type="number" min="0" value="${proj?.budget||0}" />
      </div>
      <div class="form-group">
        <label class="form-label">Couleur</label>
        <input class="form-input" id="f-proj-color" type="color" value="${proj?.color||'#00E676'}" style="height:38px;padding:.2rem" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <textarea class="form-input" id="f-proj-desc" rows="3" placeholder="Décrivez le projet…" style="resize:vertical;min-height:70px">${proj?.desc||''}</textarea>
    </div>`;

  if (proj) {
    document.querySelector('.modal-footer').innerHTML = `
      <button class="btn btn-red" onclick="deleteProject(${id});closeModal()">🗑 Supprimer</button>
      <div style="flex:1"></div>
      <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
      <button class="btn btn-green" onclick="submitProjectModal(${id})">Enregistrer</button>`;
  } else {
    document.querySelector('.modal-footer').innerHTML = `
      <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
      <button class="btn btn-green" onclick="submitProjectModal(null)">Créer</button>`;
  }
  document.getElementById('modal-overlay').classList.add('open');
}

function selectProjEmoji(e, el) {
  document.getElementById('f-proj-emoji').value = e;
  document.querySelectorAll('#proj-emoji-row > div').forEach(d => d.style.borderColor = 'var(--border)');
  el.style.borderColor = 'var(--green)';
}

function submitProjectModal(id) {
  const name   = document.getElementById('f-proj-name')?.value?.trim();
  const type   = document.getElementById('f-proj-type')?.value;
  const status = document.getElementById('f-proj-status')?.value;
  const loc    = document.getElementById('f-proj-loc')?.value || '';
  const d1     = document.getElementById('f-proj-d1')?.value;
  const d2     = document.getElementById('f-proj-d2')?.value || d1;
  const budget = parseFloat(document.getElementById('f-proj-budget')?.value) || 0;
  const color  = document.getElementById('f-proj-color')?.value || '#00E676';
  const desc   = document.getElementById('f-proj-desc')?.value || '';
  const emoji  = document.getElementById('f-proj-emoji')?.value || '🏆';
  if (!name) { showToast('⚠️ Nom du projet requis'); return; }

  if (id) {
    const proj = PROJECTS.find(p=>p.id===id);
    if (proj) { Object.assign(proj, {name,type,status,location:loc,dateStart:d1,dateEnd:d2,budget,color,desc,emoji}); }
  } else {
    PROJECTS.unshift({
      id: Date.now(), name, type, status, location:loc, dateStart:d1, dateEnd:d2||d1,
      budget, budgetPaid:0, color, desc, emoji,
      participants: [], participantStatus: {}, checklist: [], budgetLines: [],
    });
  }
  closeModal();
  renderProjects();
  showToast((id ? 'Projet modifié' : 'Projet créé') + ' ✓');
}

function deleteProject(id) {
  if (!confirm('Supprimer ce projet ?')) return;
  const idx = PROJECTS.findIndex(p=>p.id===id);
  if (idx>-1) PROJECTS.splice(idx,1);
  closeProjectDetail();
  showToast('Projet supprimé');
}

// ═══════════════════════════════════
//  TACTICAL BOARD — NOUVEL ONGLET
// ═══════════════════════════════════
function getTacticalHTML(playersJSON) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Tableau Tactique — Manage My Team</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{--green:#00E676;--black:#080C0A;--dark:#0D1410;--card:#131A15;--border:#1C2420;--text:#E8F0EB;--muted:#6B8070;--accent:#F0B429;--red:#FF4757;--blue:#4DABF7}
html,body{width:100%;height:100%;overflow:hidden;background:var(--black);color:var(--text);font-family:'DM Sans',sans-serif;}

/* Layout fixe — pas de flex:1 pour les hauteurs */
#sidebar{position:fixed;left:0;top:0;bottom:0;width:200px;background:var(--dark);border-right:1px solid var(--border);overflow-y:auto;padding:.6rem;z-index:2;}
#topbar{position:fixed;left:200px;right:180px;top:0;height:44px;background:var(--dark);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 .75rem;gap:.4rem;z-index:2;}
#right-panel{position:fixed;right:0;top:0;bottom:0;width:180px;background:var(--dark);border-left:1px solid var(--border);padding:.6rem;overflow-y:auto;z-index:2;}
#pitch-area{position:fixed;left:200px;right:180px;top:44px;bottom:0;background:var(--black);display:flex;align-items:center;justify-content:center;padding:12px;}

canvas{display:block;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06);cursor:crosshair;touch-action:none;}
.hint{position:absolute;bottom:.6rem;left:50%;transform:translateX(-50%);background:rgba(13,20,16,.9);border:1px solid var(--border);border-radius:6px;padding:.35rem .75rem;font-size:.62rem;color:var(--muted);white-space:nowrap;pointer-events:none;}
.hint strong{color:var(--text);}

.lbl{font-size:.58rem;color:var(--muted);font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin:.4rem 0 .2rem;display:block;}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:.25rem;}
.fb{background:var(--card);border:1px solid var(--border);border-radius:5px;padding:.3rem;text-align:center;font-family:'Space Mono',monospace;font-size:.6rem;color:var(--muted);cursor:pointer;transition:all .1s;}
.fb:hover,.fb.active{border-color:var(--green);color:var(--green);background:rgba(0,230,118,.08);}
.mr{display:flex;gap:.25rem;}
.mb{flex:1;background:var(--card);border:1px solid var(--border);border-radius:5px;padding:.35rem .2rem;text-align:center;font-size:.58rem;color:var(--muted);cursor:pointer;transition:all .1s;}
.mb:hover,.mb.active{border-color:var(--green);color:var(--green);background:rgba(0,230,118,.08);}
.tr{display:flex;gap:.25rem;flex-wrap:wrap;}
.tb{flex:1;min-width:36px;background:var(--card);border:1px solid var(--border);border-radius:5px;padding:.35rem .2rem;text-align:center;font-size:.58rem;color:var(--muted);cursor:pointer;transition:all .1s;}
.tb:hover,.tb.active{border-color:var(--green);color:var(--green);background:rgba(0,230,118,.08);}
.cr{display:flex;gap:.25rem;flex-wrap:wrap;align-items:center;}
.cd{width:20px;height:20px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:all .1s;flex-shrink:0;}
.cd:hover,.cd.active{border-color:white;transform:scale(1.1);}
.roster{overflow-y:auto;max-height:200px;margin-top:.3rem;}
.ri{display:flex;align-items:center;gap:.4rem;padding:.3rem;border-radius:5px;cursor:grab;margin-bottom:.15rem;}
.ri:hover{background:rgba(255,255,255,.04);}
.rnum{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:800;color:#000;flex-shrink:0;overflow:hidden;}
.rnum img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.rinfo{flex:1;min-width:0;}
.rname{font-size:.68rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.rpos{font-size:.58rem;color:var(--muted);}
.radd{width:16px;height:16px;border-radius:50%;background:var(--border);border:none;color:var(--muted);cursor:pointer;font-size:.8rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.radd:hover{background:var(--green);color:#000;}
.abtn{height:28px;padding:0 .65rem;border-radius:5px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:.72rem;font-weight:600;cursor:pointer;}
.abtn.p{background:var(--green);color:#000;border-color:var(--green);}
.rp-lbl{font-family:'Space Mono',monospace;font-size:.58rem;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin:.5rem 0 .3rem;}
.sr{display:flex;justify-content:space-between;padding:.28rem 0;border-bottom:1px solid var(--border);font-size:.7rem;}
.sl{color:var(--muted);font-size:.68rem;}
.sv{font-family:'Space Mono',monospace;font-size:.65rem;font-weight:700;}
h2{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;color:var(--green);margin-bottom:.4rem;letter-spacing:.06em;}
h1{font-family:'Bebas Neue',sans-serif;font-size:.95rem;letter-spacing:.05em;flex:1;color:var(--muted);margin:0;}
</style>
</head>
<body>

<div id="sidebar">
  <h2>⚽ Tactique</h2>
  <span class="lbl">Mode</span>
  <div class="mr">
    <div class="mb active" onclick="setMode('11',this)">⚽ 11v11</div>
    <div class="mb" onclick="setMode('8',this)">🟩 8v8</div>
    <div class="mb" onclick="setMode('5',this)">🏟️ 5v5</div>
  </div>
  <span class="lbl">Formation</span>
  <div class="fg" id="fg"></div>
  <span class="lbl">Outil</span>
  <div class="tr">
    <div class="tb active" onclick="setTool('select',this)">👆 Dépl.</div>
    <div class="tb" onclick="setTool('arrow',this)">➡️ Flèche</div>
    <div class="tb" onclick="setTool('zone',this)">⬜ Zone</div>
    <div class="tb" onclick="setTool('draw',this)">✏️ Dessin</div>
  </div>
  <span class="lbl">Couleur</span>
  <div class="cr" id="cr"></div>
  <span class="lbl">Remplaçants</span>
  <div class="roster" id="roster"></div>
</div>

<div id="topbar">
  <h1 id="tl">FC Étoile — 4-3-3</h1>
  <button class="abtn" onclick="undo()">↩</button>
  <button class="abtn" onclick="clrAnnot()">✕ Flèches</button>
  <button class="abtn" onclick="rst()">🗑 Reset</button>
  <button class="abtn p" onclick="saveImg()">💾 Exporter</button>
</div>

<div id="pitch-area">
  <canvas id="c"></canvas>
  <div class="hint"><strong>Déplacer</strong>: glisser · <strong>Flèche</strong>: clic×2 · <strong>Dbl-clic</strong>: retirer</div>
</div>

<div id="right-panel">
  <div class="rp-lbl">Composition</div>
  <div id="sp"></div>
</div>

<scr"+"ipt>
const F11={'4-3-3':[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.25,.52],[.5,.48],[.75,.52],[.25,.25],[.5,.2],[.75,.25]],'4-4-2':[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.15,.52],[.38,.52],[.62,.52],[.85,.52],[.35,.3],[.65,.3]],'4-2-3-1':[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.35,.6],[.65,.6],[.2,.42],[.5,.38],[.8,.42],[.5,.2]],'3-5-2':[[.5,.88],[.25,.72],[.5,.68],[.75,.72],[.12,.52],[.32,.5],[.5,.48],[.68,.5],[.88,.52],[.35,.25],[.65,.25]],'5-3-2':[[.5,.88],[.1,.72],[.3,.72],[.5,.68],[.7,.72],[.9,.72],[.25,.5],[.5,.46],[.75,.5],[.35,.25],[.65,.25]],'4-1-4-1':[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.5,.62],[.15,.45],[.38,.42],[.62,.42],[.85,.45],[.5,.2]]};
const F8={'3-3-1':[[.5,.88],[.22,.7],[.5,.68],[.78,.7],[.22,.5],[.5,.47],[.78,.5],[.5,.25]],'2-4-1':[[.5,.88],[.28,.7],[.72,.7],[.18,.5],[.38,.48],[.62,.48],[.82,.5],[.5,.25]],'3-2-2':[[.5,.88],[.22,.7],[.5,.68],[.78,.7],[.33,.52],[.67,.52],[.28,.28],[.72,.28]]};
const F5={'1-2-1':[[.5,.88],[.5,.7],[.28,.5],[.72,.5],[.5,.25]],'2-1-1':[[.5,.88],[.28,.7],[.72,.7],[.5,.5],[.5,.25]],'0-3-1':[[.5,.88],[.2,.65],[.5,.62],[.8,.65],[.5,.25]]};
const MC={'11':11,'8':8,'5':5};
const COLS=['#00E676','#FF4757','#F0B429','#4DABF7','#fff','#FF6B9D'];
const RAW=${playersJSON};
let cv,ctx,W,H,sc;
let mode='11',forms=F11,cf='4-3-3',tool='select',col='#00E676';
let players=RAW.map(p=>({...p,x:0,y:0,onPitch:false}));
let arrows=[],zones=[],draws=[],hist=[];
let drag=null,dox=0,doy=0,as=null,zs=null,drawing=false,dp=null,sel=null;

window.addEventListener('DOMContentLoaded',()=>{
  cv=document.getElementById('c');
  ctx=cv.getContext('2d');
  buildForms();buildColors();buildRoster();
  cv.addEventListener('mousedown',dn);
  cv.addEventListener('mousemove',mv);
  cv.addEventListener('mouseup',up);
  cv.addEventListener('dblclick',dbl);
  cv.addEventListener('touchstart',e=>{e.preventDefault();dn(t2m(e));},{passive:false});
  cv.addEventListener('touchmove',e=>{e.preventDefault();mv(t2m(e));},{passive:false});
  cv.addEventListener('touchend',e=>{e.preventDefault();up();},{passive:false});
  cv.addEventListener('dragover',e=>e.preventDefault());
  cv.addEventListener('drop',e=>{
    e.preventDefault();
    const pid=parseInt(e.dataTransfer.getData('pid'));
    const r=cv.getBoundingClientRect();
    const x=(e.clientX-r.left)/W,y=(e.clientY-r.top)/H;
    const p=players.find(pp=>pp.id===pid);
    if(p){sh();p.x=cl(x);p.y=cl(y);p.onPitch=true;buildRoster();render();upStats();}
  });
  window.addEventListener('resize',()=>{resize();applyF(cf);render();upStats();});
  // Utiliser les dimensions de la fenêtre directement — pas besoin d'offsetWidth
  resize();applyF(cf);render();upStats();
});

function t2m(e){const t=e.touches[0]||e.changedTouches[0];return{clientX:t.clientX,clientY:t.clientY};}
function cl(v){return Math.max(.03,Math.min(.97,v));}

function resize(){
  // Calcul direct depuis window — indépendant du layout CSS
  const aw = window.innerWidth - 200 - 180 - 24;
  const ah = window.innerHeight - 44 - 24;
  const R = mode==='5'?20/40:mode==='8'?52/80:68/105;
  let w,h;
  if(aw/ah>R){h=ah;w=h*R;}else{w=aw;h=w/R;}
  w=Math.floor(w);h=Math.floor(h);
  cv.width=w;cv.height=h;W=w;H=h;sc=Math.min(w,h)/400;
}

function render(){if(!ctx||!W||!H)return;ctx.clearRect(0,0,W,H);dPitch();dZones();dDraws();dArrows();dPlayers();}
function dPitch(){if(mode==='5')dFut();else if(mode==='8')d8();else d11();}
function d11(){const m=W*.012;for(let i=0;i<10;i++){ctx.fillStyle=i%2===0?'#2A5224':'#265020';ctx.fillRect(0,H/10*i,W,H/10);}ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=Math.max(1,sc*1.5);ctx.lineCap='round';ctx.lineJoin='round';rr(m,m,W-m*2,H-m*2,4);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.12,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,3,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fill();const paW=W*.55,paH=H*.16,paX=(W-paW)/2;ctx.strokeRect(paX,m,paW,paH);ctx.strokeRect(paX,H-m-paH,paW,paH);const gaW=W*.28,gaH=H*.07,gaX=(W-gaW)/2;ctx.strokeRect(gaX,m,gaW,gaH);ctx.strokeRect(gaX,H-m-gaH,gaW,gaH);const gW=W*.13,gH=H*.025;ctx.strokeStyle='rgba(255,255,255,.8)';ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);dot(W/2,m+paH*.72,3,'rgba(255,255,255,.5)');dot(W/2,H-m-paH*.72,3,'rgba(255,255,255,.5)');}
function d8(){const m=W*.015;for(let i=0;i<8;i++){ctx.fillStyle=i%2===0?'#2A5224':'#265020';ctx.fillRect(0,H/8*i,W,H/8);}ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=Math.max(1,sc*1.5);ctx.lineCap='round';rr(m,m,W-m*2,H-m*2,4);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.10,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,3,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fill();const paW=W*.50,paH=H*.18,paX=(W-paW)/2;ctx.strokeRect(paX,m,paW,paH);ctx.strokeRect(paX,H-m-paH,paW,paH);const gW=W*.15,gH=H*.028;ctx.strokeStyle='rgba(255,255,255,.8)';ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);}
function dFut(){const m=W*.015;ctx.fillStyle='#1A3F60';ctx.fillRect(0,0,W,H);for(let i=0;i<12;i++){ctx.fillStyle=i%2===0?'rgba(255,255,255,.03)':'transparent';ctx.fillRect(0,H/12*i,W,H/12);}ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=Math.max(1.5,sc*1.8);ctx.lineCap='round';rr(m,m,W-m*2,H-m*2,6);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.13,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,4,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.8)';ctx.fill();ctx.beginPath();ctx.arc(W/2,m,W*.30,0,Math.PI);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.stroke();ctx.beginPath();ctx.arc(W/2,H-m,W*.30,Math.PI,Math.PI*2);ctx.stroke();const gW=W*.16,gH=H*.03;ctx.strokeStyle='rgba(255,255,255,.9)';ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}
function dot(x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=c;ctx.fill();}
function dPlayers(){players.filter(p=>p.onPitch).forEach(p=>{const iS=sel&&sel.id===p.id;const r=W*.044;const x=p.x*W,y=p.y*H;ctx.beginPath();ctx.ellipse(x,y+r*.6,r*.7,r*.25,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.3)';ctx.fill();if(iS){ctx.beginPath();ctx.arc(x,y,r+5,0,Math.PI*2);ctx.fillStyle=p.color+'33';ctx.fill();ctx.beginPath();ctx.arc(x,y,r+3,0,Math.PI*2);ctx.strokeStyle=p.color;ctx.lineWidth=2;ctx.setLineDash([4,3]);ctx.stroke();ctx.setLineDash([]);}if(p.photoUrl){const img=new Image();img.src=p.photoUrl;ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.clip();ctx.drawImage(img,x-r,y-r,r*2,r*2);ctx.restore();ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;ctx.stroke();}else{ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;ctx.stroke();const fs=Math.round(r*.72);ctx.font='700 '+fs+'px Space Mono,monospace';ctx.fillStyle=ctr(p.color);ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.num,x,y+1);}const sh=p.name.split(' ').pop();const nf=Math.max(9,Math.round(sc*10));ctx.font='600 '+nf+'px DM Sans,sans-serif';const tw=ctx.measureText(sh).width+8;const py2=y+r+3;ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(x-tw/2,py2,tw,nf+4);ctx.fillStyle='rgba(255,255,255,.9)';ctx.textBaseline='top';ctx.textAlign='center';ctx.fillText(sh,x,py2+2);});}
function ctr(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return(r*299+g*587+b*114)/1000>128?'#000':'#fff';}
function dArrows(){if(as&&tool==='arrow'){ctx.beginPath();ctx.moveTo(as.x*W,as.y*H);ctx.lineTo(as.cx*W,as.cy*H);ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.setLineDash([6,4]);ctx.stroke();ctx.setLineDash([]);}arrows.forEach(a=>dArr(a.x1*W,a.y1*H,a.x2*W,a.y2*H,a.color));}
function dArr(x1,y1,x2,y2,c){const dx=x2-x1,dy=y2-y1,ag=Math.atan2(dy,dx),ln=Math.sqrt(dx*dx+dy*dy);if(ln<10)return;const hl=Math.min(18,ln*.25);const ex=x2-Math.cos(ag)*hl*.4,ey=y2-Math.sin(ag)*hl*.4;const cx2=(x1+x2)/2-dy*.1,cy2=(y1+y2)/2+dx*.1;ctx.beginPath();ctx.moveTo(x1,y1);ctx.quadraticCurveTo(cx2,cy2,ex,ey);ctx.strokeStyle=c;ctx.lineWidth=2.5;ctx.lineCap='round';ctx.stroke();ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-hl*Math.cos(ag-.45),y2-hl*Math.sin(ag-.45));ctx.lineTo(x2-hl*Math.cos(ag+.45),y2-hl*Math.sin(ag+.45));ctx.closePath();ctx.fillStyle=c;ctx.fill();}
function dZones(){zones.forEach(z=>{ctx.fillStyle=z.color+'33';ctx.strokeStyle=z.color;ctx.lineWidth=1.5;ctx.setLineDash([5,3]);ctx.fillRect(z.x*W,z.y*H,z.w*W,z.h*H);ctx.strokeRect(z.x*W,z.y*H,z.w*W,z.h*H);ctx.setLineDash([]);});if(zs&&tool==='zone'){const w=(zs.cx-zs.x)*W,h=(zs.cy-zs.y)*H;ctx.fillStyle=col+'22';ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.setLineDash([5,3]);ctx.fillRect(zs.x*W,zs.y*H,w,h);ctx.strokeRect(zs.x*W,zs.y*H,w,h);ctx.setLineDash([]);}}
function dDraws(){draws.forEach(d=>{if(d.pts.length<2)return;ctx.beginPath();ctx.moveTo(d.pts[0].x*W,d.pts[0].y*H);d.pts.forEach((p,i)=>{if(i>0)ctx.lineTo(p.x*W,p.y*H);});ctx.strokeStyle=d.color;ctx.lineWidth=2.5;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();});}
function gp(e){const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)/W,y:(e.clientY-r.top)/H};}
function pAt(x,y){return players.filter(p=>p.onPitch).find(p=>Math.sqrt((p.x-x)**2+(p.y-y)**2)<.05)||null;}
function dn(e){const p=gp(e);if(tool==='select'){const pp=pAt(p.x,p.y);if(pp){sh();drag=pp;dox=p.x-pp.x;doy=p.y-pp.y;sel=pp;}else sel=null;render();}else if(tool==='arrow'){if(!as){as={x:p.x,y:p.y,cx:p.x,cy:p.y};}else{sh();arrows.push({x1:as.x,y1:as.y,x2:p.x,y2:p.y,color:col});as=null;render();}}else if(tool==='zone'){if(!zs){zs={x:p.x,y:p.y,cx:p.x,cy:p.y};}else{sh();const w=zs.cx-zs.x,h=zs.cy-zs.y;if(Math.abs(w)>.02&&Math.abs(h)>.02)zones.push({x:Math.min(zs.x,zs.cx),y:Math.min(zs.y,zs.cy),w:Math.abs(w),h:Math.abs(h),color:col});zs=null;render();}}else if(tool==='draw'){sh();drawing=true;dp={pts:[{x:p.x,y:p.y}],color:col};}}
function mv(e){const p=gp(e);if(drag){drag.x=cl(p.x-dox);drag.y=cl(p.y-doy);render();return;}if(as){as.cx=p.x;as.cy=p.y;render();return;}if(zs){zs.cx=p.x;zs.cy=p.y;render();return;}if(drawing&&dp){dp.pts.push({x:p.x,y:p.y});render();}}
function up(){if(drag){drag=null;render();}if(drawing&&dp&&dp.pts.length>3){draws.push(dp);render();}drawing=false;dp=null;}
function dbl(e){const p=gp(e);const pp=pAt(p.x,p.y);if(pp){sh();pp.onPitch=false;sel=null;buildRoster();render();upStats();}}
function applyF(name){cf=name;const pos=forms[name];if(!pos)return;const cnt=MC[mode];players.forEach((p,i)=>{if(i<cnt){p.x=pos[i][0];p.y=pos[i][1];p.onPitch=true;}else p.onPitch=false;});document.querySelectorAll('.fb').forEach(b=>b.classList.toggle('active',b.dataset.f===name));document.getElementById('tl').textContent='FC Étoile — '+name;buildRoster();render();upStats();}
function buildForms(){const g=document.getElementById('fg');g.innerHTML=Object.keys(forms).map(f=>'<div class="fb '+(f===cf?'active':'')+'" data-f="'+f+'" onclick="applyF(\''+f+'\')">'+f+'</div>').join('');}
function setMode(m,el){mode=m;forms=m==='11'?F11:m==='8'?F8:F5;document.querySelectorAll('.mb').forEach(b=>b.classList.remove('active'));el.classList.add('active');players.forEach(p=>p.onPitch=false);arrows=[];zones=[];draws=[];sel=null;cf=Object.keys(forms)[0];buildForms();resize();applyF(cf);}
function setTool(t,el){tool=t;as=null;zs=null;drawing=false;document.querySelectorAll('.tb').forEach(b=>b.classList.remove('active'));el.classList.add('active');render();}
function buildColors(){const r=document.getElementById('cr');r.innerHTML=COLS.map(c=>'<div class="cd '+(c===col?'active':'')+'" style="background:'+c+'" onclick="setCol(\''+c+'\',this)"></div>').join('');const inp=document.createElement('input');inp.type='color';inp.value='#ffffff';inp.style.cssText='width:20px;height:20px;border:none;background:none;cursor:pointer;padding:0;border-radius:50%';inp.oninput=()=>{col=inp.value;document.querySelectorAll('.cd').forEach(d=>d.classList.remove('active'));};r.appendChild(inp);}
function setCol(c,el){col=c;document.querySelectorAll('.cd').forEach(d=>d.classList.remove('active'));el.classList.add('active');}
function buildRoster(){const el=document.getElementById('roster');const subs=players.filter(p=>!p.onPitch);el.innerHTML=subs.length?subs.map(p=>'<div class="ri" draggable="true" ondragstart="event.dataTransfer.setData(\'pid\','+p.id+')"><div class="rnum" style="background:'+p.color+'">'+(p.photoUrl?'<img src="'+p.photoUrl+'" />':p.num)+'</div><div class="rinfo"><div class="rname">'+p.name+'</div><div class="rpos">'+p.pos+'</div></div><button class="radd" onclick="addF('+p.id+')">+</button></div>').join(''):'<div style="font-size:.65rem;color:var(--muted);text-align:center;padding:.5rem">Tous sur le terrain</div>';}
function addF(pid){const p=players.find(pp=>pp.id===pid);if(!p)return;sh();p.x=.4+Math.random()*.2;p.y=.4+Math.random()*.2;p.onPitch=true;buildRoster();render();upStats();}
function upStats(){const on=players.filter(p=>p.onPitch);const gk=on.filter(p=>p.pos==='GK').length;const def=on.filter(p=>['LB','CB','RB'].includes(p.pos)).length;const mid=on.filter(p=>['CM','LM','RM','CAM','CDM'].includes(p.pos)).length;const att=on.filter(p=>['LW','RW','ST','CF'].includes(p.pos)).length;document.getElementById('sp').innerHTML=[['Mode',{11:'11v11',8:'8v8',5:'Futsal'}[mode],'var(--blue)'],['Terrain',on.length+'/'+MC[mode],'var(--green)'],['Formation',cf,'var(--blue)'],['GK',gk,'var(--red)'],['Déf',def,'var(--accent)'],['Mil',mid,'var(--blue)'],['Att',att,'var(--green)'],['Rempl.',players.filter(p=>!p.onPitch).length,'var(--muted)']].map(([l,v,c])=>'<div class="sr"><span class="sl">'+l+'</span><span class="sv" style="color:'+c+'">'+v+'</span></div>').join('');}
function sh(){hist.push({players:players.map(p=>({...p})),arrows:JSON.parse(JSON.stringify(arrows)),zones:JSON.parse(JSON.stringify(zones)),draws:JSON.parse(JSON.stringify(draws))});if(hist.length>30)hist.shift();}
function undo(){if(!hist.length)return;const s=hist.pop();players=s.players;arrows=s.arrows;zones=s.zones;draws=s.draws;sel=null;buildRoster();render();upStats();}
function clrAnnot(){sh();arrows=[];zones=[];draws=[];render();}
function rst(){if(!confirm('Réinitialiser ?'))return;sh();players.forEach(p=>p.onPitch=false);arrows=[];zones=[];draws=[];sel=null;buildRoster();render();upStats();}
function saveImg(){const a=document.createElement('a');a.download='tactique-'+cf+'.png';a.href=cv.toDataURL();a.click();}
<\/script>
</body>
</html>`;}


// ═══════════════════════════════════
//  TACTICAL BOARD — NOUVEL ONGLET
// ═══════════════════════════════════
function openTactical() {
  const playersJSON = JSON.stringify(PLAYERS.map(p => ({
    id: p.id, name: p.name, num: p.num, pos: p.pos,
    color: p.color, photoUrl: p.photoUrl || null
  })));
  const html = getTacticalHTML(playersJSON);
  const blob = new Blob([html], {type: 'text/html'});
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank');
  if (!win) showToast('⚠️ Autorisez les popups pour ouvrir le tableau tactique');
  else showToast('Tableau tactique ouvert ↗');
}

function tacInit() {}
function tacSyncPlayers() {}

function getTacticalHTML(pj) {
  var s = '<'+'script'+'>';
  var es = '<'+'/script'+'>';
  return '<!DOCTYPE html>\n<html lang="fr">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<title>Tableau Tactique</title>\n<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\n:root{--g:#00E676;--bk:#080C0A;--dk:#0D1410;--c:#131A15;--b:#1C2420;--t:#E8F0EB;--m:#6B8070;--a:#F0B429;--r:#FF4757;--bl:#4DABF7}\nhtml,body{width:100%;height:100%;overflow:hidden;background:var(--bk);color:var(--t);font-family:\'DM Sans\',sans-serif}\n#sb{position:fixed;left:0;top:0;bottom:0;width:200px;background:var(--dk);border-right:1px solid var(--b);overflow-y:auto;padding:.6rem;z-index:2}\n#tb{position:fixed;left:200px;right:180px;top:0;height:44px;background:var(--dk);border-bottom:1px solid var(--b);display:flex;align-items:center;padding:0 .75rem;gap:.4rem;z-index:2}\n#rp{position:fixed;right:0;top:0;bottom:0;width:180px;background:var(--dk);border-left:1px solid var(--b);padding:.6rem;overflow-y:auto;z-index:2}\n#pa{position:fixed;left:200px;right:180px;top:44px;bottom:0;background:var(--bk);display:flex;align-items:center;justify-content:center;padding:12px}\ncanvas{display:block;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6);cursor:crosshair;touch-action:none}\n.lbl{font-size:.58rem;color:var(--m);font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin:.4rem 0 .2rem;display:block}\n.fg{display:grid;grid-template-columns:1fr 1fr;gap:.25rem}\n.fb{background:var(--c);border:1px solid var(--b);border-radius:5px;padding:.3rem;text-align:center;font-family:\'Space Mono\',monospace;font-size:.6rem;color:var(--m);cursor:pointer}\n.fb.ac,.fb:hover{border-color:var(--g);color:var(--g);background:rgba(0,230,118,.08)}\n.mr{display:flex;gap:.25rem}\n.mb{flex:1;background:var(--c);border:1px solid var(--b);border-radius:5px;padding:.35rem .2rem;text-align:center;font-size:.58rem;color:var(--m);cursor:pointer}\n.mb.ac,.mb:hover{border-color:var(--g);color:var(--g);background:rgba(0,230,118,.08)}\n.tr{display:flex;gap:.25rem;flex-wrap:wrap}\n.tb2{flex:1;min-width:36px;background:var(--c);border:1px solid var(--b);border-radius:5px;padding:.35rem .2rem;text-align:center;font-size:.58rem;color:var(--m);cursor:pointer}\n.tb2.ac,.tb2:hover{border-color:var(--g);color:var(--g);background:rgba(0,230,118,.08)}\n.cr{display:flex;gap:.25rem;flex-wrap:wrap;align-items:center}\n.cd{width:20px;height:20px;border-radius:50%;cursor:pointer;border:2px solid transparent}\n.cd.ac,.cd:hover{border-color:white;transform:scale(1.1)}\n.ri{display:flex;align-items:center;gap:.4rem;padding:.3rem;border-radius:5px;cursor:grab;margin-bottom:.15rem}\n.ri:hover{background:rgba(255,255,255,.04)}\n.rn{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:800;color:#000;flex-shrink:0;overflow:hidden}\n.rn img{width:100%;height:100%;object-fit:cover;border-radius:50%}\n.ri2{flex:1;min-width:0}\n.rna{font-size:.68rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.rpo{font-size:.58rem;color:var(--m)}\n.ra{width:16px;height:16px;border-radius:50%;background:var(--b);border:none;color:var(--m);cursor:pointer}\n.ra:hover{background:var(--g);color:#000}\n.ab{height:28px;padding:0 .65rem;border-radius:5px;border:1px solid var(--b);background:var(--c);color:var(--t);font-size:.72rem;font-weight:600;cursor:pointer}\n.ab.p{background:var(--g);color:#000;border-color:var(--g)}\n.rpl{font-family:\'Space Mono\',monospace;font-size:.58rem;color:var(--m);letter-spacing:.08em;text-transform:uppercase;margin:.5rem 0 .3rem}\n.sr{display:flex;justify-content:space-between;padding:.28rem 0;border-bottom:1px solid var(--b);font-size:.7rem}\n.sl{color:var(--m);font-size:.68rem}\n.sv{font-family:\'Space Mono\',monospace;font-size:.65rem;font-weight:700}\nh2{font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;color:var(--g);margin-bottom:.4rem;letter-spacing:.06em}\nh1{font-family:\'Bebas Neue\',sans-serif;font-size:.95rem;letter-spacing:.05em;flex:1;color:var(--m);margin:0}\n</style>\n</head>\n<body>\n<div id="sb"><h2>⚽ Tactique</h2>\n<span class="lbl">Mode</span><div class="mr"><div class="mb ac" onclick="sM(\'11\',this)">⚽ 11v11</div><div class="mb" onclick="sM(\'8\',this)">🟩 8v8</div><div class="mb" onclick="sM(\'5\',this)">🏟️ 5v5</div></div>\n<span class="lbl">Formation</span><div class="fg" id="fg"></div>\n<span class="lbl">Outil</span><div class="tr"><div class="tb2 ac" onclick="sT(\'select\',this)">👆 Dépl.</div><div class="tb2" onclick="sT(\'arrow\',this)">➡️ Flèche</div><div class="tb2" onclick="sT(\'zone\',this)">⬜ Zone</div><div class="tb2" onclick="sT(\'draw\',this)">✏️ Dessin</div></div>\n<span class="lbl">Couleur</span><div class="cr" id="cr"></div>\n<span class="lbl">Remplaçants</span><div id="ro" style="overflow-y:auto;max-height:220px"></div></div>\n<div id="tb"><h1 id="tl">Tactique</h1><button class="ab" onclick="ud()">↩ Annuler</button><button class="ab" onclick="ca()">✕ Flèches</button><button class="ab" onclick="rs()">🗑 Reset</button><button class="ab p" onclick="si()">💾 Exporter</button></div>\n<div id="pa"><canvas id="c"></canvas></div>\n<div id="rp"><div class="rpl">Composition</div><div id="sp"></div></div>\n' + s + '\nconst F11={"4-3-3":[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.25,.52],[.5,.48],[.75,.52],[.25,.25],[.5,.2],[.75,.25]],"4-4-2":[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.15,.52],[.38,.52],[.62,.52],[.85,.52],[.35,.3],[.65,.3]],"4-2-3-1":[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.35,.6],[.65,.6],[.2,.42],[.5,.38],[.8,.42],[.5,.2]],"3-5-2":[[.5,.88],[.25,.72],[.5,.68],[.75,.72],[.12,.52],[.32,.5],[.5,.48],[.68,.5],[.88,.52],[.35,.25],[.65,.25]],"5-3-2":[[.5,.88],[.1,.72],[.3,.72],[.5,.68],[.7,.72],[.9,.72],[.25,.5],[.5,.46],[.75,.5],[.35,.25],[.65,.25]],"4-1-4-1":[[.5,.88],[.15,.72],[.38,.72],[.62,.72],[.85,.72],[.5,.62],[.15,.45],[.38,.42],[.62,.42],[.85,.45],[.5,.2]]};\nconst F8={"3-3-1":[[.5,.88],[.22,.7],[.5,.68],[.78,.7],[.22,.5],[.5,.47],[.78,.5],[.5,.25]],"2-4-1":[[.5,.88],[.28,.7],[.72,.7],[.18,.5],[.38,.48],[.62,.48],[.82,.5],[.5,.25]],"3-2-2":[[.5,.88],[.22,.7],[.5,.68],[.78,.7],[.33,.52],[.67,.52],[.28,.28],[.72,.28]]};\nconst F5={"1-2-1":[[.5,.88],[.5,.7],[.28,.5],[.72,.5],[.5,.25]],"2-1-1":[[.5,.88],[.28,.7],[.72,.7],[.5,.5],[.5,.25]],"0-3-1":[[.5,.88],[.2,.65],[.5,.62],[.8,.65],[.5,.25]]};\nconst MC={"11":11,"8":8,"5":5};\nconst COLS=["#00E676","#FF4757","#F0B429","#4DABF7","#fff","#FF6B9D"];\nconst RAW=' + pj + ';\nlet cv,ctx,W,H,sc,mode="11",forms=F11,cf="4-3-3",tool="select",col="#00E676";\nlet players=RAW.map(p=>({...p,x:0,y:0,onPitch:false}));\nlet arrows=[],zones=[],draws=[],hist=[],drag=null,dox=0,doy=0,as=null,zs=null,drawing=false,dp=null,sel=null;\nwindow.addEventListener("DOMContentLoaded",()=>{\n  cv=document.getElementById("c");ctx=cv.getContext("2d");\n  bF();bC();bR();\n  cv.addEventListener("mousedown",dn);cv.addEventListener("mousemove",mv);cv.addEventListener("mouseup",up);cv.addEventListener("dblclick",db);\n  cv.addEventListener("touchstart",e=>{e.preventDefault();dn(t2m(e));},{passive:false});\n  cv.addEventListener("touchmove",e=>{e.preventDefault();mv(t2m(e));},{passive:false});\n  cv.addEventListener("touchend",e=>{e.preventDefault();up();},{passive:false});\n  cv.addEventListener("dragover",e=>e.preventDefault());\n  cv.addEventListener("drop",e=>{e.preventDefault();const pid=parseInt(e.dataTransfer.getData("pid"));const r=cv.getBoundingClientRect();const x=(e.clientX-r.left)/W,y=(e.clientY-r.top)/H;const p=players.find(pp=>pp.id===pid);if(p){sh();p.x=cl(x);p.y=cl(y);p.onPitch=true;bR();rn();uS();}});\n  window.addEventListener("resize",()=>{rz();af(cf);rn();uS();});\n  rz();af(cf);rn();uS();\n});\nfunction t2m(e){const t=e.touches[0]||e.changedTouches[0];return{clientX:t.clientX,clientY:t.clientY};}\nfunction cl(v){return Math.max(.03,Math.min(.97,v));}\nfunction rz(){const aw=window.innerWidth-200-180-24,ah=window.innerHeight-44-24;const R=mode==="5"?20/40:mode==="8"?52/80:68/105;let w,h;if(aw/ah>R){h=ah;w=h*R;}else{w=aw;h=w/R;}cv.width=Math.floor(w);cv.height=Math.floor(h);W=cv.width;H=cv.height;sc=Math.min(W,H)/400;}\nfunction rn(){if(!ctx||!W||!H)return;ctx.clearRect(0,0,W,H);dP();dZ();dD();dA();dPl();}\nfunction dP(){if(mode==="5")dFu();else if(mode==="8")d8();else d11();}\nfunction d11(){const m=W*.012;for(let i=0;i<10;i++){ctx.fillStyle=i%2===0?"#2A5224":"#265020";ctx.fillRect(0,H/10*i,W,H/10);}ctx.strokeStyle="rgba(255,255,255,.55)";ctx.lineWidth=Math.max(1,sc*1.5);ctx.lineCap="round";ctx.lineJoin="round";rr(m,m,W-m*2,H-m*2,4);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.12,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,3,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,.6)";ctx.fill();const paW=W*.55,paH=H*.16,paX=(W-paW)/2;ctx.strokeRect(paX,m,paW,paH);ctx.strokeRect(paX,H-m-paH,paW,paH);const gaW=W*.28,gaH=H*.07,gaX=(W-gaW)/2;ctx.strokeRect(gaX,m,gaW,gaH);ctx.strokeRect(gaX,H-m-gaH,gaW,gaH);const gW=W*.13,gH=H*.025;ctx.strokeStyle="rgba(255,255,255,.8)";ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);dot(W/2,m+paH*.72,3,"rgba(255,255,255,.5)");dot(W/2,H-m-paH*.72,3,"rgba(255,255,255,.5)");}\nfunction d8(){const m=W*.015;for(let i=0;i<8;i++){ctx.fillStyle=i%2===0?"#2A5224":"#265020";ctx.fillRect(0,H/8*i,W,H/8);}ctx.strokeStyle="rgba(255,255,255,.55)";ctx.lineWidth=Math.max(1,sc*1.5);ctx.lineCap="round";rr(m,m,W-m*2,H-m*2,4);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.10,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,3,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,.6)";ctx.fill();const paW=W*.50,paH=H*.18,paX=(W-paW)/2;ctx.strokeRect(paX,m,paW,paH);ctx.strokeRect(paX,H-m-paH,paW,paH);const gW=W*.15,gH=H*.028;ctx.strokeStyle="rgba(255,255,255,.8)";ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);}\nfunction dFu(){const m=W*.015;ctx.fillStyle="#1A3F60";ctx.fillRect(0,0,W,H);for(let i=0;i<12;i++){ctx.fillStyle=i%2===0?"rgba(255,255,255,.03)":"transparent";ctx.fillRect(0,H/12*i,W,H/12);}ctx.strokeStyle="rgba(255,255,255,.7)";ctx.lineWidth=Math.max(1.5,sc*1.8);ctx.lineCap="round";rr(m,m,W-m*2,H-m*2,6);ctx.stroke();ctx.beginPath();ctx.moveTo(m,H/2);ctx.lineTo(W-m,H/2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,W*.13,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,H/2,4,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,.8)";ctx.fill();ctx.beginPath();ctx.arc(W/2,m,W*.30,0,Math.PI);ctx.strokeStyle="rgba(255,255,255,.5)";ctx.stroke();ctx.beginPath();ctx.arc(W/2,H-m,W*.30,Math.PI,Math.PI*2);ctx.stroke();const gW=W*.16,gH=H*.03;ctx.strokeStyle="rgba(255,255,255,.9)";ctx.strokeRect((W-gW)/2,m-gH,gW,gH);ctx.strokeRect((W-gW)/2,H-m,gW,gH);}\nfunction rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}\nfunction dot(x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=c;ctx.fill();}\nfunction dPl(){players.filter(p=>p.onPitch).forEach(p=>{const iS=sel&&sel.id===p.id;const r=W*.044;const x=p.x*W,y=p.y*H;ctx.beginPath();ctx.ellipse(x,y+r*.6,r*.7,r*.25,0,0,Math.PI*2);ctx.fillStyle="rgba(0,0,0,.3)";ctx.fill();if(iS){ctx.beginPath();ctx.arc(x,y,r+5,0,Math.PI*2);ctx.fillStyle=p.color+"33";ctx.fill();ctx.beginPath();ctx.arc(x,y,r+3,0,Math.PI*2);ctx.strokeStyle=p.color;ctx.lineWidth=2;ctx.setLineDash([4,3]);ctx.stroke();ctx.setLineDash([]);}ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();ctx.strokeStyle="rgba(255,255,255,.7)";ctx.lineWidth=1.5;ctx.stroke();const fs=Math.round(r*.72);ctx.font="700 "+fs+"px Space Mono,monospace";ctx.fillStyle=ctr(p.color);ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(p.num,x,y+1);const sh=p.name.split(" ").pop();const nf=Math.max(9,Math.round(sc*10));ctx.font="600 "+nf+"px DM Sans,sans-serif";const tw=ctx.measureText(sh).width+8;const py2=y+r+3;ctx.fillStyle="rgba(0,0,0,.6)";ctx.fillRect(x-tw/2,py2,tw,nf+4);ctx.fillStyle="rgba(255,255,255,.9)";ctx.textBaseline="top";ctx.textAlign="center";ctx.fillText(sh,x,py2+2);});}\nfunction ctr(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return(r*299+g*587+b*114)/1000>128?"#000":"#fff";}\nfunction dA(){if(as&&tool==="arrow"){ctx.beginPath();ctx.moveTo(as.x*W,as.y*H);ctx.lineTo(as.cx*W,as.cy*H);ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.setLineDash([6,4]);ctx.stroke();ctx.setLineDash([]);}arrows.forEach(a=>dAr(a.x1*W,a.y1*H,a.x2*W,a.y2*H,a.color));}\nfunction dAr(x1,y1,x2,y2,c){const dx=x2-x1,dy=y2-y1,ag=Math.atan2(dy,dx),ln=Math.sqrt(dx*dx+dy*dy);if(ln<10)return;const hl=Math.min(18,ln*.25);const ex=x2-Math.cos(ag)*hl*.4,ey=y2-Math.sin(ag)*hl*.4;const cx2=(x1+x2)/2-dy*.1,cy2=(y1+y2)/2+dx*.1;ctx.beginPath();ctx.moveTo(x1,y1);ctx.quadraticCurveTo(cx2,cy2,ex,ey);ctx.strokeStyle=c;ctx.lineWidth=2.5;ctx.lineCap="round";ctx.stroke();ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-hl*Math.cos(ag-.45),y2-hl*Math.sin(ag-.45));ctx.lineTo(x2-hl*Math.cos(ag+.45),y2-hl*Math.sin(ag+.45));ctx.closePath();ctx.fillStyle=c;ctx.fill();}\nfunction dZ(){zones.forEach(z=>{ctx.fillStyle=z.color+"33";ctx.strokeStyle=z.color;ctx.lineWidth=1.5;ctx.setLineDash([5,3]);ctx.fillRect(z.x*W,z.y*H,z.w*W,z.h*H);ctx.strokeRect(z.x*W,z.y*H,z.w*W,z.h*H);ctx.setLineDash([]);});if(zs&&tool==="zone"){const w=(zs.cx-zs.x)*W,h=(zs.cy-zs.y)*H;ctx.fillStyle=col+"22";ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.setLineDash([5,3]);ctx.fillRect(zs.x*W,zs.y*H,w,h);ctx.strokeRect(zs.x*W,zs.y*H,w,h);ctx.setLineDash([]);}}\nfunction dD(){draws.forEach(d=>{if(d.pts.length<2)return;ctx.beginPath();ctx.moveTo(d.pts[0].x*W,d.pts[0].y*H);d.pts.forEach((p,i)=>{if(i>0)ctx.lineTo(p.x*W,p.y*H);});ctx.strokeStyle=d.color;ctx.lineWidth=2.5;ctx.lineCap="round";ctx.lineJoin="round";ctx.stroke();});}\nfunction gp(e){const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)/W,y:(e.clientY-r.top)/H};}\nfunction pAt(x,y){return players.filter(p=>p.onPitch).find(p=>Math.sqrt((p.x-x)**2+(p.y-y)**2)<.05)||null;}\nfunction dn(e){const p=gp(e);if(tool==="select"){const pp=pAt(p.x,p.y);if(pp){sh();drag=pp;dox=p.x-pp.x;doy=p.y-pp.y;sel=pp;}else sel=null;rn();}else if(tool==="arrow"){if(!as){as={x:p.x,y:p.y,cx:p.x,cy:p.y};}else{sh();arrows.push({x1:as.x,y1:as.y,x2:p.x,y2:p.y,color:col});as=null;rn();}}else if(tool==="zone"){if(!zs){zs={x:p.x,y:p.y,cx:p.x,cy:p.y};}else{sh();const w=zs.cx-zs.x,h=zs.cy-zs.y;if(Math.abs(w)>.02&&Math.abs(h)>.02)zones.push({x:Math.min(zs.x,zs.cx),y:Math.min(zs.y,zs.cy),w:Math.abs(w),h:Math.abs(h),color:col});zs=null;rn();}}else if(tool==="draw"){sh();drawing=true;dp={pts:[{x:p.x,y:p.y}],color:col};}}\nfunction mv(e){const p=gp(e);if(drag){drag.x=cl(p.x-dox);drag.y=cl(p.y-doy);rn();return;}if(as){as.cx=p.x;as.cy=p.y;rn();return;}if(zs){zs.cx=p.x;zs.cy=p.y;rn();return;}if(drawing&&dp){dp.pts.push({x:p.x,y:p.y});rn();}}\nfunction up(){if(drag){drag=null;rn();}if(drawing&&dp&&dp.pts.length>3){draws.push(dp);rn();}drawing=false;dp=null;}\nfunction db(e){const p=gp(e);const pp=pAt(p.x,p.y);if(pp){sh();pp.onPitch=false;sel=null;bR();rn();uS();}}\nfunction af(name){cf=name;const pos=forms[name];if(!pos)return;const cnt=MC[mode];players.forEach((p,i)=>{if(i<cnt){p.x=pos[i][0];p.y=pos[i][1];p.onPitch=true;}else p.onPitch=false;});document.querySelectorAll(".fb").forEach(b=>b.classList.toggle("ac",b.dataset.f===name));document.getElementById("tl").textContent="FC Etoile — "+name;bR();rn();uS();}\nfunction bF(){const g=document.getElementById("fg");g.innerHTML=Object.keys(forms).map(f=>"<div class=\\"fb "+(f===cf?"ac":"")+"\\" data-f=\\""+f+"\\" onclick=\\"af(\'"+f+"\')\\" >"+f+"</div>").join("");}\nfunction sM(m,el){mode=m;forms=m==="11"?F11:m==="8"?F8:F5;document.querySelectorAll(".mb").forEach(b=>b.classList.remove("ac"));el.classList.add("ac");players.forEach(p=>p.onPitch=false);arrows=[];zones=[];draws=[];sel=null;cf=Object.keys(forms)[0];bF();rz();af(cf);}\nfunction sT(t,el){tool=t;as=null;zs=null;drawing=false;document.querySelectorAll(".tb2").forEach(b=>b.classList.remove("ac"));el.classList.add("ac");rn();}\nfunction bC(){const r=document.getElementById("cr");r.innerHTML=COLS.map(c=>"<div class=\\"cd "+(c===col?"ac":"")+"\\" style=\\"background:"+c+"\\" onclick=\\"sC(\'"+c+"\',this)\\"></div>").join("");const inp=document.createElement("input");inp.type="color";inp.value="#ffffff";inp.style.cssText="width:20px;height:20px;border:none;background:none;cursor:pointer;padding:0;border-radius:50%";inp.oninput=()=>{col=inp.value;document.querySelectorAll(".cd").forEach(d=>d.classList.remove("ac"));};r.appendChild(inp);}\nfunction sC(c,el){col=c;document.querySelectorAll(".cd").forEach(d=>d.classList.remove("ac"));el.classList.add("ac");}\nfunction bR(){const el=document.getElementById("ro");const subs=players.filter(p=>!p.onPitch);el.innerHTML=subs.length?subs.map(p=>"<div class=\\"ri\\" draggable=\\"true\\" ondragstart=\\"event.dataTransfer.setData(\'pid\',"+p.id+")\\" ><div class=\\"rn\\" style=\\"background:"+p.color+"\\">"+p.num+"</div><div class=\\"ri2\\"><div class=\\"rna\\">"+p.name+"</div><div class=\\"rpo\\">"+p.pos+"</div></div><button class=\\"ra\\" onclick=\\"aF("+p.id+")\\" >+</button></div>").join(""):"<div style=\\"font-size:.65rem;color:var(--m);text-align:center;padding:.5rem\\">Tous sur le terrain</div>";}\nfunction aF(pid){const p=players.find(pp=>pp.id===pid);if(!p)return;sh();p.x=.4+Math.random()*.2;p.y=.4+Math.random()*.2;p.onPitch=true;bR();rn();uS();}\nfunction uS(){const on=players.filter(p=>p.onPitch);const gk=on.filter(p=>p.pos==="GK").length;const def=on.filter(p=>["LB","CB","RB"].includes(p.pos)).length;const mid=on.filter(p=>["CM","LM","RM","CAM","CDM"].includes(p.pos)).length;const att=on.filter(p=>["LW","RW","ST","CF"].includes(p.pos)).length;document.getElementById("sp").innerHTML=[["Mode",{11:"11v11",8:"8v8",5:"Futsal"}[mode],"var(--bl)"],["Terrain",on.length+"/"+MC[mode],"var(--g)"],["Formation",cf,"var(--bl)"],["GK",gk,"var(--r)"],["Déf",def,"var(--a)"],["Mil",mid,"var(--bl)"],["Att",att,"var(--g)"],["Rempl.",players.filter(p=>!p.onPitch).length,"var(--m)"]].map(([l,v,c])=>"<div class=\\"sr\\"><span class=\\"sl\\">"+l+"</span><span class=\\"sv\\" style=\\"color:"+c+"\\">"+v+"</span></div>").join("");}\nfunction sh(){hist.push({players:players.map(p=>({...p})),arrows:JSON.parse(JSON.stringify(arrows)),zones:JSON.parse(JSON.stringify(zones)),draws:JSON.parse(JSON.stringify(draws))});if(hist.length>30)hist.shift();}\nfunction ud(){if(!hist.length)return;const s=hist.pop();players=s.players;arrows=s.arrows;zones=s.zones;draws=s.draws;sel=null;bR();rn();uS();}\nfunction ca(){sh();arrows=[];zones=[];draws=[];rn();}\nfunction rs(){if(!confirm("Réinitialiser ?"))return;sh();players.forEach(p=>p.onPitch=false);arrows=[];zones=[];draws=[];sel=null;bR();rn();uS();}\nfunction si(){const a=document.createElement("a");a.download="tactique-"+cf+".png";a.href=cv.toDataURL();a.click();}\n' + es + '\n</body>\n</html>';
}


// ═══════════════════════════════════
//  MOBILE NAVIGATION
// ═══════════════════════════════════
function toggleMoreMenu() {
  const mm = document.getElementById('more-menu');
  mm.classList.toggle('open');
}
function closeMoreMenu() {
  document.getElementById('more-menu').classList.remove('open');
}
function updateBottomNav(page) {
  // Highlight bottom nav item
  document.querySelectorAll('.bn-item').forEach(b => b.classList.remove('active'));
  const bn = document.getElementById('bn-' + page);
  if (bn) bn.classList.add('active');
}
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  sb.classList.toggle('open');
  ov.classList.toggle('show');
}

// ═══════════════════════════════════
//  FINANCES
// ═══════════════════════════════════
let currentFinTab = 'overview';

let FIN_TRANSACTIONS = [
  {id:1, type:'income',  cat:'Cotisations', label:'Cotisations joueurs Q1', amount:2400, date:'2025-01-15', icon:'👥', color:'#00E676'},
  {id:2, type:'income',  cat:'Subventions', label:'Subvention mairie',       amount:1500, date:'2025-02-01', icon:'🏛️', color:'#4DABF7'},
  {id:3, type:'expense', cat:'Équipements', label:'Maillots saison 2024-25', amount:1200, date:'2025-01-20', icon:'👕', color:'#FF4757'},
  {id:4, type:'income',  cat:'Sponsoring',  label:'Sponsor FC Delta',         amount:800,  date:'2025-02-10', icon:'🤝', color:'#F0B429'},
  {id:5, type:'expense', cat:'Déplacements',label:'Transport matchs extérieur',amount:650, date:'2025-02-20', icon:'🚌', color:'#FF6B9D'},
  {id:6, type:'income',  cat:'Tournois',    label:'Recettes tournoi mars',    amount:450,  date:'2025-03-15', icon:'🏆', color:'#00E676'},
  {id:7, type:'expense', cat:'Terrain',     label:'Location terrain saison',  amount:1800, date:'2025-01-05', icon:'🏟️', color:'#B197FC'},
  {id:8, type:'income',  cat:'Cotisations', label:'Cotisations joueurs Q2',   amount:2400, date:'2025-04-01', icon:'👥', color:'#00E676'},
  {id:9, type:'expense', cat:'Arbitrage',   label:'Frais arbitrage matchs',   amount:480,  date:'2025-03-01', icon:'🟨', color:'#F0B429'},
  {id:10,type:'expense', cat:'Médical',     label:'Trousse premiers secours', amount:120,  date:'2025-02-15', icon:'🏥', color:'#4DABF7'},
  {id:11,type:'income',  cat:'Dons',        label:'Don parent association',   amount:200,  date:'2025-03-10', icon:'💝', color:'#FF6B9D'},
  {id:12,type:'expense', cat:'Équipements', label:'Cônes, ballons, filets',   amount:320,  date:'2025-03-20', icon:'⚽', color:'#FF4757'},
  {id:13,type:'expense', cat:'Administratif',label:'Licences FFF',            amount:780,  date:'2025-01-10', icon:'📋', color:'#B197FC'},
  {id:14,type:'income',  cat:'Billetterie', label:'Recettes matchs à domicile',amount:450, date:'2025-03-01', icon:'🎟️', color:'#4DABF7'},
];

const FIN_BUDGETS = [
  {cat:'Équipements',  budgeted:1800, spent:1520, color:'#F0B429'},
  {cat:'Déplacements', budgeted:1000, spent:650,  color:'#FF6B9D'},
  {cat:'Terrain',      budgeted:2000, spent:1800, color:'#B197FC'},
  {cat:'Arbitrage',    budgeted:600,  spent:480,  color:'#F0B429'},
  {cat:'Médical',      budgeted:200,  spent:120,  color:'#4DABF7'},
  {cat:'Administratif',budgeted:900,  spent:780,  color:'#00E676'},
  {cat:'Divers',       budgeted:300,  spent:120,  color:'#FF4757'},
];

function switchFinTab(tab) {
  currentFinTab = tab;
  document.querySelectorAll('[data-ftab]').forEach(b => b.classList.toggle('active', b.dataset.ftab === tab));
  renderFinance();
}

function renderFinance() {
  const income   = FIN_TRANSACTIONS.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const expenses = FIN_TRANSACTIONS.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const balance  = income - expenses;
  document.getElementById('fin-balance').textContent  = (balance>0?'+':'') + balance.toLocaleString('fr-FR') + '€';
  document.getElementById('fin-balance').style.color  = balance>=0?'var(--green)':'var(--red)';
  document.getElementById('fin-income').textContent   = income.toLocaleString('fr-FR') + '€';
  document.getElementById('fin-expenses').textContent = expenses.toLocaleString('fr-FR') + '€';
  const budgetTotal = FIN_BUDGETS.reduce((s,b)=>s+b.budgeted,0);
  document.getElementById('fin-budget-pct').textContent = Math.round(expenses/income*100) + '%';

  const c = document.getElementById('fin-content');

  if (currentFinTab === 'overview') {
    c.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">💚 Revenus par catégorie</div></div>
          <div style="padding:.5rem 0">
            ${Object.entries(groupBy(FIN_TRANSACTIONS.filter(t=>t.type==='income'),'cat')).map(([cat,txs])=>{
              const total=txs.reduce((s,t)=>s+t.amount,0);
              const pct=Math.round(total/income*100);
              return `<div class="fin-row">
                <div class="fin-cat-dot" style="background:${txs[0].color}"></div>
                <div class="fin-label">${txs[0].icon} ${cat}</div>
                <div style="flex:1;margin:0 .75rem">
                  <div class="fin-bar"><div class="fin-bar-fill" style="width:${pct}%;background:${txs[0].color}"></div></div>
                </div>
                <div class="fin-amount-cell" style="color:var(--green)">${total.toLocaleString('fr-FR')}€</div>
              </div>`;
            }).join('')}
          </div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">🔴 Dépenses par catégorie</div></div>
          <div style="padding:.5rem 0">
            ${Object.entries(groupBy(FIN_TRANSACTIONS.filter(t=>t.type==='expense'),'cat')).map(([cat,txs])=>{
              const total=txs.reduce((s,t)=>s+t.amount,0);
              const pct=Math.round(total/expenses*100);
              return `<div class="fin-row">
                <div class="fin-cat-dot" style="background:${txs[0].color}"></div>
                <div class="fin-label">${txs[0].icon} ${cat}</div>
                <div style="flex:1;margin:0 .75rem">
                  <div class="fin-bar"><div class="fin-bar-fill" style="width:${pct}%;background:${txs[0].color}"></div></div>
                </div>
                <div class="fin-amount-cell" style="color:var(--red)">${total.toLocaleString('fr-FR')}€</div>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
      <div class="section-block" style="margin-top:1.2rem">
        <div class="section-head">
          <div class="section-head-title">📋 Dernières transactions</div>
          <div class="section-head-action" onclick="openFinModal()">+ Ajouter</div>
        </div>
        ${FIN_TRANSACTIONS.slice(0,8).map(t=>`
          <div class="fin-row">
            <div style="width:32px;height:32px;border-radius:8px;background:${t.color}18;display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0">${t.icon}</div>
            <div class="fin-label">${t.label}<div style="font-size:.65rem;color:var(--muted)">${t.cat} · ${new Date(t.date).toLocaleDateString('fr-FR')}</div></div>
            <span class="fin-type ${t.type==='income'?'fin-income':'fin-expense'}">${t.type==='income'?'Revenu':'Dépense'}</span>
            <div class="fin-amount-cell" style="color:${t.type==='income'?'var(--green)':'var(--red)'}">
              ${t.type==='income'?'+':'-'}${t.amount.toLocaleString('fr-FR')}€
            </div>
          </div>`).join('')}
      </div>`;

  } else if (currentFinTab === 'income') {
    const txs = FIN_TRANSACTIONS.filter(t=>t.type==='income').sort((a,b)=>new Date(b.date)-new Date(a.date));
    c.innerHTML = `<div class="section-block">
      <div class="section-head"><div class="section-head-title">💚 Tous les revenus — ${income.toLocaleString('fr-FR')}€</div><div class="section-head-action" onclick="openFinModal('income')">+ Ajouter</div></div>
      ${txs.map(t=>`<div class="fin-row">
        <div style="width:32px;height:32px;border-radius:8px;background:${t.color}18;display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0">${t.icon}</div>
        <div class="fin-label">${t.label}<div style="font-size:.65rem;color:var(--muted)">${t.cat} · ${new Date(t.date).toLocaleDateString('fr-FR')}</div></div>
        <div class="fin-amount-cell" style="color:var(--green)">+${t.amount.toLocaleString('fr-FR')}€</div>
      </div>`).join('')}
    </div>`;

  } else if (currentFinTab === 'expenses') {
    const txs = FIN_TRANSACTIONS.filter(t=>t.type==='expense').sort((a,b)=>b.amount-a.amount);
    c.innerHTML = `<div class="section-block">
      <div class="section-head"><div class="section-head-title">🔴 Toutes les dépenses — ${expenses.toLocaleString('fr-FR')}€</div><div class="section-head-action" onclick="openFinModal('expense')">+ Ajouter</div></div>
      ${txs.map(t=>`<div class="fin-row">
        <div style="width:32px;height:32px;border-radius:8px;background:${t.color}18;display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0">${t.icon}</div>
        <div class="fin-label">${t.label}<div style="font-size:.65rem;color:var(--muted)">${t.cat} · ${new Date(t.date).toLocaleDateString('fr-FR')}</div></div>
        <div class="fin-amount-cell" style="color:var(--red)">-${t.amount.toLocaleString('fr-FR')}€</div>
      </div>`).join('')}
    </div>`;

  } else if (currentFinTab === 'budget') {
    c.innerHTML = `<div class="section-block">
      <div class="section-head"><div class="section-head-title">📋 Suivi budgétaire par poste</div></div>
      <div style="padding:.5rem 0">
        ${FIN_BUDGETS.map(b=>{
          const pct=Math.round(b.spent/b.budgeted*100);
          const over=b.spent>b.budgeted;
          return `<div style="padding:.75rem 1.1rem;border-bottom:1px solid var(--border)">
            <div style="display:flex;justify-content:space-between;margin-bottom:.4rem;font-size:.82rem">
              <span style="font-weight:600">${b.cat}</span>
              <span style="font-family:'Space Mono',monospace;font-size:.72rem;color:${over?'var(--red)':'var(--muted)'}">
                ${b.spent}€ / ${b.budgeted}€
              </span>
            </div>
            <div class="fin-bar" style="height:8px">
              <div class="fin-bar-fill" style="width:${Math.min(pct,100)}%;background:${over?'var(--red)':pct>80?'var(--accent)':b.color};transition:width .6s"></div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:.25rem;font-size:.65rem;color:var(--muted)">
              <span>${pct}% consommé</span>
              <span style="color:${over?'var(--red)':'var(--green)'}">${over?'Dépassement':'Reste'}: ${Math.abs(b.budgeted-b.spent)}€</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function openFinModal(type) {
  document.getElementById('modal-title').textContent = '💶 NOUVELLE TRANSACTION';
  const cats = ['Cotisations','Subventions','Sponsoring','Tournois','Billetterie','Dons','Équipements','Déplacements','Terrain','Arbitrage','Médical','Administratif','Divers'];
  document.getElementById('modal-body').innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-fin-type">
          <option value="income" ${type==='income'?'selected':''}>💚 Revenu</option>
          <option value="expense" ${type==='expense'?'selected':''}>🔴 Dépense</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Montant (€)</label>
        <input class="form-input" id="f-fin-amount" type="number" min="0" placeholder="0" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Libellé</label>
      <input class="form-input" id="f-fin-label" placeholder="Ex: Cotisations Q2" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Catégorie</label>
        <select class="form-select" id="f-fin-cat">
          ${cats.map(c=>`<option>${c}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Date</label>
        <input class="form-input" id="f-fin-date" type="date" value="${new Date().toISOString().slice(0,10)}" />
      </div>
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitFinModal()">Enregistrer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function submitFinModal() {
  const type   = document.getElementById('f-fin-type')?.value;
  const amount = parseFloat(document.getElementById('f-fin-amount')?.value)||0;
  const label  = document.getElementById('f-fin-label')?.value?.trim();
  const cat    = document.getElementById('f-fin-cat')?.value;
  const date   = document.getElementById('f-fin-date')?.value;
  if (!label || !amount) { showToast('⚠️ Libellé et montant requis'); return; }
  const colors = {income:'#00E676',expense:'#FF4757'};
  FIN_TRANSACTIONS.unshift({id:Date.now(),type,cat,label,amount,date,icon:type==='income'?'💰':'💸',color:colors[type]});
  closeModal();
  renderFinance();
  showToast('Transaction enregistrée ✓');
}

// ═══════════════════════════════════
//  GRAPHIQUES (canvas-based)
// ═══════════════════════════════════
let currentChartTab = 'performance';

function switchChartTab(tab) {
  currentChartTab = tab;
  document.querySelectorAll('[data-ctab]').forEach(b => b.classList.toggle('active', b.dataset.ctab === tab));
  renderCharts();
}

function renderCharts() {
  const c = document.getElementById('charts-content');
  if (!c) return;

  if (currentChartTab === 'performance') {
    c.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">⚽ Buts par match</div></div>
          <div style="padding:.75rem"><canvas id="chart-goals" height="180"></canvas></div>
          <div class="chart-legend">
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--green)"></div>Buts marqués</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--red)"></div>Buts encaissés</div>
          </div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">📊 Résultats saison</div></div>
          <div style="padding:.75rem"><canvas id="chart-results" height="180"></canvas></div>
          <div class="chart-legend">
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--green)"></div>Victoires (4)</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--accent)"></div>Nuls (1)</div>
            <div class="chart-legend-item"><div class="chart-legend-dot" style="background:var(--red)"></div>Défaites (1)</div>
          </div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">⭐ Notes moyennes top 5</div></div>
          <div style="padding:.75rem"><canvas id="chart-ratings" height="180"></canvas></div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">🥇 Classement buteurs</div></div>
          <div style="padding:.75rem"><canvas id="chart-scorers" height="180"></canvas></div>
        </div>
      </div>`;
    setTimeout(() => {
      drawBarChart('chart-goals',
        ['Match 1','Match 2','Match 3','Match 4','Match 5','Match 6'],
        [{label:'Marqués',data:[2,3,2,1,3,1],color:'#00E676'},{label:'Encaissés',data:[0,1,2,2,0,1],color:'#FF4757'}]
      );
      drawDoughnutChart('chart-results',[4,1,1],['#00E676','#F0B429','#FF4757'],['Victoires','Nuls','Défaites']);
      drawHBarChart('chart-ratings',
        PLAYERS.slice(0,5).map(p=>p.name.split(' ')[1]),
        PLAYERS.slice(0,5).map(p=>p.rating),
        '#4DABF7', 10
      );
      drawHBarChart('chart-scorers',
        [...PLAYERS].sort((a,b)=>b.goals-a.goals).slice(0,5).map(p=>p.name.split(' ')[1]),
        [...PLAYERS].sort((a,b)=>b.goals-a.goals).slice(0,5).map(p=>p.goals),
        '#00E676', Math.max(...PLAYERS.map(p=>p.goals))+1
      );
    }, 50);

  } else if (currentChartTab === 'progression') {
    c.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr;gap:1.2rem">
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">📈 Évolution des buts (saison)</div></div>
          <div style="padding:.75rem"><canvas id="chart-goals-prog" height="200"></canvas></div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">📊 Points cumulés</div></div>
          <div style="padding:.75rem"><canvas id="chart-points" height="200"></canvas></div>
        </div>
      </div>`;
    setTimeout(() => {
      drawLineChart('chart-goals-prog',
        ['Jan','Fév','Mar','Avr','Mai','Juin'],
        [{label:'Buts',data:[3,5,8,12,15,18],color:'#00E676'},{label:'Passes',data:[2,4,6,8,10,11],color:'#4DABF7'}]
      );
      drawLineChart('chart-points',
        ['J1','J2','J3','J4','J5','J6'],
        [{label:'Points',data:[3,3,6,9,12,13],color:'#F0B429'}]
      );
    }, 50);

  } else if (currentChartTab === 'attendance') {
    c.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">✅ Taux de présence par session</div></div>
          <div style="padding:.75rem"><canvas id="chart-att-sessions" height="200"></canvas></div>
        </div>
        <div class="section-block">
          <div class="section-head"><div class="section-head-title">👥 Assiduité top 8 joueurs</div></div>
          <div style="padding:.75rem"><canvas id="chart-att-players" height="200"></canvas></div>
        </div>
      </div>`;
    setTimeout(() => {
      const sessionLabels = SESSIONS.map(s => s.label.split(' — ')[0]);
      const sessionPcts = SESSIONS.map(s => {
        const att = ATTENDANCE[s.id];
        const pres = PLAYERS.filter(p => att[p.id]==='present').length;
        return Math.round(pres/PLAYERS.length*100);
      });
      drawBarChart('chart-att-sessions', sessionLabels,
        [{label:'Présence %',data:sessionPcts,color:'#00E676'}], 100
      );
      const topPlayers = PLAYERS.slice(0,8).map(p => {
        let pres=0;
        SESSIONS.forEach(s=>{if(ATTENDANCE[s.id][p.id]==='present')pres++;});
        return {name:p.name.split(' ')[1], pct:Math.round(pres/SESSIONS.length*100)};
      }).sort((a,b)=>b.pct-a.pct);
      drawHBarChart('chart-att-players', topPlayers.map(p=>p.name), topPlayers.map(p=>p.pct), '#00E676', 100);
    }, 50);

  } else if (currentChartTab === 'comparison') {
    c.innerHTML = `
      <div class="section-block">
        <div class="section-head"><div class="section-head-title">⚖️ Comparaison Équipe A vs Équipe B</div></div>
        <div style="padding:.75rem"><canvas id="chart-compare" height="250"></canvas></div>
      </div>`;
    setTimeout(() => {
      const teamA = PLAYERS.filter(p => SUB_TEAMS.find(t=>t.id==='A')?.playerIds.includes(p.id));
      const teamB = PLAYERS.filter(p => SUB_TEAMS.find(t=>t.id==='B')?.playerIds.includes(p.id));
      const avgA = v => teamA.length ? Math.round(teamA.reduce((s,p)=>s+p[v],0)/teamA.length*10)/10 : 0;
      const avgB = v => teamB.length ? Math.round(teamB.reduce((s,p)=>s+p[v],0)/teamB.length*10)/10 : 0;
      drawBarChart('chart-compare',
        ['Buts moy.','Passes moy.','Note moy.','Tacles moy.'],
        [
          {label:'Équipe A',data:[avgA('goals'),avgA('assists'),avgA('rating'),avgA('tackles')],color:'#00E676'},
          {label:'Équipe B',data:[avgB('goals'),avgB('assists'),avgB('rating'),avgB('tackles')],color:'#F0B429'},
        ]
      );
    }, 50);
  }
}

// ─── Fonctions dessin canvas ───
function drawBarChart(id, labels, datasets, maxOverride) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; canvas.width = W;
  const H = canvas.height;
  const pad = {top:20,right:10,bottom:40,left:42};
  const cW = W-pad.left-pad.right, cH = H-pad.top-pad.bottom;
  ctx.clearRect(0,0,W,H);

  const allData = datasets.flatMap(d=>d.data);
  const maxVal = maxOverride || Math.max(...allData)*1.15 || 1;
  const n = labels.length, gW = cW/n, bW = gW*.7/datasets.length;

  // Grid lines
  ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad.top+cH*(1-i/4);
    ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+cW,y);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.3)';ctx.font='10px DM Sans';ctx.textAlign='right';
    ctx.fillText(Math.round(maxVal*i/4),pad.left-5,y+4);
  }

  // Bars
  datasets.forEach((ds,di)=>{
    ds.data.forEach((val,i)=>{
      const x=pad.left+i*gW+(gW-bW*datasets.length)/2+di*bW;
      const bH=val/maxVal*cH;
      const y=pad.top+cH-bH;
      ctx.fillStyle=ds.color;
      roundRect(ctx,x,y,bW-2,bH,3);ctx.fill();
    });
  });

  // X labels
  ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='10px DM Sans';ctx.textAlign='center';
  labels.forEach((l,i)=>ctx.fillText(l.length>7?l.slice(0,7):l,pad.left+i*gW+gW/2,H-8));
}

function drawHBarChart(id, labels, data, color, maxOverride) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; canvas.width = W;
  const H = canvas.height;
  ctx.clearRect(0,0,W,H);
  const maxVal = maxOverride || Math.max(...data)*1.15 || 1;
  const rowH = H/labels.length;
  const barH = rowH*.5;
  const labelW = 70;
  const barAreaW = W-labelW-50;

  labels.forEach((lbl,i)=>{
    const y = i*rowH+rowH/2-barH/2;
    ctx.fillStyle='rgba(255,255,255,.08)';
    ctx.fillRect(labelW,y,barAreaW,barH);
    ctx.fillStyle=color;
    roundRect(ctx,labelW,y,data[i]/maxVal*barAreaW,barH,3);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='11px DM Sans';ctx.textAlign='right';
    ctx.fillText(lbl,labelW-6,i*rowH+rowH/2+4);
    ctx.textAlign='left';ctx.fillStyle='rgba(255,255,255,.9)';ctx.font='bold 11px Space Mono';
    ctx.fillText(data[i],labelW+data[i]/maxVal*barAreaW+6,i*rowH+rowH/2+4);
  });
}

function drawLineChart(id, labels, datasets) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; canvas.width = W;
  const H = canvas.height;
  const pad = {top:20,right:10,bottom:35,left:38};
  const cW=W-pad.left-pad.right, cH=H-pad.top-pad.bottom;
  ctx.clearRect(0,0,W,H);

  const allData = datasets.flatMap(d=>d.data);
  const maxVal = Math.max(...allData)*1.2||1;
  const n = labels.length;

  // Grid
  ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad.top+cH*(1-i/4);
    ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+cW,y);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.3)';ctx.font='10px DM Sans';ctx.textAlign='right';
    ctx.fillText(Math.round(maxVal*i/4),pad.left-4,y+4);
  }

  // Lines
  datasets.forEach(ds=>{
    const pts=ds.data.map((v,i)=>({x:pad.left+i/(n-1)*cW,y:pad.top+cH*(1-v/maxVal)}));
    // Fill
    ctx.beginPath();ctx.moveTo(pts[0].x,pad.top+cH);
    pts.forEach(p=>ctx.lineTo(p.x,p.y));
    ctx.lineTo(pts[pts.length-1].x,pad.top+cH);ctx.closePath();
    ctx.fillStyle=ds.color+'22';ctx.fill();
    // Line
    ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);
    for(let i=1;i<pts.length;i++){
      const mx=(pts[i-1].x+pts[i].x)/2;
      ctx.bezierCurveTo(mx,pts[i-1].y,mx,pts[i].y,pts[i].x,pts[i].y);
    }
    ctx.strokeStyle=ds.color;ctx.lineWidth=2.5;ctx.lineCap='round';ctx.stroke();
    // Dots
    pts.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);
      ctx.fillStyle=ds.color;ctx.fill();
      ctx.strokeStyle=ds.color+'44';ctx.lineWidth=3;ctx.stroke();
    });
  });

  // Labels
  ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='10px DM Sans';ctx.textAlign='center';
  labels.forEach((l,i)=>ctx.fillText(l,pad.left+i/(n-1)*cW,H-8));
}

function drawDoughnutChart(id, data, colors, labels) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth; canvas.width = W;
  const H = canvas.height;
  ctx.clearRect(0,0,W,H);
  const total = data.reduce((s,v)=>s+v,0);
  const cx=W/2,cy=H/2,r=Math.min(W,H)/2-20,ir=r*.55;
  let angle=-Math.PI/2;
  data.forEach((v,i)=>{
    const sweep=v/total*Math.PI*2;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,angle,angle+sweep);ctx.closePath();
    ctx.fillStyle=colors[i];ctx.fill();
    angle+=sweep;
  });
  ctx.beginPath();ctx.arc(cx,cy,ir,0,Math.PI*2);ctx.fillStyle='var(--card)';ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.font='bold 18px Bebas Neue';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(total,cx,cy);
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h);
  ctx.lineTo(x,y+h);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}

// ═══════════════════════════════════
//  NOTIFICATIONS & RAPPELS
// ═══════════════════════════════════
let NOTIFICATIONS = [
  {id:1, type:'match',    icon:'⚽', title:'Match demain — FC Olympique', sub:'Domicile · 15h00 · Stade Municipal', time:'Il y a 2h',   read:false, color:'#00E676'},
  {id:2, type:'injury',   icon:'🩹', title:'Sami Rousseau de retour', sub:'Durée de blessure écoulée — vérifier disponibilité', time:'Il y a 5h',   read:false, color:'#F0B429'},
  {id:3, type:'finance',  icon:'💶', title:'Paiement en attente', sub:'Location terrain — 1 800€ dû avant le 31 mars', time:'Hier',       read:false, color:'#FF4757'},
  {id:4, type:'training', icon:'🏋️', title:'Entraînement ce soir', sub:'19h00 — Stade Municipal · 12 joueurs convoqués', time:'Hier',       read:true,  color:'#4DABF7'},
  {id:5, type:'player',   icon:'👥', title:'5 joueurs absents cette semaine', sub:'Assiduité en baisse — voir section présences', time:'Lun',        read:true,  color:'#B197FC'},
  {id:6, type:'project',  icon:'🗺️', title:'Tournoi de Printemps — J-20', sub:'3 tâches restantes sur la checklist', time:'Lun',        read:true,  color:'#F0B429'},
];

let REMINDERS = [
  {id:1, title:'Convoquer joueurs avant match', type:'match',    active:true,  timing:'24h avant match', icon:'📋'},
  {id:2, title:'Rappel cotisations impayées',   type:'finance',  active:true,  timing:'1er du mois',     icon:'💶'},
  {id:3, title:'Bilan hebdomadaire présences',  type:'training', active:false, timing:'Chaque vendredi', icon:'✅'},
  {id:4, title:'Retour blessés à vérifier',     type:'injury',   active:true,  timing:'Date de retour',  icon:'🩹'},
];

function renderNotifications() {
  const unread = NOTIFICATIONS.filter(n=>!n.read).length;
  document.getElementById('notif-unread-count').textContent = unread;
  document.getElementById('notif-count-lbl').textContent = NOTIFICATIONS.length;
  document.getElementById('notif-reminder-count').textContent = REMINDERS.filter(r=>r.active).length;

  // Update badge in sidebar and bottom nav
  const badge = document.getElementById('notif-badge');
  const bnDot = document.getElementById('bn-notif-dot');
  if (badge) badge.textContent = unread;
  if (bnDot) bnDot.classList.toggle('show', unread > 0);

  // Notifications list
  document.getElementById('notif-list').innerHTML = NOTIFICATIONS.map(n=>`
    <div class="notif-item ${n.read?'':'unread'}" onclick="markNotifRead(${n.id})">
      <div class="notif-dot" style="background:${n.color}18">${n.icon}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-sub">${n.sub}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.3rem;flex-shrink:0">
        <div class="notif-time">${n.time}</div>
        ${!n.read?`<div style="width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0"></div>`:''}
      </div>
    </div>`).join('');

  // Smart alerts
  generateSmartAlerts();

  // Reminders
  document.getElementById('reminders-list').innerHTML = REMINDERS.map(r=>`
    <div class="notif-item">
      <div class="notif-dot" style="background:rgba(77,171,247,.12)">${r.icon}</div>
      <div class="notif-body">
        <div class="notif-title" style="font-size:.8rem">${r.title}</div>
        <div class="notif-sub">${r.timing}</div>
      </div>
      <div style="display:flex;align-items:center;gap:.5rem;flex-shrink:0">
        <div class="presence-toggle ${r.active?'present':'absent'}" style="width:28px;height:16px;border-radius:8px"
          onclick="toggleReminder(${r.id})"></div>
      </div>
    </div>`).join('');
}

function generateSmartAlerts() {
  const alerts = [];
  // Match prochains
  const nextMatch = EVENTS.find(e=>e.type==='match'&&new Date(e.date)>=new Date());
  if (nextMatch) alerts.push({icon:'⚽',title:'Match dans '+ Math.ceil((new Date(nextMatch.date)-new Date())/(86400000))+'j',sub:nextMatch.title,color:'#00E676'});
  // Blessés
  const injured = INJURIES.filter(i=>i.active);
  if (injured.length) alerts.push({icon:'🩹',title:`${injured.length} joueur${injured.length>1?'s':''} indisponible${injured.length>1?'s':''}`,sub:'Vérifier avant convocation',color:'#FF4757'});
  // Assiduité faible
  const lowAtt = PLAYERS.filter(p=>{
    let pres=0; SESSIONS.forEach(s=>{if(ATTENDANCE[s.id][p.id]==='present')pres++;});
    return pres/SESSIONS.length < 0.6;
  });
  if (lowAtt.length) alerts.push({icon:'⚠️',title:`Assiduité faible : ${lowAtt.length} joueur${lowAtt.length>1?'s':''}`,sub:'En dessous de 60% de présence',color:'#F0B429'});
  // Finance
  const finBal = FIN_TRANSACTIONS.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0) - FIN_TRANSACTIONS.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  if (finBal < 500) alerts.push({icon:'💶',title:'Solde bas : '+finBal+'€',sub:'Vérifier la trésorerie',color:'#FF4757'});

  const el = document.getElementById('smart-alerts-list');
  if (!el) return;
  el.innerHTML = alerts.length ? alerts.map(a=>`
    <div class="notif-item">
      <div class="notif-dot" style="background:${a.color}18">${a.icon}</div>
      <div class="notif-body">
        <div class="notif-title" style="font-size:.8rem">${a.title}</div>
        <div class="notif-sub">${a.sub}</div>
      </div>
    </div>`).join('') : `<div style="text-align:center;padding:1.5rem;color:var(--muted);font-size:.82rem">✅ Aucune alerte en ce moment</div>`;
}

function markNotifRead(id) {
  const n = NOTIFICATIONS.find(nn=>nn.id===id);
  if (n) n.read = true;
  renderNotifications();
}
function markAllNotifsRead() {
  NOTIFICATIONS.forEach(n=>n.read=true);
  renderNotifications();
  showToast('Toutes les notifications marquées comme lues ✓');
}
function toggleReminder(id) {
  const r = REMINDERS.find(rr=>rr.id===id);
  if (r) r.active = !r.active;
  renderNotifications();
}
function openAddNotifModal() {
  document.getElementById('modal-title').textContent = '🔔 NOUVEAU RAPPEL';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label class="form-label">Titre du rappel</label>
      <input class="form-input" id="f-rem-title" placeholder="Ex: Envoyer convocations" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-rem-type">
          <option value="match">⚽ Match</option>
          <option value="training">🏋️ Entraînement</option>
          <option value="finance">💶 Finance</option>
          <option value="injury">🩹 Blessure</option>
          <option value="other">📌 Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Déclenchement</label>
        <input class="form-input" id="f-rem-timing" placeholder="Ex: 24h avant match" />
      </div>
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
    <button class="btn btn-green" onclick="submitReminderModal()">Créer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}
function submitReminderModal() {
  const title  = document.getElementById('f-rem-title')?.value?.trim();
  const type   = document.getElementById('f-rem-type')?.value;
  const timing = document.getElementById('f-rem-timing')?.value || 'Manuel';
  if (!title) { showToast('⚠️ Titre requis'); return; }
  const icons = {match:'⚽',training:'🏋️',finance:'💶',injury:'🩹',other:'📌'};
  REMINDERS.push({id:Date.now(),title,type,timing,active:true,icon:icons[type]||'📌'});
  closeModal();
  renderNotifications();
  showToast('Rappel créé ✓');
}

// ─── Export PDF (simulation) ───
function exportPage() {
  if (!isPro()) { showProGate('export'); return; }
  showPDFExportModal();
}
function showPDFExportModal() {
  document.getElementById('modal-title').textContent = '📄 EXPORT PDF';
  document.getElementById('modal-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1rem">
      ${[
        ['📋 Feuille de match', 'convocation'],
        ['👥 Liste effectif', 'roster'],
        ['📊 Rapport stats', 'stats'],
        ['💶 Bilan financier', 'finance'],
        ['✅ Feuille présences', 'attendance'],
        ['🗺️ Fiche projet', 'project'],
      ].map(([l,v])=>`
        <div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;transition:all .15s;text-align:center"
          onclick="generatePDF('${v}')" onmouseover="this.style.borderColor='var(--green)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-size:1.4rem;margin-bottom:.3rem">${l.split(' ')[0]}</div>
          <div style="font-size:.78rem;font-weight:600">${l.slice(l.indexOf(' ')+1)}</div>
        </div>`).join('')}
    </div>
    <div style="font-size:.75rem;color:var(--muted);text-align:center">Cliquez sur le document à générer</div>`;
  document.querySelector('.modal-footer').innerHTML = `<button class="btn btn-ghost" onclick="closeModal()">Fermer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}
function generatePDF(type) {
  closeModal();
  showToast('📄 Génération du PDF en cours…');
  setTimeout(() => {
    const titles = {convocation:'Feuille de match',roster:'Liste effectif',stats:'Rapport statistiques',finance:'Bilan financier',attendance:'Feuille de présences',project:'Fiche projet'};
    // Create printable HTML
    const w = window.open('','_blank');
    w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${titles[type]}</title>
    <style>body{font-family:Arial,sans-serif;color:#111;padding:2rem}h1{font-size:1.8rem;margin-bottom:.5rem}h2{font-size:1.1rem;color:#444;margin:1.5rem 0 .5rem}table{width:100%;border-collapse:collapse;margin-top:.5rem}th{background:#1a1a1a;color:white;padding:.5rem .75rem;text-align:left;font-size:.8rem}td{padding:.45rem .75rem;border-bottom:1px solid #eee;font-size:.85rem}tr:nth-child(even)td{background:#f9f9f9}.header{display:flex;justify-content:space-between;border-bottom:2px solid #1a1a1a;padding-bottom:1rem;margin-bottom:1.5rem}.badge{display:inline-block;padding:.2rem .5rem;border-radius:4px;font-size:.7rem;font-weight:700}</style></head><body>
    <div class="header"><div><h1>${TEAM.name} — ${titles[type]}</h1><p style="color:#666;font-size:.85rem">${TEAM.season} · ${TEAM.league} · ${new Date().toLocaleDateString('fr-FR')}</p></div></div>
    ${getPDFContent(type)}
    <div style="margin-top:2rem;padding-top:1rem;border-top:1px solid #eee;font-size:.75rem;color:#999;text-align:center">Généré par ManageMyTeam · ${new Date().toLocaleDateString('fr-FR')}</div>
    </body></html>`);
    w.document.close();
    w.focus();
    setTimeout(()=>w.print(), 300);
    showToast('PDF prêt ✓');
  }, 500);
}
function getPDFContent(type) {
  if (type === 'convocation') {
    const convoked = PLAYERS.filter(p=>CONVOCATION_LIST.has(p.id));
    const nextMatch = EVENTS.find(e=>e.type==='match'&&new Date(e.date)>=new Date());
    return `<h2>⚽ ${nextMatch?nextMatch.title:'Prochain match'}</h2>
    <p><strong>Date :</strong> ${nextMatch?new Date(nextMatch.date).toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'}):'—'} · <strong>Lieu :</strong> ${nextMatch?.location||'—'}</p>
    <table><thead><tr><th>N°</th><th>Joueur</th><th>Poste</th><th>Signature</th></tr></thead><tbody>
    ${convoked.length?convoked.map(p=>`<tr><td>${p.num}</td><td>${p.name}</td><td>${p.pos}</td><td style="width:120px"></td></tr>`).join(''):'<tr><td colspan="4" style="text-align:center;color:#999">Aucun joueur convoqué — générer depuis la section Présences</td></tr>'}
    </tbody></table>`;
  } else if (type === 'roster') {
    return `<h2>👥 Effectif — ${PLAYERS.length} joueurs</h2>
    <table><thead><tr><th>N°</th><th>Joueur</th><th>Poste</th><th>Âge</th><th>Buts</th><th>Passes</th><th>Note</th></tr></thead><tbody>
    ${PLAYERS.map(p=>`<tr><td>${p.num}</td><td>${p.name}</td><td>${p.pos}</td><td>${p.age} ans</td><td>${p.goals}</td><td>${p.assists}</td><td>${p.rating.toFixed(1)}</td></tr>`).join('')}
    </tbody></table>`;
  } else if (type === 'stats') {
    const sorted = [...PLAYERS].sort((a,b)=>b.goals-a.goals);
    return `<h2>📊 Classement des buteurs</h2>
    <table><thead><tr><th>#</th><th>Joueur</th><th>Poste</th><th>Buts</th><th>Passes</th><th>Note</th></tr></thead><tbody>
    ${sorted.slice(0,10).map((p,i)=>`<tr><td>${i+1}</td><td>${p.name}</td><td>${p.pos}</td><td><strong>${p.goals}</strong></td><td>${p.assists}</td><td>${p.rating.toFixed(1)}</td></tr>`).join('')}
    </tbody></table>`;
  } else if (type === 'finance') {
    const income = FIN_TRANSACTIONS.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
    const expense = FIN_TRANSACTIONS.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    return `<h2>💶 Bilan financier</h2>
    <p><strong>Revenus :</strong> ${income.toLocaleString('fr-FR')}€ &nbsp;·&nbsp; <strong>Dépenses :</strong> ${expense.toLocaleString('fr-FR')}€ &nbsp;·&nbsp; <strong>Solde :</strong> ${(income-expense).toLocaleString('fr-FR')}€</p>
    <table><thead><tr><th>Date</th><th>Libellé</th><th>Catégorie</th><th>Type</th><th>Montant</th></tr></thead><tbody>
    ${FIN_TRANSACTIONS.map(t=>`<tr><td>${new Date(t.date).toLocaleDateString('fr-FR')}</td><td>${t.label}</td><td>${t.cat}</td><td>${t.type==='income'?'Revenu':'Dépense'}</td><td style="color:${t.type==='income'?'green':'red'};font-weight:700">${t.type==='income'?'+':'-'}${t.amount}€</td></tr>`).join('')}
    </tbody></table>`;
  } else if (type === 'attendance') {
    return `<h2>✅ Feuille de présences</h2>
    <table><thead><tr><th>Joueur</th><th>Poste</th>${SESSIONS.map(s=>`<th style="font-size:.65rem">${s.label.split(' ')[0]}</th>`).join('')}<th>Taux</th></tr></thead><tbody>
    ${PLAYERS.slice(0,13).map(p=>{
      let pres=0;SESSIONS.forEach(s=>{if(ATTENDANCE[s.id][p.id]==='present')pres++;});
      return `<tr><td>${p.name}</td><td>${p.pos}</td>${SESSIONS.map(s=>{const st=ATTENDANCE[s.id][p.id];return `<td style="text-align:center">${st==='present'?'✓':st==='late'?'R':'✗'}</td>`;}).join('')}<td><strong>${Math.round(pres/SESSIONS.length*100)}%</strong></td></tr>`;
    }).join('')}
    </tbody></table>`;
  }
  return '<p>Contenu en cours de génération…</p>';
}

// ═══════════════════════════════════
//  SAUVEGARDE LOCALE (localStorage)
//  Compatible file:// et http://
// ═══════════════════════════════════
const STORAGE_KEY = 'mmt_v1';
const STORAGE_VERSION = 1;

// Vérifie si localStorage est disponible (bloqué sur file:// dans certains navigateurs)
function storageAvailable() {
  try {
    const t = '__mmt_test__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch(e) { return false; }
}

const HAS_STORAGE = storageAvailable();

function saveAll() {
  if (!HAS_STORAGE) return;
  try {
    const data = {
      version: STORAGE_VERSION, savedAt: new Date().toISOString(),
      PLAYERS, TEAM, SEASONS, SUB_TEAMS, CLUB, STAFF,
      CLUB_CATEGORIES, NEWS, INJURIES, PROJECTS,
      NOTIFICATIONS, REMINDERS, FIN_TRANSACTIONS, FIN_BUDGETS,
      EVENTS, SESSIONS, ATTENDANCE, currentPlan
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateSaveIndicator(true);
  } catch(e) {
    if (e.name === 'QuotaExceededError') {
      try {
        const data = {
          version: STORAGE_VERSION, savedAt: new Date().toISOString(), noPhotos: true,
          PLAYERS: PLAYERS.map(p=>({...p,photoUrl:null})),
          STAFF: STAFF.map(s=>({...s,photoUrl:null})),
          TEAM: {...TEAM,logoUrl:null}, CLUB: {...CLUB,logoUrl:null},
          SEASONS, SUB_TEAMS, CLUB_CATEGORIES, NEWS, INJURIES, PROJECTS,
          NOTIFICATIONS, REMINDERS, FIN_TRANSACTIONS, FIN_BUDGETS,
          EVENTS, SESSIONS, ATTENDANCE, currentPlan
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        updateSaveIndicator(true, true);
      } catch(e2) {}
    }
  }
}

function loadAll() {
  if (!HAS_STORAGE) return false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || data.version !== STORAGE_VERSION) return false;
    if (data.PLAYERS)         { PLAYERS.length=0; data.PLAYERS.forEach(p=>PLAYERS.push(p)); }
    if (data.TEAM)            Object.assign(TEAM, data.TEAM);
    if (data.SEASONS)         { SEASONS.length=0; data.SEASONS.forEach(s=>SEASONS.push(s)); }
    if (data.SUB_TEAMS)       { SUB_TEAMS.length=0; data.SUB_TEAMS.forEach(t=>SUB_TEAMS.push(t)); }
    if (data.CLUB)            Object.assign(CLUB, data.CLUB);
    if (data.STAFF)           { STAFF.length=0; data.STAFF.forEach(s=>STAFF.push(s)); }
    if (data.CLUB_CATEGORIES) { CLUB_CATEGORIES.length=0; data.CLUB_CATEGORIES.forEach(c=>CLUB_CATEGORIES.push(c)); }
    if (data.NEWS)            { NEWS.length=0; data.NEWS.forEach(n=>NEWS.push(n)); }
    if (data.INJURIES)        { INJURIES.length=0; data.INJURIES.forEach(i=>INJURIES.push(i)); }
    if (data.PROJECTS)        { PROJECTS.length=0; data.PROJECTS.forEach(p=>PROJECTS.push(p)); }
    if (data.NOTIFICATIONS)   { NOTIFICATIONS.length=0; data.NOTIFICATIONS.forEach(n=>NOTIFICATIONS.push(n)); }
    if (data.REMINDERS)       { REMINDERS.length=0; data.REMINDERS.forEach(r=>REMINDERS.push(r)); }
    if (data.FIN_TRANSACTIONS){ FIN_TRANSACTIONS.length=0; data.FIN_TRANSACTIONS.forEach(t=>FIN_TRANSACTIONS.push(t)); }
    if (data.FIN_BUDGETS)     { FIN_BUDGETS.length=0; data.FIN_BUDGETS.forEach(b=>FIN_BUDGETS.push(b)); }
    if (data.EVENTS)          { EVENTS.length=0; data.EVENTS.forEach(e=>EVENTS.push(e)); }
    if (data.SESSIONS)        { SESSIONS.length=0; data.SESSIONS.forEach(s=>SESSIONS.push(s)); }
    if (data.ATTENDANCE) {
      Object.keys(ATTENDANCE).forEach(k=>delete ATTENDANCE[k]);
      Object.entries(data.ATTENDANCE).forEach(([k,v])=>ATTENDANCE[k]=v);
    }
    if (data.currentPlan) currentPlan = data.currentPlan;
    return { loaded: true, savedAt: data.savedAt, noPhotos: !!data.noPhotos };
  } catch(e) { return false; }
}

function clearAllData() {
  if (!confirm('⚠️ Effacer toutes les données sauvegardées ?\n\nL\'application rechargera avec les données de démonstration.')) return;
  try { if (HAS_STORAGE) localStorage.removeItem(STORAGE_KEY); } catch(e) {}
  showToast('Données effacées — rechargement…');
  setTimeout(() => location.reload(), 800);
}

function resetToDemoData() {
  if (!confirm('🔄 Réinitialiser avec les données de démonstration ?')) return;
  try { if (HAS_STORAGE) localStorage.removeItem(STORAGE_KEY); } catch(e) {}
  showToast('Réinitialisation — rechargement…');
  setTimeout(() => location.reload(), 800);
}

function updateSaveIndicator(saved, noPhotos) {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  if (saved) {
    el.innerHTML = '<span style="color:var(--green);font-size:.65rem">✓ Sauvegardé' + (noPhotos?' (sans photos)':'') + '</span>';
    setTimeout(() => {
      if (el) el.innerHTML = '<span style="color:var(--muted2);font-size:.65rem">💾 Auto-save</span>';
    }, 2500);
  }
}

let _saveTimeout = null;
function scheduleSave() {
  if (!HAS_STORAGE) return;
  clearTimeout(_saveTimeout);
  _saveTimeout = setTimeout(saveAll, 800);
}

function exportDataJSON() {
  try {
    const data = HAS_STORAGE ? (localStorage.getItem(STORAGE_KEY) || '{}') : '{}';
    const blob = new Blob([data], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'manage-my-team-backup-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('📦 Sauvegarde exportée ✓');
  } catch(e) { showToast('⚠️ Export échoué'); }
}

function importDataJSON() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.version) { showToast('⚠️ Fichier invalide'); return; }
        if (!confirm('Importer cette sauvegarde ? Les données actuelles seront remplacées.')) return;
        if (HAS_STORAGE) localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        showToast('✅ Import réussi — rechargement…');
        setTimeout(() => location.reload(), 800);
      } catch(err) { showToast('⚠️ Fichier JSON invalide'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function getStorageSize() {
  try {
    if (!HAS_STORAGE) return 'Non disponible';
    const raw = localStorage.getItem(STORAGE_KEY) || '';
    return Math.round(raw.length / 1024) + ' Ko';
  } catch(e) { return '—'; }
}

function openDataModal() {
  const size = getStorageSize();
  const savedAt = (() => {
    try {
      const raw = HAS_STORAGE ? localStorage.getItem(STORAGE_KEY) : null;
      return raw ? new Date(JSON.parse(raw).savedAt).toLocaleString('fr-FR') : 'Jamais';
    } catch(e) { return 'Jamais'; }
  })();

  document.getElementById('modal-title').textContent = '💾 GESTION DES DONNÉES';
  document.getElementById('modal-body').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:.85rem">
      <div style="background:${HAS_STORAGE?'rgba(0,230,118,.06)':'rgba(240,180,41,.06)'};border:1px solid ${HAS_STORAGE?'rgba(0,230,118,.15)':'rgba(240,180,41,.2)'};border-radius:10px;padding:1rem;display:flex;align-items:center;gap:.75rem">
        <div style="font-size:1.8rem">${HAS_STORAGE?'💾':'⚠️'}</div>
        <div>
          <div style="font-weight:700;font-size:.88rem;color:${HAS_STORAGE?'var(--green)':'var(--accent)'}">
            ${HAS_STORAGE ? 'Sauvegarde automatique activée' : 'Sauvegarde locale non disponible'}
          </div>
          <div style="font-size:.75rem;color:var(--muted);margin-top:.15rem">
            ${HAS_STORAGE ? 'Dernière sauvegarde : ' + savedAt : 'Ouvrez le fichier via un serveur local pour activer la sauvegarde'}
          </div>
          <div style="font-size:.72rem;color:var(--muted2)">Espace : ${size}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem">
        <button onclick="saveAll();showToast('💾 Sauvegardé ✓')" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span>💾</span> Sauvegarder maintenant
        </button>
        <button onclick="exportDataJSON()" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span>📦</span> Exporter (.json)
        </button>
        <button onclick="importDataJSON()" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span>📂</span> Importer une sauvegarde
        </button>
        <button onclick="resetToDemoData()" style="display:flex;align-items:center;gap:.5rem;background:rgba(240,180,41,.06);border:1px solid rgba(240,180,41,.2);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--accent);font-size:.82rem;font-weight:600">
          <span>🔄</span> Réinitialiser démo
        </button>
        <button onclick="clearAllData()" style="display:flex;align-items:center;gap:.5rem;background:rgba(255,71,87,.06);border:1px solid rgba(255,71,87,.2);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--red);font-size:.82rem;font-weight:600;grid-column:span 2">
          <span>🗑️</span> Effacer toutes les données
        </button>
      </div>
      ${!HAS_STORAGE ? `<div style="background:rgba(77,171,247,.06);border:1px solid rgba(77,171,247,.15);border-radius:8px;padding:.75rem;font-size:.75rem;color:var(--muted);line-height:1.7">
        <strong style="color:var(--blue)">💡 Activer la sauvegarde</strong><br>
        Servez le fichier via un serveur local : dans le dossier du fichier, ouvrez un terminal et tapez :<br>
        <code style="background:var(--card);padding:.15rem .35rem;border-radius:4px;color:var(--green)">npx serve .</code><br>
        Puis ouvrez <strong>http://localhost:3000</strong> dans Edge.
      </div>` : ''}
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `<button class="btn btn-ghost" onclick="closeModal()">Fermer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

// ═══════════════════════════════════
//  INIT
// ═══════════════════════════════════
function openDataModal() {
  const size = getStorageSize();
  const raw = localStorage.getItem(STORAGE_KEY);
  const savedAt = raw ? new Date(JSON.parse(raw).savedAt).toLocaleString('fr-FR') : 'Jamais';
  document.getElementById('modal-title').textContent = '💾 GESTION DES DONNÉES';
  document.getElementById('modal-body').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:.85rem">
      <div style="background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.15);border-radius:10px;padding:1rem;display:flex;align-items:center;gap:.75rem">
        <div style="font-size:1.8rem">💾</div>
        <div>
          <div style="font-weight:700;font-size:.88rem;color:var(--green)">Sauvegarde automatique activée</div>
          <div style="font-size:.75rem;color:var(--muted);margin-top:.15rem">Dernière sauvegarde : ${savedAt}</div>
          <div style="font-size:.72rem;color:var(--muted2)">Espace utilisé : ${size} / ~5 Mo disponibles</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem">
        <button onclick="saveAll();showToast('💾 Sauvegardé manuellement ✓')" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span style="font-size:1.1rem">💾</span> Sauvegarder maintenant
        </button>
        <button onclick="exportDataJSON()" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span style="font-size:1.1rem">📦</span> Exporter (.json)
        </button>
        <button onclick="importDataJSON()" style="display:flex;align-items:center;gap:.5rem;background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--text);font-size:.82rem;font-weight:600">
          <span style="font-size:1.1rem">📂</span> Importer une sauvegarde
        </button>
        <button onclick="clearAllData()" style="display:flex;align-items:center;gap:.5rem;background:rgba(255,71,87,.06);border:1px solid rgba(255,71,87,.2);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--red);font-size:.82rem;font-weight:600">
          <span style="font-size:1.1rem">🗑️</span> Effacer tout
        </button>
        <button onclick="resetToDemoData()" style="display:flex;align-items:center;gap:.5rem;background:rgba(240,180,41,.06);border:1px solid rgba(240,180,41,.2);border-radius:8px;padding:.75rem;cursor:pointer;color:var(--accent);font-size:.82rem;font-weight:600">
          <span style="font-size:1.1rem">🔄</span> Réinitialiser démo
        </button>
      </div>
      <div style="background:rgba(77,171,247,.06);border:1px solid rgba(77,171,247,.15);border-radius:8px;padding:.75rem;font-size:.75rem;color:var(--muted);line-height:1.7">
        <strong style="color:var(--blue)">ℹ️ Comment ça fonctionne</strong><br>
        Vos données sont sauvegardées automatiquement après chaque modification (joueur, match, présence…) et persistent entre les sessions.<br>
        <strong>Exportez régulièrement</strong> un fichier .json pour sécuriser vos données.
      </div>
    </div>`;
  document.querySelector('.modal-footer').innerHTML = `<button class="btn btn-ghost" onclick="closeModal()">Fermer</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function saveAll() {
  try {
    const data = { version: STORAGE_VERSION, savedAt: new Date().toISOString() };
    data.PLAYERS         = PLAYERS;
    data.TEAM            = TEAM;
    data.SEASONS         = SEASONS;
    data.SUB_TEAMS       = SUB_TEAMS;
    data.CLUB            = CLUB;
    data.STAFF           = STAFF;
    data.CLUB_CATEGORIES = CLUB_CATEGORIES;
    data.NEWS            = NEWS;
    data.INJURIES        = INJURIES;
    data.PROJECTS        = PROJECTS;
    data.NOTIFICATIONS   = NOTIFICATIONS;
    data.REMINDERS       = REMINDERS;
    data.FIN_TRANSACTIONS= FIN_TRANSACTIONS;
    data.FIN_BUDGETS     = FIN_BUDGETS;
    data.EVENTS          = EVENTS;
    data.SESSIONS        = SESSIONS;
    data.ATTENDANCE      = ATTENDANCE;
    data.currentPlan     = currentPlan;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateSaveIndicator(true);
  } catch(e) {
    console.warn('Save failed:', e.message);
    // Si quota dépassé (photos base64 trop lourdes), sauvegarder sans photos
    if (e.name === 'QuotaExceededError') {
      try {
        const data = { version: STORAGE_VERSION, savedAt: new Date().toISOString(), noPhotos: true };
        data.PLAYERS = PLAYERS.map(p=>({...p, photoUrl:null}));
        data.STAFF   = STAFF.map(s=>({...s, photoUrl:null}));
        data.TEAM    = {...TEAM, logoUrl:null};
        data.CLUB    = {...CLUB, logoUrl:null};
        data.SEASONS = SEASONS; data.SUB_TEAMS = SUB_TEAMS;
        data.CLUB_CATEGORIES = CLUB_CATEGORIES; data.NEWS = NEWS;
        data.INJURIES = INJURIES; data.PROJECTS = PROJECTS;
        data.NOTIFICATIONS = NOTIFICATIONS; data.REMINDERS = REMINDERS;
        data.FIN_TRANSACTIONS = FIN_TRANSACTIONS; data.FIN_BUDGETS = FIN_BUDGETS;
        data.EVENTS = EVENTS; data.SESSIONS = SESSIONS;
        data.ATTENDANCE = ATTENDANCE; data.currentPlan = currentPlan;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        updateSaveIndicator(true, true);
      } catch(e2) { console.warn('Save without photos also failed'); }
    }
  }
}

// ─── Charger ───
function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || data.version !== STORAGE_VERSION) return false;

    // Restore arrays (in-place to preserve references)
    if (data.PLAYERS)         { PLAYERS.length=0; data.PLAYERS.forEach(p=>PLAYERS.push(p)); }
    if (data.TEAM)            Object.assign(TEAM, data.TEAM);
    if (data.SEASONS)         { SEASONS.length=0; data.SEASONS.forEach(s=>SEASONS.push(s)); }
    if (data.SUB_TEAMS)       { SUB_TEAMS.length=0; data.SUB_TEAMS.forEach(t=>SUB_TEAMS.push(t)); }
    if (data.CLUB)            Object.assign(CLUB, data.CLUB);
    if (data.STAFF)           { STAFF.length=0; data.STAFF.forEach(s=>STAFF.push(s)); }
    if (data.CLUB_CATEGORIES) { CLUB_CATEGORIES.length=0; data.CLUB_CATEGORIES.forEach(c=>CLUB_CATEGORIES.push(c)); }
    if (data.NEWS)            { NEWS.length=0; data.NEWS.forEach(n=>NEWS.push(n)); }
    if (data.INJURIES)        { INJURIES.length=0; data.INJURIES.forEach(i=>INJURIES.push(i)); }
    if (data.PROJECTS)        { PROJECTS.length=0; data.PROJECTS.forEach(p=>PROJECTS.push(p)); }
    if (data.NOTIFICATIONS)   { NOTIFICATIONS.length=0; data.NOTIFICATIONS.forEach(n=>NOTIFICATIONS.push(n)); }
    if (data.REMINDERS)       { REMINDERS.length=0; data.REMINDERS.forEach(r=>REMINDERS.push(r)); }
    if (data.FIN_TRANSACTIONS){ FIN_TRANSACTIONS.length=0; data.FIN_TRANSACTIONS.forEach(t=>FIN_TRANSACTIONS.push(t)); }
    if (data.FIN_BUDGETS)     { FIN_BUDGETS.length=0; data.FIN_BUDGETS.forEach(b=>FIN_BUDGETS.push(b)); }
    if (data.EVENTS)          { EVENTS.length=0; data.EVENTS.forEach(e=>EVENTS.push(e)); }
    if (data.SESSIONS)        { SESSIONS.length=0; data.SESSIONS.forEach(s=>SESSIONS.push(s)); }
    if (data.ATTENDANCE) {
      Object.keys(ATTENDANCE).forEach(k=>delete ATTENDANCE[k]);
      Object.entries(data.ATTENDANCE).forEach(([k,v])=>ATTENDANCE[k]=v);
    }
    if (data.currentPlan) currentPlan = data.currentPlan;

    console.log('✅ Données chargées depuis localStorage', data.noPhotos?'(sans photos)':'');
    return { loaded: true, savedAt: data.savedAt, noPhotos: !!data.noPhotos };
  } catch(e) {
    console.warn('Load failed:', e.message);
    return false;
  }
}

// ─── Effacer toutes les données ───
function clearAllData() {
  if (!confirm('⚠️ Effacer toutes les données sauvegardées ?\n\nCela remettra l\'application à zéro avec les données de démonstration. Cette action est irréversible.')) return;
  localStorage.removeItem(STORAGE_KEY);
  showToast('Données effacées — rechargement…');
  setTimeout(() => location.reload(), 800);
}

function resetToDemoData() {
  if (!confirm('🔄 Réinitialiser avec les données de démonstration ?\n\nVos données actuelles seront remplacées par les 16 joueurs et données d\'exemple.')) return;
  localStorage.removeItem(STORAGE_KEY);
  showToast('Réinitialisation — rechargement…');
  setTimeout(() => location.reload(), 800);
}

// ─── Indicateur de sauvegarde dans la topbar ───
function updateSaveIndicator(saved, noPhotos) {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  if (saved) {
    el.innerHTML = `<span style="color:var(--green);font-size:.65rem">✓ Sauvegardé${noPhotos?' (sans photos)':''}</span>`;
    el.title = 'Données sauvegardées localement';
    setTimeout(() => {
      if (el) el.innerHTML = `<span style="color:var(--muted2);font-size:.65rem">💾 Auto-save</span>`;
    }, 2500);
  }
}

// ─── Auto-save : déclenché après chaque modification ───

// showToast original est définie plus haut — on ne la redéfinit PAS
// On appelle scheduleSave() directement dans les fonctions qui modifient les données
// via un observer sur les appels submit*

// ─── Export / Import JSON ───
function exportDataJSON() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'manage-my-team-backup-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('📦 Sauvegarde exportée ✓');
  } catch(e) { showToast('⚠️ Export échoué'); }
}

function importDataJSON() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.version) { showToast('⚠️ Fichier invalide'); return; }
        if (!confirm('Importer cette sauvegarde ? Les données actuelles seront remplacées.')) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        showToast('✅ Import réussi — rechargement…');
        setTimeout(() => location.reload(), 800);
      } catch(err) { showToast('⚠️ Fichier JSON invalide'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── Taille utilisée ───
function getStorageSize() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || '';
    const kb = Math.round(raw.length / 1024);
    return kb + ' Ko';
  } catch(e) { return '—'; }
}

// ═══════════════════════════════════
//  INIT
// ═══════════════════════════════════
window.addEventListener('load', () => {
  // ── Charger les données sauvegardées ──
  const loadResult = loadAll();

  renderStats();
  renderCalendar();
  renderResults();
  renderAttendance();
  renderPlayers();
  renderTeam();
  updatePlanUI();
  navigate('home');

  // Afficher toast si données chargées
  if (loadResult && loadResult.loaded) {
    const d = new Date(loadResult.savedAt);
    const when = d.toLocaleDateString('fr-FR', {day:'numeric',month:'short'}) + ' à ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    setTimeout(() => {
      showToast('💾 Données restaurées du ' + when + (loadResult.noPhotos?' (photos non restaurées)':''));
    }, 600);
  }

  // Sauvegarde initiale si pas de données existantes
  if (!loadResult) {
    setTimeout(saveAll, 1000);
  }

  // Close sidebar on outside click
  document.addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      const sb = document.getElementById('sidebar');
      const ov = document.getElementById('sidebar-overlay');
      if (sb.classList.contains('open') && !sb.contains(e.target) && !e.target.closest('.tb-hamburger')) {
        sb.classList.remove('open');
        if (ov) ov.classList.remove('show');
      }
    }
    // Close more menu
    if (!e.target.closest('#bn-more') && !e.target.closest('#more-menu')) {
      closeMoreMenu();
    }
  });

  // Sauvegarde avant fermeture de page
  window.addEventListener('beforeunload', saveAll);
});

