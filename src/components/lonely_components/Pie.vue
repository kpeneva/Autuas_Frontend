<script>
import { Pie, mixins} from 'vue-chartjs';
export default {
    extends: Pie,
    props: {
        chartData: {
            type: Object,
            default: null
        }
    },
    async mounted(){
        //this.chartData is created in the mixin
        //if you want to pass options -> create a local options object
        this.renderChart(this.chartData)
    }
}

</script>


