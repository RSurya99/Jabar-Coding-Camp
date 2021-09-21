<template>
    <div class="text-center">
      <v-snackbar
        v-model="alert"
        multi-line
        bottom
        :color="color"
        timeout="3000"
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="close"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "alert",
    computed: {
        ...mapGetters({
            'status': 'alert/status',
            'color': 'alert/color',
            'text': 'alert/text',
        }),
        alert: {
            get(){
                return this.status;
            },
            set(value){
                this.setAlert({
                    status: value
                })
            }
        }
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set"
        }),
        close(){
            this.setAlert({
                status: false
            })
        }
    }
}
</script>