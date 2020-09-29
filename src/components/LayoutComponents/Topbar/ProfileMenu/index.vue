<template>
	<!-- <a-dropdown :trigger="['click']" placement="bottomLeft" @visibleChange="addCount"> -->
  <a-dropdown :trigger="['click']" placement="bottomLeft" >
    <div :class="$style.dropdown">
      <a-badge :count="count">
        <a-avatar shape="square" icon="user" size="large" :class="$style.avatar"/>
      </a-badge>
    </div>
    <a-menu slot="overlay">
<!--      <a-menu-item>
        <div>
          <strong>Hello, Administrator</strong>
        </div>
        <div>
          <strong class="mr-1">Billing Plan:</strong> Professional
        </div>
        <div>
          <strong class="mr-1">Role:</strong> Admin
        </div>
      </a-menu-item>
      <a-menu-divider/> -->
     <!-- <a-menu-item>
        <div>
          <strong class="mr-1">Email:</strong> admin@mediatec.org
        </div>
        <div>
          <strong class="mr-1">Phone:</strong> -
        </div>
      </a-menu-item>
      <a-menu-divider/> -->

			<a-menu-item v-for='item in tips'>
			  <a @click="topage(item.salesNo)">
			    <i :class="$style.menuIcon" ></i> {{item.salesNo}}
			  </a>
			</a-menu-item>


			<a-menu-item style='text-align: center;' v-show='ifmore'>
			  <a @click="more()" >
			    <i  ></i> more...
			  </a>
			</a-menu-item>



      <!-- <a-menu-item>
        <a href="javascript: void(0);">
          <i :class="$style.menuIcon" class="icmn-user"></i> Edit Profile
        </a>
      </a-menu-item> -->

			<!-- <a-menu-item>
			  <a href="javascript: void(0);" @click="password()">
			    <i :class="$style.menuIcon" class="icmn-exit"></i> Change password
			  </a>
			</a-menu-item> -->

      <a-menu-item>
        <a href="javascript: void(0);" @click="logout">
          <i :class="$style.menuIcon" class="icmn-exit"></i> Logout
        </a>
      </a-menu-item>




    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0,
			tips:[],
			ifmore:false
    }
  },
	created: function() {


			//
			// this.gettips()

	},
  methods: {
    addCount() {
      this.count++
    },
    logout() {

			var today = new Date();
			var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24*0.1;
			today.setTime(targetday_milliseconds);
			document.cookie="accessToken=v;expires="+today.toUTCString();

      this.$auth.logout()


			// store.state.user.user = false
    },

		password(){
			this.$router.push("/ResetPass")
		},

		topage(salesno){

			// this.gettips()
			this.$router.push("/activity?reference="+salesno)

		},

		more(){

			this.$router.push("/Tips")

		},


		gettips(){
			this.$api.post('/ActivityList/findAllNotPage', null,
				r => {
					this.tips=[]

					if(r.content.length>3){
						this.count='3+'

						for (let i = 0; i < 3; i++) {
							this.tips.push(r.content[i])
						}

						this.ifmore=true

					}else{
						this.count=r.content.length
						for (let i = 0; i < r.content.length; i++) {
							this.tips.push(r.content[i])
						}

						this.ifmore=false

					}

					this.postller()

					// this.count='3+'
					// this.count=r.content.length
				});


		},

		postller(){
			var that=this
			setTimeout(function(){

				that.gettips()

			},2000)

		}

  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
