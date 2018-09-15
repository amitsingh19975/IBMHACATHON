new Vue({
    el:"#app",
    data:{
        formHide: false,
        messages:[],
        currentUser:'amit',
        message:'',
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
        readMessages(){
            if(this.messages.length > 1000){
                let per = Math.floor(this.messages.length*80/100);
                this.messages.splice(0,per);
            }
            message = {};
            users = ['amit','ayush','shikar'];
            message.user = users[Math.floor(Math.random() * 3)];
            message.mess = this.message;
            this.message = '';
            if(this.currentUser === message.user){
                message.me = true;
            }else{
                message.me = false;
            }
            this.messages.push(message);
            setTimeout(this.scrollBottom,2);
        },
    },watch:{
        formHide(){
            this.$nextTick(()=>{
                if(this.formHide){
                    this.scrollBottom();
                }
            });
        },
    }
});