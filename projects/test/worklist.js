const app={
    data(){
        return{
            message: []
        }
    },
    methods:{
        async mahlist(){
            const res = await fetch("https://lajawabpanipuri.com/api/")
            const data = await res.json()
             console.log(data);
            this.message = data.value
        }
    }
    

}

Vue.createApp(app).mount("#wl");