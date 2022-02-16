import { User } from "src/entities/user";
// Lugar onde armazenamos os dados. bancos e arquivos
export interface IuserRepository{
    // metodos disponiveis
    // Não importando se tiver conectado a um banco de dados
    // Se tiver esses metodos, ja esta funcionando
    findByEmail(email:string): Promise<User>;
    save(user:User):Promise<void>
}