from site_icons import icon

SITE_NAME = "Strong 8K"
SITE_FULL = "Strong 8K IPTV"
DOMAIN = "strong8k.com.co"
SUPPORT_EMAIL = "support@strong8k.com.co"
WHATSAPP_NUMBER = "447000000000"  # TODO: replace with the real WhatsApp number
DOWNLOADER_CODE = "1646512"


def wa(msg=""):
    from urllib.parse import quote
    base = f"https://wa.me/{WHATSAPP_NUMBER}"
    return f"{base}?text={quote(msg)}" if msg else base


def mail(subject=""):
    from urllib.parse import quote
    return f"mailto:{SUPPORT_EMAIL}?subject={quote(subject)}" if subject else f"mailto:{SUPPORT_EMAIL}"


NAV = [
    ("Home", "index.html"),
    ("IPTV Subscription", "iptv-subscription.html"),
    ("App / Player", "strong-8k-app.html"),
    ("Installation", "strong-8k-iptv-installation.html"),
    ("Reseller", "strong-8k-reseller-panel.html"),
    ("Contact Us", "contact-us.html"),
]


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def head(title, description, canonical):
    return f'''<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(description)}">
  <link rel="canonical" href="https://{DOMAIN}/{canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="{SITE_FULL}">
  <meta property="og:title" content="{esc(title)}">
  <meta property="og:description" content="{esc(description)}">
  <meta property="og:image" content="https://{DOMAIN}/assets/img/og-image.svg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">'''


def header_nav(active):
    def nav_link(label, href):
        active_cls = ' class="is-active"' if href == active else ""
        return f'<a href="{href}"{active_cls}>{label}</a>'

    links = "\n        ".join(nav_link(label, href) for label, href in NAV)
    mobile_links = "\n        ".join(
        f'<a href="{href}">{label}</a>' for label, href in NAV
    )
    return f'''<header class="site-header">
    <div class="container">
      <a href="index.html" class="brand">
        <span class="brand-mark">S8</span>
        <span class="brand-name">Strong<span> 8K</span></span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        {links}
      </nav>
      <div class="header-cta">
        <a class="btn btn-outline" href="{wa("Hi Strong 8K, I would like to know more.")}" target="_blank" rel="noreferrer">{icon("whatsapp", 16)} WhatsApp</a>
        <a class="btn btn-primary" href="iptv-subscription.html">Get Started</a>
      </div>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        {icon("list", 20)}
      </button>
    </div>
    <div class="mobile-nav">
      {mobile_links}
      <div class="btn-row">
        <a class="btn btn-outline btn-block" href="{wa()}" target="_blank" rel="noreferrer">{icon("whatsapp", 16)} WhatsApp</a>
        <a class="btn btn-primary btn-block" href="iptv-subscription.html">Get Started</a>
      </div>
    </div>
  </header>'''


def footer():
    return f'''<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="index.html" class="brand">
            <span class="brand-mark">S8</span>
            <span class="brand-name">Strong<span> 8K</span></span>
          </a>
          <p>Strong 8K IPTV brings live TV, sports, movies and series together in one flexible IPTV service — across the devices you already use.</p>
          <div class="footer-contact">
            <a href="{wa()}" target="_blank" rel="noreferrer">{icon("whatsapp", 16)} WhatsApp Support</a>
            <a href="{mail()}">{icon("mail", 16)} {SUPPORT_EMAIL}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="iptv-subscription.html">IPTV Subscription</a></li>
            <li><a href="strong-8k-app.html">Strong 8K App &amp; Player</a></li>
            <li><a href="strong-8k-iptv-installation.html">Installation Guide</a></li>
            <li><a href="strong-8k-reseller-panel.html">Reseller Panel</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="index.html#faq">FAQs</a></li>
            <li><a href="strong-8k-iptv-installation.html">Setup &amp; Installation</a></li>
            <li><a href="strong-8k-iptv-installation.html#troubleshooting">Troubleshooting</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 {SITE_FULL}. All rights reserved.</p>
        <p>Content, sports coverage and picture quality are subject to availability, source and device support.</p>
      </div>
    </div>
  </footer>
  <script src="assets/js/main.js"></script>'''


def sec(inner_html, alt=False, tight=False, container="container", id_attr=None):
    cls = "section"
    if alt:
        cls += " section--alt"
    if tight:
        cls += " section--tight"
    idattr = f' id="{id_attr}"' if id_attr else ""
    return f'<section class="{cls}"{idattr}><div class="{container}">{inner_html}</div></section>'


# ---------------------------------------------------------------- building blocks

def eyebrow(text):
    return f'<span class="eyebrow">{esc(text)}</span>'


def section_head(eyebrow_text, title, desc=None, align="center"):
    cls = "section-head" if align == "center" else "section-head section-head--left"
    out = f'<div class="{cls}">'
    if eyebrow_text:
        out += eyebrow(eyebrow_text)
    out += f"<h2>{title}</h2>"
    if desc:
        out += f"<p>{desc}</p>"
    out += "</div>"
    return out


def btn(label, href, style="primary", ic=None, blank=False):
    cls = {"primary": "btn-primary", "outline": "btn-outline", "gold-light": "btn-gold-light"}[style]
    target = ' target="_blank" rel="noreferrer"' if blank else ""
    ic_html = icon(ic, 16) + " " if ic else ""
    return f'<a class="btn {cls}" href="{href}"{target}>{ic_html}{esc(label)}</a>'


def btn_row(buttons, center=True):
    cls = "btn-row btn-row--center" if center else "btn-row"
    return f'<div class="{cls}">{"".join(buttons)}</div>'


def hero_split(eyebrow_text, title_html, desc, buttons, meta=None):
    meta_html = ""
    if meta:
        sep = '<span class="dot-sep"></span>'
        parts = [f"<span>{m}</span>" for m in meta]
        meta_html = f'<div class="hero-meta">{sep.join(parts)}</div>'
    return f'''<section class="hero">
    <div class="hero-grid"></div>
    <div class="container">
      <div class="hero-split">
        <div class="hero-copy">
          <span class="live-badge"><span class="live-dot"></span>{esc(eyebrow_text)}</span>
          <h1>{title_html}</h1>
          <p>{desc}</p>
          {btn_row(buttons, center=False)}
          {meta_html}
        </div>
        {tv_mockup()}
      </div>
    </div>
  </section>'''


def hero_centered(badge_text, accent_words, rest_words, desc, buttons, stats):
    stat_items = [f'<div class="hero-stat"><span class="hero-stat-num">{esc(v)}</span><span class="hero-stat-label">{esc(l)}</span></div>' for v, l in stats]
    sep = '<span class="hero-stat-sep" aria-hidden="true"></span>'
    stats_html = f'<div class="hero-stats">{sep.join(stat_items)}</div>' if stat_items else ""
    pill_buttons = [b.replace('class="btn ', 'class="btn btn--pill ', 1) for b in buttons]
    return f'''<section class="hero hero-centered">
    <div class="hero-centered-bg" aria-hidden="true"></div>
    <div class="hero-centered-overlay" aria-hidden="true"></div>
    <div class="container">
      <div class="hero-centered-inner">
        <span class="hero-badge"><span class="hero-badge-dot"></span>{esc(badge_text)}</span>
        <h1><span class="accent">{esc(accent_words)}</span> {esc(rest_words)}</h1>
        <span class="hero-underline" aria-hidden="true"></span>
        <p>{desc}</p>
        {btn_row(pill_buttons, center=True)}
        {stats_html}
      </div>
    </div>
  </section>'''


def marquee_rows(row1_items, row2_items, note=None):
    def chips(items):
        return "".join(f'<span class="marquee-chip"><span class="marquee-chip-dot"></span>{esc(t)}</span>' for t in items)

    def track(items):
        # duplicated once so the 0%/-50% keyframes loop seamlessly
        return f'<div class="marquee-track">{chips(items)}{chips(items)}</div>'

    note_html = f'<p class="marquee-note">{note}</p>' if note else ""
    return f'''<div class="marquee">
      <div class="marquee-row marquee-row--ltr">{track(row1_items)}</div>
      <div class="marquee-row marquee-row--rtl">{track(row2_items)}</div>
    </div>
    {note_html}'''


def trial_offer_split(stat_num, stat_unit, stat_label, stat_note, eyebrow_text, title, desc, intro, items, closing, btn_label, btn_href):
    items_html = "".join(f'<li><span class="dash" aria-hidden="true"></span>{esc(t)}</li>' for t in items)
    return f'''<div class="trial-split">
      <div class="trial-split__left">
        <span class="trial-split__label">{esc(stat_label)}</span>
        <div class="trial-split__ring"><span class="trial-split__num">{esc(stat_num)}</span><span class="trial-split__unit">{esc(stat_unit)}</span></div>
        <span class="trial-split__note">{stat_note}</span>
      </div>
      <div class="trial-split__right">
        <span class="trial-split__eyebrow">{esc(eyebrow_text)}</span>
        <h2>{esc(title)}</h2>
        <p>{desc}</p>
        <p class="trial-split__intro"><strong>{esc(intro)}</strong></p>
        <ul class="trial-split__checklist">{items_html}</ul>
        <p>{closing}</p>
        <div class="mt-lg">{btn(btn_label, btn_href, "gold-light", blank=True)}</div>
      </div>
    </div>'''


def hero_simple(eyebrow_text, title, desc, buttons):
    return f'''<section class="hero">
    <div class="hero-grid"></div>
    <div class="container">
      <div class="hero-simple">
        <div class="hero-copy">
          {eyebrow(eyebrow_text)}
          <h1>{title}</h1>
          <p>{desc}</p>
          {btn_row(buttons)}
        </div>
      </div>
    </div>
  </section>'''


def tv_mockup():
    tiles = [("1", "LIVE"), ("2", "SPORT"), ("3", "PPV"), ("4", "VOD"), ("5", "4K"), ("6", "EPG")]
    tiles_html = "".join(
        f'<div class="tv-tile tv-tile--{n}">{icon("play", 18)}<span>{label}</span></div>'
        for n, label in tiles
    )
    return f'''<div class="tv-wrap">
          <div class="tv-mockup">
            <div class="tv-mockup-bar">
              <span class="brand-mini">Strong 8K</span>
              <span class="badge-8k">8K</span>
            </div>
            <div class="tv-grid">{tiles_html}</div>
            <div class="tv-mockup-foot">
              <div class="tv-progress"></div>
              <small>Now Streaming</small>
            </div>
          </div>
          <div class="tv-stand"></div>
          <div class="tv-base"></div>
        </div>'''


def promo_strip(html):
    return f'<section class="promo-strip"><div class="container">{html}</div></section>'


def icon_card(icon_name, title, desc):
    return f'''<div class="card icon-card">
      <div class="icon-box">{icon(icon_name, 20)}</div>
      <h3>{esc(title)}</h3>
      <p>{desc}</p>
    </div>'''


def device_card(icon_name, label):
    return f'''<div class="card icon-card device-card">
      <div class="icon-box">{icon(icon_name, 22)}</div>
      <h3>{esc(label)}</h3>
    </div>'''


def feature_grid(items, cols=3):
    cards = "".join(icon_card(i, t, d) for i, t, d in items)
    return f'<div class="grid grid--{cols}">{cards}</div>'


def pill_row(items):
    pills = "".join(f'<span class="pill">{esc(t)}</span>' for t in items)
    return f'<div class="pill-row">{pills}</div>'


def price_card(name, price, period, monthly, best_for, href, featured=False):
    perks = [
        "Live TV, sports, movies &amp; series",
        "VOD library access",
        "EPG &amp; catch-up where supported",
        "Multi-device compatibility",
        "WhatsApp &amp; email support",
    ]
    perks_html = "".join(f'<li>{icon("check", 15)}{p}</li>' for p in perks)
    badge = '<span class="price-badge">Most Popular</span>' if featured else ""
    cls = "price-card price-card--featured" if featured else "price-card"
    button_style = "gold-light" if featured else "outline"
    return f'''<div class="{cls}">
      {badge}
      <p class="plan-name">{esc(name)} IPTV Subscription</p>
      <div class="plan-price"><span class="amount">{price}</span><span class="period">/ {period}</span></div>
      <p class="plan-monthly">{monthly}</p>
      <p class="plan-best">{esc(best_for)}</p>
      <ul class="plan-perks">{perks_html}</ul>
      {btn(f"Choose {name}", href, button_style)}
    </div>'''


def savings_pct(plan, base_monthly):
    """% saved vs. paying the 1-month rate for that many months, from real prices."""
    months = int(plan["duration"].split()[0]) if "Month" in plan["duration"] else 12
    price = float(plan["price"].replace("£", ""))
    baseline = base_monthly * months
    return round((1 - price / baseline) * 100)


def pricing_showcase(plans, cta_href, compare_href, included, id_attr="plans"):
    base_monthly = float(plans[0]["price"].replace("£", ""))
    featured = next((p for p in plans if p.get("featured")), plans[0])

    cards = []
    for i, p in enumerate(plans):
        pct = savings_pct(p, base_monthly) if p is not plans[0] else None
        is_featured = p.get("featured", False)
        save_badge = f'<span class="save-badge">Save {pct}%</span>' if pct else ""
        popular = '<span class="popular-tag">Most Popular</span>' if is_featured else ""
        cards.append(f'''<button type="button" class="plan-tile{" is-active" if is_featured else ""}"
        data-name="{esc(p['name'])}" data-duration="{esc(p['duration'])}" data-price="{p['price']}"
        data-monthly="{esc(p['monthly'])}" data-href="{cta_href}">
      {popular}
      <span class="plan-tile-name">{esc(p['name'])}</span>
      {save_badge}
      <span class="plan-tile-price">{p['price']}</span>
    </button>''')

    included_html = "".join(f'<li>{icon("check", 15)}{esc(item)}</li>' for item in included)

    script = f'''<script>
(function() {{
  var root = document.getElementById("{id_attr}");
  if (!root) return;
  var tiles = root.querySelectorAll(".plan-tile");
  var title = root.querySelector("[data-role=pd-title]");
  var sub = root.querySelector("[data-role=pd-sub]");
  var cta = root.querySelector("[data-role=pd-cta]");
  tiles.forEach(function(t) {{
    t.addEventListener("click", function() {{
      tiles.forEach(function(x) {{ x.classList.remove("is-active"); }});
      t.classList.add("is-active");
      title.textContent = t.dataset.duration;
      sub.textContent = t.dataset.name + " plan \\u2014 " + t.dataset.price + " (" + t.dataset.monthly + ")";
      cta.textContent = "Get " + t.dataset.duration;
      cta.setAttribute("href", t.dataset.href);
    }});
  }});
  var end = new Date();
  end.setMonth(end.getMonth() + 1, 0);
  end.setHours(23, 59, 59, 0);
  var elH = root.querySelector("[data-role=cd-h]"), elM = root.querySelector("[data-role=cd-m]"), elS = root.querySelector("[data-role=cd-s]");
  function tick() {{
    var diff = Math.max(0, end - new Date());
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    if (elH) elH.textContent = String(h).padStart(2, "0");
    if (elM) elM.textContent = String(m).padStart(2, "0");
    if (elS) elS.textContent = String(s).padStart(2, "0");
  }}
  tick();
  setInterval(tick, 1000);
}})();
</script>'''

    max_pct = max(savings_pct(p, base_monthly) for p in plans if p is not plans[0])

    return f'''<div id="{id_attr}" class="pricing-showcase">
  <div class="offer-bar">
    {icon("clock", 15)} Up to <strong>{max_pct}% off</strong> longer plans &mdash; recalculated monthly, ends in
    <span class="offer-countdown">
      <span data-role="cd-h">00</span>:<span data-role="cd-m">00</span>:<span data-role="cd-s">00</span>
    </span>
  </div>

  <div class="plan-tiles">{"".join(cards)}</div>

  <div class="plan-detail">
    <h3 data-role="pd-title">{featured['duration']}</h3>
    <p class="plan-detail-sub" data-role="pd-sub">{esc(featured['name'])} plan &mdash; {featured['price']} ({featured['monthly']})</p>
    <a class="btn btn-gold-light btn-block" data-role="pd-cta" href="{cta_href}">Get {featured['duration']}</a>
    <p class="included-label">What&rsquo;s Included</p>
    <ul class="included-checklist">{included_html}</ul>
  </div>

  <div class="text-center">
    <a class="inline-link" href="{compare_href}">Compare all plans {icon("arrow-right", 14)}</a>
  </div>
</div>
{script}'''


def reseller_card(name, credits_, best_for, href, featured=False):
    cls = "reseller-card reseller-card--featured" if featured else "reseller-card"
    badge = '<span class="price-badge">Best Value</span>' if featured else ""
    button_style = "gold-light" if featured else "outline"
    return f'''<div class="{cls}">
      {badge}
      <div class="icon-box">{icon("coins", 20)}</div>
      <h3>{esc(name)}</h3>
      <p class="credits">{esc(credits_)}</p>
      <p class="plan-best">{esc(best_for)}</p>
      {btn(f"Choose {name}", href, button_style, blank=href.startswith("http"))}
    </div>'''


def data_table(headers, rows, highlight_col=None):
    th = "".join(f"<th>{esc(h)}</th>" for h in headers)
    trs = ""
    for r in rows:
        tds = "".join(
            f'<td class="{"highlight" if i == highlight_col else ""}">{c}</td>'
            for i, c in enumerate(r)
        )
        trs += f"<tr>{tds}</tr>"
    return f'''<div class="table-wrap">
      <table class="data-table">
        <thead><tr>{th}</tr></thead>
        <tbody>{trs}</tbody>
      </table>
    </div>'''


def faq_list(items, id_attr=None):
    idattr = f' id="{id_attr}"' if id_attr else ""
    faqs = "".join(
        f'''<details class="faq-item">
      <summary>{esc(q)}</summary>
      <div class="faq-answer">{a}</div>
    </details>'''
        for q, a in items
    )
    return f'<div class="faq-list"{idattr}>{faqs}</div>'


def step(n, title, desc):
    return f'''<div class="step">
      <div class="step-marker">
        <div class="step-num">{n}</div>
        <div class="step-line"></div>
      </div>
      <div class="step-body"><h3>{esc(title)}</h3><p>{desc}</p></div>
    </div>'''


def steps(items):
    return '<div class="steps">' + "".join(step(i + 1, t, d) for i, (t, d) in enumerate(items)) + "</div>"


def check_list(items):
    lis = "".join(f"<li>{icon('check', 16)}{esc(t)}</li>" for t in items)
    return f'<ul class="check-list">{lis}</ul>'


def num_list(items):
    lis = "".join(f'<li><span class="num">{i+1}</span>{esc(t)}</li>' for i, t in enumerate(items))
    return f'<ul class="num-list">{lis}</ul>'


def cta_section(title, desc, primary_label, primary_href, secondary_label, secondary_href, secondary_blank=True):
    return f'''<section class="cta-section">
    <div class="container container--tight">
      <div class="cta-box">
        <h2>{esc(title)}</h2>
        <p>{desc}</p>
        {btn_row([btn(primary_label, primary_href, "gold-light"), btn(secondary_label, secondary_href, "outline", blank=secondary_blank)])}
      </div>
    </div>
  </section>'''


def code_box(code):
    return f'''<div class="card code-box">
      <p class="code-label">8K Pro App Downloader Code</p>
      <p class="code-value">{code}</p>
      <p>If you are installing the 8K Pro app through Downloader, enter the current Strong 8K Downloader code provided by our support team or official installation instructions.</p>
      <p class="code-warning">{icon("alert", 16)}Downloader codes can change — always use the latest code published by Strong 8K.</p>
    </div>'''


def review_placeholder():
    stars = icon("star", 20) * 5
    return f'''<div class="card review-card">
      <div class="stars">{stars}</div>
      <p>Verified customer reviews are coming soon. Have you used Strong 8K IPTV? Share your experience with our support team and we may feature it here.</p>
      {btn("Share Your Feedback", wa("Hi Strong 8K, I would like to share a review."), "outline", blank=True)}
    </div>'''


def page(title, description, canonical, active_nav, body_sections):
    return f'''<!doctype html>
<html lang="en">
<head>
  {head(title, description, canonical)}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  {header_nav(active_nav)}
  <main id="main">
    {"".join(body_sections)}
  </main>
  {footer()}
</body>
</html>'''
