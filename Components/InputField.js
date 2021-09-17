const inputField = {
    name: 'input-field',
    data: {
        props: {
            type: String,
            placeholderValue: String,
        },
        template: `
            <div>
            <input :type="type" v-model="value" :placeholder="placeholderValue">
            <button v-on:click="myFunction">Clicky</button>
            </div>
        `,
        methods: {
            myFunction() {
                console.log(this.value)
            }
        }
    }

}

export default inputField