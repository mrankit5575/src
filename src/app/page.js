 import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
 import Services from '@/components/service'
import DoctorsSection from '@/components/DoctorsSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
 function page() {
   return (
     <div>
       <Navbar/>
       <Hero/>
       <WhatsAppButton/>
       <Services/>
       <DoctorsSection/>
       <Footer/>
     </div>
   )
 }
 
 export default page
 