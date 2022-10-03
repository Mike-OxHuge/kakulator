<template>
  <v-container>
    <v-btn block color="primary" append-icon="mdi-plus" @click="addNewDialog = true">
      {{ t("profile.add.activities") }}
    </v-btn>
    <v-dialog v-model="addNewDialog">
      <v-card>
        <v-card-title> fill the fields </v-card-title>
        <v-container>
          <v-text-field label="name" v-model="newActivity.name" />
          <v-text-field
            v-for="layer in listofLayers"
            :key="layer"
            type="number"
            v-model="newActivity[`per${layer}`]"
            :label="t('activities.set.layers', { layer })"
          />
        </v-container>
        <v-card-actions>
          <v-btn @click="addActivity" block color="primary"> Add </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel
        multiple
        v-for="action in useActivity.activities"
        :key="action.id"
      >
        <v-expansion-panel-title>
          {{ action.name }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p v-if="action.per4 !== 0">
            {{ action.per4 }}x<v-icon size="x-large">mdi-paper-roll</v-icon>
            sheets
          </p>
          <p v-if="action.per3 !== 0">
            {{ action.per3 }}x<v-icon size="default">mdi-paper-roll</v-icon>
            sheets
          </p>
          <p v-if="action.per2 !== 0">
            {{ action.per2 }}x<v-icon size="x-small">mdi-paper-roll</v-icon>
            sheets
          </p>
          <v-btn
            color="error"
            prepend-icon="mdi-delete"
            append-icon="mdi-delete"
            block
            @click="useActivity.removeActivity(action)"
          >
            delete
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore, useActivityStore } from "../stores";
import type { ActivityType } from "../stores/activity";
const newActivity: Ref<ActivityType> = ref({
	name: "",
	per2: 0,
	per3: 0,
	per4: 0,
});
const { t } = useI18n();
const userSettings = useUserStore();
const useActivity = useActivityStore();
const listofLayers = computed(() => {
	let result = [];
	if (userSettings.choices.includeTwoLayers) result.push(2);
	if (userSettings.choices.includeThreeLayers) result.push(3);
	if (userSettings.choices.includeFourLayers) result.push(4);
	return result;
});

const addNewDialog = ref(false);
const addActivity = () => {
	useActivity.addActivity(newActivity.value);
	addNewDialog.value = false;
	newActivity.value = useActivity.activitySchema;
};
</script>
