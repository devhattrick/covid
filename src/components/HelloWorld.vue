<template>
  <div class="box">
    <v-container class="contain">
    <div class="ma-5">
      <h1>รายงานสถานการณ์ โควิด-19 </h1>
      <h2>{{this.APICOVID.UpdateDate}}</h2>
    <div class="detail pt-5">
      <v-row >
        <v-col>
          <v-sheet
             color="red"
             elevation="3"
             rounded
             width="250"
             class="text-center white--text pa-2"
          >
            <v-icon
              size="40"
              color="#FEF325 "
            >mdi-virus</v-icon>
            <p>ยอดผู้ติดเชื้อล่าสุด</p>
            <p>
              {{Intl.NumberFormat().format(this.APICOVID.todayCases)}}
            </p>
          </v-sheet>
        </v-col>
        <v-col>
              <v-sheet
                color="#5a5c5d"
                elevation="3"
                rounded
                width="250"
                class="text-center white--text pa-2"
              >
                <v-icon
                size="40"
                  color="white"
                >mdi-coffin</v-icon>
                <p>จำนวนผู้เสียชีวิตล่าสุด</p>
                <p>{{Intl.NumberFormat().format(this.APICOVID.todayDeaths)}}</p>
              </v-sheet>
              </v-col>
              <v-col>
              <v-sheet
                color="#ff9800"
                elevation="3"
                rounded
                width="250"
                class="text-center white--text pa-2"
              >
                <v-icon
                  size="40"
                  color="white"
                >mdi-emoticon-sick</v-icon>
                <p>ป่วยสะสม ตั้งแต่ 1 เมษา</p>
                <p>{{Intl.NumberFormat().format(this.APICOVID.cases)}}</p>
              </v-sheet>
              </v-col>
              <v-col>
              <v-sheet
                color="rgb(16 16 16)"
                elevation="3"
                rounded
                width="250"
                class="text-center white--text pa-2"
              >
                <v-icon
                size="40"
                color="white"
                >mdi-coffin</v-icon>
                <v-icon
                  size="40"
                  color="white"
                >mdi-coffin</v-icon>
                <p>เสียชีวิตสะสมตั้งแต่ปี 63</p>
                <p>{{Intl.NumberFormat().format(this.APICOVID.deaths)}}</p>
              </v-sheet>
              </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet
             color="#8AC84F"
             elevation="3"
             rounded
             width="250"
             class="text-center white--text pa-2"
          >
            <v-icon
              size="40"
              color="#FFFFFF"
            >mdi-account-multiple-plus</v-icon>
            <p>หายป่วยล่าสุด</p>
            <p>
              {{Intl.NumberFormat().format(this.APICOVID.todayRecovered)}}
            </p>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
             color="#F96D6D  "
             elevation="3"
             rounded
             width="250"
             class="text-center white--text pa-2"
          >
            <v-icon
              size="40"
              color="#FFFFFF  "
            >mdi-emoticon-sick</v-icon>
            <p>อาการสาหัส</p>
            <p>
              {{Intl.NumberFormat().format(this.APICOVID.critical)}}
            </p>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
             color="#69CD4B "
             elevation="3"
             rounded
             width="250"
             class="text-center white--text pa-2"
          >
            <v-icon
              size="40"
              color="white"
            >mdi-hospital-box</v-icon>
            <p>หายป่วยสะสม</p>
            <p>
              {{Intl.NumberFormat().format(this.APICOVID.recovered)}}
            </p>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
             color="#6BD7D9 "
             elevation="3"
             rounded
             width="250"
             class="text-center white--text pa-2"
          >
            <v-icon
              size="40"
              color="#FEF325 "
            >mdi-hospital</v-icon>
            <p>กำลังรักษา</p>
            <p>
              {{Intl.NumberFormat().format(this.APICOVID.active)}}
            </p>
          </v-sheet>
        </v-col>
      </v-row>
      </div>
    </div>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  async mounted() {
    const api = await axios.get('https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR1BMOAV5pSCdb3T_RZxrqXBlJoL7ARteywwfTcjF7XkLlMMdYYEHt7wjKI')
    this.APICOVID = api.data
  },
  data() {
    return {
      APICOVID: [],
      recovered: '',
      Date: new Date().toDateString()
    }
  }
}
</script>

<style>
.box{
  background-image:url(./COVID-19_header.jpg);
  background-size: cover;
  height: 100%;
}
*{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.detail{
  font-size: 2rem;
}
</style>
