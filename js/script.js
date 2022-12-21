const{
    createApp
} = Vue

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        }, 
                        {   date: '',
                            message: 'Tutto fatto!',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Sofia',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'receveid'
                        }, 
                        {   date: '',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'La marianna va in campagna',
                            status: 'received'
                        },
                        {   date: '',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        }, 
                        {   date: '',
                            message: 'Ah, scusa!!',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Lo sai che ha aperto una nuova pizzaria?',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Va bene, stasera la sento',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Non ancora',
                            status: 'receveid'
                        }, 
                        {   date: '',
                            message: 'Appena sai qualcosa scrivimi subito per vafore',
                            status: 'sent'
                        },
                    ]
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Fai gli auguri a MArtina che è il suo compleanno',
                            status: 'sent'
                        },
                        {   date: '',
                            message: 'Grazie per avermelo ricordato, le scrivo subitissimo!',
                            status: 'receveid'
                        },
                    ]
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {   date: '',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'receveid'
                        },
                        {   date: '',
                            message: 'No, l\'ho già mangiasta ieri, ordiniamo del sushi!!!',
                            status: 'sent'
                        }, 
                        {   date: '',
                            message: 'Ok perfetto!!',
                            status: 'receveid'
                        },
                    ]
                },
            ]
           

        }
        
    },

}).mount('#app')

