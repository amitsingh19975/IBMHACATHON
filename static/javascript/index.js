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
        async mapElementCreate() {
            const google = document.querySelector("#google");
            const script = document.createElement('script');
            let key ='';
            fetch("/getApiKey")
                .then(res=> res.json())
                .then(res=>{
                    key = res.key;
                })
                .catch(err=>console.log(err));
            script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=vm.initMap`;
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