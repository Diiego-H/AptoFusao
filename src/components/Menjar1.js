export default {
  props: {
    title: String,
    grams: String,
    protein: String,
    fat: String,
    carbs: String,
    kcal: String

  },

  data() {
    return {
      title: this.title,
      grams: this.grams,
      protein: this.protein,
      fat: this.fat,
      carbs: this.carbs,
      kcal: this.kcal,
      
    };
  },
  methods: {
    
  },

  template: `
    <div
      class="col-4 me-2 one-day-wrapper"
      style="
        height: auto;
        background-color: #f2f2f2;
        border: none;
        padding: 5px;
        position: relative;
      "
    >
      <div class="p-1" style="display: flex; height: auto; align-items: center; justify-content: center; ">
        <strong>{{ title }}</strong>
        
      </div>
      <div style="color: #999; display:flex; height: auto; align-items: center; justify-content: center; ">{{ grams }} g</div>
      
        <div class="my-2" style="display: flex; align-items: center; justify-content: center; ">
          {{ kcal }} kcal - {{ carbs }} g carbs
        </div>
        <div class="my-2" style="display: flex; align-items: center; justify-content: center; ">
          {{ fat }} g grasa - {{ protein }} g proteïna
        </div>

        <div class="overlay_menjar"></div>
      
    </div>
  `
};
