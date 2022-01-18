import React, { useEffect, useState } from 'react'
import { Pagination } from 'semantic-ui-react';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import AuthService from '../../services/authService';
import EmployerJobAdvertCard from '../JobAdvert/EmployerJobAdvertCard';

function MyJobAdvertsList() {

   const [jobAdverts, setJobAdverts] = useState([])
   const [pageNo, setPageNo] = useState(1)
   const [pageSize, setPageSize] = useState(3)
   const [allAdvertCount, setAllAdvertCount] = useState(5)
   const [currentUserId, setCurrentUserId] = useState(null)

   const authService = new AuthService()

   useEffect(() => {
      let jobAdvertService = new JobAdvertisementService();
      // jobAdvertService.getAllActiveAndConfirmedByPage(pageNo, pageSize).then(res => setJobAdverts(res.data.data));
      jobAdvertService.getAllByEmployerId(currentUserId).then(res => {
         setJobAdverts(res.data.data)
         console.log(res.data)
      }).catch(er => {

         console.log("er")
         console.log(er)
         console.log(currentUserId)
      });
      console.log(jobAdverts)
   }, [pageNo, currentUserId])

   useEffect(() => {
      let token = localStorage.getItem('bearer')
      if (token != undefined) {
         authService.getUserByToken(token).then(res => {
            console.log(res.data)
            setCurrentUserId(res.data.data.id)
         }).catch(er => {
            console.log(er)
         })
      }
   }, [])

   return (
      <div style={{ padding: '3em 10em 3em 10em' }}>
         <Pagination
            onPageChange={(e, data) => setPageNo(data.activePage)}
            defaultActivePage={pageNo}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={20}
         />
         {jobAdverts.map((advert) => (
            <EmployerJobAdvertCard userId={currentUserId} advert={advert} />
         ))}
      </div>
   )
}

export default MyJobAdvertsList
