/* Zusly Projects - site behaviour */
(function () {
  "use strict";

  const D = window.ZUSLY;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const page = document.body.dataset.page;
  const img = (name) => `assets/img/${name}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const unique = (arr) => [...new Set(arr)];

  // Phosphor (duotone) icon helper - webfont loaded in each page <head>
  const ph = (name, cls = "") => `<i class="ph-duotone ph-${name}${cls ? " " + cls : ""}" aria-hidden="true"></i>`;
  const ICON = {
    tag:   ph("tag", "spec-ic"),
    pin:   ph("map-pin", "spec-ic"),
    cal:   ph("calendar-blank", "spec-ic"),
    arrow: '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 8h12M9 3l5 5-5 5"/></svg>',
    // Leadership
    crown:     ph("crown"),
    chart:     ph("chart-line-up"),
    hardhat:   ph("hard-hat"),
    people:    ph("users-three"),
    handshake: ph("handshake"),
    calc:      ph("calculator"),
  };

  // Home design-detail drawings
  const DESIGNS = [
    { img: "designs/design-bifold.png",            no: "D-01", name: "Bi-Fold System",       text: "Multi-leaf aluminium bi-fold that folds a wall away to the garden." },
    { img: "designs/design-sliding-partition.png", no: "D-02", name: "Sliding Partition",    text: "Framed sliding panels that zone an interior without losing light." },
    { img: "designs/design-stacking-slider.png",   no: "D-03", name: "Stacking Slider",      text: "Three-panel stacking door on a precision bottom-rolling track." },
    { img: "designs/design-double-doors.png",      no: "D-04", name: "Double Entrance Doors", text: "Paired entrance doors with full-height pull handles and flush frames." },
    { img: "designs/design-bypass-slider.png",     no: "D-05", name: "Bypass Slider",        text: "Two-track bypass glazing where one leaf glides behind the other." },
    { img: "designs/design-pivot-door.png",        no: "D-06", name: "Pivot Door",           text: "Centre-hung pivot leaf detailed for a clean, frameless reveal." },
  ];

  // Accent colour per category / service - "colourful" cards, kept architectural
  const ACCENTS = ["#1f6fb2", "#F26603", "#1f8f93", "#a86a2c", "#3f8456", "#4a5bbf"];
  const CAT_COLOR = {
    "Curtain Walls": "#1f6fb2",
    "Skylights": "#1f8f93",
    "Pergolas & Louvres": "#3f8456",
    "Windows & Doors": "#F26603",
    "Cladding & Fascia": "#a86a2c",
    "Glass Partitions": "#4a5bbf",
    "Decking": "#6b7a48",
  };
  const catColor = (c) => CAT_COLOR[c] || "#003D70";

  // Artful architectural tag badge for the top-left of media cards
  const tagBadge = (cat, year) => `
    <div class="cardtag" aria-hidden="true">
      <span class="cardtag__cat">${esc(cat)}</span>
      <span class="cardtag__yr">${esc(year)}</span>
    </div>`;

  /* ---------------- Google reviews helpers ---------------- */
  const revImg = (name) => `assets/img/reviews/${name}`;
  const stars = (n = 5) => `<span class="stars" aria-hidden="true">${"★".repeat(n)}</span>`;

  // Concentrated, overlapping avatar cluster (happy clients)
  function avatarCluster(max = 5) {
    const list = (D.reviews || []);
    const shown = list.slice(0, max);
    const total = (D.google && D.google.count) || list.length;
    const extra = Math.max(0, total - shown.length);
    const avs = shown.map((r, i) =>
      `<span class="av" style="z-index:${max - i}"><img src="${revImg(r.avatar)}" alt="${esc(r.name)}" loading="lazy" width="44" height="44"></span>`
    ).join("");
    const more = extra > 0 ? `<span class="av av--more" style="z-index:0">+${extra}</span>` : "";
    return `<span class="avstack">${avs}${more}</span>`;
  }

  // Trust block used inside the mobile drawer (between links and contact)
  function navProofHTML() {
    const g = D.google || { rating: 5, count: (D.reviews || []).length, url: "#" };
    return `<a class="navproof" href="${g.url}" target="_blank" rel="noopener">
      ${avatarCluster(4)}
      <span class="navproof__meta"><b>${g.rating.toFixed(1)} ${stars(5)}</b><small>${g.count} happy clients on Google</small></span>
    </a>`;
  }

  // Compact cluster for the desktop top nav
  function navClusterHTML() {
    const g = D.google || { rating: 5, count: (D.reviews || []).length, url: "#" };
    return `<a class="navcluster" href="${g.url}" target="_blank" rel="noopener" aria-label="${g.count} five-star Google reviews">
      ${avatarCluster(3)}
      <span class="navcluster__meta"><b>${g.rating.toFixed(1)}</b><span class="stars">${"★".repeat(5)}</span></span>
    </a>`;
  }

  /* ---------------- Mobile drawer ---------------- */
  function initNav() {
    const burger = $(".burger");
    if (!burger) return;
    const links = $$(".topnav__links a, .header__nav a");
    const drawer = document.createElement("div");
    drawer.className = "drawer";
    drawer.id = "drawer";
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML =
      `<button class="drawer__close" aria-label="Close menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg></button>
       <nav aria-label="Mobile">${links.map((a) => `<a href="${a.getAttribute("href")}">${esc(a.textContent)}</a>`).join("")}</nav>
       ${navProofHTML()}
       <div class="drawer__foot"><a href="tel:${D.company.phone.replace(/\s/g, "")}">${esc(D.company.phone)}</a>
       <a href="mailto:${D.company.email}">${esc(D.company.email)}</a><span>${esc(D.company.location)}</span></div>`;
    document.body.appendChild(drawer);

    const backdrop = document.createElement("div");
    backdrop.className = "drawer-backdrop";
    document.body.appendChild(backdrop);

    // Desktop: concentrated client avatars in the nav
    if ((D.reviews || []).length) {
      const right = $(".topnav__right");
      if (right) right.insertAdjacentHTML("afterbegin", navClusterHTML());
      // Inner-page header is a 3-col grid; keep the cluster + location in one cell
      const loc = $(".header__loc");
      if (loc && loc.parentNode) {
        const wrap = document.createElement("div");
        wrap.className = "header__right";
        loc.parentNode.insertBefore(wrap, loc);
        wrap.innerHTML = navClusterHTML();
        wrap.appendChild(loc);
      }
    }
    burger.setAttribute("aria-controls", "drawer");
    const set = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      drawer.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("menu-open", open);
    };
    burger.addEventListener("click", () => set(burger.getAttribute("aria-expanded") !== "true"));
    drawer.addEventListener("click", (e) => e.target.closest("a, .drawer__close") && set(false));
    backdrop.addEventListener("click", () => set(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && set(false));

    // Move the hero top-nav out to <body>: the hero sets isolation:isolate,
    // which would otherwise trap the nav's z-index and let later sections
    // paint over it (burger becomes unclickable after scrolling).
    const topnav = $(".topnav");
    if (topnav && topnav.parentElement !== document.body) document.body.appendChild(topnav);

    // Scroll-aware nav: full height at rest, slim while scrolling (home + inner)
    const navEl = topnav || $(".header");
    if (navEl) {
      const cls = topnav ? "topnav--stuck" : "header--stuck";
      const onScroll = () => navEl.classList.toggle(cls, window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("is-in"));
    // Stagger siblings that share a parent so a grid or list flows in, not all at once.
    els.forEach((el) => {
      const sibs = el.parentElement ? [].slice.call(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [el];
      el._stag = Math.min(sibs.indexOf(el), 5) * 70;
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          if (en.target._stag) en.target.style.setProperty("--rev-delay", en.target._stag + "ms");
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  function initCounters() {
    const els = $$(".about__stats b, .band__stats b");
    if (!els.length || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const parse = (t) => { const m = t.match(/^(\d[\d,]*)(.*)$/); return m ? { n: +m[1].replace(/,/g, ""), suf: m[2] } : null; };
    const run = (el, target, suf) => {
      const dur = 1200, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const info = parse(en.target.textContent);
        if (info && info.n > 0) run(en.target, info.n, info.suf);
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------------- Shared options ---------------- */
  const CATS  = unique(D.projects.map((p) => p.cat));
  const LOCS  = unique(D.projects.map((p) => p.location)).sort();
  const YEARS = unique(D.projects.map((p) => p.year)).sort().reverse();
  const opt = (v, label, sel) => `<option value="${esc(v)}"${sel === v ? " selected" : ""}>${esc(label)}</option>`;

  function fillSelect(sel, kind, current) {
    if (!sel) return;
    if (kind === "cat")  sel.innerHTML = opt("", "All categories", current) + CATS.map((t) => opt(t, t, current)).join("");
    if (kind === "loc")  sel.innerHTML = opt("", "All locations", current) + LOCS.map((a) => opt(a, a, current)).join("");
    if (kind === "year") sel.innerHTML = opt("", "Any year", current) + YEARS.map((y) => opt(y, y, current)).join("");
  }

  /* ---------------- Landing ---------------- */
  function cardHTML(p) {
    return `<a class="card reveal" href="project.html?p=${p.slug}" style="--accent:${catColor(p.cat)}">
      <div class="card__media"><img src="${img(p.img)}" alt="${esc(p.name)}" loading="lazy" width="1024" height="768">
        ${tagBadge(p.cat, p.year)}</div>
      <div class="card__body">
        <div class="card__top"><h3 class="card__name">${esc(p.name)}</h3>
          <span class="card__go" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 8h12M9 3l5 5-5 5"/></svg></span></div>
        <p class="card__area">${ICON.pin}${esc(p.location)}, ${esc(D.company.city)}</p>
        <div class="card__specs"><span class="chip chip--cat">${esc(p.cat)}</span><span class="chip chip--yr">${ICON.cal}${esc(p.year)}</span></div>
      </div></a>`;
  }

  function leadHTML(p) {
    return `<a class="flead" href="project.html?p=${p.slug}" style="--accent:${catColor(p.cat)}">
      <div class="flead__media"><img src="${img(p.img)}" alt="${esc(p.name)}" loading="lazy" width="1024" height="768">
        ${tagBadge(p.cat, p.year)}</div>
      <div class="flead__body">
        <span class="flead__kicker">Featured project</span>
        <h3 class="flead__name">${esc(p.name)}</h3>
        <p class="flead__sum">${esc(p.summary)}</p>
        <div class="flead__meta"><span>${ICON.pin}${esc(p.location)}, ${esc(D.company.city)}</span><span>${ICON.cal}${esc(p.year)}</span></div>
        <span class="textlink">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg></span>
      </div></a>`;
  }

  function initLanding() {
    const form = $("#search");
    if (form) {
      fillSelect(form.cat, "cat");
      fillSelect(form.location, "loc");
      fillSelect(form.year, "year");
    }
    // Featured: best project as a large lead card on top, the rest in the grid
    const picked = D.projects.slice(0, 6);
    const leadIdx = Math.max(0, picked.findIndex((p) => p.slug === "dark-reflective-residence"));
    const lead = picked[leadIdx];
    const rest = picked.filter((_, i) => i !== leadIdx);
    const leadEl = $("#featuredLead");
    if (leadEl && lead) leadEl.innerHTML = leadHTML(lead);
    const featured = $("#featured");
    if (featured) featured.innerHTML = rest.map(cardHTML).join("");

    const dg = $("#designGrid");
    if (dg) dg.innerHTML = DESIGNS.map((d) => `
      <figure class="design reveal">
        <div class="design__sheet"><img src="${img(d.img)}" alt="${esc(d.name)} technical drawing" loading="lazy"></div>
        <figcaption><span class="design__no">${esc(d.no)}</span><h3>${esc(d.name)}</h3><p>${esc(d.text)}</p></figcaption>
      </figure>`).join("");
    const steps = $("#steps");
    if (steps) steps.innerHTML = D.journey.map((j, i) => {
      const dark = i === D.journey.length - 1 ? " step--dark" : "";
      const deco = dark ? `<span class="deco deco--truss deco--at-step" aria-hidden="true"></span>` : "";
      return `<article class="step reveal${dark}">
        <img class="step__ambient" src="${img(j.img)}" alt="" aria-hidden="true" loading="lazy">
        <div class="step__media"><img src="${img(j.img)}" alt="${esc(j.title)}" loading="lazy"></div>
        <div class="step__body${dark ? " has-deco" : ""}">${deco}<span class="step__no">0${i + 1}</span><div><h3>${esc(j.title)}</h3><p>${esc(j.text)}</p></div></div>
      </article>`;
    }).join("");

    const logos = $("#heroLogos");
    if (logos && D.clientLogos) {
      const one = D.clientLogos.map((c) =>
        `<span class="logo-chip"><img src="assets/img/clients/${c.file}" alt="${esc(c.name)}" loading="lazy"></span>`).join("");
      logos.innerHTML = one + one;   // two copies for a continuous loop
      initHeroMarquee();
    }

    initReviews();
  }

  /* ---------------- Google reviews section ---------------- */
  function initReviews() {
    const wrap = $("#reviews");
    if (!wrap || !(D.reviews || []).length) return;
    const g = D.google || { rating: 5, count: D.reviews.length, url: "#" };
    const gl = $("#reviewsGoogle");
    if (gl) gl.href = g.url;

    const bar = `
      <div class="rev-bar reveal">
        <div class="rev-bar__score">
          <span class="rev-bar__g">${googleG()} Google</span>
          <b>${g.rating.toFixed(1)}</b>
          <span class="stars rev-bar__stars">${"★".repeat(5)}</span>
          <span class="rev-bar__sub">${g.count} client reviews</span>
        </div>
        <div class="rev-bar__right">
          ${avatarCluster(6)}
          <a class="btn rev-bar__cta" href="${g.url}" target="_blank" rel="noopener">View on Google</a>
        </div>
      </div>`;

    const cards = D.reviews.filter((r) => r.text).map((r) => `
      <article class="rev-card reveal">
        <span class="rev-card__g" aria-hidden="true">${googleG()}</span>
        <span class="stars rev-card__stars">${"★".repeat(r.rating)}</span>
        <p class="rev-card__text">${esc(r.text)}</p>
        <div class="rev-card__person">
          <img class="rev-card__av" src="${revImg(r.avatar)}" alt="${esc(r.name)}" loading="lazy" width="42" height="42">
          <span class="rev-card__id"><b>${esc(r.name)}</b><small>${esc(r.meta)} · ${esc(r.date)}</small></span>
        </div>
      </article>`).join("");

    wrap.innerHTML = bar + `<div class="rev-grid">${cards}</div>`;
  }

  // Google "G" mark (inline SVG, brand four-colour)
  function googleG() {
    return `<svg class="g-mark" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.1-3.8 6.6-9.4 6.6-16.1z"/><path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.1H4.3v5.7C7.9 41.1 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8l7.3-5.7z"/><path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.1 30 2 24 2 15.4 2 7.9 6.9 4.3 14.2l7.3 5.7c1.7-5.2 6.6-9.1 12.4-9.1z"/></svg>`;
  }

  /* ---------------- Hero marquee: auto-flow + drag/swipe to scroll --------- */
  function initHeroMarquee() {
    const m = $(".marquee");
    const track = $(".marquee__track", m || document);
    if (!m || !track) return;
    const half = () => track.scrollWidth / 2;               // width of one logo set
    const wrap = () => {                                     // keep scroll within [0, half) for an endless loop
      const h = half();
      if (h <= 0) return;
      if (m.scrollLeft >= h) m.scrollLeft -= h;
      else if (m.scrollLeft < 0) m.scrollLeft += h;
    };
    let paused = false, dragging = false, startX = 0, startLeft = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      if (!paused && !dragging) { m.scrollLeft += 0.5; wrap(); }  // ~30px/s auto-drift
      requestAnimationFrame(tick);
    };

    m.addEventListener("scroll", wrap, { passive: true });
    m.addEventListener("pointerenter", () => { paused = true; });
    m.addEventListener("pointerleave", () => { paused = false; endDrag(); });

    const endDrag = () => { if (dragging) { dragging = false; m.classList.remove("dragging"); } };
    m.addEventListener("pointerdown", (e) => {
      paused = true;
      if (e.pointerType === "touch") return;                // let native touch scrolling handle it
      dragging = true; m.classList.add("dragging");
      startX = e.clientX; startLeft = m.scrollLeft;
      try { m.setPointerCapture(e.pointerId); } catch (_) {}
    });
    m.addEventListener("pointermove", (e) => { if (dragging) { m.scrollLeft = startLeft - (e.clientX - startX); } });
    m.addEventListener("pointerup", endDrag);
    m.addEventListener("pointercancel", endDrag);
    m.addEventListener("touchstart", () => { paused = true; }, { passive: true });
    m.addEventListener("touchend", () => { paused = false; }, { passive: true });

    if (!reduce) requestAnimationFrame(tick);
  }

  /* ---------------- Projects list ---------------- */
  function initList() {
    const q = new URLSearchParams(location.search);
    const state = { cat: q.get("cat") || "", location: q.get("location") || "", year: q.get("year") || "" };
    const tabs = $("#catTabs");
    tabs.innerHTML = ["", ...CATS].map((t) =>
      `<button class="tab" role="tab" data-cat="${esc(t)}" aria-selected="${state.cat === t}">${t ? esc(t) : "All"}</button>`).join("");
    const fLoc = $("#fLoc"), fYear = $("#fYear");
    fillSelect(fLoc, "loc", state.location);
    fillSelect(fYear, "year", state.year);

    const render = () => {
      const list = D.projects.filter((p) =>
        (!state.cat || p.cat === state.cat) &&
        (!state.location || p.location === state.location) &&
        (!state.year || p.year === state.year));
      $("#count").textContent = `${list.length} ${list.length === 1 ? "project" : "projects"}`;
      $("#plist").innerHTML = list.length ? list.map((p) => `
        <a class="pitem" href="project.html?p=${p.slug}">
          <div class="pitem__media"><img src="${img(p.img)}" alt="${esc(p.name)}" loading="lazy">
            <span class="pitem__status" data-s="${esc(p.status)}"><i></i>${esc(p.status)}</span></div>
          <div class="pitem__head"><h2 class="h-wide">${esc(p.name)}</h2><span class="label" style="padding:0">№${p.no}</span></div>
          <dl class="pitem__rows">
            <div><dt>Category</dt><dd>${esc(p.cat)}</dd></div>
            <div><dt>Location</dt><dd>${esc(p.location)}</dd></div>
            <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
          </dl></a>`).join("")
        : `<p class="empty">No projects match these filters. <a class="textlink" href="projects.html">Clear filters</a></p>`;
      const pr = new URLSearchParams(Object.entries(state).filter(([, v]) => v));
      history.replaceState(null, "", location.pathname + (pr.toString() ? "?" + pr : ""));
    };

    tabs.addEventListener("click", (e) => {
      const b = e.target.closest(".tab"); if (!b) return;
      state.cat = b.dataset.cat;
      $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", String(t === b)));
      render();
    });
    fLoc.addEventListener("change", () => { state.location = fLoc.value; render(); });
    fYear.addEventListener("change", () => { state.year = fYear.value; render(); });
    render();
  }

  /* ---------------- Carousel ---------------- */
  function initCarousel(root) {
    const track = $(".carousel__track", root.closest("section") || document);
    const prev = $(".arrow--prev", root), next = $(".arrow--next", root);
    const bar = $(".progress i", root.closest("section") || document);
    if (!track) return;
    const step = () => { const s = track.children[0]; return s ? s.getBoundingClientRect().width + 36 : 400; };
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      if (bar) {
        const w = Math.max(12, (track.clientWidth / track.scrollWidth) * 100);
        bar.style.width = w + "%";
        bar.style.transform = `translateX(${(p * (100 - w) / w) * 100}%)`;
      }
    };
    prev && prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next && next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------------- Lightbox ---------------- */
  function initLightbox(items) {
    const lb = document.createElement("div");
    lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Project gallery");
    lb.innerHTML = `<div class="lightbox__bar"><span class="label">Gallery · <b class="lb-i">1</b> / ${items.length}</span>
      <button class="lightbox__close" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M3 3l14 14M17 3 3 17"/></svg></button></div>
      <div class="lightbox__stage"><img alt=""></div>
      <div class="lightbox__foot"><p class="lb-cap"></p><div class="arrows">
        <button class="arrow arrow--prev" aria-label="Previous photo"><svg viewBox="0 0 30 10"><path d="M30 5H1M5 1 1 5l4 4"/></svg></button>
        <button class="arrow arrow--next" aria-label="Next photo"><svg viewBox="0 0 30 10"><path d="M0 5h29M25 1l4 4-4 4"/></svg></button></div></div>`;
    document.body.appendChild(lb);
    let i = 0, last = null;
    const show = (n) => {
      i = (n + items.length) % items.length;
      const it = items[i];
      $(".lightbox__stage img", lb).src = img(it.img);
      $(".lightbox__stage img", lb).alt = it.title;
      $(".lb-cap", lb).textContent = it.text ? `${it.title}. ${it.text}` : it.title;
      $(".lb-i", lb).textContent = i + 1;
    };
    const open = (n = 0) => { last = document.activeElement; show(n); lb.classList.add("is-open"); document.body.classList.add("menu-open"); $(".lightbox__close", lb).focus(); };
    const close = () => { lb.classList.remove("is-open"); document.body.classList.remove("menu-open"); last && last.focus(); };
    $(".lightbox__close", lb).addEventListener("click", close);
    $(".arrow--prev", lb).addEventListener("click", () => show(i - 1));
    $(".arrow--next", lb).addEventListener("click", () => show(i + 1));
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(i - 1);
      if (e.key === "ArrowRight") show(i + 1);
    });
    return open;
  }

  /* ---------------- Project page ---------------- */
  function initProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const idx = Math.max(0, D.projects.findIndex((p) => p.slug === slug));
    const p = D.projects[idx];
    const prev = D.projects[(idx - 1 + D.projects.length) % D.projects.length];
    const next = D.projects[(idx + 1) % D.projects.length];
    const city = D.company.city;

    document.title = `${p.name}, Zusly`;
    $("#crumbName").textContent = p.name;
    $("#pTitle").innerHTML = `${esc(p.name)} <span style="white-space:nowrap">№${p.no}</span>`;
    $("#pBack").href = `project.html?p=${prev.slug}`;
    $("#pNext").href = `project.html?p=${next.slug}`;
    $("#pImg").src = img(p.img);
    $("#pImg").alt = p.name;
    if ($("#pStatus")) {
      $("#pStatus").dataset.s = p.status;
      $("#pStatus").insertAdjacentText("beforeend", p.status);
    }
    if ($("#pCap")) {
      $("#pCap").innerHTML =
        `<b>${esc(p.cat)}</b><span>${esc(p.location)}, ${esc(city)}</span><span>${esc(p.year)}</span>`;
    }
    $("#pSummary").textContent = p.summary;

    $("#scopeList").innerHTML = p.scope.map((s) => `<li>${esc(s)}</li>`).join("");

    const rows = [
      ["Category", p.cat],
      ["Location", `${p.location}, ${city}`],
      ["Year", p.year],
      ["Elements", `${p.scope.length} systems`],
      ["Status", p.status],
    ];
    $("#spec").innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("#enquire").href = `contact.html?about=${encodeURIComponent(p.name)}`;
    const waNum = (D.company.whatsapp || "").replace(/\D/g, "");
    if ($("#waBtn")) $("#waBtn").href = `https://wa.me/${waNum}?text=${encodeURIComponent("Hello Zusly, I'd like to discuss a project like " + p.name + ".")}`;

    const gal = p.gallery.map((g, i) => ({ img: g, title: p.name, text: `Image ${i + 1}` }));
    $("#gallery").innerHTML = gal.map((g, i) => `
      <figure class="slide" style="margin:0"><button class="slide__media" style="display:block;width:100%" data-i="${i}" aria-label="Open image ${i + 1}"><img src="${img(g.img)}" alt="${esc(p.name)}, image ${i + 1}" loading="lazy"></button>
      <figcaption class="slide__cap"><span class="label">0${i + 1}</span><div><h3>${esc(p.cat)}</h3><p>${esc(p.location)}, ${city}</p></div></figcaption></figure>`).join("");
    initCarousel($("#galleryNav"));
    const open = initLightbox(gal);
    $("#gallery").addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); b && open(+b.dataset.i); });

    const others = D.projects.filter((x) => x.slug !== p.slug).slice(0, 2);
    $("#more").innerHTML = others.map((o) => `
      <a class="pitem" href="project.html?p=${o.slug}"><div class="pitem__media"><img src="${img(o.img)}" alt="${esc(o.name)}" loading="lazy">
      <span class="pitem__status" data-s="${esc(o.status)}"><i></i>${esc(o.status)}</span></div>
      <div class="pitem__head"><h3 class="h-wide">${esc(o.name)}</h3><span class="label" style="padding:0">№${o.no}</span></div>
      <dl class="pitem__rows"><div><dt>Category</dt><dd>${esc(o.cat)}</dd></div><div><dt>Year</dt><dd>${esc(o.year)}</dd></div></dl></a>`).join("");
  }

  /* ---------------- Services page ---------------- */
  function initServices() {
    const wrap = $("#svcList");
    if (!wrap) return;
    wrap.innerHTML = D.services.map((s, i) => `
      <article class="svc__item reveal" style="--accent:${ACCENTS[i % ACCENTS.length]}">
        <span class="label svc__no">№${esc(s.no)}</span>
        <div class="svc__text">
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.long)}</p>
          <ul class="svc__feats">${s.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </div>
        <a class="svc__media" href="projects.html" aria-label="${esc(s.name)} projects"><img src="${img(s.img)}" alt="${esc(s.name)}" loading="lazy"></a>
      </article>`).join("");
  }

  /* ---------------- About page (leadership, values, clients, story) ---------------- */
  function initAbout() {
    const team = $("#team");
    if (team) team.innerHTML = D.leadership.map((m) => `
      <div class="team__item reveal">
        <span class="team__no">№${m.no}</span>
        <span class="team__icon">${ICON[m.icon] || ICON.people}</span>
        <h3>${esc(m.role)}</h3>
        <p>${esc(m.desc)}</p>
      </div>`).join("");
    const values = $("#values");
    if (values) values.innerHTML = D.values.map((v) => `
      <div class="reveal"><span class="label">${esc(v.label)}</span><h3>${esc(v.title)}</h3><p>${esc(v.desc)}</p></div>`).join("");
    const story = $("#story");
    if (story) story.innerHTML = D.story.map((para) => `<p class="lead">${esc(para)}</p>`).join("");
    const clients = $("#clients");
    if (clients) clients.innerHTML = (D.clientLogos || []).map((c) => `
      <span class="client-logo"><img src="assets/img/clients/${esc(c.file)}" alt="${esc(c.name)}" loading="lazy"></span>`).join("");
  }

  /* ---------------- Contact form → email / WhatsApp ---------------- */
  function initContact() {
    const f = $("#contactForm");
    if (!f) return;
    const el = (n) => f.elements[n];                 // avoids form.name / form.method clashes
    const about = new URLSearchParams(location.search).get("about");
    const svc = el("service");
    svc.innerHTML = opt("", "General enquiry", "") + D.services.map((s) => opt(s.name, s.name, about || "")).join("");
    // If arriving from a project, show it as an option too
    if (about && !D.services.some((s) => s.name === about)) {
      svc.insertAdjacentHTML("beforeend", `<option value="${esc(about)}" selected>${esc(about)}</option>`);
    }

    const validate = () => {
      let ok = true;
      $$("[required]", f).forEach((el) => {
        const err = el.parentElement.querySelector(".err");
        const bad = !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value));
        if (err) err.textContent = bad ? (el.type === "email" && el.value ? "Please enter a valid email." : "This field is required.") : "";
        el.setAttribute("aria-invalid", String(bad));
        if (bad && ok) { el.focus(); ok = false; }
      });
      return ok;
    };
    const body = () => `Name: ${el("name").value}\nPhone: ${el("phone").value}\nEmail: ${el("email").value}\nService: ${svc.value || "General enquiry"}\n\n${el("message").value}`;

    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      location.href = `mailto:${D.company.email}?subject=${encodeURIComponent("Website enquiry: " + (svc.value || "General"))}&body=${encodeURIComponent(body())}`;
    });
    const wa = $("#waSend");
    if (wa) wa.addEventListener("click", () => {
      if (!validate()) return;
      const num = (D.company.whatsapp || "").replace(/\D/g, "");
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(body())}`, "_blank", "noopener");
    });
  }

  /* ---------------- Company details anywhere on the page ---------------- */
  function fillCompany() {
    $$("[data-co]").forEach((el) => {
      const k = el.dataset.co, v = D.company[k];
      if (v == null) return;
      el.textContent = v;
      if (el.tagName === "A" && k === "phone") el.href = "tel:" + v.replace(/\s/g, "");
      if (el.tagName === "A" && k === "email") el.href = "mailto:" + v;
    });
    $$("[data-tel]").forEach((el) => (el.href = "tel:" + D.company.phone.replace(/\s/g, "")));
    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  /* ---------------- Floating WhatsApp button ---------------- */
  function initWhatsApp() {
    const num = (D.company.whatsapp || "").replace(/\D/g, "");
    if (!num) return;
    const a = document.createElement("a");
    a.className = "wa";
    a.href = `https://wa.me/${num}?text=${encodeURIComponent(D.company.whatsappMessage || "")}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat with Zusly on WhatsApp");
    a.innerHTML = `<span class="wa__label">Chat on WhatsApp</span><span class="wa__btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg><span class="wa__dot" aria-hidden="true"></span></span>`;
    document.body.appendChild(a);
    const search = $("#search");
    if (search && "IntersectionObserver" in window) {
      const mq = window.matchMedia("(max-width: 900px)");
      let visible = false;
      const sync = () => a.classList.toggle("wa--tucked", visible && mq.matches);
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(search);
      mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync);
    }
  }

  /* ---------------- Custom select (keeps the native <select> working) ------ */
  function initSelect(sel) {
    if (!sel || sel.dataset.enh) return;
    sel.dataset.enh = "1";
    const host = sel.parentNode;
    host.classList.add("has-cselect");
    const box = document.createElement("div");
    box.className = "cselect";
    host.insertBefore(box, sel);
    box.appendChild(sel);
    sel.classList.add("cselect__native");
    sel.setAttribute("tabindex", "-1");
    sel.setAttribute("aria-hidden", "true");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cselect__btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `<span class="cselect__val"></span><span class="cselect__chev" aria-hidden="true"><svg viewBox="0 0 12 8"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
    const lbl = host.id ? null : host.querySelector("label") || (sel.id && document.querySelector(`label[for="${sel.id}"]`));
    if (lbl && lbl.textContent) btn.setAttribute("aria-label", lbl.textContent.trim());
    box.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "cselect__panel";
    panel.setAttribute("role", "listbox");
    document.body.appendChild(panel);

    const val = btn.querySelector(".cselect__val");
    const sync = () => { const o = sel.options[sel.selectedIndex]; val.textContent = o ? o.textContent : ""; };
    let active = -1;

    const build = () => {
      panel.innerHTML = "";
      Array.from(sel.options).forEach((o, i) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "cselect__opt"; b.setAttribute("role", "option");
        b.dataset.i = i; b.setAttribute("aria-selected", String(i === sel.selectedIndex));
        b.innerHTML = `<span>${esc(o.textContent)}</span>`;
        b.addEventListener("click", () => pick(i));
        b.addEventListener("mousemove", () => { active = i; hl(); });
        panel.appendChild(b);
      });
    };
    const place = () => {
      const r = btn.getBoundingClientRect();
      panel.style.minWidth = Math.max(Math.round(r.width), 172) + "px";
      panel.style.left = Math.round(r.left) + "px";
      const ph = panel.offsetHeight || 240;
      let top = r.bottom + 8;
      if (top + ph > window.innerHeight - 8 && r.top - ph - 8 > 8) top = r.top - ph - 8;
      panel.style.top = Math.round(top) + "px";
    };
    const hl = () => Array.from(panel.children).forEach((c, i) => c.classList.toggle("active", i === active));
    const isOpen = () => panel.classList.contains("open");
    const open = () => {
      if (isOpen()) return;
      build(); place();
      panel.classList.add("open"); btn.setAttribute("aria-expanded", "true");
      active = sel.selectedIndex; hl();
      const sa = panel.children[active]; if (sa) sa.scrollIntoView({ block: "nearest" });
      setTimeout(() => {                         // attach after the opening click settles
        document.addEventListener("pointerdown", onDoc, true);
        window.addEventListener("scroll", onScroll, true);
        window.addEventListener("resize", close);
      }, 0);
    };
    function close() {
      if (!isOpen()) return;
      panel.classList.remove("open"); btn.setAttribute("aria-expanded", "false");
      document.removeEventListener("pointerdown", onDoc, true);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", close);
    }
    function onScroll() { place(); }             // keep the panel pinned to its button
    function onDoc(e) { if (!panel.contains(e.target) && !box.contains(e.target)) close(); }
    function pick(i) {
      if (i < 0 || i >= sel.options.length) return;
      sel.selectedIndex = i; sync();
      sel.dispatchEvent(new Event("change", { bubbles: true }));
      close(); btn.focus();
    }

    btn.addEventListener("click", () => (isOpen() ? close() : open()));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!isOpen()) return open();
        active = Math.max(0, Math.min(sel.options.length - 1, (active < 0 ? sel.selectedIndex : active) + (e.key === "ArrowDown" ? 1 : -1)));
        hl(); panel.children[active] && panel.children[active].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" || e.key === " ") {
        if (isOpen()) { e.preventDefault(); pick(active < 0 ? sel.selectedIndex : active); }
        else if (e.key === "Enter") { e.preventDefault(); open(); }
      } else if (e.key === "Escape") { close(); }
    });
    sel.addEventListener("change", sync);
    sync();
  }

  /* ---------------- Focal-point image framing ----------------
     Each listed photo declares a subject box [L,T,R,B] as % of the native
     image: the glazed structure that must stay visible and clear of overlays.
     The engine picks the object-position that keeps that box in frame and off
     the badges / caption bars, recomputed for the real frame on screen. */
  const FOCUS = {
    "istock-aluminium-door.jpg": [28, 10, 72, 90],
    "482032362_1186614916799945_2651704115299276547_n.jpg": [20, 8, 80, 70],
    "MG_8868-1024x683.jpg": [6, 34, 94, 78],
    "MG_8871-1024x683.jpg": [6, 16, 94, 86],
    "IMG_6209-1024x771.jpg": [22, 26, 78, 82],
    "20250201_165511-1024x768.jpg": [30, 26, 78, 82],
    "20241212_113455-1024x576.jpg": [30, 30, 84, 82],
    "398041177_825967209531386_4498533107683134640_n.jpg": [24, 28, 72, 72],
    "480728001_1186615213466582_21083941017618833_n_2.jpg": [14, 14, 86, 86],
    "20250224_170625-1024x768.jpg": [44, 32, 88, 78],
    "20241212_113315-576x1024.jpg": [24, 14, 82, 66],
    "MG_8873-1024x683.jpg": [10, 20, 90, 82],
    "WhatsApp-Image-2025-04-09-at-8.02.08-PM.jpeg": [10, 40, 90, 86],
    "436305841_959261962868576_399061018664639223_n.jpg": [30, 6, 96, 44],
    "7669f7bb1637b33d4edcd8cbca73df01-1024x768.jpg": [14, 10, 82, 90],
    "20250201_182842-1024x768.jpg": [20, 34, 80, 82],
  };
  // Small opaque overlays the subject must dodge. The hero caption is a
  // full-width translucent gradient (a designed component), so it is not here.
  const FOCUS_OBSTACLES = ".cardtag, .pitem__status, .hero-img__status";

  function frameImage(img) {
    const box = img._focus;
    if (!box) return;
    const fw = img.clientWidth, fh = img.clientHeight;
    const nw = img.naturalWidth, nh = img.naturalHeight;
    if (!fw || !fh || !nw || !nh) return;
    const scale = Math.max(fw / nw, fh / nh);
    const rw = nw * scale, rh = nh * scale;
    const ox = rw - fw, oy = rh - fh;
    const sL = box[0] / 100 * rw, sT = box[1] / 100 * rh, sR = box[2] / 100 * rw, sB = box[3] / 100 * rh;
    const subA = Math.max(1, (sR - sL) * (sB - sT));
    const fr = img.getBoundingClientRect();
    const obs = [];
    const host = img.closest(".card__media, .pitem__media, .hero-img, .flead__media") || img.parentElement;
    host && host.querySelectorAll(FOCUS_OBSTACLES).forEach((o) => {
      const r = o.getBoundingClientRect();
      obs.push({ l: r.left - fr.left, t: r.top - fr.top, r: r.right - fr.left, b: r.bottom - fr.top });
    });
    const N = 22;
    const xs = ox > 1 ? N : 0, ys = oy > 1 ? N : 0;
    let bx = 0.5, by = 0.5, bestCost = Infinity;
    for (let i = 0; i <= xs; i++) {
      for (let j = 0; j <= ys; j++) {
        const px = xs ? i / xs : 0.5, py = ys ? j / ys : 0.5;
        const offX = px * ox, offY = py * oy;
        const l = sL - offX, t = sT - offY, r = sR - offX, b = sB - offY;
        const inA = Math.max(0, Math.min(r, fw) - Math.max(l, 0)) * Math.max(0, Math.min(b, fh) - Math.max(t, 0));
        const outside = subA - inA;
        let covered = 0;
        for (let k = 0; k < obs.length; k++) {
          const o = obs[k];
          covered += Math.max(0, Math.min(r, o.r) - Math.max(l, o.l)) * Math.max(0, Math.min(b, o.b) - Math.max(t, o.t));
        }
        const cx = (l + r) / 2 / fw - 0.5, cy = (t + b) / 2 / fh - 0.5;
        const cost = 1000 * (outside + covered) + (cx * cx + cy * cy) * subA;
        if (cost < bestCost) { bestCost = cost; bx = px; by = py; }
      }
    }
    img.style.objectPosition = `${(bx * 100).toFixed(1)}% ${(by * 100).toFixed(1)}%`;
  }

  function initFraming() {
    $$("img").forEach((img) => {
      if (img._focus !== undefined) return;
      img._focus = FOCUS[(img.getAttribute("src") || "").split("/").pop().split("?")[0]] || null;
    });
    const runAll = () => $$("img").forEach((img) => img._focus && frameImage(img));
    $$("img").forEach((img) => {
      if (!img._focus) return;
      if (img.complete && img.naturalWidth) frameImage(img);
      else img.addEventListener("load", () => frameImage(img), { once: true });
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(runAll);
    setTimeout(runAll, 1200);
    let t; window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(runAll, 120); }, { passive: true });
    // Frame lazy images as they approach the viewport (below-the-fold cards).
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => { if (e.isIntersecting && e.target.complete && e.target.naturalWidth) frameImage(e.target); });
      }, { rootMargin: "250px" });
      $$("img").forEach((img) => { if (img._focus) io.observe(img); });
    }
  }

  fillCompany();
  initNav();
  initWhatsApp();
  if (page === "home") initLanding();
  if (page === "list") initList();
  if (page === "project") initProject();
  if (page === "services") initServices();
  if (page === "about") initAbout();
  if (page === "contact") initContact();
  $$("select").forEach(initSelect);
  $$("[data-carousel]").forEach(initCarousel);
  initReveal();
  initCounters();
  initFraming();
})();
