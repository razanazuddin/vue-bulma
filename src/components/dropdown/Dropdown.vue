<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        value: {
            type: Boolean,
            default: false
        },
        hoverable: {
            type: Boolean,
            default: false
        },
        rightAligned: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        notCloseElements: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            show: false,
            trigger: undefined
        };
    },
    watch: {
        value(v) {
            this.toggle(v);
        }
    },
    mounted() {
        window.addEventListener('click', this.windowClicked);
        if (this.trigger) {
            this.trigger.addEventListener('click', this.toggle);
        }
        if (this.hoverable) {
            this.trigger.addEventListener('mouseenter', this.toggle);
        }
        if (this.value) {
            this.toggle(true);
        }
    },
    beforeDestroy() {
        window.removeEventListener('click', this.windowClicked);
        if (this.trigger) {
            this.trigger.removeEventListener('click', this.toggle);
        }
        if (this.hoverable) {
            this.trigger.removeEventListener('mouseleave', this.toggle);
        }
    },
    methods: {
        toggle(show) {
            if (typeof show === 'boolean') {
                this.show = show;
            } else {
                this.show = !this.show;
            }
            this.$emit('input', this.show);
        },
        windowClicked(event) {
            let target = event.target;
            if (this.show && target) {
                let targetInNotCloseElements = false;
                if (this.notCloseElements) {
                    for (let i = 0, l = this.notCloseElements.length; i < l; i++) {
                        let excludeEl = document.body.querySelector(this.notCloseElements[i]);
                        if (excludeEl && excludeEl.contains(target)) {
                            targetInNotCloseElements = true;
                            break;
                        }
                    }
                }
                let targetInDropdownBody = this.$refs.dropdown.contains(target);
                let targetInTrigger = this.$el.contains(target) && !targetInDropdownBody;
                if (!targetInTrigger && !targetInNotCloseElements) {
                    this.toggle(false);
                }
            }
        }
    },
    render (h) {
        return h(this.tag, {
            'class': {
                dropdown: true,
                'is-active': this.show,
                'is-hoverable': this.hoverable,
                'is-right': this.rightAligned,
                'is-scrollable': this.scrollable
            }
        }, [this.$slots.default,
            h('div', {
                'class': {
                    'dropdown-menu': true
                },
                ref: 'dropdown'
            }, [this.$slots.dropdown])
        ]);
    },
};
</script>

<style type="text/css">
    .dropdown-item.is-active {
        background-color: #3273dc;
        color: #fff;
    }
    .dropdown.is-scrollable .dropdown-menu .dropdown-content {
        height: 200px;
        overflow-y: scroll;
    }
    .dropdown.is-scrollable .dropdown-menu .dropdown-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    .dropdown.is-scrollable .dropdown-menu .dropdown-content::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: #F5F5F5;
    }
    .dropdown.is-scrollable .dropdown-menu .dropdown-content::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(0,0,0,0.1);
    }
</style>