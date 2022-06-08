const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    
    let {name, age, skills} = plan;
    console.log(plan.skills.exp);
    // return skills.exp
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    const progLanguage = plan.skills.programmingLangs;
    let str = '';
    for (let key in progLanguage) {
        if (typeof(key) === undefined) {
            console.log(str);
        } else {
            str = str + `Язык ${key} изучен на ${progLanguage[key]}\n`;
               
        }
        
    }
    console.log(str);
}
showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs = function (plan) {
    const infoAge = plan.age,
          infoLangs = plan.languages;

    console.log(`Мне ${infoAge} и я владею языками: ${infoLangs[0]}.toUpperCase()} ${infoLangs[1]}oUpperCase()`);
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

