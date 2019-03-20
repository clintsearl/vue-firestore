<template>

    <div id="fire-employee">
        <h3>Fire Employees</h3>
        <p>The company needs to slim down and we need to empty out the database. <br/>
        Thank you for your hard work and service.</p>
        
        <a @click="deleteAll" id = "button" class="waves-effect waves-light btn-large orange"><i class="material-icons left">sentiment_very_dissatisfied</i>Fire ALL Employees</a>
    </div>
</template>

<script>

import db from './firebaseinit'
export default {
    name:'fire-employee',
    data () {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
        
    },created (){
        db.collection('employees').orderBy('employee_id', 'asc').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    //you can console.log things here
                    const data = {
                        // here you are pulling in the data each thing that is in your database
                        'id': doc.id,
                        'employee_id': doc.data().employee_id,
                        'name': doc.data().name,
                        'dept': doc.data().dept,
                        'position' : doc.data().position
                    }
                    //assign the data to the employees:[] array from above
                    this.employees.push(data)
                })
            }
        )
    },
   
    methods: {
    deleteAll (){
        if(confirm("Are you sure?")){
            db.collection('employees')
            .where('employee_id', '>','001' )
            .get().then(
                querySnapshot =>{
                    querySnapshot.forEach(doc =>{
                       doc.ref.delete()
                       //router to do a redirect
                       this.$router.push('/')

                    })
                })
            }
        }
    }
}
</script>
<style>
    #button {
       color:black;
       display:flex;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
      height: 70px;
      

    }
    .fire-employee{
        display: flex;
    }
    
</style>