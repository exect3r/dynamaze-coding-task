<template>
    <div class="ticket-selector-container">
        <span class="tickets-left">Nur noch {{ ticketsLeft }} Tickets vorhanden.</span>
        <div class="ticket-selector">
            <button
                class="btn"
                @click="removeTicket"
            >
                –
            </button>
            <span class="ticket-count">{{ selectedTickets }} Ticket{{ selectedTickets == 1 ? '' : 's' }}</span>
            <button
                class="btn"
                @click="addTicket"
            >
                +
            </button>
        </div>
        <span class="price-total">{{ priceTotal }}</span>
    </div>
</template>

<script>
import { asCurrency } from '@/utils/GlobalFunctions';

export default {
    name: 'TicketSelector',
    props: {
        ticketAmount: {
            type: Number,
            default: 0,
        },
        ticketPrice: {
            type: Number,
            default: 0,
        },
        currency: {
            type: String,
            default: 'EUR',
        },
    },
    emits: ['amountChanged'],
    data: function() {
        return { selectedTickets: 1 };
    },
    computed: {
        ticketsLeft: function() {
            return this.ticketAmount - this.selectedTickets;
        },
        priceTotal: function() {
            return asCurrency(this.selectedTickets * this.ticketPrice, this.currency);
        },
    },
    watch: {
        ticketAmount: function(oldv, newv) {
            // Check if newly selected slot has less the currently selected amount.
            if (this.selectedTickets > oldv)
                this.selectedTickets = 1;
            
            this.$emit('amountChanged', this.selectedTickets);
        },
    },
    methods: {
        addTicket: function() {
            this.selectedTickets++;

            if (this.selectedTickets > this.ticketAmount)
                this.selectedTickets = this.ticketAmount;

            this.$emit('amountChanged', this.selectedTickets);
        },

        removeTicket: function() {
            this.selectedTickets--;

            // Limit to 1 since 0 tickets is pointless.
            if (this.selectedTickets < 1)
                this.selectedTickets = 1;

            this.$emit('amountChanged', this.selectedTickets);
        },
    },
};
</script>

<style scoped>
.ticket-selector-container {
    margin-top: 8vw;
}

.ticket-selector {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3vw;
    margin-bottom: 3vw;
}

.ticket-count {
    font-size: 5.6vw;
    width: 28vw;
}

.tickets-left {
    font-size: 4.8vw;
}

.price-total {
    color: var(--accent-color);
    font-size: 5vw;
    font-weight: bold;
}

.btn {
    width: 16vw;
    font-size: 8vw;
    padding: 0px;
    border-radius: 60px;
}
</style>