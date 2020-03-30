//Class constructor
class PersonalBudget {
    constructor ( name, age, budget ) {
        this.name = name;
        this.age = age;
        this.budget = Number( budget );
    }

    setBudget( budget ) {
        this.budget = Number( budget );
    }

}


const getBudgets = ( ...budgetObjs ) => {
    var budgetSum = 0;
    for ( let i = 0; i < budgetObjs.length; i++) {
        var budgetVal = budgetObjs[i].budget;
        budgetSum += budgetVal;
    }
    return budgetSum;    
}

var johnBudget = new PersonalBudget( 'John', 25, 3000 );
var jillBudget = new PersonalBudget( 'Jill', 47, 5650 );
var jeffBudget = new PersonalBudget( 'Jeff', 68, 1625 );

console.log( johnBudget );
console.log( jillBudget );
console.log( jeffBudget );
console.log( getBudgets( johnBudget, jillBudget, jeffBudget) );



