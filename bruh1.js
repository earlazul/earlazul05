function Student (name, section){
    this.name = name;
    this.section=section;
}

let juan = new Student ("juan dela cruz", "2ITE");
let pedro = new Student("Pedro Fernando", "2ITA");

Student.prototype.displayStudent = function(){
    document.write(`${this.name} is enrolled in ${this.section}`)
}

Student.prototype.school = "UST";
document.write(`${pedro.name} is enrolled in ${pedro.school}`)

//pedro.displayOperator();