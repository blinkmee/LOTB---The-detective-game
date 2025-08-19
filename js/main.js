// Fonction pour charger un component dans un container
async function loadComponent(containerId, path) {
  const container = document.getElementById(containerId);
  const response = await fetch(path);
  const html = await response.text();
  container.innerHTML = html;
}

// Charger head, header, sidebar, footer
loadComponent('head-placeholder', './components/head.html');
loadComponent('header-placeholder', './components/header.html');
loadComponent('sidebar-placeholder', './components/sidebar.html');
loadComponent('footer-placeholder', './components/footer.html');

// Charger un module par défaut dans main-content
loadComponent('main-content', '/components/mission1.html');

// Exemple : changer le module via JS
// loadComponent('main-content', '/components/mission2.html');
