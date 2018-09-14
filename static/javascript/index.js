vm = new Vue({
    el: "#app",
    data: {
        name: "asdf",
        map: "",
    },
    methods: {
        initMap() {
            const m = {
                lat: 22.877000,
                lng: 71.861800
            }
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: m,
                zoom: 10
            });

            let marker = new google.maps.Marker({position:m, map:this.map});
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