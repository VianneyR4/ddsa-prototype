import { defineStore } from 'pinia'
import guidelinesJson from './guidelines.json'

export const useGuidelineJson = defineStore({
  id: 'guideline',
  state: () => ({
    guidelines: {}
  }),
  actions: {
    async assignDataFromJson() {
      try {
        this.guidelines = guidelinesJson
        console.log('guidelines: ', this.guidelines)
      } catch (error) {
        console.error('Error loading guidelines: ', error)
      }
    }
  },
  persist: true
})
