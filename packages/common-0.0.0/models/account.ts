export interface Account {
    username: string;
    password?: string;
    expires: number;    // unix timestamp
}
