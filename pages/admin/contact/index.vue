<template>
  <div>

    <div class="container">
    <h1>ข้อมูลผู้ติดต่อ</h1>
  
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Row</th>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Message</th>
          <th scope="col">Remark</th>
          <th scope="col">Manage</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(x,index) in loadData" :key="x.contactid">
          <td scope="row">{{index+1}}</td>
          <td>{{x.contactid}}</td>
          <td>{{x.contactemail}}</td>
          <td>{{x.contactaddress}}</td>
          <td>{{x.contactmessage}}</td>
          <td>{{x.remark}}</td>
          
          <td><a :href="'/admin/contact/'+x.contactid" class="btn btn-primary">จัดการ</a></td>
          <td><button class="btn" :class="genclass(x.statusglobalname)">{{x.statusglobalname}}</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data() {
    return {};
  },
  methods:{
    editData(data){
      console.log(data);
    },
    genclass(x){
      if(x=="New"){
        return "btn-info";
      }
      else if(x=="Done"){
        return "btn-primary";
      }
      else if(x=="Pending"){
        return "btn-warning";
      }
      else if(x=="Appove"){
        return "btn-success";
      }
      else{
        return "btn-dark";
      }
    }
  },
  async asyncData({ $axios, params, store }){
        const loadData = store.getters.getDataContactAdmin;
        return {loadData} ; 
    },
    mounted() {
    },
    
  computed: {
  }
};
</script>

<style>
</style>