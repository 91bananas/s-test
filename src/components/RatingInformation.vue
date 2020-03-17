<template>
    <div class="mt-5">
        <b-jumbotron
            header="Welcome to 🚀 Insurance"
            lead="Enter your information to create a Quote!"
            header-level="4"
        />
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
            <h5>Name</h5>
            <hr />
            <b-form-group
                id="input-group-1"
                label="First Name:"
                label-for="first-name"
            >
                <b-form-input
                    id="first-name"
                    v-model="first_name"
                    type="text"
                    required
                    placeholder="Enter first name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Last Name:"
                label-for="last-name"
            >
                <b-form-input
                    id="last-name"
                    v-model="last_name"
                    type="text"
                    required
                    placeholder="Enter last name"
                ></b-form-input>
            </b-form-group>
            <h5>Address</h5>
            <hr/>
            
            <b-form-group
                id="input-group-3"
                label="Address 1:"
                label-for="address_1"
            >
                <b-form-input
                    id="address_1"
                    v-model="line_1"
                    type="text"
                    required
                    placeholder="Enter address"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-4"
                label="Address 2:"
                label-for="address_2"
            >
                <b-form-input
                    id="address_2"
                    v-model="line_2"
                    type="text"
                    placeholder="Enter additional address"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-5"
                label="City:"
                label-for="city"
            >
                <b-form-input
                    id="city"
                    v-model="city"
                    type="text"
                    required
                    placeholder="Enter city"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-6"
                label="Region:"
                label-for="region"
            >
                <b-form-select
                    id="city"
                    v-model="region"
                    :options="regions"
                    required
                    placeholder="Enter a region"
                >
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>Please select a Region</b-form-select-option>
                    </template>
                
                </b-form-select>
            </b-form-group>
            <b-form-group
                id="input-group-7"
                label="Postal Code:"
                label-for="postal"
            >
                <b-form-input
                    id="address_2"
                    v-model="postal"
                    type="text"
                    placeholder="Enter postal code"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            regions: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
            show: true,
            first_name: '',
            last_name: '',
            line_1: '',
            line_2: '',
            city: '',
            region: '',
            postal: '',
        };
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('newForm', {
                first_name: this.first_name,
                last_name: this.last_name,
                address: {
                    line_1: this.line_1,
                    line_2: this.line_2,
                    city: this.city,
                    region: this.region,
                    postal: this.postal,
                }
            }).then(this.$router.push('/quote'));
        },
        onReset() {
            this.first_name = '';
            this.last_name = '';
            this.line_1 = '';
            this.line_2 = '';
            this.city = '';
            this.region = '';
            this.postal = '';
        }
    }
}
</script>

<style>

</style>