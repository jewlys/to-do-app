<script>
import userStore from "../store/user";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        sendForm() {
            this.userStore.signUp(this.email, this.password);
            this.$router.push("/login");
        },
        openPopup: function () {
            if (this.email && this.password) {
                return alert("Please check your email");
            }
        },
    },
    computed: {
        ...mapStores(userStore),
    },
};
</script>

<template>
    <section id="authpage"
        class="relative py-20 2xl:py-40 overflow-hidden to-blue-200 via-blue-200 from-blue-200 bg-gradient-to-tr">
        <div class="relative container px-4 mx-auto">
            <div class="max-w-5xl mx-auto">
                <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div class="max-w-md">
                            <span class="text-lg text-slate-700 font-bold">Forgot your password?</span>
                            <h2 class="mt-8 mb-12 text-5xl font-bold font-heading text-slate-900">
                                Don't worry we'll help you out!
                            </h2>

                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 px-4">
                        <div class="px-6 lg:px-20 py-12 lg:py-24 bg-blue-300 rounded-lg">
                            <form @submit.prevent="sendForm()" action="#">
                                <h3 class="mb-10 text-2xl text-slate-00 font-bold font-heading">
                                    If an account with your email exists, we'll send you an email!
                                </h3>
                                <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                                    <span class="inline-block pr-3 py-2 border-r border-gray-50">
                                        <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                                                fill="black"></path>
                                            <path
                                                d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                                                fill="black"></path>
                                            <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect>
                                            <rect x="17" y="18" width="5" height="1" rx="0.5"
                                                transform="rotate(-90 17 18)" fill="black">
                                            </rect>
                                        </svg>
                                    </span>

                                    <input v-model="email"
                                        class="w-full pl-4 pr-6 py-4 font-bold placeholder-slate-700 rounded-r-full focus:outline-none"
                                        type="email" placeholder="example@habib.me" required />
                                </div>

                                <button @click="openPopup()"
                                    class="py-4 w-full bg-blue-200 hover:bg-blue-600 text-slate-900 font-bold rounded-full transition duration-200">
                                    Send email
                                </button>

                                <div>
                                    <p class="mt-7 flex justify-center text-slate-700">
                                        Back to login
                                    </p>
                                    <a class="flex justify-center text-blue-700" href="/login">Log in here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
#authpage {

    height: 100vh;
}
</style>