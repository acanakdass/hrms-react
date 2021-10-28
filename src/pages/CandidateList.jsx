import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

import CandidateService from '../services/candidateService'
import CandidateCard from '../components/Candidate/CandidateCard';

function CandidateList() {

   const [candidates, setCandidates] = useState([])

   useEffect(() => {
      let candidateService = new CandidateService();
      candidateService.getAll()
         .then((result) => setCandidates(result.data.data));
   }, []);

   return (
      <div>
         <Card.Group centered >
            {
               candidates.map((candidate) => (
                  <>
                     <CandidateCard candidate={candidate} />
                  </>
               ))
            }
         </Card.Group>
      </div>
   )
}

export default CandidateList
