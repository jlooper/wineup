<template>
  <ScrollView>
    <GridLayout rows="auto,auto,auto" verticalAlignment="top" style="height:100%">
      <Label class="page-title" row="0" text="Say Cheese!" />
      <Button ref="picbtn" class="pic-button" row="1" text="Take a Pic" @tap="takePicture()" />

      <StackLayout class="card" row="2">
        <ListView :items="variety" separatorColor="transparent" class="score-card">
          <v-template>
            <Label
              class="ingredient-label"
              textWrap="true"
              :text="item.text+' - '+Math.round(item.confidence*100)+'%'"
            />
          </v-template>
        </ListView>

        <Image :src="pictureFromCamera"></Image>
      </StackLayout>
    </GridLayout>
  </ScrollView>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as camera from "nativescript-camera";
import { ImageSource } from "tns-core-modules/image-source";

export default {
  data() {
    return {
      pictureFromCamera: null,
      variety: [],
      isChecked: false
    };
  },

  methods: {
    takePicture() {
      this.variety = [];
      this.pictureFromCamera = null;
      camera
        .takePicture({ width: 224, height: 224, keepAspectRatio: true })
        .then(imageAsset => {
          new ImageSource().fromAsset(imageAsset).then(imageSource => {
            this.pictureFromCamera = imageSource;
            setTimeout(() => this.queryMLKit(imageSource), 500);
          });
        });
    },
    queryMLKit(imageSrc) {
      this.$firebase.mlkit.custommodel
        .useCustomModel({
          image: imageSrc,
          localModelFile: "~/assets/graph.tflite",
          labelsFile: "~/assets/labels.txt",
          maxResults: 6,
          modelInput: [
            {
              shape: [1, 224, 224, 3],
              type: "QUANT"
            }
          ]
        })
        .then(result => {
          for (var i = 0; i < result.result.length; i++) {
            this.variety.push(result.result[i]);
          }
        })
        .catch(errorMessage => {
          alert("ML Kit error: " + errorMessage);
        })
        .catch(err => {
          console.log("Error -> " + err.message);
        });
    }
  }
};
</script>

<style>
.score-card {
  margin: 5;
  color: white;
  border-radius: 5;
  font-size: 20;
}

.pic-button {
  font-family: "Black Jack";
  font-size: 20;
  padding: 10;
  margin: 5;
  color: white;
  border-radius: 5;
  width: 50%;
  background-color: #555555;
}

.ingredient-label {
  padding: 5;
  margin-bottom: 5;
}
</style>


