<template>
    <section>
        <div 
            :class="[ 'tabs', alignment, size, { 'is-boxed': isBoxed }, { 'is-toggle': isToggle }, { 'is-fullwidth': isFullwidth } ]" 
            role="tablist">
            <ul>
                <li 
                    v-for="(tab, index) in tabs" 
                    :key="index + '-tab'"
                    :class="{ 'is-active': tab.active }">
                    <a @click="select(tabs.indexOf(tab))">
                        <span 
                            v-if="tab.titleWithIcon" 
                            class="icon is-small"><i :class="tab.iconClass"/></span>
                        <span 
                            v-if="tab.titleWithIcon" 
                            v-text="tab.title"/>
                        <span 
                            v-else 
                            v-text="tab.title"/>
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <slot/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        },
        alignment: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        isBoxed: {
            type: Boolean,
            default: false
        },
        isToggle: {
            type: Boolean,
            default: false
        },
        isFullwidth: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            tabs: [],
            activeIndex: 0,
        };
    },
    watch: {
        value (v) {
            this.activeIndex = v;
            this.$selectCurrent();
        }
    },
    mounted () {
        if (typeof this.value !== 'undefined') {
            this.activeIndex = this.value;
        }
        if (this.tabs.length) {
            this.$selectCurrent();
        }
    },
    methods: {
        $selectCurrent () {
            this.tabs.forEach(tab => {
                tab.active = false;
            });
            let tab = this.tabs[this.activeIndex];
            tab.active = true;
            this.$emit('change', this.activeIndex);
        },
        select (index) {
            this.activeIndex = index;
            this.$selectCurrent();
        }
    }
};
</script>
