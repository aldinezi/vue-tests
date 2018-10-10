import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import App from '@/App.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('App is a Vue instance', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});