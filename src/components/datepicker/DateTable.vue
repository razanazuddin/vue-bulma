<template>
    <div 
        class="calendar-container" 
        @click="handleClick">
        <div class="calendar-header">
            <div 
                v-for="(week, index) in WEEKS" 
                :key="index + '-week'" 
                class="calendar-date">{{ week }}</div>
        </div>
        <div 
            v-for="(row, rowIndex) in rows" 
            :key="rowIndex + '-row'" 
            class="calendar-body">
            <div 
                v-for="(cell, cellIndex) in row" 
                :key="cellIndex + '-cell-' + rowIndex + '-row'" 
                :class="getCellClasses(cell)" 
                class="calendar-date">
                <button 
                    :data-date="new Date(date.getFullYear(), date.getMonth(), Number(cell.text))" 
                    :class="[{ 'is-today': cell.type === 'today' }, { 'is-active': selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && Number(year) === date.getFullYear() && month === date.getMonth() && monthDate === Number(cell.text) || cell.start || cell.end }]" 
                    class="date-item">{{ cell.text }}</button>
            </div>
        </div>
    </div>
</template>

<script>
const DAY_DURATION = 86400000;
const WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const clearHours = function(time) {
    const cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

export default {
    props: {
        firstDayOfWeek: {
            default: 7,
            type: Number,
            validator: val => val >= 1 && val <= 7
        },
        date: {
            type: Date,
            default: new Date()
        },
        year: {
            type: Number,
            default: () => { return window.moment().year(); }
        },
        month: {
            type: Number,
            default: () => { return window.moment().month(); }
        },
        week: {
            type: Number,
            default: () => { return window.moment().week(); }
        },
        selectionMode: {
            type: String,
            default: 'day'
        },
        showWeekNumber: {
            type: Boolean,
            default: false
        },
        disabledDate: {
            type: Boolean,
            default: false
        },
        minDate: {
            type: String,
            default: ''
        },
        maxDate: {
            type: String,
            default: ''
        },
        rangeState: {
            type: Object,
            default: () => {
                return {
                    endDate: null,
                    selecting: false,
                    row: null,
                    column: null
                };
            }
        }
    },
    computed: {
        offsetDay() {
            const week = this.firstDayOfWeek;
            return week > 3 ? 7 - week : -week;
        },
        WEEKS() {
            const week = this.firstDayOfWeek;
            return WEEKS.concat(WEEKS).slice(week, week + 7);
        },
        monthDate() {
            return this.date.getDate();
        },
        startDate() {
            const getStartDateOfMonth = (year, month) => {
                const result = new Date(year, month, 1);
                const day = result.getDay();

                if (day === 0) {
                    result.setTime(result.getTime() - DAY_DURATION * 7);
                } else {
                    result.setTime(result.getTime() - DAY_DURATION * day);
                }

                return result;
            };
            return getStartDateOfMonth(this.year, this.month);
        },
        rows() {
            const date = new Date(this.year, this.month, 1);
            let day = window.moment(date).startOf('month').day(); // day of first day
            const dateCountOfMonth = window.moment(date).daysInMonth();
            const dateCountOfLastMonth = window.moment(date).subtract(1, 'months').daysInMonth();
            day = (day === 0 ? 7 : day);
            const offset = this.offsetDay;
            const rows = [ [], [], [], [], [], [] ]; //this.tableRows;
            let count = 1;
            let firstDayPosition;
            const startDate = this.startDate;
            const disabledDate = this.disabledDate;
            const now = clearHours(new Date());
            for (var i = 0; i < 6; i++) {
                const row = rows[i];
                if (this.showWeekNumber) {
                    if (!row[0]) {
                        row[0] = {
                            type: 'week',
                            text: window.moment(startDate).week()
                        };
                    }
                }
                for (var j = 0; j < 7; j++) {
                    let cell = row[this.showWeekNumber ? j + 1 : j];
                    if (!cell) {
                        cell = {
                            row: i,
                            column: j,
                            type: 'normal',
                            inRange: false,
                            start: false,
                            end: false
                        };
                    }
                    cell.type = 'normal';
                    const index = i * 7 + j;
                    const time = startDate.getTime() + DAY_DURATION * (index - offset);
                    cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
                    cell.start = this.minDate && time === clearHours(this.minDate);
                    cell.end = this.maxDate && time === clearHours(this.maxDate);
                    const isToday = time === now;
                    if (isToday) {
                        cell.type = 'today';
                    }
                    if (i >= 0 && i <= 1) {
                        if (j + i * 7 >= (day + offset)) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else {
                        if (count <= dateCountOfMonth) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = count++ - dateCountOfMonth;
                            cell.type = 'next-month';
                        }
                    }
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
                }
            }
            rows.firstDayPosition = firstDayPosition;
            return rows;
        }
    },
    watch: {
        'rangeState.endDate' (newVal) {
            this.markRange(newVal);
        },
        minDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = true;
                this.markRange(newVal);
            } else if (!newVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
            } else {
                this.markRange();
            }
        },
        maxDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
                this.$emit('pick', {
                    minDate: this.minDate,
                    maxDate: this.maxDate
                });
            }
        }
    },
    methods: {
        getCellClasses(cell) {
            let classes = [];
            classes.push(cell.type);
            if (cell.type === 'prev-month' || cell.type === 'next-month') {
                classes.push('is-disabled');
            }
            if (cell.inRange && (cell.type === 'normal' || cell.type === 'today')) {
                classes.push('calendar-range');
                if (cell.start) {
                    classes.push('range-start');
                } else if (cell.end) {
                    classes.push('range-end');
                }
            }
            if (cell.disabled) {
                classes.push('is-disabled');
            }
            return classes.join(' ');
        },
        getDateOfCell(row, column) {
            const startDate = this.startDate;
            return new Date(startDate.getTime() + (row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay) * DAY_DURATION);
        },
        markRange(maxDate) {
            const startDate = this.startDate;
            if (!maxDate) {
                maxDate = this.maxDate;
            }
            const rows = this.rows;
            const minDate = this.minDate;
            for (var i = 0, k = rows.length; i < k; i++) {
                const row = rows[i];
                for (var j = 0, l = row.length; j < l; j++) {
                    if (this.showWeekNumber && j === 0) continue;
                    const cell = row[j];
                    const index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
                    const time = startDate.getTime() + DAY_DURATION * (index - this.offsetDay);
                    cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
                    cell.start = minDate && time === clearHours(minDate.getTime());
                    cell.end = maxDate && time === clearHours(maxDate.getTime());
                }
            }
        },
        handleClick(event) {
            let target = event.target;
            if (target.tagName !== 'BUTTON') return;
            var selectionMode = this.selectionMode;
            let year = Number(this.year);
            let month = Number(this.month);
            const text = target.textContent;
            const newDate = new Date(year, month, 1);
            if (target.parentNode.className.indexOf('prev') !== -1) {
                if (month === 0) {
                    year = year - 1;
                    month = 11;
                } else {
                    month = month - 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            } else if (target.parentNode.className.indexOf('next') !== -1) {
                if (month === 11) {
                    year = year + 1;
                    month = 0;
                } else {
                    month = month + 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            }
            newDate.setDate(parseInt(text, 10));
            if (this.selectionMode === 'range') {
                if (this.minDate && this.maxDate) {
                    const minDate = new Date(newDate.getTime());
                    const maxDate = '';
                    this.$emit('pick', {
                        minDate,
                        maxDate
                    }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                } else if (this.minDate && !this.maxDate) {
                    if (newDate >= this.minDate) {
                        const maxDate = new Date(newDate.getTime());
                        this.rangeState.selecting = false;
                        this.$emit('pick', {
                            minDate: this.minDate,
                            maxDate
                        });
                    } else {
                        const minDate = new Date(newDate.getTime());
                        this.$emit('pick', {
                            minDate,
                            maxDate: this.maxDate
                        }, false);
                    }
                } else if (!this.minDate) {
                    const minDate = new Date(newDate.getTime());
                    this.$emit('pick', {
                        minDate,
                        maxDate: this.maxDate
                    }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                }
            } else if (selectionMode === 'day') {
                this.$emit('pick', newDate);
            }
        }
    }
};
</script>
