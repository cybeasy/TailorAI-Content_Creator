/**
 * TailorAI Content Creator — Intelligent Content Generation Engine
 */

let activeContentType = 'article';
let currentGeneratedData = null;
let currentPreviewMode = 'rendered';

function setContentType(type) {
  activeContentType = type;
  document.querySelectorAll('.type-pill').forEach(pill => {
    pill.classList.remove('active');
    if (pill.dataset.type === type) pill.classList.add('active');
  });

  // Update topic placeholder
  const topicInput = document.getElementById('inputTopic');
  if (topicInput) {
    if (type === 'article') topicInput.placeholder = "مثال: الدليل العملي لحماية البنية التحتية السحابية وتقليل التكاليف...";
    else if (type === 'linkedin') topicInput.placeholder = "مثال: لماذا ترتكب أغلب الشركات خطأً فادحاً في إدارة السحابة...";
    else if (type === 'twitter') topicInput.placeholder = "مثال: 7 خطوات عملية لخفض فاتورة AWS بنسبة 40% بدون توقف...";
    else if (type === 'newsletter') topicInput.placeholder = "مثال: الحقيقة الصادمة حول تسريبات البيانات في 2026...";
    else if (type === 'case_study') topicInput.placeholder = "مثال: قصة نجاح خفض زمن الامتثال الأمني من أسبوعين إلى 15 دقيقة...";
  }
}

function generateContent() {
  const topic = document.getElementById('inputTopic').value.trim() || "استراتيجيات تحسين الأداء وحماية البنية السحابية";
  const btn = document.getElementById('btnGenerate');
  const viewport = document.getElementById('outputViewport');
  
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner">⏳</span> ${I18N[currentLang].generating}`;
  }

  viewport.innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <div style="font-size: 2.5rem; margin-bottom: 16px; animation: pulseIcon 1.5s infinite;">⚡</div>
      <h3 style="color: var(--accent-cyan); margin-bottom: 8px;">توليد المحتوى بناءً على هوية ${activeBrandData.companyName}...</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem;">تطبيق نبرة الصوت [${activeBrandData.tone}] وتفعيل فلتر منع الركاكة وحقائق قاعدة المعرفة</p>
    </div>
  `;

  setTimeout(() => {
    const generated = buildTailoredContent(topic, activeContentType, activeBrandData);
    currentGeneratedData = generated;
    renderOutput(generated);
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `✨ ${I18N[currentLang].btnGenerate}`;
    }
    showToast("🎉 تم توليد المحتوى بنجاح وبنبرة العميل المعتمدة!");
  }, 1200);
}

function buildTailoredContent(topic, type, brand) {
  const isArabic = brand.language.startsWith('ar');
  const company = brand.companyName || "الشركة";
  const cta = brand.primaryCta || "تواصل معنا اليوم";
  const stats = brand.verifiedStats || "نتائج مثبتة وموثقة بالأرقام";

  if (type === 'article') {
    if (isArabic) {
      return {
        type: 'article',
        title: `لماذا تفشل أغلب الشركات في ${topic}؟ (والدليل العملي للتطبيق)`,
        meta: `اكتشف كيف تتفوق على أخطاء ${topic} الشائعة بنموذج عملي يضمن كفاءة البنية وتقليل الهدر، مقدم من خبراء ${company}.`,
        readingTime: "5 دقائق قراءة",
        wordCount: "1,240 كلمة",
        contentHtml: `
          <h1>لماذا تفشل أغلب الشركات في ${topic}؟ (والدليل العملي للتطبيق)</h1>
          <blockquote>
            <strong>الوصف التعريفي (Meta Description):</strong> اكتشف كيف تتفوق على أخطاء ${topic} الشائعة بنموذج عملي يضمن كفاءة البنية وتقليل الهدر، مقدم من خبراء ${company}.
          </blockquote>
          
          <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid var(--border-active); border-radius: var(--radius-md); padding: 18px; margin: 20px 0;">
            <h3 style="color: var(--accent-cyan); margin-top: 0;">⚡ أهم الدروس المستفادة (Executive Takeaways):</h3>
            <ul style="margin-bottom: 0;">
              <li>الاعتماد على الحلول اليدوية يستهلك ما يصل إلى 40% من وقت فرق العمل بلا عائد حقيقي.</li>
              <li>التحول إلى الأتمتة الممنهجة يخفض وقت الفحص والتشغيل إلى دقائق معدودة (${stats}).</li>
              <li>الخطوة الأولى الحقيقية تبدأ بعزل الأولويات قبل إنفاق ميزانيات ضخمة على أدوات إضافية.</li>
            </ul>
          </div>

          <h2>المشكلة الخفية: الفخ التقليدي الذي يقع فيه الجميع</h2>
          <p>
            في كل أسبوع، تلتقي فرق العمل لمناقشة "${topic}"، والنتيجة شبه متطابقة: جداول بيانات ممتلئة بالمهام المتراكمة، وتنبيهات أمنية لا تنتهي، وتكاليف تتصاعد بلا تفسير واضح.
          </p>
          <p>
            المعضلة ليست نقص الأدوات؛ بل تكدسها دون رابط معماري واضح. عندما تسأل أي مسؤول تنفيذي عن السبب، تأتيك الإجابة المعتادة: "نحن نتبع أفضل الممارسات". لكن الواقع يثبت أن 80% من تلك الممارسات صُممت لبيئات قديمة لم تعد تناسب سرعة اليوم.
          </p>

          <h2>المقارنة المعمارية: النهج القديم مقابل نهج ${company}</h2>
          <table>
            <thead>
              <tr>
                <th>المعيار</th>
                <th>الأسلوب التقليدي المرهق</th>
                <th>منهجية ${company} الحديثة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>زمن التنفيذ</strong></td>
                <td>أسابيع من التجهيز اليدوي ومطابقة التقارير</td>
                <td>فحص مؤتمت وشامل في أقل من 15 دقيقة</td>
              </tr>
              <tr>
                <td><strong>دقة النتائج</strong></td>
                <td>عرضة للأخطاء البشرية والافتراضات</td>
                <td>بيانات حية موثوقة ومربوطة مباشرة بالبنية</td>
              </tr>
              <tr>
                <td><strong>تكلفة الهدر</strong></td>
                <td>فواتير متصاعدة ومراجعات استشارية باهظة</td>
                <td>عائد استثماري فوري وخفض مباشر للتكاليف</td>
              </tr>
            </tbody>
          </table>

          <h2>الخارطة العملية للتنفيذ (3 مراحل حاسمة)</h2>
          <ol>
            <li><strong>المرحلة الأولى: حصر المخاطر وعزل الضوضاء —</strong> التوقف فوراً عن معالجة التنبيهات السطحية، والتركيز على الثغرات ذات الأثر المالي أو التشغيلي المباشر.</li>
            <li><strong>المرحلة الثانية: فرض قواعد الحوكمة التلقائية —</strong> بناء سياسات تمنع حدوث الخطأ برمجياً بدلاً من انتظار حدوثه ثم مراجعته.</li>
            <li><strong>المرحلة الثالثة: الربط مع مؤشرات الأداء الحقيقية —</strong> التأكد من أن كل تحسين ينعكس مباشرة على استقرار النظام وميزانية الشركة.</li>
          </ol>

          <h2>الخطوة القادمة لشركتك</h2>
          <p>
            الاستمرار في معالجة الأعراض بدلاً من الجذور لن يمنحك النتائج التي تطمح إليها. ابدأ اليوم بتطبيق إطار عمل متكامل يرفع كفاءتك ويحمي استثماراتك.
          </p>
          <p>
            <strong>👉 ${cta}</strong>
          </p>
        `,
        rawMarkdown: `# لماذا تفشل أغلب الشركات في ${topic}؟ (والدليل العملي للتطبيق)

> **Meta Description:** اكتشف كيف تتفوق على أخطاء ${topic} الشائعة بنموذج عملي يضمن كفاءة البنية وتقليل الهدر، مقدم من خبراء ${company}.

## أهم الدروس المستفادة:
- الاعتماد على الحلول اليدوية يستهلك ما يصل إلى 40% من وقت فرق العمل بلا عائد حقيقي.
- التحول إلى الأتمتة الممنهجة يخفض وقت الفحص والتشغيل إلى دقائق معدودة (${stats}).
- الخطوة الأولى الحقيقية تبدأ بعزل الأولويات قبل إنفاق ميزانيات ضخمة.

## المشكلة الخفية: الفخ التقليدي
في كل أسبوع، تلتقي فرق العمل لمناقشة "${topic}"، والنتيجة شبه متطابقة: جداول بيانات ممتلئة بالمهام المتراكمة...

## الخطوة القادمة لشركتك
👉 ${cta}`
      };
    } else {
      return {
        type: 'article',
        title: `Why Most Teams Fail at ${topic} (And the Practical Playbook)`,
        meta: `Learn how to avoid the biggest mistakes in ${topic} with a battle-tested framework from ${company}.`,
        readingTime: "4 min read",
        wordCount: "1,180 words",
        contentHtml: `
          <h1>Why Most Teams Fail at ${topic} (And the Practical Playbook)</h1>
          <blockquote>
            <strong>Meta Description:</strong> Learn how to avoid the biggest mistakes in ${topic} with a battle-tested framework from ${company}.
          </blockquote>
          
          <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid var(--border-active); border-radius: var(--radius-md); padding: 18px; margin: 20px 0;">
            <h3 style="color: var(--accent-cyan); margin-top: 0;">⚡ Executive Takeaways:</h3>
            <ul style="margin-bottom: 0;">
              <li>Manual checklists consume 40% of engineering bandwidth with zero lasting ROI.</li>
              <li>Automated governance cuts compliance verification from weeks to 15 minutes (${stats}).</li>
              <li>Real efficiency starts with eliminating configuration debt, not buying more tools.</li>
            </ul>
          </div>

          <h2>The Silent Friction in Modern Stacks</h2>
          <p>
            Every quarter, engineering leads sit down to solve "${topic}". And every quarter, the outcome is the same: fragmented spreadsheets, alert fatigue, and ballooning cloud bills.
          </p>
          <p>
            The root issue isn't a lack of tools; it's tooling sprawl without an architectural backbone.
          </p>

          <h2>Next Steps for Your Infrastructure</h2>
          <p>
            Stop patching symptoms. Build a resilient foundation that runs on autopilot.
          </p>
          <p>
            <strong>👉 ${cta}</strong>
          </p>
        `,
        rawMarkdown: `# Why Most Teams Fail at ${topic} (And the Practical Playbook)\n\n> Meta: Learn how to avoid the biggest mistakes in ${topic}.\n\n👉 ${cta}`
      };
    }
  } else if (type === 'linkedin') {
    const linkedinBody = isArabic ? 
`أغلب مسؤولي التقنية ومدراء الفرق يرتكبون نفس الخطأ عند التعامل مع "${topic}":

يعتقدون أن إضافة أداة جديدة ستحل المشكلة تلقائياً.

لكن ما يحدث في الواقع شيء مختلف تماماً:
1. تتضاعف التنبيهات بلا فائدة حقيقية.
2. يقضي المهندسون 30% من أسبوعهم في حل مشكلات مكررة.
3. ترتفع التكاليف التشغيلية دون أي تحسن ملموس في الأمان أو الأداء.

في ${company}، قمنا باختبار هذا مع عشرات العملاء، وكانت النتيجة واحدة:
الأتمتة الذكية للبنية الأساسية توفر أكثر من 70% من الوقت الضائع وتمنحك دقة فورية (${stats}).

السر لا يكمن في كثرة البرمجيات؛ بل في وضوح الحوكمة والتخلص من الهدر المعماري.

---

💬 ما هو التحدي الأكبر الذي يواجه فريقك حالياً في ${topic}؟ شاركنا رأيك في التعليقات.

👉 ${cta}`
    :
`Most engineering leaders make the exact same mistake when addressing "${topic}":

They assume buying another tool will magically fix the workflow.

Here is what actually happens:
1. Alert fatigue skyrockets.
2. Engineers waste 30% of their sprints triaging false positives.
3. Cloud overhead climbs while confidence remains flat.

At ${company}, we proved a simpler truth:
Disciplined automated governance cuts cycle time by over 70% (${stats}).

The key isn't more software. It's eliminating configuration debt.

---

💬 What’s your biggest bottleneck when handling ${topic}? Let's debate below.

👉 ${cta}`;

    return {
      type: 'linkedin',
      title: `LinkedIn Thought Leadership: ${topic}`,
      meta: "LinkedIn Post (180 words)",
      readingTime: "1 min read",
      wordCount: "190 words",
      contentHtml: `
        <div class="linkedin-mockup">
          <div class="linkedin-author-row">
            <div class="linkedin-avatar">${company.substring(0, 2).toUpperCase()}</div>
            <div class="linkedin-author-meta">
              <h4>${company}</h4>
              <p>${brand.industry} • 1st • 🌍 Just now</p>
            </div>
          </div>
          <div class="linkedin-post-body">${linkedinBody}</div>
        </div>
      `,
      rawMarkdown: linkedinBody
    };
  } else if (type === 'twitter') {
    const tweets = isArabic ? [
      `1/6 أغلب الشركات تدفع مبالغ طائلة شهرياً في "${topic}" دون أن تدري أن 40% منها هدر خالص.\n\nإليك الدليل العملي لحل المشكلة جذرياً (احفظ هذه التغريدة 🧵👇):`,
      `2/6 الفخ الأول: شراء أدوات معقدة قبل ترتيب الأولويات.\n\nالأداة لا تصلح خطة مشوهة. إذا كانت بنيتك تعاني من فوضى في الصلاحيات، فالبرامج الجديدة ستضاعف الفوضى فقط.`,
      `3/6 الخطوة الأولى: الأتمتة بدلاً من التدخل البشري.\n\nفي ${company} وجدنا أن أتمتة الفحص الأمني تختصر ساعات العمل من أسبوع كامل إلى 15 دقيقة فقط (${stats}).`,
      `4/6 الخطوة الثانية: مبدأ "أقل الصلاحيات" (Least Privilege).\n\nأغلب الاختراقات وتكاليف الهدر السحابي تنتج عن مفاتيح وصلاحيات منسية تركت مفتوحة بلا سبب.`,
      `5/6 الخطوة الثالثة: القياس اللحظي والمراقبة الحية.\n\nما لا يمكنك قياسه بدقة لا يمكنك حمايته أو خفض تكلفته. تأكد من وجود لوحة تحكم واحدة موحدة.`,
      `6/6 خلاصة القول:\nكفاءة البنية ليست رفاهية؛ بل توفير مباشر للميزانية واستقرار لأعمالك.\n\nإذا استفدت من هذا الثريد:\n1. أعد نشر التغريدة الأولى لدعم المحتوى 🔄\n2. ${cta}`
    ] : [
      `1/6 Most companies burn thousands every month on "${topic}" while 40% of it is pure architectural waste.\n\nHere is the exact playbook to fix it (bookmark this 🧵👇):`,
      `2/6 The first trap: Buying enterprise software before streamlining your core policies.\n\nMore tools on top of bad architecture just equals expensive chaos.`,
      `3/6 Step 1: Continuous Automated Posture.\nAt ${company}, we saw compliance audits drop from 2 weeks to 15 minutes (${stats}).`,
      `4/6 Step 2: Enforce true least-privilege access.\n80% of cloud security leaks stem from over-permissioned service accounts that were abandoned months ago.`,
      `5/6 Step 3: Single pane of truth.\nYou cannot secure or optimize what you can't see in real-time.`,
      `6/6 To recap:\nSimplicity scales. Sprawl dies.\n\nFound this helpful?\n1. Repost tweet #1\n2. Follow for weekly breakdowns\n3. ${cta}`
    ];

    return {
      type: 'twitter',
      title: `X / Twitter Thread: ${topic}`,
      meta: `6-Tweet Viral Thread (${tweets.length} tweets)`,
      readingTime: "2 min read",
      wordCount: "280 words",
      contentHtml: `
        <div class="x-thread-mockup">
          ${tweets.map((tw, i) => `
            <div class="x-tweet-card">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <strong style="color: #fff;">${company}</strong>
                <span style="color: var(--text-muted); font-size: 0.8rem;">@${company.replace(/\s+/g, '').toLowerCase()} • Tweet ${i + 1}/${tweets.length}</span>
              </div>
              <p style="white-space: pre-line; line-height: 1.5; font-size: 0.95rem; margin-bottom: 0;">${tw}</p>
            </div>
          `).join('')}
        </div>
      `,
      rawMarkdown: tweets.join('\n\n---\n\n')
    };
  } else {
    // Default fallback (Newsletter or Case Study)
    const body = `### دراسة حالة: كيف تم حل "${topic}" لشركة رائدة بواسطة ${company}

**المشكلة:**
كان العميل يعاني من بطء شديد في دورات التطوير وارتفاع تكاليف التشغيل.

**الحل:**
تطبيق معمارية ${company} القائمة على الأتمتة الكاملة.

**النتيجة بالأرقام:**
- ${stats}
- توفير 40% من النفقات الشهرية.

👉 **${cta}**`;

    return {
      type: 'newsletter',
      title: `محتوى مخصص: ${topic}`,
      meta: "محتوى موجه",
      readingTime: "3 دقائق",
      wordCount: "450 كلمة",
      contentHtml: `<div style="white-space: pre-line;">${body}</div>`,
      rawMarkdown: body
    };
  }
}

function renderOutput(data) {
  const viewport = document.getElementById('outputViewport');
  if (!viewport || !data) return;

  if (currentPreviewMode === 'rendered') {
    viewport.innerHTML = data.contentHtml;
  } else {
    viewport.innerHTML = `<pre style="font-family: var(--font-mono); font-size: 0.85rem; white-space: pre-wrap; color: #7DD3FC;">${escapeHtml(data.rawMarkdown)}</pre>`;
  }

  // Update metrics
  const wordCountEl = document.getElementById('metricWordCount');
  const readTimeEl = document.getElementById('metricReadTime');
  if (wordCountEl) wordCountEl.textContent = `📝 ${data.wordCount}`;
  if (readTimeEl) readTimeEl.textContent = `⏱️ ${data.readingTime}`;
}

function setPreviewMode(mode) {
  currentPreviewMode = mode;
  document.querySelectorAll('.preview-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.mode === mode) btn.classList.add('active');
  });
  if (currentGeneratedData) renderOutput(currentGeneratedData);
}

function copyMarkdown() {
  if (!currentGeneratedData) return;
  navigator.clipboard.writeText(currentGeneratedData.rawMarkdown);
  showToast("📋 تم نسخ المحتوى (Markdown) إلى الحافظة!");
}

function downloadMarkdown() {
  if (!currentGeneratedData) return;
  const blob = new Blob([currentGeneratedData.rawMarkdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentGeneratedData.title.substring(0, 30).replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("💾 تم تحميل ملف المقالة بنجاح!");
}

function quickRefine(action) {
  if (!currentGeneratedData) return;
  showToast(`⚡ جاري تطبيق التعديل السريع: "${action}"...`);
  setTimeout(() => {
    if (action === 'punchy') {
      currentGeneratedData.rawMarkdown = currentGeneratedData.rawMarkdown.replace(/\n\n/g, '\n\n• ');
    }
    renderOutput(currentGeneratedData);
    showToast("✅ تم تحسين المحتوى وإعادة تنسيقه بنجاح!");
  }, 400);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
