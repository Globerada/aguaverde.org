<template>
  <transition name="modal">
    <div v-if="visible">
      <div class="app-modal" @click.prevent="$modal.hide(name)"></div>
      <div class="app-modal-inner">
        <a href="#" @click.prevent="$modal.hide(name)">
          <svg class="modal__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="100%" height="100%"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg>
        </a>
        <slot name="body" :params="params"/>
      </div>    
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      params: {},
      visible: false
    }
  },
  props: {
    name: {
      required: true,
      type: String
    }
  },
  methods: {
    setVisible () {
      this.visible = true
    },
    setHidden () {
      this.visible = false
    },
    closeModalOnEscKey(e) {
      if (this.visible && e.keyCode === 27) this.setHidden()
    },    
  },
  beforeMount () {
    this.$modal.$event.$on('show', (modal, params) => {
      if (this.name !== modal) { 
        return 
      }
      this.params = params

      if (!this.$listeners['before-open']) {
        this.setVisible()
        return
      }

      this.$emit('before-open', () => {          
        this.setVisible()
      })     
    })
    this.$modal.$event.$on('hide', (modal) => {
      if (this.name === modal) {
        this.setHidden()
      }
    })    
  },
  mounted() {
    document.addEventListener('keydown', this.closeModalOnEscKey)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.closeModalOnEscKey)
  }
}
</script>

<style lang="scss">
.app-modal {
  background-color: rgba(0,0,0,.6);
  -webkit-transition: opacity .4s ease;
  transition: opacity .4s ease;
  cursor: pointer;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index:999;
}
.app-modal-inner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  z-index:999;
  border-radius: 8px;
}
.modal-enter-active, .modal-leave-active {
  transition: all 200ms;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
}
.modal__icon {
  position: absolute;
  top: -15px;
  right: -15px;
  color: #000;
  display: inline-block !important;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

</style>
