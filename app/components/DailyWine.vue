<template>
  <ScrollView>
    <GridLayout rows="auto, auto" verticalAlignment="top">
      <Label row="0" class="page-title" text="Daily Wine" />
      <ActivityIndicator row="1" color="white" :busy="!loaded" />

      <StackLayout v-if="loaded" row="1" class="card">
        <Label textWrap="true" class="title" :text="wine.title+': '+wine.country" />
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
          <Label row="1" col="1" class="description" :text="'$'+wine.price" />
        </GridLayout>
        <Slider :value="wine.points" backgroundColor="green" />
      </StackLayout>
    </GridLayout>
  </ScrollView>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      wine: {
        name: "",
        description: "",
        type: "",
        price: "",
        country: ""
      },
      loaded: false
    };
  },

  methods: {
    async fetchDailyWine() {
      try {
        const response = await axios.get(
          "https://wineup.azurewebsites.net/api/getDailyWine"
        );
        this.wine = response.data.data[0];
        this.loaded = true;
      } catch (error) {
        alert(error);
      }
    }
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