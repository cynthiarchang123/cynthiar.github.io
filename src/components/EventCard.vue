<template>
  <div>
  <a :href="$router.resolve({ name: 'event-show', params: { id: event.id } }).href">
  <!-- <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }"> -->
    <div class="event-card -shadow col-lg-2 col-md-3 col-sm-4 col-xs-4 appGrp">
      <!-- <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>-->
      <!-- <BaseIcon name="users">{{ event.attendees }} attending</BaseIcon> -->
      <div class="appGrpBox">
        <ul>
          <li>
            <!-- C:\Lab\AppStore-backend\AppStore\storage\app\public\icon
            C:\Lab\AppStore-backend\AppStore\storage\app\public\icon -->
            <!-- /storage/icon/191013082742000000.png -->
            <!-- {{ event.appIcon }} -->
              <img :src="imgPath + event.appIcon" />
          </li>
          <li>
            <h4>{{ event.appName}}</h4>
            <!-- <em>{{ event.memberName}}</em> -->
          </li>
          <li>
            <i class='fas fa-star' v-for="(star,index) in event.star" :key="index"></i>
            <!-- <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='far fa-star'></i>
            <i class='far fa-star'></i> -->
          </li>
        </ul>
      </div>
    </div>
  <!-- </router-link> -->
  </a>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      imgPath: window.sessionStorage.imgPath,
      appIcon_src:this.event.appIcon
    };
  },
  props: {
    event: Object
  }
  // created() {
  //   //this.eventObj = JSON.parse(this.eventdata);
  //   //console.log("eventObj-",event.target);
  // }
}
</script>

<style scoped>
/*...*/
</style>