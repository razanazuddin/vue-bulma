<template>
    <div class="section">
        <notification :active="true">
            <h3 class="title is-5">Ohai! Welcome to your new project and this is your front-end template guide! <span class="icon"><i class="mdi mdi-smile"/></span></h3>
            <div class="content">
                <p>A friendly reminder, you might want to remove this guide before committing to your new project's repo.</p>
                <p>Store this somewhere in your local machine for future reference, if you like.</p>
                <p>Hints:</p>
                <ul>
                    <li>Delete declaration scripts in Vue instance</li>
                    <li>Clear JS tests directory</li>
                </ul>
                <br >
                <p>Cheers!</p>
                <p>~ Razan<br><span class="icon is-small"><i class="mdi mdi-vuejs"/></span> + <span class="icon is-small"><i class="mdi mdi-laravel"/></span> = <span class="icon is-small"><i class="mdi mdi-heart"/></span></p>
            </div>
        </notification>
    </div>
</template>

<script>
import Notification from './../components/notification/Notification';
export default {
    components: {
        Notification
    }
};
</script>