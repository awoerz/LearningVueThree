const InputField = {
    name: 'input-field',
    template: `
        <div>
            <input 
                :type="type"
                :placeholder="placeholder"
                v-model="inputValue"
            />
        </div>
    `,
    props: ['modelValue', 'placeholder', 'type'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}