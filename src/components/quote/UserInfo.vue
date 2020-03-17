<template>
<div>
    <b-card title="Policy Holder Information" class="mb-3">
        <b-card-text class="mb-0">
            <strong>{{policy_holder.first_name}} {{policy_holder.last_name}}</strong>
        </b-card-text>
        <b-card-text class="mb-0">
            {{rating_address.line_1}}
        </b-card-text>
        <b-card-text v-if="rating_address.line_2" class="mb-0">
            {{rating_address.line_2}}
        </b-card-text>
        <b-card-text class="mb-0">
            {{rating_address.city}}, {{rating_address.region}} {{rating_address.postal}}
        </b-card-text>
    </b-card>
</div>
</template>

<script>
export default {
    name: 'UserInformation',
    props: {
        policy_holder: Object,
        rating_address: Object
    }
}
</script>

<style>

</style>