import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import CandidateService from '../../services/candidateService'
import { Card, Container, Grid, Image } from 'semantic-ui-react';
import Schools from '../../components/Resume/Schools';
import GeneralInfos from '../../components/Resume/GeneralInfos';
import Languages from '../../components/Resume/Languages';
import JobExperience from '../../components/Resume/JobExperience';
import Skills from '../../components/Resume/Skills';

function CandidateDetail() {

   let { id } = useParams();
   const [candidate, setCandidate] = useState([]);
   useEffect(() => {
      let candidateService = new CandidateService();
      candidateService.getById(id).then(res => setCandidate(res.data.data));

   }, [])
   return (
      <div style={{ margin: '2em' }}>
         <Card fluid style={{ padding: '5em 15em 5em 15em' }}>
            <Grid>
               <Grid.Row>
                  <Grid.Column textAlign='right' width={8}>
                     <Image centered src={candidate.photoUrl} size='small' wrapped />
                  </Grid.Column>
                  <Grid.Column textAlign='left' verticalAlign='middle' width={8}>
                     <GeneralInfos candidate={candidate} />
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                  <Container text textAlign='justified'>
                     <span style={{ textAlign: 'center' }}>{candidate.resume?.coverLetter}</span>
                  </Container>
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column width={8}>
                     <JobExperience jobExperiences={candidate?.resume?.jobExperiences} />
                  </Grid.Column>

                  <Grid.Column width={8}>
                     <Schools schools={candidate?.resume?.schools} />
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column width={8}>
                     <Skills skills={candidate?.resume?.skills} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <Languages languages={candidate?.resume?.languages} />
                  </Grid.Column>
               </Grid.Row>
            </Grid>
         </Card>
      </div>
   )
}

export default CandidateDetail
