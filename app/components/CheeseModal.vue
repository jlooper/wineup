<template>
  <StackLayout class="modal-page">
    <GridLayout
      class="modal-card half"
      rows="auto,auto"
      verticalAlignment="middle"
      style="height:100%"
    >
      <Button row="0" @tap="$modal.close" class="fa close" text="x" horizontalAlignment="right" />

      <Label
        style="text-align:center;font-weight:bold"
        row="1"
        v-show="cheese.length==0"
        text="Sorry, no cheese!"
        verticalAlignment="top"
      />

      <StackLayout row="1" class="wine-card">
        <Label :text="cheese.type" textWrap="true" class="modal-title" />
        <Label class="modal-text" textWrap="true" :text="cheese.description" />
        <Label
          class="modal-text"
          textWrap="true"
          style="padding-top:10"
          :text="'🧀: '+cheese.examples"
        />
        <Label
          class="modal-text"
          textWrap="true"
          style="padding-top:10"
          :text="'🍷: '+cheese.pairing"
        />
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>
<script>
export default {
  props: ["cheese"]
};
</script>
