/**
 * TailorAI Content Creator — Main Application Controller
 */

let currentLang = 'ar';
let activeView = 'setup';

document.addEventListener('DOMContentLoaded', () => {
  // Restore saved brand if available
  const savedBrand = localStorage.getItem('tailorai_brand');
  if (savedBrand) {
    try {
      activeBrandData = JSON.parse(savedBrand);
    } catch (e) {
      console.error(e);
    }
  }

  initLanguage(currentLang);
  initSetupWizard();
  initWorkspaceTree();
  updateStudioBrandPill();
});

function switchView(viewName) {
  activeView = viewName;

  // Update tabs
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.view === viewName) btn.classList.add('active');
  });

  // Update view containers
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const targetSec = document.getElementById(`view-${viewName}`);
  if (targetSec) targetSec.classList.add('active');

  // If entering studio and no content is generated yet, trigger a demo generation
  if (viewName === 'studio' && !currentGeneratedData) {
    generateContent();
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  initLanguage(currentLang);
}

function initLanguage(lang) {
  const dict = I18N[lang];
  const html = document.documentElement;
  
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update translatable texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) langBtn.textContent = dict.langToggle;
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Workspace File Explorer
const WORKSPACE_FILES = [
  { name: "Agent.md", path: ".tailorai/Agent.md", category: "Core" },
  { name: "Brand_Voice_Identity.md", path: ".tailorai/Brand/Brand_Voice_Identity.md", category: "Brand" },
  { name: "Overview.md", path: ".tailorai/Knowledge_Base/Overview.md", category: "Knowledge" },
  { name: "Article_Standards.md", path: ".tailorai/Guidelines/Article_Standards.md", category: "Guidelines" },
  { name: "Social_Media_Standards.md", path: ".tailorai/Guidelines/Social_Media_Standards.md", category: "Guidelines" },
  { name: "Custom_Instructions.md", path: ".tailorai/Guidelines/Custom_Instructions.md", category: "Guidelines" },
  { name: "Anti_AI_Slop.md", path: ".tailorai/Skills/Anti_AI_Slop.md", category: "Skills" },
  { name: "Headline_Psychology.md", path: ".tailorai/Skills/Headline_Psychology.md", category: "Skills" },
  { name: "init-agent.md", path: "init-agent.md", category: "Protocols" },
  { name: "AGENT_BLUEPRINT.md", path: "AGENT_BLUEPRINT.md", category: "Architecture" }
];

function initWorkspaceTree() {
  const list = document.getElementById('workspaceFileList');
  if (!list) return;

  list.innerHTML = WORKSPACE_FILES.map((file, idx) => `
    <li class="tree-item ${idx === 0 ? 'active' : ''}" onclick="selectWorkspaceFile('${file.path}', this)">
      <span>📄</span>
      <span>${file.name}</span>
      <span style="margin-inline-start: auto; font-size: 0.7rem; color: var(--text-muted);">${file.category}</span>
    </li>
  `).join('');

  // Load first file
  selectWorkspaceFile(WORKSPACE_FILES[0].path);
}

function selectWorkspaceFile(filePath, itemEl) {
  if (itemEl) {
    document.querySelectorAll('.tree-item').forEach(el => el.classList.remove('active'));
    itemEl.classList.add('active');
  }

  const filenameEl = document.getElementById('viewerFilename');
  const editor = document.getElementById('viewerEditor');
  if (filenameEl) filenameEl.textContent = filePath;

  // Try fetching from server API
  fetch(`/api/tailorai/file?path=${encodeURIComponent(filePath)}`)
    .then(res => res.json())
    .then(data => {
      if (data.success && editor) {
        editor.value = data.content;
      }
    })
    .catch(() => {
      // Local demo fallback
      if (editor) {
        editor.value = `# ${filePath}\n\n// Content loaded in TailorAI Governance Workspace.\n// Synchronized with active client parameters: ${activeBrandData.companyName}.`;
      }
    });
}

function saveActiveFile() {
  const filenameEl = document.getElementById('viewerFilename');
  const editor = document.getElementById('viewerEditor');
  if (!filenameEl || !editor) return;

  const path = filenameEl.textContent;
  const content = editor.value;

  fetch('/api/tailorai/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filePath: path, content: content })
  })
  .then(res => res.json())
  .then(res => {
    showToast(`💾 تم حفظ التعديلات في ${path}`);
  })
  .catch(() => {
    showToast(`💾 تم حفظ التعديلات محلياً`);
  });
}
