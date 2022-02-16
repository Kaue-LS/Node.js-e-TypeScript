import { User } from "src/entities/user";
import { IuserRepository } from "../IUserRespository";
// Como nao tempo bd vamos salvar na variavel privada
export class PostgresUserRespository implements IuserRepository{
    private users:User[]=[]
    async findByEmail(email: string): Promise<User> {
        const user=this.users.find(user => user.email===email);
        return user!;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
        // "Salvando"
    }
}