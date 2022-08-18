export class TenantDetails {
    constructor(public name: string,public id: number, public emailId: string,
        public permanentAddress: string, public startDateOfRenting:Date, public endDateOfRenting: Date,
        public currentlyRenting: boolean, public panNumber: string, public aadharNumber: string ) {}
}