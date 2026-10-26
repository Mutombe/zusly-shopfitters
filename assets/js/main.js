/* Zusly Shopfitters & Projects - site behaviour */
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
       <div class="drawer__foot"><a href="tel:${D.company.phone.replace(/\s/g, "")}">${esc(D.company.phone)}</a>
       <a href="mailto:${D.company.email}">${esc(D.company.email)}</a><span>${esc(D.company.location)}</span></div>`;
    document.body.appendChild(drawer);
    burger.setAttribute("aria-controls", "drawer");
    const set = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      drawer.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("menu-open", open);
    };
    burger.addEventListener("click", () => set(burger.getAttribute("aria-expanded") !== "true"));
    drawer.addEventListener("click", (e) => e.target.closest("a, .drawer__close") && set(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && set(false));
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("is-in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
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
})();
