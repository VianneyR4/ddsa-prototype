<template>
  <main>
    <div class="container-fluid">
      <div v-if="enactment">
        <div class="row">
          <div class="col">
            <!-- this status.finished origin ... -->
            <div v-if="status.finished">
              <slot name="finished">
                <div class="d-grid gap-2 mt-2">
                  <h3>Completed 2222222222222</h3>
                  <button class="btn btn-outline-secondary d-block" @click="restartEnactment">
                    <font-awesome-icon icon="redo-alt" /> Restart
                  </button>
                </div>
              </slot>
            </div>
            <div v-else>
              <p-task
                :task="activeTask"
                :enactment="enactment"
                @update-enactment="updateEnactment"
                :options="options"
                @send-trigger="sendTrigger"
                class="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { EnactmentMixin } from '@openclinical/proformajs-vue3-perform'

export default {
  mixins: [EnactmentMixin],
  emits: ['restart-enactment'],
  computed: {},
  methods: {
    restartEnactment() {
      this.view = 'task'
      this.$emit('restart-enactment')
    }
  }
}
</script>
