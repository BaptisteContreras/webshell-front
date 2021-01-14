<template>
 <v-container>
    <VpnCard :array-data="getTabData" />
   <br>
   <br>
   <h1>Vpn lié à l'active directory</h1>

   <VpnCard2 :array-data="getTabData2" />
 </v-container>
</template>

<script>
    import VpnCard from "@/components/MainPage/Vpn/VpnCard";
    import VpnCard2 from "@/components/MainPage/Vpn/VpnCard2";

  export default {
    name: "MainPage",
    components: {VpnCard,VpnCard2},
    data () {
      return {
        search : '',
        vpn : [],
        vpn2 : [],
        apiVpnHandler : null,
      }
    },
    methods : {
      handleVpn() {
        fetch(this.api + "/vpn").then(async (d) => {
          let tmp = document.createElement('div');
          tmp.innerHTML = JSON.parse(await d.text()).data;

          let dataCollected = {};
          let data2Collected = {};

          tmp.querySelectorAll('tr').forEach((el)=> {
            let currentId = el.getAttribute('id');
            if (currentId){
              if (dataCollected.currentId){
                data2Collected.currentId = el;
              }else{
                dataCollected.currentId = el;
              }
            }
          })

          this.vpn = Object.values(dataCollected).map((tr) => {
            return Array.from( tr.querySelectorAll('td')).map((td) => {
              return td.innerText;
            })
          })


          this.vpn2 = Object.values(data2Collected).map((tr) => {
            return Array.from( tr.querySelectorAll('td')).map((td) => {
              return td.innerText;
            })
          })

        }).catch((e) => {
          console.log(e);
        });
      },
    },

    computed : {
      getTabData() {
        return this.vpn.map((el) => {
          let res = {}
          for (let i = 0; i < this.headers.length;i++){
            if (i < el.length){
              res[this.headers[i].value] = el[i];
            }
          }
          return res;
        })
      },
      getTabData2() {
        return this.vpn2.map((el) => {
          let res = {}
          for (let i = 0; i < this.headers2.length;i++){
            if (i < el.length){
              res[this.headers2[i].value] = el[i];
            }
          }
          return res;
        })
      }
    },

    mounted() {
      this.handleVpn();
      this.apiVpnHandler = setInterval(this.handleVpn, 10000);

    },

    beforeDestroy() {
      clearInterval(this.apiVpnHandler);
      this.apiVpnHandler = null;
    }
  };
</script>

<style scoped>

</style>
