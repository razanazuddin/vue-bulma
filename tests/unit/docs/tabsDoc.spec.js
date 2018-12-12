import Vue from 'vue';
import TabsDoc from '../../../src/layouts/docs/pages/TabsDoc';

describe('Tabs', () => {
    it('should be able to render first tab on open', done => {
        const Constructor = Vue.extend(TabsDoc);
        const vm = new Constructor().$mount();

        let tabs = vm.$el.querySelector('.tabs');
        vm.$nextTick(() => {
            let activeTab = tabs.querySelectorAll('.is-active');

            expect(activeTab.length).toEqual(1);
            done();
        },200);
    });

    it('should be able to render icon at the last tab', done => {
        const Constructor = Vue.extend(TabsDoc);
        const vm = new Constructor().$mount();

        let tabs = vm.$el.querySelector('.tabs');
        vm.$nextTick(() => {
            let tab = tabs.querySelectorAll('li')[2];

            expect(tab.querySelector('.icon')).toExist;
            done();
        }, 200);
    });

    it('should be able to click on other tab', done => {
        const Constructor = Vue.extend(TabsDoc);
        const vm = new Constructor().$mount();

        let tabs = vm.$el.querySelector('.tabs');
        vm.$nextTick(() => {
            let nextTab = tabs.querySelectorAll('li a')[1];
            nextTab.click();
            vm.$nextTick(() => {
                expect(tabs.querySelector('.is-active a span').textContent).toBe('Tab #2');
                done();
            }, 200);
        }, 200);        
    });

    it('should be able to use without v-model', done => {
        const Constructor = Vue.extend(TabsDoc);
        const vm = new Constructor().$mount();

        let tabs = vm.$el.querySelector('.tabs');
        vm.$nextTick(() => {
            let nextTab = tabs.querySelectorAll('li a')[1];
            nextTab.click();
            vm.$nextTick(() => {
                expect(tabs.querySelectorAll('.is-active').length).toEqual(1);
                expect(tabs.querySelector('.is-active a span').textContent).toBe('Tab #2');
                done();
            });
        });
    });
});