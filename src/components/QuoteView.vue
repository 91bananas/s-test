<template>
    <div class="mt-5">
        <h5>Quote #{{quote.quoteId}}</h5>
        <UserInfo v-if="!loading" v-bind:rating_address="quote.rating_address" v-bind:policy_holder="quote.policy_holder" />
        <PolicyForm 
            v-if="!loading"
            v-bind:variable_options="quote.variable_options"
            v-bind:variable_selections="quote.variable_selections"
            v-bind:premium="quote.premium"
        />
        <LoadingSpinner v-if="loading" />
    </div>
</template>

<script>
// import {mapGetters} from 'vuex';
import LoadingSpinner from './LoadingSpinner';
import UserInfo from './quote/UserInfo';
import PolicyForm from './quote/PolicyForm';
import router from '../router';

export default {
    data() {
        return {
            quote: {},
            loading: true,
        }
    },
    components: {
        LoadingSpinner,
        UserInfo,
        PolicyForm,
    },
    created() {
        let _this = this;
        this.$store.watch(
            (state, getters) => getters.quote,
            (newQuote) => {
                _this.loading = false;
                _this.quote = newQuote;
            }
        );
        setTimeout(function () {
            if (_this.loading) {
                router.push('/');
            }
        }, 5000)
    }
}
</script>

<style scoped>
</style>