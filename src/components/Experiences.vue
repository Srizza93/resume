<template>
  <div class="experiences">
    <span class="secondary-title">
      {{ $t(`${experiences.id}.name`) }}
    </span>
    <ul class="experiences_list">
      <li
        class="experiences_list_exp"
        v-for="(experience, index) in experiences.length"
        :key="experience.id + '-' + experiences.id"
      >
        <span> {{ $t(`${experiences.id}.list[${index}].date`) }} - </span>
        <span> {{ $t(`${experiences.id}.list[${index}].title`) }} - </span>
        <a
          class="resume-link experiences_list_exp_link"
          :href="$t(`${experiences.id}.list[${index}].provider.link`)"
        >
          {{ $t(`${experiences.id}.list[${index}].provider.text`) }}
        </a>
        <span> - {{ $t(`${experiences.id}.list[${index}].place`) }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  props: {
    experiences: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.experiences_list
 display flex
 flex-direction column

.experiences_list_exp
 margin 10px 0

.experiences_list_exp_link
 background-color #2b6777
 color white
</style>
