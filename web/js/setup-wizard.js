/**
 * TailorAI Content Creator — Setup Wizard Logic
 */

let currentStep = 1;
const totalSteps = 4;
let activeBrandData = { ...DEFAULT_BRAND_PRESET };
let uploadedFiles = [
  { name: "Company_Overview_2026.pdf", size: "2.4 MB" },
  { name: "Product_Specs_CloudGuard.docx", size: "1.1 MB" }
];

function initSetupWizard() {
  populateFormFromBrand(activeBrandData);
  setupEventListeners();
  renderUploadedFiles();
  renderTabooTags();
  updateStepUI();
}

function populateFormFromBrand(brand) {
  document.getElementById('inputCompanyName').value = brand.companyName || '';
  document.getElementById('inputIndustry').value = brand.industry || '';
  document.getElementById('inputOfferings').value = brand.offerings || '';
  document.getElementById('inputAudience').value = brand.targetAudience || '';
  document.getElementById('inputValueProp').value = brand.valueProposition || '';
  document.getElementById('inputVerifiedStats').value = brand.verifiedStats || '';
  document.getElementById('inputPrimaryCta').value = brand.primaryCta || '';
  document.getElementById('inputSpecialReq').value = brand.specialInstructions || '';

  // Select Radios
  setRadioValue('headlineStyle', brand.headlineStyle || 'contrarian');
  setRadioValue('articleLength', brand.articleLength || 'medium');
  setRadioValue('tone', brand.tone || 'authoritative');
  setRadioValue('language', brand.language || 'ar_fusha');
}

function setRadioValue(name, val) {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  radios.forEach(r => {
    if (r.value === val) {
      r.checked = true;
      const card = r.closest('.option-card');
      if (card) {
        document.querySelectorAll(`input[name="${name}"]`).forEach(el => el.closest('.option-card')?.classList.remove('selected'));
        card.classList.add('selected');
      }
    }
  });
}

function setupEventListeners() {
  // Option Card Click handler
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const input = card.querySelector('input');
      if (input) {
        input.checked = true;
        const name = input.getAttribute('name');
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => r.closest('.option-card')?.classList.remove('selected'));
        card.classList.add('selected');
      }
    });
  });

  // Taboo Tags Input
  const tagInput = document.getElementById('tagInputInline');
  if (tagInput) {
    tagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const val = tagInput.value.trim().replace(/^,|,$/g, '');
        if (val && !activeBrandData.tabooWords.includes(val)) {
          activeBrandData.tabooWords.push(val);
          renderTabooTags();
          tagInput.value = '';
        }
      }
    });
  }

  // Dropzone drag & drop simulation
  const dropzone = document.getElementById('kbDropzone');
  const fileInput = document.getElementById('kbFileInput');
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        handleFiles(fileInput.files);
      }
    });
  }
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    uploadedFiles.push({
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
    });
  }
  renderUploadedFiles();
  showToast(`✅ ${files.length} ملف(ات) تم إضافتها لقاعدة المعرفة`);
}

function renderUploadedFiles() {
  const container = document.getElementById('fileBadgesList');
  if (!container) return;
  container.innerHTML = uploadedFiles.map((file, idx) => `
    <div class="file-item-badge">
      <div class="file-item-info">
        <span>📄</span>
        <strong>${file.name}</strong>
        <span style="color: var(--text-muted); font-size: 0.75rem;">(${file.size})</span>
      </div>
      <button style="background:none; border:none; color:var(--accent-rose); cursor:pointer;" onclick="removeFile(${idx})">✕</button>
    </div>
  `).join('');
}

function removeFile(idx) {
  uploadedFiles.splice(idx, 1);
  renderUploadedFiles();
}

function renderTabooTags() {
  const container = document.getElementById('tabooPillsWrapper');
  if (!container) return;
  container.innerHTML = activeBrandData.tabooWords.map((word, idx) => `
    <span class="tag-pill">
      🚫 ${word}
      <button type="button" onclick="removeTabooWord(${idx})">✕</button>
    </span>
  `).join('');
}

function removeTabooWord(idx) {
  activeBrandData.tabooWords.splice(idx, 1);
  renderTabooTags();
}

function nextStep() {
  if (currentStep < totalSteps) {
    saveCurrentStepData();
    currentStep++;
    updateStepUI();
  }
}

function prevStep() {
  if (currentStep > 1) {
    saveCurrentStepData();
    currentStep--;
    updateStepUI();
  }
}

function saveCurrentStepData() {
  activeBrandData.companyName = document.getElementById('inputCompanyName').value;
  activeBrandData.industry = document.getElementById('inputIndustry').value;
  activeBrandData.offerings = document.getElementById('inputOfferings').value;
  activeBrandData.targetAudience = document.getElementById('inputAudience').value;
  activeBrandData.valueProposition = document.getElementById('inputValueProp').value;
  activeBrandData.verifiedStats = document.getElementById('inputVerifiedStats').value;
  activeBrandData.primaryCta = document.getElementById('inputPrimaryCta').value;
  activeBrandData.specialInstructions = document.getElementById('inputSpecialReq').value;

  const hl = document.querySelector('input[name="headlineStyle"]:checked');
  if (hl) activeBrandData.headlineStyle = hl.value;
  const len = document.querySelector('input[name="articleLength"]:checked');
  if (len) activeBrandData.articleLength = len.value;
  const tn = document.querySelector('input[name="tone"]:checked');
  if (tn) activeBrandData.tone = tn.value;
  const lg = document.querySelector('input[name="language"]:checked');
  if (lg) activeBrandData.language = lg.value;

  localStorage.setItem('tailorai_brand', JSON.stringify(activeBrandData));
}

function updateStepUI() {
  // Stepper Nodes
  document.querySelectorAll('.step-node').forEach((node, index) => {
    const stepNum = index + 1;
    node.classList.remove('active', 'completed');
    if (stepNum === currentStep) {
      node.classList.add('active');
    } else if (stepNum < currentStep) {
      node.classList.add('completed');
    }
  });

  // Connectors
  document.querySelectorAll('.step-connector').forEach((conn, index) => {
    if (index + 1 < currentStep) {
      conn.classList.add('completed');
    } else {
      conn.classList.remove('completed');
    }
  });

  // Step Content Blocks
  document.querySelectorAll('.wizard-step-content').forEach(block => {
    block.classList.remove('active');
  });
  const currentContent = document.getElementById(`stepContent${currentStep}`);
  if (currentContent) currentContent.classList.add('active');

  // Buttons Visibility
  const btnPrev = document.getElementById('btnWizardPrev');
  const btnNext = document.getElementById('btnWizardNext');
  const btnFinish = document.getElementById('btnWizardFinish');

  if (btnPrev) btnPrev.style.display = currentStep === 1 ? 'none' : 'inline-flex';
  if (btnNext) btnNext.style.display = currentStep === totalSteps ? 'none' : 'inline-flex';
  if (btnFinish) btnFinish.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
}

function synthesizeAgentPersona() {
  saveCurrentStepData();
  
  // Show Activation Modal
  const modal = document.getElementById('activationModal');
  const blueprintBox = document.getElementById('blueprintSummaryCode');
  
  const blueprintText = `// ============================================
// TAILORAI SYNTHESIZED AGENT BLUEPRINT
// ============================================
Target Brand: ${activeBrandData.companyName}
Industry: ${activeBrandData.industry}
Tone Matrix: [${activeBrandData.tone.toUpperCase()}]
Language Mode: [${activeBrandData.language}]
Headline Archetype: ${activeBrandData.headlineStyle}
Target Wordcount: ${activeBrandData.articleLength}
Anti-Slop Filter: Active (${activeBrandData.tabooWords.length} banned expressions)
Verified Knowledge Sources: ${uploadedFiles.length} documents indexed
Primary Conversion CTA: "${activeBrandData.primaryCta}"
Status: READY FOR PRODUCTION`;

  if (blueprintBox) blueprintBox.textContent = blueprintText;
  if (modal) modal.style.display = 'block';

  // Synchronize with local backend files if server is reachable
  fetch('/api/tailorai/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filePath: '.tailorai/Brand/Brand_Voice_Identity.md',
      content: generateBrandMarkdown(activeBrandData)
    })
  }).catch(() => console.log('Local server offline, running in browser mode'));

  // Update Studio Header
  updateStudioBrandPill();
}

function generateBrandMarkdown(b) {
  return `# Brand_Voice_Identity.md — Tailored Brand DNA

- **Company / Brand Name:** ${b.companyName}
- **Industry & Niche:** ${b.industry}
- **Value Proposition:** ${b.valueProposition}
- **Target Audience:** ${b.targetAudience}
- **Tone Matrix:** ${b.tone}
- **Default Language:** ${b.language}
- **Primary CTA:** ${b.primaryCta}
- **Banned Clichés:** ${b.tabooWords.join(', ')}
- **Special Directives:** ${b.specialInstructions}`;
}

function updateStudioBrandPill() {
  const nameEl = document.getElementById('studioBrandName');
  const descEl = document.getElementById('studioBrandDesc');
  if (nameEl) nameEl.textContent = activeBrandData.companyName;
  if (descEl) descEl.textContent = `${activeBrandData.industry} • ${activeBrandData.tone}`;
}
