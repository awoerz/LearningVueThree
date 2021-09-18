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
const ListItem = {
    name: "list-item",
    template: `<li>{{item.text}}</li>`,
    props: ['item']
}
const SimpleForm = {
  name: 'simple-form',
  template: `
    <form @submit.prevent="handleSubmit">
      <ul>
        <list-item
          v-for="item in items"
          :item="item"
        />
      </ul>
      <input-field 
        v-for="(input, i) in inputs"
        :key="i"
        v-model="input.value"
        :placeholder="input.placeholder"
        :type="input.type"
      />
      <button>Submit</button>
    </form>
  `,
  component: ['input-field'],
  data() {
      return {
          currentId: 2,
          items: [
              { id: 0, text: 'Item One'},
              { id: 1, text: 'Item Two'},
              { id: 2, text: 'Item Three'}
          ], 
          inputs: [
            {
              value: '',
              type: 'text',
              placeholder: 'Enter New Item'
            }
          ]
      }
  },
  methods: {
    handleSubmit() {
      console.log(this.inputs[0].value)
      this.currentId += 1;
      this.items.push({id: this.currentId, text: this.inputs[0].value})
    }
  }
}
