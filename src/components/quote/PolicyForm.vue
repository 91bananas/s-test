<template>
    <div>
        <b-card title="Policy Options" class="mb-3">
            <b-form-group id="input-group-3" label="Deductible:" label-for="input-1">
                <b-form-select
                    id="input-1"
                    v-model="variable_selections.deductible"
                    required
                >
                    <b-form-select-option :value="null" disabled>Please select a Deductible</b-form-select-option>
                    <b-form-select-option v-for="value in variable_options.deductible.values" :value="value" v-bind:key="value">{{value | formatDollar}}</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Asteroid Collision Coverage:" label-for="input-2">
                <b-form-select
                    id="input-2"
                    v-model="variable_selections.asteroid_collision"
                    required
                >
                    <b-form-select-option :value="null" disabled>Please select an Asteroid Collision Coverage</b-form-select-option>
                    <b-form-select-option v-for="value in variable_options.asteroid_collision.values" :value="value" v-bind:key="value">{{value | formatDollar}}</b-form-select-option>
                </b-form-select>
            </b-form-group>
        </b-card>

        <h4>Your Premium: {{premium | formatDollar}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        variable_options: Object,
        variable_selections: Object,
        premium: Number
    },
    computed: {
        deductible_values() {
            debugger; //eslint-disable-line
            return [];
        }
    }
}
</script>

<style>

</style>