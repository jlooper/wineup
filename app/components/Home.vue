<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto,*,auto" columns="*">
      <Image src="~/assets/logo.png" width="200" row="0" col="0" />

      <!-- main components all on top of each other, since only 1 will be visible at any given time -->
      <component
        v-for="component in componentsArray"
        v-show="component === currentComponent"
        :key="component"
        :is="component"
        row="1"
        col="0"
      />
      <GridLayout class="bottom-nav" row="2" col="0" rows="*" columns="*,*,*,*">
        <!-- Bottom navigation -->
        <StackLayout row="0" col="0" :class="navigationButtonClasses('DailyWine')">
          <Image @tap="currentComponent = 'DailyWine'" src="~/assets/1.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="1" :class="navigationButtonClasses('WineEducator')">
          <Image @tap="currentComponent = 'WineEducator'" src="~/assets/0.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="2" :class="navigationButtonClasses('CheeseEducator')">
          <Image @tap="currentComponent = 'CheeseEducator'" src="~/assets/2.png" height="30" />
        </StackLayout>

        <StackLayout row="0" col="3" :class="navigationButtonClasses('CheeseIdentifier')">
          <Image @tap="currentComponent = 'CheeseIdentifier'" src="~/assets/3.png" height="30" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import DailyWine from "../components/DailyWine";
import CheeseIdentifier from "../components/CheeseIdentifier";
import WineEducator from "../components/WineEducator";
import CheeseEducator from "../components/CheeseEducator";

export default {
  data() {
    return {
      currentComponent: "DailyWine",
      componentsArray: [
        "DailyWine",
        "CheeseIdentifier",
        "WineEducator",
        "CheeseEducator"
      ]
    };
  },
  computed: {
    navigationButtonClasses() {
      return component => ({
        "nav-btn": true,
        colored: component === this.currentComponent
      });
    }
  },

  components: {
    DailyWine,
    CheeseIdentifier,
    WineEducator,
    CheeseEducator
  }
};
</script>

