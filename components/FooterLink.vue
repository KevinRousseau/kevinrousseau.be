<script setup lang="ts">

const props = defineProps({
    url: { type: String, required: true },
    icon: { type: String, required: true }
});

</script>

<template>
    <a :href="props.url" target="_blank">
        <i :class="props.icon" class="text-2xl"></i>
    </a>
</template>    