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
        v-show="cheese.length==0"
        text="Sorry, no cheese!"
        verticalAlignment="top"
      />

      <StackLayout class="wine-card">
        <Label :text="cheese.type" textWrap="true" style="font-size:30;padding-bottom:5" />
        <Label textWrap="true" :text="cheese.description" />
        <Label textWrap="true" style="padding-top:5" :text="cheese.examples" />
      </StackLayout>
    </GridLayout>
  </ModalStack>
</template>

<script>
export default {
  props: ["cheese"],
  name: "CheeseModal"
};
</script>