import { VantComponent } from '../common/component';

VantComponent({
  relations: {
    '../radio-group/index': {
      type: 'ancestor'
    }
  },

  classes: ['icon-class', 'label-class'],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String
  },

  computed: {
    iconClass() {
      const { disabled, name, value } = this.data;
      return this.classNames('van-radio__icon', {
        'van-radio__icon--disabled': disabled,
        'van-radio__icon--checked': !disabled && name === value,
        'van-radio__icon--check': !disabled && name !== value
      });
    }
  },

  methods: {
    emitChange(value) {
      const instance = this.getRelationNodes('../radio-group/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },

    onChange(event) {
      this.emitChange(event.detail.value);
    },

    onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});