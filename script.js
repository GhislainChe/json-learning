const user = {
    name: "Ghislain",
    role: "software Engineer",
    skills: ["HTML", "CSS", "JavaScript"]
};

let name = document.getElementById("name").textContent = user.name
let role = document.getElementById("role").textContent = user.role

let skills = document.getElementById("skills");
user.skills.forEach(skill => {
    const span = document.createElement("span");
    span.textContent = skill
    skills.appendChild(span)
})