// Ele vai conectar a complementação com a interface

import { MailTrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRespository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserUserCase } from "./CreateUserUserCase";
import { CreateUserController } from "./CreateUserUserController";

const mailTrapProvider= new MailTrapMailProvider()

const postgresUserRespository=new PostgresUserRespository()

const createUserUserCase=new CreateUserUserCase(
    postgresUserRespository,
    mailTrapProvider
)

const createUserController= new CreateUserController(
    createUserUserCase
)

export {createUserUserCase,createUserController}