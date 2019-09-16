<template>
  <ModalStack class="modal-container">
    <GridLayout
      class="modal-card modal"
      rows="auto,auto"
      verticalAlignment="middle"
      style="height:60%"
    >
      <Button row="0" @tap="$modal.close" class="fa close" text="x" horizontalAlignment="right" />

      <Label
        style="text-align:center;font-weight:bold"
        row="1"
        v-show="wines.length==0"
        text="Sorry, no wines!"
        verticalAlignment="top"
      />

      <ListView
        :items="wines"
        separatorColor="transparent"
        row="1"
        backgroundColor="transparent"
        height="100%"
      >
        <v-template>
          <StackLayout class="wine-card">
            <Label :text="item.name" textWrap="true" style="font-size:30;padding-bottom:5" />
            <Label textWrap="true" :text="item.variety" />
            <Label textWrap="true" style="padding-top:5" :text="item.description" />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </ModalStack>
</template>

<script>
export default {
  props: ["wines"],
  name: "WineModal"
};
</script>