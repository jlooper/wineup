import Vue from 'nativescript-vue';
import store from './store';
import Home from './components/Home';
Vue.prototype.$store = store;
//import { ModalStack, overrideModalViewMethod, VueWindowedModal } from 'nativescript-windowed-modal';
import firebase from 'nativescript-plugin-firebase';

//overrideModalViewMethod();
//Vue.registerElement('ModalStack', () => ModalStack);
//Vue.use(VueWindowedModal);

firebase
    .init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
    })
    .then(
        instance => {
            console.log('firebase.init done');
        },
        error => {
            console.log(`firebase.init error: ${error}`);
        }
    );
Vue.prototype.$firebase = firebase;
/*Vue.registerElement(
	'MLKitTextRecognition',
	() => require('nativescript-plugin-firebase/mlkit/textrecognition').MLKitTextRecognition
);*/
Vue.registerElement(
    'MLKitCustomModel',
    () => require('nativescript-plugin-firebase/mlkit/custommodel').MLKitCustomModel
);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home,
    },
}).$start();
