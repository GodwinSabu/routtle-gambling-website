export class User {
    id: number;
    name: string;
    balance: boolean;
    ws: WebSocket;

    constructor(id: number, name: string, balance: boolean, ws: WebSocket) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.ws = ws;
    }
}