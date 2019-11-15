new Vue({
  el: '#exercise',
  data: {
    hasEffect: false,
    textColor: 'text-color',
    customClass: 'custom-class',
    changeBackground: true,
    anotherForm: {
      borderRadius: 50 + 'px'
    },
    showProgress: {
      width: '0px'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.hasEffect = !vm.hasEffect;
      }, 1000)
    },
    startProgress: function () {
      var vm = this;
      var progressWidth = 0;
      setInterval(function () {
        if (progressWidth < 200) {
          progressWidth += 20;
          vm.showProgress.width = progressWidth + 'px';
        }
      }, 500)
    }
  }
});
