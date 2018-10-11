import { shallowMount, createLocalVue } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Details from '@/components/Details.vue';
import App from '@/App.vue';

const localVue = createLocalVue();

describe('🍄 App component:', () => {
  it('App is a Vue instance', () => {
    const wrapper = shallowMount(App, {
      localVue,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('App sets data', () => {
    const wrapper = shallowMount(App, {
      localVue,
      mocks: { count: 0 }
    });
    expect(wrapper.vm.count).toBe(0);
    wrapper.setData({ count: 10 });
    expect(wrapper.vm.count).toBe(10);
  });

  it('App renders an image', () => {
    const wrapper = renderToString(App);
    expect(wrapper).toContain('<img');
  });

});

describe('👾 Details component:', () => {
  it('Details renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Details, {
      localVue,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('Button sets message data', () => {
    const wrapper = shallowMount(Details, {
      localVue,
    });
    const btn = wrapper.find('button');
    btn.trigger('click');
    expect(wrapper.vm.newMsg).toMatch('You are so OK!');
  });

  it('Button removes message data', () => {
    const wrapper = shallowMount(Details, {
      localVue,
    });
    const btn = wrapper.find('button.remove');
    btn.trigger('click');
    expect(wrapper.vm.newMsg).toMatch('');
  });

  it('Buttons toggle classes', () => {
    const wrapper = shallowMount(Details);
    const btn = wrapper.find('button.okay');
    btn.trigger('click');
    expect(wrapper.find('.message').classes()).not.toContain('iAmEmpty');
    const btn2 = wrapper.find('button.remove');
    btn2.trigger('click');
    expect(wrapper.find('.message').classes()).toContain('iAmEmpty');
  });

  it('Details contains h3 tags',  () => {
    const wrapper = shallowMount(Details);
    expect(wrapper.findAll('h3').exists()).toBe(true);
  });

  it('H3 tag is empty', () => {
    const wrapper = shallowMount(Details);
    expect(wrapper.find('h3').isEmpty()).toBe(true);
  });

  it('Sets props on update', () => {
    const msg = 'Default message';
    const wrapper = shallowMount(Details, {
      localVue,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);

    // Setting new props value as update from parent component
    const newMsg = 'Updated message';
    wrapper.setProps({ msg: newMsg });
    expect(wrapper.text()).toMatch(newMsg);
  });

  it('Calls a method once when destroyed', () => {
    const onDestroyMethod = jest.fn();
    const wrapper = shallowMount(Details, {
      destroyed () {
        onDestroyMethod();
      }
    }).destroy();

    expect(onDestroyMethod.mock.calls.length).toBe(1);
  });

});