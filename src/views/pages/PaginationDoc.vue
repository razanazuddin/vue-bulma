<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Pagination</h2>
            <p class="subtitle">A responsive, usable, and flexible <b>pagination</b></p>
        </div>
        <div class="box">
            <pagination 
                v-model="currentPage"
                :boundary-links="boundaryLinks"
                :direction-links="directionLinks"
                :total-page="totalSize"
                :size="size"
                :max-size="maxSize"/>
        </div>
        <div class="content">
            <div class="box">
                <div class="field is-grouped">
                    <p class="control">
                        <label class="checkbox">
                            <input 
                                v-model="boundaryLinks" 
                                type="checkbox"> Boundary Links
                        </label>
                    </p>
                    <p class="control">
                        <label class="checkbox">
                            <input 
                                v-model="directionLinks" 
                                type="checkbox"> Direction Links
                        </label>
                    </p>
                </div>
                <div class="columns">
                    <div class="column is-half">
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Current Page:</label>
                            </div>
                            <div class="field-body">
                                <div class="field has-addons">
                                    <p class="control is-expanded">
                                        <input 
                                            :max="totalSize" 
                                            v-model.number="currentPage" 
                                            class="input" 
                                            step="1" 
                                            min="1" 
                                            type="number" >
                                    </p>
                                    <p class="control">
                                        <a 
                                            class="button is-static" 
                                            v-text="'/ ' + totalSize"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Total Page:</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control">
                                        <input 
                                            v-model.number="totalSize" 
                                            class="input" 
                                            step="1" 
                                            min="0" 
                                            type="number" >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Size:</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control">
                                        <span class="select is-fullwidth">
                                            <select v-model="size">
                                                <option value="is-small">is-small</option>
                                                <option value="is-medium">is-medium</option>
                                                <option value="is-large">is-large</option>
                                            </select>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Max Size:</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control">
                                        <input 
                                            v-model.number="maxSize" 
                                            class="input" 
                                            step="1" 
                                            min="0" 
                                            type="number" >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <pre>
                <code>
        &lt;pagination :boundary-links=&quot;true&quot; :direction-links=&quot;true&quot; :total-page=&quot;18&quot; :size=&quot;is-medium&quot; :max-size=&quot;5&quot;&gt;&lt;/pagination&gt;
                </code>
            </pre>
        </div>

        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <p>Options can be passed via attributes of <code>pagination</code> container.</p>
            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>v-model</td>
                        <td>number</td>
                        <td>-</td>
                        <td>Yes</td>
                        <td>The current page.</td>
                    </tr>
                    <tr>
                        <td>boundary-links</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Controls the display of first &amp; last buttons.</td>
                    </tr>
                    <tr>
                        <td>direction-links</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Controls the display of previous &amp; next buttons.</td>
                    </tr>
                    <tr>
                        <td>total-page</td>
                        <td>number</td>
                        <td>-</td>
                        <td>Yes</td>
                        <td>Total number of pages.</td>
                    </tr>
                    <tr>
                        <td>max-size</td>
                        <td>number</td>
                        <td>5</td>
                        <td>No</td>
                        <td>Maximum number of pages per chunk.</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>string (<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>)</td>
                        <td><code>is-medium</code></td>
                        <td>No</td>
                        <td>Pagination size.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Pagination from './../../components/pagination/Pagination';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            totalSize: 18,
            maxSize: 5,
            currentPage: 1,
            boundaryLinks: true,
            directionLinks: true,
            size: 'is-medium'
        };
    }
};
</script>