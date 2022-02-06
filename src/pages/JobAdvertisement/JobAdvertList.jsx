import React, { useEffect, useState } from 'react'
import { Pagination } from 'semantic-ui-react';
import JobAdvertCard from '../../components/JobAdvert/JobAdvertCard'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import AuthService from '../../services/authService';
import ApplicationService from '../../services/applicationService';
import toast from 'react-hot-toast';

function JobAdvertList() {

   const [jobAdverts, setJobAdverts] = useState([])
   const [pageNo, setPageNo] = useState(1)
   const [pageSize, setPageSize] = useState(3)
   const [allAdvertCount, setAllAdvertCount] = useState()

   const [currentUserId, setCurrentUserId] = useState()


   const jobAdvertService = new JobAdvertisementService();
   const authService = new AuthService()
   const applicationService = new ApplicationService();

   useEffect(() => {
      jobAdvertService.getAllActiveAndConfirmedSize().then(res => {
         setAllAdvertCount(res.data.data)
      }).catch(err => {
         console.log(err)
      })



      let token = localStorage.getItem('bearer')
      if (token != undefined) {
         authService.getUserByToken(token).then(res => {
            setCurrentUserId(res.data.data.id)
         }).catch(er => {
            console.log(er)
         })
      }



   }, [])
   useEffect(() => {

      // jobAdvertService.getAllActiveAndConfirmedByPage(pageNo, pageSize).then(res => setJobAdverts(res.data.data));
      jobAdvertService.getAllActiveAndConfirmedByPage(pageNo, pageSize).then(res => {
         setJobAdverts(res.data.data)
      });
   }, [pageNo])

   const applyToAdvert = (advertId) => {
      applicationService.add(advertId, currentUserId).then(res => {
         if (res.data.success) {
            toast.success(res.data.message);
         } else {
            toast.error(res.data.message)
         }
      }).catch(err => {
         console.log(err);
         toast.error(err);
      })
   }





   const paginationComponent = () => {
      return (
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
            <Pagination
               ellipsisItem={null}
               onPageChange={(e, data) => setPageNo(data.activePage)}
               firstItem={null}
               defaultActivePage={pageNo}
               lastItem={null}
               activePage={pageNo}
               pointing
               secondary
               totalPages={(allAdvertCount % pageSize + 1)}
            />
         </div>
      )
   }



   return (
      <div style={{ padding: '2em' }}>
         {paginationComponent()}

         {jobAdverts.map((advert) => (
            <JobAdvertCard applyToAdvert={applyToAdvert} advert={advert} />
         ))}
         {paginationComponent()}
      </div>
   )
}

export default JobAdvertList
