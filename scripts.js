import listItem from './Components/listItem.js'
import inputField from './Components/InputField.js'

const list = Vue.createApp({
    data() {
        return {
            currentId: 2,
            items: [
                { id: 0, text: 'Item One'},
                { id: 1, text: 'Item Two'},
                { id: 2, text: 'Item Three'}
            ],
            input: "test"
        }
    },
    methods: {
        addToList() {
            console.log(this.input)
        }
    }
})

list.component(listItem.name, listItem.data)
list.component(inputField.name, inputField.data)

list.mount('#items-list')