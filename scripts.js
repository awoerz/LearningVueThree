
document.addEventListener("DOMContentLoaded", function() {
    var list = Vue.createApp({

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
})