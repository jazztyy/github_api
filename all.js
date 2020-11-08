
new Vue ({
    el: '#app',
    data: {
        usersData: {},
        userRepos: {},
        positionY: 50,
    },
    methods: {
      getUserData() {
            const API = 'https://api.github.com/users/jazztyy'
            axios.get(API)
            .then(res => {
                console.log(res.data);
                this.usersData = res.data
            })
      },
      getUserRepos() {
          const API = 'https://api.github.com/users/jazztyy/repos'
          axios.get(API)
            .then(res => {
                console.log(res.data);
                this.userRepos = res.data
            })
      },
      handleScroll() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop
          let img = document.querySelector('#img')
          this.positionY = (img.offsetTop - scrollTop) * 0.7
      }  
    },
    created() {
        let vm = this
        axios.all(
            [
                vm.getUserData(),
                vm.getUserRepos(),
            ])
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
})