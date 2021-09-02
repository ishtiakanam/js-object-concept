const student = {
    id:120,
    name:"someOne",
    major:"Accounting",
    money:5000,
    isRich:false,
    subject:["english","math","Finance"],                        
    bestFriend: {
        name:"Ishtiak anam",
        major:"Finanec"
    },
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}
student.takeExam();
const remaing = student.treatDey(900);
console.log(remaing);