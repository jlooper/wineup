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
//import RecipeModal from "../components/Modal";

export default {
  data() {
    return {
      pictureFromCamera: null,
      variety: [],
      //cheeseVariety: [],
      //recipeModal: RecipeModal,
      isChecked: false
    };
  },
  components: {
    //modalWindow: RecipeModal
  },
  computed: {
    //...mapState(["recipes"])
  },
  methods: {
    //...mapActions(["fetchRecipe"]),

    /*async setVariety() {
      await this.fetchRecipe(this.recipeIngredients[0]).then(result => {
        this.$refs.recipesbtn.nativeView.visibility = "visible";
      });
    },
    check(checked, data) {
      this.recipeIngredients = [];
      let capIngredient =
        data.substring(0, 1).toUpperCase() + data.substring(1);
      if (checked) {
        this.recipeIngredients.push(capIngredient);
      } else {
        var index = this.recipeIngredients.indexOf(capIngredient);
        if (index !== -1) this.recipeIngredients.splice(index, 1);
      }
      this.setIngredient();
    },
    showRecipes(recipes) {
      this.$showModal(RecipeModal, {
        props: {
          recipes: recipes
        }
      });
    },*/
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
          //this.setVariety(JSON.stringify(this.variety.text))
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


