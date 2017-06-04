export interface UserInterface {
    readonly id: number;
    name: string;
    email: string;
    password: string;
    
    


}
export interface UserDetailInterface extends UserInterface {
    id: number;
}

export function createUser({ id, name, email, password }): UserInterface {
    return { id, name, email, password };
}

export function createUsers(data: any[]): UserInterface[] {
    return data.map(createUser);
}

export function createUserById({ id, name, email, password }: any): UserDetailInterface {
    return { id, name, email, password };
}

export function createUserByEmail({ id, name, email, password }: any): UserDetailInterface {
    return { id, name, email, password };
}
