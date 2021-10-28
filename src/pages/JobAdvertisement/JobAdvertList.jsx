import React, { useEffect, useState } from 'react'
import { Pagination } from 'semantic-ui-react';
import JobAdvertCard from '../../components/JobAdvert/JobAdvertCard'
import JobAdvertisementService from '../../services/jobAdvertisementService';

function JobAdvertList() {

   const [jobAdverts, setJobAdverts] = useState([])
   const [pageNo, setPageNo] = useState(1)
   const [pageSize, setPageSize] = useState(3)
   const [allAdvertCount, setAllAdvertCount] = useState(5)

   useEffect(() => {
      let jobAdvertService = new JobAdvertisementService();
      // jobAdvertService.getAllActiveAndConfirmedByPage(pageNo, pageSize).then(res => setJobAdverts(res.data.data));
      jobAdvertService.getAllActiveAndConfirmedByPage(pageNo, pageSize).then(res => setJobAdverts(res.data.data));
   }, [pageNo])

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
            <JobAdvertCard advert={advert} />
         ))}
      </div>
   )
}

export default JobAdvertList
