import Vue from 'vue';
import ModalDoc from '../../../src/layouts/docs/pages/ModalDoc';

describe('Modal', () => {
    it('should be able to toggle modal', done => {
        const Constructor = Vue.extend(ModalDoc);
        const vm = new Constructor().$mount();

        let trigger =  vm.$el.querySelectorAll('button')[0];

        expect(document.querySelector('.modal-background')).notExist;

        trigger.click();
        setTimeout(() => {
            expect(document.querySelector('.modal-background')).toExist;

            let closeTrigger = vm.$el.querySelectorAll('.modal-close')[0];
            closeTrigger.click();
            setTimeout(() => {
                expect(document.querySelector('.modal-background')).notExist;

                vm.$destroy();
                done();
            }, 200);
        }, 200);
    });
});