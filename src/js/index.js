import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;

//listen to event when an article is added
store.subscribe(() => console.log('Look ma, Redux!!'));

//fire an action to add an article
store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }));
