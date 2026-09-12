/* ==========================================================
   DHOLIWAL PARIVAR — APP LOGIC
   Bilingual interface (Hindi default) + vertical family tree.
   ========================================================== */

(function () {
  "use strict";

  const modalOverlay =
    document.getElementById("modal-overlay");

  const modalContent =
    document.getElementById("modal-content");


  /* ==========================================================
     TRANSLATIONS
     ========================================================== */

  const I18N = {

    hi: {

      familyName:
        "धोलीवाल परिवार",

      origin_place:
        "ताला धौला, जयपुर/दौसा",

      current_place:
        "गुहाला",

      origin_area:
        "अहिरों की ढाणी",

      navTree:
        "परिवार वृक्ष",

      navEvents:
        "कार्यक्रम",

      navAbout:
        "हमारे बारे में",

      heroEyebrow:
        "परिवार का रजिस्टर",

      heroLede:
        "एक ही जगह पर परिवार की पीढ़ियाँ — हमारे पूर्वज, हमारी खुशियाँ और आने वाले पारिवारिक अवसर।",

      established:
        "स्थापना",

      treeTitle:
        "परिवार वृक्ष",

      treeNote:
        "पीढ़ियों को ऊपर से नीचे क्रम में दिखाया गया है। किसी सदस्य पर टैप करके उनके विवरण और बच्चों को देखें।",

      treeLegend:
        "किसी सदस्य पर क्लिक करके विवरण देखें।",

      eventsTitle:
        "कार्यक्रम और पोस्ट",

      eventsNote:
        "पारिवारिक मिलनी, खास मौकों और रोज़मर्रा की यादों की तस्वीरें और कहानियाँ।",

      all:
        "सभी",

      photos:
        "तस्वीरें",

      programs:
        "कार्यक्रम",

      stories:
        "कहानियाँ",

      aboutTitle:
        "इस पेज के बारे में",

      aboutP1:
        "यह पेज इसलिए बनाया गया है ताकि परिवार की कोई कहानी, तारीख या नाम पीढ़ियों के बीच खो न जाए",

      aboutP2:
        "यहाँ परिवार वृक्ष और कार्यक्रम एक सरल डेटा फ़ाइल में रखे जाते हैं, ताकि परिवार का कोई भी सदस्य बिना वेबसाइट की तकनीकी जानकारी के इसे अपडेट कर सके।",

      statMembers:
        "दर्ज परिवार सदस्य",

      statGenerations:
        "पीढ़ियाँ",

      statEvents:
        "पोस्ट किए गए कार्यक्रम",

      statBeginning:
        "जहाँ से शुरुआत हुई",

      sonOf:
        "पुत्र",

      daughterOf:
        "पुत्री",

      wife:
        "पत्नी",

      husband:
        "पति",

      address:
        "पता",

      member:
        "सदस्य",

      members:
        "सदस्य",

      founder:
        "परिवार के संस्थापक",

      marriedTo:
        "विवाह",

      noChildren:
        "अभी तक कोई संतान दर्ज नहीं है।",

      close:
        "बंद करें",

      photo:
        "तस्वीर",

      story:
        "कहानी",

      familyNote:
        "परिवार की ओर से एक संदेश",

      generation:
        "पीढ़ी",

      langButton:
        "English",

      footerText:
        "आने वाली पीढ़ियों के लिए सहेजकर रखा गया।"

    },


    en: {

      familyName:
        "Dholiwal Parivar",

      origin_place:
        "Tala Dhaula, Jaipur/Dausa",

      current_place:
        "Guhala",

      origin_area:
        "Ahiro ki Dhani",

      navTree:
        "Family Tree",

      navEvents:
        "Events",

      navAbout:
        "About",

      heroEyebrow:
        "The family register",

      heroLede:
        "Generations of one family, kept in one place — who came before us, what we're celebrating, and what's coming up next.",

      established:
        "Established",

      treeTitle:
        "The family tree",

      treeNote:
        "Generations are shown from top to bottom. Tap anyone to see their details and children.",

      treeLegend:
        "Click a family member to see their details.",

      eventsTitle:
        "Events & posts",

      eventsNote:
        "Photos and stories from get-togethers, milestones, and everyday moments.",

      all:
        "All",

      photos:
        "Photos",

      programs:
        "Programs",

      stories:
        "Stories",

      aboutTitle:
        "About this page",

      aboutP1:
        "This page exists so that no story, date, or name in this family gets lost between generations.",

      aboutP2:
        "Everything here — the tree and events — is kept in a single plain data file, so anyone in the family can add to it without needing to know how websites work.",

      statMembers:
        "family members recorded",

      statGenerations:
        "generations",

      statEvents:
        "events posted",

      statBeginning:
        "where it all began",

      sonOf:
        "Son",

      daughterOf:
        "Daughter",

      wife:
        "Wife",

      husband:
        "Husband",

      address:
        "Address",

      member:
        "member",

      members:
        "members",

      founder:
        "Family founder",

      marriedTo:
        "Married to",

      noChildren:
        "No recorded children yet.",

      close:
        "Close",

      photo:
        "Photo",

      story:
        "Story",

      familyNote:
        "A note from the family",

      generation:
        "Generation",

      langButton:
        "हिन्दी",

      footerText:
        "Preserved for generations to come."

    }

  };


  /* ==========================================================
     LANGUAGE
     ========================================================== */

  let lang = "hi";


  function t(key) {

    return (
      I18N[lang][key] ||
      I18N.en[key] ||
      key
    );

  }


  function text(obj, key) {

    if (
      lang === "hi" &&
      obj[key + "Hi"]
    ) {

      return obj[key + "Hi"];

    }

    return obj[key] || "";

  }


  /* ==========================================================
     BILINGUAL PERSON HELPERS
     ========================================================== */

  function personName(person) {

    return lang === "hi"
      ? (
          person.nameHi ||
          person.name ||
          ""
        )
      : (
          person.name ||
          ""
        );

  }


  function personYears(person) {

    return lang === "hi"
      ? (
          person.yearsHi ||
          person.years ||
          ""
        )
      : (
          person.years ||
          ""
        );

  }


  function spouseName(person) {

    return lang === "hi"
      ? (
          person.spouseHi ||
          person.spouse ||
          ""
        )
      : (
          person.spouse ||
          ""
        );

  }


  function spouseYears(person) {

    return lang === "hi"
      ? (
          person.spouseYearsHi ||
          person.spouseYears ||
          ""
        )
      : (
          person.spouseYears ||
          ""
        );

  }


  function personAddress(person) {

    return lang === "hi"
      ? (
          person.addressHi ||
          person.address ||
          "उपलब्ध नहीं"
        )
      : (
          person.address ||
          "Not Available"
        );

  }


  function personRole(person) {

    return lang === "hi"
      ? (
          person.roleHi ||
          person.role ||
          ""
        )
      : (
          person.role ||
          ""
        );

  }


  /* ==========================================================
     GENDER-BASED RELATIONSHIP HELPERS
     ========================================================== */

  function relationshipToParent(person) {

    if (person.gender === "female") {

      return t("daughterOf");

    }

    return t("sonOf");

  }


  function spouseLabel(person) {

    if (person.gender === "female") {

      return t("husband");

    }

    return t("wife");

  }


  /* ==========================================================
     STATIC TRANSLATIONS
     ========================================================== */

  function applyStaticTranslations() {

    document.documentElement.lang =
      lang;


    document
      .querySelectorAll("[data-i18n]")
      .forEach(el => {

        const key =
          el.dataset.i18n;

        if (
          I18N[lang][key]
        ) {

          el.textContent =
            I18N[lang][key];

        }

      });


    const activeLanguage =
      document.querySelector(
        ".lang-active"
      );


    const inactiveLanguage =
      document.querySelector(
        ".language-toggle > span:last-child"
      );


    if (activeLanguage) {

      activeLanguage.textContent =
        lang === "hi"
          ? "हिन्दी"
          : "English";

    }


    if (inactiveLanguage) {

      inactiveLanguage.textContent =
        lang === "hi"
          ? "English"
          : "हिन्दी";

    }


    const navToggle =
      document.getElementById(
        "nav-toggle"
      );


    if (navToggle) {

      navToggle.setAttribute(
        "aria-label",
        lang === "hi"
          ? "मेन्यू खोलें"
          : "Open menu"
      );

    }


    const modalClose =
      document.getElementById(
        "modal-close-fallback"
      );


    if (modalClose) {

      modalClose.setAttribute(
        "aria-label",
        t("close")
      );

    }


    document.title =
      lang === "hi"
        ? "Dholiwal Parivar | धोलीवाल परिवार"
        : "Dholiwal Parivar";

  }


  /* ==========================================================
     MODAL
     ========================================================== */

  function openModal(html) {

    modalContent.innerHTML =
      html;


    modalOverlay.classList.add(
      "open"
    );


    document.body.style.overflow =
      "hidden";


    /*
      Start the modal content at the top.
      This is especially important for
      long stories.
    */

    requestAnimationFrame(
      () => {

        modalContent.scrollTop =
          0;

      }
    );

  }


  function closeModal() {

    modalOverlay.classList.remove(
      "open"
    );


    modalContent.innerHTML =
      "";


    document.body.style.overflow =
      "";

  }


  document
    .getElementById(
      "modal-close-fallback"
    )
    .addEventListener(
      "click",
      closeModal
    );


  modalOverlay.addEventListener(
    "click",
    (e) => {

      if (
        e.target ===
        modalOverlay
      ) {

        closeModal();

      }

    }
  );


  document.addEventListener(
    "keydown",
    (e) => {

      if (
        e.key === "Escape"
      ) {

        closeModal();

      }

    }
  );


  /* ==========================================================
     INITIALS
     ========================================================== */

  function initials(name) {

    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0])
      .join("")
      .toUpperCase();

  }


  /* ==========================================================
     EXPANDABLE VERTICAL FAMILY TREE
     ========================================================== */

  function personCardHTML(
    person,
    isRoot,
    hasChildren,
    isExpanded
  ) {

    const displayName =
      personName(person);


    const displayYears =
      personYears(person);


    const role =
      personRole(person);


    const displaySpouse =
      spouseName(person);


    const displaySpouseLabel =
      spouseLabel(person);


    const avatar =
      person.photo

        ? `
          <img
            class="person-avatar"
            style="object-fit:cover"
            src="${person.photo}"
            alt=""
          >
        `

        : `
          <div class="person-avatar">
            ${initials(person.name)}
          </div>
        `;


    const ariaLabel =
      hasChildren

        ? `${
            isExpanded
              ? "Collapse "
              : "Expand "
          }${displayName}`

        : displayName;


    return `

      <button
        class="person-card"
        data-name="${encodeURIComponent(person.name)}"
        aria-expanded="${
          hasChildren
            ? isExpanded
            : "false"
        }"
        aria-label="${ariaLabel}"
      >

        ${avatar}


        <div class="person-name">
          ${displayName}
        </div>


        <div class="person-years">
          ${displayYears}
        </div>


        <div class="person-link">

          ${
            isRoot
              ? role
              : relationshipToParent(person)
          }

        </div>


        ${
          !isRoot &&
          displaySpouse

            ? `

              <div class="person-spouse">

                <span class="spouse-label">
                  ${displaySpouseLabel}:
                </span>

                <span class="spouse-name">
                  ${displaySpouse}
                </span>

              </div>

            `

            : ""
        }


        ${
          hasChildren

            ? `

              <span
                class="expand-control"
                aria-hidden="true"
              >
                +
              </span>

            `

            : ""
        }

      </button>

    `;

  }


  /*
    Names of branches that are currently expanded.

    Empty by default:
    only the root/parent is visible.
  */

  const expanded =
    new Set();


  function renderTree(
    focusName = null
  ) {

    const container =
      document.getElementById(
        "tree-container"
      );


    const peopleByName = {};


    /* ---------------- Index all people ---------------- */

    (function indexPeople(person) {

      peopleByName[
        person.name
      ] = person;


      (person.children || [])
        .forEach(
          indexPeople
        );

    })(familyTree);


    /* ---------------- Render node ---------------- */

    function renderNode(
      person,
      parentName,
      level
    ) {

      const children =
        person.children || [];


      const isOpen =
        expanded.has(
          person.name
        );


      return `

        <div
          class="tree-node ${
            children.length &&
            !isOpen
              ? "is-collapsed"
              : ""
          }"
          data-person="${encodeURIComponent(
            person.name
          )}"
        >

          ${personCardHTML(
            person,
            !parentName,
            children.length > 0,
            isOpen
          )}


          ${
            children.length

              ? `

                <div class="tree-children">

                  <div
                    class="tree-connector"
                    aria-hidden="true"
                  ></div>


                  <div class="tree-children-row">

                    ${
                      children
                        .map(
                          child =>
                            renderNode(
                              child,
                              person.name,
                              level + 1
                            )
                        )
                        .join("")
                    }

                  </div>

                </div>

              `

              : ""
          }

        </div>

      `;

    }


    /* ---------------- Tree HTML ---------------- */

    container.innerHTML = `

      <div class="vertical-tree">

        <div class="tree-canvas">

          ${renderNode(
            familyTree,
            null,
            0
          )}

          <div class="tree-help">

            ${
              lang === "hi"
                ? "किसी सदस्य पर क्लिक करके उसकी शाखा खोलें या बंद करें।"
                : "Click a member to expand or collapse their branch."
            }

          </div>

        </div>

      </div>

    `;


    const treeScroller =
      container.querySelector(
        ".vertical-tree"
      );


    /* ---------------- Card click handling ---------------- */

    container
      .querySelectorAll(
        ".person-card"
      )
      .forEach(card => {

        card.addEventListener(
          "click",
          (event) => {

            event.stopPropagation();


            const name =
              decodeURIComponent(
                card.dataset.name
              );


            const person =
              peopleByName[name];


            if (!person) {
              return;
            }


            const hasChildren =
              (
                person.children ||
                []
              ).length > 0;


            if (hasChildren) {

              /* -------- Collapse -------- */

              if (
                expanded.has(name)
              ) {

                const collapseDescendants =
                  (p) => {

                    (
                      p.children ||
                      []
                    ).forEach(
                      child => {

                        expanded.delete(
                          child.name
                        );

                        collapseDescendants(
                          child
                        );

                      }
                    );

                  };


                expanded.delete(
                  name
                );


                collapseDescendants(
                  person
                );

              }

              /* -------- Expand -------- */

              else {

                expanded.add(
                  name
                );

              }


              renderTree(name);


              /*
                Keep clicked branch
                comfortably in view.
              */

              requestAnimationFrame(
                () => {

                  const target =
                    container.querySelector(
                      `.tree-node[data-person="${encodeURIComponent(
                        name
                      )}"] > .person-card`
                    );


                  if (
                    target &&
                    treeScroller
                  ) {

                    const scrollerRect =
                      treeScroller
                        .getBoundingClientRect();


                    const targetRect =
                      target
                        .getBoundingClientRect();


                    const targetCenter =
                      targetRect.left +
                      targetRect.width /
                        2;


                    const scrollerCenter =
                      scrollerRect.left +
                      scrollerRect.width /
                        2;


                    treeScroller.scrollLeft +=
                      targetCenter -
                      scrollerCenter;

                  }

                }
              );

            }

            /* -------- Leaf node -------- */

            else {

              showPersonModal(
                person
              );

            }

          }
        );

      });


    /* ---------------- Focus clicked branch ---------------- */

    if (focusName) {

      requestAnimationFrame(
        () => {

          const target =
            container.querySelector(
              `.tree-node[data-person="${encodeURIComponent(
                focusName
              )}"] > .person-card`
            );


          if (
            target &&
            treeScroller
          ) {

            const scrollerRect =
              treeScroller
                .getBoundingClientRect();


            const targetRect =
              target
                .getBoundingClientRect();


            treeScroller.scrollLeft +=
              (
                targetRect.left +
                targetRect.width / 2
              ) -
              (
                scrollerRect.left +
                scrollerRect.width / 2
              );

          }

        }
      );

    }

  }


  /* ==========================================================
     PERSON MODAL
     ========================================================== */

  function showPersonModal(
    person
  ) {

    const displayName =
      personName(person);


    const displayYears =
      personYears(person);


    const displaySpouse =
      spouseName(person);


    const displaySpouseYears =
      spouseYears(person);


    const displayAddress =
      personAddress(person);


    const avatar =
      person.photo

        ? `
          <img
            class="modal-avatar-lg"
            style="object-fit:cover"
            src="${person.photo}"
            alt=""
          >
        `

        : `
          <div class="modal-avatar-lg">
            ${initials(person.name)}
          </div>
        `;


    const children =
      (person.children || [])
        .map(
          child => `

            <span class="relation-chip">
              ${personName(child)}
            </span>

          `
        )
        .join("");


    const role =
      personRole(person);


    const spouseLabelText =
      spouseLabel(person);


    openModal(`

      ${avatar}


      <h3>
        ${displayName}
      </h3>


      <div class="modal-meta">

        ${displayYears}

        ${
          role
            ? " · " + role
            : ""
        }

      </div>


      ${
        person.spouse

          ? `

            <p>

              ${spouseLabelText}

              <strong>
                ${displaySpouse}
              </strong>

              ${
                displaySpouseYears
                  ? ` (${displaySpouseYears})`
                  : ""
              }

            </p>

          `

          : ""
      }


      ${
        displayAddress

          ? `

            <p>

              <strong>
                ${t("address")}:
              </strong>

              ${displayAddress}

            </p>

          `

          : ""
      }


      ${
        children

          ? `

            <div class="modal-relations">

              ${children}

            </div>

          `

          : `

            <p
              style="
                color:var(--ink-soft);
                font-size:0.88rem;
              "
            >
              ${t("noChildren")}
            </p>

          `
      }

    `);

  }


  /* ==========================================================
     DATE FORMAT
     ========================================================== */

  function formatDate(iso) {

    const d =
      new Date(
        iso + "T00:00:00"
      );


    return d.toLocaleDateString(

      lang === "hi"
        ? "hi-IN"
        : "en-IN",

      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }

    );

  }


  /* ==========================================================
     EVENTS
     ========================================================== */

  let activeFilter =
    "all";


  function renderEvents() {

    const grid =
      document.getElementById(
        "event-grid"
      );


    if (!grid) {
      return;
    }


    const filtered =
      events

        .filter(
          e =>
            activeFilter === "all" ||
            e.type === activeFilter
        )

        .sort(
          (a, b) =>
            new Date(b.date) -
            new Date(a.date)
        );


    grid.innerHTML =
      filtered
        .map(
          e => `

            <button
              class="event-card"
              data-id="${e.id}"
            >

              <div
                class="event-media ${
                  e.type === "photo"
                    ? ""
                    : "text-only"
                }"
              >

                ${
                  e.type === "photo"

                    ? `

                      <img
                        src="${e.image}"
                        alt=""
                      >

                    `

                    : `

                      <span>
                        ${t("familyNote")}
                      </span>

                    `
                }

              </div>


              <span class="event-stamp">

                ${
                  e.type === "photo"
                    ? t("photo")
                    : t("story")
                }

              </span>


              <div class="event-body">

                <div class="event-date">
                  ${formatDate(e.date)}
                </div>


                <div class="event-title">
                  ${text(
                    e,
                    "title"
                  )}
                </div>


                <div class="event-excerpt">
                  ${text(
                    e,
                    "excerpt"
                  )}
                </div>

              </div>

            </button>

          `
        )
        .join("");


    grid
      .querySelectorAll(
        ".event-card"
      )
      .forEach(card => {

        card.addEventListener(
          "click",
          () => {

            const event =
              events.find(
                e =>
                  e.id ===
                  card.dataset.id
              );


            if (!event) {
              return;
            }


            showEventModal(
              event
            );

          }
        );

      });

  }


  /* ==========================================================
     EVENT MODAL
     ========================================================== */

  function showEventModal(
    event
  ) {

    const title =
      text(
        event,
        "title"
      );


    const body =
      text(
        event,
        "body"
      );


    openModal(`

      ${
        event.type === "photo"

          ? `

            <img
              class="modal-event-image"
              src="${event.image}"
              alt="${title}"
            >

          `

          : `

            <div class="story-modal-header">

              <span class="story-modal-label">
                ${t("story")}
              </span>

            </div>

          `
      }


      <div class="modal-meta">
        ${formatDate(event.date)}
      </div>


      <h3>
        ${title}
      </h3>


      <div class="event-modal-body">

        ${body}

      </div>

    `);

  }


  /* ==========================================================
     EVENT FILTERS
     ========================================================== */

  document
    .querySelectorAll(
      ".filter-btn"
    )
    .forEach(btn => {

      btn.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".filter-btn"
            )
            .forEach(
              b =>
                b.classList.remove(
                  "active"
                )
            );


          btn.classList.add(
            "active"
          );


          activeFilter =
            btn.dataset.filter;


          renderEvents();

        }
      );

    });


  /* ==========================================================
     LANGUAGE TOGGLE
     ========================================================== */

  document
    .getElementById(
      "language-toggle"
    )
    .addEventListener(
      "click",
      () => {

        lang =
          lang === "hi"
            ? "en"
            : "hi";


        applyStaticTranslations();

        renderTree();

        renderEvents();

      }
    );


  /* ==========================================================
     NAVIGATION
     ========================================================== */

  const navToggle =
    document.getElementById(
      "nav-toggle"
    );


  const navLinks =
    document.getElementById(
      "nav-links"
    );


  if (
    navToggle &&
    navLinks
  ) {

    navToggle.addEventListener(
      "click",
      () =>
        navLinks.classList.toggle(
          "open"
        )
    );


    navLinks
      .querySelectorAll("a")
      .forEach(a => {

        a.addEventListener(
          "click",
          () =>
            navLinks.classList.remove(
              "open"
            )
        );

      });

  }


  /* ==========================================================
     STATS
     ========================================================== */

  function countAll(
    person
  ) {

    let count = 1;


    (
      person.children ||
      []
    )
      .forEach(c => {

        count +=
          countAll(c);

      });


    return count;

  }


  function countGenerations(
    person
  ) {

    let max = 1;


    (
      person.children ||
      []
    )
      .forEach(c => {

        max =
          Math.max(
            max,
            countGenerations(c) + 1
          );

      });


    return max;

  }


  function renderStats() {

    const memberStat =
      document.getElementById(
        "stat-members"
      );


    const generationStat =
      document.getElementById(
        "stat-generations"
      );


    const eventStat =
      document.getElementById(
        "stat-events"
      );


    if (memberStat) {

      memberStat.textContent =
        countAll(
          familyTree
        );

    }


    if (generationStat) {

      generationStat.textContent =
        countGenerations(
          familyTree
        );

    }


    if (eventStat) {

      eventStat.textContent =
        events.length;

    }

  }


  /* ==========================================================
     INITIAL RENDER
     ========================================================== */

  applyStaticTranslations();

  renderTree();

  renderEvents();

  renderStats();

})();