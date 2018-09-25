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
                window.location.href="https://join.slack.com/t/emergencychatroom/shared_invite/enQtNDQxNjY2Nzk0NDUzLWNkOTVjYzAzNDNjY2E1YTgyZDM1NGQyYjZkZGI5OTYxYzZmYzkyMmQ1NmU1Njc3MWZlNzMxNzcyYWZlYTUzM2E";
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

            message.date = new Date();

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