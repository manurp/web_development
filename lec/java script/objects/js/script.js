// var company = new Object();

// company.name = "Facebook";

// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";

// var stockPrice = "Stock of the company"
// company[stockPrice] = 110; //or directly use the string compny["Stock of the company"]

// console.log("The First Name of the CEO is " + company.ceo.firstName);
// console.log("The Stock of the company is " + company["Stock of the company"]);
// console.log(company);

//Better way: object literal
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "$stock": 110
};

console.log(facebook);
