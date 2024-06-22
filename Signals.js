let activeEffect = null;

export function signal(value) {
    const subscriptions = new Set();

    return {
        get value() {
            if (activeEffect) {
                subscriptions.add(activeEffect);
            }
            return value;
        },

        set value(updated) {
            value  = updated;
            subscriptions.forEach(fn => fn());
        }
    }
}

export function effect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
}

export function computed(fn) {
    const computed = signal();

    effect(() => {
        computed.value = fn();
    })

    return computed;
}
