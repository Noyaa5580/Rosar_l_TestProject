<template>
    <div>
        <TheHeader />
        <div class="main">
            <h1>{{ $route.params.name }}</h1>
        </div>
        <TheFooter />
    </div>
</template>
<style>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1000px;
}
.items_manufacturer{
    top: 620px;
}
</style>
<script>
</script>