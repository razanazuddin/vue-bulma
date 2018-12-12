<template>
    <dropdown 
        v-model="show" 
        :not-close-elements="['.daterange-picker']" 
        class="daterange-picker">
        <div class="dropdown-trigger">
            <div class="field has-addons">
                <div class="control">
                    <button 
                        v-if="show && value" 
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
            <div class="columns is-gapless">
                <div class="column calendar">
                    <div class="calendar-nav">
                        <div class="calendar-nav-left">
                            <button 
                                type="button" 
                                class="button is-text" 
                                @click="prevYear">
                                <i class="mdi mdi-chevron-double-left"/>
                            </button>
                            <button 
                                type="button" 
                                class="button is-text" 
                                @click="prevMonth">
                                <i class="mdi mdi-chevron-left"/>
                            </button>
                        </div>
                        <div class="calendar-nav-middle is-size-5">{{ leftLabel }}</div>
                        <div class="calendar-nav-right"/>
                    </div>
                    <date-table
                        :date="date"
                        :year="leftYear"
                        :month="leftMonth"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :range-state="rangeState"
                        :disabled-date="disabledDate"
                        :first-day-of-week="firstDayOfWeek"
                        selection-mode="range"
                        @changerange="handleChangeRange"
                        @pick="handleRangePick"/>
                </div>
                <div class="column calendar">
                    <div class="calendar-nav">
                        <div class="calendar-nav-left"/>
                        <div class="calendar-nav-middle is-size-5">{{ rightLabel }}</div>
                        <div class="calendar-nav-right">
                            <button 
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
                        :date="rightDate"
                        :year="rightYear"
                        :month="rightMonth"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :range-state="rangeState"
                        :disabled-date="disabledDate"
                        :first-day-of-week="firstDayOfWeek"
                        selection-mode="range"
                        @changerange="handleChangeRange"
                        @pick="handleRangePick"/>
                </div>
            </div>
        </template>
    </dropdown>
</template>

<script>
import Dropdown from '../dropdown/Dropdown';
import DateTable from './DateTable';

const calcDefaultValue = defaultValue => {
    if (Array.isArray(defaultValue)) {
        return new Date(defaultValue[0]);
    } else {
        return new Date(defaultValue);
    }
};

export default {
    components: {
        DateTable,
        Dropdown
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
            default: 'day'
        }
    },
    data() {
        return {
            minPickerWidth: 0,
            maxPickerWidth: 0,
            date: this.$options.defaultValue ? calcDefaultValue(this.$options.defaultValue) : new Date(),
            minDate: '',
            maxDate: '',
            rangeState: {
                endDate: null,
                selecting: false,
                row: null,
                column: null
            },
            disabledDate: '',
            firstDayOfWeek: 7,
            width: 0,
            show: false,
        };
    },
    computed: {
        leftLabel() {
            return window.moment(this.date).format('YYYY MMM');
        },
        rightLabel() {
            return window.moment(this.rightDate).format('YYYY MMM');
        },
        leftYear() {
            return this.date.getFullYear();
        },
        leftMonth() {
            return this.date.getMonth();
        },
        rightYear() {
            return this.rightDate.getFullYear();
        },
        rightMonth() {
            return this.rightDate.getMonth();
        },
        minVisibleDate() {
            return this.minDate ? window.moment(this.minDate).format(this.format) : '';
        },
        maxVisibleDate() {
            return (this.maxDate || this.minDate) ? window.moment(this.maxDate || this.minDate).format(this.format) : '';
        },
        rightDate() {
            const newDate = new Date(this.date);
            const month = newDate.getMonth();
            newDate.setDate(1);
            if (month === 11) {
                newDate.setFullYear(newDate.getFullYear() + 1);
                newDate.setMonth(0);
            } else {
                newDate.setMonth(month + 1);
            }
            return newDate;
        }
    },
    methods: {
        handleClear() {
            this.minDate = '';
            this.maxDate = '';
            this.date = this.$options.defaultValue ? calcDefaultValue(this.$options.defaultValue) : new Date();
            this.handleConfirm(false);
            this.$emit('input', '');
        },
        handleChangeRange(val) {
            this.minDate = val.minDate;
            this.maxDate = val.maxDate;
            this.rangeState = val.rangeState;
        },
        handleRangePick(val) {
            if (this.maxDate === val.maxDate && this.minDate === val.minDate) {
                return;
            }
            this.maxDate = val.maxDate;
            this.minDate = val.minDate;
            this.handleConfirm();
        },
        prevMonth() {
            this.date = window.moment(this.date).subtract(1, 'months').toDate();
        },
        nextMonth() {
            this.date = window.moment(this.date).add(1, 'months').toDate();
        },
        nextYear() {
            const date = this.date;
            date.setFullYear(date.getFullYear() + 1);
            this.resetDate();
        },
        prevYear() {
            const date = this.date;
            date.setFullYear(date.getFullYear() - 1);
            this.resetDate();
        },
        handleConfirm(show = false) {
            if(this.minVisibleDate !== this.maxVisibleDate) {
                this.$emit('input', [this.minVisibleDate, this.maxVisibleDate].join(' - '));
            }
            this.$emit('pick', [this.minDate, this.maxDate], show);
        },
        resetDate() {
            this.date = new Date(this.date);
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