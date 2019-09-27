<template>
  <ScrollView>
    <GridLayout rows="auto,auto,auto" verticalAlignment="top">
      <Label row="0" class="page-title" text="Learn About Wine" />
      <GridLayout row="2" columns="*,*" rows="*,*,*">
        <StackLayout
          class="bottle"
          orientation="vertical"
          col="0"
          row="0"
          @tap="setWineType('Chardonnay')"
        >
          <Image height="150" src="~/assets/chardonnay.png" />
          <Label height="50" class="label" text="Chardonnay" />
        </StackLayout>

        <StackLayout
          class="bottle"
          orientation="vertical"
          col="1"
          row="0"
          @tap="setWineType('Malbec')"
        >
          <Image height="150" src="~/assets/malbec.png" />
          <Label height="50" class="label" text="Malbec" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="bottle"
          col="0"
          row="1"
          @tap="setWineType('Sauvignon Blanc')"
        >
          <Image height="150" src="~/assets/sauvignonblanc.png" />
          <Label height="50" textWrap="true" class="label" text="Sauvignon Blanc" />
        </StackLayout>
        <StackLayout
          orientation="vertical"
          class="bottle"
          col="1"
          row="1"
          @tap="setWineType('Cabernet Sauvignon')"
        >
          <Image height="150" src="~/assets/cabernetsauvignon.png" />
          <Label height="50" textWrap="true" class="label" text="Cabernet Sauvignon" />
        </StackLayout>

        <StackLayout
          orientation="vertical"
          class="bottle"
          col="0"
          row="2"
          @tap="setWineType('Rosé')"
        >
          <Image height="150" src="~/assets/rose.png" />
          <Label height="50" class="label" text="Rosé" />
        </StackLayout>
        <StackLayout
          orientation="vertical"
          class="bottle"
          col="1"
          row="2"
          @tap="setWineType('Syrah')"
        >
          <Image height="150" src="~/assets/syrah.png" />
          <Label height="50" class="label" text="Syrah" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </ScrollView>
</template>

<script>
import WineModal from "../components/WineModal";
import axios from "axios";

export default {
  data() {
    return {
      wines: []
    };
  },

  methods: {
    async setWineType(wine) {
      //account for cold start and big data with async await
      try {
        const response = await axios.get(
          "https://wineup.azurewebsites.net/api/getTopWines?type=" + wine + ""
        );
        this.wines = response.data.data;
        this.openModal();
      } catch (error) {
        console.error(error);
      }
    },

    openModal() {
      this.$showModal(WineModal, { props: { wines: this.wines } });
    }
  }
};
</script>

<style>
.bottle {
  background: linear-gradient(51deg, rgb(24, 24, 24) 0%, rgb(7, 6, 7) 100%);
  border-radius: 20;
  margin: 5;
  padding: 5;
  text-align: center;
  height: 200;
  color: #fff;
}
</style>
