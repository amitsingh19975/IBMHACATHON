vm = new Vue({
    el: "#app",
    data: {
        name: "asdf",
        map: "",
    },
    methods: {
        initMap() {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: -34.397,
                    lng: 150.644
                },
                zoom: 8
            });
        },
        mapElementCreate() {
            const google = document.querySelector("#google");
            const script = document.createElement('script');
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDArGV6xMnqpsLRY8rtL4tLN7EfQqzM6UU&callback=vm.initMap";
            script.async = true;
            script.defer = true;
            google.appendChild(script);
        },
    },
    beforeCreate() {
        this.$nextTick = function () {
            this.initMap();
        };
    },
    beforeMount() {
        this.mapElementCreate();
    },

});