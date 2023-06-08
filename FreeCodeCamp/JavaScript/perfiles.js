// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    let result = 0;
    for(let i=0; i < contacts.length ; i++){
      if(name == contacts[i]["firstName"]){
        if(contacts[i][prop]){
            result = contacts[i][prop];
        }
        else{
            result = 1;
        }
      }
    }
    if(result == 0){
        result = "No such contact";
    }
    if(result == 1){
        result = "No such property";
    }
    return result;
  }
  
  let r=lookUpProfile("Akira", "likqwass");
  console.log(r);