let vm = new Vue({
    el: "#app",
    data: {
        formHide: true,
        messages: [],
        currentUser: 'amit',
        items: [],
        item: '',
    },
<<<<<<< HEAD
    methods:{
        login(type = false){
            if(!type){
                window.location.href="https://join.slack.com/t/emergencychatroom/shared_invite/enQtNDQxNjY2Nzk0NDUzLWNkOTVjYzAzNDNjY2E1YTgyZDM1NGQyYjZkZGI5OTYxYzZmYzkyMmQ1NmU1Njc3MWZlNzMxNzcyYWZlYTUzM2E";
            }else{

            }

            this.formHide = true;
=======
    methods: {
        login() {},
        readInventory() {

>>>>>>> 41035002d4469054bb5d726f712c0f3500a9b799
        },
        parseInput() {
            let obj = {};
            let text = this.item;
            let textArray = text.split(':');
            textArray.forEach(element => {
                element.trim();
            });
            if (textArray.length == 1 || typeof (textArray[1]) !== 'string' || textArray[1] === '') {
                obj.name = textArray[0];
                obj.amount = 0;
            } else {
                obj.name = textArray[0];
                obj.amount = textArray[1];
            }
            this.items.push(obj);
            this.item = '';
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        uploadInventory(){
            const param = {

            }
        }
    },
    watch: {
    }
});