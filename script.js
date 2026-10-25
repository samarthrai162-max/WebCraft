/* ==========================================
   FIRST INCOME 2.0
   ADAPTIVE BUSINESS WEBSITE
   JavaScript Engine v2.0
========================================== */

"use strict";


/* ==========================================
   1. BUSINESS PROFILES
========================================== */

const BUSINESS_PROFILES = {

    default: {
        businessName: "WebCraft",
        tagline: "WEBSITES FOR LOCAL BUSINESSES",
        heroTitle: "Your Business.",
        heroHighlight: "Your Digital Future.",
        heroDescription:
            "Modern, responsive and professional websites designed to help your business connect with more customers.",

        previewTag: "WELCOME TO OUR BUSINESS",
        previewTitle: "Quality Service. Lasting Trust.",

        aboutLabel: "ABOUT OUR APPROACH",
        aboutTitle:
            "Every Business Deserves a Strong Online Presence.",
        aboutDescription:
            "We create tailored website experiences that help businesses present their services and connect with customers.",

        servicesTitle: "Website Solutions For Your Business",

        services: [
            {
                number: "01",
                title: "Business Websites",
                description:
                    "Present your business, services and contact information."
            },
            {
                number: "02",
                title: "Coaching Websites",
                description:
                    "Showcase courses, faculty and student enquiries."
            },
            {
                number: "03",
                title: "Restaurant Websites",
                description:
                    "Display menus, galleries and location details."
            },
            {
                number: "04",
                title: "Portfolio Websites",
                description:
                    "Present your work, skills and projects."
            }
        ],

        contactTitle: "Ready To Build Your Business Website?",
        contactDescription:
            "Tell us about your business and the website you have in mind.",

        whatsappMessage:
            "Hi! I'm interested in learning more about your website services.",

        theme: "default"
    },


    salon: {
        businessName: "Luxe Salon",
        tagline: "YOUR STYLE, OUR PASSION",
        heroTitle: "Discover Your.",
        heroHighlight: "Signature Style.",
        heroDescription:
            "Explore professional hair styling, beauty care and salon services in a welcoming environment.",

        previewTag: "WELCOME TO LUXE SALON",
        previewTitle: "Your Beauty. Your Confidence.",

        aboutLabel: "ABOUT OUR SALON",
        aboutTitle:
            "Feel Confident. Look Your Best.",
        aboutDescription:
            "Discover salon services designed around your preferences, personal style and beauty goals.",

        servicesTitle: "Salon Services",

        services: [
            {
                number: "01",
                title: "Hair Styling",
                description:
                    "Explore haircutting, styling and hair care services."
            },
            {
                number: "02",
                title: "Hair Care",
                description:
                    "Discover hair treatments and maintenance options."
            },
            {
                number: "03",
                title: "Skin Care",
                description:
                    "Learn about available facial and skin care services."
            },
            {
                number: "04",
                title: "Beauty Services",
                description:
                    "Explore beauty services suited to your preferences."
            }
        ],

        contactTitle: "Let's Plan Your Salon Visit",
        contactDescription:
            "Contact us to ask about services, prices and appointment availability.",

        whatsappMessage:
            "Hi! I'd like to enquire about your salon services and appointment availability.",

        theme: "salon"
    },


    restaurant: {
        businessName: "The Food Corner",
        tagline: "GOOD FOOD, GOOD MOMENTS",
        heroTitle: "Fresh Flavours.",
        heroHighlight: "Memorable Moments.",
        heroDescription:
            "Explore delicious food, discover menu favourites and get in touch with our restaurant.",

        previewTag: "WELCOME TO OUR RESTAURANT",
        previewTitle: "Great Food. Great Company.",

        aboutLabel: "ABOUT OUR RESTAURANT",
        aboutTitle:
            "Bringing People Together Through Food.",
        aboutDescription:
            "Discover our menu, learn about our food offerings and find the information you need before visiting.",

        servicesTitle: "Explore Our Offerings",

        services: [
            {
                number: "01",
                title: "Food Menu",
                description:
                    "Explore available dishes and menu categories."
            },
            {
                number: "02",
                title: "Popular Dishes",
                description:
                    "Highlight signature dishes and customer favourites."
            },
            {
                number: "03",
                title: "Takeaway Enquiries",
                description:
                    "Contact us to ask about takeaway options."
            },
            {
                number: "04",
                title: "Visit Our Restaurant",
                description:
                    "Find restaurant details, opening hours and location."
            }
        ],

        contactTitle: "Planning Your Next Food Stop?",
        contactDescription:
            "Contact us for menu information, opening hours and enquiries.",

        whatsappMessage:
            "Hi! I'd like to enquire about your restaurant menu and offerings.",

        theme: "restaurant"
    },


    education: {
        businessName: "BrightPath Academy",
        tagline: "LEARN TODAY, LEAD TOMORROW",
        heroTitle: "Build Your Skills.",
        heroHighlight: "Shape Your Future.",
        heroDescription:
            "Explore courses, discover learning opportunities and enquire about admissions.",

        previewTag: "WELCOME TO OUR ACADEMY",
        previewTitle: "Learn Better. Grow Further.",

        aboutLabel: "ABOUT OUR ACADEMY",
        aboutTitle:
            "A Learning Journey Built Around Your Goals.",
        aboutDescription:
            "Explore educational programmes, course information and learning opportunities to help plan your next step.",

        servicesTitle: "Explore Our Learning Programmes",

        services: [
            {
                number: "01",
                title: "Academic Courses",
                description:
                    "Display subjects, classes and available courses."
            },
            {
                number: "02",
                title: "Course Information",
                description:
                    "Explain course structure, duration and eligibility."
            },
            {
                number: "03",
                title: "Admission Enquiries",
                description:
                    "Help students and parents ask about admissions."
            },
            {
                number: "04",
                title: "Class Information",
                description:
                    "Share class timings and learning arrangements."
            }
        ],

        contactTitle: "Ready To Explore Your Next Course?",
        contactDescription:
            "Contact us to ask about courses, class timings and admission details.",

        whatsappMessage:
            "Hi! I'd like to enquire about your courses and admission details.",

        theme: "education"
    },


    repair: {
        businessName: "TechFix Services",
        tagline: "RELIABLE REPAIR, CLEAR COMMUNICATION",
        heroTitle: "Technology Trouble?",
        heroHighlight: "Let's Find a Solution.",
        heroDescription:
            "Explore repair services for supported devices and contact us about your technical issue.",

        previewTag: "WELCOME TO TECHFIX",
        previewTitle: "Practical Support. Reliable Service.",

        aboutLabel: "ABOUT OUR SERVICES",
        aboutTitle:
            "Helping You Get Your Devices Back On Track.",
        aboutDescription:
            "Learn about available repair services, service enquiries and the process for discussing your device issue.",

        servicesTitle: "Our Repair Services",

        services: [
            {
                number: "01",
                title: "Mobile Repair",
                description:
                    "Enquire about supported mobile device issues."
            },
            {
                number: "02",
                title: "Computer Repair",
                description:
                    "Ask about computer troubleshooting and repair."
            },
            {
                number: "03",
                title: "Software Support",
                description:
                    "Enquire about software installation and troubleshooting."
            },
            {
                number: "04",
                title: "Device Diagnostics",
                description:
                    "Contact us to discuss a device inspection."
            }
        ],

        contactTitle: "Need Help With Your Device?",
        contactDescription:
            "Tell us about your device and ask about available repair services.",

        whatsappMessage:
            "Hi! I'd like to enquire about your device repair services.",

        theme: "repair"
    },


    premium: {
        businessName: "Elevate Studio",
        tagline: "THOUGHTFUL DESIGN, DISTINCTIVE EXPERIENCES",
        heroTitle: "Make Your Vision.",
        heroHighlight: "Stand Out.",
        heroDescription:
            "Explore a refined digital experience built around your brand, services and business goals.",

        previewTag: "WELCOME TO ELEVATE STUDIO",
        previewTitle: "Distinctive Design. Clear Purpose.",

        aboutLabel: "OUR APPROACH",
        aboutTitle:
            "A Distinctive Digital Presence For Your Brand.",
        aboutDescription:
            "Present your brand story, services and business information through a considered, professional website.",

        servicesTitle: "Explore Our Solutions",

        services: [
            {
                number: "01",
                title: "Brand Websites",
                description:
                    "Present your brand identity and business story."
            },
            {
                number: "02",
                title: "Service Experiences",
                description:
                    "Explain your offerings through clear page layouts."
            },
            {
                number: "03",
                title: "Portfolio Presentation",
                description:
                    "Showcase selected work and project information."
            },
            {
                number: "04",
                title: "Contact Experiences",
                description:
                    "Make it easier for visitors to reach your business."
            }
        ],

        contactTitle: "Let's Discuss Your Vision",
        contactDescription:
            "Tell us about your brand, your goals and the website you need.",

        whatsappMessage:
            "Hi! I'd like to discuss a website project for my business.",

        theme: "premium"
    }

};


/* ==========================================
   2. ACTIVE WEBSITE CONFIGURATION
========================================== */

// Change ONLY the profile name to switch demos.
//
// default
// salon
// restaurant
// education
// repair
// premium

const WEBSITE_CONFIG = {
    profile: "salon",

    // Leave blank until an authorized business
    // WhatsApp number is available.
    whatsappNumber: "9452482301"
};


/* ==========================================
   3. MOBILE NAVIGATION
========================================== */

const menuToggle =
    document.getElementById("menu-toggle");

const navigation =
    document.getElementById("navigation");


if (menuToggle && navigation) {

    function closeMenu() {

        navigation.classList.remove("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";
    }


    function openMenu() {

        navigation.classList.add("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        menuToggle.textContent = "✕";
    }


    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });


    document.addEventListener("click", event => {

        const clickedInsideMenu =
            navigation.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {
            closeMenu();
        }
    });

}


/* ==========================================
   4. THEME SYSTEM
========================================== */

const AVAILABLE_THEMES = [
    "default",
    "salon",
    "restaurant",
    "education",
    "repair",
    "premium"
];


function setBusinessTheme(themeName) {

    if (!AVAILABLE_THEMES.includes(themeName)) {

        console.warn(
            "WebCraft: Unknown theme:",
            themeName
        );

        return false;
    }


    AVAILABLE_THEMES.forEach(theme => {

        if (theme !== "default") {

            document.body.classList.remove(
                `theme-${theme}`
            );
        }
    });


    if (themeName !== "default") {

        document.body.classList.add(
            `theme-${themeName}`
        );
    }

    return true;
}


/* ==========================================
   5. SAFE TEXT UPDATE HELPERS
========================================== */

function setText(selector, value) {

    const element =
        document.querySelector(selector);

    if (element && typeof value === "string") {
        element.textContent = value;
    }
}


function setHTMLText(element, value) {

    if (element && typeof value === "string") {
        element.textContent = value;
    }
}


/* ==========================================
   6. APPLY BUSINESS PROFILE
========================================== */

function applyBusinessProfile(profileName) {

    const profile =
        BUSINESS_PROFILES[profileName];

    if (!profile) {

        console.error(
            "WebCraft: Profile not found:",
            profileName
        );

        return false;
    }


    // Apply the selected theme.
    if (!setBusinessTheme(profile.theme)) {
        return false;
    }


    // Update browser title and business name.
    document.title =
        `${profile.businessName} — ${profile.tagline}`;


    document.querySelectorAll(".logo").forEach(logo => {

        const nameSpan =
            logo.querySelector("span:nth-child(2)");

        if (nameSpan) {

            nameSpan.textContent =
                profile.businessName;

        }
    });


    // Update the hero section.
    setText(".hero .eyebrow", profile.tagline);


    const heroHeading =
        document.querySelector(".hero-content h1");

    if (heroHeading) {

        heroHeading.replaceChildren();

        const firstLine =
            document.createTextNode(
                profile.heroTitle + " "
            );

        const highlight =
            document.createElement("span");

        highlight.textContent =
            profile.heroHighlight;

        heroHeading.append(
            firstLine,
            highlight
        );
    }


    setText(
        ".hero-description",
        profile.heroDescription
    );


    // Update the website preview.
    setText(
        ".preview-tag",
        profile.previewTag
    );

    setText(
        ".preview-content h2",
        profile.previewTitle
    );


    // Update the About section.
    const aboutEyebrows =
        document.querySelectorAll(".about-content .eyebrow");

    if (aboutEyebrows.length) {

        setHTMLText(
            aboutEyebrows[0],
            profile.aboutLabel
        );
    }


    setText(
        ".about-content h2",
        profile.aboutTitle
    );

    setText(
        ".about-content > p",
        profile.aboutDescription
    );


    // Update the Services section heading.
    setText(
        "#services .section-heading h2",
        profile.servicesTitle
    );


    // Update the service cards.
    const servicesGrid =
        document.querySelector(".services-grid");

    if (servicesGrid) {

        servicesGrid.replaceChildren();

        profile.services.forEach(service => {

            const article =
                document.createElement("article");

            article.className = "service-card";


            const number =
                document.createElement("div");

            number.className = "service-number";
            number.textContent = service.number;


            const heading =
                document.createElement("h3");

            heading.textContent = service.title;


            const description =
                document.createElement("p");

            description.textContent =
                service.description;


            const link =
                document.createElement("a");

            link.className = "text-link";
            link.href = "#contact";
            link.textContent = "Enquire Now →";


            article.append(
                number,
                heading,
                description,
                link
            );

            servicesGrid.appendChild(article);
        });
    }


    // Update the contact section.
    setText(
        ".contact-content h2",
        profile.contactTitle
    );

    setText(
        ".contact-content > p",
        profile.contactDescription
    );


    // Configure the WhatsApp message and number.
    configureWhatsApp(
        WEBSITE_CONFIG.whatsappNumber,
        profile.businessName,
        profile.whatsappMessage
    );


    // Update footer branding.
    const footerCopyright =
        document.querySelector(".copyright");

    if (footerCopyright) {

        footerCopyright.textContent =
            `© ${new Date().getFullYear()} ${profile.businessName}. All rights reserved.`;
    }


    console.info(
        `WebCraft: "${profileName}" profile applied.`
    );

    return true;
}


/* ==========================================
   7. WHATSAPP CONTACT BUTTON
========================================== */

const whatsappLink =
    document.getElementById("whatsapp-link");


function configureWhatsApp(
    number,
    businessName,
    customMessage
) {

    if (!whatsappLink) {
        return;
    }


    const cleanNumber =
        String(number || "").replace(
            /[\s()+-]/g,
            ""
        );


    if (!/^\d{8,15}$/.test(cleanNumber)) {

        whatsappLink.removeAttribute("href");

        whatsappLink.setAttribute(
            "aria-disabled",
            "true"
        );

        whatsappLink.style.opacity = "0.65";

        whatsappLink.title =
            "WhatsApp contact has not been configured.";

        return;
    }


    const message =
        customMessage ||
        `Hi! I'm interested in learning more about ${businessName}.`;


    whatsappLink.href =
        `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;


    whatsappLink.removeAttribute("aria-disabled");

    whatsappLink.style.opacity = "1";

    whatsappLink.title =
        `Contact ${businessName} on WhatsApp`;
}


/* ==========================================
   8. NAVIGATION ACCESSIBILITY
========================================== */

document.querySelectorAll(
    '.navigation a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", () => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);

        if (target) {

            target.setAttribute(
                "tabindex",
                "-1"
            );
        }
    });
});


/* ==========================================
   9. INITIALIZATION
========================================== */

document.documentElement.classList.add(
    "js-enabled"
);


/* ==========================================
9. INITIALIZATION + SHAREABLE DEMO LINKS
========================================== */

document.documentElement.classList.add("js-enabled");

// Read the requested demo from the URL.
const urlParams = new URLSearchParams(window.location.search);
const requestedDemo = urlParams.get("demo");

// Use the URL demo if valid; otherwise use the configured profile.
const selectedProfile =
requestedDemo && Object.prototype.hasOwnProperty.call(
BUSINESS_PROFILES,
requestedDemo
)
? requestedDemo
: (
Object.prototype.hasOwnProperty.call(
BUSINESS_PROFILES,
WEBSITE_CONFIG.profile
)
? WEBSITE_CONFIG.profile
: "default"
);

// Apply the selected profile.
applyBusinessProfile(selectedProfile);

// Keep the dropdown synchronized with the selected profile.
const demoSelector = document.getElementById("business-demo");

if (demoSelector) {
demoSelector.value = selectedProfile;
}

/* =========================================
WEBCRAFT — SMART PRICING BUTTONS
========================================= */

(() => {
"use strict";

const pricingButtons = document.querySelectorAll(
    ".pricing-button[data-package]"
);

const whatsappLink = document.getElementById("whatsapp-link");

if (!pricingButtons.length || !whatsappLink) {
    return;
}

pricingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const packageName = button.dataset.package;

        const message =
            `Hello WebCraft! I'm interested in the ${packageName} website package. Please share more details.`;

        /*
         * Preserve the existing WhatsApp number
         * configured by the main script.js.
         */
        const existingHref = whatsappLink.getAttribute("href");

        if (
            existingHref &&
            existingHref.startsWith("https://wa.me/")
        ) {
            const phone = existingHref
                .split("?")[0]
                .replace("https://wa.me/", "");

            whatsappLink.href =
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        }

        /*
         * The button still scrolls to Contact.
         * The visitor can then tap the WhatsApp button.
         */
    });
});

})();
console.info(
    "First Income 2.0: JavaScript initialized successfully.");
  /* ==========================================
WEBCRAFT — BUSINESS DEMO SELECTOR
========================================== */

(() => {
"use strict";

const demoSelector = document.getElementById("business-demo");

if (!demoSelector) {
    console.warn("WebCraft: Business demo selector not found.");
    return;
}

// Show the currently active business profile.
const currentProfile = BUSINESS_PROFILES[WEBSITE_CONFIG.profile]
    ? WEBSITE_CONFIG.profile
    : "default";

demoSelector.value = currentProfile;

// Apply the selected demo when the visitor changes the dropdown.
demoSelector.addEventListener("change", () => {
    const selectedProfile = demoSelector.value;

    if (applyBusinessProfile(selectedProfile)) {
        console.info(
            `WebCraft: Demo switched to "${selectedProfile}".`
        );
    }
});
})();
/* ==========================================
WEBCRAFT — CLIENT ENQUIRY FORM
========================================== */

(() => {
"use strict";

const form = document.getElementById("client-enquiry-form");
const status = document.getElementById("enquiry-status");

if (!form) {
    console.warn("WebCraft: Client enquiry form not found.");
    return;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const clientName =
        document.getElementById("client-name").value.trim();

    const businessName =
        document.getElementById("business-name").value.trim();

    const businessType =
        document.getElementById("business-type").value;

    const websitePackage =
        document.getElementById("website-package").value;

    const requirements =
        document.getElementById("project-requirements").value.trim();

    if (
        !clientName ||
        !businessName ||
        !businessType ||
        !websitePackage
    ) {
        if (status) {
            status.textContent =
                "Please complete all required fields.";
        }
        return;
    }

    // Read the number from the existing WhatsApp configuration.
    const phone = String(
        WEBSITE_CONFIG.whatsappNumber || ""
    ).replace(/[\s()+-]/g, "");

    if (!/^\d{8,15}$/.test(phone)) {
        if (status) {
            status.textContent =
                "WhatsApp is not configured correctly yet.";
        }
        return;
    }

    const message = [
        "Hello WebCraft! I'd like to enquire about a website.",
        "",
        `Client Name: ${clientName}`,
        `Business Name: ${businessName}`,
        `Business Type: ${businessType}`,
        `Preferred Package: ${websitePackage}`,
        `Requirements: ${requirements || "Not specified"}`,
        "",
        "Please share the next steps."
    ].join("\n");

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    if (status) {
        status.textContent =
            "Opening WhatsApp with your enquiry...";
    }

    const whatsappWindow = window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

    if (!whatsappWindow && status) {
        status.textContent =
            "WhatsApp could not open automatically. Please allow pop-ups and try again.";
    }
});

})();