<template>
  <transition name="modal">
    <div v-if="visible">
      <div class="app-modal" @click.prevent="$modal.hide(name)"></div>
      <div class="app-modal-inner" :class="{'app-modal-inner--image' : image}">
        <a v-if="!image" href="#" @click.prevent="$modal.hide(name)" class="app-modal__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="100%" height="100%"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg>
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
    };
  },
  props: {
    name: {
      required: true,
      type: String
    },
    image: {
      required: false,
      type: Boolean
    },
    preventBackgroundScrolling: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    setVisible() {
      this.visible = true;
    },
    setHidden() {
      this.visible = false;
    },
    closeModalOnEscKey(e) {
      if (this.visible && e.keyCode === 27) this.setHidden();
    }
  },
  beforeMount() {
    this.$modal.$event.$on("show", (modal, params) => {
      if (this.preventBackgroundScrolling) {
        document.body.style.setProperty("overflow", "hidden");
        document.body.style.setProperty("max-height", "100vh");
      }
      if (this.name !== modal) {
        return;
      }

      this.params = params;

      if (!this.$listeners["before-open"]) {
        this.setVisible();
        return;
      }

      this.$emit("before-open", () => {
        this.setVisible();
      });
    });
    this.$modal.$event.$on("hide", modal => {
      if (this.preventBackgroundScrolling) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("max-height");
      }
      if (this.name === modal) {
        this.setHidden();
      }
    });
  },
  mounted() {
    document.addEventListener("keydown", this.closeModalOnEscKey);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.closeModalOnEscKey);
  }
};
</script>

<style lang="scss">
.app-modal {
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-transition: opacity 0.4s ease;
  transition: opacity 0.4s ease;
  cursor: pointer;
  overflow-y: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
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
  z-index: 999;
  border-radius: 8px;
}

.app-modal-inner--image {
  padding: 0;
  img {
    margin-bottom: 0;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 200ms;
}
.modal-enter,
.modal-leave-active {
  opacity: 1;
}
.app-modal__icon {
  position: absolute;
  top: 25px;
  right: 25px;
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
