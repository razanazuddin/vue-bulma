<template>
    <nav 
        :class="size" 
        class="pagination">
        <ul class="pagination-list">
            <li 
                v-if="boundaryLinks" 
                @click="onPageChange(1)">
                <a 
                    :disabled="value<=1" 
                    class="pagination-link">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li 
                v-if="directionLinks" 
                @click="onPageChange(value-1)">
                <a 
                    :disabled="value<=1" 
                    class="pagination-link">
                    <span aria-hidden="true">&lsaquo;</span>
                </a>
            </li>
            <li 
                v-if="sliceStart>0" 
                @click="toPage(1)">
                <a class="pagination-ellipsis">&hellip;</a>
            </li>
            <li 
                v-for="item in sliceArray" 
                :key="item" 
                class="pagination-page" 
                @click="onPageChange(item+1)">
                <a 
                    :class="{'is-current': value==item+1}" 
                    class="pagination-link">{{ item + 1 }}</a>
            </li>
            <li 
                v-if="sliceStart<totalPage-maxSize" 
                @click="toPage(0)">
                <a class="pagination-ellipsis">&hellip;</a>
            </li>
            <li 
                v-if="directionLinks" 
                @click="onPageChange(value+1)">
                <a 
                    :disabled="value>=totalPage" 
                    class="pagination-link">
                    <span aria-hidden="true">&rsaquo;</span>
                </a>
            </li>
            <li 
                v-if="boundaryLinks" 
                @click="onPageChange(totalPage)">
                <a 
                    :disabled="value>=totalPage" 
                    class="pagination-link">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 1
        },
        boundaryLinks: {
            type: Boolean,
            'default': false
        },
        directionLinks: {
            type: Boolean,
            'default': true
        },
        size: {
            type: String,
            'default': ''
        },
        totalPage: {
            type: Number,
            default: 1
        },
        maxSize: {
            type: Number,
            'default': 5
        }
    },
    data () {
        return {
            sliceStart: 0
        };
    },
    computed: {
        pageArray () {
            let newArray = [];
            for (let i = 0; i < this.totalPage; i++) {
                newArray.push(i);
            }
            return newArray;
        },
        sliceArray () {
            let afterSlice = this.pageArray.slice();
            return afterSlice.slice(this.sliceStart, this.sliceStart + this.maxSize);
        }
    },
    watch: {
        value (value) {
            if (value > this.sliceStart + this.maxSize) {
                if (value > this.totalPage - this.maxSize) {
                    this.sliceStart = this.totalPage - this.maxSize;
                } else {
                    this.sliceStart = value - 1;
                }
            } else if (value < this.sliceStart + 1) {
                if (value - this.maxSize > 0) {
                    this.sliceStart = value - this.maxSize;
                } else {
                    this.sliceStart = 0;
                }
            }
        }
    },
    methods: {
        onPageChange (page) {
            if (page > 0 && page <= this.totalPage) {
                this.$emit('input', page);
                this.$emit('change', page);
            }
        },
        toPage (pre) {
            let start = pre ? this.sliceStart - this.maxSize : this.sliceStart + this.maxSize;
            if (start < 0) {
                this.sliceStart = 0;
            } else if (start > this.totalPage - this.maxSize) {
                this.sliceStart = this.totalPage - this.maxSize;
            } else {
                this.sliceStart = start;
            }
        }
    }
};
</script>
