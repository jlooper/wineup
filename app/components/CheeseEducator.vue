<template>
  <ScrollView>
    <GridLayout rows="auto,auto" verticalAlignment="top">
      <Label row="0" class="page-title" text="Learn about Cheese" />

      <GridLayout row="1" columns="*,*" rows="*,*,*">
        <StackLayout
          class="cheese"
          orientation="vertical"
          col="0"
          row="0"
          @tap="setCheeseType('Bloomy')"
        >
          <Image height="150" stretch="fit" src="~/assets/bloomy.jpg" />
          <Label height="50" class="label" text="Bloomy" />
        </StackLayout>

        <StackLayout
          class="cheese"
          orientation="vertical"
          col="1"
          row="0"
          @tap="setCheeseType('Blue')"
        >
          <Image height="150" stretch="fit" src="~/assets/blue.jpg" />
          <Label height="50" class="label" text="Blue" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="cheese"
          col="0"
          row="1"
          @tap="setCheeseType('Fresh')"
        >
          <Image height="150" stretch="fit" src="~/assets/fresh.jpg" />
          <Label height="50" textWrap="true" class="label" text="Fresh" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="cheese"
          col="1"
          row="1"
          @tap="setCheeseType('Hard')"
        >
          <Image height="150" stretch="fit" src="~/assets/hard.jpg" />
          <Label height="50" textWrap="true" class="label" text="Hard" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="cheese"
          col="0"
          row="2"
          @tap="setCheeseType('Semi-Soft')"
        >
          <Image height="150" stretch="fit" src="~/assets/semi-soft.jpg" />
          <Label height="50" class="label" text="Semi-Soft" />
        </StackLayout>
        <StackLayout
          orientation="vertical"
          class="cheese"
          col="1"
          row="2"
          @tap="setCheeseType('Washed-Rind')"
        >
          <Image height="150" stretch="fit" src="~/assets/washed-rind.jpg" />
          <Label height="50" class="label" text="Washed Rind" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </ScrollView>
</template>

<script>
import CheeseModal from "./CheeseModal";
import cheesedata from "../assets/cheesetypes.json";

export default {
  methods: {
    setCheeseType(type) {
      for (var i = 0; i < cheesedata.length; i++) {
        if (cheesedata[i].type == type) {
          var cheese = cheesedata[i];
          this.$showModal(CheeseModal, { props: { cheese: cheese } });
          break;
        }
      }
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
