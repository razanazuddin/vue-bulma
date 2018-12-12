<template>
    <div 
        :class="{ 'is-active': isOpen }" 
        class="modal">
        <div 
            class="modal-background" 
            @click="$emit('close')"/>
        
        <div 
            v-show="!isCard" 
            class="modal-content">
            <slot/>
        </div>
        <button 
            v-show="!isCard" 
            type="button" 
            class="modal-close" 
            @click="$emit('close')"/>

        <div 
            v-show="isCard" 
            class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><slot name="title"/></p>
                <button 
                    type="button" 
                    class="delete" 
                    @click="$emit('close')"/>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    <slot name="content"/>
                </div>
            </section>
            <footer class="modal-card-foot">
                <slot name="action"/>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        isCard: {
            type: Boolean,
            default: false
        }
    }
};
</script>