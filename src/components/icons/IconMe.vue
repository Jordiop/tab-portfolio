<template>
    <svg viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" :fill="fill">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path class="cls-1"
                :stroke="fill"
                d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z"></path>
            <path :stroke="fill" class="cls-1" d="M17.26,10.5H30.74V30.75A6.75,6.75,0,0,1,24,37.5h0a6.75,6.75,0,0,1-6.74-6.75V28.51">
            </path>
        </g>
    </svg>
</template>
<script setup lang="ts">
defineProps({
    fill: String,
});
</script>
<style>
.cls-1 {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>