//Prueba enviar mail de bienvenida

//import NodeMailer from 'nodemailer'

const enviarEmail = async (usuario) => {
    
    const config = {
        host : 'smtp.gmail.com',
        port : 465,
        auth: {
            user : 'Uniwork@gmail.com',
            pass : 'uniwork97821'
        }
    }

    const mensaje = {
        from : 'uniwork@association.com.co',
        to : usuario.email,
        text : `Gracias ${usuario.user} por unirte a la comunidad UniWork`
    }

    //const transport = NodeMailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info)
}

export {enviarEmail}
