<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Tabs</h2>
            <p class="subtitle">Simple responsive horizontal navigation <b>tabs</b>,  with different styles.</p>
        </div>
        <div class="box">
            <tabs v-model="activeIndex">
                <tab title="Tab #1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales ut diam at mollis. Pellentesque accumsan ex nec est posuere feugiat. Sed pulvinar tempor tortor consequat hendrerit. Nulla vel eros quis nibh tincidunt fermentum. Duis ut porttitor arcu. Vestibulum laoreet arcu ligula, in lacinia massa ornare sit amet. Proin ullamcorper quam vel fringilla tempus. In efficitur id magna a congue. Donec consectetur enim vel nulla porta pulvinar. Curabitur pharetra sit amet metus ac fermentum. In convallis efficitur neque, lacinia finibus justo mollis vitae. Ut commodo ipsum a bibendum pharetra.</p>
                </tab>
                <tab title="Tab #2">
                    <p>Nulla facilisi. Mauris volutpat purus lorem, ut sagittis massa aliquet et. Sed viverra ultrices ipsum sed ultrices. Curabitur non auctor neque, a accumsan eros. Pellentesque hendrerit mauris nec sem iaculis vehicula. Praesent dictum, felis ut tincidunt dignissim, purus neque venenatis purus, sed ornare velit ex eu nulla. Sed maximus sed odio eu sagittis. Aliquam erat volutpat.</p>
                </tab>
                <tab 
                    :title-with-icon="true" 
                    title="Whoop!" 
                    icon-class="fa fa-bell">
                    <p>This tab's title has an icon in it!</p>
                </tab>
            </tabs>
        </div>
        <div class="content">
            <pre>
                <code>
        &lt;tabs&gt;
            &lt;tab title=&quot;Tab #1&quot;&gt;...&lt;/tab&gt;
            &lt;tab title=&quot;Tab #2&quot;&gt;...&lt;/tab&gt;
            &lt;tab :title-with-icon=&quot;true&quot; title=&quot;Whoop!&quot; icon-class=&quot;fa fa-bell&quot;&gt;...&lt;/tab&gt;
        &lt;/tabs&gt;
                </code>
            </pre>
        </div>
        
        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <h4>Tabs options</h4>
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
                        <td>alignment</td>
                        <td>string (<code>is-centered</code>, <code>is-right</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Controls the alignment of the tab component. Default alignment is left.</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>string (<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Controls the size of the tab component.</td>
                    </tr>
                    <tr>
                        <td>is-boxed</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Adds border to tabs.</td>
                    </tr>
                    <tr>
                        <td>is-toggle</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Turns tabs into button group.</td>
                    </tr>
                    <tr>
                        <td>is-fullwidth</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Sets tabs to span across column/space.</td>
                    </tr>
                </tbody>
            </table>
            <h4>Tab options</h4>
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
                        <td>title</td>
                        <td>string</td>
                        <td>Tab Title</td>
                        <td>No</td>
                        <td>Title of the tab.</td>
                    </tr>
                    <tr>
                        <td>title-with-icon</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Controls the display of icon in tab' title.</td>
                    </tr>
                    <tr>
                        <td>icon-class</td>
                        <td>string</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Icon's class. Refer icon library for full list.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Tabs from './../../components/tabs/Tabs';
import Tab from './../../components/tabs/Tab';

export default {
    components: {
        Tabs,
        Tab
    },
    data() {
        return {
            activeIndex: 1
        };
    }
};
</script>