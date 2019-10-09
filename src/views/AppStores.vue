<template>
  <div class="app-stores">
    <div class="containt">
      <div class="row">
        <div class="col-md-12 type-nav">
          <a>熱門</a> |
          <a>新品上架</a> |
          <a>家庭</a> |
          <a>遊戲</a> |
          <a>休閒</a> |
          <a>教育</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-6 col-xs-12">
          <h3 class="pageTit">最新熱門</h3>
          <div class="row">
            <span v-if="loading">Loading…</span>
            <!-- <ul
              v-else
              class="posts"
            >
              <li
                v-for="post in posts"
                :key="post.title"
                class="post-item"
              >
                  <h1>{{ post.title }}</h1>
              </li>
            </ul>           -->
            <AppCard v-for="post in posts" v-bind:key="post.title" v-bind:post="post" />
          </div>
        </div>
      </div>
    </div>
    <div class="foot-nav"></div>
  </div>
</template>


<script>
import AppCard from "@/components/AppCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    AppCard
  },
  data() {
    return {
      loading: false,
      events: []
    }
  },  
  computed: {
    posts () {
      console.log("store",this.$store.state.posts);
      return this.$store.state.posts
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
        console.log("data---", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
    
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        console.log("postsAppStore----",this.$store);
        this.loading = false
      })
  }
};

</script>