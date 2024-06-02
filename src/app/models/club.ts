export class Club {
    constructor(
        public id: number,
        public name: string,
        public stadiumName: string,
        public headCoachName: string,
        public type: string,
        public playersCount: number
    ) {}
}