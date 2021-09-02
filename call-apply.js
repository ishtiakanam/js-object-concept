const fahim = {
    id:120,
    name:"someOne",
    money:5000,
    treatDey: function(expense,bokshish){
        this.money = this.money - expense-bokshish;
        console.log(this);
        return this.money;
    }
};
const heroBaba = {
    id:122,
    money:5000,
    name:'hero alom'
}
//call
// fahim.treatDey.call(heroBaba, 500,100)
// fahim.treatDey.call(heroBaba, 300,100)

//apply
fahim.treatDey.apply(heroBaba , [500,100])