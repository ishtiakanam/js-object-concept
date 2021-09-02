const fahim = {
    id:120,
    name:"someOne",
    money:5000,
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};
const heroBaba = {
    id:122,
    money:5000,
    name:'hero alom'
}
fahim.treatDey(100);

const heroTreatDey = fahim.treatDey.bind(heroBaba);
heroTreatDey(500);