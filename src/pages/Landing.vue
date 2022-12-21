<script>
import Clients from "../components/Clients.vue";
import AboutUs from "../components/AboutUs.vue";

export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  },
  components: {
    Clients,
    AboutUs,
  },
};

("use strict");

!(function () {
  const t = (window.driftt = window.drift = window.driftt || []);
  if (!t.init) {
    if (t.invoked)
      return void (
        window.console &&
        console.error &&
        console.error("Drift snippet included twice.")
      );
    (t.invoked = !0),
      (t.methods = [
        "identify",
        "config",
        "track",
        "reset",
        "debug",
        "show",
        "ping",
        "page",
        "hide",
        "off",
        "on",
      ]),
      (t.factory = function (e) {
        return function () {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }),
      t.methods.forEach(function (e) {
        t[e] = t.factory(e);
      }),
      (t.load = function (t) {
        var e = 3e5,
          n = Math.ceil(new Date() / e) * e,
          o = document.createElement("script");
        (o.type = "text/javascript"),
          (o.async = !0),
          (o.crossorigin = "anonymous"),
          (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js");
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      });
  }
})();
drift.SNIPPET_VERSION = "0.3.1";
drift.load("i3sks436p5vp");
</script>

<template>
  <!-- Section 1.1-->
  <nav class="flex items-center justify-between flex-wrap sticky bg-blue-300 bg-opacity-95 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="fill-current h-8 w-8 mr-2" width="54" height="54" src="../assets/images/potionpink.png" />
      <span class="font-semibold text-xl tracking-tight">Potion</span>
    </div>
    <div @click="toggleNav" class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2  border rounded text-blue-400 border-blue-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div :class="showMenu ? 'flex' : 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#aboutUs" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4">
          About Us
        </a>

        <a href="#clients" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400">
          Clients
        </a>
      </div>

      <div>
        <a href="/signup"
          class="inline-block text-sm px-4 py-2  leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Sign
          Up</a>
      </div>
      <div>
        <a href="/login"
          class="inline-block text-sm px-4 py-2 leading-none text-white border-white hover:border-transparent hover:text-blue-400 hover:bg-white mt-4 lg:mt-0">Log
          In</a>
      </div>
    </div>
  </nav>
  <!-- Section 2 -->
  <section class="px-2 py-32 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Tired of Notion's flaws </span>
              <span class="block text-blue-300 xl:inline">and ready to switch?</span>
            </h1>
            <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              We're the potion for all problems you have with Notion.
            </p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <a href="/signup"
                class="flex items-center w-full px-6 py-3 mb-3 text-lg text-slate-900 bg-blue-400 rounded-md sm:mb-0 hover:bg-gray-200 sm:w-auto">
                Sign Up
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
                <svg class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="/login"
                class="flex items-center px-6 py-3 text-gray-700 bg- rounded-md hover:bg-gray-200 hover:text-gray-600">
                Log In
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img class="hover:animate-bounce" src="../assets/images/Group-9.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="aboutUs">
    <AboutUs />
  </div>

  <Clients id="clients" />
</template>
