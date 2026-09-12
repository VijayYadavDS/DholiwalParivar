/* ============================================================
   DHOLIWAL PARIVAR — DATA FILE
   ------------------------------------------------------------
   This is the only file most people will ever need to touch.
   Add family members, events, and notices here. No coding
   knowledge needed beyond following the existing pattern —
   just copy a block, change the text, keep the commas.
   ============================================================ */

/* ---------- 1. FAMILY TREE ----------
   Start with the founding couple, then nest children inside
   "children: [ ... ]". Each person can have their own children
   nested the same way, generation after generation.
   photo: leave as "" to show initials instead of a picture.
------------------------------------------------------------- */
// ============================================================
// PERSON HELPER
// ============================================================

const person = (
  name,
  nameHi,
  gender,
  children = [],
  years = "- : -",
  yearsHi = "1950 – ",
  spouse = "Not Available",
  spouseHi = "उपलब्ध नहीं",
  photo = "",
  role = "",
  roleHi = ""
) => ({
  name,
  nameHi,
  gender,
  years,
  yearsHi,
  spouse,
  spouseHi,
  photo,
  role,
  roleHi,
  children
});


// ============================================================
// GENERATION 1
// ============================================================

const kheenvaRamYadav = person(
  "Kheenva Ram Yadav",
  "खींवा राम यादव",
  "male",
  [],
  "- : -",
  "- : -",
  "Not Available",
  "उपलब्ध नहीं",
  "",
  "Founder",
  "संस्थापक"
);


// ============================================================
// GENERATION 2
// ============================================================

const harjiYadav = person(
  "Harji Yadav",
  "हरजी यादव",
  "male",
  []
);

const kishanYadav = person(
  "Kishan Yadav",
  "किशन यादव",
  "male",
  []
);


// ============================================================
// GENERATION 3
// ============================================================

const nathuRamYadav = person(
  "Nathu Ram Yadav",
  "नाथू राम यादव",
  "male",
  []
);

const gumaanSinghYadav = person(
  "Gumaan Singh Yadav",
  "गुमान सिंह यादव",
  "male",
  []
);

const bisanSinghYadav = person(
  "Bisan Singh Yadav",
  "बिसन सिंह यादव",
  "male",
  []
);

const amboYadav = person(
  "Ambo Yadav",
  "आंबो यादव",
  "male",
  []
);

const birduYadav = person(
  "Birdu Yadav",
  "बिरदू यादव",
  "male",
  []
);

const harjinotAvailableYadav = person(
  "Not Available",
  "उपलब्ध नहीं",
  "male",
  []
);

const ramjilalYadav = person(
  "Ramjilal Yadav",
  "रामजीलाल यादव",
  "male",
  []
);


// ============================================================
// GENERATION 4 — NATHU RAM'S FOUR CHILDREN
// ============================================================

const jhuthaRamYadav = person(
  "Jhutha Ram Yadav",
  "झूथा राम यादव",
  "male",
  []
);

const hardevaYadav = person(
  "Hardeva Yadav",
  "हरदेवा यादव",
  "male",
  []
);

const lakshmanYadav = person(
  "Lakshman Yadav",
  "लक्ष्मण यादव",
  "male",
  []
);

const gauriYadav = person(
  "Gauri Yadav",
  "गौरी यादव",
  "female",
  []
);

const chhotuRamYadav = person(
  "Chhotu Ram Yadav",
  "छोटू राम यादव",
  "male",
  []
);

// ============================================================
// GENERATION 4 — Gumaan
// ============================================================

const jodharamYadav = person(
  "Jodharam Yadav",
  "जोधाराम यादव",
  "male",
  []
);

const GumaannotAvailableYadav = person(
  "Not Available",
  "उपलब्ध नहीं",
  "male",
  []
);

const pooraRamYadav = person(
  "Poora Ram Yadav",
  "पूरा राम यादव",
  "male",
  []
);

const baluramYadav = person(
  "Baluram Yadav",
  "बालूराम यादव",
  "male",
  []
);

const narsiYadav = person(
  "Narsi Yadav",
  "नरसी यादव",
  "male",
  []
);

const govindYadav = person(
  "Govind Yadav",
  "गोविंद यादव",
  "male",
  []
);

const jaitaYadav = person(
  "Jaita Yadav",
  "जैता यादव",
  "male",
  []
);

const kahnaRamYadav = person(
  "Kahna Ram Yadav",
  "काहना राम यादव",
  "male",
  []
);

const laduRamYadav = person(
  "Ladu Ram Yadav",
  "लाडू राम यादव",
  "male",
  []
);

const dhannoYadav = person(
  "Dhanno Yadav",
  "धन्नो यादव",
  "male",
  []
);


// ============================================================
// GENERATION 5 — Poora RAM'S CHILD
// ============================================================

const rudaRamYadav = person(
  "Ruda Ram Yadav",
  "रूड़ा राम यादव",
  "male",
  []
);

const hanumanYadav = person(
  "Hanuman Yadav",
  "हनुमान यादव",
  "male",
  []
);

const hardevaYadav2 = person(
  "Hardeva Yadav",
  "हरदेवा यादव",
  "male",
  []
);

const jagannathYadav = person(
  "Jagannath Yadav",
  "जगन्नाथ यादव",
  "male",
  []
);


const garuYadav = person(
  "Garu Yadav",
  "गारू यादव",
  "male",
  []
);

const gullaYadav = person(
  "Gulla Yadav",
  "गुल्ला यादव",
  "male",
  []
);

const baluramNotAvailableDaughter = person(
  "Name Not Available",
  "नाम उपलब्ध नहीं",
  "female",
  []
);

const omkarYadav = person(
  "Omkar Yadav",
  "ओंकार यादव",
  "male",
  []
);




// ============================================================
// GENERATION 5 — JHUTHA RAM'S CHILD
// ============================================================

const boduRamYadav = person(
  "Bodu Ram Yadav",
  "बोदू राम यादव",
  "male",
  []
);

const gothiYadav = person(
  "Gothi Yadav",
  "गोठी यादव",
  "female",
  []
);

const patassiYadav = person(
  "Pataasi Yadav",
  "पतासी यादव",
  "female",
  []
);

// ============================================================
// GENERATION 5 — hardeva RAM'S CHILD
// ============================================================
const shravanYadav = person(
  "Shravan Yadav",
  "श्रवण यादव",
  "female",
  []
);

const girdhariYadav = person(
  "Girdhari Lal Yadav",
  "गिरधारी लाल यादव",
  "male",
  []
);

const prabhatiYadav = person(
  "Prabhati Yadav",
  "प्रभाती यादव",
  "female",
  []
);

const jhabarYadav = person(
  "Jhabar Mal Yadav",
  "झाबर मल यादव",
  "male",
  []
);

const dhapuYadav = person(
  "Dhapu Yadav",
  "धापू यादव",
  "female",
  []
);

const birjiYadav = person(
  "Birji Yadav",
  "बिरजी यादव",
  "female",
  []
);

const santoshYadav = person(
  "Santosh Yadav",
  "संतोष यादव",
  "female",
  []
);

const madanYadav = person(
  "Madan Lal Yadav",
  "मदन लाल यादव",
  "male",
  []
);

// ============================================================
// GENERATION 5 — CHHOTU RAM'S CHILDREN
// ============================================================

const mahavirPrasadYadav = person(
  "Mahavir Prasad Yadav",
  "महावीर प्रसाद यादव",
  "male",
  []
);

const sajnaYadav = person(
  "Sajna Yadav",
  "सजना यादव",
  "female",
  []
);

const bhansinghYadav = person(
  "Bhansingh Yadav",
  "भानसिंह यादव",
  "male",
  []
);

const mohanLalYadav = person(
  "Mohan Lal Yadav",
  "मोहन लाल यादव",
  "male",
  []
);

const sumerSinghYadav = person(
  "Sumer Singh Yadav",
  "सुमेर सिंह यादव",
  "male",
  []
);

const kailashChandYadav = person(
  "Kailash Chand Yadav",
  "कैलाश चंद यादव",
  "male",
  []
);

const gyanChandYadav = person(
  "Gyan Chand Yadav",
  "ज्ञान चंद यादव",
  "male",
  []
);

const savitriYadav = person(
  "Savitri Yadav",
  "सावित्री यादव",
  "female",
  []
);

const ramSinghYadav = person(
  "Ram Singh Yadav",
  "राम सिंह यादव",
  "male",
  []
);

const vinodYadav = person(
  "Vinod Yadav",
  "विनोद यादव",
  "male",
  []
);

// ============================================================
// GENERATION 6 — BODU RAM'S CHILDREN
// ============================================================
const durgaPrasadYadav = person(
  "Durga Prasad Yadav",
  "दुर्गा प्रसाद यादव",
  "male",
  []
);

const premYadav = person(
  "Prem Yadav",
  "प्रेम यादव",
  "female",
  []
);

const ramkalaYadav = person(
  "Ramkala Yadav",
  "रामकला यादव",
  "female",
  []
);

const mamtaYadav = person(
  "Mamta Yadav",
  "ममता यादव",
  "female",
  []
);

const mahendraYadav = person(
  "Mahendra Yadav",
  "महेंद्र यादव",
  "male",
  []
);

const vikasYadav = person(
  "Vikas Yadav",
  "विकास यादव",
  "male",
  []
);


// ============================================================
// GENERATION 7 — DURGA PRASAD'S CHILDREN
// ============================================================

const anjaliYadav = person(
  "Anjali Yadav",
  "अंजली यादव",
  "female",
  []
);

const nachitaYadav = person(
  "Nachita Yadav",
  "नचिता यादव",
  "female",
  []
);

const nikhilYadav = person(
  "Nikhil Yadav",
  "निखिल यादव",
  "male",
  []
);

const ayushYadav = person(
  "Ayush Yadav",
  "आयुष यादव",
  "male",
  []
);

// ============================================================
// GENERATION 7 — MAHENDRA YADAV'S CHILDREN
// ============================================================

const saumyaYadav = person(
  "Saumya Yadav",
  "सौम्य यादव",
  "male",
  []
);

const ayanshYadav = person(
  "Ayansh Yadav",
  "अयांश यादव",
  "male",
  []
);


// ============================================================
// GENERATION 7 — VIKAS YADAV'S CHILDREN
// ============================================================

const himaniYadav = person(
  "Himani Yadav",
  "हिमानी यादव",
  "female",
  []
);


// ============================================================
// BUILD HIERARCHY
// ============================================================


// Kheenva Ram → Harji, Kishan

kheenvaRamYadav.children = [
  harjiYadav,
  kishanYadav
];

// KiharjiYadav →

harjiYadav.children = [
  gumaanSinghYadav,
  bisanSinghYadav,
  amboYadav,
  birduYadav,
  harjinotAvailableYadav
];

// Kishan → Nathu Ram

kishanYadav.children = [
  nathuRamYadav
];


// Nathu Ram → Jhutha Ram, Hardeva, Lakshman, Chhotu Ram

nathuRamYadav.children = [
  jhuthaRamYadav,
  hardevaYadav,
  lakshmanYadav,
  gauriYadav,
  chhotuRamYadav
];

gumaanSinghYadav.children = [
  jodharamYadav,
  GumaannotAvailableYadav,
  pooraRamYadav
];

bisanSinghYadav.children = [
  baluramYadav,
  narsiYadav,
  govindYadav,
  jaitaYadav,
  kahnaRamYadav
];

// pooraRamYadav
pooraRamYadav.children = [
  hanumanYadav,
  hardevaYadav2,
  jagannathYadav
];

baluramYadav.children = [
  garuYadav,
  gullaYadav,
  baluramNotAvailableDaughter
];

baluramNotAvailableDaughter.children = [
  ramjilalYadav
];

laduRamYadav.children = [
  rudaRamYadav
];


narsiYadav.children = [
  omkarYadav
];

birduYadav.children = [
  laduRamYadav,
  dhannoYadav
];

// Jhutha Ram → Bodu Ram

jhuthaRamYadav.children = [
  boduRamYadav,
  gothiYadav,
  patassiYadav
];

// hardevaYadav

hardevaYadav.children = [
  shravanYadav,
  girdhariYadav,
  prabhatiYadav,
  jhabarYadav,
  dhapuYadav,
  birjiYadav,
  santoshYadav,
  madanYadav
];

// chhotu ram

chhotuRamYadav.children = [
  mahavirPrasadYadav,
  sajnaYadav,
  bhansinghYadav,
  mohanLalYadav,
  sumerSinghYadav,
  kailashChandYadav,
  gyanChandYadav,
  savitriYadav,
  ramSinghYadav,
  vinodYadav
];


// Bodu Ram → Prem, Ramkala, Durga Prasad, Mamta, Mahendra, Vikas

boduRamYadav.children = [
  durgaPrasadYadav,
  premYadav,
  ramkalaYadav,
  mamtaYadav,
  mahendraYadav,
  vikasYadav
];


// Durga Prasad → Anjali, Nachita, Nikhil

durgaPrasadYadav.children = [
  anjaliYadav,
  nachitaYadav,
  nikhilYadav,
  ayushYadav
];


// Mahendra → Cheeku, Saumya

mahendraYadav.children = [
  saumyaYadav,
  ayanshYadav,
];

vikasYadav.children = [
  himaniYadav
];


// ============================================================
// FINAL FAMILY TREE
// ============================================================

const familyTree = kheenvaRamYadav;

/* ---------- 2. EVENTS ----------
   type: "photo"  -> shows an image (use "image" field, a URL or path)
   type: "story"  -> text-only post, no image needed
------------------------------------------------------------- */
const events = [
 {
    id: "e2",
    title: "Bhadara",
    titleHi: "भंडारा",
    excerptHi: "भंडारे में परिवार और गाँव के लोगों के साथ दाल बाटी चूरमा का प्रसाद हुआ।",
    bodyHi: "भंडारे के अवसर पर पूरे परिवार ने मिलकर दाल बाटी चूरमा तैयार किया। सुबह से ही घर के बड़े-बुजुर्ग और बच्चे तैयारियों में जुट गए। सभी ने साथ बैठकर प्रसाद ग्रहण किया और परिवार के साथ एक खूबसूरत दिन बिताया।",
    date: "2026-05-10",
    type: "photo",
    image: "assets/images/balaji.png",
    excerpt: "The parivar came together for a Bhadara with dal baati churma and blessings shared with everyone.",
    body: "The whole parivar came together for a Bhadara this year. From early morning, everyone joined in the preparations, with dal baati churma being prepared for the gathering. The day was filled with prayers, food, conversations and the warmth of having everyone together."
  },

  {
    id: "e3",
    title: "Wedding",
    titleHi: "विवाह समारोह",
    excerptHi: "परिवार में विवाह का शुभ अवसर आया और पूरा परिवार उत्सव में शामिल हुआ।",
    bodyHi: "परिवार में विवाह का शुभ अवसर पूरे परिवार के लिए खुशी और उत्सव लेकर आया। रिश्तेदार और परिवार के सदस्य दूर-दूर से समारोह में शामिल होने पहुंचे। पारंपरिक रस्मों, संगीत, हंसी-खुशी और आशीर्वाद के साथ यह विवाह समारोह सभी के लिए एक यादगार अवसर बन गया।",
    date: "2026-06-21",
    type: "photo",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80",
    excerpt: "A beautiful wedding brought the whole parivar together for a celebration filled with traditions, laughter and blessings.",
    body: "A wedding in the family brought everyone together for a celebration filled with traditions, laughter and blessings. Relatives travelled from near and far to be part of the occasion. From the ceremonies and music to the meals and family photographs, it was a memorable celebration for everyone."
  },
 {
  id: "e4",
  title: "Sthapana of Balaji Temple, Dehra Johri Wali",
  titleHi: "देहरा जोहरी वाली बालाजी मंदिर की स्थापना",
  excerptHi: "देहरा जोहरी वाली बालाजी मंदिर की स्थापना परिवार और क्षेत्र के लिए आस्था का एक महत्वपूर्ण अध्याय रही।",
  bodyHi: "देहरा जोहरी वाली बालाजी मंदिर की स्थापना परिवार और क्षेत्र के लिए आस्था और श्रद्धा का एक महत्वपूर्ण अध्याय रही। बालाजी महाराज के इस पावन स्थान को वर्षों से श्रद्धालुओं की गहरी आस्था और विश्वास का केंद्र माना जाता है। मान्यता है कि यहाँ सच्चे मन से आने वाले भक्तों की मनोकामनाएँ पूर्ण होती हैं और बालाजी महाराज का आशीर्वाद अपने भक्तों को शक्ति और संरक्षण प्रदान करता है। मंदिर की स्थापना के साथ यह स्थान परिवार और आसपास के लोगों के लिए भक्ति, विश्वास और एकता का केंद्र बन गया। आज भी श्रद्धालु यहाँ दर्शन और आशीर्वाद लेने आते हैं तथा इस पवित्र स्थान से जुड़ी आस्था पीढ़ी-दर-पीढ़ी आगे बढ़ रही है।",
  date: "2026-06-21",
  type: "story",
  image: "assets/images/balaji.png",
  excerpt: "The Sthapana of Balaji Temple, Dehra Johri Wali, marked an important chapter of faith for the parivar and the surrounding community.",
  body: "The Sthapana of Balaji Temple, Dehra Johri Wali, marked an important chapter in the spiritual journey of the parivar and the surrounding community. The sacred temple has long been regarded as a place of deep faith and devotion to Balaji Maharaj. Devotees believe that those who come with a sincere heart receive His blessings, strength and protection. Since its Sthapana, the temple has become a place where generations of families come together in prayer and devotion. Even today, devotees visit the temple to seek blessings, and the faith associated with this sacred place continues to be carried forward from one generation to the next."
}
];

/* ---------- 3. NOTICES ----------
   pinned: true keeps a notice highlighted at the top of the board.
   Only pin what is genuinely current — it will look larger.
------------------------------------------------------------- */
const notices = [
  {
    id: "n1",
    title: "Annual Parivar Milni — save the date",
    titleHi: "वार्षिक परिवार मिलनी — तारीख़ सुरक्षित रखें",
    tagHi: "मिलनी",
    bodyHi: "इस वर्ष की पूर्ण पारिवारिक मिलनी रविवार, 24 अक्टूबर को लुधियाना वाले घर पर सुबह 11 बजे से होगी। सभी शाखाएँ 10 तारीख़ तक मनप्रीत को सदस्यों की संख्या बता दें, ताकि इस बार कैटरर की व्यवस्था ठीक से हो सके।",
    date: "2026-10-24",
    tag: "Gathering",
    pinned: true,
    body: "This year's full-family milni will be held on Sunday, 24th October at the Ludhiana house, starting 11 AM. All branches, please confirm numbers with Manpreet by the 10th so the caterer can be booked properly this time."
  },
  {
    id: "n2",
    title: "Naina's Anand Karaj — 14th December",
    titleHi: "नैना का आनंद कारज — 14 दिसंबर",
    tagHi: "विवाह",
    bodyHi: "जसप्रीत और करणवीर को यह बताते हुए खुशी हो रही है कि नैना का आनंद कारज 14 दिसंबर को मॉडल टाउन के गुरुद्वारा साहिब में होगा। औपचारिक निमंत्रण बाद में आएगा — तब तक तारीख़ सुरक्षित रखें।",
    date: "2026-12-14",
    tag: "Wedding",
    pinned: false,
    body: "Jaspreet and Karanveer are delighted to share that Naina's Anand Karaj will take place on 14th December at the Gurudwara Sahib, Model Town. Formal cards to follow — until then, please block the date."
  },
  {
    id: "n3",
    title: "Family tree update — please check your branch",
    titleHi: "परिवार वृक्ष अपडेट — अपनी शाखा ज़रूर देखें",
    tagHi: "व्यवस्था",
    bodyHi: "हम पहली बार परिवार वृक्ष को व्यवस्थित रूप से बना रहे हैं। यदि आपकी शाखा में कोई सदस्य छूट गया है, कोई तारीख़ गलत है या आप फोटो जोड़ना चाहते हैं, तो पेज बनाने वाले सदस्य को जानकारी भेजें। हर सुधार अगली पीढ़ी के लिए उपयोगी होगा।",
    date: "2026-08-02",
    tag: "Housekeeping",
    pinned: false,
    body: "We're building this tree out properly for the first time. If your branch is missing anyone, has a wrong date, or you'd like a photo added, please send details to whoever set up this page. Every correction helps the next generation."
  }
];
