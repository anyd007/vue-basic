const app = Vue.createApp({
    data() {
        return {
            url: "https://onet.pl",
            showBooks: true,
            books:[
                {title: "dom", author: "jhames may", isFav: true},
                {title: "papier", author: "clarkson", isFav: false},
                {title: "auto", author: "gebala", isFav: true}
            ],
            x: 0,
            y: 0
        }
    },
   methods: {
    toggleShowBooks() {
        this.showBooks = !this.showBooks
    },

    handleEvents(e, data) {
        console.log(e.type)

        if(data){
            console.log(data)
        }
    },

    handeMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    },

    toggleFav(book) {
        book.isFav = !book.isFav
    }
   },

   computed: {
    filterBooks() {
        return this.books.filter((book) => book.isFav)
    }
   }
})

app.mount('#app')