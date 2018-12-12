<template>
  <div id="app">
    <div class="container is-fluid">
        <page-intro/>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Front-End Template Guide</h1>
                    <p class="subtitle">This guide focuses only on Bulma Components section in Bulma documentation. For other features of Bulma, please refer their full documentation: <a 
                        href="https://bulma.io" 
                        target="_blank">https://bulma.io</a></p>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column is-2">
                <aside class="menu">
                    <ul class="menu-list">
                        <li><a href="#message">Message</a></li>
                        <li><a href="#modal">Modal</a></li>
                        <li><a href="#notification">Notification</a></li>
                        <li><a href="#pagination">Pagination</a></li>
                        <li><a href="#tabs">Tabs</a></li>
                        <li><a href="#dropdown">Dropdown</a></li>
                        <li><a href="#datepicker">Date Picker</a></li>
                        <li><a href="#daterangepicker">Date Range Picker</a></li>
                        <li><a href="#timepicker">Time Picker</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column is-10">
                <message-doc id="message"/>
                <modal-doc id="modal"/>
                <notification-doc id="notification"/>
                <pagination-doc id="pagination"/>
                <tabs-doc id="tabs"/>
                <dropdown-doc id="dropdown"/>
                <datepicker-doc id="datepicker"/>
                <daterangepicker-doc id="daterangepicker"/>
                <timepicker-doc id="timepicker"/>
                <div class="content is small">
                    <p><small>Last modified: August 17, 2018 (Razan)</small></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageIntro from './views/PageIntro.vue';
import MessageDoc from './views/pages/MessageDoc.vue';
import ModalDoc from './views/pages/ModalDoc.vue';
import NotificationDoc from './views/pages/NotificationDoc.vue';
import PaginationDoc from './views/pages/PaginationDoc.vue';
import TabsDoc from './views/pages/TabsDoc.vue';
import DropdownDoc from './views/pages/DropdownDoc.vue';
import DatepickerDoc from './views/pages/DatepickerDoc.vue';
import DaterangepickerDoc from './views/pages/DaterangepickerDoc.vue';
import TimepickerDoc from './views/pages/TimepickerDoc.vue';
export default {
    components: {
        PageIntro,
        MessageDoc,
        ModalDoc,
        NotificationDoc,
        PaginationDoc,
        TabsDoc,
        DropdownDoc,
        DatepickerDoc,
        DaterangepickerDoc,
        TimepickerDoc
    }
};
</script>