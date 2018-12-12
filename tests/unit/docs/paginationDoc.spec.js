import Vue from 'vue';
import PaginationDoc from '../../../src/layouts/docs/pages/PaginationDoc';

describe('Pagination', () => {
    it('should be able to remove Boundary link', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.boundaryLinks = true;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        vm.$nextTick(() => {
            let beforeLength = pagination.querySelectorAll('li').length;
            vm.boundaryLinks = false;
            vm.$nextTick(() => {
                let afterLength = pagination.querySelectorAll('li').length;

                expect(afterLength).toEqual(beforeLength - 2);
                done();
            }, 200);
        }, 200);
    });

    it('should be able to add Boundary link', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.boundaryLinks = false;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        vm.$nextTick(() => {
            let beforeLength = pagination.querySelectorAll('li').length;
            vm.boundaryLinks = true;
            vm.$nextTick(() => {
                let afterLength = pagination.querySelectorAll('li').length;

                expect(afterLength).toEqual(beforeLength + 2);
                done();
            }, 200);
        }, 200);
    });

    it('should be able to remove direction link', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.directionLinks = true;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        vm.$nextTick(() => {
            let beforeLength = pagination.querySelectorAll('li').length;
            vm.directionLinks = false;
            vm.$nextTick(() => {
                let afterLength = pagination.querySelectorAll('li').length;

                expect(afterLength).toEqual(beforeLength - 2);
                done();
            }, 200);
        }, 200);
    });

    it('should be able to add direction link', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.directionLinks = false;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        vm.$nextTick(() => {
            let beforeLength = pagination.querySelectorAll('li').length;
            vm.directionLinks = true;
            vm.$nextTick(() => {
                let afterLength = pagination.querySelectorAll('li').length;

                expect(afterLength).toEqual(beforeLength + 2);
                done();
            }, 200);
        }, 200);
    });

    it('should be able to change current page', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.currentPage = 1;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        let currentPageElement = pagination.querySelector('li a.is-current');
        vm.$nextTick(() => {
            expect(Number(currentPageElement.text)).toEqual(vm.currentPage);
            let startPageElement = pagination.querySelectorAll('li a')[vm.maxSize - 1];
            startPageElement.click();
            vm.$nextTick(() => {
                currentPageElement = pagination.querySelector('li a.is-current');

                expect(Number(currentPageElement.text)).toEqual(Number(startPageElement.text));
                done();
            }, 200);
        }, 200);
    });

    it('should be able to change size', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.size = '';
        let pagination = vm.$el.querySelector('nav.pagination');
        vm.$nextTick(() => {
            expect(pagination.className).toEqual('pagination');
            vm.size = 'is-large';
            vm.$nextTick(() => {
                expect(pagination.className).toEqual('pagination is-large');
                vm.size = 'is-small';
                vm.$nextTick(() => {
                    expect(pagination.className).toEqual('pagination is-small');
                    done();
                }, 200);
            }, 200);
        }, 200);
    });

    it('should be able to change total page', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.totalSize = 18;
        vm.$nextTick(() => {
            let pagination = vm.$el.querySelector('ul.pagination-list');
            let lastBtn = pagination.querySelector('li:last-child');
            lastBtn.click();
            vm.$nextTick(() => {
                let activeBtn = pagination.querySelector('li a.is-current');

                expect(Number(activeBtn.text)).toEqual(vm.totalSize);
                vm.totalSize = 100;
                vm.$nextTick(() => {
                    lastBtn.click();
                    vm.$nextTick(() => {
                        activeBtn = pagination.querySelector('li a.is-current');

                        expect(Number(activeBtn.text)).toEqual(vm.totalSize);
                        done();
                    });
                });
            });
        });
    });

    it('should be able to go to first page', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        let pagination = vm.$el.querySelector('ul.pagination-list');
        let activeBtn = pagination.querySelector('li a.is-current');

        expect(Number(activeBtn.text)).toEqual(1);
        vm.totalSize = 18;
        vm.currentPage = 18;
        vm.$nextTick(() => {
            activeBtn = pagination.querySelector('li a.is-current');

            expect(Number(activeBtn.text)).toEqual(18);
            vm.currentPage = 1;
            vm.$nextTick(() => {
                activeBtn = pagination.querySelector('li a.is-current');

                expect(Number(activeBtn.text)).toEqual(1);
                done();
            }, 200);
        }, 200);
    });

    it('last group has max size item', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.currentPage = 18;
        vm.$nextTick(() => {
            let pagination = vm.$el.querySelector('ul.pagination-list');
            let startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

            expect(Number(startBtn.text)).toEqual(vm.totalSize - vm.maxSize + 1);
            vm.currentPage = 12;
            vm.$nextTick(() => {
                startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

                expect(Number(startBtn.text)).toEqual(vm.currentPage - vm.maxSize + 1);
                done();
            }, 200);
        }, 200);
    });

    it('should be go to next group', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.totalSize = 13;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        let startBtn = pagination.querySelectorAll('li.pagination-page a')[0];
        let lastEllipsisBtn = pagination.querySelectorAll('li a.pagination-ellipsis')[0];
        vm.$nextTick(() => {
            startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

            expect(Number(startBtn.text)).toEqual(1);
            lastEllipsisBtn.click();
            vm.$nextTick(() => {
                startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

                expect(Number(startBtn.text)).toEqual(1 + vm.maxSize);
                lastEllipsisBtn = pagination.querySelectorAll('li a.pagination-ellipsis')[1];
                lastEllipsisBtn.click();
                vm.$nextTick(() => {
                    startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

                    expect(Number(startBtn.text)).toEqual(vm.totalSize - vm.maxSize + 1);
                    done();
                }, 200);
            }, 200);
        }, 200);
    });

    it('should be go to previous group', done => {
        const Constructor = Vue.extend(PaginationDoc);
        const vm = new Constructor().$mount();
        vm.totalSize = 13;
        vm.currentPage = 12;
        let pagination = vm.$el.querySelector('ul.pagination-list');
        let startBtn = pagination.querySelectorAll('li.pagination-page a')[0];
        let firstEllipsisBtn = pagination.querySelectorAll('li a.pagination-ellipsis')[0];
        vm.$nextTick(() => {
            startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

            expect(Number(startBtn.text)).toEqual(vm.totalSize - vm.maxSize + 1);
            firstEllipsisBtn.click();
            vm.$nextTick(() => {
                startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

                expect(Number(startBtn.text)).toEqual(vm.maxSize - 1);
                firstEllipsisBtn.click();
                vm.$nextTick(() => {
                    startBtn = pagination.querySelectorAll('li.pagination-page a')[0];

                    expect(Number(startBtn.text)).toEqual(1);
                    done();
                }, 200);
            }, 200);
        }, 200);
    });
});
