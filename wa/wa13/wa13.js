fetch("wa13.json")
    .then(response => response.text())
    .then(text => displayInfo(text))

    function displayInfo(hrString){
        const hrObject = JSON.parse(hrString);
        //Problems 1, 3, 6
        console.log(hrObject.employee);
        //Problem 2
        console.log(hrObject.companyName);
        console.log(hrObject.website);
        //Problem 4
        let salary = 0;
        for(let i = 0; i < hrObject.employee.length; i++){
            salary += hrObject.employee[i].salary;
        }
        console.log(salary);
        raiseAgainstTheMachine(hrObject);
    }
        //Problem 5
    function raiseAgainstTheMachine(hrObject){
        for(let j = 0; j < hrObject.employee.length; j++){
            if(hrObject.employee[j].raiseEligible){
                hrObject.employee[j].salary += (hrObject.employee[j].salary*0.1);
                console.log(hrObject.employee[j].name + " now has a living wage! There salary is now " + hrObject.employee[j].salary);
                hrObject.employee[j].raiseEligible = false;
            }
        }
    }
    
    