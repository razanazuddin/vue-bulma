<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Date Range Picker</h2>
            <p class="subtitle"><b>Date range picker</b> for date input.</p>
        </div>
        <h3 class="title is-3">Daterangepicker</h3>
        <div class="box">
            <div class="field">
                <div class="control">
                    <daterangepicker 
                        v-model="date" 
                        placeholder="Pick a range"/>
                </div>
            </div>
        </div>
        <message 
            :active="date !== ''" 
            state-class="is-info">You have selected this date: <b id="selected_date">{{ date }}</b></message>
        <div class="content">
            <pre>
                <code>
        &lt;daterangepicker v-model=&quot;date&quot; type=&quot;day&quot; placeholder=&quot;Pick a range&quot;&gt;&lt;/daterangepicker&gt;
                </code>
            </pre>
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
                        <td>format</td>
                        <td>string (refer <b>Date String+Format</b> table)</td>
                        <td>D-MM-YYYY</td>
                        <td>No</td>
                        <td>Display format of timepicker.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Daterangepicker from './../../components/datepicker/Daterangepicker';
import Dropdown from './../../components/dropdown/Dropdown';
import Message from './../../components/message/Message';
export default {
    components: {
        Daterangepicker,
        Dropdown,
        Message
    },
    data() {
        return {
            date: ''
        };
    }
};
</script>

<style type="text/css" scoped>
    .dropdown-content {
        padding: 0.5rem;
    }
</style>