<template>
<div>
  <div class="tabs-menu--wrapper" :class="{'dark-theme': $store.state.settings.lightMode === 'true'}">
      <q-tabs
        v-model="tab"
        indicator-color="white"
        :active-color="$store.state.settings.lightMode === 'false' ? 'indigo-12' : 'white'"
        class="tabs-menu--wrapper-tabs"
        :class="{'text-grey-6' : $store.state.settings.lightMode === 'false'}"
      >
        <!-- <q-tab name="mails" icon="mail" label="Mails" /> -->
        <q-route-tab class="tabs-menu--wrapper-tab" to="/verto/dashboard" name="dashboard">
          <div class="svg-icon-wrapper flex flex-center">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 92"><g id="Group_2130" data-name="Group 2130"><path id="Rectangle_1631" data-name="Rectangle 1631" class="cls-1" d="M39.09,34.58h3.33a3.48,3.48,0,0,1,3.34,3.61v3.62a3.48,3.48,0,0,1-3.34,3.61H39.09a3.48,3.48,0,0,1-3.34-3.61V38.19A3.48,3.48,0,0,1,39.09,34.58Z"/><path id="Rectangle_1632" data-name="Rectangle 1632" class="cls-1" d="M51.33,34.58h3.33A3.48,3.48,0,0,1,58,38.19v3.62a3.48,3.48,0,0,1-3.34,3.61H51.33A3.48,3.48,0,0,1,48,41.81V38.19A3.48,3.48,0,0,1,51.33,34.58Z"/><path id="Rectangle_1633" data-name="Rectangle 1633" class="cls-1" d="M51.33,47.82h3.33A3.48,3.48,0,0,1,58,51.43v3.62a3.48,3.48,0,0,1-3.34,3.61H51.33A3.48,3.48,0,0,1,48,55.05V51.43A3.48,3.48,0,0,1,51.33,47.82Z"/><path id="Rectangle_1634" data-name="Rectangle 1634" class="cls-1" d="M39.09,47.82h3.33a3.48,3.48,0,0,1,3.34,3.61v3.62a3.48,3.48,0,0,1-3.34,3.61H39.09a3.48,3.48,0,0,1-3.34-3.61V51.43A3.48,3.48,0,0,1,39.09,47.82Z"/></g></svg>
          </div>
          <div class="text-tab-name">Dashboard</div>
        </q-route-tab>
        <q-route-tab class="tabs-menu--wrapper-tab" to="/verto/exchange" name="exchange">
          <div class="svg-icon-wrapper flex flex-center"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96 92" style="enable-background:new 0 0 96 92;" xml:space="preserve"><g> <path class="st0" d="M66.7,36.4c-0.3-0.2-0.7-0.1-0.9,0.2l-1.6,3.3c-1.8-5.4-6.2-9.6-11.8-11.1c-9.1-2.4-18.4,3-20.8,12 c-0.1,0.3,0.1,0.7,0.5,0.8c0.3,0.1,0.7-0.1,0.8-0.5c1.5-5.7,6.1-10,11.8-11.3c8-1.8,15.9,3,18.3,10.6l-3.6-1.8 c-0.3-0.1-0.7,0-0.8,0.3c-0.2,0.3,0,0.7,0.3,0.9l4.9,2.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0 c0.1,0,0.3-0.1,0.4-0.1c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.1-0.1,0.1-0.2l2.4-4.7C67.1,36.9,67,36.5,66.7,36.4z"/> <path class="st0" d="M63.9,50.4c-0.3-0.1-0.7,0.1-0.8,0.5c-1.5,5.7-6.1,10-11.8,11.3c-8,1.8-15.9-2.9-18.3-10.6l3.6,1.8 c0,0,0,0,0.1,0c0.3,0.1,0.7,0,0.8-0.3c0.1-0.3,0-0.7-0.3-0.8l-4.9-2.4c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0 c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0 c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0l-2.4,4.8c0,0.1-0.1,0.2-0.1,0.3c0,0.4,0.3,0.6,0.6,0.6 c0.2,0,0.5-0.1,0.6-0.3l1.7-3.3C34.2,59,40.6,63.8,48,63.8c7.7,0,14.4-5.2,16.4-12.6C64.5,50.8,64.3,50.5,63.9,50.4z"/> <path class="st0" d="M47.8,33.1C47.8,33.1,47.8,33.1,47.8,33.1c-3.3,0-6.5,1.3-8.9,3.7c-2.4,2.4-3.7,5.5-3.7,8.9c0,0.3,0,0.7,0,1 c0,0.5,0.5,1,1,1c0,0,0,0,0,0l0.1,0c0.6-0.1,1-0.6,0.9-1.1c0-0.3,0-0.6,0-0.9c0-2.9,1.2-5.7,3.4-7.7c4.2-3.9,10.9-3.6,14.8,0.7 c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7C54.7,34.6,51.3,33.1,47.8,33.1z"/> <path class="st0" d="M47.8,56.9C47.8,56.9,47.8,56.9,47.8,56.9c-2.9,0-5.6-1.2-7.6-3.3c0,0-0.1-0.1-0.1-0.1 c-0.4-0.4-1.1-0.4-1.5,0.1c-0.4,0.4-0.4,1.1,0,1.5c2.3,2.5,5.6,3.9,9,3.9c0,0,0,0,0,0c0.5,0,1.1,0,1.6-0.1 c6.9-0.9,11.7-7.2,10.8-14.1c-0.1-0.6-0.6-0.9-1.1-0.9c-0.3,0-0.5,0.2-0.7,0.4c-0.2,0.2-0.3,0.5-0.2,0.8c0.1,0.5,0.1,0.9,0.1,1.4 C58.3,52.2,53.6,56.9,47.8,56.9z"/> <path class="st0" d="M47.9,53.8l5-4.4c0.1-0.1,0.1-0.2,0.1-0.3v-9c0-0.2-0.2-0.4-0.4-0.4c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.3,0.2 L49,48.7h-2.9L42.7,40c0,0,0,0,0-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.1,0.1 c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1v9c0,0.1,0.1,0.2,0.1,0.3l5.2,4.4L47.9,53.8z M52.3,42.1v6.6h-2.5L52.3,42.1z M49.6,49.4h2.2 l-3.2,2.9L49.6,49.4z M48.8,49.4l-1.2,3.1l-1.2-3.1H48.8z M42.8,42l2.6,6.7h-2.6V42z M43.4,49.4h2.3l1.1,2.9L43.4,49.4z"/> </g> </svg></div>
          <div class="text-tab-name">Exchange</div>
        </q-route-tab>
        <q-route-tab v-if="false" class="tabs-menu--wrapper-tab" to="/verto/earn" disable name="earn">
          <div class="svg-icon-wrapper flex flex-center"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96 92" style="enable-background:new 0 0 96 92;" xml:space="preserve"><g> <path class="st0" d="M47.8,31.5c-8.3,0-15.1,6.8-15.1,15.1c0,8.3,6.8,15.1,15.1,15.1c8.3,0,15.1-6.8,15.1-15.1 C62.9,38.3,56.1,31.5,47.8,31.5z M47.8,61.6c-8.2,0-15-6.7-15-15s6.7-15,15-15c8.2,0,15,6.7,15,15S56,61.6,47.8,61.6z"/> <path class="st0" d="M47.8,62.2c-8.6,0-15.6-7-15.6-15.6S39.2,31,47.8,31c8.6,0,15.6,7,15.6,15.6S56.4,62.2,47.8,62.2z M47.8,32.2 c-8,0-14.5,6.5-14.5,14.5c0,8,6.5,14.5,14.5,14.5s14.5-6.5,14.5-14.5C62.2,38.6,55.8,32.2,47.8,32.2z"/> </g> <g id="Path_1275"> <path class="st0" d="M47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1 L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1 L47.9,57.1c-0.1,0-0.2,0-0.3-0.1c0,0,0,0,0,0l-7-5.9c-0.1-0.1-0.2-0.2-0.2-0.4V38.9c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.2 c0-0.1,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2c0,0,0,0.1,0,0.1 l4.6,11.6h3.9l4.3-11.6c0,0,0-0.1,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0.1 c0.1,0,0.1,0.1,0.2,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0,0.1v11.9c0,0.1,0,0.2-0.1,0.3l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0 c0,0,0,0,0,0l0,0h0c0,0,0,0,0,0L48.3,57c0,0,0,0,0,0C48.2,57.1,48.1,57.1,47.9,57.1L47.9,57.1C48,57.1,48,57.1,47.9,57.1L47.9,57.1 C48,57.1,48,57.1,47.9,57.1L47.9,57.1C48,57.1,48,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1 C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1L47.9,57.1C47.9,57.1,47.9,57.1,47.9,57.1z M46.3,51.2 l1.6,4l1.5-4H46.3z M42.3,51.2l4.4,3.7l-1.5-3.7H42.3z M50.5,51.2l-1.4,3.7l4.2-3.7H50.5z M50.9,50.2h3.3v-8.6L50.9,50.2z M41.4,50.2h3.4l-3.4-8.8V50.2z"/> </g> </svg></div>
          <div class="text-tab-name">Earn</div>
        </q-route-tab>
        <q-route-tab class="tabs-menu--wrapper-tab" to="/verto/history" name="history">
          <div class="svg-icon-wrapper flex flex-center">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 92"><path id="circular-graph" class="cls-1" d="M56.06,45.81h2.6a12.56,12.56,0,0,0-.86-3.88l-2.29,1.32A9.29,9.29,0,0,1,56.06,45.81Zm-4.52-10.5a12.44,12.44,0,0,0-4-1.13V36.8a10.33,10.33,0,0,1,2.71.76l1.3-2.25Zm2.78,5.62,2.27-1.3a12.29,12.29,0,0,0-2.83-3l-1.31,2.26a9.9,9.9,0,0,1,1.87,2ZM46.23,56.46a9.87,9.87,0,0,1-1.3-19.66V34.18A12.48,12.48,0,1,0,58.56,48.4H55.93a9.88,9.88,0,0,1-9.7,8.06Z"/></svg>
          </div>
          <div class="text-tab-name">History</div>
        </q-route-tab>
        <q-route-tab class="tabs-menu--wrapper-tab" to="/verto/defi" name="defi">
          <div class="svg-icon-wrapper flex flex-center">
            <svg class="svg-icon defi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 66 68" style="enable-background:new 0 0 66 68;" xml:space="preserve"> <g> <path class="st0" d="M32,20.7l4.9,4.2C37,25,37.2,25,37.3,25c0.1,0,0.2,0,0.3-0.1l4.8-4.3c0,0,0,0,0,0c0.1-0.1,0.1-0.2,0.1-0.3v0 c0,0,0,0,0,0v-8.6c0,0,0-0.1,0-0.1c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.2-0.1c0,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1l-3.1,8.3H36l-3.2-8.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.1-0.2 c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1 V20c0,0.1,0,0.1,0,0.2C31.7,20.4,31.9,20.6,32,20.7z M41.6,14.4v5.4h-2L41.6,14.4z M39.2,20.7h1.6l-2.3,2.1L39.2,20.7z M38.1,20.7 l-0.9,2.4l-0.9-2.4H38.1z M36.1,22.8l-2.5-2.1h1.6L36.1,22.8z M32.8,14.3l2.1,5.4h-2.1V14.3z"/> <path class="st0" d="M37.2,30.1c6.6,0,12-5.4,12-12s-5.4-12-12-12s-12,5.4-12,12S30.5,30.1,37.2,30.1z M37.2,8c5.5,0,10,4.5,10,10 s-4.5,10-10,10s-10-4.5-10-10S31.6,8,37.2,8z"/> <path class="st0" d="M47.4,44.4c-0.6,0-1,0.4-1,1v6.7c0,0.7-0.5,1.2-1.2,1.2H15.6c0,0,0,0,0,0c-0.7,0-1.2-0.5-1.2-1.2V22.5 c0-0.7,0.5-1.2,1.2-1.2h6.7c0.6,0,1-0.4,1-1s-0.4-1-1-1h-6.7c-1.8,0-3.2,1.4-3.2,3.2v29.6c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h29.6 c1.8,0,3.2-1.5,3.2-3.2v-6.7C48.4,44.9,48,44.4,47.4,44.4z"/> <path class="st0" d="M50.6,26.9c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4S59,40,59,35.3S55.2,26.9,50.6,26.9z M50.6,41.8 c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4s6.4,2.9,6.4,6.4S54.1,41.8,50.6,41.8z"/> <path class="st0" d="M27,38.5c0,3.8,3.1,6.9,6.9,6.9s6.9-3.1,6.9-6.9c0-3.8-3.1-6.9-6.9-6.9S27,34.7,27,38.5z M38.8,38.5 c0,2.7-2.2,4.9-4.9,4.9S29,41.2,29,38.5c0-2.7,2.2-4.9,4.9-4.9S38.8,35.8,38.8,38.5z"/> </g> </svg>
          </div>
          <div class="text-tab-name">DeFi</div>
        </q-route-tab>
        <q-route-tab class="tabs-menu--wrapper-tab" to="/verto/profile" name="profile">
          <div class="svg-icon-wrapper flex flex-center"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 92"><g id="icon"><path id="path" class="cls-1" d="M48.22,46.62a5.89,5.89,0,1,1,5.89-5.89,5.89,5.89,0,0,1-5.89,5.89Zm0-2.14a3.75,3.75,0,1,0-3.75-3.75h0a3.75,3.75,0,0,0,3.75,3.75Zm11.15,7.58a6.81,6.81,0,0,1,.43,1.78c.08.55.14,1.1.19,1.65v.23a2.68,2.68,0,0,1-2.67,2.68H39.11a2.67,2.67,0,0,1-2.67-2.68v-.23c0-.55.11-1.1.19-1.65a6.81,6.81,0,0,1,.43-1.78c.82-1.78,6.89-4.37,11.15-4.37s10.33,2.59,11.15,4.38Zm-2.06.82a4.74,4.74,0,0,0-.62-.46,16,16,0,0,0-2.25-1.16,16.48,16.48,0,0,0-6.22-1.43A16.48,16.48,0,0,0,42,51.26a15.31,15.31,0,0,0-2.24,1.16,5.64,5.64,0,0,0-.63.46L39,53a7.58,7.58,0,0,0-.24,1.15c0,.36-.1.75-.14,1.14,0,.2,0,.36,0,.46a.54.54,0,0,0,.53.51H57.33a.54.54,0,0,0,.53-.51c0-.1,0-.26,0-.46,0-.38-.08-.76-.14-1.14A6.53,6.53,0,0,0,57.44,53l-.13-.12Z"/></g></svg></div>
          <div class="text-tab-name">Profile</div>
        </q-route-tab>
      </q-tabs>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabsMenu',
  data () {
    return {
      tab: 'profile'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/styles/variables.scss";
  .tabs-menu{
    &--wrapper{
      position: fixed;
      z-index: 999;
      width: 100%;
      bottom: 0px;
      background-color: #fff;
      border-top: 1px solid rgba(#B0B0B0, .26);
      /deep/ .q-tabs__content{
        justify-content: space-evenly;
        box-shadow: 0px -11px 31px 0px rgba(0, 0, 0, 0.15);
      }
      /deep/ .q-tab--inactive {
        opacity: 0.95;
      }
      &-tab{
        padding: 0px 10px;
        flex-basis: 20%;
        /deep/ .q-tab{
            &__content{}
            &__label{
                font-size: 12px;
                text-transform: initial;
            }
        }
      }
      &-tabs{
        .tabs-menu--wrapper-tab{
          .svg-icon-wrapper{
            overflow: hidden;
            width: 60px;
            height: 50px;
          }
          .svg-icon{
            fill: #B0B0B0;
            width: 48px;
            height: 50px;
            max-width: unset;
            transform: scale(1.9);
            &.defi{
              transform: scale(.9) !important;
            }
          }
          .text-tab-name{
            font-size: 14px;
            font-family: $Titillium;
            font-weight: $light;
            text-transform: initial;
            color: #B0B0B0;
            margin-top: -10px;
            margin-bottom: 8px;
          }
          &.q-router-link--active{
            .svg-icon{
              fill: #7272FA;
            }
            .text-tab-name{
              color: #7272FA;
            }
          }
        }
      }
    }
  }
  .dark-theme{
    &.tabs-menu--wrapper{
      background-color: #04111F;
      border: 1px solid #627797;
      .q-tabs__content{
        box-shadow: 0px -11px 31px 0px rgba(#627797, 0.15);
      }
    }
  }
</style>
