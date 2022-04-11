<template>
    <div class="hello">
        <div v-for="user in users" :key="user.id">{{user.name}}</div>
        <br/>
        <br/>
        <input type="text" v-model="userName" />
        <button @click="addUser()">teste</button>
    
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'HelloWorld',
    apollo: {
        users: gql `query{
            users {
                id
                name
            }
        }`
    },
    props: {
        msg: String
    },
    data() {
        return {
            userName: ""
        }
    },
    methods: {
        async addUser() {
            await this.$apollo.mutate({
                // Query
                mutation: gql `mutation ($label: String!) {
                  createUser(name: $label) {
                    id
                    name
                    }
                }`,
                // Parameters
                variables: {
                    label: this.userName,
                },
            })
        }
    }
}
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>