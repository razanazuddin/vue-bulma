<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Time Picker</h2>
            <p class="subtitle"><b>Time picker</b> ftime input.</p>
        </div>
        <h3 class="title is-3">Fixed Timepicker</h3>
        <div class="box">
            <div class="field">
                <div class="control">
                    <timeselect 
                        v-model="fixedtime" 
                        :step="15" 
                        placeholder="Pick a time" 
                        start="00:00" 
                        end="23:59" 
                        format="hh.mm A"/>
                </div>
            </div>
        </div>
        <message 
            :active="fixedtime !== ''" 
            state-class="is-info">You have selected this time: <b id="selected_time">{{ fixedtime }}</b></message>
        <div class="content">
            <pre>
                <code>
        &lt;timeselect v-model=&quot;fixedtime&quot; placeholder=&quot;Pick a time&quot; start=&quot;00:00&quot; end=&quot;23:59&quot; :step=&quot;15&quot; format=&quot;hh.mm A&quot;&gt;&lt;/timeselect&gt;
                </code>
            </pre>
        </div>
        <h3 class="title is-3">Arbitrary Timepicker</h3>
        <div class="box">
            <div class="field">
                <div class="control">
                    <timepicker 
                        v-model="arbitrarytime" 
                        :step="15" 
                        placeholder="Pick a time" 
                        start="00:00" 
                        end="23:59"/>
                </div>
            </div>
        </div>
        <message 
            :active="arbitrarytime !== ''" 
            state-class="is-info">You have selected this time: <b id="selected_time">{{ arbitrarytime }}</b></message>
        <div class="content">
            <pre>
                <code>
        &lt;timepicker v-model=&quot;arbitrarytime&quot; placeholder=&quot;Pick a time&quot; start=&quot;00:00&quot; end=&quot;23:59&quot; :step=&quot;15&quot;&gt;&lt;/timepicker&gt;
                </code>
            </pre>
        </div>
        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <h4>Fixed Timepicker options</h4>
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
                        <td>string</td>
                        <td>-</td>
                        <td>Yes</td>
                        <td>Selected time.</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Assign name to input form.</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>-</td>
                        <td>No</td>
                        <td>Sets placeholder to input form.</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>string (refer <b>Time String+Format</b> table)</td>
                        <td>HH:mm</td>
                        <td>No</td>
                        <td>Display format of timepicker.</td>
                    </tr>
                    <tr>
                        <td>start</td>
                        <td>string</td>
                        <td>00:00</td>
                        <td>No</td>
                        <td>Start time.</td>
                    </tr>
                    <tr>
                        <td>end</td>
                        <td>string</td>
                        <td>23:59</td>
                        <td>No</td>
                        <td>End time.</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td>number</td>
                        <td>30</td>
                        <td>No</td>
                        <td>Step in minutes.</td>
                    </tr>
                </tbody>
            </table>
            <h4>Time String+Format</h4>
            <p>Hour, minute, second, and millisecond tokens</p>
            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>Input</th>
                        <th>Example</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>H</code> <code>HH</code></td>
                        <td><code>0..23</code></td>
                        <td>Hours (24 hour time)</td>
                    </tr>
                    <tr>
                        <td><code>h</code> <code>hh</code></td>
                        <td><code>0..12</code></td>
                        <td>Hours (12 hour time used with <code>a A</code>)</td>
                    </tr>
                    <tr>
                        <td><code>k</code> <code>kk</code></td>
                        <td><code>1..24</code></td>
                        <td>Hours (24 hour time from 1 to 24)</td>
                    </tr>
                    <tr>
                        <td><code>a</code> <code>A</code></td>
                        <td><code>am pm</code> <code>AM PM</code></td>
                        <td>Post ante meridiem (Not the one character <code>a p</code> are also considered valid)</td>
                    </tr>
                    <tr>
                        <td><code>m</code> <code>mm</code></td>
                        <td><code>0..59</code></td>
                        <td>Minutes</td>
                    </tr>
                    <tr>
                        <td><code>s</code> <code>ss</code></td>
                        <td><code>0..59</code></td>
                        <td>Seconds</td>
                    </tr>
                    <tr>
                        <td><code>S</code> <code>SS</code> <code>SSS</code></td>
                        <td><code>0..999</code></td>
                        <td>Fractional seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Timeselect from './../../components/timepicker/Timeselect';
import Timepicker from './../../components/timepicker/Timepicker';
import Message from './../../components/message/Message';
export default {
    components: {
        Timeselect,
        Timepicker,
        Message
    },
    data() {
        return {
            fixedtime: '',
            arbitrarytime: ''
        };
    }
};
</script>