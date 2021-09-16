import listItem from './Components/listItem.js'

const list = Vue.createApp({
    data() {
        return {
            items: [
                { id: 0, text: 'Item One'},
                { id: 1, text: 'Item Two'},
                { id: 2, text: 'Item Three'}
            ]
        }
    },
    methods: {
        addToList() {
            alert("something happened.")
        }
    }
})

list.component(listItem.name, listItem.data)

list.mount('#items-list')