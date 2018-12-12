<template>
    <div 
        v-show="active" 
        role="tabpanel">
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Tab Title'
        },
        titleWithIcon: {
            type: Boolean,
            default: false
        },
        iconClass: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            active: true
        };
    },
    created () {
        let self = this;
        try {
            self.$parent.tabs.push(self);
        } catch (e) {
            throw new Error('Tab parent must be Tabs.');
        }
    }
};
</script>
