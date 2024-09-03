console.log('js collegato');

//===== Appunti ======
// ` backtick

// {{TEXT INTERPOLATION}}

//===== Code ======


//===== Functions =====

// deconstructuring
const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: '',
            emailList: [],

        }
    },
    created() {

        for (let i = 0; i < 10; i++) {
            axios

                .get(this.url)
                .then((rispostaApi) => {
                    console.log(rispostaApi);
                    this.email = rispostaApi.data.response;

                    // console.log('email casuale:', this.email);
                    this.emailList.push(this.email);

                    // console.log('array email:', this.emailList);


                });
        }



        // axios
        //     //url memorizzato in data come stringa per evitare il problema del doppio slash
        //     .get(this.url)
        //     .then((rispostaApi) => {
        //         // console.log(rispostaApi.data.response);
        //         this.email = rispostaApi.data.response;
        //         console.log(this.email);
        //     });

    }


}).mount('#app')
