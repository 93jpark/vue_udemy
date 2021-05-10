function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + 5;
}

let currentRound = 0;

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed : {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {width : '0%'}
            }
            return {width : this.monsterHealth+'%'};
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {width : '0%'}
            }
            return {width : this.playerHealth+'%'};
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                console.log('get');
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                console.log('get1');
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                console.log('get2');
                this.winner = 'null';
            } else if (value <= 0) {
                // monster lost
                console.log('get3');
                this.winner = 'player';
            }
        }
    },
    methods : {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            //this.monsterHealth > 0 ? this.monsterHealth : 0;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            //this.playerHealth > 0 ? this.playerHealth : 0;
            console.log(this.monsterHealth + ' ' + this.playerHealth);
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.playerHealth = 0;
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');