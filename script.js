const questions = [
    {
      q: "Boş vaktinde en çok ne yapmaktan keyif alırsın?",
      opts: [
        { t: "Yeni bir oyun kurgusu ya da hikaye tasarlamak", type: "oyun" },
        { t: "Bir şeyin nasıl çalıştığını çözmek, kod denemek", type: "yazilim" },
        { t: "Görselleri, renkleri, düzeni yeniden tasarlamak", type: "tasarim" },
        { t: "Bir video ya da içerik üretip paylaşmak", type: "icerik" }
      ]
    },
    {
      q: "Bir proje grubunda hangi rolü üstlenirsin?",
      opts: [
        { t: "Kuralları ve mekanikleri kurgulayan kişi", type: "oyun" },
        { t: "Sistemi ayakta tutan teknik kişi", type: "yazilim" },
        { t: "İşin görünümünü şekillendiren kişi", type: "tasarim" },
        { t: "Fikri anlatan, sunan kişi", type: "icerik" }
      ]
    },
 {
  q: "Hangi cümle sana daha yakın?",
  opts: [
    { t: "\"Bir dünya kurup insanları içine çekmek isterim.\"", type: "oyun" },
    { t: "\"Bir problemi mantıkla çözmekten keyif alırım.\"", type: "yazilim" },
    { t: "\"Bir şeyin güzel görünmesi benim için önemli.\"", type: "tasarim" },
    { t: "\"Anlattığımda insanların dinlemesini severim.\"", type: "icerik" }
  ]
}
  ];
  const results = {
    oyun: { emoji:"🎮", title:"Oyun Geliştirme", text:"Kurgu kurmayı ve etkileşimli deneyimler tasarlamayı seviyorsun. Unity ile 2D Oyun Yapımı eğitimi senin için iyi bir başlangıç olabilir." },
    yazilim: { emoji:"💻", title:"Yazılım & Yapay Zeka", text:"Problem çözmeye ve sistemleri anlamaya yatkınsın. Python ile Yapay Zekaya Giriş eğitimine göz atabilirsin." },
    tasarim: { emoji:"🎨", title:"Dijital Ürün Tasarımı", text:"Görsel düşünme ve düzen kurma konusunda güçlüsün. UI/UX ile Dijital Ürün Tasarımı eğitimi sana uygun olabilir." },
    icerik: { emoji:"🎬", title:"İçerik Üretimi", text:"Anlatmayı ve paylaşmayı seviyorsun. Yakında açılacak içerik üretimi eğitimlerini takip etmeni öneririz." }
  };

  let step = 0;
  const scores = { oyun:0, yazilim:0, tasarim:0, icerik:0 };
  const progressEl = document.getElementById('quizProgress');
  const contentEl = document.getElementById('quizContent');

  function renderProgress(){
    progressEl.innerHTML = questions.map((_, i) => `<span class="${i < step ? 'done' : ''}"></span>`).join('');
  }

  function renderQuestion(){
    renderProgress();
    const q = questions[step];
    contentEl.innerHTML = `
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts">
        ${q.opts.map((o, i) => `<button class="quiz-opt" data-type="${o.type}">${o.t}</button>`).join('')}
      </div>
    `;
    contentEl.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        scores[btn.dataset.type]++;
        step++;
        if (step < questions.length){ renderQuestion(); } else { renderResult(); }
      });
    });
  }

  function renderResult(){
    progressEl.innerHTML = questions.map(() => `<span class="done"></span>`).join('');
    const winner = Object.keys(scores).reduce((a,b) => scores[b] > scores[a] ? b : a);
    const r = results[winner];
    contentEl.innerHTML = `
      <div class="quiz-result">
        <div class="role-badge">${r.emoji}</div>
        <h3>${r.title}</h3>
        <p>${r.text}</p>
        <a href="#egitimler" class="btn btn-primary">İlgili Eğitimlere Git</a>
        <div><button class="quiz-restart" id="restartBtn">Testi tekrar çöz</button></div>
      </div>
    `;
    document.getElementById('restartBtn').addEventListener('click', () => {
      step = 0; Object.keys(scores).forEach(k => scores[k] = 0); renderQuestion();
    });
  }

  renderQuestion();