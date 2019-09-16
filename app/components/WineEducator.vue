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
          @tap="setWineType('chardonnay')"
        >
          <Image height="150" src="~/assets/chardonnay.png" />
          <Label height="50" class="label" text="Chardonnay" />
        </StackLayout>
        <StackLayout class="bottle" orientation="vertical" col="1" row="0">
          <Image height="150" src="~/assets/malbec.png" />
          <Label height="50" class="label" text="Malbec" />
        </StackLayout>

        <StackLayout orientation="vertical" class="bottle" col="0" row="1">
          <Image height="150" src="~/assets/sauvignonblanc.png" />
          <Label height="50" textWrap="true" class="label" text="Sauvignon Blanc" />
        </StackLayout>
        <StackLayout orientation="vertical" class="bottle" col="1" row="1">
          <Image height="150" src="~/assets/cabernetsauvignon.png" />
          <Label height="50" textWrap="true" class="label" text="Cabernet Sauvignon" />
        </StackLayout>

        <StackLayout orientation="vertical" class="bottle" col="0" row="2">
          <Image height="150" src="~/assets/rose.png" />
          <Label height="50" class="label" text="Rosé" />
        </StackLayout>
        <StackLayout orientation="vertical" class="bottle" col="1" row="2">
          <Image height="150" src="~/assets/syrah.png" />
          <Label height="50" class="label" text="Syrah" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </ScrollView>
</template>

<script>
import { mapActions, mapState } from "vuex";
import WineModal from "../components/WineModal";

export default {
  data() {
    return {
      wineModal: WineModal
    };
  },
  components: {
    modalWindow: WineModal
  },
  computed: {
    ...mapState(["wines"])
  },
  methods: {
    ...mapActions(["fetchWines"]),
    setWineType(wine) {
      this.fetchWines(wine).then(result => {
        this.showWines(wines);
      });
    },
    showWines(wines) {
      console.log(wines);
      this.$showModal(WineModal, {
        props: {
          wines: wines
        }
      });
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
