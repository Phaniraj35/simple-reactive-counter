import { signal, computed, effect } from './Signals.js'

const count = signal(0);

const btn = document.getElementById('btn');
const doubleCountSpan = document.getElementById('double-count');

const doubleCount = computed(() => count.value * 2);

effect(() => {
    doubleCountSpan.innerHTML = doubleCount.value;
})

effect(() => {
    btn.innerHTML = count.value;
})

btn.innerText = count.value;

btn.addEventListener('click', () => {
    count.value++;
})