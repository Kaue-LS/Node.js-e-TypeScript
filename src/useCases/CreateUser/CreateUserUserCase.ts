import { User } from "../../entities/user";
import { ImailProvider } from "../../providers/IMailProvider";
import { IuserRepository } from "../../repositories/IUserRespository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";


// Responsabilidade S do SOLID, criação do usuario
// Nao tem a responsabilidade de como ela vai ser salva,ela so tem uma, verificar se existe e criar o usuario
export class CreateUserUserCase{
    // O CreateUser, são as ações que o susiari pode fazer no software
    constructor(
        // É  o D do SOLID, depende de uma interface da aplicação
      private  userRepository:IuserRepository,
      private mailProvider: ImailProvider,
    ){}
    async execute(data:ICreateUserRequestDTO){
        // esse find by email esta no repositorios que colocamos, com os metodos
        // Veirificar se o usuario ja existe
        const userAlreadyExists=await this.userRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error("User Already Exists!!")
        }
        const user= new User(data);

        await this.userRepository.save(user);

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email:data.email,
            },
            from:{
                name:'Kauê Leite',
                email:'equipe@meuapp'
            },
            subject:'Bem vindo a plataforma',
            body:'<p>Você ja pode fazer login em nossa pataflorma</p>'
        })
    }
}
// Fim do primeiro principio do SOLID
// -----------------------------------------------------