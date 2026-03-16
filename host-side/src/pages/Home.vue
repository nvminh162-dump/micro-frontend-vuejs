<script setup lang="ts">
import RemoteAHome from "remote_a/pages/Home";
import RemoteAContact from "remote_a/pages/Contact";
</script>
<template>
    <div class="d-flex align-items-center flex-column" style="height: 100vh;">
        <h1 class="text-center w-100">Home page</h1>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/remote-a">Go to Remote A</router-link>
        <RemoteAHome />
        <RemoteAContact />
    </div>
</template>