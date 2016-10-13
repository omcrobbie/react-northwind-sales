export default class Employee{
    constructor(name){
        this.name = name;
        this.regions = {
            n:false,
            s:false,
            e:false,
            w:false
        }
    }
}