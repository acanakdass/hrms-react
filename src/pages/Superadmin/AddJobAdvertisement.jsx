
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Form, Button, FormGroup, Header, Divider } from 'semantic-ui-react';
import JobTitleService from '../../services/jobTitleService';
import CityService from '../../services/cityService';
import CustomTextArea from '../../utilities/customFormControls/CustomTextArea';
import CustomDropdownInput from '../../utilities/customFormControls/HrmsSelectInput';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import AuthService from '../../services/authService';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import CustomInput from '../../utilities/customFormControls/CustomInput';

const AddJobAdvertisement = () => {

   const [isLoading, setIsLoading] = useState(false);


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


   const handleSubmit = () => {
      var formData = {
         jobTitleId,
         description,
         employerId,
         maxSalary: parseInt(maxSalary),
         minSalary: parseInt(minSalary),
         quota: parseInt(quota),
         workTimeId,
         workTypeId,
         cityId,
         expirationDate
      }
      console.log(formData)
      setIsLoading(true);

      jobAdvertService.add(formData).then(res => {
         if (res.data.success) {
            toast.success(res.data.message);
            // setAddedUserId(res.data.data);
            console.log(res.data)
            setIsLoading(false);
            // props.setstep('photo');
            // props.setAddedUser(res.data.data)
         } else {
            toast.error(res.data.message)
            setIsLoading(false)
         }
      }).finally(() => {
         setIsLoading(false)
      });

   }
   return (
      <div style={{ margin: '2em 10em' }}>
         <div style={{ border: '0,5px solid', borderColor: 'lightgray', padding: '3em' }}>
            <Header size='large' textAlign='center'>Create Job Advert</Header>
            <Divider />
            <br />

            <Form onSubmit={() => handleSubmit()}>
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
                     setExpirationDate(data.value?.toISOString().slice(0, 10))
                  }}></SemanticDatepicker>

               </FormGroup>
               <FormGroup widths='equal'>
                  <CustomInput onChange={(e) => setQuota(e.target.value)} label='Quota' placeholder='1-5' type='number' />
                  <CustomInput onChange={(e) => setMinSalary(e.target.value)} label='Min Salary' placeholder='Minimum Salary' type='text' />
                  <CustomInput onChange={(e) => setMaxSalary(e.target.value)} label='Max Salary' placeholder='Max Salary' type='text' />
               </FormGroup>
               <Button loading={isLoading} fluid color='blue'>Create Job Advertisement</Button>
            </Form>
            {/* <Button fluid  >test</Button> */}
         </div>
      </div>
   )
}

export default AddJobAdvertisement
