<template>
    <div>
        <div class="content">
            <h2 class="title is-1">Modal</h2>
            <p class="subtitle">A classic <b>modal</b> overlay, in which you can include any content you want.</p>
        </div>
        <div class="content">
            <h3 class="title is-3">Modal</h3>
            <div class="box">
                <button 
                    class="button" 
                    @click="modal1 = true">Launch example modal</button>
            </div>
            <modal 
                :is-open="modal1" 
                @close="modal1 = false">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img 
                                    src="http://bulma.io/images/placeholders/128x128.png" 
                                    alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                    <br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </modal>
            <pre>
                <code>
            &lt;button class=&quot;button&quot; @click=&quot;modal1&quot;&gt;Launch example modal&lt;/button&gt;
            &lt;modal :is-open=&quot;modal1&quot; @close=&quot;modal1 = false&quot;&gt;
                &lt;!-- Any modal content --&gt;
            &lt;/modal&gt;
                </code>
            </pre>

            <h3 class="title is-3">Image modal</h3>
            <div class="box">
                <button 
                    class="button" 
                    @click="modal2 = true">Launch image modal</button>
            </div>
            <modal 
                :is-open="modal2" 
                @close="modal2 = false">
                <p class="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png">
                </p>
            </modal>
            <pre>
                <code>
            &lt;button class=&quot;button&quot; @click=&quot;modal2&quot;&gt;Launch image modal&lt;/button&gt;
            &lt;modal :is-open=&quot;modal2&quot; @close=&quot;modal2 = false&quot;&gt;
                &lt;p class=&quot;image is-4by3&quot;&gt;
                  &lt;img src=&quot;http://bulma.io/images/placeholders/1280x960.png&quot;&gt;
                &lt;/p&gt;
            &lt;/modal&gt;
                </code>
            </pre>

            <h3 class="title is-3">Modal card</h3>
            <div class="box">
                <button 
                    class="button" 
                    @click="modal3 = true">Launch modal card</button>
            </div>
            <modal 
                :is-open="modal3" 
                :is-card="true" 
                @close="modal3 = false">
                <span slot="title">Modal title</span>
                <div slot="content">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                    <h2>Second level</h2>
                    <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                        <li>Ut non enim metus.</li>
                    </ul>
                    <h3>Third level</h3>
                    <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
                    <ol>
                        <li>Donec blandit a lorem id convallis.</li>
                        <li>Cras gravida arcu at diam gravida gravida.</li>
                        <li>Integer in volutpat libero.</li>
                        <li>Donec a diam tellus.</li>
                        <li>Aenean nec tortor orci.</li>
                        <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                        <li>Vivamus maximus ultricies pulvinar.</li>
                    </ol>
                    <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
                    <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
                    <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
                    <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                    <h4>Fourth level</h4>
                    <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
                    <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
                    <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                    <h5>Fifth level</h5>
                    <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
                    <h6>Sixth level</h6>
                    <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
                </div>
                <div slot="action">
                    <a class="button is-success">Save changes</a>
                    <a class="button">Cancel</a>
                </div>
            </modal>
            <pre>
                <code>
            &lt;button class=&quot;button&quot; @click=&quot;modal3&quot;&gt;Launch modal card&lt;/button&gt;
            &lt;modal :is-open=&quot;modal3&quot; :is-card=&quot;true&quot; @close=&quot;modal3 = false&quot;&gt;
                &lt;h4 slot=&quot;title&quot;&gt;Modal title&lt;/h4&gt;
                &lt;div slot=&quot;content&quot;&gt;
                     &lt;!-- Any modal content --&gt;
                &lt;/div&gt;
                &lt;div slot=&quot;action&quot;&gt;
                    &lt;a class=&quot;button is-success&quot;&gt;Save changes&lt;/a&gt;
                    &lt;a class=&quot;button&quot;&gt;Cancel&lt;/a&gt;
                &lt;/div&gt;
            &lt;/modal&gt;
                </code>
            </pre>
        </div>
        

        <h2 class="title is-2">Usage</h2>
        <div class="content">
            <p>Modal component toggles your hidden content on demand by show/hide <code>.is-active</code> CSS selector at the component. This can be done via Javascript (Vue.js).</p>
            <pre>
                <code>
            &lt;script&gt;
                import Modal from './../../components/modal/Modal';
                export default {
                    components: {
                        Modal
                    },
                    data() {
                        return {
                            showModal: []
                        }
                    },
                    methods: {
                        toggleModal(index) {
                            for (let i = 0; i &lt; this.showModal.length; i++) {
                                this.showModal[i] = false;
                            }
                            this.showModal[index] = true;
                            this.showModal = this.showModal.map(v => v);
                        }
                    }
                }
            &lt;/script&gt;
                </code>
            </pre>

            <h3 class="title is-3">Options</h3>
            <p>Options can be passed via attributes of <code>modal</code> container.</p>
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
                        <td>is-open</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Yes</td>
                        <td>Controls <code>.is-active</code> CSS selector of modal.</td>
                    </tr>
                    <tr>
                        <td>is-card</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>No</td>
                        <td>Determines the layout of modal. Setting it to true, modal will take Modal Card layout, which contains 3 slots: title, content, and action.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr >
    </div>
</template>

<script>
import Modal from './../../components/modal/Modal';
export default {
    components: {
        Modal
    },
    data() {
        return {
            modal1: false,
            modal2: false,
            modal3: false
        };
    }
};
</script>