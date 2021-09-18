import ListItem from './Components/ListItem.js'
import InputField from './Components/InputField.js'
import SimpleForm from './Components/SimpleForm.js'

const list = Vue.createApp({

    components: ['simple-form'],
    methods: {
        myFunction() {
            console.log("click")
        }
    }
})

list.component(InputField.name, InputField)
list.component(ListItem.name, ListItem)
list.component(SimpleForm.name, SimpleForm)


list.mount('#items-list')