export class User {
    id?: number;
    name?: string;
    email: string;
    password: string;
    token?: string;
    role?: string;
    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.token = '';
        this.role = '';
    }
}
