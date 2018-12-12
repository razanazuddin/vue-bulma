<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Date Picker</h2>
            <p class="subtitle"><b>Date picker</b> for date input.</p>
        </div>
        <h3 class="title is-3">Datepicker</h3>
        <div class="box">
            <div class="field">
                <div class="control">
                    <datepicker 
                        v-model="date" 
                        type="day" 
                        placeholder="Pick a day"/>
                </div>
            </div>
        </div>
        <message 
            :active="date !== ''" 
            state-class="is-info">You have selected this date: <b id="selected_date">{{ date }}</b></message>
        <div class="content">
            <pre>
                <code>
        &lt;datepicker v-model=&quot;date&quot; type=&quot;day&quot; placeholder=&quot;Pick a day&quot;&gt;&lt;/datepicker&gt;
                </code>
            </pre>
        </div>
        <div class="is-hidden">
            <h3 class="title is-3">Other measurements</h3>
            <div class="box">
                <div class="field">
                    <div class="control">
                        <datepicker 
                            v-model="month" 
                            type="month" 
                            placeholder="Pick a month"/>
                        <datepicker 
                            v-model="year" 
                            type="year" 
                            placeholder="Pick a year"/>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <h3 class="title is-3">Options</h3>
            <h4>Datepicker options</h4>
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
                        <td>string (valid <code>new Date()</code> format)</td>
                        <td>-</td>
                        <td>Yes</td>
                        <td>Selected date.</td>
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
                        <td>type</td>
                        <td>string (<code>day</code>, <code>month</code>, <code>year</code>)</td>
                        <td>day</td>
                        <td>No</td>
                        <td>Display type of datepicker.</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>string (refer <b>Date String+Format</b> table)</td>
                        <td>D-MM-YYYY</td>
                        <td>No</td>
                        <td>Display format of timepicker.</td>
                    </tr>
                </tbody>
            </table>
            <h4>Date String+Format</h4>
            <p>Year, month, day, and week tokens</p>
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
                        <td><code>YYYY</code></td>
                        <td><code>2014</code></td>
                        <td>4 digit year</td>
                    </tr>
                    <tr>
                        <td><code>YY</code></td>
                        <td><code>14</code></td>
                        <td>2 digit year</td>
                    </tr>
                    <tr>
                        <td><code>y</code></td>
                        <td><code>-25</code></td>
                        <td>Year with any number of digits and sign</td>
                    </tr>
                    <tr>
                        <td><code>Q</code></td>
                        <td><code>1..4</code></td>
                        <td>Quarter of year. Sets month to first month in quarter</td>
                    </tr>
                    <tr>
                        <td><code>M</code> <code>MM</code></td>
                        <td><code>1..12</code></td>
                        <td>Month in number</td>
                    </tr>
                    <tr>
                        <td><code>MMM</code> <code>MMMM</code></td>
                        <td><code>Jan..December</code></td>
                        <td>Month name</td>
                    </tr>
                    <tr>
                        <td><code>D</code> <code>DD</code></td>
                        <td><code>1..31</code></td>
                        <td>Day of month</td>
                    </tr>
                    <tr>
                        <td><code>Do</code></td>
                        <td><code>1st..31st</code></td>
                        <td>Day of month with ordinal</td>
                    </tr>
                    <tr>
                        <td><code>DDD</code> <code>DDDD</code></td>
                        <td><code>1..365</code></td>
                        <td>Day of year</td>
                    </tr>
                    <tr>
                        <td><code>e</code></td>
                        <td><code>0..6</code></td>
                        <td>(Locale) Day of week</td>
                    </tr>
                    <tr>
                        <td><code>ddd</code> <code>dddd</code></td>
                        <td><code>Mon..Sunday</code></td>
                        <td>Day name</td>
                    </tr>
                    <tr>
                        <td><code>W</code> <code>WW</code></td>
                        <td><code>1..53</code></td>
                        <td>ISO week of year</td>
                    </tr>
                    <tr>
                        <td><code>E</code></td>
                        <td><code>1..7</code></td>
                        <td>ISO day of week</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Datepicker from './../../components/datepicker/Datepicker';
import Message from './../../components/message/Message';
export default {
    components: {
        Datepicker,
        Message
    },
    data() {
        return {
            date: '',
            month: '',
            year: ''
        };
    }
};
</script>