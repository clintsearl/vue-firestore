<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Employees</h4>
            </li>
            <li v-for='employee in employees' v-bind:key="employee.id" class="collection-item">
                <div class='chip'>{{employee.dept}} </div>
                {{employee.employee_id}}:{{employee.name}}

                <router-link class="secondary-content"
                 v-bind:to= "{name: 'view-employee', params: {employee_id: employee.employee_id}}">
                 <!-- this one wasn't working, maybe its the version, they switched from 4 to 50 -->
                 <!-- <i class="fas fa-user-circle"></i>  -->
                 <i class="fa fa-eye"></i>
                 </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class = "btn-floating btn-large red">
                <i class="fa fa-user-plus"></i>
                
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseinit'
export default {
    name:'dashboard',
    data () {
        return {
            employees: []

        }
    },
    created (){
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
    }
}
</script>
