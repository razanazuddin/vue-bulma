<template>
    <dropdown 
        v-model="show" 
        :not-close-elements="['.time-select']" 
        :scrollable="true" 
        class="time-select">
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
            <div class="dropdown-content">
                <p 
                    v-for="(item, index) in items"
                    :key="index"
                    :class="{ 'is-active': item.selected }" 
                    class="dropdown-item time-item" 
                    @click="handlePick(index)">{{ item.value }}</p>
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
            default: '00:00'
        },
        end: {
            type: String,
            default: '23:59'
        },
        step: {
            type: Number,
            default: 30
        },
        format: {
            type: String,
            default: 'HH:mm'
        }
    },
    data() {
        return {
            show: false,
            items: []
        };
    },
    watch: {
        value(v) {
            this.$emit('input', v, false);
        },
        show(v) {
            if(!v) {
                let activeElement = this.$el.querySelector('.is-active');
                if(activeElement) {
                    activeElement.parentNode.scrollTop = activeElement.offsetTop - 5;
                }
            }
        }
    },
    mounted() {
        const start = window.moment(this.start, this.format);
        const end = window.moment(this.end, this.format);
        const result = [];

        let current = start;
        for (let i = 0; i < end.diff(start, 'm')/this.step; i++) {
            result.push({
                value: current.format(this.format),
                selected: false
            });
            current = window.moment(current).add(this.step, 'm');
        }

        this.items = result;
    },
    methods: {
        handleClear() {
            this.items.forEach(function(element) {
                element.selected = false;
            });
            this.$emit('input', '', false);
        },
        handlePick(index) {
            this.items.forEach(function(element) {
                element.selected = false;
            });
            this.items[index].selected = true;
            this.$emit('input', this.items[index].value, false);
        }
    }
};
</script>