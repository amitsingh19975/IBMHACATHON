let vm = new Vue({
    el: "#app",
    data: {
        formHide: false,
        messages: [],
        currentUser: 'amit',
        user_id: '',
        items: [],
        item: '',
    },
    methods: {
        login(type = false) {
            window.location.href = "https://join.slack.com/t/emergencychatroom/shared_invite/enQtNDQxNjY2Nzk0NDUzLWNkOTVjYzAzNDNjY2E1YTgyZDM1NGQyYjZkZGI5OTYxYzZmYzkyMmQ1NmU1Njc3MWZlNzMxNzcyYWZlYTUzM2E";
        },
        parseInput() {
            let obj = {
                show: true,
            };
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
            this.items[index].show = false;
            setTimeout(() => {
                this.items.splice(index, 1);
            }, 1001);
        },
        uploadInventory() {
            if (this.user_id === '' || !(this.items.length > 0))
                return;
            let user_id = this.user_id;
            let items = [];

            this.items.forEach(el => {
            })

            let param = {
                method: 'POST',
                body: JSON.stringify({
                    user_id,
                    items,
                }),
                headers: {
                    'Content-type': 'text/plain'
                }
            }
            fetch('/updateInventory', param)
                .then(res => res.text())
                .then(res => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        validate() {
            if (this.user_id !== '') {
                this.formHide = true;

            }
        }
    },
    watch: {}
});