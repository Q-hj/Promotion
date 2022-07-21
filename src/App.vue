<!--
 * @Date: 2022-07-19 22:17:15
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-07-21 23:27:30
 * @Description: 主页面
-->

<script setup>
	import { ref } from "vue";
	const baseUrl = "https://1485642186.oss-cn-hangzhou.aliyuncs.com/image/lizi/";
	const formList = ref([
		{
			name: "tel",
			label: "联系电话",
			value: "15565169976",
			color: "c-green",
		},
		{
			name: "address",
			label: "地址",
			value: "小岭村南华东头",
			color: "c-yellow",
		},
	]);
	const touchDistance = ref(0);
	function onTouchStart({ changedTouches }) {
		touchDistance.value = changedTouches[0].clientX;
	}
	const img = ref(null);
	function onTouchEnd({ changedTouches }) {
		const distance = touchDistance.value - changedTouches[0].clientX;
		// if (distance > 0) img.value.classList.add("animate__rollOut");
		console.log(distance);
	}
	function handleTOLink(item) {
		// if (item.name === "tel") window.open("tel:" + item.value);
		if (item.name === "tel") location.replace("tel:" + item.value);
	}
</script>

<template>
	<div class="home">
		<img
			v-for="item in 5"
			:key="item"
			@touchstart.capture="onTouchStart"
			@touchend="onTouchEnd"
			ref="img"
			class="w100p animate__zoomIn"
			:src="baseUrl + item + '.jpg'"
			alt=""
		/>
		<div class="link m-t-50 p-b-50">
			<div
				class="link-item lh-30 tac animate__zoomInDown"
				v-for="item in formList"
				:key="item.name"
			>
				<span class="m-r-10 fwb">{{ item.label }}:</span>

				<span @click="handleTOLink(item)" :class="item.color">{{
					item.value
				}}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	.home {
		min-height: 100vh;
		background-color: #f8f9f9;
	}
</style>
