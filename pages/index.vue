<script setup lang="ts">
const appConfig = useAppConfig();

const logo = ref();
const multiple = 30;

const mouseMove = (e: MouseEvent) => {
  console.log(e);
  window.requestAnimationFrame(function () {
    transformElement(e.clientX, e.clientY);
  });
};

const mouseLeave = () => {
  window.requestAnimationFrame(function () {
    logo.value.style.transform = "rotateX(0) rotateY(0)";
  });
};

const transformElement = (x: number, y: number) => {
  let box = logo.value.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / multiple;
  let calcY = (x - box.x - box.width / 2) / multiple;

  logo.value.style.transform =
    "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
};
</script>
<template>
  <div
    class="bg-gradient-stripped w-screen min-h-screen flex items-center"
    @mousemove="mouseMove"
    @mouseleave="mouseLeave"
  >
    <div
      class="container mx-auto z-10 mt-10 mb-48 flex items-center justify-between flex-col xl:flex-row"
    >
      <header class="text-white xl:w-7/12 order-2 xl:order-1 text-justify">
        <h1 class="text-7xl lg:text-9xl font-bold opacity-50">Welcome</h1>
        <h2
          class="text-3xl lg:text-5xl font-bold -mt-7 pl-5 lg:-mt-10 lg:pl-10"
        >
          Nice to meet you
        </h2>

        <p class="text-md lg:text-lg lg:ml-5 mt-10 text-balance leading-loose">
          I'm Kevin, a <strong>Full-stack Developer</strong> and
          <strong>Laravel / Vue.js</strong> enthusiast from Belgium.
          <span>👨🏼‍💻 🇧🇪</span> <br /><br />
          I have a genuine love for coding and design that has been with me
          since my early days as a student, and it continues to drive me forward
          in my developer journey. <span>🚀</span> <br /><br />
          Along the way, I discovered the joys of <strong>freelancing</strong>,
          which has allowed me to constantly expand my skills and delve into
          exciting new technologies that benefit my <strong>clients</strong>.
          <span>👏🏻</span> <br /><br />
          I'm here to <strong>connect</strong> with all of you, whether you have
          questions, ideas, or potential <strong>collaborations</strong> in
          mind. Don't hesitate to reach out and let's have a chat. Together, we
          can bring your visions to life! <span>💭</span> <br /><br />
          Looking forward to hearing from you! <span>💌</span>
        </p>
      </header>

      <div
        class="flex items-center xl:justify-center flex-1 w-full order-1 xl:order-2 mb-10"
      >
        <img
          src="/img/logo.svg"
          :alt="appConfig.title + ' Logo'"
          ref="logo"
          class="w-[100px] xl:w-4/12"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
span {
  @apply text-xl;
}
</style>
