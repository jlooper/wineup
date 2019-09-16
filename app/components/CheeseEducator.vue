<template>
  <ScrollView>
    <GridLayout rows="auto,auto,auto" verticalAlignment="top">
      <Label row="0" class="page-title" text="Learn about Cheese" />
      <Button
        row="1"
        style="visibility:collapsed"
        ref="recipesbtn"
        class="recipe-card recipe-btn"
        text="Recommendation"
      />
      <GridLayout row="2" columns="*,*" rows="*,*,*" @tap="showCheese(bloomy)">
        <StackLayout class="cheese" orientation="vertical" col="0" row="0">
          <Image height="150" stretch="fit" src="~/assets/bloomy.jpg" />
          <Label height="50" class="label" text="Bloomy" />
        </StackLayout>

        <StackLayout class="cheese" orientation="vertical" col="1" row="0" @tap="showCheese(blue)">
          <Image height="150" stretch="fit" src="~/assets/blue.jpg" />
          <Label height="50" class="label" text="Blue" />
        </StackLayout>

        <StackLayout orientation="vertical" class="cheese" col="0" row="1" @tap="showCheese(fresh)">
          <Image height="150" stretch="fit" src="~/assets/fresh.jpg" />
          <Label height="50" textWrap="true" class="label" text="Fresh" />
        </StackLayout>

        <StackLayout orientation="vertical" class="cheese" col="1" row="1" @tap="showCheese(hard)">
          <Image height="150" stretch="fit" src="~/assets/hard.jpg" />
          <Label height="50" textWrap="true" class="label" text="Hard" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="cheese"
          col="0"
          row="2"
          @tap="showCheese(semi-soft)"
        >
          <Image height="150" stretch="fit" src="~/assets/semi-soft.jpg" />
          <Label height="50" class="label" text="Semi-Soft" />
        </StackLayout>
        <StackLayout
          orientation="vertical"
          class="cheese"
          col="1"
          row="2"
          @tap="showCheese(washed-rind)"
        >
          <Image height="150" stretch="fit" src="~/assets/washed-rind.jpg" />
          <Label height="50" class="label" text="Washed Rind" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </ScrollView>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CheeseModal from "../components/CheeseModal";

export default {
  data() {
    return {
      cheeseModal: CheeseModal
    };
  },
  components: {
    modalWindow: CheeseModal
  },
  computed: {
    ...mapState(["cheese"])
  },
  methods: {
    ...mapActions(["fetchCheese"]),
    setCheeseType(type) {
      this.fetchRecipe(type).then(result => {
        this.showCheese(result);
      });
    },
    showCheese(cheese) {
      this.$showModal(CheeseModal, {
        props: {
          cheese: cheese
        }
      });
    }
  }
};
</script>

<style>
.cheese {
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  margin: 5;
  padding: 5;
  text-align: center;
  height: 200;
  color: #fff;
  background: linear-gradient(51deg, rgb(24, 24, 24) 0%, rgb(7, 6, 7) 100%);
}
</style>
