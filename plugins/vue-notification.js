import Vue from "vue";
import Notifications from "vue-notification";

Vue.use(Notifications);

export default ({ app }, inject) => {
  const warn = (options) => {
    Vue.notify({
      group: 'foo',
      type: 'warn',
      ...options
    })
  }

  const error = (options) => {
    Vue.notify({
      group: 'foo',
      type: 'error',
      ...options
    })
  }

  const success = (options) => {
    Vue.notify({
      group: 'foo',
      type: 'success',
      ...options
    })
  }

  const clear = (options) => {
    Vue.notify({
      group: 'foo',
      clean: true,
      ...options
    })
  }

  const notifyWrapper = {
    warn,
    error,
    success,
    clear
  };

  inject("notifyWrapper", notifyWrapper);
};
