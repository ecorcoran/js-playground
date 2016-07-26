var people = {
  eddie: {
    name: "Eddie",
    age: 100,
    hairColor: "raven",
    married: true,
    favoriteThings: ["calculus", "coffee", "math"]
  },
  emily: {
    name: "Emily",
    age: 101,
    hairColor: "fall",
    married: true,
    favoriteThings: ["knitting", "coffee", "code"]
  }
};


function howAwesome(people) {
  for (person in people) {
    if (people[person].age > 100) {
      console.log(people[person].name, "holy crap you are old");
    } else {
      console.log("you are " + people[person].age + " years old and love " + people[person].favoriteThings.join(" and "));
    }
  };
  return "Awesomesauce!";
};

console.log("people: ", people);
console.log(howAwesome(people));
