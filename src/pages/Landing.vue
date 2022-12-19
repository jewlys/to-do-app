<script>
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

  <!-- Section 2 -->
  <section class="px-2 py-32 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">Tired of Notion's flaws </span>
              <span class="block text-indigo-500 xl:inline"
                >and ready to switch?</span
              >
            </h1>
            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
            >
              We're the potion for all problems you have with Notion.
            </p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <a
                href="/signup"
                class="flex items-center w-full px-6 py-3 mb-3 text-lg text-slate-900 bg-indigo-300 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
              >
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></svg>
                <svg
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="/login"
                class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
          >
            <img src="../assets/images/Group 9.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3 -->
  <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
      >
        <img
          src="https://cdn.devdojo.com/images/december2020/productivity.png"
          class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
        />
      </div>

      <!-- Content -->
      <div
        id="section1"
        class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
        >
          Boost Productivity
        </h2>
        <p
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
        >
          Build an atmosphere that creates productivity in your organization and
          your company culture.
        </p>
        <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Maximize productivity and growth
          </li>
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Speed past your competition
          </li>
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Learn the top techniques
          </li>
        </ul>
      </div>
      <!-- End  Content -->
    </div>
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Content -->
      <div
        class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
        >
          Automated Tasks
        </h2>
        <p
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg"
        >
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Automated task management workflow
          </li>
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Detailed analytics for your data
          </li>
          <li
            class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span
              class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-400 rounded-full"
              ><span class="text-sm font-bold">✓</span></span
            >
            Some awesome integrations
          </li>
        </ul>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
      >
        <img
          src="https://cdn.devdojo.com/images/december2020/settings.png"
          class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
        />
      </div>
    </div>
  </section>

  <!-- Section 4 -->

  <!-- Section 5 -->
  <section class="flex items-center justify-center py-20 bg-white min-w-screen">
    <div class="px-16 bg-white">
      <div class="container flex flex-col items-start mx-auto lg:items-center">
        <p
          class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-indigo-500 uppercase lg:justify-center lg:items-center"
        >
          Don't just take our word for it
        </p>

        <h2
          class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          See what others are saying
        </h2>
        <div
          class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"
        ></div>

        <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
          <div
            class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0"
          >
            <div class="flex items-center justify-center">
              <div
                class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
              >
                <img
                  src="../assets/images/Screenshot 2022-12-16 at 15.34.26.png"
                  class="object-cover w-full h-full"
                />
              </div>
              <div class="flex flex-col items-start justify-center">
                <h4 class="font-bold text-gray-800">Joan Cifo</h4>
                <p class="text-gray-600">CEO of Potion (the Big Boss)</p>
              </div>
            </div>
            <blockquote class="mt-8 text-lg text-gray-500">
              "This is a no-brainer if you want to take your business to the
              next level. If you are looking for the ultimate toolset, this is
              it!"
            </blockquote>
          </div>
          <div
            class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200"
          >
            <div class="flex items-center justify-center">
              <div
                class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
              >
                <img
                  src="../assets/images/Screenshot 2022-12-16 at 15.30.22.png"
                  class="object-cover w-full h-full"
                />
              </div>
              <div class="flex flex-col items-start justify-center">
                <h4 class="font-bold text-gray-800">Cristian Perdomo</h4>
                <p class="text-gray-600">Chief of MayDay</p>
              </div>
            </div>
            <blockquote class="mt-8 text-lg text-gray-500">
              "Thanks for creating this service. My life is so much easier.
              Thanks for making such a great product."
            </blockquote>
          </div>
          <div
            class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3"
          >
            <div class="flex items-center justify-center">
              <div
                class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
              >
                <img
                  src="../assets/images/Screenshot 2022-12-16 at 15.30.07.png"
                  class="object-cover w-full h-full"
                />
              </div>
              <div class="flex flex-col items-start justify-center">
                <h4 class="font-bold text-gray-800">Luis Rodriguez</h4>
                <p class="text-gray-600">Chief of S.O.S</p>
              </div>
            </div>
            <blockquote class="mt-8 text-lg text-gray-500">
              "Packed with awesome content and exactly what I was looking for. I
              would highly recommend this to anyone."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7 -->
  <footer
    class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022
      <a href="https://flowbite.com/" class="hover:underline">Potion™</a>. All
      Rights Reserved.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
      </li>

      <li>
        <a href="#" class="hover:underline">Contact</a>
      </li>
    </ul>
  </footer>
</template>

<script>
// ("use strict");

// !(function () {
//   const t = (window.driftt = window.drift = window.driftt || []);
//   if (!t.init) {
//     if (t.invoked)
//       return void (
//         window.console &&
//         console.error &&
//         console.error("Drift snippet included twice.")
//       );
//     (t.invoked = !0),
//       (t.methods = [
//         "identify",
//         "config",
//         "track",
//         "reset",
//         "debug",
//         "show",
//         "ping",
//         "page",
//         "hide",
//         "off",
//         "on",
//       ]),
//       (t.factory = function (e) {
//         return function () {
//           var n = Array.prototype.slice.call(arguments);
//           return n.unshift(e), t.push(n), t;
//         };
//       }),
//       t.methods.forEach(function (e) {
//         t[e] = t.factory(e);
//       }),
//       (t.load = function (t) {
//         var e = 3e5,
//           n = Math.ceil(new Date() / e) * e,
//           o = document.createElement("script");
//         (o.type = "text/javascript"),
//           (o.async = !0),
//           (o.crossorigin = "anonymous"),
//           (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js");
//         var i = document.getElementsByTagName("script")[0];
//         i.parentNode.insertBefore(o, i);
//       });
//   }
// })();
// drift.SNIPPET_VERSION = "0.3.1";
// drift.load("i3sks436p5vp");
</script>
