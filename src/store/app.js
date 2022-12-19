require('./bootstrap')

import Vue from 'vue'
import Velocity from 'velocity-animate'
import Burger from ''

const app = new Vue({
    el: '#app',
    data: {
        isMobile: window.innerWidth <= 991,
        globalOverlay: {
            active: false
        },
        menuActive: window.innerWidth > 991
    },
    methods: {
        beforeEnter () {
            if (this.isMobile) {
                this.globalOverlay.active = true
            }
        },
        enter (el, done) {
            Velocity(el, {
                marginLeft: 0
            }, {
                complete: done
            }, {
                duration: 300
            })
        },
        leave (el, done) {
            Velocity(el, {
                marginLeft: '-100%'
            }, {
                complete: done
            }, {
                duration: 300
            }).then(() => {
                if (this.isMobile) {
                    this.globalOverlay.active = false
                }
            })
        },
    },
    components: {
        'burger-menu': Burger,

    }
})
app.scss