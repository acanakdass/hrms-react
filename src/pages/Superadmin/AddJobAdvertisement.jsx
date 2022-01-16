
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { Form, Button, FormField, FormGroup, Label, Header, Divider } from 'semantic-ui-react';
import JobTitleService from '../../services/jobTitleService';
import CityService from '../../services/cityService';
import CustomTextArea from '../../utilities/customFormControls/CustomTextArea';
import CustomDropdownInput from '../../utilities/customFormControls/HrmsSelectInput';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import AuthService from '../../services/authService';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import CustomInput from '../../utilities/customFormControls/CustomInput';

const AddJobAdvertisement = () => {


   //FormValues
   const [cityId, setCityId] = useState()
   const [jobTitleId, setJobTitleId] = useState()
   const [description, setDescription] = useState()
   const [employerId, setEmployerId] = useState()
   const [maxSalary, setMaxSalary] = useState()
   const [minSalary, setMinSalary] = useState()
   const [quota, setQuota] = useState()
   const [workTimeId, setWorkTimeId] = useState()
   const [workTypeId, setWorkTypeId] = useState()
   const [expirationDate, setExpirationDate] = useState()



   const [jobTitles, setJobTitles] = useState([])
   const [cities, setCities] = useState([])
   const [workTypes, setWorkTypes] = useState([])
   const [workTimes, setWorkTimes] = useState([])


   let jobTitleService = new JobTitleService();
   let jobAdvertService = new JobAdvertisementService();
   let cityService = new CityService();
   let authService = new AuthService();
   useEffect(() => {

      let token = localStorage.getItem('bearer')
      authService.getUserByToken(token).then(res => {
         setEmployerId(res.data.data?.id)
      }).catch(er => {
         console.log(er)

      })


      jobTitleService.getAll().then(res => {
         console.log(res.data.data)
         const jobTitlesData = res.data.data.map(data => {
            return { value: data.id, text: data.title }
         })
         setJobTitles(jobTitlesData)
      })


      cityService.getAll().then(res => {
         console.log(res.data.data)
         const citiesData = res.data.data.map(data => {
            return { value: data.id, text: data.cityName }
         })
         setCities(citiesData)

      }).catch(err => console.log(err))


      jobAdvertService.getAllWorkTimes().then(res => {
         console.log(res.data.data)
         const workTimesData = res.data.data.map(data => {
            return { value: data.id, text: data.title }
         })
         setWorkTimes(workTimesData)

      }).catch(err => console.log(err))


      jobAdvertService.getAllWorkTypes().then(res => {
         console.log(res.data.data)
         const workTypesData = res.data.data.map(data => {
            return { value: data.id, text: data.title }
         })
         setWorkTypes(workTypesData)

      }).catch(err => console.log(err))


   }, [])
   useEffect(() => {


   }, [])
   const [isLoading, setIsLoading] = useState(false);


   const handleSubmit = (values) => {
      console.log(values)
      // setIsLoading(true);
      // let systemEmployeeService = new SystemEmployeeService();
      // systemEmployeeService.add(values).then(res => {
      //    if (res.data.success) {
      //       toast.success(res.data.message);
      //       // setAddedUserId(res.data.data);
      //       console.log(res.data)
      //       setIsLoading(false);
      //       // props.setstep('photo');
      //       // props.setAddedUser(res.data.data)
      //    } else {
      //       toast.error(res.data.message)
      //       setIsLoading(false)
      //    }
      // }).finally(() => {
      //    setIsLoading(false)
      // });

   }
   return (
      <div style={{ margin: '2em 10em' }}>
         <div style={{ border: '0,5px solid', borderColor: 'lightgray', padding: '3em' }}>
            <Header size='large' textAlign='center'>Create Job Advert</Header>
            <Divider />
            <br />

            <Form>
               <FormGroup widths='equal'>
                  <CustomDropdownInput
                     onChange={(e, { value }) => setJobTitleId(value)}
                     label='Job Title'
                     placeholder='Select Job Title'
                     options={jobTitles}
                  />
                  <CustomDropdownInput
                     onChange={(e, { value }) => setCityId(value)}
                     label='City' placeholder='Select City' options={cities} />
               </FormGroup>

               <FormGroup widths='equal'>
                  <CustomTextArea label='Description' onChange={(e) => setDescription(e.target.value)} />
               </FormGroup>

               <FormGroup widths='equal'>
                  <CustomDropdownInput
                     onChange={(e, { value }) => setWorkTimeId(value)}
                     label='Work Time'
                     placeholder='Select Work Time'
                     options={workTimes}
                  />
                  <CustomDropdownInput
                     onChange={(e, { value }) => setWorkTypeId(value)}
                     label='Work Type' placeholder='Select Work Type' options={workTypes} />
                  <SemanticDatepicker label='Expiration Date' onChange={(e, data) => {
                     setExpirationDate(data.value)
                     let dateString = data.value.getFullYear() + "-" + (data.value.getMonth() + 1) + "-" + data.value.getDate()
                     console.log(dateString)
                     setExpirationDate(dateString)
                  }}></SemanticDatepicker>

               </FormGroup>
               <FormGroup widths='equal'>
                  <CustomInput label='Quota' placeholder='1-5' type='number' />
                  <CustomInput label='Min Salary' placeholder='Minimum Salary' type='text' />
                  <CustomInput label='Max Salary' placeholder='Max Salary' type='text' />


               </FormGroup>
            </Form>
            {/* <Button fluid  >test</Button> */}
         </div>
      </div>
   )
}

export default AddJobAdvertisement
