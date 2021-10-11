<template>
    <div class="bar">
        <div>
            <img
                class="burger-icon"
                width="28"
                height="28"
                style="visibility: hidden"
            >
        </div>
        <img
            class="logo"
            src="../assets/dynamaze_logo.png"
        >
        <button class="burger-button">
            <img
                class="burger-icon"
                src="../assets/hamburger_icon.png"
                width="28"
                height="28"
            >
        </button>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
.logo {
    justify-self: center;
    width: 41vw;
}

.burger-icon {
    width: 8vw;
    height: 8vw;
}

.burger-button {
    border: none;
    background-color: inherit;
    display: flex;
    justify-content: center;
}

.bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px orange solid;
    margin-top: 8px;
    padding-bottom: 8px;
}
</style>