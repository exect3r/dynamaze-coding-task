<template>
    <div>
        <img
            class="banner"
            src="../assets/funfussball1.png"
        >
    </div>
    <div class="spacer">
        <div class="time-slots">
            <TimeSlotButton
                v-for="ts in timeSlots"
                :key="ts.id"
                :begin="ts.begin"
                :price="ts.price.amount"
                :currency="ts.price.currency"
                :selected="ts.id == selectedSlot.id"

                @click="selectedSlot = ts"
            />
        </div>
        <TicketSelector
            :ticket-amount="selectedSlot.ticketAmount"
            :ticket-price="selectedSlot.price.amount"
            :currency="selectedSlot.price.currency"

            @amountChanged="selectedAmount = $event"
        />
        <button
            class="btn-buy"
            @click="showMessage"
        >
            Jetzet Buchen
        </button>
    </div>
</template>

<script>
import TimeSlotButton from './TimeSlotButton';
import TicketSelector from './TicketSelector';
import { asCurrency } from '@/utils/GlobalFunctions';

export default {
    name: 'Contents',
    components:  { TimeSlotButton, TicketSelector },
    props: {
        timeSlots: {
            type: Object,
            default: function() { return {}; },
        },
    },
    data: function() {
        return { selectedSlot: this.timeSlots[0], selectedAmount: 1 };
    },
    methods: {
        showMessage: function() {
            alert(`Booking TimeSlot at ${this.selectedSlot.begin}, ${this.selectedAmount} tickets at ${asCurrency(this.selectedAmount * this.selectedSlot.price.amount, this.selectedSlot.price.currency)} succeeded`);
        },
    },
};
</script>
<style scoped>
.spacer {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 20px;
}

.btn-buy {
    color: white;
    background-image: linear-gradient(to right, #FE9D3D , #FABE5F);
    border: none;
    border-radius: 3vw;
    padding: 2vw;
    margin-top: auto;
    margin-bottom: 2vw;
    font-size: 5vw;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.btn-buy:active {
    background-image: linear-gradient(to right, #ee871f , #fcb440);
}

img.banner {
    width: 100%;
    border-radius: 20px 0px 20px 0px;
}

.time-slots {
    display: flex;
    justify-content: space-between;
    margin: 1vw 5vw 1vw 5vw;
}
</style>