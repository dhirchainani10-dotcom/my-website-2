// ---------- DATA ----------
const PILLARS = [
  { icon:"🧠", title:"STEM Mastery", desc:"Hands-on science, technology, engineering & math beyond the classroom." },
  { icon:"🚀", title:"Innovation", desc:"Design thinking, prototyping and an engineering mindset from day one." },
  { icon:"👥", title:"Leadership", desc:"Teamwork, communication, and project ownership in real challenges." },
  { icon:"🏆", title:"Global Stage", desc:"Compete nationally and internationally with world-class peers." },
];

const PATHWAYS = [
  { icon:"🏎️", title:"STEM Racing", grades:"Grades 3–12", desc:"Multi-level engineering racing competition where students design, build & race miniature F1 cars." },
  { icon:"🏁", title:"Formula Ethara", grades:"Grades 3–8", desc:"Junior motorsport challenge sparking creativity and engineering fundamentals through racing." },
  { icon:"🔧", title:"4×4 in Schools RC", grades:"Grades 6–12", desc:"Build remote-controlled off-road vehicles to tackle rugged engineering challenges." },
  { icon:"💧", title:"Emirates Water Rocket", grades:"All Grades", desc:"Design pressure-powered water rockets and master physics of flight and propulsion." },
  { icon:"🔭", title:"IAAC · Astronomy", grades:"All Grades", desc:"International Astronomy & Astrophysics Competition — explore the cosmos." },
  { icon:"⚛️", title:"IPhyC · Physics", grades:"All Grades", desc:"International Physics Challenge — push your understanding of the physical world." },
  { icon:"∑", title:"IYMC · Mathematics", grades:"All Grades", desc:"International Youth Math Challenge — sharpen logic, proofs and problem-solving." },
];

const GREENPOWER = [
  { icon:"⚡", title:"Electric Car Design", desc:"Engineer real single-seater EVs from chassis to drivetrain." },
  { icon:"🌿", title:"Sustainability", desc:"Learn energy efficiency, eco-design and clean mobility." },
  { icon:"⚙️", title:"Real Engineering", desc:"Apply physics, CAD, and manufacturing in a working machine." },
  { icon:"🏆", title:"Race & Compete", desc:"Test your build on a real track against international teams." },
];

const DETAILS = [
  { icon:"🎓", label:"Eligibility", value:"Grades 3–12" },
  { icon:"📅", label:"Day", value:"Thursday" },
  { icon:"⏰", label:"Time", value:"2:45 – 4:15 PM" },
  { icon:"📍", label:"Mode", value:"On-campus" },
  { icon:"💳", label:"SEAL Fee", value:"AED 600" },
  { icon:"💳", label:"Greenpower Add-on", value:"+ AED 1,000" },
];

const ORIENTATION = [
  { grade:"Grades 3–5", time:"April 30 · 5:00 – 5:30 PM" },
  { grade:"Grades 6–12", time:"April 30 · 5:30 – 6:00 PM" },
];

const FAQS = [
  { q:"Who can join SEAL Club?", a:"Any Ambassador School student in Grades 3–12 with curiosity for STEM, racing, design or science." },
  { q:"Do I need prior engineering experience?", a:"No prior experience is required. Our coaches guide students from fundamentals to advanced builds." },
  { q:"What's included in the AED 600 fee?", a:"All SEAL Club sessions, mentoring, equipment access, and entry to multiple STEM competitions." },
  { q:"Why is Greenpower an add-on?", a:"Greenpower involves building a real electric car — the additional AED 1,000 covers specialized parts, kit and competition entry." },
  { q:"Can my child join more than one competition?", a:"Absolutely — students are encouraged to explore multiple pathways across the year." },
  { q:"Where are the sessions held?", a:"All sessions take place on-campus at Ambassador School Dubai every Thursday from 2:45 to 4:15 PM." },
];

const REGISTER_URL = "https://forms.gle/3UsqWj4LBALaQoAr9";

// ---------- HELPERS ----------
const $ = (id)=>document.getElementById(id);
const card = (icon, title, desc, extra="") => `
  <div class="card">
    <div class="icon-box">${icon}</div>
    ${extra}
    <h3>${title}</h3>
    <p>${desc}</p>
  </div>`;

// ---------- RENDER ----------
$("pillarsGrid").innerHTML = PILLARS.map(p=>card(p.icon,p.title,p.desc)).join("");
$("pathwaysGrid").innerHTML = PATHWAYS.map(p=>card(p.icon,p.title,p.desc,`<div class="grade">${p.grades}</div>`)).join("");
$("greenGrid").innerHTML = GREENPOWER.map(p=>card(p.icon,p.title,p.desc)).join("");

$("detailsGrid").innerHTML = DETAILS.map(d=>`
  <div class="detail-card">
    <div class="row"><span>${d.icon}</span><span>${d.label}</span></div>
    <div class="val">${d.value}</div>
  </div>`).join("");

$("orientationList").innerHTML = ORIENTATION.map(o=>`
  <div class="orient-row">
    <div>
      <div class="ttl">${o.grade}</div>
      <div class="sub">⏰ ${o.time}</div>
    </div>
    <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-accent">📹 Join Online</a>
  </div>`).join("");

$("faqList").innerHTML = FAQS.map((f,i)=>`
  <div class="faq-item" data-i="${i}">
    <button class="faq-q"><span>${f.q}</span><span class="arrow">▾</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join("");

document.querySelectorAll(".faq-item").forEach(item=>{
  item.querySelector(".faq-q").addEventListener("click",()=>item.classList.toggle("open"));
});

// ---------- NAV ----------
const navLinks = $("navLinks");
$("menuBtn").addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

// ---------- YEAR ----------
$("year").textContent = new Date().getFullYear();
