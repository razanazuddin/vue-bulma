<template>
    <table 
        class="table is-fullwidth" 
        @click="handleMonthTableClick">
        <tbody>
            <tr>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(0)" 
                    type="button" 
                    class="date-item" 
                    data-month="0">{{ getMonthName(0) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(1)" 
                    type="button" 
                    class="date-item" 
                    data-month="1">{{ getMonthName(1) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(2)" 
                    type="button" 
                    class="date-item" 
                    data-month="2">{{ getMonthName(2) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(3)" 
                    type="button" 
                    class="date-item" 
                    data-month="3">{{ getMonthName(3) }}</button></td>
            </tr>
            <tr>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(4)" 
                    type="button" 
                    class="date-item" 
                    data-month="4">{{ getMonthName(4) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(5)" 
                    type="button" 
                    class="date-item" 
                    data-month="5">{{ getMonthName(5) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(6)" 
                    type="button" 
                    class="date-item" 
                    data-month="6">{{ getMonthName(6) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(7)" 
                    type="button" 
                    class="date-item" 
                    data-month="7">{{ getMonthName(7) }}</button></td>
            </tr>
            <tr>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(8)" 
                    type="button" 
                    class="date-item" 
                    data-month="8">{{ getMonthName(8) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(9)" 
                    type="button" 
                    class="date-item" 
                    data-month="9">{{ getMonthName(9) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(10)" 
                    type="button" 
                    class="date-item" 
                    data-month="10">{{ getMonthName(10) }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(11)" 
                    type="button" 
                    class="date-item" 
                    data-month="11">{{ getMonthName(11) }}</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        disabledDate: {
            type: Boolean,
            default: false
        },
        date: {
            type: Date,
            default: new Date()
        },
        month: {
            type: Number,
            default: () => { return window.moment().month(); }
        }
    },
    methods: {
        getMonthName(index) {
            return window.moment.monthsShort()[index];
        },
        getCellStyle(month) {
            const style = {};

            var year = this.date.getFullYear();
            var date = new Date(0);
            date.setFullYear(year);
            date.setMonth(month);
            date.setHours(0);
            var nextMonth = new Date(date);
            nextMonth.setMonth(month + 1);

            var flag = false;
            if (typeof this.disabledDate === 'function') {

                while (date < nextMonth) {
                    if (this.disabledDate(date)) {
                        date = new Date(date.getTime() + 8.64e7);
                        flag = true;
                    } else {
                        flag = false;
                        break;
                    }
                }
            }

            style.disabled = flag;
            style['is-active'] = this.month === month;

            return style;
        },

        handleMonthTableClick(event) {
            const target = event.target;
            if (target.tagName !== 'BUTTON') return;

            this.$emit('pick', target.dataset.month);
        }
    }
};
</script>
