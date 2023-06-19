class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        candidates.forEach(el => {
            let [name, education, yearsExperience] = el.split('-');
            let person = this.jobCandidates.find(x => x.name == name);
            if (person) {
                if (Number(yearsExperience) > Number(person.yearsExperience)) {
                    person.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({name, education, yearsExperience});
            }
        });
        let list = [];
        this.jobCandidates.forEach(el => {
            list.push(el.name);
        });
        return `You successfully added candidates: ${list.join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        let person = this.jobCandidates.find(x => x.name == name);
        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (Number(minimalExperience) > Number(person.yearsExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        } else {
            person.yearsExperience = 'hired';
            return `Welcome aboard, our newest employee is ${name}.`;
        }
    }
    salaryBonus(name) {
        let person = this.jobCandidates.find(x => x.name == name);
        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (person.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (person.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }
        let list = [];
        this.jobCandidates.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        this.jobCandidates.forEach(el => {
            list.push(`${el.name}-${el.yearsExperience}`);
        });
        return `Candidates list:\n${list.join('\n')}`;
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication([]));
console.log(Jobs.candidatesDatabase());