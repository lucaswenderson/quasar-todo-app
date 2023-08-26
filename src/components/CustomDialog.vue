<template>
  <q-dialog v-model="showing">
    <q-card>
      <q-card-section>
        <q-input v-model="title" placeholder="Título" />
        <q-input v-model="description" placeholder="Descrição" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" @click="cancel" />
        <q-btn flat label="OK" @click="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      title: '',
      description: '',
      showing: this.value,
    };
  },
  watch: {
    value(val) {
      this.showing = val;
    },
    showing(val) {
      this.$emit('input', val);
      if (!val) {
        this.$emit('cancel');
      }
    },
  },
  methods: {
    submit() {
      this.$emit('submit', {
        title: this.title,
        description: this.description,
      });
      this.showing = false;
    },
    cancel() {
      this.showing = false;
    },
  },
};
</script>
