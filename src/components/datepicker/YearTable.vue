<template>
    <table 
        class="table is-fullwidth" 
        @click="handleYearTableClick">
        <tbody>
            <tr>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 0)" 
                    :data-year="startYear + 0" 
                    type="button" 
                    class="date-item">{{ startYear + 0 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 1)" 
                    :data-year="startYear + 1" 
                    type="button" 
                    class="date-item">{{ startYear + 1 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 2)" 
                    :data-year="startYear + 2" 
                    type="button" 
                    class="date-item">{{ startYear + 2 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 3)" 
                    :data-year="startYear + 3" 
                    type="button" 
                    class="date-item">{{ startYear + 3 }}</button></td>
            </tr>
            <tr>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 4)" 
                    :data-year="startYear + 4" 
                    type="button" 
                    class="date-item">{{ startYear + 4 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 5)" 
                    :data-year="startYear + 5" 
                    type="button" 
                    class="date-item">{{ startYear + 5 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 6)" 
                    :data-year="startYear + 6" 
                    type="button" 
                    class="date-item">{{ startYear + 6 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 7)" 
                    :data-year="startYear + 7" 
                    type="button" 
                    class="date-item">{{ startYear + 7 }}</button></td>
            </tr>
            <tr>
                <td/>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 8)" 
                    :data-year="startYear + 8" 
                    type="button" 
                    class="date-item">{{ startYear + 8 }}</button></td>
                <td class="has-text-centered calendar-date"><button 
                    :class="getCellStyle(startYear + 9)" 
                    :data-year="startYear + 9" 
                    type="button" 
                    class="date-item">{{ startYear + 9 }}</button></td>
                <td/>
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
        year: {
            type: Number,
            default: () => { return window.moment().year(); }
        }
    },

    computed: {
        startYear() {
            return Math.floor(this.year / 10) * 10;
        }
    },

    methods: {
        getCellStyle(year) {
            const style = {};

            var date = new Date(0);
            date.setFullYear(year);
            date.setHours(0);
            var nextYear = new Date(date);
            nextYear.setFullYear(year + 1);

            var flag = false;
            if (typeof this.disabledDate === 'function') {

                while (date < nextYear) {
                    if (this.disabledDate(date)) {
                        date = new Date(date.getTime() + 8.64e7);
                    } else {
                        break;
                    }
                }
                if ((date - nextYear) === 0) flag = true;

            }

            style.disabled = flag;
            style['is-active'] = Number(this.year) === year;

            return style;
        },

        nextTenYear() {
            this.$emit('pick', Number(this.year) + 10, false);
        },

        prevTenYear() {
            this.$emit('pick', Number(this.year) - 10, false);
        },

        handleYearTableClick(event) {
            const target = event.target;
            if (target.tagName === 'BUTTON') {
                const year = target.textContent || target.innerText;
                this.$emit('pick', Number(year));
            }
        }
    }
};
</script>
