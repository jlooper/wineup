<template>
  <StackLayout class="modal-page">
    <GridLayout
      class="modal-card full"
      rows="auto,auto"
      verticalAlignment="middle"
      style="height:100%"
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
            <Label :text="item.title" textWrap="true" style="font-size:30;padding-bottom:5" />
            <Label textWrap="true" style="padding-top:5" :text="item.description" />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </StackLayout>
</template>

<script>
export default {
  props: ["wines"]
};
</script>

