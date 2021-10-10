//TELEGRAM TOKEN: 1981074011:AAGB-O81mnbon0UJSelupT6skDi7znpNAcI

// comandos en CLI: 
// npm init --y = para crear package.json
// npm i telegraf = para instalar depencencias telegraf
// node belcor_bot.js = comando para activar servidor en modo escucha
// npm i nodemon -D = para instalar nodemon, y usar dependencia para escucha automatica en lugar de node bot.js
// npm run dev = para iniciar nodemon

// -----------------------------------------------------------VERSION 1.0

// // guardar libreria en la variable Telegraf
// const { Telegraf } = require('telegraf')

// // guardamos el bot en una variable y agregamos el token de fatherbot
// const bot = new Telegraf('1981074011:AAGB-O81mnbon0UJSelupT6skDi7znpNAcI')

// //ctx = context = para responder metodos
// bot.start((ctx) => {
//     console.log(ctx.from)
//     console.log(ctx.chat)
//     console.log(ctx.message)
//     console.log(ctx.updateSubTypes)
//     ctx.reply('¡Hola ' +ctx.from.first_name +' '+ctx.from.last_name + ' bienvenido!\n' + ' \n' +
//     'Soy el bot de BELCOR.\nPuedes iniciar escribiendo palabras clave como:\n"descarga", "precio", "contacto" , "requisitos"\n' + ' \n' +
//     'También puedes escribir o dar click sobre /ayuda para saber todos los comandos y su funcionamiento de cada uno.\n'
//     )})

// // COMANDOS
// bot.command(['ayuda','AYUDA'], (ctx) => {
//     ctx.reply(
//         'Los siguientes comandos y palabras clave son las que te ayudarán a saber algo en especifico. \n \nDale click al /comando_de_color o ingresa la palabra clave que desees:\n' + ' \n' +
//         '/descarga | "descarga": te mostrará el link que deberas teclear para poder descargar el software.\n' + ' \n' +
//         '/precio | "precio": te mostrará el precio actual del software.\n' + ' \n' +
//         '/contacto | "contacto": te mostrará los telefonos y correos de BELCOR.\n' + ' \n' +
//         '/requisitos | "requisitos": te mostrará el software adicional que necesitas tener en tu computadora.\n'
//     )})

// bot.command(['descarga','DESCARGA'], ctx => { ctx.reply('Ingresa a tu computadora para poder descargar SOFTDELF en este link: www.softdelf.com/descargas/gcrxml.html')})
// bot.command(['precio','PRECIO'], (ctx) => ctx.reply('El precio actual del programa es de 2,320 MXN IVA incluido.'))
// bot.command(['contacto','CONTACTO'], ctx => { ctx.reply('Nuestros correos: octavioarmando90@gmail.com | steven7seven.10@gmail.com')})
// bot.command(['requisitos','REQUISITOS'], ctx => { 
//     ctx.reply(
//         'En tu computadora debes tener instalados los siguientes programas:\n' + ' \n' +
//         'Microsoft .NET Framework 4.6.1 (x86 ó x64) | link descarga: https://dotnet.microsoft.com/download/dotnet-framework\n' + ' \n' +
//         'MYSQL (VERSION MINIMA 5.5.41 [x86 ó x64]) | link descarga: https://dev.mysql.com/downloads/mysql/\n' + ' \n' +
//         'TeamViewer | link descarga: http://www.softdelf.com/descargas/TeamViewer_Setup.exe\n' + ' \n' +
//         'Instalacion MySql: | link video: https://youtu.be/Sv2vBT3dtvQ\n' + ' \n' +
//         'Instalacion GCRXML: | link descarga: http://www.softdelf.com/Descargas/Manual_inst_GCRXML.zip\n' + ' \n' +
//         'Te recomendamos asegurarte que los programas mencionados esten funcionando correctamente en tu computadora.\n' + ' \n' +
//         'Descargar software BELCOR | link descarga: http://www.softdelf.com/descargas/GCRXML.application\n'
//     )})

// //EVENTOS
// bot.hears(['descarga','DESCARGA'], ctx => { ctx.reply('Ingresa a tu computadora para poder descargar SOFTDELF en este link: www.softdelf.com/descargas/gcrxml.html')})
// bot.hears(['precio','PRECIO'], ctx => { ctx.reply('El precio actual del programa es de 2,320 MXN IVA incluido.')})
// bot.hears(['contacto','CONTACTO'], ctx => { ctx.reply('Nuestros correos: octavioarmando90@gmail.com | steven7seven.10@gmail.com')})
// bot.hears(['requisitos','REQUISITOS'], ctx => { 
//     ctx.reply(
//         'En tu computadora debes tener instalados los siguientes programas:\n' + ' \n' +
//         'Microsoft .NET Framework 4.6.1 (x86 ó x64) | link descarga: https://dotnet.microsoft.com/download/dotnet-framework\n' + ' \n' +
//         'MYSQL (VERSION MINIMA 5.5.41 [x86 ó x64]) | link descarga: https://dev.mysql.com/downloads/mysql/\n' + ' \n' +
//         'TeamViewer | link descarga: http://www.softdelf.com/descargas/TeamViewer_Setup.exe\n' + ' \n' +
//         'Instalacion MySql: | link video: https://youtu.be/Sv2vBT3dtvQ\n' + '\n' +
//         'Instalacion GCRXML: | link descarga: http://www.softdelf.com/Descargas/Manual_inst_GCRXML.zip\n' + ' \n' +
//         'Te recomendamos asegurarte que los programas mencionados esten funcionando correctamente en tu computadora.\n' + ' \n' +
//         'Descargar software BELCOR | link descarga: http://www.softdelf.com/descargas/GCRXML.application\n'
//     )})

// //MENCIONES = @stevenbello
// bot.mention('stevenbello',ctx => {ctx.reply ('has mencionado a steven')})

// //MENSAJE DEFAULT
// bot.on('message',(ctx) => {
//     ctx.reply('Gracias por tu prefencia.\n' + 'Puedes intentarlo de nuevo...\n' + 'Seleccionando una opción del comando /ayuda')
// })

// //INICIAR BOT
// bot.launch()


// -----------------------------------------------------------VERSION 2.0

// guardar libreria en la variable Telegraf
const { Telegraf, Markup } = require('telegraf')

// guardamos el bot en una variable y agregamos el token de fatherbot
const bot = new Telegraf('1981074011:AAGB-O81mnbon0UJSelupT6skDi7znpNAcI')

// nuevo_belcor '1917759647:AAHPKg0H0njaMTjEyIeNxLlFyIHH8W5Lmlo'

bot.use(Telegraf.log())

//ctx = context = para responder metodos
bot.start(async (ctx) => {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    return await ctx.reply('Hola 👋🏻 ' + ctx.from.first_name + ' ' + ctx.from.last_name + ' bienvenido!\n\n' +
        'Soy el bot de BELCOR 🤖💭.\nPuedes iniciar escribiendo palabras clave como:\ndescarga | precio | contacto | requisitos\n\n' +
        'También puedes escribir o dar click sobre /ayuda para saber todos los comandos y su funcionamiento de cada uno.',
        Markup
            .keyboard([
            ['/ayuda']
            ])
            .oneTime()
            .resize()
    )
})

// COMANDOS
bot.command(['ayuda', 'AYUDA'], async (ctx) => {
    return await ctx.reply(
        'Los siguientes comandos y palabras clave son las que te ayudarán a saber algo en especifico.\n\n' +
        'Dale click al /comando_de_color o ingresa la palabra clave que desees:\n\n' +
        '/descarga | descarga: te mostrará el link que deberas teclear para poder descargar el software.\n\n' +
        '/precio | precio: te mostrará el precio actual del software.\n\n' +
        '/contacto | contacto: te mostrará los telefonos y correos de BELCOR.\n\n' +
        '/requisitos | requisitos: te mostrará el software adicional que necesitas tener en tu computadora.\n',
        Markup
            .keyboard([
            ['/descarga', '/precio'],
            ['/contacto', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.command(['descarga', 'DESCARGA'], async (ctx) => {
    return await ctx.reply('Ingresa a tu computadora para poder descargar SOFTDELF',
        Markup
            .keyboard([
                ['softdelf'],
                ['/ayuda']
            ])
            .oneTime()
            .resize()
    )
})

bot.command(['precio', 'PRECIO'], async (ctx) => {
    return await ctx.reply('El precio actual del programa es de 2,320 MXN IVA incluido.',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda']
            ])
            .oneTime()
            .resize()
    )
})

bot.command(['contacto', 'CONTACTO'], async (ctx) => {
    return await ctx.reply('Nuestros correos: octavioarmando90@gmail.com | steven7seven.10@gmail.com',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda']
            ])
            .oneTime()
            .resize()
    )
})

bot.command(['requisitos', 'REQUISITOS'], async (ctx) => {
    return await ctx.reply
        ('En tu computadora debes tener instalados los siguientes programas:\n\n' +
            '-> Microsoft .NET Framework 4.6.1 (x86 ó x64)\n\n' +
            '-> MYSQL (VERSION MINIMA 5.5.41 [x86 ó x64])\n\n' +
            '-> TeamViewer\n\n -> Instalacion MySql\n\n' +
            '-> Instalacion GCRXML\n\n' +
            'Te recomendamos asegurarte que los programas mencionados esten funcionando correctamente en tu computadora antes de instalar el software GCRXML.\n\n' +
            'A continuación te muestro el menú que incluye los links de instalación y videos de ayuda.',
            Markup
                .keyboard([
                    ['Microsoft .NET', 'MYSQL', 'TeamViewer'],
                    ['Instalacion MySql', 'Instalacion GCRXML'],
                    ['Software GCRXML']
                ])
                .oneTime()
                .resize()
        )
})

//EVENTOS
bot.hears(['Microsoft .NET'], async (ctx) => {
    ctx.reply('https://dotnet.microsoft.com/download/dotnet-framework')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})
bot.hears(['MYSQL'], async (ctx) => {
    ctx.reply('https://dev.mysql.com/downloads/mysql/')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['TeamViewer'], async (ctx) => {
    ctx.reply('http://www.softdelf.com/descargas/TeamViewer_Setup.exe')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['Instalacion MySql'], async (ctx) => {
    ctx.reply('https://youtu.be/Sv2vBT3dtvQ')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['Instalacion GCRXML'], async (ctx) => {
    ctx.reply('http://www.softdelf.com/Descargas/Manual_inst_GCRXML.zip')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['Software GCRXML'], async (ctx) => {
    ctx.reply('http://www.softdelf.com/descargas/GCRXML.application ')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['Softdelf'], async (ctx) => {
    ctx.reply('www.softdelf.com/descargas/gcrxml.html')
    return await ctx.reply('Es un gusto poder ayudarte!',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['descarga', 'DESCARGA'], async (ctx) => {
    return await ctx.reply('Ingresa a tu computadora para poder descargar SOFTDELF en este link:',
        Markup
            .keyboard([
                ['softdelf'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['precio', 'PRECIO'], async (ctx) => {
    return await ctx.reply('El precio actual del programa es de 2,320 MXN IVA incluido.',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['contacto', 'CONTACTO'], async (ctx) => {
    return await ctx.reply('Nuestros correos: octavioarmando90@gmail.com, steven7seven.10@gmail.com',
        Markup
            .keyboard([
                ['Entendido!'],
                ['/ayuda', '/requisitos']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['requisitos', 'REQUISITOS'], async (ctx) => {
    return await ctx.reply('En tu computadora debes tener instalados los siguientes programas:\n\n -> Microsoft .NET Framework 4.6.1 (x86 ó x64)\n\n -> MYSQL (VERSION MINIMA 5.5.41 [x86 ó x64])\n\n -> TeamViewer\n\n -> Te recomendamos asegurarte que los programas mencionados esten funcionando correctamente en tu computadora antes de instalar el software GCRXML.\n\n -> A continuación te muestro el menú que incluye los links de instalación y videos de ayuda.',
        Markup
            .keyboard([
                ['Microsoft .NET Framework', 'MYSQL'],
                ['TeamViewer', 'Software GCRXML'],
                ['Instalacion MySql', 'Instalacion GCRXML']
            ])
            .oneTime()
            .resize()
    )
})

bot.hears(['Entendido!'], async (ctx) => {
    return ctx.reply('👍',
    Markup.keyboard([
        ['Créditos'],
        ['👍']
    ])
    )
})

bot.hears(['Créditos'], async (ctx) => {
    return ctx.reply('Creador del bot 🔥',
    Markup.inlineKeyboard([
        Markup.button.callback('Steven','Steven')
    ])
    )
})

// ACCIONES
bot.action('Steven', async (ctx, next) => {
    await ctx.answerCbQuery() //quitar spinner boton
    return await ctx.reply('🦾').then(() => next())
})

//MENCIONES = @stevenbello
bot.mention('stevenbello', async (ctx) => {
    ctx.reply('has mencionado a steven')
})

//MENSAJE DEFAULT
bot.on('message', (ctx) => {
    ctx.reply('Gracias por tu prefencia.\n' + 'Puedes intentarlo de nuevo...\n' + 'Seleccionando una opción del comando /ayuda')
})

//INICIAR BOT
bot.launch()


// /start - Iniciar bot
// /ayuda - Todos los comandos
// /descarga - Link software
// /precio - Costo del software
// /contacto - Nuestros emails 
// /requisitos - Software adicional
