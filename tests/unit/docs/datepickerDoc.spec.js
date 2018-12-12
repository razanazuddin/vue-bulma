import Vue from 'vue';
import DatepickerDoc from '../../../src/layouts/docs/pages/DatepickerDoc';

describe('DatepickerDoc', () => {
    it('should be able to destroy', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();
        vm.$destroy();
    });

    it('should be able to render date view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');

            expect(picker).toBeTruthy();

            let dateView = picker.querySelector('.calendar-container');

            let todayBtn = dateView.querySelector('.is-today');

            expect(todayBtn.textContent).toEqual(`${window.moment().toDate().getUTCDate()}`);

            let inputFld = picker.querySelector('input');

            expect(inputFld.getAttribute('placeholder')).not.toBe('');
        });
    });

    it ('should be able to return the picked date', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateView = picker.querySelector('.calendar-container');

            let tomorrowBtn = dateView.querySelector('.is-today').parentNode.nextSibling.childNodes[0];
            tomorrowBtn.click();
            vm.$nextTick(() => {
                let selectedDate = dateView.querySelector('.is-active');

                expect(selectedDate.textContent).toEqual(`${window.moment().add(1, 'd').toDate().getDate()}`);
            });
        });
    });

    it('should be able to change month', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let monthView = picker.querySelectorAll('table')[1];

            let monthBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[1];
            monthBtn.click();
            vm.$nextTick(() => {
                let selectedMonth = monthView.querySelector('.is-active');

                expect(selectedMonth.textContent).toEqual(window.moment().format('MMM'));

                let firstMonthBtn = monthView.querySelectorAll('td .date-item')[0];
                firstMonthBtn.click();
                vm.$nextTick(() => {
                    let selectedMonth = monthView.querySelector('.is-active');

                    expect(selectedMonth.textContent).toEqual('Jan');
                });
            });
        });
    });

    it('should be able to change year', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let yearView = picker.querySelectorAll('table')[0];

            let yearBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[0];
            yearBtn.click();
            vm.$nextTick(() => {
                let selectedYear = yearView.querySelector('.is-active');

                expect(selectedYear.textContent).toEqual(window.moment().format('YYYY'));

                let firstYearBtn = yearView.querySelectorAll('td .date-item')[0];
                firstYearBtn.click();
                vm.$nextTick(() => {
                    let selectedYear = yearView.querySelector('.is-active');

                    expect(selectedYear.textContent).not.toEqual(window.moment().format('YYYY'));
                });
            });
        });
    });

    it('should be able to change to prev month on date view', () => {
        const goPrev = (i, actionBtn, now, textBtn) => {
            if(i === 0) {
                // do nothing
            } else {
                actionBtn.click();
                vm.$nextTick(() => {
                    now = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0));

                    expect(textBtn.textContent).toContain(window.moment(now).format('MMM'));
                    goPrev(--i, actionBtn, now, textBtn);
                });
            }
        };

        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateNav = picker.querySelector('.calendar-nav-left').querySelectorAll('button')[1];
            let dateText = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[1];
            goPrev(2, dateNav, new Date(), dateText);
        });
    });

    it('should be able to change to next month on date view', () => {
        const goNext = (i, actionBtn, now, textBtn) => {
            if(i === 0) {
                // do nothing
            } else {
                actionBtn.click();
                vm.$nextTick(() => {
                    if (now.getUTCMonth() === 11) {
                        now = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1));
                    } else {
                        now = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
                    }

                    expect(textBtn.textContent).toContain(window.moment(now).format('MMM'));
                    goNext(--i, actionBtn, now, textBtn);
                });
            }
        };

        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateNav = picker.querySelector('.calendar-nav-right').querySelectorAll('button')[0];
            let dateText = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[1];
            goNext(2, dateNav, new Date(), dateText);
        });
    });

    it('should be able to change to other month on month view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let monthBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[1];

            monthBtn.click();
            vm.$nextTick(() => {
                let monthView = picker.querySelectorAll('table')[1];

                expect(monthView.querySelector('.is-active').textContent).toEqual(window.moment().format('MMM'));
                monthView.querySelectorAll('td .date-item')[0].click();
                vm.$nextTick(() => {
                    expect(monthBtn.textContent).toBe('Jan');
                });
            });
        });
    });

    it('should be able to change to prev year on date view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateNav = picker.querySelector('.calendar-nav-left').querySelectorAll('button')[0];

            dateNav.click();
            vm.$nextTick(() => {
                let dateText = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[0];

                expect(window.moment().subtract(1, 'Y').format('YYYY')).toEqual(dateText.textContent);
            });
        });
    });

    it('should be able to change to next year on date view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateNav = picker.querySelector('.calendar-nav-right').querySelectorAll('button')[1];

            dateNav.click();
            vm.$nextTick(() => {
                let dateText = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[0];

                expect(window.moment().add(1, 'Y').format('YYYY')).toEqual(dateText.textContent);
            });
        });
    });

    it('should be able to change to other year on year view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let yearBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[1];

            yearBtn.click();
            vm.$nextTick(() => {
                let yearView = picker.querySelectorAll('table')[0];

                expect(yearView.querySelector('td .is-active').textContent).toEqual(window.moment().format('YYYY'));

                let firstYearBtn = yearView.querySelectorAll('td .date-item')[0];
                firstYearBtn.click();
                vm.$nextTick(() => {
                    expect(yearView.querySelector('.is-active').textContent).not.toEqual(window.moment().format('YYYY'));
                });
            });
        });
    });

    it('should be able to display prev ten years on year view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        let thisYear = window.moment().toDate().getUTCFullYear();

        let startYear = Math.floor(thisYear / 10) * 10;
        let endYear = startYear + 9;

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let yearBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[0];

            yearBtn.click();
            vm.$nextTick(() => {
                expect(yearBtn.textContent).toBe(`${startYear} - ${endYear}`);

                let prevTenYearBtn = picker.querySelector('.calendar-nav-left').querySelectorAll('.button')[0];
                prevTenYearBtn.click();
                vm.$nextTick(() => {
                    expect(yearBtn.textContent).toBe(`${startYear - 10} - ${endYear - 10}`);
                });
            });
        });
    });

    it('should be able to display next ten years on year view', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();

        let thisYear = window.moment().toDate().getUTCFullYear();

        let startYear = Math.floor(thisYear / 10) * 10;
        let endYear = startYear + 9;

        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let yearBtn = picker.querySelector('.calendar-nav-middle').querySelectorAll('.button')[0];

            yearBtn.click();
            vm.$nextTick(() => {
                expect(yearBtn.textContent).toBe(`${startYear} - ${endYear}`);

                let nextTenYearBtn = picker.querySelector('.calendar-nav-right').querySelectorAll('.button')[1];
                nextTenYearBtn.click();
                vm.$nextTick(() => {
                    expect(yearBtn.textContent).toBe(`${startYear + 10} - ${endYear + 10}`);
                });
            });
        });
    });

    it('should reset data to today\'s date if clear button is clicked', () => {
        const Constructor = Vue.extend(DatepickerDoc);
        const vm = new Constructor().$mount();
        vm.$nextTick(() => {
            let picker = vm.$el.querySelector('.date-picker');
            let dateView = picker.querySelector('.calendar-container');
            let actionBtn = picker.querySelector('.dropdown-trigger').querySelector('button');

            let tomorrowBtn = dateView.querySelector('.is-today').parentNode.nextSibling.childNodes[0];
            tomorrowBtn.click();
            vm.$nextTick(() => {
                let selectedDate = dateView.querySelector('.is-active');

                expect(selectedDate.textContent).toBe(`${window.moment().add(1, 'd').toDate().getDate()}`);

                actionBtn.click();
                vm.$nextTick(() => {
                    actionBtn.click();
                    vm.$nextTick(() => {
                        let selectedDate = dateView.querySelector('.is-active');

                        expect(selectedDate.textContent).toBe(`${window.moment().toDate().getDate()}`);
                    });
                });
            });
        });
    });
});