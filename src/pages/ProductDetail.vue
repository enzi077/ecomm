<template>
    <div class="row q-ma-md">
        <div class="col-12 col-sm-8 col-md-6">
            <q-card class="my-card">
                <q-img
                    basic
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
            </q-card>
        </div>
        <div class="col-12 q-my-md justify-center">
            <q-list>
                <q-item>
                <q-item-section>
                    <q-item-label>Product Name:</q-item-label>
                    <q-item-label>Price:</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Shirt</q-item-label>
                    <q-item-label>$45</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            <q-btn-toggle
                flat
                toggle-color="primary"
                :options="[
                    {label: 'One', value: 'one'},
                    {label: 'Two', value: 'two'},
                    {label: 'Three', value: 'three'}
                ]"
            />
        </div>
    </div>
</template>

<script>
export default {

}
</script>
