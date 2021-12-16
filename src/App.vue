<template>
	<div class="container px-4 lg:px-14">
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>

<script setup>
	import Navbar from "./components/Navbar.vue";
	import Footer from "./components/Footer.vue";
</script>

<style>
</style>
