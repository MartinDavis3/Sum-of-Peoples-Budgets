//Class constructor
class personalBudget {
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
        console.log( budgetObjs[i] );
        var budgetVal = budgetObjs[i].budget;
        budgetSum += budgetVal;
        console.log( budgetSum, budgetVal);
    }
    return budgetSum;    
}



