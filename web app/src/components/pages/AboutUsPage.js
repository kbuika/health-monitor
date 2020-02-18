import React from 'react'
import { Table } from 'react-bootstrap';

function AboutUsPage() {
    return (
        <div className='about-us'>
            <div >
                <h1 className='about-us-title'>About Us </h1>
            </div>
            <div className='about-us-text'>
                <p className='about-us-text-p'>
                Proper health monitor is a patient monitoring device including a medical system interface focuses on monitoring important body vitals of patients suffering from diabetes and hypertension. Important body parameters are measured in real time and in case of variation the system detect early and proper action can be taken, since the system is possible to locate patient, an ambulance with medics is sent on time. This project will help reduce death rates caused by hypertension and diabetes not only in middle- and low-Income countries but worldwide, since the current method used in hospitals is traditional that a patient record the measured parameters and appointment methods is less efficient in monitoring patient in real time. This innovation has potential to address the challenge by monitoring and proper care given to patients. 
                </p>
                <h2 style={{marginTop: '2em'}}>Vision</h2>
                <p style={{fontSize: '1.5em'}}>To provide sustainable and quality healthcare through technology </p>
                <h2 style={{marginTop: '2em'}}>Mission</h2>
                <p style={{fontSize: '1.5em'}}>To partner with private investors, non-profit organization, non-government institution, government institutions relevant health institutions in providing sustainable healthcare</p>
                
                <h2 style={{marginTop: '2em'}}>Our values</h2>
                <h4>Integrity</h4>
                <p style={{fontSize: '1.5em'}}>We uphold the highest standard of integrity in all of our actions</p>
                <h4>Teamwork</h4>
                <p style={{fontSize: '1.5em'}}>We work together to meet the needs of our clients.</p>
                <h4>Community commitment</h4>
                <p style={{fontSize: '1.5em'}}>We develop relationships that make a positive impact in our community and customer</p>
                
                <h2 style={{marginTop: '2em'}}>Our Team</h2>
                <Table responsive style={{marginTop: '1em'}}>
                            <thead>
                                <tr > 
                                
                                <th >Name</th>
                                <th >Role</th>
                                <th >Key skills and experiences they will contribute to making the innovation a success </th>
                                
                                
                                </tr>
                            </thead>
                            
                                <tbody >
                                <tr>
                                
                                <td >Bashir Mohamed</td>
                                <td>Founder</td>
                                <td>Ongoing Bachelor of Technology in Electrical and Electronic engineering</td>
                                </tr>

                                <tr>
                                
                                <td>Zakia Kiptuisang</td>
                                <td>Human Resource Manager</td>
                                <td>Bachelor of science in project planning and management
Ongoing masters in project planning and management</td>
                                </tr> 

                                <tr>
                                <td>Harman Kibue</td>
                                <td>Programmer</td>
                                <td>Bachelor of Science in Electrical Engineering (3 years’ experience in computer programming C++, Python)</td>
                                </tr> 

                                <tr>
                                <td>Meshack Ondora</td>
                                <td>Marketing officer</td>
                                <td>6 years’ experience in marketing field (mequetech company)</td>
                                </tr> 

                                <tr>
                                <td>Salima Faiza</td>
                                <td>Assistant marketing officer</td>
                                <td>Bachelor of commerce (Finance option)
8 years’ experience in commerce sector (Baringo South CDF office)</td>
                                </tr>  
                            </tbody>
                          
                            
                         </Table>

                         <h2 style={{marginTop: '2em'}}>Our Target</h2>
                         <p style={{fontSize: '1.5em'}}>We are looking for funds, donors and to partner with private investor, non-profit organization, non-government institution, government institutions. To accomplish this innovation by starting up and running a business that will impact on lives of people. We target a Startup cost 93,000 USD. In addition, we hope to install the device and system on hospital wards at least 5 hospital and donate 300 gadgets for free to patients 27,000 USD.</p>

                         <h2 style={{marginTop: '2em'}}>Support us</h2>
                         <h3>For Funding and donations:</h3>
                         <p style={{fontSize: '1.3em'}}>Account Name: BASHIR HAMISI MOHAMED</p>
                         <p style={{fontSize: '1.3em'}}>Account Number: 1203731752 (SWIFT CODE: KCBLKENX)</p>

                         <h3 style={{marginTop: '2em'}}>Contact us</h3>
                         <p style={{fontSize: '1.3em'}}>Bashir Hamisi Mohamed</p>
                         <p style={{fontSize: '1.3em'}}>P.O BOX 35-30406,</p>
                         <p style={{fontSize: '1.3em'}}>Kampi ya samaki</p>
                         <p style={{fontSize: '1.3em'}}>Tel: +254757644188, +254708627902</p>
                         <p style={{fontSize: '1.3em'}}>Email: propermonitor@gmail.com</p>
            </div>
        </div>
    )
}

export default AboutUsPage
