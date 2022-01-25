let people = [
    "Mduzi 60 years" ,
    "Vusi 21 years" ,
    "Vusumuzi 21 years" ,
    "Wandile 50 year",
    "Precious 26 year",
    "Andisiwe 90 years" ,
    "Mmapaseka 30 years",
    "mhlonipheni 20 years" ,
    "khumbulani 30 years",
    "sophie 18 years"  ,
    "lucky 32 years",
    "sithembiso 32 years" ,
    "happy 18 years",
    "Selina 26 years",
    "Kagisho 30 years ",
  ];

  let display = document.getElementById("people");

for (let i = 0; i < people.length; i++) {
    display.innerHTML += "<p>" + people[i] + "</p>";
}

