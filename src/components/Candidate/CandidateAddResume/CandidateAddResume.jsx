import { Field, FieldArray, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Form as FormikForm } from 'formik';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';
import { Form, Button, Input, Header, Divider, FormField, FormGroup, Select } from 'semantic-ui-react';
import * as Yup from 'yup';
import ResumeService from '../../../services/resumeService';
import toast from 'react-hot-toast';
import CustomTextArea from '../../../utilities/customFormControls/CustomTextArea';
import CandidateService from '../../../services/candidateService';
import { useParams } from 'react-router';


function CandidateAddResume(props) {
   const { id } = useParams();


   const [isLoading, setIsLoading] = useState(false);

   const [initialValues, setInitialValues] = useState({
      candidateId: props.userId ?? id,
      coverLetter: '',
      githubAddress: '',
      linkedinAddress: '',
      jobExperiences: [{
         company: '',
         position: '',
         quitDate: '',
         startDate: ''
      }],
      languages: [{
         languageName: '',
         level: ''
      }],
      skills: [{
         name: '',
      }],
      schools: [{
         department: '',
         finishedDate: '',
         graduateDate: '',
         schoolName: '',
         startedDate: ''
      }]
   });

   useEffect(() => {

      console.log('--------------------');
      console.log(id);
      if (id != undefined) {
         console.log(' id route param is not undefined');
         getResumeByCandidateId(id);
      }
   }, [])

   let candidateService = new CandidateService();
   const getResumeByCandidateId = () => {
      candidateService.getById(id).then(res => {
         console.log(res.data.data?.resume);
         setInitialValues(res.data.data?.resume)
         setInitialValues(prevState => ({
            ...prevState,
            coverLetter: res.data.data?.coverLetter
         }));
      }).catch(er => console.log('er : ' + er))
   }

   const options = [
      { key: '1', text: 'Az', value: 1 },
      { key: '2', text: 'Orta', value: 2 },
      { key: '3', text: '??yi', value: 3 },
      { key: '4', text: '??ok ??yi', value: 4 },
      { key: '5', text: 'M??kemmel', value: 5 },
   ]

   const handleSubmit = (values) => {
      setIsLoading(true);
      let resume = JSON.stringify(values);
      let resumeService = new ResumeService();

      resumeService.add(resume).then(res => {
         if (res.data.success) {
            toast.success(res.data.message)
            setIsLoading(false);
         } else {
            toast.error(res.data.message);
            setIsLoading(false);
         }
         setTimeout(() => {
            setIsLoading(false);
            toast.error('Bir Sorun Olu??tu')
         }, 6000)
      })
      // resumeService.add()
      // alert(JSON.stringify(values, null, 2));

   }


   const schema = Yup.object({
      coverLetter: Yup.string().required("Cover Letter alan?? zorunludur"),
   });



   return (
      <div style={{ margin: '2em 5em' }}>
         <div style={{ border: '0,5px solid', borderColor: 'lightgray', padding: '3em' }}>
            <Formik
               enableReinitialize
               initialValues={initialValues}
               // validationSchema={schema}
               onSubmit={(values) => handleSubmit(values)}
               render={({ values }) => (

                  <FormikForm className="ui form">
                     <FormField>
                        <CustomTextArea label='Cover Letter' value={initialValues.coverLetter} name="coverLetter" placeholder='Write a cover letter..' />
                     </FormField>
                     <Form.Group widths="equal">

                        <HrmsTextInput label='Github Kullan??c?? Ad??' width="8" name="githubAddress" placeholder="Github Address" />
                        <HrmsTextInput label='Linkedin Kullan??c?? Ad??' width="8" name="linkedinAddress" placeholder="Linkedin Address" />
                     </Form.Group>

                     <div >
                        <Header sub textAlign='center'> Diller</Header>
                        <Divider />
                        <FieldArray
                           name="languages"
                           render={arrayHelpers => (
                              <div>
                                 {values.languages && values.languages.length > 0 ? (
                                    values.languages.map((language, index) => (
                                       <>
                                          <div key={index}>
                                             <FormGroup >
                                                <FormField width='10'>
                                                   <label>Dil Ad??</label>
                                                   <Field placeholder='Language Name' name={`languages.${index}.languageName`} />
                                                </FormField>
                                                <FormField width='6'>
                                                   <label>Seviye</label>
                                                   {/* <FormField  placeholder='Level' control={Select} options={options} name={`languages.${index}.level`} /> */}
                                                   <Field placeholder='1-5' control='input' type='number' min={1} max={5} name={`languages.${index}.level`} />
                                                </FormField>
                                             </FormGroup>
                                             <FormGroup widths='equal'>
                                                <FormField>
                                                   <Button fluid type="button" onClick={() => arrayHelpers.remove(index)}>
                                                      -
                                                   </Button>
                                                </FormField>
                                                <FormField>
                                                   <Button fluid
                                                      type="button"
                                                      onClick={() => arrayHelpers.insert(index, '')}>
                                                      +
                                                   </Button>
                                                </FormField>
                                             </FormGroup>
                                          </div>
                                          <br />
                                       </>))
                                 ) : (
                                    <Button type="button" onClick={() => arrayHelpers.push('')}>
                                       Add a language
                                    </Button>
                                 )}
                              </div>
                           )}
                        />
                     </div>

                     <br />
                     <hr />
                     <br /><br />

                     <div >
                        <Header sub textAlign='center'> ???? Deneyimleri</Header>
                        <Divider />
                        <FieldArray
                           name="jobExperiences"
                           render={arrayHelpers => (
                              <div>
                                 {values.jobExperiences && values.jobExperiences.length > 0 ? (
                                    values.jobExperiences.map((experience, index) => (
                                       <>
                                          <div key={index}>
                                             <FormGroup widths='equal'>
                                                <FormField>
                                                   <HrmsTextInput label='??irket/????yeri Ad??' placeholder='Company Name' name={`jobExperiences.${index}.company`} />
                                                </FormField>
                                                <FormField>

                                                   <HrmsTextInput label='Pozisyon' placeholder='Position' name={`jobExperiences.${index}.position`} />
                                                </FormField>
                                             </FormGroup>

                                             <FormGroup widths='equal'>
                                                <HrmsTextInput label='Ba??lang???? Tarihi' name={`jobExperiences.${index}.startDate`} placeholder='YYYY-MM-DD' />
                                                <HrmsTextInput label='Biti?? Tarihi' name={`jobExperiences.${index}.quitDate`} placeholder='YYYY-MM-DD' start='1' end='7' />

                                             </FormGroup>

                                             <br />
                                             <FormGroup widths='equal'>
                                                <FormField>
                                                   <Button fluid type="button" onClick={() => arrayHelpers.remove(index)}>
                                                      -
                                                   </Button>
                                                </FormField>
                                                <FormField>
                                                   <Button fluid
                                                      type="button"
                                                      onClick={() => arrayHelpers.insert(index, '')}>
                                                      +
                                                   </Button>
                                                </FormField>
                                             </FormGroup>
                                          </div>
                                          <br />
                                       </>))
                                 ) : (
                                    <Button type="button" onClick={() => arrayHelpers.push('')}>
                                       Add a language
                                    </Button>
                                 )}
                              </div>
                           )}
                        />
                     </div>

                     <br />
                     <hr />
                     <br /><br />

                     <div>
                        <Header sub textAlign='center'> Schools</Header>
                        <Divider />
                        <FieldArray
                           name="schools"
                           render={arrayHelpers => (
                              <div>
                                 {values.schools && values.schools.length > 0 ? (
                                    values.schools.map((school, index) => (
                                       <>
                                          <div key={index}>
                                             <FormGroup widths='equal'>
                                                <FormField >
                                                   <label>Okul Ad??</label>
                                                   <Field label='startDate' placeholder='School Name' name={`schools.${index}.schoolName`} />

                                                </FormField>
                                                <FormField>
                                                   <label>B??l??m</label>
                                                   <Field placeholder='Department' name={`schools.${index}.department`} />

                                                </FormField>
                                             </FormGroup>
                                             <FormGroup widths='equal'>
                                                <HrmsTextInput label='Ba??lang???? Tarihi' name={`schools.${index}.startedDate`} placeholder='YYYY-MM-DD' start='1' end='7' />
                                                <HrmsTextInput label='Biti?? Tarihi' name={`schools.${index}.graduateDate`} placeholder='YYYY-MM-DD' start='1' end='7' />
                                                {/* <Field label='Ba??lang???? Tarihi' name={`schools.${index}.startedDate`} control={SemanticDatepicker} start='1' end='7' />
                                                <Field label='Biti?? Tarihi' name={`schools.${index}.graduateDate`} control={SemanticDatepicker} start='1' end='7' /> */}

                                             </FormGroup>
                                             <FormGroup widths='equal'>
                                                <FormField>
                                                   <Button fluid type="button" onClick={() => arrayHelpers.remove(index)}>
                                                      -
                                                   </Button>
                                                </FormField>
                                                <FormField>
                                                   <Button fluid
                                                      type="button"
                                                      onClick={() => arrayHelpers.insert(index, '')}>
                                                      +
                                                   </Button>
                                                </FormField>
                                             </FormGroup>
                                          </div>
                                          <br />
                                       </>))
                                 ) : (
                                    <Button type="button" onClick={() => arrayHelpers.push('')}>
                                       Add a language
                                    </Button>
                                 )}
                              </div>
                           )}
                        />
                     </div>

                     <br />
                     <hr />
                     <br /><br />

                     <div>
                        <Header sub textAlign='center'> Yetenekler</Header>
                        <Divider />
                        <FieldArray
                           name="skills"
                           render={arrayHelpers => (
                              <div>
                                 {values.skills && values.skills.length > 0 ? (
                                    values.skills.map((skill, index) => (
                                       <>
                                          <div key={index}>
                                             <FormGroup >
                                                <FormField width='16'>
                                                   <label>Yetenek Ad??</label>
                                                   <Field placeholder='Skill Name' name={`skills.${index}.name`} />

                                                </FormField>
                                             </FormGroup>
                                             <FormGroup widths='equal'>
                                                <FormField>
                                                   <Button fluid type="button" onClick={() => arrayHelpers.remove(index)}>
                                                      -
                                                   </Button>
                                                </FormField>
                                                <FormField>
                                                   <Button fluid
                                                      type="button"
                                                      onClick={() => arrayHelpers.insert(index, '')}>
                                                      +
                                                   </Button>
                                                </FormField>
                                             </FormGroup>
                                          </div>
                                          <br />
                                       </>))
                                 ) : (
                                    <Button type="button" onClick={() => arrayHelpers.push('')}>
                                       Add a skill
                                    </Button>
                                 )}
                              </div>
                           )}
                        />
                     </div>
                     <br />
                     <Button fluid loading={isLoading} color="blue" type="submit">Sonraki</Button>
                  </FormikForm>
                  // </Formik>
               )} />
            {/* <Button fluid  >test</Button> */}
         </div>
      </div>
   )
}

export default CandidateAddResume
