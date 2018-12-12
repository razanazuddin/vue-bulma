<template>
    <div 
        v-show="active" 
        :class="[ 'notification', stateClass ]">
        <button 
            class="delete" 
            @click="$emit('close')"/>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        stateClass: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        }
    }
};
</script>