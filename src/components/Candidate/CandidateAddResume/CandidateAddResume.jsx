import { Field, FieldArray, Formik } from 'formik'
import React, { useState } from 'react'
import { Form as FormikForm } from 'formik';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';
import { Form, Button, Input, Header, Divider, FormField, FormGroup } from 'semantic-ui-react';
import * as Yup from 'yup';
import HrmsTextArea from '../../../utilities/customFormControls/HrmsTextArea';
import ResumeService from '../../../services/resumeService';
import toast from 'react-hot-toast';


function CandidateAddResume(props) {
   const [isLoading, setIsLoading] = useState(false);



   const handleSubmit = (values) => {
      setIsLoading(true);
      let resume = JSON.stringify(values);
      let resumeService = new ResumeService();
      console.log(resume)
      resumeService.add(resume).then(res => {
         if (res.data.success) {
            toast.success(res.data.message)
            setIsLoading(false);
         } else {
            toast.error(res.data.message);
            setIsLoading(false);
         }
      })
      // resumeService.add()
      // alert(JSON.stringify(values, null, 2));

   }
   const initialValues = {
      candidateId: props.userId,
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
   }

   const schema = Yup.object({
      coverLetter: Yup.string().required("Cover Letter alanı zorunludur"),
   });



   return (
      <div style={{ margin: '2em 5em' }}>
         <div style={{ border: '0,5px solid', borderColor: 'lightgray', padding: '3em' }}>
            <Formik
               initialValues={initialValues}
               // validationSchema={schema}
               onSubmit={(values) => handleSubmit(values)}
               render={({ values }) => (

                  <FormikForm className="ui form">
                     <FormField>

                        <HrmsTextArea label='Cover Letter' name="coverLetter" placeholder='Write a cover letter..' />
                     </FormField>
                     <Form.Group widths="equal">
                        <HrmsTextInput width="8" name="githubAddress" placeholder="Github Address" />
                        <HrmsTextInput width="8" name="linkedinAddress" placeholder="Linkedin Address" />
                     </Form.Group>

                     <div style={{ border: '1px solid', padding: '1em' }}>
                        <Header sub textAlign='center'> Languages</Header>
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

                                                   <Input>
                                                      <Field placeholder='Language Name' name={`languages.${index}.languageName`} />
                                                   </Input>
                                                </FormField>
                                                <FormField width='6'>
                                                   <Input >

                                                      <Field placeholder='Level' control='input' type='number' min={1} max={5} name={`languages.${index}.level`} />
                                                   </Input>
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
                                       {/* show this when user has removed all friends from the list */}
                                       Add a language
                                    </Button>
                                 )}
                              </div>
                           )}
                        />
                     </div>

                     <hr />

                     <div style={{ border: '1px solid', padding: '1em' }}>
                        <Header sub textAlign='center'> Experiences</Header>
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
                                                   <Input>
                                                      <Field placeholder='Company Name' name={`jobExperiences.${index}.company`} />
                                                   </Input>
                                                </FormField>
                                                <FormField>

                                                   <Input>
                                                      <Field placeholder='Position' name={`jobExperiences.${index}.position`} />
                                                   </Input>
                                                </FormField>
                                             </FormGroup>

                                             <FormGroup widths='equal'>
                                                <FormField>

                                                   <Input>
                                                      <Field placeholder='Quit Date' name={`jobExperiences.${index}.quitDate`} />
                                                   </Input>
                                                </FormField>
                                                <FormField>

                                                   <Input>
                                                      <Field placeholder='Start Date' name={`jobExperiences.${index}.startDate`} />
                                                   </Input>
                                                </FormField>
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

                     <hr />

                     <div style={{ border: '1px solid', padding: '1em' }}>
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
                                                <FormField>
                                                   <Input>
                                                      <Field placeholder='School Name' name={`schools.${index}.schoolName`} />
                                                   </Input>
                                                </FormField>
                                                <FormField>
                                                   <Input>
                                                      <Field placeholder='Department' name={`schools.${index}.department`} />
                                                   </Input>
                                                </FormField>
                                             </FormGroup>
                                             <FormGroup widths='equal'>
                                                <FormField>

                                                   <Input>
                                                      <Field placeholder='Start Date' name={`schools.${index}.startedDate`} />
                                                   </Input>
                                                </FormField>
                                                <FormField>

                                                   <Input>
                                                      <Field placeholder='Graduate Date' name={`schools.${index}.graduateDate`} />
                                                   </Input>
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
