<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Message</h2>
            <p class="subtitle">Colored <b>message</b> blocks, to emphasize part of your page.</p>
        </div>
        <h3 class="title is-3">Message</h3>
        <message 
            :active="message1" 
            title="Hello World!" 
            state-class="is-info" 
            @close="message1 = false">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </p>
        </message>
        <div class="content">
            <pre>
                <code>
        &lt;message title=&quot;Hello World!&quot; state-class=&quot;is-info&quot; :active=&quot;message1&quot; @close=&quot;message1 = false&quot;&gt;
            ...
        &lt;/message&gt;
                </code>
            </pre>
        </div>
        <h3 class="title is-3">No-header message</h3>
        <message :active="true">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </p>
        </message>
        <div class="content">
            <pre>
                <code>
        &lt;message :active=&quot;true&quot;&gt;
            ...
        &lt;/message&gt;
                </code>
            </pre>
        </div>
        

        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <p>Options can be passed via attributes of <code>message</code> container.</p>
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
                        <td>-</td>
                        <td>No</td>
                        <td>The title of message.</td>
                    </tr>
                    <tr>
                        <td>state-class</td>
                        <td>string (<code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>)</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Sets the color of message.</td>
                    </tr>
                    <tr>
                        <td>active</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Yes</td>
                        <td>Show/hide state of message.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Message from './../../components/message/Message';
export default {
    components: {
        Message
    },
    data() {
        return {
            message1: true
        };
    }
};
</script>