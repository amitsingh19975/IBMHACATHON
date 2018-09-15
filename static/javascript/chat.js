new Vue({
    el:"#app",
    data:{
        formHide: false,
        messages:[],
        currentUser:'',
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
        },
        async readMessages(){
            messages = {};

        },
    },watch:{
        formHide(){
            this.$nextTick(()=>{
                if(this.formHide){
                    this.scrollBottom();
                }
            });
        }
    }
});