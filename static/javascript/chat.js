let vm = new Vue({
    el: "#app",
    data: {
        formHide: true,
        messages: [],
        currentUser: 'amit',
        items: [],
        item: '',
    },
    methods: {
        login() {},
        readInventory() {

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