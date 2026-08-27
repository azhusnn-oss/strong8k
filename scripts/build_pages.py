import os, sys
sys.path.insert(0, os.path.dirname(__file__))
from site_components import *

OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PLANS = [
    dict(name="1 Month", duration="1 Month", price="£14.99", monthly="£14.99/month", best_for="Short-term viewing"),
    dict(name="3 Months", duration="3 Months", price="£24.99", monthly="£8.33/month", best_for="Occasional or regular viewing"),
    dict(name="6 Months", duration="6 Months", price="£39.99", monthly="£6.67/month", best_for="Regular viewers", featured=True),
    dict(name="1 Year", duration="12 Months", price="£59.99", monthly="£5.00/month", best_for="Long-term viewing, lowest average cost"),
]

RESELLER_PACKAGES = [
    dict(name="Starter", credits="120 Credits", best_for="New and small-scale resellers"),
    dict(name="Basic", credits="360 Credits", best_for="Growing IPTV resellers", featured=True),
    dict(name="Premium", credits="1,000 Credits", best_for="High-volume resellers"),
]

DEVICES = [
    ("tv", "Smart TVs", "Compatible IPTV player app"),
    ("firestick", "Amazon Firestick / Fire TV", "8K Pro app or compatible IPTV player"),
    ("tv", "Android TV", "8K Pro app or compatible IPTV player"),
    ("mobile", "Android Phones & Tablets", "Compatible IPTV application"),
    ("apple", "iPhone & iPad", "Compatible iOS IPTV player"),
    ("box", "IPTV Boxes", "8K Pro app or compatible Android IPTV player"),
    ("tv", "Samsung Smart TV", "Compatible Samsung IPTV player"),
    ("tv", "LG Smart TV", "Compatible LG IPTV player"),
    ("laptop", "Windows PC", "Compatible IPTV application"),
]

SPORTS = ["Premier League", "UEFA Competitions", "Boxing", "PPV Events", "NBA", "MLB", "Football Leagues", "Basketball"]

HERO_STATS = [
    ("40,000+", "Live Channels"),
    ("VOD", "Movies & Series"),
    ("HD · 4K · 8K", "Picture Quality"),
    ("24/7", "WhatsApp & Email Support"),
]

LEAGUES_ROW_1 = [
    "Premier League", "NBA", "UEFA Champions League", "NFL", "FA Cup", "MLB",
    "EFL Championship", "NHL", "Six Nations Rugby", "UFC", "Carabao Cup", "PGA Tour",
]
LEAGUES_ROW_2 = [
    "UEFA Europa League", "MLS", "World Snooker", "NCAA Football", "PDC Darts", "WWE",
    "Scottish Premiership", "NASCAR", "The Ashes Cricket", "NCAA Basketball", "ATP Tour", "Boxing PPV",
]


INCLUDED = [
    "Reliable live TV streaming",
    "HD, Full HD and 4K where supported",
    "Live sports and PPV events included",
    "Movies and series via VOD",
    "EPG / TV guide included",
    "Works on Smart TV, Firestick, mobile and more",
    "Simple setup guide provided",
    "WhatsApp and email support",
]


def pricing_grid(cta_href="iptv-subscription.html#plans"):
    cards = "".join(price_card(p["name"], p["price"], p["duration"], p["monthly"], p["best_for"], cta_href, p.get("featured", False)) for p in PLANS)
    return f'<div class="pricing-grid">{cards}</div>'


# ================================================================== HOME
def build_home():
    s = []
    s.append(hero_centered(
        "Welcome To Strong 8K IPTV",
        "Strong 8K IPTV",
        "Delivers The Best IPTV Subscription In The UK",
        "Strong 8K IPTV delivers a premium streaming experience &mdash; access thousands of live channels in HD, "
        "4K and 8K UHD, a full VOD library of movies and series, and live sports from around the world. "
        "Compatible with all your devices, with WhatsApp and email support whenever you need it.",
        [btn("View Subscription Plans", "iptv-subscription.html", "primary", "arrow-right"),
         btn("Start IPTV Trial", wa("Hi Strong 8K, I'd like to start a trial."), "outline", blank=True)],
        stats=HERO_STATS,
    ))

    # 2. Trial & Special Offer
    s.append(sec(
        trial_offer_split(
            "24", "HOURS", "FULL ACCESS FOR", "£0 &middot; No card needed",
            "FREE TRIAL", "Try Strong 8K IPTV Free for 24 Hours",
            "Why take anyone's word for it? Test the full Strong 8K service on your own device, "
            "your own broadband, at your own pace &mdash; completely free for 24 hours.",
            "Your trial includes everything a paid plan does:",
            [
                "The complete 40,000+ channel list",
                "Real picture quality — HD, 4K and 8K UHD",
                "Full access to the VOD library",
                "Genuine peak-time performance, not a demo server",
            ],
            "No card details. No commitment. If you like what you see &mdash; and we think you will "
            "&mdash; upgrading to a full plan takes one message.",
            "Start free trial →", wa("Hi Strong 8K, I'd like to start my free 24-hour trial."),
        ),
        alt=True,
    ))

    # 3. Strong 8K IPTV Subscription Plans
    s.append(sec(
        section_head("2. Subscription Plans", "Strong 8K IPTV Subscription Plans",
            "Choose a subscription based on how long you want to use the service. Strong 8K IPTV offers "
            "flexible plans for different viewing needs.")
        + pricing_showcase(PLANS, "iptv-subscription.html", "iptv-subscription.html#compare", INCLUDED, id_attr="home-plans")
        + '<p class="divider-note">Choose a shorter plan if you want flexibility, or select the annual IPTV subscription for longer-term access.</p>'
    ))

    # 4. What You Get With Strong 8K IPTV
    s.append(sec(
        section_head("3. What You Get", "What You Get With Strong 8K IPTV", None)
        + f'''<div style="max-width:760px;margin-inline:auto;display:flex;flex-direction:column;gap:16px">
      <p style="text-align:center">Strong 8K IPTV brings live TV, sports, movies, series and VOD together in one service &mdash;
      including the Premier League, UEFA competitions, boxing, PPV, MLB and NBA, subject to availability, plus
      flexible picture quality, EPG and catch-up support.</p>
    </div>'''
        + marquee_rows(LEAGUES_ROW_1, LEAGUES_ROW_2,
            note="And <strong>40,000+ more channels</strong> &mdash; sports, entertainment, news, kids, "
                 "international &amp; VOD included in every plan."),
        alt=True,
    ))

    # 5. Compatible Devices
    home_devices = [
        ("tv", "Smart TVs"),
        ("firestick", "Amazon Firestick / Fire TV"),
        ("tv", "Android TV"),
        ("mobile", "Android Phones & Tablets"),
        ("apple", "iPhone & iPad"),
        ("box", "IPTV Boxes"),
        ("laptop", "IPTV Players"),
    ]
    device_cards = "".join(device_card(i, n) for i, n in home_devices)
    s.append(sec(
        section_head("4. Compatible Devices", "Compatible Devices",
            'Strong 8K IPTV supports a range of popular streaming hardware and player environments, including '
            'Smart TVs, Firestick, Android TV, mobile devices and IPTV boxes. Our '
            '<a href="strong-8k-iptv-installation.html">setup guide</a> provides device-specific instructions '
            'so you can choose the installation method that matches your equipment.',
            align="left")
        + f'<div class="grid grid--5">{device_cards}</div>',
    ))

    # 6. Why Choose Strong 8K IPTV?
    why = [
        ("gauge", "Flexible Subscription Options", "Choose from monthly, 3-month, 6-month and annual plans."),
        ("layers", "Broad Entertainment Choice", "Live TV, sports, movies and series are available through one IPTV service."),
        ("trophy", "Sports-Focused Viewing", "Follow popular football competitions, boxing, PPV events and other major sports."),
        ("wifi", "Multi-Device Flexibility", "Use compatible devices at home or on mobile."),
        ("sparkles", "Simple IPTV Setup", "Configure the service through a supported IPTV player on your device."),
        ("headset", "Support When You Need It", "Get assistance through WhatsApp and email for setup and subscription questions."),
        ("grid", "Choice Of IPTV Players", "Use a compatible application that suits your preferred device and viewing setup."),
    ]
    s.append(sec(section_head("5. Why Strong 8K", "Why Choose Strong 8K IPTV?", align="left") + feature_grid(why), alt=True))

    # 7. Strong 8K IPTV Features
    features10 = [
        ("tv", "Live TV Streaming", "Watch available live television channels over an internet connection."),
        ("trophy", "Sports Coverage", "Access available sports programming, including football, boxing, basketball and other competitions."),
        ("film", "VOD Library", "Browse available movies and series through video-on-demand content."),
        ("guide", "Electronic Programme Guide (EPG)", "View programme information where EPG data is supported."),
        ("clock", "Catch-Up TV", "Watch previously broadcast programmes where catch-up is available."),
        ("mobile", "Multiple Device Support", "Set up the service on compatible TVs, streaming devices, phones and IPTV boxes."),
        ("sparkles", "HD, Full HD & 4K Content", "Available picture quality depends on the source, device and content."),
        ("laptop", "IPTV Player Compatibility", "Configure Strong 8K through supported IPTV applications."),
        ("gauge", "Flexible Plans", "Select a subscription period that matches your viewing requirements."),
        ("headset", "Customer Support", "Contact the support team through WhatsApp or email for assistance."),
    ]
    s.append(sec(section_head("6. Features", "Strong 8K IPTV Features") + feature_grid(features10, cols=4)))

    # 8. Strong 8K IPTV Reviews
    s.append(sec(
        section_head("7. Customer Reviews", "Strong 8K IPTV Reviews",
            "We value feedback from customers who use Strong 8K IPTV. Genuine customer reviews can help new "
            "users understand the setup process, service experience and support available.")
        + review_placeholder()
        + '<p class="divider-note">Customer reviews should be added here using verified feedback only. We do not publish invented testimonials or ratings.</p>',
        alt=True,
    ))

    # 9. FAQ
    faqs = [
        ("What is Strong 8K IPTV?", "Strong 8K IPTV is an IPTV service that delivers live television, sports, movies and series over an internet connection. It can be configured on compatible Smart TVs, streaming devices, mobile devices and IPTV players."),
        ("What does a Strong 8K IPTV subscription include?", "A subscription provides access to the content and features included with your selected plan. Depending on availability, this can include live TV, sports, VOD, movies, series, EPG and catch-up content."),
        ("How much does Strong 8K IPTV cost?", "Strong 8K IPTV plans currently start at £14.99 for one month. Longer options include £24.99 for three months, £39.99 for six months and £59.99 for one year."),
        ("Can I watch Premier League and UEFA football?", "Available sports programming can include major football competitions such as the Premier League and UEFA competitions, subject to the content available through the service at the time of viewing."),
        ("Can I watch boxing, PPV events, NBA and other sports?", "Sports availability can include boxing, PPV events, NBA, MLB and other leagues and competitions, depending on the available programming and event rights."),
        ("Which devices can I use with Strong 8K IPTV?", "You can configure Strong 8K on compatible Smart TVs, Firestick/Fire TV, Android TV devices, smartphones, tablets, IPTV boxes and supported IPTV players."),
        ("How do I get help with my Strong 8K IPTV subscription?", "For subscription, setup or general support questions, contact the Strong 8K team through WhatsApp or email. The support team can help with available setup information and account-related questions."),
    ]
    s.append(sec(section_head("8. FAQ", "Frequently Asked Questions") + faq_list(faqs), container="container container--narrow", id_attr="faq"))

    # 10. Get in Touch
    s.append(sec(
        f'''{section_head("9. Get In Touch", "Need Help Choosing Or Setting Up Strong 8K IPTV?", None)}
    <div class="grid grid--2" style="max-width:640px;margin:0 auto 24px">
      <a class="card icon-card" href="{wa("Hi Strong 8K, I need some help.")}" target="_blank" rel="noreferrer">
        <div class="icon-box">{icon("whatsapp", 20)}</div><h3>WhatsApp Support</h3>
        <p>Contact us directly on WhatsApp for quick assistance.</p>
      </a>
      <a class="card icon-card" href="{mail()}">
        <div class="icon-box">{icon("mail", 20)}</div><h3>Email Support</h3>
        <p>Send your question by email for subscription, setup or general support.</p>
      </a>
    </div>
    <p class="text-center" style="max-width:640px;margin-inline:auto">Whether you are new to IPTV or already use an IPTV player, our support team can help you get started with Strong 8K.</p>''',
        alt=True,
    ))

    return s


# ================================================================== SUBSCRIPTION
def build_subscription():
    s = []
    s.append(hero_centered(
        "IPTV Subscription",
        "Strong 8K IPTV",
        "Subscription Plans",
        "Choose a Strong 8K IPTV subscription that fits your viewing needs. Get access to live TV, sports, "
        "movies, series and VOD through compatible devices and IPTV players &mdash; with flexible durations from "
        "one month to one year.",
        [btn("View Plans", "#plans", "primary"), btn("Start IPTV Trial", wa("Hi Strong 8K, I'd like to start a trial."), "outline", blank=True)],
        stats=HERO_STATS,
    ))

    s.append(sec(
        section_head("Pricing", "Choose Your Strong 8K IPTV Plan",
            "Every plan provides the core Strong 8K IPTV service — the main difference is the subscription period.")
        + pricing_showcase(PLANS, "contact-us.html", "#compare", INCLUDED, id_attr="plans"),
    ))

    s.append(sec(
        section_head("Compare Plans", "Compare Strong 8K IPTV Subscription Plans",
            "The longer plans reduce the average monthly cost. Choose the duration based on how frequently you expect to use the service.")
        + data_table(["Subscription", "Total Price", "Approx. Monthly Cost", "Best For"], [
            ["1 Month", "£14.99", "£14.99/month", "Short-term viewing"],
            ["3 Months", "£24.99", "£8.33/month", "Occasional or regular viewing"],
            ["6 Months", "£39.99", "£6.67/month", "Regular viewers"],
            ["1 Year", "£59.99", "£5.00/month", "Long-term viewing, lowest average cost"],
        ], highlight_col=2),
        alt=True,
        id_attr="compare",
    ))

    included = [
        "Live TV across available entertainment, news, sports and international categories",
        "Movies and series through available VOD content",
        "Live sports covering popular competitions and sporting events",
        "EPG for programme information where supported",
        "Catch-up TV where available",
        "HD, Full HD and 4K content where supported by the source and device",
        "Compatible IPTV player support",
        "Multiple compatible device options",
        "Customer assistance through WhatsApp and email",
    ]
    s.append(sec(
        section_head("What's Included", "What Is Included With Every Strong 8K IPTV Subscription?")
        + check_list(included)
        + '<p class="divider-note">Content availability and picture quality can vary by programme, source, device and network connection.</p>',
        container="container container--narrow",
    ))

    s.append(sec(
        section_head("Live Sports", "Watch Live Sports &amp; Entertainment",
            "Sports are a major reason many viewers choose an IPTV subscription. Depending on available programming, sports coverage can include:")
        + pill_row(SPORTS),
        alt=True,
    ))

    recs = [
        ("New to IPTV?", "1 Month — £14.99", "A flexible way to get started without choosing a longer subscription."),
        ("Want a few months of access?", "3 Months — £24.99", "A longer viewing period while keeping your commitment relatively short."),
        ("A regular IPTV viewer?", "6 Months — £39.99", "Suits viewers who expect to use Strong 8K regularly."),
        ("Lowest average monthly cost?", "1 Year — £59.99", "Works out at approximately £5 per month — the lowest average price among the available plans."),
    ]
    rec_cards = "".join(
        f'<div class="card"><div class="icon-box">{icon("plus-circle", 20)}</div><h3>{esc(t)}</h3>'
        f'<p class="plan-monthly">{p}</p><p class="text-small">{d}</p></div>'
        for t, p, d in recs
    )
    s.append(sec(section_head("Not Sure Which Plan?", "Which Strong 8K IPTV Subscription Is Right for You?") + f'<div class="grid grid--4">{rec_cards}</div>'))

    steps_list = [
        ("Choose Your Plan", "Select the Strong 8K IPTV subscription that matches your preferred duration."),
        ("Complete Your Order", "Provide the required information and complete your purchase using the available payment method."),
        ("Receive Your IPTV Details", "After your order is processed, you will receive the information needed to configure the service."),
        ("Set Up Your IPTV Player", "Install a compatible IPTV application on your chosen device and enter your provided connection details."),
        ("Start Watching", "Once your IPTV player is configured, access the live TV, sports and VOD content included with your subscription."),
    ]
    s.append(sec(section_head("Getting Started", "How Strong 8K IPTV Subscription Works") + steps(steps_list), alt=True, container="container container--tight"))

    pr_cards = [
        ("settings", "Payment", "Strong 8K accepts the payment methods currently displayed during checkout. Available options may change over time."),
        ("refresh", "Renewal", "Check the subscription terms provided at the time of purchase to understand whether your plan renews automatically."),
        ("shield", "Refunds", "Refund eligibility depends on the applicable Strong 8K refund policy and the circumstances of your purchase."),
    ]
    s.append(sec(section_head("Good To Know", "Payment, Renewal &amp; Refund Information",
            "Before purchasing an IPTV subscription, it is useful to understand the basic payment and refund terms.")
        + feature_grid(pr_cards)))

    faqs = [
        ("How much does a Strong 8K IPTV subscription cost?", "Strong 8K IPTV subscriptions currently start at £14.99 for one month. The available plans are £24.99 for three months, £39.99 for six months and £59.99 for one year."),
        ("Which Strong 8K IPTV subscription should I choose?", "It depends on how long you expect to use the service. The one-month plan suits short-term viewing, while the six-month and one-year options are better suited to regular or long-term users."),
        ("What is included with a Strong 8K IPTV subscription?", "Depending on available programming, the service can include live TV, sports, movies, series, VOD, EPG and catch-up content."),
        ("Does Strong 8K offer an IPTV trial?", "A Strong 8K IPTV trial may be available depending on the current offer. Contact support to confirm the current trial duration, availability and conditions."),
        ("What is the Strong 8K refund policy?", "Refund eligibility depends on the current refund terms and the circumstances of the purchase. Review the refund policy before completing your order or contact support if you need clarification."),
    ]
    s.append(sec(section_head("FAQ", "Frequently Asked Questions") + faq_list(faqs), alt=True, container="container container--narrow"))

    s.append(cta_section(
        "Ready to Choose Your Strong 8K IPTV Subscription?",
        "Get access to available live TV, sports, movies, series and VOD through compatible devices and IPTV players.",
        "Contact Us", "contact-us.html", "Chat on WhatsApp", wa("Hi Strong 8K, I'd like to subscribe."),
    ))
    return s


# ================================================================== APP / PLAYER
def build_app_player():
    s = []
    s.append(hero_centered(
        "Strong 8K App & IPTV Player",
        "Strong 8K",
        "App & IPTV Player",
        "Looking for the Strong 8K app or a compatible IPTV player? Access Strong 8K on supported devices, "
        "choose the right IPTV player and configure your subscription &mdash; with download options, login methods "
        "and troubleshooting guidance.",
        [btn("Download Strong 8K App", "#download", "primary", "download"), btn("Installation Guide", "strong-8k-iptv-installation.html", "outline")],
        stats=HERO_STATS,
    ))

    s.append(sec(
        section_head("8K Pro App", "Download Strong 8K App",
            "Strong 8K can be accessed through the 8K Pro app or other compatible IPTV players, depending on your device and available setup method.")
        + code_box(DOWNLOADER_CODE),
        id_attr="download", container="container container--tight",
    ))

    device_guides = [
        ("tv", "Android & Android TV", "Install the 8K Pro app or another compatible IPTV player, then enter your Strong 8K subscription details."),
        ("firestick", "Amazon Firestick & Fire TV", "Use the 8K Pro app via Downloader with the current code, then follow the installation instructions carefully."),
        ("tv", "Samsung Smart TV", "Install a compatible IPTV application from the Samsung TV app store and configure it with your details."),
        ("tv", "LG Smart TV", "Install a compatible IPTV player from the LG TV app store and enter your connection details."),
        ("apple", "iPhone & iPad", "Install a compatible IPTV player from the Apple App Store, then configure it with your login or playlist information."),
        ("laptop", "Windows PC", "Use a compatible IPTV application or player that supports your provided connection method."),
    ]
    s.append(sec(section_head("Choose Your Device", "Set Up Strong 8K On Any Device") + feature_grid(device_guides), alt=True))

    install_steps = [
        ("Install Downloader", "On compatible Fire TV or Android-based devices, install the Downloader application if required."),
        ("Enter the 8K Pro Downloader Code", "Open Downloader and enter the current 8K Pro code supplied by Strong 8K."),
        ("Download the App", "Follow the on-screen instructions to download the 8K Pro installation package."),
        ("Install 8K Pro", "Open the downloaded file and complete the installation."),
        ("Open 8K Pro", "Launch the app after installation."),
        ("Enter Your Strong 8K Details", "Use the subscription information provided after purchasing your Strong 8K IPTV plan."),
        ("Start Watching", "Once your account or playlist has loaded, browse the available live TV, sports, movies, series and VOD content."),
    ]
    s.append(sec(section_head("Step By Step", "How to Install the 8K Pro App") + steps(install_steps), container="container container--tight"))

    s.append(sec(
        section_head("Login Methods", "Strong 8K Login Methods",
            "The 8K Pro app or another compatible IPTV player may support different connection methods.")
        + f'''<div class="grid grid--2">
            <div class="card"><div class="icon-box">{icon("key", 20)}</div><h3>Xtream Codes</h3>{num_list(["Username", "Password", "Server or portal URL"])}<p class="text-small mt-lg">Enter the details exactly as provided.</p></div>
            <div class="card"><div class="icon-box">{icon("wifi", 20)}</div><h3>M3U Playlist</h3>{num_list(["M3U playlist URL", "EPG URL, where applicable"])}<p class="text-small mt-lg">Use the login method supplied with your Strong 8K subscription.</p></div>
          </div>''',
        alt=True,
    ))

    app_features = [
        ("tv", "Live TV", "Browse available live channels."),
        ("film", "VOD", "Access available movies and series."),
        ("guide", "EPG", "View programme information where supported."),
        ("clock", "Catch-Up", "Access previously broadcast content where available."),
        ("grid", "Channel Categories", "Organise channels for easier browsing."),
        ("search", "Search", "Find available channels and VOD content."),
        ("heart", "Favourites", "Save frequently watched channels in supported players."),
        ("gamepad", "TV-Friendly Navigation", "Use supported applications with a compatible remote control."),
    ]
    s.append(sec(section_head("App Features", "Strong 8K App &amp; IPTV Player Features") + feature_grid(app_features, cols=4)))

    problems = [
        ("alert", "The 8K Pro App Will Not Install", "Check that your device supports the application and that you are using the correct installation method."),
        ("alert", "The Downloader Code Does Not Work", "Downloader codes can change. Check that you are using the latest 8K Pro code provided by Strong 8K."),
        ("alert", "The App Opens but Shows No Content", "Check your Strong 8K login information and internet connection."),
        ("alert", "Strong 8K IPTV Is Buffering", "Check your network connection and restart your router and streaming device."),
        ("alert", "EPG Is Not Showing", "Check whether your IPTV player has loaded the correct EPG information."),
        ("alert", "Login Details Are Not Working", "Recheck your username, password and server information. Avoid adding unwanted spaces."),
    ]
    s.append(sec(section_head("Troubleshooting", "Common 8K Pro App Problems") + feature_grid(problems), alt=True))

    faqs = [
        ("What is the 8K Pro app?", "The 8K Pro app is an IPTV application used on supported devices to access a compatible Strong 8K IPTV subscription."),
        ("What is the 8K Pro Downloader code?", "The Downloader code is a short code used to access the 8K Pro installation package through the Downloader application."),
        ("Can I install 8K Pro on Firestick?", "The 8K Pro app can be installed on supported Fire TV and Firestick setups using the appropriate installation method and current Downloader code."),
        ("Does Strong 8K support M3U?", "Strong 8K can be configured through an M3U-compatible IPTV player when an M3U playlist is provided with the subscription."),
        ("Does Strong 8K support Xtream Codes?", "Compatible IPTV players can use Xtream Codes login details when this connection method is provided with your subscription."),
    ]
    s.append(sec(section_head("FAQ", "Strong 8K App FAQs") + faq_list(faqs), container="container container--narrow"))

    s.append(cta_section(
        "Need Help Installing 8K Pro?",
        "Having trouble with the Downloader code, app installation or IPTV player setup? Our support team can help.",
        "View Installation Guide", "strong-8k-iptv-installation.html", "Chat on WhatsApp", wa("Hi Strong 8K, I need help installing 8K Pro."),
    ))
    return s


# ================================================================== INSTALLATION
def build_installation():
    s = []
    s.append(hero_centered(
        "Setup & Installation",
        "Strong 8K IPTV",
        "Setup & Installation Guide",
        "Setting up Strong 8K IPTV is straightforward when you use the correct application and installation "
        "method for your device. This guide covers Firestick, Android TV, Smart TV, mobile devices, IPTV "
        "boxes and Windows, along with M3U and Xtream Codes setup.",
        [btn("Get Setup Help", wa("Hi Strong 8K, I need help with installation."), "primary", blank=True)],
        stats=HERO_STATS,
    ))

    checklist = ["An active Strong 8K IPTV subscription", "A compatible streaming device", "A stable internet connection",
                 "A compatible IPTV app or player", "Your Strong 8K login or playlist details",
                 "The Downloader app on Firestick or supported Android-based devices"]
    s.append(sec(section_head("Before You Start", "Before Installing Strong 8K IPTV, Make Sure You Have:") + check_list(checklist), container="container container--tight"))

    firestick_steps = [
        ("Install Downloader", "From your Firestick home screen, search for Downloader and install the application."),
        ("Enter the Strong 8K Downloader Code", f"Enter the following code into Downloader: <strong>{DOWNLOADER_CODE}</strong>"),
        ("Download the App", "Follow the instructions displayed after entering the code."),
        ("Install the Application", "Open the downloaded file and follow the on-screen instructions."),
        ("Open Strong 8K", "Launch the installed application after the installation finishes."),
        ("Enter Your Subscription Details", "Use the Strong 8K login information supplied with your subscription."),
        ("Load Your Content", "Allow the application to load available live TV, VOD, EPG and other supported content."),
    ]
    s.append(sec(
        section_head("Most Popular", "How to Install Strong 8K IPTV on Firestick",
            "Amazon Firestick and Fire TV devices are commonly used for IPTV because they support a wide range of streaming applications.")
        + steps(firestick_steps),
        alt=True, container="container container--tight",
    ))

    other_devices = [
        ("Android TV", ["Install the Strong 8K app where supported or choose a compatible IPTV player.",
                         "Launch the player and select the appropriate login option.",
                         "Enter your Xtream Codes or M3U details.", "Allow content to load."]),
        ("Samsung Smart TV", ["Open the Samsung TV app store.", "Search for and install a compatible IPTV player.",
                               "Open the player and select the login method.", "Enter your subscription details."]),
        ("LG Smart TV", ["Open the LG TV app store.", "Find and install a compatible IPTV application.",
                          "Choose the login method.", "Enter your subscription information."]),
        ("Android Phones &amp; Tablets", ["Install a compatible IPTV player.", "Select Xtream Codes or M3U.",
                                       "Enter the required information.", "Allow content to load."]),
        ("iPhone &amp; iPad", ["Open the App Store.", "Install a compatible IPTV player.",
                            "Select the supported login method.", "Enter your subscription information."]),
        ("Windows PC", ["Install a compatible IPTV player.", "Open the application.",
                         "Select the login method.", "Enter your credentials and load the playlist."]),
    ]
    dev_cards = "".join(
        f'<div class="card"><h3>{t}</h3>{num_list(items)}</div>' for t, items in other_devices
    )
    s.append(sec(section_head("Other Devices", "Installation Steps By Device") + f'<div class="grid grid--3">{dev_cards}</div>'))

    s.append(sec(
        section_head("Connection Methods", "Xtream Codes, M3U &amp; EPG Setup")
        + f'''<div class="grid grid--3">
            <div class="card"><div class="icon-box">{icon("key", 20)}</div><h3>Xtream Codes Setup</h3>{num_list(["Username", "Password", "Server / Portal URL"])}</div>
            <div class="card"><div class="icon-box">{icon("wifi", 20)}</div><h3>M3U Playlist Setup</h3>{num_list(["Open your IPTV player", "Select M3U Playlist", "Enter the M3U URL", "Add EPG URL if provided"])}</div>
            <div class="card"><div class="icon-box">{icon("guide", 20)}</div><h3>EPG Setup</h3><p class="text-small">Provides programme names, start times, schedules and channel information. Refresh the EPG or check your entered EPG URL if it is missing.</p></div>
          </div>''',
        alt=True,
    ))

    troubleshooting = [
        ("alert", "Strong 8K Is Buffering", "Check your internet connection first. Restart your router and streaming device."),
        ("alert", "Channels Are Not Loading", "Check your Strong 8K subscription details and login information."),
        ("alert", "Xtream Codes Login Is Not Working", "Recheck your username, password and server URL."),
        ("alert", "M3U Playlist Is Not Loading", "Make sure you entered the complete M3U URL."),
        ("alert", "EPG Is Missing", "Refresh the EPG inside your IPTV player."),
        ("alert", "Downloader Code Is Not Working", f"The current Strong 8K Downloader code is {DOWNLOADER_CODE}."),
    ]
    s.append(sec(section_head("Troubleshooting", "Strong 8K IPTV Troubleshooting") + feature_grid(troubleshooting), id_attr="troubleshooting"))

    faqs = [
        ("What is the Strong 8K Downloader code?", f"The current Strong 8K Downloader code for this installation guide is {DOWNLOADER_CODE}."),
        ("How do I install Strong 8K IPTV on Firestick?", f"Install Downloader on your Firestick, enter the Strong 8K code {DOWNLOADER_CODE}, follow the download instructions and install the relevant application."),
        ("Can I use Strong 8K with Xtream Codes?", "Yes, where the selected IPTV player supports Xtream Codes login."),
        ("Can I use an M3U playlist with Strong 8K?", "Yes, where an M3U playlist is provided and your selected IPTV player supports M3U URLs."),
        ("Why is my Strong 8K IPTV buffering?", "Buffering can have several causes, including an unstable internet connection or network congestion. Test your connection, restart your equipment and try Ethernet or 5GHz Wi-Fi where available."),
    ]
    s.append(sec(section_head("FAQ", "Strong 8K IPTV Installation FAQs") + faq_list(faqs), alt=True, container="container container--narrow"))

    s.append(cta_section(
        "Need Help Setting Up Strong 8K?",
        "If you're having trouble installing the app, entering your Downloader code, configuring Xtream Codes or loading an M3U playlist, our support team can help.",
        "View App & Player Guide", "strong-8k-app.html", "Chat on WhatsApp", wa("Hi Strong 8K, I need setup help."),
    ))
    return s


# ================================================================== RESELLER
def build_reseller():
    s = []
    s.append(hero_centered(
        "IPTV Reseller",
        "Strong 8K IPTV",
        "Reseller Panel",
        "Start your own IPTV reseller business with the Strong 8K reseller panel. Manage customer "
        "subscriptions, use reseller credits and organise activations from one place.",
        [btn("Get Reseller Panel", wa("Hi Strong 8K, I'd like to get the reseller panel."), "gold-light", blank=True)],
        stats=HERO_STATS,
    ))

    s.append(sec(
        section_head("Reseller Model", "Start Your IPTV Reseller Business",
            "The Strong 8K reseller model is designed for businesses and individuals who want to sell IPTV subscriptions to their own customers.")
        + pill_row(["Buy Reseller Credits", "Create Customer Subscriptions", "Set Your Selling Price", "Manage Customers", "Renew Subscriptions"])
    ))

    r_cards = "".join(
        reseller_card(p["name"], p["credits"], p["best_for"], wa(f"Hi Strong 8K, I'm interested in the {p['name']} reseller package."), p.get("featured", False))
        for p in RESELLER_PACKAGES
    )
    s.append(sec(section_head("Reseller Packages", "Strong 8K Reseller Packages",
            "Choose a reseller package based on the number of credits you expect to use.")
        + f'<div class="reseller-grid">{r_cards}</div>', alt=True))

    s.append(sec(
        section_head("Credit System", "How Strong 8K Reseller Credits Work",
            "Credits provide the balance you use when creating or extending customer subscriptions through the reseller panel.")
        + data_table(["Customer Subscription", "Credits Used"], [
            ["1 month customer subscription", "1 credit"],
            ["3 month customer subscription", "3 credits"],
            ["6 month customer subscription", "6 credits"],
            ["12 month customer subscription", "12 credits"],
        ], highlight_col=1)
        + '<p class="divider-note">Example: a reseller with 120 credits could potentially create 120 one-month subscriptions under a one-credit-per-month model — or fewer customers with longer subscription durations.</p>',
        container="container container--narrow",
    ))

    panel_features = [
        ("users", "Customer Management", "Manage your customer subscriptions from one reseller dashboard."),
        ("coins", "Credit Management", "Keep track of your available reseller credits and plan future purchases."),
        ("play", "Subscription Activation", "Create customer subscriptions through the panel using your reseller balance."),
        ("refresh", "Subscription Renewals", "Extend customer subscriptions when they are ready to renew."),
        ("gauge", "Customer Status", "Check account and subscription information from your dashboard."),
        ("sparkles", "Trial Accounts", "Create trial accounts for potential customers where enabled."),
    ]
    s.append(sec(section_head("Inside The Panel", "Strong 8K Reseller Panel Features") + feature_grid(panel_features), alt=True))

    s.append(sec(
        section_head("White Label", "White Label IPTV Reseller",
            "Want to build your own IPTV brand? Where white-label functionality is available, the Strong 8K "
            "reseller model can allow you to present the service under your own business identity.")
        + num_list(["Your own business name", "Your own branding", "Your own customer-facing website", "Your own subscription offers", "Your own customer support process"]),
        container="container container--tight",
    ))

    become_steps = [
        ("Understand the Service", "Become familiar with the Strong 8K service, compatible devices and setup process."),
        ("Choose a Reseller Package", "Select the credit package that matches your expected customer volume."),
        ("Get Your Reseller Panel", "After your reseller account is activated, use the provided panel access details."),
        ("Create Your First Customer", "Use your available reseller credits to create a customer subscription."),
        ("Provide Setup Information", "Give your customer the activation and installation information they need."),
        ("Manage Renewals", "Monitor customer subscriptions and manage renewals when required."),
        ("Grow Your Customer Base", "Choose larger credit packages based on your actual subscription demand."),
    ]
    s.append(sec(section_head("Getting Started", "How to Become a Strong 8K IPTV Reseller") + steps(become_steps), alt=True, container="container container--tight"))

    faqs = [
        ("What is the Strong 8K IPTV reseller panel?", "The Strong 8K reseller panel is a dashboard used by resellers to manage customer IPTV subscriptions, credits and related account functions."),
        ("How many credits are available in the reseller packages?", "The current package structure includes 120 credits for Starter, 360 credits for Basic and 1,000 credits for Premium."),
        ("Can I sell Strong 8K IPTV under my own brand?", "A white-label option may be available depending on your reseller package and current terms."),
        ("Can I create sub-resellers?", "Sub-reseller functionality depends on the reseller account and current Strong 8K reseller terms."),
        ("How do I become a Strong 8K IPTV reseller?", "Choose a reseller credit package, complete the registration process and obtain access to the reseller panel."),
    ]
    s.append(sec(section_head("FAQ", "Frequently Asked Questions") + faq_list(faqs), container="container container--narrow"))

    s.append(cta_section(
        "Ready to Start Your IPTV Reseller Business?",
        "Choose the reseller package that matches your expected customer volume and start managing IPTV subscriptions through the Strong 8K reseller panel.",
        "Contact Reseller Support", "contact-us.html", "Chat on WhatsApp", wa("Hi Strong 8K, I'd like reseller info."),
    ))
    return s


# ================================================================== CONTACT
def build_contact():
    s = []
    s.append(hero_centered(
        "Contact Us",
        "Strong 8K IPTV",
        "Support & Contact",
        "Need help with your Strong 8K IPTV subscription, app, installation or reseller account? Our support "
        "team is here to help via WhatsApp or email.",
        [btn("WhatsApp Support", wa("Hi Strong 8K, I need some help."), "primary", "whatsapp", blank=True),
         btn("Email Support", mail(), "outline", "mail")],
        stats=HERO_STATS,
    ))

    help_cats = [
        ("tv", "IPTV Subscription", "Questions about Strong 8K IPTV plans, pricing, trials or subscription activation."),
        ("settings", "IPTV Setup & Installation", "Need help setting up Strong 8K on Firestick, Android TV, Smart TV, mobile or an IPTV box?"),
        ("headset", "Technical Support", "Trouble with your IPTV player, login, M3U playlist, Xtream Codes or EPG?"),
        ("users", "Reseller Support", "Interested in the reseller panel or managing customer subscriptions already?"),
    ]
    s.append(sec(section_head("Support Topics", "How Can We Help?") + feature_grid(help_cats, cols=4)))

    contact_form = f'''<form class="contact-form">
        <div class="grid grid--2">
          <div class="field"><label for="name">Name</label><input id="name" name="name" type="text" required placeholder="Enter your name"></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@example.com"></div>
        </div>
        <div class="field">
          <label for="reason">Reason for Contact</label>
          <select id="reason" name="reason" required>
            <option value="" disabled selected>Choose the category that best describes your enquiry</option>
            <option>Subscription</option><option>IPTV Trial</option><option>Installation</option>
            <option>Technical Support</option><option>Reseller</option><option>Payment</option><option>General Question</option>
          </select>
        </div>
        <div class="field"><label for="message">Message</label><textarea id="message" name="message" required placeholder="Describe your question or issue as clearly as possible."></textarea></div>
        <p class="form-note">For technical problems, including your device and IPTV player can help us understand the issue more quickly.</p>
        <button type="submit" class="btn btn-primary btn-block">{icon("arrow-right", 16)} Send Message</button>
      </form>
      <div class="form-success">
        {icon("check", 40)}
        <h3>Message received</h3>
        <p>Thanks for reaching out. Our support team will get back to you as soon as possible. For faster help, you can also reach us on WhatsApp.</p>
      </div>'''

    contact_methods = f'''<div class="grid grid--2">
        <a class="card icon-card" href="{wa()}" target="_blank" rel="noreferrer">
          <div class="icon-box">{icon("whatsapp", 20)}</div><h3>WhatsApp Support</h3>
          <p>Convenient for quick questions about subscriptions, activation, installation and general assistance.</p>
        </a>
        <a class="card icon-card" href="{mail()}">
          <div class="icon-box">{icon("mail", 20)}</div><h3>Email Support</h3>
          <p>Useful for detailed questions and technical issues.<br><strong>{SUPPORT_EMAIL}</strong></p>
        </a>
      </div>
      <div class="card mt-lg">
        <div class="icon-box">{icon("list", 20)}</div>
        <h3>Before Contacting Support</h3>
        <p class="text-small mt-lg">Providing the right information helps us understand your issue more quickly. For technical questions, include:</p>
        {num_list(["Your device type and model", "IPTV app or player you are using", "A description of the problem", "Any error message displayed", "A screenshot where useful", "The steps you have already tried"])}
      </div>'''

    s.append(sec(
        f'''<div class="contact-grid">
          <div>
            {section_head("Get In Touch", "Contact Strong 8K Support", "Choose the contact method that works best for you.", align="left")}
            {contact_methods}
          </div>
          <div>
            <h3 class="text-small" style="text-transform:uppercase;letter-spacing:1px;margin-bottom:16px">Contact Form</h3>
            {contact_form}
          </div>
        </div>''',
        alt=True,
    ))

    quick_links = [
        ("Strong 8K IPTV Subscription", "Compare available subscription durations, pricing and plan options.", "iptv-subscription.html"),
        ("Strong 8K App &amp; IPTV Player", "Find the 8K Pro app, Downloader setup and supported players.", "strong-8k-app.html"),
        ("Strong 8K IPTV Setup &amp; Installation", "Device-specific instructions for Firestick, Android TV, Smart TV and more.", "strong-8k-iptv-installation.html"),
        ("Strong 8K Reseller Panel", "Learn about reseller credits, panel features and packages.", "strong-8k-reseller-panel.html"),
    ]
    ql_cards = "".join(
        f'<a class="card icon-card" href="{href}"><h3>{t}</h3><p>{d}</p><span class="inline-link">Learn more {icon("arrow-right", 14)}</span></a>'
        for t, d, href in quick_links
    )
    s.append(sec(section_head("Quick Links", "Looking For Information Instead?") + f'<div class="grid grid--4">{ql_cards}</div>'))

    faqs = [
        ("How can I contact Strong 8K?", "You can contact Strong 8K through WhatsApp or email. You can also use the contact form for subscription, installation, technical and reseller enquiries."),
        ("Can you help me install Strong 8K IPTV?", "Yes. Support can help with general installation questions for compatible devices and IPTV players."),
        ("Can I ask about Strong 8K subscription plans before purchasing?", "Yes. Contact support if you need clarification about available subscription plans, pricing, trial options or activation before placing an order."),
        ("How can I contact Strong 8K reseller support?", "Resellers can contact support through WhatsApp or email for questions about reseller packages, credits, panel access, customer subscriptions and account-related issues."),
        ("How long does Strong 8K support take to respond?", "Response times can vary depending on the type and volume of enquiries."),
    ]
    s.append(sec(section_head("FAQ", "Frequently Asked Questions") + faq_list(faqs), alt=True, container="container container--narrow"))
    return s


PAGES = [
    ("index.html", "Strong 8K IPTV – IPTV Subscription & Live TV at Just £49.99",
     "Strong 8K IPTV offers flexible IPTV subscriptions with live TV, sports, movies and series. Explore plans, compatible devices, features and support.",
     "index.html", build_home),
    ("iptv-subscription.html", "Strong 8K IPTV Subscription – Plans from £14.99",
     "Choose a Strong 8K IPTV subscription from £14.99. Compare 1, 3, 6 and 12-month plans with live TV, sports, VOD and device support.",
     "iptv-subscription.html", build_subscription),
    ("strong-8k-app.html", "Strong 8K App & IPTV Player – Download & Setup",
     "Download and set up the Strong 8K app or compatible IPTV player. Find the 8K Pro Downloader code, device options, login methods and setup help.",
     "strong-8k-app.html", build_app_player),
    ("strong-8k-iptv-installation.html", "Strong 8K IPTV Installation Guide – Setup & Downloader Code",
     "Follow the Strong 8K IPTV installation guide for Firestick, Android TV, Smart TV and more. Use Downloader code 1646512 and learn M3U and Xtream Codes setup.",
     "strong-8k-iptv-installation.html", build_installation),
    ("strong-8k-reseller-panel.html", "Strong 8K Reseller Panel – IPTV Reseller Packages",
     "Start with the Strong 8K reseller panel. Explore 120, 360 and 1,000 credit packages, customer management, reseller tools and support.",
     "strong-8k-reseller-panel.html", build_reseller),
    ("contact-us.html", "Contact Strong 8K – IPTV Support & Assistance",
     "Contact Strong 8K for IPTV subscription, installation, technical and reseller support. Get assistance through WhatsApp, email or our contact form.",
     "contact-us.html", build_contact),
]

if __name__ == "__main__":
    for filename, title, desc, active, builder in PAGES:
        sections = builder()
        html = page(title, desc, active, active, sections)
        path = os.path.join(OUT, filename)
        with open(path, "w") as f:
            f.write(html)
        print(f"wrote {filename} ({len(html)} chars)")
