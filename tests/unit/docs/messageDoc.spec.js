import Vue from 'vue';
import MessageDoc from '../../../src/layouts/docs/pages/MessageDoc';

describe('Message', () => {
    it('should be able to close message', done => {
        const Constructor = Vue.extend(MessageDoc);
        const vm = new Constructor().$mount();

        let trigger =  vm.$el.querySelectorAll('.delete')[0];
        trigger.click();
        setTimeout(() => {
            expect(document.querySelector('.message')).notExist;
            vm.$destroy();
            done();
        }, 200);
    });
});