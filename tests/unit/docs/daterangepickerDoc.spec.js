import Vue from 'vue';
import DaterangepickerDoc from '../../../src/layouts/docs/pages/DaterangepickerDoc';

describe('DaterangepickerDoc', () => {
    it('should be able to destroy', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$destroy();
    });

    it('should be able to render date view', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');

            expect(picker).toBeTruthy();

            let todayBtn = picker.querySelector('.is-today');

            expect(todayBtn.textContent).toEqual(`${window.moment().toDate().getUTCDate()}`);

            let inputFld = picker.querySelector('input');

            expect(inputFld.getAttribute('placeholder')).not.toBe('');
        });
    });

    it ('should be able to select date range', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let targetRow = picker.querySelectorAll('.calendar-body')[3];
            let inputFld = picker.querySelector('input');

            targetRow.querySelectorAll('.calendar-date .date-item')[0].click();
            vm.$nextTick(() => {
                targetRow.querySelectorAll('.calendar-date .date-item')[6].click();
                vm.$nextTick(() => {
                    expect(inputFld.value).not.toBe('');
                });
            });
        });
    });

    it('should remove data clear button is clicked', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let targetRow = picker.querySelectorAll('.calendar-body')[3];
            let actionBtn = picker.querySelector('.dropdown-trigger').querySelector('button');
            let inputFld = picker.querySelector('input');

            targetRow.querySelectorAll('.calendar-date .date-item')[0].click();
            vm.$nextTick(() => {
                targetRow.querySelectorAll('.calendar-date .date-item')[6].click();
                vm.$nextTick(() => {
                    actionBtn.click();
                    vm.$nextTick(() => {
                        actionBtn.click();
                        vm.$nextTick(() => {
                            expect(inputFld.value).toBe('');
                        });
                    });
                });
            });
        });
    });

    it('should be able to navigate to previous year', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let prevYearBtn = picker.querySelectorAll('.calendar')[0].querySelector('.calendar-nav-left').querySelectorAll('button')[0];

            let label = picker.querySelectorAll('.calendar')[0].querySelector('.calendar-nav-middle');

            expect(label.textContent).toBe(window.moment().format('YYYY MMM'));

            prevYearBtn.click();
            vm.$nextTick(() => {
                expect(label.textContent).toBe(window.moment().subtract(1, 'Y').format('YYYY MMM'));
            });
        });  
    });

    it('should be able to navigate to next year', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let nextYearBtn = picker.querySelectorAll('.calendar')[1].querySelector('.calendar-nav-right').querySelectorAll('button')[1];

            let label = picker.querySelectorAll('.calendar')[1].querySelector('.calendar-nav-middle');

            expect(label.textContent).toBe(window.moment().add(1, 'M').format('YYYY MMM'));

            nextYearBtn.click();
            vm.$nextTick(() => {
                expect(label.textContent).toBe(window.moment().add(1, 'M').add(1, 'Y').format('YYYY MMM'));
            });
        });  
    });

    it('should be able to navigate to previous month', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let prevMonthBtn =  picker.querySelectorAll('.calendar')[0].querySelector('.calendar-nav-left').querySelectorAll('button')[1];

            let label = picker.querySelectorAll('.calendar')[0].querySelector('.calendar-nav-middle');

            expect(label.textContent).toBe(window.moment().format('YYYY MMM'));

            prevMonthBtn.click();
            vm.$nextTick(() => {
                expect(label.textContent).toBe(window.moment().subtract(1, 'M').format('YYYY MMM'));
            });
        });  
    });

    it('should be able to navigate to next month', () => {
        const Constructor = Vue.extend(DaterangepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.daterange-picker');
            let nextMonthBtn =  picker.querySelectorAll('.calendar')[1].querySelector('.calendar-nav-right').querySelectorAll('button')[0];

            let label = picker.querySelectorAll('.calendar')[1].querySelector('.calendar-nav-middle');

            expect(label.textContent).toBe(window.moment().add(1, 'M').format('YYYY MMM'));

            nextMonthBtn.click();
            vm.$nextTick(() => {
                expect(label.textContent).toBe(window.moment().add(2, 'M').format('YYYY MMM'));
            });
        });  
    });
});