<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Notification</h2>
            <p class="subtitle">Bold <b>notification</b> blocks, to alert your users of something.</p>
        </div>
        <div class="content">
            <notification 
                :active="notification1" 
                state-class="is-primary" 
                @close="notification1 = false">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </notification>
            <pre>
                <code>
            &#x3C;notification state-class=&#x22;is-primary&#x22; :active=&#x22;notification1&#x22; @close=&#x22;notification1 = false&#x22;&#x3E;
                ...
            &#x3C;/notification&#x3E;
                </code>
            </pre>
        </div>
        

        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <h4>Navs options</h4>
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
                        <td>state-class</td>
                        <td>string (<code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Color of notification</td>
                    </tr>
                    <tr>
                        <td>:active</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>State of notification is in. Either visible (<code>true</code>) or not (<code>false</code>)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Notification from './../../components/notification/Notification';

export default {
    components: {
        Notification
    },
    data() {
        return {
            notification1: true
        };
    }
};
</script>