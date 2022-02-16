// Provider para mexer com api externas, eke vai enviar um email


// Formato do from e to
interface IAddress{
    email:string;
    name:string;
}

// Essa interface vai definir o formato do emial que vai ser enviado

export interface IMessage{
    to:IAddress;
    from:IAddress;
    subject:string;
    body:string;
}
export interface ImailProvider{
    // Promise pois é assync e void pois nao vai ter retorno 
    sendMail(message:IMessage):Promise<void>;
}