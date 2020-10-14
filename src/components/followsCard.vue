<template>
    <div>
        <!-- username bio birthdate are undefined-->
        <h3>{{usersObject.username}}</h3>
        <p>{{usersObject.bio}}</p>
        <p>{{usersObject.birthdate}}</p>
        <button>Follow!</button>
<follow-users/>
    </div>
</template>

<script>
import FollowUsers from '../components/follows.vue'
    export default {
        components: {
            FollowUsers
        },
        props: {
            usersObject: {
                type: Object, 
            },
        },
    }
</script>

<style scoped>

</style>