import { shallowMount } from '@vue/test-utils'
import Header from './../components/Header.vue'

describe('Header.vue/Header', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('is rendering main div with correct class', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.classes()).toContain('header-component')
  })

})
