const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  for (let i = 0; i < users.length; i++) {
    const user = users[i]; 
if (user.years >= 18) {console.log("Usuario mayor de edad: " + user.name);}
else {console.log("Usuario menor de edad: " + user.name);}
  }