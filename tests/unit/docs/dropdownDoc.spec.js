import Vue from 'vue';
import DropdownDoc from '../../../src/layouts/docs/pages/DropdownDoc';

describe('DropdownDoc', () => {
    it('should be able to destroy', () => {
        const Constructor = Vue.extend(DropdownDoc);
        const vm = new Constructor().$mount();
        vm.$destroy();
    });

    it('should be able to open dropdown on trigger click', () => {
        const Constructor = Vue.extend(DropdownDoc);
        const vm = new Constructor().$mount();
        let dropdown = vm.$el.querySelector('.dropdown');
        let trigger = dropdown.querySelector('button');

        expect(dropdown.tagName.toLowerCase()).toEqual('div');
        expect(dropdown.className).not.toContain('dropdown is-active');
        trigger.click();
        vm.$nextTick(() => {
            expect(dropdown.className).toContain('dropdown is-active');
        });
    });

    it('should be able to close dropdown on trigger click', () => {
        const Constructor = Vue.extend(DropdownDoc);
        const vm = new Constructor().$mount();
        let dropdown = vm.$el.querySelector('.dropdown');
        let trigger = dropdown.querySelector('button');

        expect(dropdown.tagName.toLowerCase()).toEqual('div');
        expect(dropdown.className).not.toContain('dropdown is-active');
        trigger.click();
        vm.$nextTick(() => {
            expect(dropdown.className).toContain('dropdown is-active');
            trigger.click();
            vm.$nextTick(() => {
                expect(dropdown.className).not.toContain('dropdown is-active');
            });
        });
    });

    it('should be able to close dropdown when body is clicked', () => {
        const Constructor = Vue.extend(DropdownDoc);
        const vm = new Constructor().$mount();
        let dropdown = vm.$el.querySelector('.dropdown');
        let trigger = dropdown.querySelector('button');
        trigger.click();
        vm.$nextTick(() => {
            document.body.click();
            vm.$nextTick(() => {
                expect(dropdown.className).not.toContain('dropdown is-active');
            });
        });
    });

    it('should not close dropdown when not-close-elements is clicked', () => {
        const Constructor = Vue.extend(DropdownDoc);
        const vm = new Constructor().$mount();
        let dropdown = vm.$el.querySelector('.no-close-dropdown');
        let trigger = dropdown.querySelector('button');
        trigger.click();
        vm.$nextTick(() => {
            expect(dropdown.className).toContain('no-close-dropdown dropdown is-active');
            let dropdownItem = dropdown.querySelector('.dropdown-item');
            dropdownItem.click();
            vm.$nextTick(() => {
                document.body.click();
                vm.$nextTick(() => {
                    expect(dropdown.className).not.toContain('no-close-dropdown dropdown is-active');
                });
            });
        });
    });
});