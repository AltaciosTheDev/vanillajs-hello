// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let protocol = 'https://';
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let topLevelDomain = ['.com', '.gov', '.edu', '.org', '.net', '.dev'];

for(let pronoun of pronouns){
    // first level
    for(let adjective of adjectives){
        // second level
        for(let noun of nouns){
            // third level
            let random = Math.floor(Math.random() * topLevelDomain.length);
            let domain = protocol + pronoun + adjective + noun + topLevelDomain[random];
            console.log(domain);
        }
    }

}