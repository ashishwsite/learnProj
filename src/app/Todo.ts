export class Todo {
    sno: number
    title: string
    desc: string
    active :boolean
    constructor() {
        this.sno = 0; // Or any default value you prefer
        this.title = '';
        this.desc = '';
        this.active = false;
    }

}