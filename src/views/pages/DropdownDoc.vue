<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Dropdown</h2>
            <p class="subtitle">An interactive <b>dropdown</b> menu for discoverable content.</p>
        </div>
        <div class="box">
            <dropdown 
                v-model="open1" 
                :right-aligned="rightAligned" 
                :hoverable="hoverable">
                <div class="dropdown-trigger">
                    <button 
                        class="button" 
                        type="button" 
                        @click="open1 = !open1">
                        <span>Dropdown</span>
                        <span class="icon is-small">
                            <i 
                                class="fa fa-angle-down" 
                                aria-hidden="true"/>
                        </span>
                    </button>
                </div>
                <template slot="dropdown">
                    <div class="dropdown-content">
                        <a 
                            href="#" 
                            class="dropdown-item">Action</a>
                        <a 
                            href="#" 
                            class="dropdown-item">Another action</a>
                        <a 
                            href="#" 
                            class="dropdown-item">Something else here</a>
                        <hr class="dropdown-divider">
                        <a 
                            href="#" 
                            class="dropdown-item">Separated link</a>
                    </div>
                </template>
            </dropdown>
            <dropdown 
                v-model="open2" 
                :right-aligned="rightAligned" 
                :hoverable="hoverable">
                <div class="dropdown-trigger">
                    <button 
                        class="button is-primary" 
                        type="button" 
                        @click="open2 = !open2">
                        <span>Dropdown with content</span>
                        <span class="icon is-small">
                            <i 
                                class="fa fa-angle-down" 
                                aria-hidden="true"/>
                        </span>
                    </button>
                </div>
                <template slot="dropdown">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </div>
                        <hr class="dropdown-divider">
                        <div class="dropdown-item">
                            <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                        </div>
                        <hr class="dropdown-divider">
                        <a 
                            href="#" 
                            class="dropdown-item">
                            This is a link
                        </a>
                    </div>
                </template>
            </dropdown>
            <dropdown 
                v-model="open3" 
                :right-aligned="rightAligned" 
                :hoverable="hoverable" 
                :not-close-elements="['.no-close-dropdown']" 
                class="no-close-dropdown">
                <div class="dropdown-trigger">
                    <button 
                        class="button is-info" 
                        type="button" 
                        @click="open3 = !open3">
                        <span>Dropdown with unclosable content</span>
                        <span class="icon is-small">
                            <i 
                                class="fa fa-angle-down" 
                                aria-hidden="true"/>
                        </span>
                    </button>
                </div>
                <template slot="dropdown">
                    <div class="dropdown-content">
                        <a 
                            :class="{ 'is-active': val1 }" 
                            class="dropdown-item" 
                            @click="val1 = !val1">
                            It will not close on me. Try click elsewhere to close this dropdown.
                        </a>
                    </div>
                </template>
            </dropdown>
        </div>
        <div class="content">
            <div class="box">
                <div class="field is-grouped">
                    <p class="control">
                        <label class="checkbox">
                            <input 
                                v-model="rightAligned" 
                                type="checkbox"> Right aligned
                        </label>
                    </p>
                    <p class="control">
                        <label class="checkbox">
                            <input 
                                v-model="hoverable" 
                                type="checkbox"> Hoverable
                        </label>
                    </p>
                </div>
            </div>
            <pre>
                <code>
        &lt;dropdown v-model=&quot;open1&quot; :right-aligned=&quot;...&quot; :hoverable=&quot;...&quot;&gt;
            &lt;div class=&quot;dropdown-trigger&quot;&gt;
                &lt;button @click=&quot;open1 = !open1&quot; class=&quot;button&quot; type=&quot;button&quot;&gt;
                    &lt;span&gt;Dropdown&lt;/span&gt;
                    &lt;span class=&quot;icon is-small&quot;&gt;
                        &lt;i class=&quot;fa fa-angle-down&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
                    &lt;/span&gt;
                &lt;/button&gt;
            &lt;/div&gt;
            &lt;template slot=&quot;dropdown&quot;&gt;
                &lt;div class=&quot;dropdown-content&quot;&gt;
                    &lt;a href=&quot;#&quot; class=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
                    ...
                    &lt;hr class=&quot;dropdown-divider&quot;&gt;
                    &lt;div class=&quot;dropdown-item&quot;&gt;
                        &lt;p&gt;You simply need to use a &lt;div&gt; instead.&lt;/p&gt;
                    &lt;/div&gt;
                    ...
                &lt;/div&gt;
            &lt;/template&gt;
        &lt;/dropdown&gt;
                </code>
            </pre>
        </div>

        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <p>Options can be passed via attributes of <code>dropdown</code> container.</p>
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
                        <td>0</td>
                        <td>No</td>
                        <td>Sets selected tab.</td>
                    </tr>
                    <tr>
                        <td>right-aligned</td>
                        <td>string (<code>is-centered</code>, <code>is-right</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Controls the alignment of the tab component. Default alignment is left.</td>
                    </tr>
                    <tr>
                        <td>hoverable</td>
                        <td>string (<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Controls the size of the tab component.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Dropdown from './../../components/dropdown/Dropdown';
export default {
    components: {
        Dropdown
    },
    data() {
        return {
            rightAligned: false,
            hoverable: false,
            open1: false,
            open2: false,
            open3: false,
            val1: false
        };
    }
};
</script>