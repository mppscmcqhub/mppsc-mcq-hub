const colors=["#1e88e5","#16a34a","#7c3aed","#f97316","#06b6d4","#ec4899","#2563eb","#eab308","#0d9488","#6d28d9"];
const icons=["📖","🏛️","🌍","👤","🧪","🍃","👥","💡","📄","📚"];
const names=["इतिहास","राजव्यवस्था","भूगोल","अर्थशास्त्र","विज्ञान","पर्यावरण","करेंट अफेयर्स","सामान्य विज्ञान","म.प्र. विशेष","समय अभ्यास"];
const grid=document.getElementById("grid");
for(let i=1;i<=10;i++){
  grid.innerHTML+=`<div class="card">
    <div class="icon" style="background:${colors[i-1]}">${icons[i-1]}</div>
    <h3>Unit ${i}</h3>
    <p>इकाई ${i} - ${names[i-1]}</p>
    <p>20 Questions</p>
    <button>▶ Start Test</button>
  </div>`;
}
