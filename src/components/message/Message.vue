<template>
    <article 
        v-show="active" 
        :class="[ 'message', stateClass ]">
        <div 
            v-if="title !== ''" 
            class="message-header">
            <p v-text="title"/>
            <button 
                class="delete" 
                @click="$emit('close')"/>
        </div>
        <div class="message-body">
            <slot/>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
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