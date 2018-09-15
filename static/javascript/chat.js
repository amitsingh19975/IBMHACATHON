new Vue({
    el:"#app",
    data:{
        formHide: false,
    },
    methods:{
        login(type = false){
            if(!type){

            }else{

            }

            this.formHide = true;
        },
        scrollBottom(){
            const chat = document.querySelector("#chat-system");
            chat.scrollTop = chat.scrollHeight;
        }
    },watch:{
        formHide(){
            if(this.formHide){
                this.scrollBottom();
            }
        }
    }
});