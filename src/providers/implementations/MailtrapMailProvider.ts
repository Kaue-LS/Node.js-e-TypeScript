import { ImailProvider, IMessage } from "../IMailProvider";
import nodeMailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

// Vai enviar email
export class MailTrapMailProvider implements ImailProvider {
    private transporter:Mail
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "e90cc76d8e2c8d",
                pass: "ebfaa1f7d428ec"
            }
        })
    }
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to:{
                name:message.to.name,
                address:message.to.email
            },
            from:{
                name:message.from.name,
                address:message.from.email,
            },
            subject:message.subject,
            html:message.body
            
        })
    }
}