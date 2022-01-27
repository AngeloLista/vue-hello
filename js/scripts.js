console.log('vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data: {
        title: 'Prova',
        imageUrl: 'https://velvetgossip.it/wp-content/uploads/2020/06/mr-bean.jpg',
    }
});