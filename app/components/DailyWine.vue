<template>
  <ScrollView>
    <GridLayout rows="auto, auto" verticalAlignment="top">
      <Label row="0" class="page-title" text="Daily Wine" />
      <!--<StackLayout row="1" class="card">
        <Label class="title" :text="'wine.name'+': '+'wine.country'" />
        <GridLayout rows="*,*" columns="2*,*">
          <Label
            class="description"
            verticalAlignment="top"
            textWrap="true"
            row="0"
            col="0"
            :text="wine.description"
          />
          <Image height="200" row="0" col="1" src="~/assets/malbec.png" />

          <Label row="1" col="0" class="description" :text="wine.winery" />
          <Label row="1" col="1" class="description" :text="wine.price" />
        </GridLayout>
        <Slider :value="wine.rating" backgroundColor="green" />
      </StackLayout>-->
    </GridLayout>
  </ScrollView>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["dailyWine"])
  },
  methods: {
    ...mapActions(["fetchDailyWine"])
  },
  created() {
    this.fetchDailyWine();
  }
};
</script>

<style>
.card {
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  margin: 5;
  padding: 5;
  text-align: center;
  height: 80%;
  color: #fff;
  background: linear-gradient(51deg, rgb(24, 24, 24) 0%, rgb(7, 6, 7) 100%);
}
</style>