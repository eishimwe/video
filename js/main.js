
const ApiKey = "your_api_key";
var oTable;
function buildUrl (url) {

    return urlBase + url
}
const getHeaders = {
    headers: {
        'mvno' : localStorage.mvno
    }
};

Vue.component('free_videos', {
    template: '#free_videos' ,
    props:['active'],
    data(){
        return {



        }


    },
    methods: {

    },
    mounted(){

        jQuery('.crsl-items').carousels({
            visible: 3,
            itemMargin: 20
        });

    }

})


Vue.component('paid_videos', {
    template: '#paid_videos' ,
    data: function () {

        return {



        }

    },
    mounted: function() {

        jQuery('.crsl-items').carousels({
            visible: 3,
            itemMargin: 20
        });
    },
    methods:{


    }

})


Vue.component('profile_video', {
    template: '#profile_video' ,
    data: function () {

        return {

            number_of_distributors:0,
            number_of_orders:0,
            number_of_sims:0,
            number_of_commissions:0,
            last_10_orders:[]

        }

    },
    methods:{

        get_dashboard_data: function(){
            const vm = this;
            axios.get(urlBase + 'dashboardStats',getHeaders).then(function (response) {
                vm.number_of_distributors = response.data.data.distributors;
                vm.number_of_orders       = response.data.data.orders;
                vm.number_of_sims         = response.data.data.sims;
                vm.last_10_orders         = response.data.data.last_10_orders;

            });
        },

    },
    created(){

        this.get_dashboard_data();
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'js/dashboard.js')
        document.head.appendChild(recaptchaScript)

    }

})


const free_video_template    = { template: '<free_videos></free_videos>' }
const paid_video_template    = { template: '<paid_videos></paid_videos>' }
const profile_video_template = { template: '<profile_video></profile_video>' }

const routes = [
    { path: '/paid', component: paid_video_template},
    { path: '/profile', component: profile_video_template},
    { path: '/', component: free_video_template }
];


const router = new VueRouter({
    relative: true,
    routes
})



var app = new Vue({
    el: '#app',
    router ,
    data: {
        mvno: localStorage.mvno,

    },
    methods:{
        logout: function(){

            localStorage.clear();
            window.location = document.location.origin;


        }


    }
})


////////////////////////////////  private functions ////////////////

function display_order(p){ router.push({ name: 'order', params: { order : p }}) }
function display_distributor(p){ router.push({ name: 'profil', params: { distributor : p }}) }

