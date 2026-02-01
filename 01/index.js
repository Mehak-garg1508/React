// Creating the element
const header1 = document.createElement("h1");
header1.innerHTML = "Hello Coders";
header1.style.fontSize = "50px";
header1.style.backgroundColor = "blue";
header1.style.color = "white";

const header2 = document.createElement("h2");
header2.innerHTML = "Kaise ho sab?";
header2.style.fontSize = "40px";
header2.style.backgroundColor = "black";
header2.style.color = "pink";

const root = document.getElementById("root");
root.append(header1, header2);

// Agar hame third header banana hai toh firse sab kuch likhna padega
