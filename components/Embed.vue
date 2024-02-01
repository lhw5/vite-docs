<template>
  <div>
    <iframe :src="url" width="100%" height="400px"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>