<template>
    <dropdown 
        v-model="show" 
        :not-close-elements="['.date-picker']" 
        class="date-picker">
        <div class="dropdown-trigger">
            <div class="field has-addons">
                <div class="control">
                    <button 
                        v-if="show && date" 
                        type="button" 
                        class="button" 
                        title="Clear selection" 
                        @click="handleClear">
                        <span class="icon is-small is-left">
                            <i class="mdi mdi-close"/>
                        </span>
                    </button>
                    <button 
                        v-else 
                        type="button" 
                        class="button" 
                        @click="show = true">
                        <span class="icon is-small is-left">
                            <i class="mdi mdi-calendar"/>
                        </span>
                    </button>
                </div>
                <div class="control">
                    <input 
                        :placeholder="placeholder" 
                        :name="name" 
                        v-model="value" 
                        class="input" 
                        type="text" 
                        readonly 
                        @focus="show = true" >
                </div>
            </div>
        </div>
        <template slot="dropdown">
            <div class="calendar">
                <div class="calendar-nav">
                    <div class="calendar-nav-left">
                        <button 
                            type="button" 
                            class="button is-text" 
                            @click="prevYear">
                            <i class="mdi mdi-chevron-double-left"/>
                        </button>
                        <button 
                            v-show="currentView === 'date'" 
                            type="button" 
                            class="button is-text" 
                            @click="prevMonth">
                            <i class="mdi mdi-chevron-left"/>
                        </button>
                    </div>
                    <div class="calendar-nav-middle">
                        <button 
                            type="button" 
                            class="button is-text is-size-5" 
                            @click="showYearPicker">{{ yearLabel }}</button>
                        <button 
                            v-show="currentView === 'date'" 
                            :class="{ active: currentView === 'month' }" 
                            type="button" 
                            class="button is-text is-size-5" 
                            @click="showMonthPicker">{{ monthLabel }}</button>
                    </div>
                    <div class="calendar-nav-right">
                        <button 
                            v-show="currentView === 'date'" 
                            type="button" 
                            class="button is-text" 
                            @click="nextMonth">
                            <i class="mdi mdi-chevron-right"/>
                        </button>
                        <button 
                            type="button" 
                            class="button is-text" 
                            @click="nextYear">
                            <i class="mdi mdi-chevron-double-right"/>
                        </button>
                    </div>
                </div>
                <date-table
                    v-show="currentView === 'date'"
                    :year="year"
                    :month="month"
                    :date="date"
                    :week="week"
                    :selection-mode="selectionMode"
                    :first-day-of-week="firstDayOfWeek"
                    :disabled-date="disabledDate"
                    @pick="handleDatePick"/>
                <year-table
                    v-show="currentView === 'year'"
                    ref="yearTable"
                    :year="year"
                    :date="date"
                    :disabled-date="disabledDate"
                    @pick="handleYearPick"/>
                <month-table
                    v-show="currentView === 'month'"
                    :month="month"
                    :date="date"
                    :disabled-date="disabledDate"
                    @pick="handleMonthPick"/>
            </div>
        </template>
    </dropdown>
</template>

<script>
import Dropdown from './../dropdown/Dropdown';
import YearTable from './YearTable';
import MonthTable from './MonthTable';
import DateTable from './DateTable';
export default {
    components: {
        Dropdown,
        YearTable,
        MonthTable,
        DateTable
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        format: {
            type: String,
            default: 'D-MM-YYYY'
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'date'
        }
    },
    data() {
        return {
            pickerWidth: 0,
            date: this.$options.defaultValue ? new Date(this.$options.defaultValue) : new Date(),
            selectionMode: this.type,
            shortcuts: '',
            currentView: 'date',
            disabledDate: '',
            firstDayOfWeek: 7,
            year: null,
            month: null,
            week: null,
            showWeekNumber: false,
            show: false,
        };
    },
    computed: {
        visibleDate: {
            get() {
                return window.moment(this.date).format(this.dateFormat);
            },
            set(val) {
                const date = window.moment(val).format(this.dateFormat).toDate();
                if (!date) {
                    return;
                }
                if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
                    return;
                }
                this.date = date;
            }
        },
        yearLabel() {
            const year = this.year;
            if (!year) return '';
            if (this.currentView === 'year') {
                const startYear = Math.floor(year / 10) * 10;
                return startYear + ' - ' + (startYear + 9);
            }
            return this.year;
        },
        monthLabel() {
            return window.moment.monthsShort()[this.month];
        },
        dateFormat() {
            if (this.format) {
                return this.format.replace('HH', '').replace(':mm', '').replace(':ss', '').trim();
            }
        }
    },
    watch: {
        value(v) {
            if (!v) return;
            v = window.moment(v, this.format).toDate();
            if (!isNaN(v)) {
                if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(v))) {
                    return;
                }
                this.date = v;
                this.year = v.getFullYear();
                this.month = v.getMonth();
                this.$emit('pick', v, false);
            }
        },
        selectionMode(v) {
            if (v === 'month') {
                if (this.currentView !== 'year' || this.currentView !== 'month') {
                    this.currentView = 'month';
                }
            } else if (v === 'week') {
                this.week = window.moment(this.date).week();
            }
        },
        date(v) {
            this.year = v.getFullYear();
            this.month = v.getMonth();
            if (this.selectionMode === 'week') this.week = window.moment(v).week();
        }
    },
    mounted() {
        if (this.date && !this.year) {
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
        }
        if(this.type !== 'day') this.currentView = this.type;
    },
    methods: {
        handleClear() {
            this.date = this.$options.defaultValue ? new Date(this.$options.defaultValue) : new Date();
            this.$emit('input', this.visibleDate);
            this.$emit('pick');
        },
        resetDate() {
            this.date = new Date(this.date);
        },
        showMonthPicker() {
            this.currentView = 'month';
        },
        showYearPicker() {
            this.currentView = 'year';
        },
        prevMonth() {
            this.month--;
            if (this.month < 0) {
                this.month = 11;
                this.year--;
            }
        },
        nextMonth() {
            this.month++;
            if (this.month > 11) {
                this.month = 0;
                this.year++;
            }
        },
        nextYear() {
            if (this.currentView === 'year') {
                this.$refs.yearTable.nextTenYear();
            } else {
                this.year++;
            }
        },
        prevYear() {
            if (this.currentView === 'year') {
                this.$refs.yearTable.prevTenYear();
            } else {
                this.year--;
            }
        },
        handleMonthPick(month) {
            this.month = month;
            const selectionMode = this.selectionMode;
            if (selectionMode !== 'month') {
                this.date.setMonth(month);
                this.currentView = 'date';
                this.resetDate();
            } else {
                this.date.setMonth(month);
                this.year && this.date.setFullYear(this.year);
                this.resetDate();
                const value = new Date(this.date.getFullYear(), month, 1);
                this.$emit('pick', value);
            }
        },
        handleDatePick(value) {
            if (this.selectionMode === 'day') {
                this.$emit('pick', new Date(value.getTime()));
                this.date.setFullYear(value.getFullYear());
                this.date.setMonth(value.getMonth(), value.getDate());
            } else if (this.selectionMode === 'week') {
                this.week = value.week;
                this.$emit('pick', value.date);
            }
            this.resetDate();
            this.show = false;
            this.$emit('input', this.visibleDate);
        },
        handleYearPick(year, close = true) {
            this.year = year;
            if (!close) return;
            this.date.setFullYear(year);
            if (this.selectionMode === 'year') {
                this.$emit('pick', new Date(year, 0, 1));
            } else {
                this.currentView = 'month';
            }
            this.resetDate();
        }
    }
};
</script>

<style type="text/scss">
    .button.is-text {
        color: #ffffff;
    }
    .date-item {
        font-size: 1rem;
    }
</style>