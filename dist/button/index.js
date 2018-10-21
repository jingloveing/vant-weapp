import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
import bougie from '../../../components/yt-bougie/bougie'
VantComponent({
  classes: ['loading-class'],
  mixins: [button, openType],
  props: {
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    },
    bougieType: String,
    targetUserId: String
  },
  computed: {
    classes: function classes() {
      var _this$data = this.data,
          type = _this$data.type,
          size = _this$data.size,
          block = _this$data.block,
          plain = _this$data.plain,
          round = _this$data.round,
          square = _this$data.square,
          loading = _this$data.loading,
          disabled = _this$data.disabled;
      return this.classNames("van-button--" + type, "van-button--" + size, {
        'van-button--block': block,
        'van-button--round': round,
        'van-button--plain': plain,
        'van-button--square': square,
        'van-button--loading': loading,
        'van-button--disabled': disabled,
        'van-button--unclickable': disabled || loading
      });
    }
  },
  methods: {
    onClick: function onClick(e) {
      const formId = e.detail.formId;

      bougie.trigger({
        formId: formId,
        type: this.data.bougieType,
        targetUserId: this.data.targetUserId,
      });

      if (!this.data.disabled && !this.data.loading) {
        this.$emit('click');
      }
    }
  }
});