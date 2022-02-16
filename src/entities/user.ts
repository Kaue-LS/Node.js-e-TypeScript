import { uuid } from "uuidv4";
// O que vai ser recebido no banco de dados
// Como se fosse o models do mongoDB
export class User{

    public readonly id! : string ;

    public name!: string;
    public  email! : string;
    public  password! : string;

    // Pegar todos os dado menos o id
    // Se caso tiver id ele vai ser string, ajuda a ver se o usuario ja existe
    // por isso instalamos o uuidv4 , que cria id unico
    constructor(props:Omit<User,'id'>,id?:string){
        // Umonjeto que vai colocar no this todos os props
        // this.name=props.name exemplo

        Object.assign(this,props);

        if(!id){
            // Se nao tiver id, vai adicionar a ele uma id unica e universal
            this.id=uuid ()
        }

    }
}