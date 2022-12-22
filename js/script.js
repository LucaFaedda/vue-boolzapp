const{
    createApp
} = Vue

createApp({
    data(){
        return{
            
            dropdownOpen: false,
            search: '',
            nuovo: '',
            itemActive: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {   date:  '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {   date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        }, 
                        {   date: '10/01/2020 16:15:22',
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
                        {   date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {   date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'receveid'
                        }, 
                        {   date: '20/03/2020 16:35:00',
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
                        {   date:  '28/03/2020 10:10:40',
                            message: 'La marianna va in campagna',
                            status: 'received'
                        },
                        {   date:  '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        }, 
                        {   date: '28/03/2020 16:15:22',
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
                        {   date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzaria?',
                            status: 'sent'
                        },
                        {   date:  '10/01/2020 15:50:00',
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
                        {   date:  '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {   date: '10/01/2020 15:50:00',
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
                        {   date:  '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {   date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'receveid'
                        }, 
                        {   date:'10/01/2020 15:51:00',
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
                        {   date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno',
                            status: 'sent'
                        },
                        {   date: '10/01/2020 15:50:00',
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
                        {   date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'receveid'
                        },
                        {   date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo del sushi!!!',
                            status: 'sent'
                        }, 
                        {   date:  '10/01/2020 15:51:00',
                            message: 'Ok perfetto!!',
                            status: 'receveid'
                        },
                    ]
                },
            ]
           

        }
        
    },
    methods: {
        userClick(index)
        {
            this.itemActive = index 
            console.log(`Elemento attivo:${this.itemActive}`)
        },
        nuovaChat()
        {
            // dichairo prima una variabile che vado ad inserire nell'array contacts 
            let chatNuova = {
                date: '10/01/2020 15:30:55',
                message: this.nuovo,
                status: 'sent'
            }

            if(this.contacts[this.itemActive].messages.push(chatNuova)){
                this.tempoRisposta()
                
            }
            this.nuovo = ''
        },
        risposta(){
            let chatNuova2 = {
                date: '10/01/2020 15:30:55',
                message: 'ok',
                status: 'recived'
            }

            this.contacts[this.itemActive].messages.push(chatNuova2)
            
        },
        tempoRisposta()
        {
            setTimeout(() =>{
                this.risposta()
            }, 1000)

        },
        toggleDropdown()
        {
            this.dropdownOpen = !this.dropdownOpen;
        },
        eliminaChat(){
    
           Vue.delete(this.contacts, 'messages')
            
        }
    },
    computed:{
        // filtro l'array contatti e mi creo un'arrow function che mi ricerca i nomi 
        filteredContacts: function(){
            return this.contacts.filter((contact)=>{
                return contact.name.match(this.search.toUpperCase())         
            })
        }
    }




}).mount('#app')

