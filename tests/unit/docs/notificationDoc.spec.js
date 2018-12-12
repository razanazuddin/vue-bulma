import Vue from 'vue';
import NotificationDoc from '../../../src/layouts/docs/pages/NotificationDoc';

describe('Notification', () => {
    it('should be able to close notification', done => {
        const Constructor = Vue.extend(NotificationDoc);
        const vm = new Constructor().$mount();

        expect(document.querySelector('.notification')).toExist;
        let trigger =  vm.$el.querySelectorAll('.delete')[0];
        trigger.click();
        setTimeout(() => {
            expect(document.querySelector('.notification')).notExist;
            vm.$destroy();
            done();
        }, 200);
    });
});