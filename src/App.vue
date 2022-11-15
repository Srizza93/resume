<template>
  <div class="main">
    <div class="main_left">
      <div class="main_section">
        <div class="main_section">
          <span class="main_left_section_main-title">Simone Rizza</span>
          <span>{{ $t("title") }}</span>
        </div>
        <span class="secondary-title">{{ $t("about") }}</span>
        <p>
          {{ $t("description") }}
        </p>
      </div>
      <Experiences class="main_section" :experiences="workExp" />
      <Experiences class="main_section" :experiences="eduExp" />
    </div>
    <div class="main_right">
      <div class="main_section">
        <span class="secondary-title secondary-title-right">{{
          $t("details")
        }}</span>
        <ul class="main_section_details">
          <li
            class="main_section_details_detail"
            v-for="detail in details"
            :key="detail.id + '-detail'"
          >
            <span v-if="!detail.link">{{ detail.text }}</span>
            <a class="resume-link" v-else :href="detail.link">{{
              detail.text
            }}</a>
          </li>
        </ul>
      </div>
      <div class="main_section">
        <span class="secondary-title secondary-title-right">{{
          $t("skills")
        }}</span>
        <ul class="main_section_skills">
          <li v-for="(skill, index) in skills" :key="index + 'skill'">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="main_section">
        <span class="secondary-title secondary-title-right">{{
          $t("languagesTrad")
        }}</span>
        <ul>
          <li v-for="(language, index) in langs" :key="language.id + '-lang'">
            <span>{{ $t(`languages[${index}].lang`) }}</span> -
            <span>{{ $t(`languages[${index}].level`) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Experiences from "./components/Experiences.vue";
export default {
  name: "App",
  components: { Experiences },
  data() {
    return {
      skills: [
        "HTML/CSS",
        "Javascript",
        "Vue.js",
        "Vuex",
        "Vue test utils",
        "Vue-router",
        "i18n",
        "Webpack",
        "Vite",
        "Jest",
        "Git",
      ],
      details: [
        {
          id: 1,
          text: "16, Rue des Meuniers appt 1002 59810 Lesquin",
        },
        {
          id: 2,
          text: "+33772233271",
          link: "tel:+33772233271",
        },
        {
          id: 3,
          text: "simonerizzanl@gmail.com",
          link: "mailto:simonerizzanl@gmail.com",
        },
        {
          id: 4,
          text: "Linkedin",
          link: "https://www.linkedin.com/in/simonerizza1993",
        },
        {
          id: 5,
          text: "Github",
          link: "https://github.com/Srizza93",
        },
        {
          id: 4,
          text: "Portfolio",
          link: "https://srizza93.github.io/portfolio-vite/",
        },
      ],
      workExp: {
        id: "workExp",
        length: 4,
      },
      eduExp: {
        id: "eduExp",
        length: 7,
      },
      langs: ["en", "fr", "ita"],
    };
  },
};
</script>

<style lang="stylus" scoped>
.main
 display flex
 flex-direction row
.main_section
 display flex
 flex-direction column
 margin-bottom 30px
.main_left
 flex-basis 60%
 padding 30px
.main_left_section_main-title
 font-size 32px
 font-weight bold
.main_right
 flex-basis 40%
 padding 30px
 color white
 background-color #2b6777
.main_section_details_detail
 margin 20px 0
.main_section_skills
 columns 2
</style>

<style lang="stylus">
body, html
 margin 0
 padding 0
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  font-size 18px
  line-height 30px
  border 1px solid #2b6777
.secondary-title
  font-size 22px
  font-weight bold
  color #2b6777
.secondary-title-right
 color white

.resume-link
 padding 5px 10px
 border-radius 15px
 color #2b6777
 background-color white
 font-weight bold
 text-decoration none
 white-space nowrap
</style>
