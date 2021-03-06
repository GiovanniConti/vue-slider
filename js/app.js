Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () =>{
  new Vue({
    el: "#root",
    data: {
      imagesList: [
        {
          urlImg: 'img/01.jpg',
          titleImg: 'Svezia',
          descriptionImg: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
          urlImg: 'img/02.jpg',
          titleImg: 'Svizzera',
          descriptionImg: 'Lorem ipsum',
        },
        {
          urlImg: 'img/03.jpg',
          titleImg: 'Gran Bretagna',
          descriptionImg: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          urlImg: 'img/04.jpg',
          titleImg: 'Germania',
          descriptionImg: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        },
        {
          urlImg: 'img/05.jpg',
          titleImg: 'Paradise',
          descriptionImg: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        },

      ],
      currentIndex: 0,
    },
    methods:{
      upClick(){
        let newIndex = this.currentIndex - 1;

        if(newIndex < 0) {
          newIndex = this.imagesList.length - 1;
        }
        this.currentIndex = newIndex;
      },
      downClick(){
        let newIndex = this.currentIndex + 1;
        if(newIndex > (this.imagesList.length - 1)){
          newIndex = 0;
        }
        this.currentIndex = newIndex;
      }
    },
    mounted(){
      setInterval(() => {
        this.downClick();
      }, 3000);
    }
  });
});