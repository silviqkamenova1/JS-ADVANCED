class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }

    newAdditions(footballPlayers) {
        footballPlayers.forEach((el) => {
            let [name, age, playerValue] = el.split('/');
            playerValue = Number(playerValue);
            let player = this.invitedPlayers.find(x => x.name === name);
            if (!player) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else {
                //let currValue = player.playerValue
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            }
        });
        let list = [];
        this.invitedPlayers.forEach((el) => {
            list.push(el.name);
        });
        return `You successfully invite ${list.join(', ')}.`;
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let player = this.invitedPlayers.find(x => x.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            let player = this.invitedPlayers.find(x => x.name === name);
            if (playerOffer < player.playerValue) {
                let priceDifference = player.playerValue - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
            }
        }
        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(x => x.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (player.age < age) {
                let ageDifference = age - player.age;
                if (ageDifference < 5) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else {
                return `${name} is above age limit!`;
            }
        }
    }

    transferWindowResult() {
        let list = [];
        let unsorted = Object.values(this.invitedPlayers);
        let sorted = unsorted.sort((a, b) => {
            a.name - b.name;
        });
        sorted.forEach((el) => {
            list.push(`Player ${el.name}-${el.playerValue}`);
        });
        return `Players list:\n${list.join('\n')}`;

    }

}