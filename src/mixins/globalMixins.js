import {mapActions, mapGetters} from 'vuex'
import globalMethods from './global/methods'
import globalComputed from './global/computed'
import globalData from './global/data'


console.log({...globalComputed, ...mapGetters})
export default  {
  data () {return {...globalData}},
  methods: {...globalMethods, ...mapActions},
  computed: {...globalComputed, ...mapGetters}
}
