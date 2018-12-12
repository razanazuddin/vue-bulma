import Vue from 'vue';
import TimepickerDoc from '../../../src/layouts/docs/pages/TimepickerDoc';

describe('TimepickerDoc', () => {
    it('should be able to destroy', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        vm.$destroy();
    });

    it('should be able to render time-select view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();

        let picker = vm.$el.querySelector('.time-select');

        expect(picker).toExist;

        let inputFld = picker.querySelector('input');

        expect(inputFld.getAttribute('placeholder')).not.toBe('');
    });

    it('should be able to return the picked time in time-select view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-select');
        let inputFld = picker.querySelector('input');
        inputFld.focus();
        vm.$nextTick(() => {
            let timeOption = picker.querySelectorAll('.time-item')[0];
            timeOption.click();
            vm.$nextTick(() => {
                let selectedTime = picker.querySelector('.is-active');

                expect(inputFld.value).toEqual(selectedTime.textContent);
            });
        });
    });

    it('should reset data if clear button is clicked in time-select view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-select');
        let actionBtn = picker.querySelector('.dropdown-trigger').querySelector('button');
        let inputFld = picker.querySelector('input');
        inputFld.focus();
        vm.$nextTick(() => {
            let timeOption = picker.querySelectorAll('.time-item')[0];
            timeOption.click();
            vm.$nextTick(() => {
                let selectedTime = picker.querySelector('.is-active');

                expect(inputFld.value).toEqual(selectedTime.textContent);
                actionBtn.click();
                vm.$nextTick(() => {
                    actionBtn.click();
                    vm.$nextTick(() => {
                        expect(inputFld.value).toEqual('');
                        expect(picker.querySelector('.is-active')).toBe(null);
                    });
                });
            });
        });
    });

    it('should display picked time at the top after dropdown is reopened in time-select view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-select');
        let inputFld = picker.querySelector('input');
        inputFld.focus();
        vm.$nextTick(() => {
            let timeOption = picker.querySelectorAll('.time-item')[0];
            timeOption.click();
            vm.$nextTick(() => {
                document.body.click();
                vm.$nextTick(() => {
                    inputFld.focus();
                    let pickedTime = picker.querySelector('.is-active');

                    expect(pickedTime.scrollTop).toBe(0);
                });
            });
        });
    });

    it('should be able to render time-picker view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();

        let picker = vm.$el.querySelector('.time-picker');

        expect(picker).toExist;

        let inputFld = picker.querySelector('.input');

        expect(inputFld.textContent).not.toBe('');
    });

    it('should be able to return the picked time in time-picker view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-picker');
        let inputFld = picker.querySelector('.input');
        inputFld.click();
        vm.$nextTick(() => {
            let hourOption = picker.querySelectorAll('.dropdown-content')[0].querySelectorAll('.time-item')[0];
            hourOption.click();
            vm.$nextTick(() => {
                let minutesOption = picker.querySelectorAll('.dropdown-content')[1].querySelectorAll('.time-item')[0];
                minutesOption.click();
                vm.$nextTick(() => {
                    let secondsOption = picker.querySelectorAll('.dropdown-content')[2].querySelectorAll('.time-item')[0];
                    secondsOption.click();
                    vm.$nextTick(() => {
                        let selectedHour = picker.querySelectorAll('.dropdown-content')[0].querySelector('.is-active');
                        let selectedMinutes = picker.querySelectorAll('.dropdown-content')[1].querySelector('.is-active');
                        let selectedSeconds = picker.querySelectorAll('.dropdown-content')[2].querySelector('.is-active');

                        expect(inputFld.textContent).toEqual(`${selectedHour.textContent} : ${selectedMinutes.textContent} : ${selectedSeconds.textContent}`);
                    });
                });
            });
        });
    });

    it('should reset data if clear button is clicked in time-picker view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-picker');
        let inputFld = picker.querySelector('.input');
        inputFld.click();
        vm.$nextTick(() => {
            let hourOption = picker.querySelectorAll('.dropdown-content')[0].querySelectorAll('.time-item')[0];
            hourOption.click();
            vm.$nextTick(() => {
                let minutesOption = picker.querySelectorAll('.dropdown-content')[1].querySelectorAll('.time-item')[0];
                minutesOption.click();
                vm.$nextTick(() => {
                    let secondsOption = picker.querySelectorAll('.dropdown-content')[2].querySelectorAll('.time-item')[0];
                    secondsOption.click();
                    vm.$nextTick(() => {
                        let actionBtn = picker.querySelector('.dropdown-trigger').querySelector('button');
                        actionBtn.click();
                        vm.$nextTick(() => {
                            expect(inputFld.textContent).toEqual('HH : mm : ss');
                            expect(picker.querySelectorAll('.is-active').length).toBe(0);
                        });
                    });
                });
            });
        });
    });

    it('should display picked time at the top after dropdown is reopened in time-picker view', () => {
        const Constructor = Vue.extend(TimepickerDoc);
        const vm = new Constructor().$mount();
        let picker = vm.$el.querySelector('.time-picker');
        let inputFld = picker.querySelector('.input');
        inputFld.click();
        vm.$nextTick(() => {
            let hourOption = picker.querySelectorAll('.dropdown-content')[0].querySelectorAll('.time-item')[0];
            hourOption.click();
            vm.$nextTick(() => {               
                let minutesOption = picker.querySelectorAll('.dropdown-content')[1].querySelectorAll('.time-item')[0];
                minutesOption.click();
                vm.$nextTick(() => {                   
                    let secondsOption = picker.querySelectorAll('.dropdown-content')[2].querySelectorAll('.time-item')[0];
                    secondsOption.click();
                    vm.$nextTick(() => {
                        document.body.click();
                        vm.$nextTick(() => {
                            inputFld.click();
                            let selectedHour = picker.querySelectorAll('.dropdown-content')[0].querySelector('.is-active');
                            let selectedMinutes = picker.querySelectorAll('.dropdown-content')[1].querySelector('.is-active');
                            let selectedSeconds = picker.querySelectorAll('.dropdown-content')[2].querySelector('.is-active');

                            expect(selectedHour.scrollTop).toBe(0);
                            expect(selectedMinutes.scrollTop).toBe(0);
                            expect(selectedSeconds.scrollTop).toBe(0);
                        });
                    });
                });
            });
        });
    });
});