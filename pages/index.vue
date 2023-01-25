<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
