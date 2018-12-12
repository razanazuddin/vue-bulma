<template>
    <dropdown 
        v-model="show" 
        :not-close-elements="['.time-picker']" 
        :scrollable="true" 
        class="time-picker">
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
                            <i class="mdi mdi-clock-outline"/>
                        </span>
                    </button>
                </div>
                <div class="control">
                    <input 
                        :name="name" 
                        v-model="value" 
                        type="hidden" >
                    <div 
                        class="input" 
                        @click="show = true">
                        <p><span>{{ HH }}</span> : <span>{{ mm }}</span> : <span>{{ ss }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <template slot="dropdown">
            <div class="columns is-gapless">
                <div class="column">
                    <div class="dropdown-content">
                        <p 
                            v-for="(item, index) in hours" 
                            :key="index + '-hour'"
                            :class="[{ 'has-text-grey-lighter': item.disabled }, { 'is-active': item.selected }]" 
                            class="dropdown-item time-item" 
                            @click="handlePickHours(index)">{{ item.value }}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="dropdown-content">
                        <p 
                            v-for="(item, index) in minutes" 
                            :key="index + '-minutes'"
                            :class="[{ 'has-text-grey-lighter': item.disabled }, { 'is-active': item.selected }]" 
                            class="dropdown-item time-item" 
                            @click="handlePickMinutes(index)">{{ item.value }}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="dropdown-content">
                        <p 
                            v-for="(item, index) in seconds"
                            :key="index + '-seconds'"
                            :class="[{ 'has-text-grey-lighter': item.disabled }, { 'is-active': item.selected }]" 
                            class="dropdown-item time-item" 
                            @click="handlePickSeconds(index)">{{ item.value }}</p>
                    </div>
                </div>
            </div>
        </template>
    </dropdown>
</template>

<script>
import Dropdown from '../dropdown/Dropdown';
export default {
    components: {
        Dropdown
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        start: {
            type: String,
            default: '00:00:00'
        }
    },
    data() {
        return {
            show: false,
            HH: 'HH',
            mm: 'mm',
            ss: 'ss', 
        };
    },
    computed: {
        hours() {
            const disableHour = window.moment(this.start, 'HH:mm:ss').format('H');
            let result = [];
            for (let i = 0; i < 24; i++) {
                result.push({
                    value: window.moment(i, 'HH').format('HH'),
                    disabled: i < disableHour,
                    selected: false
                });
            }
            return result;
        },
        minutes() {
            const disableMinutes = window.moment(this.start, 'HH:mm:ss').format('m');
            let result = [];
            for (let i = 0; i < 59; i++) {
                result.push({
                    value: window.moment(i, 'mm').format('mm'),
                    disabled: i < disableMinutes,
                    selected: false
                });
            }
            return result;
        },
        seconds() {
            const disableSeconds = window.moment(this.start, 'HH:mm:ss').format('s');
            let result = [];
            for (let i = 0; i < 59; i++) {
                result.push({
                    value: window.moment(i, 'ss').format('ss'),
                    disabled: i < disableSeconds,
                    selected: false
                });
            }
            return result;
        }
    },
    watch: {
        value(v) {
            this.$emit('input', v, false);
        },
        show(v) {
            if(!v) {
                let activeElements = this.$el.querySelectorAll('.is-active');
                if(activeElements) {
                    activeElements.forEach(element => {
                        element.parentNode.scrollTop = element.offsetTop - 5;
                    });
                }
            }
        }
    },
    methods: {
        handleClear() {
            this.hours.forEach(function(element) {
                element.selected = false;
            });
            this.HH = 'HH';
            this.minutes.forEach(function(element) {
                element.selected = false;
            });
            this.mm = 'mm';
            this.seconds.forEach(function(element) {
                element.selected = false;
            });
            this.ss = 'ss';
            this.$emit('input','', false);
        },
        handlePickHours(index) {
            this.hours.forEach(function(element) {
                element.selected = false;
            });
            this.hours[index].selected = true;
            this.HH = this.hours[index].value;
            this.$emit('input', `${this.HH} : ${this.mm} : ${this.ss}`, false);
        },
        handlePickMinutes(index) {
            this.minutes.forEach(function(element) {
                element.selected = false;
            });
            this.minutes[index].selected = true;
            this.mm = this.minutes[index].value;
            this.$emit('input', `${this.HH} : ${this.mm} : ${this.ss}`, false);
        },
        handlePickSeconds(index) {
            this.seconds.forEach(function(element) {
                element.selected = false;
            });
            this.seconds[index].selected = true;
            this.ss = this.seconds[index].value;
            this.$emit('input', `${this.HH} : ${this.mm} : ${this.ss}`, false);
        }
    }
};
</script>