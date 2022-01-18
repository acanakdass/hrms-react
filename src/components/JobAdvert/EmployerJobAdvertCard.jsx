import React from 'react'
import { Card, Divider, Header, Icon, Button, ButtonGroup, Accordion } from 'semantic-ui-react';
import "./JobAdvertCard.css"
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import CandidateCard from '../Candidate/CandidateCard';
import ApplicationService from '../../services/applicationService';
import { useHistory } from 'react-router';

function EmployerJobAdvertCard(props) {

   const [isConfirmed, setIsConfirmed] = useState(props.advert.systemEmployeeConfirm.confirmed)
   const [isActive, setIsActive] = useState(props.advert.active)
   const [candidate, setCandidate] = useState()
   const jobAdvertService = new JobAdvertisementService();
   const setActive = (id) => {
      jobAdvertService.setActiveByJobAdvertisementId(id).then((res) => {
         setIsActive(true)
         console.log(res.data)
         toast.success(res.data?.message)
      }).catch(err => {
         toast.error(err)
      })
   }

   const setPassive = (id) => {
      jobAdvertService.setPassiveByJobAdvertisementId(id).then((res) => {
         setIsActive(false)
         console.log(res.data)
         toast.success(res.data?.message)
      }).catch(err => {
         toast.error(err)
      })
   }

   const history = useHistory()


   const handleDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      var date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', options);
   }





   // useEffect(() => {
   //    if (candidate == undefined) {
   //       let applicationService = new ApplicationService();

   //       applicationService.getByAdvertId(props.advert.id).then(res => {
   //          console.log(res.data.data)
   //          setCandidate(res.data.data)
   //       })
   //    }
   //    if (candidate != undefined) {

   //       candidate.map(c => (
   //          console.log(c.candidate)
   //       ))
   //    }
   // }, [candidate])

   // const panels = [
   //    {
   //       key: 'showApplications',
   //       title: {
   //          content: 'Show Applications',
   //          icon: 'question',
   //       },
   //       content: {
   //          content: (
   //             candidate?.map(c => (
   //                <CandidateCard candidate={c.candidate} />
   //             ))
   //          ),
   //       },
   //    }
   // ]




   return (
      <div style={{ width: "100%", marginTop: '2em' }}>
         <Card fluid style={{ padding: '2em 5em 2em 5em' }}>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
               <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <span>
                     {props.advert.employer?.companyName}
                     <div>
                        <Icon name="linkify" />
                        <a href={`https://${props.advert.employer?.webAddress}`} style={{ color: 'gray' }}>{props.advert.employer?.webAddress}</a>
                     </div>
                  </span>
               </div>
               <div style={{ border: '0px solid' }}>
                  <Header as='h2' >
                     {props.advert.jobTitle?.title}
                  </Header>
               </div>

               <div>
                  <span>
                     <Icon name="map marker" />
                     {props.advert.city?.cityName}
                     <div>

                        {handleDate(props.advert.releaseDate)}
                     </div>
                  </span>
               </div>

            </div>
            <Divider />
            <div className="explain-bar">
               <div className="explain-contents">
                  <div className="explain-title">Pozisyon Sayısı</div>
                  <div className="explain-subtitle">{props.advert.quota}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Çalışma Saatleri</div>
                  <div className="explain-subtitle">{props.advert.workTime?.title}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Çalışma Türü</div>
                  <div className="explain-subtitle">{props.advert.workType?.title}</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Maksimum Ücret</div>
                  <div className="explain-subtitle">{props.advert.maxSalary} ₺ / Ay</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Minimum Ücret</div>
                  <div className="explain-subtitle">{props.advert.minSalary} ₺ / Ay</div>
               </div>
               <div className="explain-contents">
                  <div className="explain-title">Son Başvuru Tarihi</div>
                  <div className="explain-subtitle">{handleDate(props.advert?.expirationDate)}</div>
               </div>
            </div>

            <Divider />
            <div>
               <Header as='h3' >
                  İlan Açıklaması
               </Header>
               <span >{props.advert.description}</span>
            </div>

            <br />
            <div>
               <ButtonGroup fluid>
                  <Button onClick={() => history.push("/employer/advert/applications/" + props.advert.id)} color='blue' size='large'>Show applications</Button>
                  {isActive ? (
                     <Button onClick={() => setPassive(props.advert.id)} color='green' size='large'>Set Passive</Button>
                  ) : (
                     <Button onClick={() => setActive(props.advert.id)} color='green' size='large'>Set Active</Button>
                  )}
                  {/* <Button color='red' size='large'>Delete Advert</Button> */}
               </ButtonGroup>
            </div>


            {/* <Accordion defaultActiveIndex={0} panels={panels} /> */}

         </Card>






      </div>
   )
}

export default EmployerJobAdvertCard
