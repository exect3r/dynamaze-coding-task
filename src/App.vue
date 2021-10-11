<template>
    <Header />
    <Contents :time-slots="timeSlots" />
</template>

<script>
import Contents from './components/Contents';
import Header from './components/Header';

export default {
    name: 'App',
    components: {
        Header,
        Contents,
    },
    data: function() {
        return {
            // Changed ticket amounts and prices to best match the mockup.
            timeSlots: [
                {
                    id: "1",
                    ticketAmount: 13,
                    begin: "10:00",
                    price: {
                        amount: 11,
                        currency: "EUR",
                    },
                },
                {
                    id: "2",
                    ticketAmount: 5,
                    begin: "11:00",
                    price: {
                        amount: 12,
                        currency: "EUR",
                    },
                },
            ],
        };
    },
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: local("Avenir"),
   url(./assets/avenir.otf) format("truetype");
}

:root {
    --accent-color: #55C57A;
}

html, body {
    height: 100%;
    margin: 0px;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

button.btn {
    color: var(--accent-color);
    background-color: inherit;
    border: 2px solid var(--accent-color);
    border-radius: 5px;
    display: grid;
    justify-items: center;
    padding: 2vw;
}

button.btn.selected {
    color: white;
    background-image: linear-gradient(to right, #63CB76, #78D270);
    border: 2px solid transparent;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

button.btn:active {
    color: white;
    background-color: var(--accent-color);
}
</style>
