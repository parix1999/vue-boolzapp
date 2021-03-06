Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            currentIndex: 0,
            messaggiUtente: '',
            messaggioComputer: 'ok',
            inputRichercaUtente: '', 
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]

        },
        computed: {
            // Idea di ciclare dentro la funzione ?-->: 
            getFiltered() {
                // Prova del filtro:
                // Quindi se la ricerca utente ?? true, ?? popolata:
                if(this.inputRichercaUtente.charAt(0).toUpperCase() + this.inputRichercaUtente.slice(1)) {
                    // Mi fai il filtro del item dentro contracts:
                    return this.contacts.filter((item)=>{
                        // ritorni il nome che  inizia con le parole scritte dall'utente:
                        return item.name.startsWith(this.inputRichercaUtente.charAt(0).toUpperCase() + this.inputRichercaUtente.slice(1));
                    })
                } else {
                    // O allora ritorni l'oggetto:
                    return this.contacts;
                }
            }
        },
        methods: {
            /* Praticamente sono dentro a messageStatus, e qui dentro la funzione si collegata
            con il :class creato nell'HTML, e posso decidere il nome della funzione da ridare 
            alla classe, per poi modificarla a piacere nel css*/
            messageStatus: function (utenteUno) {
                console.log(utenteUno);
                if (utenteUno === 'sent') {
                    return 'check';
                } else {
                    return 'white';
                }
            },
            selezioneUtente: function (index) {
                return this.currentIndex = index;
            },
            invioMessaggio: function () {
                this.contacts[this.currentIndex].messages.push({
                    //data:.. TODO
                    text: this.messaggiUtente,
                    status: 'sent',
                });
                this.messaggiUtente = "";
                //Computer risposta:
                setTimeout(() => {
                    this.contacts[this.currentIndex].messages.push({
                        //data...
                        text: this.messaggioComputer,
                        status: 'received',

                    });
                }, 1000);

            },
            

        }
    }
)