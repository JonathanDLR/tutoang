export class User {
    constructor(
        public fistName: string,
        public lastName: string,
        public email: string,
        public drinkPref: string,
        public hobbies?: string[]
    ) {}
}