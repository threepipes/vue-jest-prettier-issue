import { mount } from '@vue/test-utils'
import Basic from './components/Basic.vue'

test('processes .vue files', () => {
  const wrapper = mount(Basic)
  wrapper.vm.toggleClass()
})
