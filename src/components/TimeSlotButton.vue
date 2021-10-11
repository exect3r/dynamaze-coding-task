<template>
    <button :class="'btn ' + selection">
        <span>{{ begin }}</span>
        <span>{{ ticketPrice }}</span>
    </button>
</template>

<script>
import { asCurrency } from '@/utils/GlobalFunctions';

export default {
    name: 'TimeSlotButton',
    props: {
        begin: {
            type: String,
            default: '00:00',
        },
        price: {
            type: Number,
            default: 0,
        },
        currency: {
            type: String,
            default: 'EUR',
        },
        selected: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        selection: function() { return this.selected ? 'selected' : ''; },
        ticketPrice: function() { return asCurrency(this.price, this.currency); },
    },
};
</script>

<style scoped>
span:first-child {
    border-bottom: 1px solid var(--accent-color);
}

span {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 5vw;
    width: 100%;
}

button.selected span:first-child {
    border-bottom: 1px solid white;
}
</style>