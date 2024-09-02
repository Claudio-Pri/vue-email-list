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
            message: 'Ciao Vue!',
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: ''
        }
    },
    created() {
        axios
            //url memorizzato in data come stringa per evitare il problema del doppio slash
            .get(this.url)
            .then((rispostaApi) => {
                // console.log(rispostaApi.data.response);
                this.email = rispostaApi.data.response;
                console.log(this.email);
            })

    }


}).mount('#app')
