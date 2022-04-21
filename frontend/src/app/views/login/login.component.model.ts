export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    roles: Roles[];
}

export class Roles {
    id: number;
    role: string;
}