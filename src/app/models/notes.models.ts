export class Notes {
    id?: number;
    content: string;
    userId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    constructor() {
        this.id = 0;
        this.content = '';
        this.userId = 0;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
